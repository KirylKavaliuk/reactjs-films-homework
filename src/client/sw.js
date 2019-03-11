this.addEventListener('install', (event) => {
  const pathes = [
    '/',
    '/css/styles.css',
    '/js/client.js',
    '/images/picture.png',
    '/fonts/Roboto-Regular/Roboto-Regular.woff',
    '/fonts/Roboto-Medium/Roboto-Medium.ttf',
    '/fonts/Roboto-Bold/Roboto-Bold.ttf',
  ];

  event.waitUntil(
    caches
      .open('v1')
      .then(cache => (
        cache.addAll(pathes.map(path => `https://beback95-react-films-homework.herokuapp.com${path}`))
      )),
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      }),
  );
});

/*
self.addEventListener('activate', function(event) {
console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});
*/
