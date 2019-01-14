define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-icons/iron-icons.js"],function(_exports,_polymerLegacy,_polymerDom,_paperIconButton,_paperButton,_ironIcons){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ItemOverlayOps=void 0;function _templateObject_88a68180184e11e98019197b469b322b(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        outline: none;\n      }\n      #container {\n        display: none;\n        opacity: 0;\n        background-color: transparent;\n        transition: background-color 0.6s linear, visibility 0.6s linear,\n          opacity 0.6s linear;\n        visibility: hidden;\n      }\n      :host([edit-mode]) #container {\n        display: block;\n        opacity: 0.4;\n        visibility: visible;\n        background-color: var(--item-overlay-ops, #999999);\n        position: absolute;\n        z-index: 1;\n        @apply --item-overlay-ops-container;\n      }\n      :host([edit-mode]) #container:hover,\n      :host([edit-mode]) #container:focus,\n      :host([focused]) #container {\n        opacity: 0.8;\n        background-color: var(--item-overlay-ops, #ffffff);\n      }\n      .ops {\n        width: 100%;\n        height: 39px;\n        padding: 0;\n        margin: 0;\n        border-bottom: 1px solid rgba(100, 100, 100, 0.4);\n        text-align: center;\n      }\n      .ops paper-icon-button {\n        display: inline-flex;\n        width: 26px;\n        height: 26px;\n        padding: 1px;\n        margin: 6px;\n        color: #999999;\n      }\n      .ops paper-icon-button#cancel {\n        width: 16px;\n        height: 16px;\n        padding: 0px;\n        margin: 4px;\n        position: absolute;\n      }\n      .ops paper-icon-button.active {\n        color: #000000;\n        background-color: rgba(255, 255, 255, 0.6);\n        border-radius: 50%;\n      }\n      .active-op {\n        text-transform: capitalize;\n        margin: 0;\n        height: 40px;\n        line-height: 40px;\n        font-size: 20px;\n        text-align: center;\n      }\n      #workingarea {\n        width: 100%;\n        padding: 0;\n        margin: 0 auto;\n        align-content: center;\n      }\n      #workingarea paper-icon-button {\n        width: 50%;\n        height: 100%;\n        display: inline-flex;\n        min-width: unset;\n        padding: 16px;\n        margin: 0;\n        border: none;\n        border-radius: 0;\n      }\n      #workingarea #option1 {\n        background-color: rgba(100, 255, 100, 0.6);\n      }\n      #workingarea #option2 {\n        background-color: rgba(255, 100, 100, 0.6);\n      }\n      #workingarea #option1:hover,\n      #workingarea #option1:focus {\n        background-color: rgba(100, 255, 100, 1);\n      }\n      #workingarea #option2:hover,\n      #workingarea #option2:focus {\n        background-color: rgba(255, 100, 100, 1);\n      }\n      #workingarea {\n        display: none;\n      }\n      #workingarea.move {\n        display: flex;\n      }\n      #workingarea.move #option1,\n      #workingarea.move #option2 {\n        background-color: rgba(200, 200, 200, 0.5);\n      }\n      #workingarea.move #option1:hover,\n      #workingarea.move #option1:focus,\n      #workingarea.move #option2:hover,\n      #workingarea.move #option2:focus {\n        background-color: rgba(200, 200, 200, 1);\n      }\n      #workingarea.remove {\n        display: flex;\n      }\n      #workingarea.duplicate {\n        display: flex;\n      }\n    </style>\n    <div id=\"container\">\n      <div class=\"ops\">\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:add\"\n          id=\"add\"\n          hidden$=\"[[!add]]\"\n          title=\"Add to this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:create\"\n          id=\"edit\"\n          hidden$=\"[[!edit]]\"\n          title=\"Edit this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:swap-horiz\"\n          id=\"move\"\n          hidden$=\"[[!move]]\"\n          title=\"Move this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:delete\"\n          id=\"remove\"\n          hidden$=\"[[!remove]]\"\n          title=\"Delete this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:content-copy\"\n          id=\"duplicate\"\n          hidden$=\"[[!duplicate]]\"\n          title=\"Duplicate this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:cancel\"\n          id=\"cancel\"\n          hidden$=\"[[!__anyOp]]\"\n          title=\"Cancel\"\n        ></paper-icon-button>\n      </div>\n      <div class=\"active-op\">[[activeTitle]]</div>\n      <div id=\"workingarea\" class$=\"[[activeOp]]\">\n        <paper-icon-button\n          on-tap=\"_optionSelected\"\n          id=\"option1\"\n          title=\"[[__option1Text]]\"\n          icon=\"[[__option1Icon]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_optionSelected\"\n          id=\"option2\"\n          title=\"[[__option2Text]]\"\n          icon=\"[[__option2Icon]]\"\n        ></paper-icon-button>\n      </div>\n    </div>\n    <slot></slot>\n  "],["\n    <style>\n      :host {\n        display: block;\n        outline: none;\n      }\n      #container {\n        display: none;\n        opacity: 0;\n        background-color: transparent;\n        transition: background-color 0.6s linear, visibility 0.6s linear,\n          opacity 0.6s linear;\n        visibility: hidden;\n      }\n      :host([edit-mode]) #container {\n        display: block;\n        opacity: 0.4;\n        visibility: visible;\n        background-color: var(--item-overlay-ops, #999999);\n        position: absolute;\n        z-index: 1;\n        @apply --item-overlay-ops-container;\n      }\n      :host([edit-mode]) #container:hover,\n      :host([edit-mode]) #container:focus,\n      :host([focused]) #container {\n        opacity: 0.8;\n        background-color: var(--item-overlay-ops, #ffffff);\n      }\n      .ops {\n        width: 100%;\n        height: 39px;\n        padding: 0;\n        margin: 0;\n        border-bottom: 1px solid rgba(100, 100, 100, 0.4);\n        text-align: center;\n      }\n      .ops paper-icon-button {\n        display: inline-flex;\n        width: 26px;\n        height: 26px;\n        padding: 1px;\n        margin: 6px;\n        color: #999999;\n      }\n      .ops paper-icon-button#cancel {\n        width: 16px;\n        height: 16px;\n        padding: 0px;\n        margin: 4px;\n        position: absolute;\n      }\n      .ops paper-icon-button.active {\n        color: #000000;\n        background-color: rgba(255, 255, 255, 0.6);\n        border-radius: 50%;\n      }\n      .active-op {\n        text-transform: capitalize;\n        margin: 0;\n        height: 40px;\n        line-height: 40px;\n        font-size: 20px;\n        text-align: center;\n      }\n      #workingarea {\n        width: 100%;\n        padding: 0;\n        margin: 0 auto;\n        align-content: center;\n      }\n      #workingarea paper-icon-button {\n        width: 50%;\n        height: 100%;\n        display: inline-flex;\n        min-width: unset;\n        padding: 16px;\n        margin: 0;\n        border: none;\n        border-radius: 0;\n      }\n      #workingarea #option1 {\n        background-color: rgba(100, 255, 100, 0.6);\n      }\n      #workingarea #option2 {\n        background-color: rgba(255, 100, 100, 0.6);\n      }\n      #workingarea #option1:hover,\n      #workingarea #option1:focus {\n        background-color: rgba(100, 255, 100, 1);\n      }\n      #workingarea #option2:hover,\n      #workingarea #option2:focus {\n        background-color: rgba(255, 100, 100, 1);\n      }\n      #workingarea {\n        display: none;\n      }\n      #workingarea.move {\n        display: flex;\n      }\n      #workingarea.move #option1,\n      #workingarea.move #option2 {\n        background-color: rgba(200, 200, 200, 0.5);\n      }\n      #workingarea.move #option1:hover,\n      #workingarea.move #option1:focus,\n      #workingarea.move #option2:hover,\n      #workingarea.move #option2:focus {\n        background-color: rgba(200, 200, 200, 1);\n      }\n      #workingarea.remove {\n        display: flex;\n      }\n      #workingarea.duplicate {\n        display: flex;\n      }\n    </style>\n    <div id=\"container\">\n      <div class=\"ops\">\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:add\"\n          id=\"add\"\n          hidden\\$=\"[[!add]]\"\n          title=\"Add to this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:create\"\n          id=\"edit\"\n          hidden\\$=\"[[!edit]]\"\n          title=\"Edit this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:swap-horiz\"\n          id=\"move\"\n          hidden\\$=\"[[!move]]\"\n          title=\"Move this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:delete\"\n          id=\"remove\"\n          hidden\\$=\"[[!remove]]\"\n          title=\"Delete this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:content-copy\"\n          id=\"duplicate\"\n          hidden\\$=\"[[!duplicate]]\"\n          title=\"Duplicate this\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_opTap\"\n          icon=\"icons:cancel\"\n          id=\"cancel\"\n          hidden\\$=\"[[!__anyOp]]\"\n          title=\"Cancel\"\n        ></paper-icon-button>\n      </div>\n      <div class=\"active-op\">[[activeTitle]]</div>\n      <div id=\"workingarea\" class\\$=\"[[activeOp]]\">\n        <paper-icon-button\n          on-tap=\"_optionSelected\"\n          id=\"option1\"\n          title=\"[[__option1Text]]\"\n          icon=\"[[__option1Icon]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-tap=\"_optionSelected\"\n          id=\"option2\"\n          title=\"[[__option2Text]]\"\n          icon=\"[[__option2Icon]]\"\n        ></paper-icon-button>\n      </div>\n    </div>\n    <slot></slot>\n  "]);_templateObject_88a68180184e11e98019197b469b322b=function _templateObject_88a68180184e11e98019197b469b322b(){return data};return data}var ItemOverlayOps=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_88a68180184e11e98019197b469b322b()),is:"item-overlay-ops",listeners:{focusin:"_inFocus",focusout:"_outFocus"},hostAttributes:{tabindex:"0"},properties:{editMode:{type:Boolean,reflectToAttribute:!0,value:!1},focused:{type:Boolean,reflectToAttribute:!0,value:!1},activeTitle:{type:String},activeOp:{type:String},add:{type:Boolean,value:!1},edit:{type:Boolean,value:!1},move:{type:Boolean,value:!1},fixedHeight:{type:Number,observer:"fixedHeightChanged"},disableAutoHeight:{type:Boolean,value:!1},remove:{type:Boolean,value:!1},duplicate:{type:Boolean,value:!1},__anyOp:{type:Boolean,value:!1}},attached:function attached(){var _this=this;setTimeout(function(){_this._windowResize()},5);window.addEventListener("resize",this._windowResize.bind(this))},detached:function detached(){window.removeEventListener("resize",this._windowResize.bind(this))},fixedHeightChanged:function fixedHeightChanged(newValue,oldValue){if(newValue){if(!this.disableAutoHeight){this.$.container.style.height=this.fixedHeight+"px";this.$.workingarea.style.height=this.fixedHeight-80+"px"}}},_windowResize:function _windowResize(e){var rect=this.getBoundingClientRect();this.$.container.style.width=rect.width+"px";if(!this.disableAutoHeight){if(!this.fixedHeight||babelHelpers.typeof(this.fixedHeight)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.$.container.style.height=rect.height+"px";this.$.workingarea.style.height=rect.height-80+"px"}else{this.$.container.style.height=this.fixedHeight+"px";this.$.workingarea.style.height=this.fixedHeight-80+"px"}}else{this.$.workingarea.style.height=rect.height-80+"px"}},_opTap:function _opTap(e){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;this.activeTitle=local.getAttribute("id");this.activeOp=local.getAttribute("id");this._resetActive();this.__anyOp=!0;local.classList.add("active");switch(this.activeOp){case"cancel":local.classList.remove("active");this.activeTitle=null;this.activeOp=null;this.__anyOp=!1;break;case"remove":this.__option1Icon="icons:check";this.__option1Text="Confirm deleting this";this.__option2Icon="icons:clear";this.__option2Text="Cancel";break;case"duplicate":this.__option1Icon="icons:check";this.__option1Text="Confirm duplicating this";this.__option2Icon="icons:clear";this.__option2Text="Cancel";break;case"move":this.__option1Icon="icons:arrow-back";this.__option1Text="Move item left";this.__option2Icon="icons:arrow-forward";this.__option2Text="Move item right";break;}var op={element:this,operation:this.activeOp};this.fire("item-overlay-op-changed",op)},_inFocus:function _inFocus(e){if(this.editMode){this.focused=!0}},_outFocus:function _outFocus(e){if(this.editMode){this.focused=!1}},_optionSelected:function _optionSelected(e){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget,ops={element:this,operation:this.activeOp,option:local.getAttribute("id")};this.fire("item-overlay-option-selected",ops);if("move"!=this.activeOp){this._resetActive();this.activeOp=null}},_resetActive:function _resetActive(){this.$.add.classList.remove("active");this.$.edit.classList.remove("active");this.$.move.classList.remove("active");this.$.remove.classList.remove("active");this.$.duplicate.classList.remove("active")}});_exports.ItemOverlayOps=ItemOverlayOps});