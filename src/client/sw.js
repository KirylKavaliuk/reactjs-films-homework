
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('v1')
      .then(cache => (
        cache.addAll([
          '/',
          '/css/styles.css',
          '/js/client.js',
          '/images/picture.png',
          'src/assets/fonts/Roboto-Regular/Roboto-Regular.woff',
          'src/assets/fonts/Roboto-Medium/Roboto-Medium.ttf',
          'src/assets/fonts/Roboto-Bold/Roboto-Bold.ttf',
          'https://image.tmdb.org/t/p/w1280/d1hQaeKeAW3FBc3v6tIP5utleU0.jpg',
        ])
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
