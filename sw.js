'use strict';
const RELEASE=2,CACHE='fieldkit-shell-v'+RELEASE;
const SHELL=['/','/index.html','/styles.css','/version.js','/app.js','/manifest.webmanifest','/icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('fieldkit-shell-v')&&key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE')self.skipWaiting()});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!SHELL.includes(url.pathname))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);return await cache.match(url.pathname)||fetch(event.request)})())});
