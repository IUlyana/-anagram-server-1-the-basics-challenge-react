const wordsRoutes = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Words = require('../views/Words');
const { Word } = require('../db/models');

wordsRoutes.post('/', (req, res) => {
  const wordInput = req.body.word;
  res.redirect(`/words/${wordInput}`);
});

wordsRoutes.get('/:word', async (req, res) => {
  try {
    const { word } = req.params;
    const keySort = word.split('').sort().join('');
    const words = await Word.findAll({ raw: true });
    console.log(words);
    const result = words.filter((slovo) => {
      if (keySort === slovo.name.split('').sort().join('')) {
        return slovo;
      }
    });

    // console.log(result);

    const wordlist = React.createElement(Words, { word, title: 'Express', result });
    const html = ReactDOMServer.renderToStaticMarkup(wordlist);
    res.write('<!doctype html>');
    res.end(html);
    // console.log(keySort);
    // console.log(keySort);
  } catch (error) {
    res.status('500').send('Database failure');
  }
});

module.exports = wordsRoutes;
