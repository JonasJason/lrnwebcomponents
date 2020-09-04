!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((n=n||self).HexagonLoader={},n.litElement_js)}(this,function(n,t){"use strict";function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function i(n,t,e){return t&&a(n.prototype,t),e&&a(n,e),n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,a)}return e}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function h(n,t,e){return(h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()?Reflect.construct:function(n,t,e){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(n,a));return e&&c(i,e.prototype),i}).apply(null,arguments)}function f(n){var t="function"==typeof Map?new Map:void 0;return(f=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return h(n,arguments,s(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),c(a,n)})(n)}function m(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function u(n,t,e){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,t,e){var a=function(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=s(n)););return n}(n,t);if(a){var i=Object.getOwnPropertyDescriptor(a,t);return i.get?i.get.call(e):i.value}})(n,t,e||n)}function g(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var p=function(n){function t(){var n,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,t),(n=m(this,s(t).call(this))).tag=t.tag,n._queue=[],n.template=document.createElement("template"),n.attachShadow({mode:"open"}),a||n.render(),n}return r(t,f(HTMLElement)),i(t,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline-flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n}\n\n:host div,\n:host div:before,\n:host div:after {\n background-color: var(--hexagon-color, orange);\n}\n\ndiv {\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n  margin: 9px 3px;\n  position: absolute;\n  color: var(--hexagon-color, orange);\n}\ndiv:before, div:after {\n  content: '';\n  position: absolute;\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n}\ndiv:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n}\ndiv:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n}\n</style>\n    <div></div>"}}],[{key:"tag",get:function(){return"hex-a-gon"}}]),i(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"_copyAttribute",value:function(n,t){var e=this.shadowRoot.querySelectorAll(t),a=this.getAttribute(n),i=null==a?"removeAttribute":"setAttribute",o=!0,l=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){s.value[i](n,a)}}catch(n){l=!0,r=n}finally{try{o||null==c.return||c.return()}finally{if(l)throw r}}}},{key:"_queueAction",value:function(n){this._queue.push(n)}},{key:"_processQueue",value:function(){var n=this;this._queue.forEach(function(t){n["_".concat(t.type)](t.data)}),this._queue=[]}},{key:"_setProperty",value:function(n){var t=n.name,e=n.value;this[t]=e}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),t}();function b(){var n=g(['\n:host {\n  display: none;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([loading]){\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 0 0 0 0 !important;\n  width: var(--hexagon-loader-width, 255px);\n  height: var(--hexagon-loader-height, 232.5px);\n}\n\n:host([size="small"]) {\n  width: calc(0.5 * var(--hexagon-loader-width, 255px));\n  height: calc(0.5 * var(--hexagon-loader-height, 232.5px));\n}\n\n:host([size="large"]) {\n  width: calc(1.25 * var(--hexagon-loader-width, 255px));\n  height: calc(1.25 * var(--hexagon-loader-height, 232.5px));\n}\n\n:host([size="epic"]) {\n  width: calc(2.5 * var(--hexagon-loader-width, 255px));\n  height: calc(2.5 * var(--hexagon-loader-height, 232.5px));\n}\n\ndiv {\n  position: relative;\n  margin: 0 auto;\n  flex: 1 1 100%;\n  width: 100%;\n}\n\nhex-a-gon {\n  display: none;\n  position: absolute;\n  top: 9px;\n  left: 15px; \n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n  color: #9fb475;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([size="small"]) hex-a-gon {\n  --hexagon-width: calc(0.5 * 30px);\n  --hexagon-height: calc(0.5 * 18px);\n  top: calc(0.1 * 9px); \n  left: calc(0.5 * 15px); \n}\n\n:host([size="large"]) hex-a-gon {\n  --hexagon-width: calc(1.25 * 30px);\n  --hexagon-height: calc(1.25 * 18px);\n  top: calc(1.5 * 9px); \n  left: calc(1.25 * 15px); \n}\n\n:host([size="epic"]) hex-a-gon {\n  --hexagon-width: calc(2.5 * 30px);\n  --hexagon-height: calc(2.5 * 18px);\n  top: calc(4 * 9px); \n  left: calc(2.5 * 15px); \n}\n  \n\nhex-a-gon:nth-of-type(1) {\n  display: block;\n  margin-left: calc(100% * 1.5 / 7);\n  margin-top: 0%;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(2) {\n  display: block;\n  margin-left: calc(100% * 2.5 / 7);\n  margin-top: 0%;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(3) {\n  display: block;\n  margin-left: calc(100% * 3.5 / 7);\n  margin-top: 0%;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(4) {\n  display: block;\n  margin-left: calc(100% * 4.5 / 7);\n  margin-top: 0%;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(5) {\n  display: block;\n  margin-left: calc(100% * 1 / 7);\n  margin-top: calc(100% * 1 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(6) {\n  display: block;\n  margin-left: calc(100% * 2 / 7);\n  margin-top: calc(100% * 1 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(7) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n  margin-top: calc(100% * 1 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(8) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n  margin-top: calc(100% * 1 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(9) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n  margin-top: calc(100% * 1 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\nhex-a-gon:nth-of-type(10) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 0.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(11) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(12) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(13) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(14) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\nhex-a-gon:nth-of-type(15) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 5.5 / 7));\n  margin-top: calc(100% * 2 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n\nhex-a-gon:nth-of-type(16) {\n  display: block;\n  margin-left: 0%;\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(17) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 1 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(18) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 2 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(19) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(20) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\nhex-a-gon:nth-of-type(21) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n\nhex-a-gon:nth-of-type(22) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 6 / 7));\n  margin-top: calc(100% * 3 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\nhex-a-gon:nth-of-type(23) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 0.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(24) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(25) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(26) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(27) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\nhex-a-gon:nth-of-type(28) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 5.5 / 7));\n  margin-top: calc(100% * 4 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n\nhex-a-gon:nth-of-type(29) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 1 / 7));\n  margin-top: calc(100% * 5 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(30) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 2 / 7));\n  margin-top: calc(100% * 5 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(31) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n  margin-top: calc(100% * 5 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(32) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n  margin-top: calc(100% * 5 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\nhex-a-gon:nth-of-type(33) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n  margin-top: calc(100% * 5 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\nhex-a-gon:nth-of-type(34) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n  margin-top: calc(100% * 6 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\nhex-a-gon:nth-of-type(35) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n  margin-top: calc(100% * 6 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n\nhex-a-gon:nth-of-type(36) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n  margin-top: calc(100% * 6 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\nhex-a-gon:nth-of-type(37) {\n  display: block;\n  margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n  margin-top: calc(100% * 6 / 7);\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n  animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n\n\n:host([item-count="1"]) hex-a-gon:nth-of-type(1),\n:host([item-count="3"]) hex-a-gon:nth-of-type(2)  {\n  margin-left: calc(100% * 3 / 7);\n}\n\n:host([item-count="2"]) hex-a-gon:nth-of-type(1) {\n  margin-left: calc(100% * 2.5 / 7);\n}\n\n:host([item-count="2"]) hex-a-gon:nth-of-type(2) {\n  margin-left: calc(100% * 3.5 / 7);\n}\n\n:host([item-count="3"]) hex-a-gon:nth-of-type(1) {\n  margin-left: calc(100% * 2 / 7);\n}\n\n:host([item-count="3"]) hex-a-gon:nth-of-type(3) {\n  margin-left: calc(100% * 4 / 7);\n}\n\n@-webkit-keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n    transform: scale(1) translate(-50%, -50%);\n  }\n\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n    transform: scale(0) translate(-50%, -50%);\n  }\n}\n\n@keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n    transform: scale(1) translate(-50%, -50%);\n  }\n\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n    transform: scale(0) translate(-50%, -50%);\n  }\n}\n      ']);return b=function(){return n},n}function y(){var n=g(["<hex-a-gon></hex-a-gon>"]);return y=function(){return n},n}function d(){var n=g(["\n\n<div>\n  ","\n</div>"]);return d=function(){return n},n}window.customElements.define(p.tag,p);var x=function(n){function a(){var n;return e(this,a),(n=m(this,s(a).call(this))).itemCount=37,n.items=[],n}return r(a,t.LitElement),i(a,[{key:"render",value:function(){return t.html(d(),this.items.map(function(n){return t.html(y())}))}}],[{key:"styles",get:function(){return[t.css(b())]}},{key:"properties",get:function(){return function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach(function(t){o(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}({},u(s(a),"properties",this),{color:{name:"color",type:String,reflect:!0},size:{name:"size",type:String,reflect:!0},loading:{name:"loading",type:Boolean,reflect:!0},items:{name:"items",type:Array},itemCount:{name:"itemCount",type:Number,reflect:!0,attribute:"item-count"}})}},{key:"tag",get:function(){return"hexagon-loader"}}]),i(a,[{key:"updated",value:function(n){var t=this;n.forEach(function(n,e){if("color"==e&&t._colorChanged(t[e],n),"itemCount"==e){t.items=[];for(var a=0;a<t[e];a++)t.items.push("");var i=-4,o=0;[4,5,6,7,6,5,4].forEach(function(n,e){i+=n,t.itemCount>=i&&(o=255/7*(e+1),t.itemCount-i)}),t.style.setProperty("--hexagon-loader-height","".concat(o,"px"))}})}},{key:"_colorChanged",value:function(n,t){n&&window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{"--hexagon-color":n})}}]),a}();window.customElements.define(x.tag,x),n.HexagonLoader=x,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=hexagon-loader.umd.js.map
