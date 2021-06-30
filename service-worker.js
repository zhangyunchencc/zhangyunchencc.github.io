/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e4f1c7307260257639c2d9f41782022f"
  },
  {
    "url": "advanced/1.html",
    "revision": "90b9896222c3df803c2d8e01265a789e"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d3a313fb.js",
    "revision": "432f388114f29e0d17de3388ad3180be"
  },
  {
    "url": "assets/js/11.c0d21728.js",
    "revision": "35926402873d2df0a61f929392ebbfa6"
  },
  {
    "url": "assets/js/12.486a46e9.js",
    "revision": "f3a7a569bc2126765ca1bfeba1c3715a"
  },
  {
    "url": "assets/js/13.a399f6af.js",
    "revision": "a722a7175091f2b9a899d8604a5f74a1"
  },
  {
    "url": "assets/js/14.12a2ac62.js",
    "revision": "2566ed240be088460f90d29d3c9f911e"
  },
  {
    "url": "assets/js/15.94482eb6.js",
    "revision": "2b47217fa331f4b24c6a1ce054a65f96"
  },
  {
    "url": "assets/js/16.1f17a230.js",
    "revision": "c7e8e08fb3117045304bef72271cac9b"
  },
  {
    "url": "assets/js/17.3fb3f1c9.js",
    "revision": "7cfd487c51bcfbfd55061774667d650d"
  },
  {
    "url": "assets/js/18.02dbdf28.js",
    "revision": "727891f1df9fc1a3dd8ff2c57c4e6e3d"
  },
  {
    "url": "assets/js/19.6ffad020.js",
    "revision": "1075cf093634b7020afb8b0f84b00569"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.8b93a682.js",
    "revision": "f11119ae0014b1eb42e60ec39d16fb22"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.8a2045f0.js",
    "revision": "968b71a3fca99083ce10c1dc5f8e588c"
  },
  {
    "url": "assets/js/5.dfee4534.js",
    "revision": "a347dd744a1f894b7655a3ba18054a9f"
  },
  {
    "url": "assets/js/6.8bf9bef2.js",
    "revision": "f19ce836d92ad9fd5e3fe103c36f23a9"
  },
  {
    "url": "assets/js/7.9eaa151d.js",
    "revision": "eaa6bfeb9f8d071dcae648bfc2460142"
  },
  {
    "url": "assets/js/8.833fd9f2.js",
    "revision": "b45450477279bd317c8a010d15f5d841"
  },
  {
    "url": "assets/js/9.85f6f5e8.js",
    "revision": "7694ba7cb5098ac54438c05a9c7bb652"
  },
  {
    "url": "assets/js/app.19d447cf.js",
    "revision": "dda43886ffe6b5b90d3d774ba56187d9"
  },
  {
    "url": "basic/1.html",
    "revision": "8d41a23c9f3ae6f66a29a2158d8d9f96"
  },
  {
    "url": "basic/10.html",
    "revision": "57d5afb6c7a7eedcfaa558cb0963523b"
  },
  {
    "url": "basic/11.html",
    "revision": "c9ae46930f8e0d6c0ba4d5750bbc22ce"
  },
  {
    "url": "basic/2.html",
    "revision": "395a5de69063ca3bc9477c390d4ca416"
  },
  {
    "url": "basic/3.html",
    "revision": "4fde81cfeba04548158fa53c4c154b78"
  },
  {
    "url": "basic/4.html",
    "revision": "bfc10d58b1cbd3d9e1d8d8a0089ad2c4"
  },
  {
    "url": "basic/5.html",
    "revision": "bdb6e25a8a57524fe534d5f22e280dfc"
  },
  {
    "url": "basic/6.html",
    "revision": "c3abf93e226a841d80f553b39604c317"
  },
  {
    "url": "basic/7.html",
    "revision": "edc89801d65ccac59ee1fe7a9ec5a7eb"
  },
  {
    "url": "basic/8.html",
    "revision": "cea91e758bc36c059ac94120d4d42862"
  },
  {
    "url": "basic/9.html",
    "revision": "dba87561d18761ee794f9e9a969deec8"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "7d07391251de2a8e2a9922bb47879bc5"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/engineering/demo.jpeg",
    "revision": "90da577eabcac3026c17a83e67edc073"
  },
  {
    "url": "images/engineering/example.png",
    "revision": "1ecf7a843ed31b149cf86c669ad10910"
  },
  {
    "url": "images/gitcommit.jpg",
    "revision": "40f73e9e8c183461bada9b09dd93981d"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "285834a401b339b295f5a22816d43d4b"
  },
  {
    "url": "interview/1.html",
    "revision": "8bf5e4abeb8aacdf367a84040f7e41eb"
  },
  {
    "url": "others/1.html",
    "revision": "6de5bcefcca75848823a59ca89fe63d2"
  },
  {
    "url": "others/guide.html",
    "revision": "349a4e2dbf2705f9a61663b4fee2fb54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
