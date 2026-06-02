const CACHE_NAME = 'cyber-debate-v1';

// Install the service worker
self.addEventListener('install', event => {
  console.log('Service Worker installed.');
  self.skipWaiting();
});

// Activate the service worker
self.addEventListener('activate', event => {
  console.log('Service Worker activated.');
  return self.clients.claim();
});

// Intercept network requests
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        'You are currently offline. Please reconnect to the internet to continue the debate.',
        { headers: { 'Content-Type': 'text/plain' } }
      );
    })
  );
});