const { NODE_ENV } = process.env;

module.exports = () => `
  <!doctype html>
  <html lang="en-us">
    <head>
      <meta charset="utf-8"/>
      <title>FILMS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${NODE_ENV === 'production' ? '<link rel="stylesheet" href= "/css/styles.css">' : ''}
      ${NODE_ENV === 'production' ? '<link rel="manifest" href="/manifest/manifest.json">' : ''}
      <link rel="stylesheet" href= "/css/styles.css">
      <link rel="shortcut icon" href="/${NODE_ENV === 'production' ? 'favicon' : 'images'}/favicon.ico" type="image/x-icon">
      <meta name="theme-color" content="#ffffff">
      <meta name="description" content="react-films-homework">
    </head>
    <body>
      <main>
        <section id="root"></section>
      </main>
      <section id="dialog"></section>
      <section id="notification"></section>
      <script src=${NODE_ENV === 'production' ? '/js/client.js' : '/client.js'}></script>
      <noscript>JavaScript is not available. Please turn on JavaScript in settings.</noscript>
    </body>
  </html>
`;
