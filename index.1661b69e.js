!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=r?1:-1,c=e.tBodies[0],l=Array.from(c.querySelectorAll("tr")),i=l.sort((function(e,r){return e.querySelector("td:nth-of-type(".concat(t+1,")")).textContent.trim()>r.querySelector("td:nth-of-type(".concat(t+1,")")).textContent.trim()?o:-1*o}));c.firstChild;)c.removeChild(c.firstChild);c.append.apply(c,n(i)),e.querySelectorAll("th").forEach((function(e){e.classList.remove("th-sort-asc","th-sort-desc")})),e.querySelector("th:nth-child(".concat(t+1,")")).classList.toggle("th-sort-asc",r),e.querySelector("th:nth-child(".concat(t+1,")")).classList.toggle("th-sort-desc",!r)}document.querySelector(".sidebar__toggler--js").addEventListener("click",(function(){document.querySelector(".sidebar--js").classList.toggle("sidebar--collapsed")})),document.querySelector(".languages__list--selection").querySelectorAll(".language").forEach((function(e){var t;(t=e).addEventListener("click",(function(){var e;console.log("Wybrałeś ".concat(t.innerHTML)),e=t.innerHTML,document.querySelector(".languages__list--default").querySelector(".language").innerHTML=e}))})),document.querySelectorAll(".client__dropdown--js").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("client__dropdown--collapsed")}))})),document.querySelectorAll(".table__th--sortable").forEach((function(e){e.addEventListener("click",(function(){var t=e.parentElement.parentElement.parentElement,r=Array.prototype.indexOf.call(e.parentElement.children,e);e.classList.contains("th-sort-asc")?function(e,t){c(e,t,!1)}(t,r):function(e,t){c(e,t,!0)}(t,r)}))}))}]);