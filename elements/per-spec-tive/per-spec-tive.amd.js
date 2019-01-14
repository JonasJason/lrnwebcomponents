define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/iron-list/iron-list.js","./node_modules/@polymer/iron-ajax/iron-ajax.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"],function(_exports,_polymerLegacy,_paperButton,_paperCard,_ironList,_ironAjax,_ironIcons,_paperIconButton,_simpleColors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PerSpecTive=void 0;function _templateObject_ea4c4220184f11e993fb4dda21dd1fc1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        transition: 0.6s all linear;\n        background-color: transparent;\n        opacity: 1;\n      }\n      :host([outline-loading]) {\n        opacity: 0.6;\n        background-color: #999999;\n      }\n      paper-card {\n        width: 250px;\n        height: 250px;\n      }\n      #list {\n        min-height: 50vh;\n        width: 100%;\n      }\n    </style>\n    <iron-ajax\n      auto=\"\"\n      id=\"endpoint\"\n      url=\"[[endPoint]]\"\n      loading=\"{{outlineLoading}}\"\n      handle-as=\"json\"\n      last-response=\"{{_outlineData}}\"\n      debounce-duration=\"300\"\n    ></iron-ajax>\n    <iron-list grid=\"\" id=\"list\" items=\"[[outline]]\">\n      <template>\n        <paper-card\n          heading=\"[[item.title]]\"\n          image=\"\"\n          elevation=\"1\"\n          animated-shadow=\"true\"\n        >\n          <div class=\"card-content\">A card</div>\n          <div class=\"card-actions\">\n            <paper-icon-button icon=\"add\"></paper-icon-button>\n            <paper-icon-button icon=\"delete\"></paper-icon-button>\n          </div>\n        </paper-card>\n      </template>\n    </iron-list>\n  "]);_templateObject_ea4c4220184f11e993fb4dda21dd1fc1=function _templateObject_ea4c4220184f11e993fb4dda21dd1fc1(){return data};return data}var PerSpecTive=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_ea4c4220184f11e993fb4dda21dd1fc1()),is:"per-spec-tive",properties:{outlineLoading:{type:Boolean,reflectToAttribute:!0},endPoint:{type:String},_outlineData:{type:Object,observer:"_outlineRawDataChanged"},outline:{type:Array,observer:"_outlineChanged"}},_outlineRawDataChanged:function _outlineRawDataChanged(newValue,oldValue){if(null!=newValue&&babelHelpers.typeof(newValue.items)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.set("outline",[]);this.set("outline",newValue.items)}},_outlineChanged:function _outlineChanged(newValue,oldValue){},_toArray:function _toArray(obj){return Object.keys(obj).map(function(key){return obj[key]})}});_exports.PerSpecTive=PerSpecTive});