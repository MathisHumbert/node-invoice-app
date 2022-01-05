const getAllInvoices = async (req, res) => {
  res.send('get all invoices');
};

const getInvoice = async (req, res) => {
  res.send('get invoice');
};

const createInvoice = async (req, res) => {
  res.send('create invoice');
};

const updateInvoice = async (req, res) => {
  res.send('update invoice');
};

const deleteInvoice = async (req, res) => {
  res.send('delete invoice');
};

module.exports = {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
