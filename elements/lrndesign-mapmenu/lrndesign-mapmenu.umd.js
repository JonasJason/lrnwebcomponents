!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-behaviors/iron-button-state.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/paper-button/paper-button.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-collapse/iron-collapse.js","@polymer/iron-behaviors/iron-button-state.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/paper-button/paper-button.js"],e):e(n.polymerLegacy_js,null,null,null,null,n.ironButtonState_js,n.polymer_dom_js)}(this,function(n,e,r,i,t,o,l){"use strict";function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function p(){var n=a(['\n    <style>\n      :host {\n        display: block;\n        --lrndesign-mapmenu-item-height: 16px;\n      }\n      iron-icon {\n        --iron-icon-height: var(--lrndesign-mapmenu-item-height);\n      }\n    </style>\n    <template is="dom-if" if="[[icon]]">\n      <iron-icon icon="[[icon]]"></iron-icon>\n    </template>\n    <span id="title">[[title]]</span>\n']);return p=function(){return n},n}var s,d,m;function u(){var n=a(['\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        display: flex;\n        align-items: center;\n      }\n      #icon {\n        margin-right: 10px;\n      }\n      #center {\n        flex: 1 1 auto;\n      }\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0,0,0,0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n      }\n      lrndesign-avatar ::shadow > * {\n        transform: translateY(2px);\n      }\n      #title {\n        font-size: 1.2em;\n      }\n      #right iron-icon {\n        color: gray;\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="icon">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <div id="center">\n        <div id="label">[[label]]</div>\n        <div id="title">[[title]]</div>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon icon="arrow-drop-down"></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon icon="arrow-drop-up"></iron-icon>\n        </template>\n      </div>\n    </div>\n']);return u=function(){return n},n}function c(){var n=a(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host([collapsable]) > lrndesign-mapmenu-header {\n        cursor: pointer;\n        display: block;\n      }\n      #container {\n        padding: 1em;\n      }\n      #container ::slotted(lrndesign-mapmenu-item) {\n        margin-top: .4em;\n      }\n    </style>\n    <lrndesign-mapmenu-header on-tap="_headerClickHandler" avatar-label="[[avatarLabel]]" title="[[title]]" label="[[label]]" opened="[[opened]]"></lrndesign-mapmenu-header>\n    <iron-collapse id="container">\n      <slot id="slot"></slot>\n    </iron-collapse>\n']);return c=function(){return n},n}function y(){var n=a(["\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 1em 2em;\n      }\n      :host > ::shadow lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu {\n        margin-top: 1em;\n      }\n    </style>\n    <slot></slot>\n"]);return y=function(){return n},n}n.Polymer({_template:n.html(p()),is:"lrndesign-mapmenu-item",properties:(s={icon:{type:String,value:""},title:{type:String,value:""},url:{type:String,value:""}},d="icon",m={type:String,value:""},d in s?Object.defineProperty(s,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):s[d]=m,s)}),n.Polymer({_template:n.html(u()),is:"lrndesign-mapmenu-header",behaviors:[o.IronButtonState],properties:{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean}},hostAttributes:{role:"button",tabindex:0}}),n.Polymer({_template:n.html(c()),is:"lrndesign-mapmenu-submenu",properties:{title:{type:String},avatarLabel:{type:String},label:{type:String},opened:{type:Boolean,value:!1},collapsable:{type:Boolean,value:!0},expandChildren:{type:Boolean,value:!1}},observers:["_openChanged(opened)"],_openChanged:function(n){var e=this.$.container;n&&e.show(),n||e.hide()},_headerClickHandler:function(n){this.collapsable&&(this.opened=!this.opened)},ready:function(){var n=this;this._observer=l.dom(this.$.slot).observeNodes(function(e){var r=e.addedNodes.filter(function(n){return"LRNDESIGN-MAPMENU-SUBMENU"===n.nodeName});if(n.expandChildren){var i=!0,t=!1,o=void 0;try{for(var l,a=r[Symbol.iterator]();!(i=(l=a.next()).done);i=!0){l.value.setAttribute("opened",!0)}}catch(n){t=!0,o=n}finally{try{i||null==a.return||a.return()}finally{if(t)throw o}}}})}}),n.Polymer({_template:n.html(y()),is:"lrndesign-mapmenu",properties:{}})});
//# sourceMappingURL=lrndesign-mapmenu.umd.js.map
