this.addEventListener('install', (event) => {
  const pathes = [
    '/',
    '/css/styles.css',
    '/js/client.js',
    '/assets/images/picture.png',
    '/assets/fonts/Roboto-Regular.woff',
    '/assets/fonts/Roboto-Medium.ttf',
    '/assets/fonts/Roboto-Bold.ttf',
    '/assets/manifest/manifest.json',
    '/assets/favicon/favicon.ico',
    '/sw.js',
  ];

  event.waitUntil(
    caches
      .open('v1')
      .then(cache => (
        cache.addAll(pathes)
      )),
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => (
        response || fetch(event.request)
      )),
  );
});

this.addEventListener('activate', event => (
  this.clients.claim()
));

/*
self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});
*/
