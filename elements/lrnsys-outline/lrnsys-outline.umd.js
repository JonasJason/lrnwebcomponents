!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@lrnwebcomponents/swipe-action/swipe-action.js"),require("@lrnwebcomponents/drawing-icons/drawing-icons.js"),require("@polymer/paper-dialog/paper-dialog.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/iron-list/iron-list.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/paper-input/paper-input.js","@polymer/paper-icon-button/paper-icon-button.js","@lrnwebcomponents/swipe-action/swipe-action.js","@lrnwebcomponents/drawing-icons/drawing-icons.js","@polymer/paper-dialog/paper-dialog.js"],t):t(e.polymerLegacy_js)}(this,function(e){"use strict";function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(){var e=n(['\n    <style>\n      :host {\n        display: block;\n        --indent-multiplier: 20px;\n      }\n      :host [data-indent="0"] #move {\n        margin-right: calc(var(--indent-multiplier) * 0);\n      }\n      :host [data-indent="1"] #move {\n        margin-right: calc(var(--indent-multiplier) * 1);\n      }\n      :host [data-indent="2"] #move {\n        margin-right: calc(var(--indent-multiplier) * 2);\n      }\n      :host [data-indent="3"] #move {\n        margin-right: calc(var(--indent-multiplier) * 3);\n      }\n      :host [data-indent="4"] #move {\n        margin-right: calc(var(--indent-multiplier) * 4);\n      }\n      :host [data-indent="5"] #move {\n        margin-right: calc(var(--indent-multiplier) * 5);\n      }\n      :host [data-indent="6"] #move {\n        margin-right: calc(var(--indent-multiplier) * 6);\n      }\n      :host #swipe {\n        height: 40px;\n      }\n      :host #input {\n        flex-grow: 1;\n        margin-right: 10px;\n      }\n      :host #wrapper {\n        display: flex;\n        height: 40px;\n        border-radius: 0.1em;\n        background-color: white;\n      }\n      :host:focus #wrapper,\n      :host:hover #wrapper {\n        cursor: pointer;\n      }\n      :host #swipe #move {\n        font-size: 16px;\n        padding: 10px;\n        color: transparent;\n      }\n      :host:focus #swipe #move,\n      :host:hover #swipe #move {\n        color: var(--lrnsys-outline-move-icon-color, #aaaaaa);\n      }\n      :host #swipe paper-icon-button {\n        position: static;\n        font-size: 16px;\n        height: 36px;\n        padding: 10px;\n        margin: 4px;\n        display: none;\n        border-radius: 0.1em;\n      }\n      :host:focus #swipe paper-icon-button,\n      :host:hover #swipe paper-icon-button {\n        width: 36px;\n        display: block;\n      }\n      :host [swipe-down-action],\n      :host [swipe-up-action]{\n        display: flex;\n        justify-content: flex-center;\n        color: var(--lrnsys-outline-add-button-color, #222222);\n      }\n      :host [swipe-left-action]{\n        display: flex;\n        justify-content: flex-end;\n      }\n      :host [swipe-right-action] {\n        display: flex;\n        justify-content: flex-start;\n      }\n      :host #swipe paper-icon-button#add {\n        width: 36px;\n        margin-right: 2px;\n        color: white;\n        background-color: var(--lrnsys-outline-add-button-color, #018dff);\n      }\n      :host #swipe paper-icon-button#delete {\n        color: white;\n        background-color: var(--lrnsys-outline-delete-button-color, #cc0000);\n      }\n    </style>\n    <swipe-action id="swipe" on-swiped-away="_onSwipedAway">\n      <div id="wrapper" data-indent$="[[indentLevel]]">\n        <iron-icon id="move" title="Move" icon="drawing:move" role="presentation"></iron-icon>\n        <paper-input id="input" label="Enter a page title" value$="[[title]]" no-label-float="">\n        </paper-input>\n        <paper-icon-button id="add" title="Add Item" icon="icons:add" on-tap="add"></paper-icon-button>\n        <paper-icon-button id="delete" title="Delete" icon="icons:delete" on-tap="delete"></paper-icon-button>\n      </div>\n      <div id="down-action" swipe-down-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled$="[[disableDown]]">\n        <paper-icon-button id="down" title="Move downwards" icon="icons:arrow-downward" on-tap="move(1)"></paper-icon-button>\n      </div>\n      <div id="left-action" swipe-left-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled$="[[disableLeft]]">\n        <paper-icon-button id="left" title="Outdent" icon="icons:arrow-backward" on-tap="setIndent(-1)"></paper-icon-button>\n      </div>\n      <div id="right-action" swipe-right-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled$="[[disableRight]]">\n        <paper-icon-button id="right" title="Indent" icon="icons:arrow-forward" on-tap="setIndent(1)"></paper-icon-button>\n      </div>\n      <div id="up-action" swipe-up-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled$="[[disableUp]]">\n        <paper-icon-button id="up" title="Move upwards" icon="icons:arrow-upward" on-tap="move(-1)"></paper-icon-button>\n      </div>\n    </swipe-action>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="enter" on-keys-pressed="_onEnter"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="backspace" on-keys-pressed="_onBackspace"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="up" on-keys-pressed="_onArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="down" on-keys-pressed="_onArrowDown"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="tab" on-keys-pressed="_onTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+tab" on-keys-pressed="_onShiftTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+up" on-keys-pressed="_onShiftArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+down" on-keys-pressed="_onShiftArrowDown"></iron-a11y-keys>\n'],['\n    <style>\n      :host {\n        display: block;\n        --indent-multiplier: 20px;\n      }\n      :host [data-indent="0"] #move {\n        margin-right: calc(var(--indent-multiplier) * 0);\n      }\n      :host [data-indent="1"] #move {\n        margin-right: calc(var(--indent-multiplier) * 1);\n      }\n      :host [data-indent="2"] #move {\n        margin-right: calc(var(--indent-multiplier) * 2);\n      }\n      :host [data-indent="3"] #move {\n        margin-right: calc(var(--indent-multiplier) * 3);\n      }\n      :host [data-indent="4"] #move {\n        margin-right: calc(var(--indent-multiplier) * 4);\n      }\n      :host [data-indent="5"] #move {\n        margin-right: calc(var(--indent-multiplier) * 5);\n      }\n      :host [data-indent="6"] #move {\n        margin-right: calc(var(--indent-multiplier) * 6);\n      }\n      :host #swipe {\n        height: 40px;\n      }\n      :host #input {\n        flex-grow: 1;\n        margin-right: 10px;\n      }\n      :host #wrapper {\n        display: flex;\n        height: 40px;\n        border-radius: 0.1em;\n        background-color: white;\n      }\n      :host:focus #wrapper,\n      :host:hover #wrapper {\n        cursor: pointer;\n      }\n      :host #swipe #move {\n        font-size: 16px;\n        padding: 10px;\n        color: transparent;\n      }\n      :host:focus #swipe #move,\n      :host:hover #swipe #move {\n        color: var(--lrnsys-outline-move-icon-color, #aaaaaa);\n      }\n      :host #swipe paper-icon-button {\n        position: static;\n        font-size: 16px;\n        height: 36px;\n        padding: 10px;\n        margin: 4px;\n        display: none;\n        border-radius: 0.1em;\n      }\n      :host:focus #swipe paper-icon-button,\n      :host:hover #swipe paper-icon-button {\n        width: 36px;\n        display: block;\n      }\n      :host [swipe-down-action],\n      :host [swipe-up-action]{\n        display: flex;\n        justify-content: flex-center;\n        color: var(--lrnsys-outline-add-button-color, #222222);\n      }\n      :host [swipe-left-action]{\n        display: flex;\n        justify-content: flex-end;\n      }\n      :host [swipe-right-action] {\n        display: flex;\n        justify-content: flex-start;\n      }\n      :host #swipe paper-icon-button#add {\n        width: 36px;\n        margin-right: 2px;\n        color: white;\n        background-color: var(--lrnsys-outline-add-button-color, #018dff);\n      }\n      :host #swipe paper-icon-button#delete {\n        color: white;\n        background-color: var(--lrnsys-outline-delete-button-color, #cc0000);\n      }\n    </style>\n    <swipe-action id="swipe" on-swiped-away="_onSwipedAway">\n      <div id="wrapper" data-indent\\$="[[indentLevel]]">\n        <iron-icon id="move" title="Move" icon="drawing:move" role="presentation"></iron-icon>\n        <paper-input id="input" label="Enter a page title" value\\$="[[title]]" no-label-float="">\n        </paper-input>\n        <paper-icon-button id="add" title="Add Item" icon="icons:add" on-tap="add"></paper-icon-button>\n        <paper-icon-button id="delete" title="Delete" icon="icons:delete" on-tap="delete"></paper-icon-button>\n      </div>\n      <div id="down-action" swipe-down-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled\\$="[[disableDown]]">\n        <paper-icon-button id="down" title="Move downwards" icon="icons:arrow-downward" on-tap="move(1)"></paper-icon-button>\n      </div>\n      <div id="left-action" swipe-left-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled\\$="[[disableLeft]]">\n        <paper-icon-button id="left" title="Outdent" icon="icons:arrow-backward" on-tap="setIndent(-1)"></paper-icon-button>\n      </div>\n      <div id="right-action" swipe-right-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled\\$="[[disableRight]]">\n        <paper-icon-button id="right" title="Indent" icon="icons:arrow-forward" on-tap="setIndent(1)"></paper-icon-button>\n      </div>\n      <div id="up-action" swipe-up-action="" swipe-size="40" swipe-rubber-band="10" gesture-disabled\\$="[[disableUp]]">\n        <paper-icon-button id="up" title="Move upwards" icon="icons:arrow-upward" on-tap="move(-1)"></paper-icon-button>\n      </div>\n    </swipe-action>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="enter" on-keys-pressed="_onEnter"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="backspace" on-keys-pressed="_onBackspace"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="up" on-keys-pressed="_onArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="down" on-keys-pressed="_onArrowDown"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="tab" on-keys-pressed="_onTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+tab" on-keys-pressed="_onShiftTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+up" on-keys-pressed="_onShiftArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+down" on-keys-pressed="_onShiftArrowDown"></iron-a11y-keys>\n']);return s=function(){return e},e}var a,r;function d(){var e=n(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 0.25em;\n        margin: 0.25em 0.25em 0.25em 0;\n        padding: 0.5em;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+↑</kbd> / <kbd>Shift+↓</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template id="domRepeat" is="dom-repeat" items$="{{items}}" as="item">\n        <lrnsys-outline-item disable-down$="{{item.disableDown}}" disable-left$="{{item.disableLeft}}" disable-right$="{{item.disableRight}}" disable-up$="{{item.disableUp}}" id$="{{item.id}}" index$="{{item.index}}" indent-level$="{{item.indent}}" parent$="{{item.parent}}" title$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n'],['\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 0.25em;\n        margin: 0.25em 0.25em 0.25em 0;\n        padding: 0.5em;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+↑</kbd> / <kbd>Shift+↓</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template id="domRepeat" is="dom-repeat" items\\$="{{items}}" as="item">\n        <lrnsys-outline-item disable-down\\$="{{item.disableDown}}" disable-left\\$="{{item.disableLeft}}" disable-right\\$="{{item.disableRight}}" disable-up\\$="{{item.disableUp}}" id\\$="{{item.id}}" index\\$="{{item.index}}" indent-level\\$="{{item.indent}}" parent\\$="{{item.parent}}" title\\$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n']);return d=function(){return e},e}e.Polymer({_template:e.html(s()),is:"lrnsys-outline-item",listeners:{change:"_onChange"},properties:{disableDown:{type:Boolean,value:!1},disableLeft:{type:Boolean,value:!1},disableRight:{type:Boolean,value:!1},disableUp:{type:Boolean,value:!1},id:{type:String,value:null},indentLevel:{type:Number,value:0},index:{type:Number,value:0},parent:{type:String,value:null},target:{type:Object,value:null},value:{type:String,value:null,reflectToAttribute:!0}},attached:function(){this.fire("attached-item",{item:this})},ready:function(){var e=this;this.target=this.$.input,e.fire("focus-item",e),e.addEventListener("focus",function(t){e.fire("focus-item",e)}),e.addEventListener("mouseover",function(t){e.fire("focus-item",e)}),e.addEventListener("blur",function(t){e.fire("blur-item",e)}),e.addEventListener("mouseout",function(t){e.fire("blur-item",e)})},focus:function(){return this.$.input.focus(),this},value:function(){return this.title=this.$.input.value,this.title},delete:function(){this.fire("delete-item",{item:this})},setIndent:function(e){this.fire("indent-item",{item:this,increase:e>0})},add:function(){var e=this.$.input.querySelector("input").selectionStart,t=this.$.input.value;this.fire("add-item",{item:this,value:t.slice(0,e),new:t.slice(e,t.length)})},move:function(e){this.fire("move-item",{item:this,moveUp:e<0})},setSelection:function(e,t){var i=void 0!==e?e:0,n=void 0!==t?t:i;try{this.$.input.querySelector("input").setSelectionRange(i,n)}catch(e){console.log(e)}this.focus()},_onChange:function(){this.fire("change-item",{item:this,value:this.$.input.value})},_onEnter:function(){var e=this.$.input.querySelector("input").selectionStart,t=this.$.input.value;this.fire("add-item",{item:this,value:t.slice(0,e),new:t.slice(e,t.length)})},_onBackspace:function(e){window.getSelection().toString()==this.$.input.value?(event.detail.keyboardEvent.preventDefault(),this.fire("delete-item",{item:this})):0==this.$.input.querySelector("input").selectionStart&&this.fire("indent-item",{item:this,increase:!1})},_onArrowUp:function(){0==this.$.input.querySelector("input").selectionStart&&this.fire("focus-item",{item:this,moveUp:!0})},_onArrowDown:function(){this.$.input.querySelector("input").selectionStart==this.$.input.value.length&&this.fire("focus-item",{item:this,moveUp:!1})},_onShiftTab:function(){this.setIndent(-1)},_onTab:function(e){0==this.$.input.querySelector("input").selectionStart&&(e.preventDefault(),this.setIndent(1))},_onShiftArrowUp:function(){this.move(-1)},_onShiftArrowDown:function(){this.move(1)},_onSwipedAway:function(e){"right"===e.detail.action.id?this.setIndent(1):"left"===e.detail.action.id?this.setIndent(-1):"up"===e.detail.action.id?this.move(-1):"down"===e.detail.action.id&&this.move(1),this.$.swipe.reset()}}),e.Polymer((r={_template:e.html(d()),is:"lrnsys-outline",listeners:(a={"delete-item":"_handleRemoveItem","indent-item":"_handleIndentItem","focus-item":"_handleFocusItem","add-item":"_handleAddItem","move-item":"_handleMoveItem","change-item":"_handleChangeItem"},t(a,"focus-item","_handleFocusItem"),t(a,"blur-item","_handleBlurItem"),a),properties:{title:{type:String,value:"Content Outline"},data:{type:Array,value:null},items:{type:Array,value:null,notify:!0}},openDirections:function(e){this.$.modal.opened=!0},closeDirections:function(e){this.$.modal.opened=!1,this.$.dialogtrigger.focus()},attached:function(){this.__modal=this.$.modal,document.body.addEventListener("iron-overlay-canceled",this._accessibleFocus.bind(this)),document.body.appendChild(this.$.modal)},_accessibleFocus:function(e){e.detail===this.__modal&&this.$.dialogtrigger.focus()},ready:function(){(null===this.data||this.data.length<1)&&(this.__tempid=void 0===this.__tempid?0:this.__tempid+1,this.data=[{id:"outline-item-"+this.__tempid,title:"",order:0,parent:null}]),this.setData(this.data)},setData:function(e){if(this.items=[],this.items=e,void 0!==e&&e.length>0){var t=-1;for(i in e){var n=parseInt(this._getIndent(e,i));this.__tempid=void 0===this.__tempid?0:this.__tempid+1,e[i].index=parseInt(i),e[i].indent=n,e[i].prevSibling=this._getSibling(parseInt(i),n,!0),e[i].nextSibling=this._getSibling(parseInt(i),n,!1),e[i].disableUp=null===e[i].prevSibling,e[i].disableDown=null===e[i].nextSibling,e[i].disableLeft=0===n,e[i].disableRight=n>t,e[i].id=void 0===e[i].id?"outline-item-"+this.__tempid:e[i].id,t=n}}this.items=[],this.items=e},getData:function(){for(i in this.items)this.items[i].order=this._getOrder(this.items[i]);return this.items},addItem:function(e){var t=this.items,i=e.index;this.__tempid=this.__tempid+1,t.splice(i+1,0,{id:"outline-item-"+this.__tempid,title:"",indent:e.indent,parent:e.parent}),this._refreshData(),this.__focusedItem=e.nextElementSibling,this.__focusedItem.focus()},removeItem:function(e){var t=e.index;if(confirm("Do you really want to delete "+this.items[t].title+"?")){for(k in this.__focusedItem=e.previousElementSibling,this.items)this.items[k].parent==this.items[t].id&&(this.items[k].parent=this.items[t].parent);this.items.splice(t,1),this._refreshData(),this.__focusedItem.focus()}},moveItem:function(e,t){var i=e.index,n=this._getLastChild(e),s=n-i+1,a=t?this.items[i].prevSibling:this._getLastChild(this.items[n+1])-s+1,r=this.items;a>-1&&a<this.items.length&&(t&&!e.disableUp||!t&&!e.disableDown)&&(r.splice.apply(r,[a,0].concat(o(r.splice(i,s)))),this.setData(r),this.__focusedItem=this.$.itemslist.querySelectorAll("lrnsys-outline-item")[a],this.__focusedItem.focus())},_refreshData:function(){var e=this.items;this.items=[],this.items=e,void 0!==this.__focusedItem&&null!==this.__focusedItem&&this.__focusedItem.focus()},_adjustIndent:function(e,t){if(t>0&&!e.disableRight||t<0&&!e.disableLeft){var i=parseInt(e.index),n=e.indent,o=e.indent+t,s=i+1,a=null!==e.prevSibling?e.prevSibling.id:null,r=this._getItemById(e.parent)&&this._getItemById(e.parent).parent?this._getItemById(e.parent).parent.id:null;for(e.indent=o,e.parent=t>0?a:r,e.prevSibling=this._getSibling(i,o,!0),e.nextSibling=this._getSibling(i,o,!1),e.disableUp=null===e.prevSibling,e.disableDown=null===e.nextSibling,e.disableLeft=0===o,e.disableRight=null===this.items[i-1]||o>this.items[i-1].indent;null!==this.items[s]&&void 0!==this.items[s]&&n<this.items[s].indent;)this.items[s].indent=this.items[s].indent+t,s++,next=this.items[s];this._refreshData()}},_getLastChild:function(e){var t=null!=e?this._getSibling(e.index,e.indent,!1):null;return null!=t?t-1:null!==e.parent&&null!==e.parent&&null!==this._getItemById(e.parent)?this._getLastChild(this._getItemById(e.parent)):this.items.length-1},_getIndent:function(e,t){if(void 0!==e[t].parent){var i=e.findIndex(function(i){return i.id===e[t].parent});if(void 0!==e[i]&&void 0!==e[i].indent)return e[i].indent+1}return 0},_getOrder:function(e){var t=0,n=0;for(i in this.items)this.items[i].parent==e.parent&&this.items[i].id==e.id?n=t:this.items[i].parent==e.parent&&t++;return n},_getSibling:function(e,t,i){for(var n=i?-1:1,o=e+n,s=null;o<this.items.length&&o>-1;)null===s&&this.items[o].parent===this.items[e].parent&&(s=o),o+=n;return s},_getItemById:function(e,t){var i=this.items.findIndex(function(t){return t.id===e});return t=void 0===t?0:t,void 0!==this.items[i+t]?this.items[i+t]:null},_handleAddItem:function(e){this.addItem(e.detail.item)},_handleRemoveItem:function(e){this.removeItem(e.detail.item)},_handleMoveItem:function(e){this.moveItem(e.detail.item,e.detail.moveUp,e.detail.byGroup)},_handleFocusItem:function(e){(e.detail.moveUp?e.detail.item.previousElementSibling:e.detail.item.nextElementSibling).setSelection()},_handleIndentItem:function(e){var t=e.detail.increase?1:-1;this._adjustIndent(this._getItemById(e.detail.item.id),t)},_handleChangeItem:function(e){this._getItemById(e.detail.item.id).title=e.detail.value,this._refreshData()}},t(r,"_handleFocusItem",function(e){this.__focusedItem=e.srcElement}),t(r,"_handleBlurItem",function(e){}),r))});
//# sourceMappingURL=lrnsys-outline.umd.js.map
