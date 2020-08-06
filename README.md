# hackathon-2020

A little dabbling with [Deno](https://deno.land/), the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and [CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage).

## Deno

To install deno on Linux:
`curl -fsSL https://deno.land/x/install/install.sh | sh`

To install a deno based HTTP-server:
`deno install --allow-net --allow-read https://deno.land/std@0.63.0/http/file_server.ts`

The `install` subcommand creates a thin wrapper-script around a call to the given script with the provided permissions (`--allow-net` for network-access and `allow-read` for read-access to the file-system).

To then expose a directory via HTTP:
`file_server . --port <PORT>`

## Service Worker API

For the most part a service worker is a proxy between a web-app running in a browser and the network. 
It can intercept and change requests and responses, thereby facilitating offline caching of assets.

It's only available in "secure contexts" like HTTPS and localhost.

It runs in a "ServiceWorkerGlobalScope" that is parallel to the browser's main-thread. Therefore it has no direct access to the DOM and some other web APIs (eg localStorage).

## CacheStorage

The `CacheStorage` (`window.caches`) represents a container for named cache objects.

A cache object is a map of requests- and response-objects.

The caches API is completely asynchronous and can be used in a service worker.

Caches are versioned via string-identifiers, need to be updated manually and should be cleared strategically.