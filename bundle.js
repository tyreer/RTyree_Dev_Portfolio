!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3)},function(e,t,n){},function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o,r=function(){"nav-options--collapsed"===document.getElementById("nav-options").className?(document.getElementById("main-nav").className="main-nav--full-screen",document.getElementById("nav-options").className="nav-options--full-screen",document.getElementById("nav-container").className="nav-container--full-screen",document.getElementById("scroll-control").className="disable-scroll",document.getElementById("nav-bars").textContent="✕",document.ontouchmove=function(e){e.preventDefault()}):(document.getElementById("nav-options").className="nav-options--collapsed",document.getElementById("main-nav").className="main-nav--collapsed",document.getElementById("nav-container").className="nav-container--collapsed",document.getElementById("scroll-control").className="",document.getElementById("nav-bars").textContent="☰",document.ontouchmove=function(e){return!!e})};document.getElementById("nav-bars").addEventListener("click",r),(o=document.getElementsByClassName("menu-anchor"),function(e){if(Array.isArray(e))return n(e)}(o)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return e.addEventListener("click",r)}))},function(e,t){var n=0,o=document.getElementsByClassName("div-bg"),r=document.getElementById("top");new IntersectionObserver((function(){n%2!=0?(o[0].classList.add("div-bg--left"),o[1].classList.add("div-bg--right")):(o[0].classList.remove("div-bg--left"),o[1].classList.remove("div-bg--right")),n+=1})).observe(r)}]);
//# sourceMappingURL=bundle.js.map