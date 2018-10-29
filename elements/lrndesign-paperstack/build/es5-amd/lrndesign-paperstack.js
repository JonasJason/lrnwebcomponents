define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js",
  "./node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_74ca7dd0db3411e888d4ab8c32dd2995() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n      }\n\n      h1, h2, h3, h4, h5, h6 {\n        margin: 0;\n      }\n      /* Example card */\n\n      .egletter p {\n        position: relative;\n        z-index: 3;\n        line-height: 1.5rem;\n      }\n\n      .egletter ul {\n        position: relative;\n        z-index: 3;\n        line-height: 1.5rem;\n      }\n\n      .egletter h2,\n      .egletter h3,\n      .egletter h4,\n      .egletter h5,\n      .egletter h6 {\n        font-family: cursive;\n        margin: 0 auto;\n        position: relative;\n        z-index: 3;\n        line-height: 4em;\n      }\n\n      iron-icon {\n        font-size: 1em;\n        height: 2em;\n        width: 2em;\n        margin: -1.1em 0 0 .5em;\n      }\n\n      .icon-container {\n        float: left;\n        width: 3em;\n        height: 3em;\n        margin-right: .5em;\n      }\n\n      .egletter h2 span,\n      .egletter h3 span,\n      .egletter h4 span,\n      .egletter h5 span,\n      .egletter h6 span {\n        line-height: 3em;\n      }\n\n      .egletter {\n        min-height: 10rem;\n        padding: .75rem 1.5rem;\n        position: relative;\n        width: 80%;\n        z-index: 4;\n        margin-bottom: 3rem;\n      }\n\n      .egletter:before,\n      .egletter:after {\n        content: "";\n        height: 98%;\n        position: absolute;\n        width: 100%;\n        z-index: 2;\n      }\n\n      .egletter:before {\n        background: #fafafa;\n        box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.2);\n        left: -.2rem;\n        top: .2rem;\n        transform: rotate(-2.5deg);\n      }\n\n      .egletter:after {\n        background: #ffffff;\n        box-shadow: 0 0 .2rem rgba(0, 0, 0, 0.2);\n        right: -.2rem;\n        top: .1rem;\n        transform: rotate(1.4deg);\n      }\n    </style>\n    <div class="egletter">\n      <h4>\n        <div class$="icon-container circle [[color]]">\n          <iron-icon icon="[[icon]]" class$="[[textColor]]"></iron-icon>\n        </div>\n        <span>[[title]]</span>\n      </h4>\n      <p><slot></slot></p>\n    </div>\n'
      ],
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n      }\n\n      h1, h2, h3, h4, h5, h6 {\n        margin: 0;\n      }\n      /* Example card */\n\n      .egletter p {\n        position: relative;\n        z-index: 3;\n        line-height: 1.5rem;\n      }\n\n      .egletter ul {\n        position: relative;\n        z-index: 3;\n        line-height: 1.5rem;\n      }\n\n      .egletter h2,\n      .egletter h3,\n      .egletter h4,\n      .egletter h5,\n      .egletter h6 {\n        font-family: cursive;\n        margin: 0 auto;\n        position: relative;\n        z-index: 3;\n        line-height: 4em;\n      }\n\n      iron-icon {\n        font-size: 1em;\n        height: 2em;\n        width: 2em;\n        margin: -1.1em 0 0 .5em;\n      }\n\n      .icon-container {\n        float: left;\n        width: 3em;\n        height: 3em;\n        margin-right: .5em;\n      }\n\n      .egletter h2 span,\n      .egletter h3 span,\n      .egletter h4 span,\n      .egletter h5 span,\n      .egletter h6 span {\n        line-height: 3em;\n      }\n\n      .egletter {\n        min-height: 10rem;\n        padding: .75rem 1.5rem;\n        position: relative;\n        width: 80%;\n        z-index: 4;\n        margin-bottom: 3rem;\n      }\n\n      .egletter:before,\n      .egletter:after {\n        content: "";\n        height: 98%;\n        position: absolute;\n        width: 100%;\n        z-index: 2;\n      }\n\n      .egletter:before {\n        background: #fafafa;\n        box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.2);\n        left: -.2rem;\n        top: .2rem;\n        transform: rotate(-2.5deg);\n      }\n\n      .egletter:after {\n        background: #ffffff;\n        box-shadow: 0 0 .2rem rgba(0, 0, 0, 0.2);\n        right: -.2rem;\n        top: .1rem;\n        transform: rotate(1.4deg);\n      }\n    </style>\n    <div class="egletter">\n      <h4>\n        <div class\\$="icon-container circle [[color]]">\n          <iron-icon icon="[[icon]]" class\\$="[[textColor]]"></iron-icon>\n        </div>\n        <span>[[title]]</span>\n      </h4>\n      <p><slot></slot></p>\n    </div>\n'
      ]
    );
    _templateObject_74ca7dd0db3411e888d4ab8c32dd2995 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_74ca7dd0db3411e888d4ab8c32dd2995()
    ),
    is: "lrndesign-paperstack",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      A11yBehaviors.A11y,
      MaterializeCSSBehaviors.ColorBehaviors
    ],
    properties: {
      title: { type: String, value: "Title" },
      icon: { type: String, value: "lrn:assignment" },
      colorCode: {
        type: String,
        value: "#000000",
        observer: "_colorCodeChange"
      },
      color: { type: String, computed: '_computeColorClass(colorCode, "bg")' },
      textCodeColor: { type: String, value: "#ffffff" },
      textColor: { type: String, computed: "_computeColorClass(textCodeColor)" }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Paper stack",
          description: "A stack of papers",
          icon: "icons:content-copy",
          color: "grey",
          groups: ["Video", "Media"],
          handles: [],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "Title of the cards",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "Title of the cards",
              inputMethod: "boolean"
            },
            {
              property: "colorCode",
              title: "Color",
              description: "Color of the card",
              inputMethod: "colorpicker"
            },
            {
              property: "icon",
              title: "Icon",
              description: "Icon for the card",
              inputMethod: "iconpicker"
            },
            {
              slot: "",
              title: "Contents",
              description: "card contents",
              inputMethod: "code-editor"
            }
          ],
          advanced: []
        }
      });
    },
    _computeColorClass: function _computeColorClass(color, bg) {
      if (null != color && "#ffffff" == color.toLowerCase()) {
        if ("bg" == bg) {
          return "white";
        }
        return "white-text";
      } else if (null != color && "#000000" == color) {
        if ("bg" == bg) {
          return "black";
        }
        return "black-text";
      } else if (null != color && "#" == color.substring(0, 1)) {
        return this._colorTransform(color.toLowerCase(), "", "");
      }
    },
    _colorCodeChange: function _colorCodeChange(newValue) {
      if (babelHelpers.typeof(newValue) !== "undefined" && null != newValue) {
        this.computeTextPropContrast("textCodeColor", "colorCode");
      }
    }
  });
});
