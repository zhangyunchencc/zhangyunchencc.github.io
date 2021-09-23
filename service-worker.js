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
    "revision": "52c60443686fd147346ebd6e5ed68aea"
  },
  {
    "url": "advanced/1.html",
    "revision": "728db50785c36bffc3f4cb62d3353e9d"
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
    "url": "assets/js/17.8ab450b2.js",
    "revision": "35d34d25b6d10e2546bb3afb5436782e"
  },
  {
    "url": "assets/js/18.e8947c5a.js",
    "revision": "0cfe65dcc49cae7e576255b8960ac0b4"
  },
  {
    "url": "assets/js/19.a76df3c9.js",
    "revision": "5d3aa1796f754f939430cccc31b37bbf"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.a014c9b5.js",
    "revision": "457a12c73419cabe847d80b9fe7a5fbb"
  },
  {
    "url": "assets/js/21.ada881cb.js",
    "revision": "ce37ba64d8b59f7f4b47bb314c22bb93"
  },
  {
    "url": "assets/js/22.e27e13f1.js",
    "revision": "6c203f8506c91667f897a71860c19430"
  },
  {
    "url": "assets/js/23.f2541ce6.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.1bde6b32.js",
    "revision": "1fbbee302a84e816658f5d0fcb214341"
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
    "url": "assets/js/app.2688ff71.js",
    "revision": "2c5b190cc30b0410778ce331db90f35a"
  },
  {
    "url": "basic/1.html",
    "revision": "286bf20d63361cf5cda6f76886d6e23c"
  },
  {
    "url": "basic/10.html",
    "revision": "94d957f35ff561117671933c59a7001e"
  },
  {
    "url": "basic/11.html",
    "revision": "d2675c7175d553f29d296e7416ba6942"
  },
  {
    "url": "basic/2.html",
    "revision": "af7aa1dd7e93484ac4e3724ba08be345"
  },
  {
    "url": "basic/3.html",
    "revision": "6aa77341b4476192093085260a4cccc4"
  },
  {
    "url": "basic/4.html",
    "revision": "f944cb82772974fa55f3170630701ea0"
  },
  {
    "url": "basic/5.html",
    "revision": "81e96326c8c4ada8868b68efadcc910c"
  },
  {
    "url": "basic/6.html",
    "revision": "4263fe4460138bcc6b9be6613b730915"
  },
  {
    "url": "basic/7.html",
    "revision": "22d955ad190c888eb2b7cffd9f622360"
  },
  {
    "url": "basic/8.html",
    "revision": "d201b2f0191788c993b0ebea2b9cd076"
  },
  {
    "url": "basic/9.html",
    "revision": "59a6fcbfd8b8c6dcf6e5c7de52b85512"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "09a15e63371091e12875e5d60f998704"
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
    "revision": "79eec368b021790d701d01f863acfbbb"
  },
  {
    "url": "interview/1.html",
    "revision": "3afdf17c934ac417aa95224b635e64df"
  },
  {
    "url": "interview/HTML.html",
    "revision": "f5722bd099bd15cd9756766d832b192d"
  },
  {
    "url": "interview/HTML的副本.html",
    "revision": "b87983eabb9f8b6768a70e69fa7a4d8f"
  },
  {
    "url": "interview/Vue.html",
    "revision": "5eee3834695f3df96cf7a0cb21f66a7e"
  },
  {
    "url": "others/1.html",
    "revision": "3d36d297229b8696eebc70a77548dba5"
  },
  {
    "url": "others/guide.html",
    "revision": "7f299105b0b3288a672769956db274f1"
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
