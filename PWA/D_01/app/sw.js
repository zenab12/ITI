console.log(this);
const filesToCache = [
  "index.html",
  "/js/main.js",
  "/styles/index.css",
  "/pages/offline.html",
  "/pages/404.html",
];

const staticCacheName = "pages";

self.addEventListener("install", (event) => {
  console.log("installing.......");
  // self.skipWaiting()
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating.............");
});

self.addEventListener("fetch", (event) => {
  console.log("fetching : ", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("Found : ", event.request.url, " in cache");
          return response;
        } else {
          console.log("network request : ", event.request);
          return fetch(event.request).then((response) => {
            return (
              caches
                .open(staticCacheName)
                .then((cache) => {
                  cache.put(event.request.url, response.clone());
                  console.log(response);
                  return response;
                })
                //error 404
                .catch((err) => {
                  if (response.status === 404) {
                    console.log("error : ", err);
                    return window.location.replace(
                      "http://127.0.0.1:5501/pages/404.html"
                    );
                  }
                })
            );
          });
        }
      })
      .catch((err) => {
        console.log("error : ", err);
        return caches.match("/pages/offline.html");
      })
  );
});
