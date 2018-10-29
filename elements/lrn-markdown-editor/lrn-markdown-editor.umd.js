!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/controls/mtz-marked-control-link.js"),require("@polymer/iron-icons/editor-icons.js"),require("@polymer/iron-icons/places-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/paper-input/paper-textarea.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-tabs/paper-tabs.js"),require("@polymer/marked-element/marked-element.js"),require("@polymer/iron-pages/iron-pages.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js","@lrnwebcomponents/mtz-marked-editor/lib/controls/mtz-marked-control-link.js","@polymer/iron-icons/editor-icons.js","@polymer/iron-icons/places-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/paper-input/paper-textarea.js","@polymer/paper-input/paper-input.js","@polymer/paper-tabs/paper-tabs.js","@polymer/marked-element/marked-element.js","@polymer/iron-pages/iron-pages.js"],n):n(e.polymerLegacy_js)}(this,function(e){"use strict";function n(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function r(){var e=n(['\n    <style>\n       :host {\n        display: block;\n      }\n\n      .mtz-controls {\n        display: flex;\n        width: 100%;\n      }\n\n      .mtz-toolbar {\n        flex-grow: 5;\n      }\n\n    </style>\n    <mtz-marked-editor id="markededitor">\n      <div slot="controls" class="mtz-controls">\n        <mtz-marked-control-generic-wrap icon="editor:format-bold" title="Bold" syntax-prefix="**" syntax-suffix="**" keys="ctrl+b"></mtz-marked-control-generic-wrap>\n        <mtz-marked-control-generic-wrap icon="editor:format-italic" title="Italic" syntax-prefix="_" syntax-suffix="_" keys="ctrl+i"></mtz-marked-control-generic-wrap>\n        <mtz-marked-control-generic-line icon="editor:format-size" title="Heading" syntax-prefix="# "></mtz-marked-control-generic-line>\n        <mtz-marked-control-generic-line icon="editor:format-list-numbered" title="Ordered List" syntax-prefix="1. "></mtz-marked-control-generic-line>\n        <mtz-marked-control-generic-line icon="editor:format-list-bulleted" title="Unordered List" syntax-prefix="- "></mtz-marked-control-generic-line>\n        <mtz-marked-control-link icon="editor:insert-link" title="Link"></mtz-marked-control-link>\n      </div>\n      <paper-textarea slot="textarea" label="Start typing..." value="{{content}}"></paper-textarea>\n    </mtz-marked-editor>\n']);return r=function(){return e},e}function t(){var e=n(['\n    <style>\n       :host {\n        display: block;\n      }\n\n      #split-pane {\n        display: flex;\n      }\n\n      .split-pane>* {\n        flex: 1 1 auto;\n        min-height: 10em;\n      }\n\n      .preview-pane {\n        background: lightblue;\n      }\n\n      paper-card {\n        padding: 1em;\n        width: calc(100% - 2em);\n      }\n\n      paper-tabs {\n        background: #F5F5F5;\n        border-style: solid;\n        border-color: #DCDCDC;\n        border-width: 1px;\n        min-width: 500px;\n      }\n\n      marked-element.lrn-markdown-editor {\n        width: 100%;\n        word-wrap: break-word;\n      }\n\n      .container-flex {\n        display: flex;\n        flex-wrap: nowrap;\n      }\n\n      .split-pane .container-flex>* {\n        width: 50%;\n      }\n\n      .split-pane marked-element {\n        width: calc(100% - 2em);\n        min-width: 150px;\n        margin: 0 1em;\n        padding: 0 1em;\n        background: #FFF;\n        border-left: solid #DCDCDC 1px;\n      }\n    </style>\n\n    <div class="mtz-toolbar">\n      <paper-tabs selected="{{selected}}">\n        <paper-tab>Write</paper-tab>\n        <paper-tab>Preview</paper-tab>\n        <paper-tab>Split View</paper-tab>\n      </paper-tabs>\n    </div>\n\n    <iron-pages selected="{{selected}}">\n\n      <section>\n        <paper-card>\n          <lrn-markdown-editor-editor content="{{content}}"></lrn-markdown-editor-editor>\n        </paper-card>\n      </section>\n\n      <section>\n        <paper-card>\n          <marked-element markdown="{{content}}"></marked-element>\n        </paper-card>\n      </section>\n\n      <section class="split-pane">\n        <paper-card>\n          <div class="container-flex">\n            <lrn-markdown-editor-editor content="{{content}}"></lrn-markdown-editor-editor>\n            <marked-element class="preview-pane" markdown="{{content}}"></marked-element>\n          </div>\n        </paper-card>\n      </section>\n\n    </iron-pages>\n']);return t=function(){return e},e}e.Polymer({_template:e.html(r()),is:"lrn-markdown-editor-editor",properties:{content:{type:String,notify:!0}},_changed:function(e){var n=this.$.markededitor.getContent();console.log("changed"),this.set("content",n),this.fire("content-updated",{content:this.content})}}),e.Polymer({_template:e.html(t()),is:"lrn-markdown-editor",properties:{content:{type:String,notify:!0},selected:{type:String,value:"0",reflectToAttribute:!0},layout:{type:String,value:0},cookies:{type:Boolean,value:!0},elReady:{type:Boolean,value:!1}},observers:["_selectedChanged(selected)"],_selectedChanged:function(e){var n=this._getCookieName();2===e?this._createCookie(n,"true","30"):2!==e&&!0===this.elReady&&this._eraseCookie(n)},_createCookie:function(e,n,r){var t="";if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),t="; expires="+o.toUTCString()}document.cookie=e+"="+n+t+"; path=/"},_readCookie:function(e){for(var n=e+"=",r=document.cookie.split(";"),t=0;t<r.length;t++){for(var o=r[t];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return null},_eraseCookie:function(e){this._createCookie(e,"",-1)},_getCookieName:function(){return"lrnmarkdowneditorsplitview"},ready:function(){this.elReady=!0;var e=this._getCookieName(),n=this._readCookie(e);n&&"true"===n&&(this.selected=2)}})});
//# sourceMappingURL=lrn-markdown-editor.umd.js.map
