const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).send('Hello World! 👋');
});

app.get('/todos', (req, res) => {
  const todos = ['read book', 'wash dishes', 'workout'];
  res.send(JSON.stringify(todos));
});

app.get('/about', (req, res) => {
  // res.send('<h1>Hello as html!</h1>');
  res.render('about');
});

app.get('/hello', (req, res) => {
  // res.send('<h1>Hello as html!</h1>');
  console.log(req.query);

  const { name } = req.query;
  res.status(201).render('hello', { name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
