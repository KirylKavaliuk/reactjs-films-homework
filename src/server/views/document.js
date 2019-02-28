const { NODE_ENV } = process.env;

module.exports = () => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>FILMS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${NODE_ENV === 'production' ? '<link rel="stylesheet" href= "/css/styles.css">' : ''}
      <link rel="manifest" href="/manifest.json">
      <meta name="theme-color" content="#ffffff">
    </head>
    <body>
      <section id="root"></section>
      <section id="dialog"></section>
      <section id="notification"></section>
      <script src=${NODE_ENV === 'production' ? '/js/client.js' : '/js/client.js'}></script>
      <noscript>JavaScript is not available. Please turn on JavaScript in settings.</noscript>
    </body>
  </html>
`;
