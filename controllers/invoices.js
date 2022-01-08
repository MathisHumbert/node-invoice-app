const Invoice = require('../models/Invoice');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllInvoices = async (req, res) => {
  // createdBy
  const invoices = await Invoice.find({});
  res.status(StatusCodes.OK).json(invoices);
};

const getInvoice = async (req, res) => {
  const invoiceID = req.params.id;

  // createdBy
  const invoice = await Invoice.findOne({ _id: invoiceID });
  invoice.__v = undefined;

  if (!invoice) {
    throw new NotFoundError(`No invoice with the id ${invoiceID}`);
  }
  res.status(StatusCodes.OK).json(invoice);
};

const createInvoice = async (req, res) => {
  // createdBy
  const invoice = await Invoice.create(req.body);
  res.status(StatusCodes.CREATED).json(invoice);
};

const updateInvoice = async (req, res) => {
  // createdBy
  const invoiceID = req.params.id;
  const invoice = await Invoice.findOneAndUpdate({ _id: invoiceID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!invoice) {
    throw new NotFoundError(`No invoice with the id ${invoiceID}`);
  }
  res.status(StatusCodes.OK).json(invoice);
};

const deleteInvoice = async (req, res) => {
  // createdBy
  const invoiceID = req.params.id;
  const invoice = await Invoice.findByIdAndRemove({ _id: invoiceID });
  if (!invoice) {
    throw new NotFoundError(`No invoice with id ${invoiceID}`);
  }
  res.status(StatusCodes.OK).send('Invoice removed');
};

module.exports = {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
