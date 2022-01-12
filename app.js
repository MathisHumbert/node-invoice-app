require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const helmet = require('helmet');
const xss = required('xss-clean');
const mongoSanitize = required('express-mongo-sanitize');

const connectDB = require('./db/connect');

// routers
const invoicesRouter = require('./routes/invoices');
const authRouter = require('./routes/auth');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// routes
app.use('/api/v1/invoices', authenticateUser, invoicesRouter);
app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
