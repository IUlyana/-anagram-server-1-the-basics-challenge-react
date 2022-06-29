require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const wordsRoutes = require('./routes/words.routes');

const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/words', wordsRoutes);

app.listen(PORT, async () => {
  console.log(`server started on PORT: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База данных работает');
  } catch (error) {
    console.log(error.message);
  }
});
