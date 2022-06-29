const React = require('react');
const Layout = require('./Layout');

module.exports = function Words({ word, title, result }) {
  return (
    <Layout title={title}>
      <main className="container">
        <div>
          <h1>
            { word }
          </h1>
          <ul>
            {
          result.map((el) => (<li key={el.id} id={el.id}> { el.name } </li>))
        }
          </ul>
        </div>
        <div>
          <form action="/words" method="post">
            <input type="text" name="word" />
            <input type="submit" value="Get Anagrams!" />
          </form>
        </div>
      </main>
    </Layout>
  );
};
