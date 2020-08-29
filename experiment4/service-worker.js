var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    'assets/step1/juice/0.svg',
    'assets/step1/juice/1.svg',
    'assets/step1/juice/2.svg',
    'assets/step1/juice/3.svg',
    'assets/step1/juice/4.svg',
    'assets/step1/juice/5.svg',
    'assets/step1/juice/6.svg',
    'assets/step1/juice/7.svg',
    'assets/step1/juice/8.svg',
    'assets/step1/juice/9.svg',
    'assets/step1/juice/10.svg',
    'assets/step1/juice/11.svg',
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