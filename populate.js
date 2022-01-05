require('dotenv').config();

const connectDB = require('./db/connect');
const Invoice = require('./models/Invoice');

const jsonInvoices = require('./data.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Invoice.deleteMany();
    await Invoice.create(jsonInvoices);
    console.log('Sucsess!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
