!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js"],n):n(e.polymerLegacy_js)}(this,function(e){"use strict";function n(){var e,r,t=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="container"> </div>\n'],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return n=function(){return t},t}e.Polymer({_template:e.html(n()),is:"lrnsys-render-html",properties:{html:{type:String}},observers:["_render(html)"],_render:function(e){this.$.container.innerHTML=e}})});
//# sourceMappingURL=lrnsys-render-html.umd.js.map
