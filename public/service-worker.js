const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/src/main.jsx",
  "/src/assets/logos/rundev-logo-in-brackets.svg",
  "/src/assets/images/rune-social-pic.png",
  "/src/assets/images/rune-skills-pic.png",
  // Add all other assets and images paths here
  // Game Hub images
  "/src/assets/images/gamehub/gamehub-1.jpg",
  "/src/assets/images/gamehub/gamehub-2.jpg",
  "/src/assets/images/gamehub/gamehub-3.jpg",
  "/src/assets/images/gamehub/gamehub-4.jpg",
  "/src/assets/images/gamehub/gamehub-5.jpg",
  "/src/assets/images/gamehub/gamehub-6.jpg",
  "/src/assets/images/gamehub/gamehub-7.jpg",
  "/src/assets/images/gamehub/gamehub-8.jpg",
  "/src/assets/images/gamehub/gamehub-9.jpg",
  "/src/assets/images/gamehub/gamehub-10.jpg",
  // CSM images
  "/src/assets/images/csm/cms-1.jpg",
  "/src/assets/images/csm/cms-2.jpg",
  "/src/assets/images/csm/cms-3.jpg",
  "/src/assets/images/csm/cms-4.jpg",
  "/src/assets/images/csm/cms-5.jpg",
  "/src/assets/images/csm/cms-6.jpg",
  "/src/assets/images/csm/cms-7.jpg",
  "/src/assets/images/csm/cms-8.jpg",
  "/src/assets/images/csm/cms-9.jpg",
  // Chef's Table images
  "/src/assets/images/chefs-table/ct-1.jpg",
  "/src/assets/images/chefs-table/ct-2.jpg",
  "/src/assets/images/chefs-table/ct-3.jpg",
  "/src/assets/images/chefs-table/ct-4.jpg",
  "/src/assets/images/chefs-table/ct-5.jpg",
  "/src/assets/images/chefs-table/ct-6.jpg",
  "/src/assets/images/chefs-table/ct-7.jpg",
  "/src/assets/images/chefs-table/ct-8.jpg",
  // movieTALK images
  "/src/assets/images/movietalk/mt-1.png",
  "/src/assets/images/movietalk/mt-2.png",
  "/src/assets/images/movietalk/mt-3.png",
  "/src/assets/images/movietalk/mt-4.png",
  "/src/assets/images/movietalk/mt-5.png",
  "/src/assets/images/movietalk/mt-6.png",
  "/src/assets/images/movietalk/mt-7.png",
  "/src/assets/images/movietalk/mt-8.png",
  // DreamBids images
  "/src/assets/images/dreambids/db-1.png",
  "/src/assets/images/dreambids/db-2.png",
  "/src/assets/images/dreambids/db-3.png",
  "/src/assets/images/dreambids/db-4.png",
  "/src/assets/images/dreambids/db-5.png",
  "/src/assets/images/dreambids/db-6.png",
  "/src/assets/images/dreambids/db-7.png",
  "/src/assets/images/dreambids/db-8.png",
  "/src/assets/images/dreambids/db-9.png",
  "/src/assets/images/dreambids/db-10.png",
  // CGG images
  "/src/assets/images/cgg/cgg-1.png",
  "/src/assets/images/cgg/cgg-2.png",
  "/src/assets/images/cgg/cgg-3.png",
  "/src/assets/images/cgg/cgg-4.png",
  "/src/assets/images/cgg/cgg-5.png",
  "/src/assets/images/cgg/cgg-6.png",
  "/src/assets/images/cgg/cgg-7.png",
  "/src/assets/images/cgg/cgg-8.png",
  "/src/assets/images/cgg/cgg-9.png",
  // Holidaze images
  "/src/assets/images/holidaze/hd-01.png",
  "/src/assets/images/holidaze/hd-02.png",
  "/src/assets/images/holidaze/hd-03.png",
  "/src/assets/images/holidaze/hd-04.png",
  "/src/assets/images/holidaze/hd-05.png",
  "/src/assets/images/holidaze/hd-06.png",
  "/src/assets/images/holidaze/hd-07.png",
  "/src/assets/images/holidaze/hd-08.png",
  "/src/assets/images/holidaze/hd-09.png",
  "/src/assets/images/holidaze/hd-10.png",
  "/src/assets/images/holidaze/hd-11.png",
  "/src/assets/images/holidaze/hd-12.png",
  "/src/assets/images/holidaze/hd-13.png",
  // Social icons
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg",
  // Skills icons
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  // Do not cache skillicons.dev icons
  // "https://skillicons.dev/icons?i=wordpress",
  // "https://skillicons.dev/icons?i=vscode",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Exclude specific domains from caching
  if (requestUrl.origin === "https://skillicons.dev") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch((error) => {
          console.error("Fetching failed:", error);
          throw error;
        });
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
