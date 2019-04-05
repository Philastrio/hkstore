self.addEventListener('install');

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => console.log('Sorry we are offline'))
  );
});
