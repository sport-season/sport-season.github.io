'use strict';
const CACHE_STATIC = 'static-cache-v4';

function hndlEventInstall(evt) {
    /**
     * @returns {Promise<void>}
     */
    async function cacheStaticFiles() {
        const files = [
            './',
            './manifest.json',
            './stravastat.png',
            './index.html',
            './sw.js',
        ];
        const cacheStat = await caches.open(CACHE_STATIC);
        await Promise.all(
            files.map(function (url) {
                return cacheStat.add(url).catch(function (reason) {
                    console.log(`'${url}' failed: ${String(reason)}`);
                });
            })
        );
    }

    //  wait until all static files will be cached
    evt.waitUntil(cacheStaticFiles());
}

function hndlEventFetch(evt) {
    async function getFromCache() {
        const cache = await self.caches.open(CACHE_STATIC);
        const cachedResponse = await cache.match(evt.request);
        if (cachedResponse) {
            return cachedResponse;
        }
        // wait until resource will be fetched from server and stored in cache
        const resp = await fetch(evt.request);
        // await cache.put(evt.request, resp.clone());
        return resp;
    }

    evt.respondWith(getFromCache());
}

self.addEventListener('install', hndlEventInstall);
self.addEventListener('fetch', hndlEventFetch);
self.addEventListener('push', function(e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'stravastat.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Explore this new world',
                icon: 'stravastat.png'},
            {action: 'close', title: 'Close',
                icon: 'stravastat.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
