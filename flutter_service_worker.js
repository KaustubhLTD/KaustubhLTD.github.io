'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1b833a33495f28ef4822551efad5048b",
".git/config": "37d1276f2a28272a32aa7f7cb9b9e4f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dc6533456fef56bff3bbd1fcad37fbd5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13d626432ac079f0f4bce4bfeeec2a19",
".git/logs/refs/heads/master": "13d626432ac079f0f4bce4bfeeec2a19",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/cea5bdcbe3e17bd689f389c69a7a32c49b44df": "663636a721d0a36352a68ba864a37d9b",
".git/objects/17/fc8d225f4c34b6905a09cd72f59407c462a6d2": "2dd05ab108bc95becb4c614d05728c85",
".git/objects/19/f06eccb4de517af417916cdb3018ab0026ee09": "2ff58213ff30bed53c301097b41eb102",
".git/objects/1d/f109a8d407149e12e0dbd48111f5fb33904610": "89f12276343799453ba7a08a42b5461c",
".git/objects/1e/cff9de1b875b493c8fcf4df4f22bef0b185744": "0c4c8b7e16eaa33fc19696106d8e92b4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/7e3b52f58f20819169ab4de48213901d6e3b5a": "486d843ea52fd8d738a4439fbe87b287",
".git/objects/2d/540a4ca96b1cdcf436acaec7c2df9c9a55c5b5": "fbaa293d171948d1e62cb1a790877c80",
".git/objects/32/42210ef0e41cd420b20ca033d7cd0d7eeb11d3": "e41cca70d3a3b7275aed5e9e579ae8f7",
".git/objects/3d/8e180eb79a1af8f00599533ad38aa11e1a7abb": "5acf493b85615064614d04dfdfd94ffb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/7e2a56b86a3fcde9a154cf083e345d16cb6b58": "4e21acf29f694df307274a9886903375",
".git/objects/55/be2f798b42eb0082ea53d7d5e50d609bdb4271": "14d0163a0421c45a4d4a0ab02f48441c",
".git/objects/57/eaa5dfcee9d11a9d65d8404fcc7665fd5c45af": "b3a3f57ba0968ab48fcdcd03bee28de8",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/68/4e9744661d7f628a6ac3a025c2b94d94e487fc": "51c4504862f3cf769c00fefedf38a720",
".git/objects/70/b5d9614a54165465aabc96184a543c7eaf4ad3": "efcf7248d5b0dbada87ac669ba100612",
".git/objects/79/eb684374d4b45db28a86e6db1a9d11d1b08360": "8b1358bce7f5eed24f0fa17fbdb5e807",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b83a54cb082e764fc8f64df7cfd93bdff5af79": "a78dab604cfe9ca356d6d82bf2c0b6bf",
".git/objects/9d/a86ff02f65a10fd7551f7b75ce0b0ac991a64e": "a8e8682deb3d4216d27ee149b9eb1db4",
".git/objects/a4/392d060ec5ae8671ae110dbffcb6672d066ebc": "5626d377bcb4c3f49ac640b6e1c95525",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ac/0c413a200756cc7d05c4b8c5ff63cd598e6472": "0b4b49e9db7e805164b1033787f07517",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/b3aa7b6912adba4038fa7b1415e12e8db97dbc": "05408a062afee02e7c88570af1da8150",
".git/objects/c1/bd117edc03dcd0f9093ec10d9c3587283c5081": "c4885fd56b2797f3f897332e14719ced",
".git/objects/c4/853fb2b6bb3e20b3577e73ddd44f9978d0cf4a": "4462e85a4ba82291e8a90ab13f4a8dec",
".git/objects/c9/4db1a118b338815be7cb5d90619b5dd09780ee": "ac9f54bead0bc4ad2fdf6a64f108b4d9",
".git/objects/cd/26495335f42f043e434ef97abfb4dddaefd797": "bc612374db5aa3ac589d3717f19465e4",
".git/objects/d7/c55b04fa264f7cb2d76af8b3c1823b92b85080": "6dd5398a8987417bf41510fd1217cdbf",
".git/objects/d8/724e92d35cd3ab7ffe3f8cb8057c4600e902cd": "5ac64edc93a45291f021b573a4018efd",
".git/objects/da/8ffbef243c40c2e2f664826e862695342aeaa3": "e900af21d6d8674754898c42dfded1f5",
".git/objects/df/a4398a18dde2fa8eaf68748dba31783806ce3d": "9fcf26bd75b17e7b29573a6dddbd3cf6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/e78aae8f2a40d581935ea5f145018bee183fd4": "f1b2c47f584e21bd395239edcf06c6c4",
".git/objects/f6/140755a75e0784462c83f191b700e1ee662c89": "1a785edc58ea3a26fd531a8be48ec58a",
".git/objects/fb/c19405929a76e020f8cdf68f5417dc02ab60b0": "9ed7c8ae0b1110ac1429beccf8bdd772",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "210c412f0f566b0edb19e6d133068c86",
"assets/AssetManifest.json": "fc35cdf472e02aa6fc5cbe242b41b192",
"assets/assets/images/bgSimulationSelectionDown.png": "88f24ef3eaeeb83903167f505dbb4c43",
"assets/assets/images/bullheading.png": "71c6bf18986cb21e6c9b1a0f6bbacb60",
"assets/assets/images/drillerMethod.png": "d5d5efcab779950321b426700edecf1e",
"assets/assets/images/guideline.PNG": "f7aaae381423c28dd774d08425f7ccbe",
"assets/assets/images/iconCompanyLogo.png": "83122fcfe46be71c00ff68a6cd4ce1c1",
"assets/assets/images/KSImage.png": "ddb2a97fa5744690ad36f5f97fa2ad11",
"assets/assets/images/loginBackground.png": "66246fc048f9c57f03e6e587a0a3e90f",
"assets/assets/images/lubeAndBleed.png": "ce4be592716fe2b8d237072aee6df98d",
"assets/assets/images/practice.png": "5f4e6ed3f08b84382d26741f08f97a94",
"assets/assets/images/rarrow.png": "3bdd583b6016a902266eeb1d788c2f65",
"assets/assets/images/SplashScreenNew.png": "847cd1a01e088cd6b5839de1f1884f02",
"assets/assets/images/subsea.png": "66a479fcbdc6f81d36c76d4d65d28c19",
"assets/assets/images/surface.png": "f9ccb59ed2b7eb545a6d1a50687c406d",
"assets/assets/images/takeTest.png": "33b05ece9b40c397f75fe1e17337ddcc",
"assets/assets/images/volumetric.png": "37cc27b9fb5e1f4d454033d98dd166dd",
"assets/assets/images/waitAndWeight.png": "8fef8577f15167da66ba20a9d9c28577",
"assets/assets/language/en.json": "7e3c4a49b591d2d06a994f1f573f6359",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e4b8953b4eb2c0e493df16a81c969f9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c1c0cb1b97271023399617f604ee28b6",
"/": "c1c0cb1b97271023399617f604ee28b6",
"main.dart.js": "c09c1a3d1f2332a120da3d67415c4dc9",
"manifest.json": "0e29d005fe5e6545a9df6c5653d6ce02",
"version.json": "12e15db121c6fdd660fe06b2c9229d0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
