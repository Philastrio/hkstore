self.addEventListener('install', event => {
  const offlinePage = new Request('/');
  event.waitUntil(
    fetch(offlinePage).then(response => {
      return caches.open('hkstore').then(cache => {
        return cache.put(offlinePage, response);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(error => {
      return caches.open('hkstore').then(cache => cache.match('/'));
    })
  );
});

self.addEventListener('push', event => {
  console.log(event);
});
