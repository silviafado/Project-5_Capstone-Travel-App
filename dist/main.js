(()=>{"use strict";var e={817:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{font-family:Arial, Helvetica, sans-serif}#app{display:grid;grid-auto-rows:minmax(150px, auto);height:100vh;color:white;justify-content:center;grid-gap:1em;font-size:20px;font-family:'Oswald', sans-serif}.entry{background:rgba(59,74,107,0.4);border-radius:5px;padding:10px}.headline{font-size:40px;font-weight:bold}.title{text-decoration:underline;font-size:25px}label{display:block;font-size:27px}input{display:block;height:60px;width:320px;background:#3e90b5;border-radius:5px;color:white;font-size:20px;font-family:'Oswald', sans-serif;font-weight:300;border:none}button{width:300px;height:70px;background:#3b4a6b;color:white;font-size:26px;font-family:'Oswald', sans-serif;border-radius:10px;box-shadow:2px 4px 5px #444}h1{font-size:36px}textarea{background:#3e90b5;border-radius:5px;color:white;font-weight:300;font-size:20px;font-family:'Oswald', sans-serif;border:none}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#9bb7c3;font-weight:100;font-family:'Oswald', sans-serif}:-ms-input-placeholder{color:#9bb7c3;font-weight:100px;font-family:'Oswald', sans-serif}::-ms-input-placeholder{color:#9bb7c3;font-weight:100;font-family:'Oswald', sans-serif}\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],s=t.base?c[0]+t.base:c[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=i(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:m(f,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var a=h++;n=p||(p=s(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var s=c(e,t),l=0;l<n.length;l++){var d=i(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=s}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e=new Date,t=e.getMonth()+"."+e.getDate()+"."+e.getFullYear();document.getElementById("generate").addEventListener("click",(function(e){const n="http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("zip").value+"&appid=1111cbdcf8fc8f48d8f36f640aab97dc&units=metric",i=document.getElementById("feelings").value;o(n).then((function(e){console.log(e),r("http://localhost:8000/addEntry",e={date:t,location:e.name,country:e.sys.country,temp:e.main.temp,content:i}).then((function(e){a()}))}))}));const o=async e=>{const t=await fetch(e);try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}},r=async(e="",t={})=>{console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}},a=async()=>{const e=await fetch("http://localhost:8000/all");try{const t=await e.json();document.getElementById("date").innerHTML="Date: "+t.date,document.getElementById("location").innerHTML="Location: "+t.location,document.getElementById("country").innerHTML="Country: "+t.country,document.getElementById("temp").innerHTML="Temperature in ºC: "+t.temp,document.getElementById("content").innerHTML="Feelings: "+t.content}catch(e){console.log("error",e)}};var i=n(379),c=n.n(i),s=n(817);c()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,alert("Welcome to Travel App :)"),console.log("Hello!!")})()})();