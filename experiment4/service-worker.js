var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/assets/step1/juice/0Asset 1.svg',
    '/assets/step1/juice/1Asset 1.svg',
    '/assets/step1/juice/2Asset 1.svg',
    '/assets/step1/juice/3Asset 1.svg',
    '/assets/step1/juice/4Asset 1.svg',
    '/assets/step1/juice/5Asset 1.svg',
    '/assets/step1/juice/6Asset 1.svg',
    '/assets/step1/juice/7Asset 1.svg',
    '/assets/step1/juice/8Asset 1.svg',
    '/assets/step1/juice/9Asset 1.svg',
    '/assets/step1/juice/10Asset 1.svg',
    '/assets/step1/juice/11Asset 1.svg',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});