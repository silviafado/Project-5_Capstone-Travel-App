if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,n,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"aa0ddb22f845dc54d2aef891bbc36da3"},{url:"28bb7210b56049721342.png",revision:null},{url:"3f27660d13eb755e223b.jpg",revision:null},{url:"44dedf10ab048affca1f.jpg",revision:null},{url:"60e12d72799d19301dbf.jpg",revision:null},{url:"6d7cac264440c0e2dc3e.png",revision:null},{url:"a4644a4ef2cdc210c5b6.png",revision:null},{url:"bc94de424ac893816c71.jpg",revision:null},{url:"main.css",revision:"30306079a35abaed89d42e73a57ad672"},{url:"main.js",revision:"9753674b14ec41167bd5756ddba426e7"}],{})}));
