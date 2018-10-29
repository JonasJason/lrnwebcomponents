!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/async.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/paper-icon-button/paper-icon-button.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js"],t):t(e.polymerLegacy_js,e.polymer_dom_js,e.async)}(this,function(e,t,o){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){var e,t,o=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n\n      responsive-grid-col {\n        --responsive-grid-col-inner: {\n          padding-left: 0;\n          padding-right: 0;\n        }\n      }\n\n      responsive-grid-row {\n        --responsive-grid-row-inner: {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n\n      :host[edit-mode] responsive-grid-col.mover {\n        min-height: 150px;\n        background-color: #d1d1d1;\n      }\n\n      :host ::slotted(*) .mover,\n      :host responsive-grid-col[data-draggable].mover {\n        outline: 2px dotted #d1d1d1;\n        outline-offset: 2px;\n        background-color: rgba(240, 240, 240, .2);\n      }\n\n      :host ::slotted(*) .active-item {\n        outline: 2px dashed #aaaaaa !important;\n        outline-offset: 2px;\n        background-color: rgba(220, 220, 220, .6) !important;\n      }\n\n      :host ::slotted(*) [data-draggable]:focus,\n      :host ::slotted(*) [data-draggable]:hover,\n      :host ::slotted(*) [data-draggable]:active {\n        outline: 2px dotted #d1d1d1;\n        outline-offset: 2px;\n        background-color: rgba(240, 240, 240, .2);\n        cursor: move !important;\n      }\n\n      paper-icon-button {\n        display: none;\n        position: absolute;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        width: 20px;\n        height: 20px;\n        background-color: #EEEEEE;\n        border-radius: 50%;\n        box-sizing: content-box !important;\n        z-index: 1;\n      }\n\n      paper-icon-button.active {\n        display: block;\n      }\n\n      .button-holding-pen {\n        position: relative;\n      }\n    </style>\n    <div class="button-holding-pen">\n      <paper-icon-button title="move item up" icon="icons:arrow-upward" id="up"></paper-icon-button>\n      <paper-icon-button title="move item right" icon="icons:arrow-forward" id="right"></paper-icon-button>\n      <paper-icon-button title="move item down" icon="icons:arrow-downward" id="down"></paper-icon-button>\n      <paper-icon-button title="move item left" icon="icons:arrow-back" id="left"></paper-icon-button>\n    </div>\n    <responsive-grid-row gutter="0">\n      <template is="dom-if" if="[[!hideCol1]]" strip-whitespace>\n        <responsive-grid-col id="col1" style$="background-color:[[__col1Color]];" xl$="[[col1_xl]]" lg$="[[col1_lg]]" md$="[[col1_md]]" sm$="[[col1_sm]]" xs$="[[col1_xs]]">\n          <slot name="col-1"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol2]]" strip-whitespace>\n        <responsive-grid-col id="col2" style$="background-color:[[__col2Color]];" xl$="[[col2_xl]]" lg$="[[col2_lg]]" md$="[[col2_md]]" sm$="[[col2_sm]]" xs$="[[col2_xs]]">\n          <slot name="col-2"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol3]]" strip-whitespace>\n        <responsive-grid-col id="col3" style$="background-color:[[__col3Color]];" xl$="[[col3_xl]]" lg$="[[col3_lg]]" md$="[[col3_md]]" sm$="[[col3_sm]]" xs$="[[col3_xs]]">\n          <slot name="col-3"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol4]]" strip-whitespace>\n        <responsive-grid-col id="col4" style$="background-color:[[__col4Color]];" xl$="[[col4_xl]]" lg$="[[col4_lg]]" md$="[[col4_md]]" sm$="[[col4_sm]]" xs$="[[col4_xs]]">\n          <slot name="col-4"></slot>\n        </responsive-grid-col>\n      </template>\n      <responsive-grid-col xl="12" lg="12" md="12" sm="12" xs="12">\n        <slot></slot>\n      </responsive-grid-col>\n    </responsive-grid-row>\n    <iron-a11y-keys stop-keyboard-event-propagation="" target="[[__activeItem]]" keys="enter" on-keys-pressed="setActiveElement"></iron-a11y-keys>\n    <iron-a11y-keys target="[[__activeItem]]" keys="esc" on-keys-pressed="cancelActive"></iron-a11y-keys>\n'],(t=['\n    <style>\n      :host {\n        display: block;\n      }\n\n      responsive-grid-col {\n        --responsive-grid-col-inner: {\n          padding-left: 0;\n          padding-right: 0;\n        }\n      }\n\n      responsive-grid-row {\n        --responsive-grid-row-inner: {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n\n      :host[edit-mode] responsive-grid-col.mover {\n        min-height: 150px;\n        background-color: #d1d1d1;\n      }\n\n      :host ::slotted(*) .mover,\n      :host responsive-grid-col[data-draggable].mover {\n        outline: 2px dotted #d1d1d1;\n        outline-offset: 2px;\n        background-color: rgba(240, 240, 240, .2);\n      }\n\n      :host ::slotted(*) .active-item {\n        outline: 2px dashed #aaaaaa !important;\n        outline-offset: 2px;\n        background-color: rgba(220, 220, 220, .6) !important;\n      }\n\n      :host ::slotted(*) [data-draggable]:focus,\n      :host ::slotted(*) [data-draggable]:hover,\n      :host ::slotted(*) [data-draggable]:active {\n        outline: 2px dotted #d1d1d1;\n        outline-offset: 2px;\n        background-color: rgba(240, 240, 240, .2);\n        cursor: move !important;\n      }\n\n      paper-icon-button {\n        display: none;\n        position: absolute;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        width: 20px;\n        height: 20px;\n        background-color: #EEEEEE;\n        border-radius: 50%;\n        box-sizing: content-box !important;\n        z-index: 1;\n      }\n\n      paper-icon-button.active {\n        display: block;\n      }\n\n      .button-holding-pen {\n        position: relative;\n      }\n    </style>\n    <div class="button-holding-pen">\n      <paper-icon-button title="move item up" icon="icons:arrow-upward" id="up"></paper-icon-button>\n      <paper-icon-button title="move item right" icon="icons:arrow-forward" id="right"></paper-icon-button>\n      <paper-icon-button title="move item down" icon="icons:arrow-downward" id="down"></paper-icon-button>\n      <paper-icon-button title="move item left" icon="icons:arrow-back" id="left"></paper-icon-button>\n    </div>\n    <responsive-grid-row gutter="0">\n      <template is="dom-if" if="[[!hideCol1]]" strip-whitespace>\n        <responsive-grid-col id="col1" style\\$="background-color:[[__col1Color]];" xl\\$="[[col1_xl]]" lg\\$="[[col1_lg]]" md\\$="[[col1_md]]" sm\\$="[[col1_sm]]" xs\\$="[[col1_xs]]">\n          <slot name="col-1"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol2]]" strip-whitespace>\n        <responsive-grid-col id="col2" style\\$="background-color:[[__col2Color]];" xl\\$="[[col2_xl]]" lg\\$="[[col2_lg]]" md\\$="[[col2_md]]" sm\\$="[[col2_sm]]" xs\\$="[[col2_xs]]">\n          <slot name="col-2"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol3]]" strip-whitespace>\n        <responsive-grid-col id="col3" style\\$="background-color:[[__col3Color]];" xl\\$="[[col3_xl]]" lg\\$="[[col3_lg]]" md\\$="[[col3_md]]" sm\\$="[[col3_sm]]" xs\\$="[[col3_xs]]">\n          <slot name="col-3"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is="dom-if" if="[[!hideCol4]]" strip-whitespace>\n        <responsive-grid-col id="col4" style\\$="background-color:[[__col4Color]];" xl\\$="[[col4_xl]]" lg\\$="[[col4_lg]]" md\\$="[[col4_md]]" sm\\$="[[col4_sm]]" xs\\$="[[col4_xs]]">\n          <slot name="col-4"></slot>\n        </responsive-grid-col>\n      </template>\n      <responsive-grid-col xl="12" lg="12" md="12" sm="12" xs="12">\n        <slot></slot>\n      </responsive-grid-col>\n    </responsive-grid-row>\n    <iron-a11y-keys stop-keyboard-event-propagation="" target="[[__activeItem]]" keys="enter" on-keys-pressed="setActiveElement"></iron-a11y-keys>\n    <iron-a11y-keys target="[[__activeItem]]" keys="esc" on-keys-pressed="cancelActive"></iron-a11y-keys>\n'])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return n=function(){return o},o}e.Polymer({_template:e.html(n()),is:"grid-plate",listeners:{focusin:"_focusIn","up.tap":"moveActiveElement","down.tap":"moveActiveElement","left.tap":"moveActiveElement","right.tap":"moveActiveElement"},behaviors:[HAXBehaviors.PropertiesBehaviors,window.simpleColorsBehaviors],properties:{layout:{type:String,value:"12",observer:"_layoutChanged"},editMode:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_editModeChanged"},colors:{type:String,value:""},col1Color:{type:String,value:""},col2Color:{type:String,value:""},col3Color:{type:String,value:""},col4Color:{type:String,value:""},_colors:{type:String,computed:"_colorCreation(colors, col1Color, col2Color, col3Color, col4Color)",observer:"_colColors"},__activeItem:{type:Object,observer:"_activeItemChanged"}},cancelActive:function(e){this.__activeItem=null},moveActiveElement:function(e){var o=this,i=t.dom(e).localTarget,n=this.__activeItem.getAttribute("slot").split("-"),r=1,s=[1,2,3,4];for(var l in s)this["hideCol"+s[l]]||(r=s[l]);switch(i.id){case"up":null!==this.__activeItem.previousElementSibling&&t.dom(this).insertBefore(this.__activeItem,this.__activeItem.previousElementSibling);break;case"down":null!==this.__activeItem.nextElementSibling&&t.dom(this).insertBefore(this.__activeItem.nextElementSibling,this.__activeItem);break;case"left":parseInt(n[1])>1&&(this.__activeItem.setAttribute("slot","col-"+(parseInt(n[1])-1)),t.dom(this).appendChild(this.__activeItem));break;case"right":parseInt(n[1])<r&&(this.__activeItem.setAttribute("slot","col-"+(parseInt(n[1])+1)),t.dom(this).appendChild(this.__activeItem))}setTimeout(function(){o.positionArrows(o.__activeItem),o.__activeItem.focus()},100)},_activeItemChanged:function(e,t){"undefined"!==i(e)&&null!=e?(e.classList.add("active-item"),this.positionArrows(e)):null==e&&this.positionArrows(e),"undefined"!==i(t)&&null!=t&&(t.classList.remove("active-item"),t.blur())},setActiveElement:function(e){t.dom(e).localTarget;this.$.up.focus(),e.preventDefault(),e.stopPropagation()},_focusIn:function(e){if(this.editMode){var o=t.dom(e).localTarget;t.dom(o).parentNode===this&&(this.__activeItem=o)}},positionArrows:function(e){if(null==e)this.$.up.classList.remove("active"),this.$.down.classList.remove("active"),this.$.left.classList.remove("active"),this.$.right.classList.remove("active");else{this.$.up.classList.add("active"),this.$.down.classList.add("active"),this.$.left.classList.add("active"),this.$.right.classList.add("active"),this.$.up.disabled=!1,this.$.down.disabled=!1,this.$.left.disabled=!1,this.$.right.disabled=!1;var t=this.getBoundingClientRect(),o=e.getBoundingClientRect(),i=o.top-t.top,n=o.left-t.left;this.$.up.style.top=i-20+"px",this.$.down.style.top=i+o.height+"px",this.$.left.style.top=i+o.height/2+"px",this.$.right.style.top=i+o.height/2+"px",this.$.up.style.left=n+o.width/2-10+"px",this.$.down.style.left=n+o.width/2-10+"px",this.$.left.style.left=n-20+"px",this.$.right.style.left=n+o.width+"px";var r=e.getAttribute("slot").split("-"),s=1,l=[1,2,3,4];for(var a in l)this["hideCol"+l[a]]||(s=l[a]);null===e.previousElementSibling&&(this.$.up.disabled=!0),null===e.nextElementSibling&&(this.$.down.disabled=!0),1===parseInt(r[1])&&(this.$.left.disabled=!0),parseInt(r[1])===s&&(this.$.right.disabled=!0)}},_editModeChanged:function(e,n){var r=this,s=t.dom(this).getEffectiveChildNodes();if("object"===i(s))if(e&&!n){for(var l in s)"undefined"!==i(s[l].tagName)&&(s[l].addEventListener("drop",this.dropEvent.bind(this)),s[l].addEventListener("dragstart",this.dragStart.bind(this)),s[l].addEventListener("dragend",this.dragEnd.bind(this)),s[l].addEventListener("dragover",function(e){e.preventDefault()}),s[l].setAttribute("draggable",!0),s[l].setAttribute("data-draggable",!0),s[l].setAttribute("tabindex",0));o.microTask.run(function(){var e=[1,2,3,4];for(var t in e)r["hideCol"+e[t]]||(r.shadowRoot.querySelector("#col"+e[t]).addEventListener("drop",r.dropEvent.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).addEventListener("dragstart",r.dragStart.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).addEventListener("dragend",r.dragEnd.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).addEventListener("dragover",function(e){e.preventDefault()}),r.shadowRoot.querySelector("#col"+e[t]).setAttribute("data-draggable",!0))})}else if(!e&&n){for(var l in s)"undefined"!==i(s[l].tagName)&&(s[l].removeEventListener("drop",this.dropEvent.bind(this)),s[l].removeEventListener("dragstart",this.dragStart.bind(this)),s[l].removeEventListener("dragend",this.dragEnd.bind(this)),s[l].removeEventListener("dragover",function(e){e.preventDefault()}),s[l].removeAttribute("draggable"),s[l].removeAttribute("data-draggable"),s[l].removeAttribute("tabindex"));o.microTask.run(function(){var e=[1,2,3,4];for(var t in e)r["hideCol"+e[t]]||(r.shadowRoot.querySelector("#col"+e[t]).removeEventListener("drop",r.dropEvent.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).removeEventListener("dragstart",r.dragStart.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).removeEventListener("dragend",r.dragEnd.bind(r)),r.shadowRoot.querySelector("#col"+e[t]).removeEventListener("dragover",function(e){e.preventDefault()}),r.shadowRoot.querySelector("#col"+e[t]).removeAttribute("data-draggable"))})}},dropEvent:function(e){var o=this,n=t.dom(e).localTarget;if("undefined"!==i(this.__activeItem)&&"undefined"!==i(n)&&null!=n.getAttribute("slot")&&this.__activeItem!==n)this.__activeItem.setAttribute("slot",n.getAttribute("slot")),t.dom(this).insertBefore(this.__activeItem,n),e.preventDefault(),e.stopPropagation();else if("RESPONSIVE-GRID-COL"===n.tagName){var r=n.id.replace("col","");this.__activeItem.setAttribute("slot","col-"+r),t.dom(this).appendChild(this.__activeItem),e.preventDefault(),e.stopPropagation()}var s=t.dom(this).children;for(var l in s)s[l].classList.remove("mover");var a=[1,2,3,4];for(var d in a)this["hideCol"+a[d]]||this.shadowRoot.querySelector("#col"+a[d]).classList.remove("mover");setTimeout(function(){o.positionArrows(o.__activeItem),o.__activeItem.focus()},100)},_colorCreation:function(e,t,o,i,n){var r=e.split("/"),s=[t,o,i,n];for(var l in s)""!=s[l]&&(r[l]=s[l]);return r},dragStart:function(e){var o=t.dom(this).children;for(var i in o)o[i].classList.add("mover");var n=[1,2,3,4];for(var r in n)this["hideCol"+n[r]]||this.shadowRoot.querySelector("#col"+n[r]).classList.add("mover")},dragEnd:function(e){var o=t.dom(this).children;for(var i in o)o[i].classList.remove("mover");var n=[1,2,3,4];for(var r in n)this["hideCol"+n[r]]||this.shadowRoot.querySelector("#col"+n[r]).classList.remove("mover")},splitColor:function(e){return""!=e&&"undefined"!==i(this.__hexCodes[e])?this.__hexCodes[e][this.__hexCodes[e].length-1]:e},_colColors:function(e,t){if(""!=e)for(var o in e)this["__col"+(parseInt(o)+1)+"Color"]=this.splitColor(e[o])},_layoutChanged:function(e){var t=e.split("/");switch(this.__colCount=t.length,t.length){case 1:this.hideCol1=!1,this.hideCol2=!0,this.hideCol3=!0,this.hideCol4=!0;break;case 2:this.hideCol1=!1,this.hideCol2=!1,this.hideCol3=!0,this.hideCol4=!0;break;case 3:this.hideCol1=!1,this.hideCol2=!1,this.hideCol3=!1,this.hideCol4=!0;break;case 4:this.hideCol1=!1,this.hideCol2=!1,this.hideCol3=!1,this.hideCol4=!1}for(var o in t){var i=Number(o)+1;this["col"+i+"_xl"]=t[o],this["col"+i+"_lg"]=t[o],this["col"+i+"_md"]=t[o],this["col"+i+"_sm"]=t[o],this["col"+i+"_xs"]=t[o]}},attached:function(){document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this)),document.body.addEventListener("hax-insert-content",this.haxInsertContent.bind(this));var e=[];for(var t in this.__hexCodes)e[t]=t;var o={canScale:!0,canPosition:!0,canEditSource:!1,settings:{quick:[],configure:[{property:"layout",title:"Layout",description:"Style to present these items",inputMethod:"select",options:{12:"1 col, full width","8/4":"2 cols, 66% / 33% split","6/6":"2 cols, 50% split","4/8":"2 cols, 33% / 66% split","4/4/4":"3 cols, 33% each","3/3/3/3":"4 cols, 25% each"}},{property:"col1Color",title:"Col 1 color",description:"Color for the 1st column",inputMethod:"select",options:e},{property:"col2Color",title:"Col 2 color",description:"Color for the 1st column",inputMethod:"select",options:e},{property:"col3Color",title:"Col 3 color",description:"Color for the 1st column",inputMethod:"select",options:e},{property:"col4Color",title:"Col 4 color",description:"Color for the 1st column",inputMethod:"select",options:e}],advanced:[]},saveOptions:{unsetAttributes:["__active-item","_colors","edit-mode"]}};this.setHaxProperties(o)},haxInsertContent:function(e){var t=this;this===window.HaxStore.instance.activeContainerNode&&(this.editMode=!1,setTimeout(function(){t.editMode=!0,t.positionArrows(t.__activeItem),t.__activeItem.focus()},250))},_haxStorePropertyUpdated:function(e){e.detail&&"undefined"!==i(e.detail.value)&&e.detail.property&&("object"===i(e.detail.value)&&this.set(e.detail.property,null),this.set(e.detail.property,e.detail.value))}})});
//# sourceMappingURL=grid-plate.umd.js.map
