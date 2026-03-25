// This is the Service Worker "Engine" for EbuCare
self.addEventListener('install', (e) => {
  console.log('EbuCare Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('EbuCare Service Worker Active');
});

self.addEventListener('fetch', (e) => {
  // Required for Chrome's "Install" prompt to fire
  e.respondWith(fetch(e.request));
});