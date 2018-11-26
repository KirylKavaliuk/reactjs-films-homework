module.exports = () => {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href=${process.env.NODE_ENV === 'production' ? "/css/styles.css" : ''}>
    </head>
    <body>
      
      <section id="root"></section>
      <script src="/js/client.js"></script>
    </body>
  </html>
`
}
