self.addEventListener('install', install);
self.addEventListener('fetch', fetchTrap);

// this caches all requested files, for offline use
function fetchTrap(event) {
    console.log(event.request.url);
    // if there's a match in the cache, it's returned,
    // else it's fetched, cached and returned
    event.respondWith(
        (async () => {
            let response = await caches.match(event.request);
            if (response) return response;
            response = await fetch(event.request);
            const cache = await caches.open('v1');
            cache.put(event.request, response.clone());
            return response;
        })()
    );
}

// define what files to cache on install (kinda pointless w our fetchTrap).
// install-event is fired when this sw is from the one installed in the requesting browser
function install(event) {
    console.log('installing...');
    event.waitUntil((async () => {
        const cache = await caches.open('v1');
        return cache.addAll(['/index.css']);
    })());
}