if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const d=e=>i(e,o),r={module:{uri:o},exports:a,require:d};s[o]=Promise.all(n.map((e=>r[e]||d(e)))).then((e=>(c(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/icons/android-icon-144x144.png",revision:"da2e9e2edecf372062045d58f3e745c2"},{url:"assets/icons/android-icon-192x192.png",revision:"a22ea8cca860aec3eefb2a49eaa49001"},{url:"assets/icons/android-icon-36x36.png",revision:"03cf106617a0a3b5b8adf354583d7d55"},{url:"assets/icons/android-icon-48x48.png",revision:"1765b1cacb349be8e28cb9eeece595c8"},{url:"assets/icons/android-icon-72x72.png",revision:"e079239df5f7651ae3608362ee729d71"},{url:"assets/icons/android-icon-96x96.png",revision:"dda2081206d1daf05260799d8bcdb756"},{url:"assets/icons/apple-icon-114x114.png",revision:"b0ab41baeca4948d6c4950705e0bc77f"},{url:"assets/icons/apple-icon-120x120.png",revision:"f31d68d8326b498c6d3dc12bb805440e"},{url:"assets/icons/apple-icon-144x144.png",revision:"da2e9e2edecf372062045d58f3e745c2"},{url:"assets/icons/apple-icon-152x152.png",revision:"8e7d6e93cf03fcaf6840ed897ed24b56"},{url:"assets/icons/apple-icon-180x180.png",revision:"7461e005f2152e8921e3e8dcb9793429"},{url:"assets/icons/apple-icon-57x57.png",revision:"17a69c91d46120ce2a6532d810fa0a34"},{url:"assets/icons/apple-icon-60x60.png",revision:"828094c6cbd1cb3427e9932d7af6394b"},{url:"assets/icons/apple-icon-72x72.png",revision:"e079239df5f7651ae3608362ee729d71"},{url:"assets/icons/apple-icon-76x76.png",revision:"be6c7fcb3b05637ebfc64705affd7fed"},{url:"assets/icons/apple-icon-precomposed.png",revision:"4ac7fb495236a911f811faeabbbbd605"},{url:"assets/icons/apple-icon.png",revision:"383057a7f6a5d069df9fd91b28b86811"},{url:"assets/icons/favicon-16x16.png",revision:"a181962f202c9e1b3a4c9611577be66c"},{url:"assets/icons/favicon-32x32.png",revision:"243282f4b92feef7ce46786a0b18da5c"},{url:"assets/icons/favicon-96x96.png",revision:"f69f0e6db6543a2fed6392df7cbef0ab"},{url:"assets/icons/ms-icon-144x144.png",revision:"c7d2c2052d195474a1347cd5efe965a5"},{url:"assets/icons/ms-icon-150x150.png",revision:"95e7347b472e2e44905fb87cb02104cd"},{url:"assets/icons/ms-icon-310x310.png",revision:"d62c5c0531c65becd00c79fc300a26cc"},{url:"assets/icons/ms-icon-70x70.png",revision:"9a93ec4464060e2b1a92d298f419366c"},{url:"assets/index-943053df.js",revision:null},{url:"assets/quiz-images/1-3.jpeg",revision:"0cf70a836d750b5a5f74a03d8dcc6089"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"39fdd4f7c336fe7199b87af6dacff2b2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
