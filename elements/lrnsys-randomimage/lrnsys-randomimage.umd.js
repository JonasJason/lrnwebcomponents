!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/random-image/random-image.js"),require("@polymer/paper-button/paper-button.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/random-image/random-image.js","@polymer/paper-button/paper-button.js"],n):n(e.polymerLegacy_js)}(this,function(e){"use strict";function n(){var e,o,t=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="image-list">\n      <random-image images-list$="{{images}}"></random-image>\n  </div>\n  <paper-button raised="" on-click="reload">Reload</paper-button>\n'],(o=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="image-list">\n      <random-image images-list\\$="{{images}}"></random-image>\n  </div>\n  <paper-button raised="" on-click="reload">Reload</paper-button>\n'])||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return n=function(){return t},t}e.Polymer({_template:e.html(n()),is:"lrnsys-randomimage",properties:{images:{type:Object,notify:!0,value:function(){return[]}}},reload:function(e){this.shadowRoot.querySelector("#image-list").innerHTML=this.shadowRoot.querySelector("#image-list").innerHTML}})});
//# sourceMappingURL=lrnsys-randomimage.umd.js.map
