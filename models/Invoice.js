const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  createdAt: {
    type: String,
  },
  paymentDue: {
    type: String,
  },
  description: {
    type: String,
  },
  paymentTerms: {
    type: Number,
  },
  clientName: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
  status: {
    type: String,
  },
  senderAddress: {
    type: Object,
  },
  clientAddress: {
    type: Object,
  },
  items: {
    type: Array,
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
