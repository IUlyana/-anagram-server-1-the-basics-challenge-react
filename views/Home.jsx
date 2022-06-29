const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>Welcome to {title}</p>
      <form action="/words" method="post">
        <input type="text" name="word" />
        <input type="submit" value="Get Anagrams!" />
      </form>
    </Layout>
  );
};
