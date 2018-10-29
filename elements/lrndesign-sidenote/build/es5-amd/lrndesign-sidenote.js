define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_74aa4ba0db3411e88ab63575bf7b2d6a() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        --container-bg-color: lightgray;\n        --container-text-color: black;\n        --container-padding: 1em;\n        --container-outset: 0;\n        @apply --host-styles;\n      }\n\n      #container {\n        display: block;\n        background: var(--container-bg-color);\n        color: var(--container-text-color);\n        padding: var(--container-padding);\n        margin-left: -var(--container-outset);\n        @apply --container-styles;\n      }\n\n      #header {\n        display: flex;\n        align-items: center;\n        @apply --container-header;\n      }\n\n      #icon {\n        margin-right: .5em;\n        @apply --icon-styles;\n      }\n\n      #label {\n        font-size: 1.3em;\n        margin: .8em 0;\n        flex: 1 1 auto;\n        @apply --label-styles;\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <iron-icon id="icon" icon="[[icon]]" hidden$="[[!icon]]"></iron-icon>\n        <div id="label" hidden$="[[!label]]">[[label]]</div>\n      </div>\n      <slot></slot>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        --container-bg-color: lightgray;\n        --container-text-color: black;\n        --container-padding: 1em;\n        --container-outset: 0;\n        @apply --host-styles;\n      }\n\n      #container {\n        display: block;\n        background: var(--container-bg-color);\n        color: var(--container-text-color);\n        padding: var(--container-padding);\n        margin-left: -var(--container-outset);\n        @apply --container-styles;\n      }\n\n      #header {\n        display: flex;\n        align-items: center;\n        @apply --container-header;\n      }\n\n      #icon {\n        margin-right: .5em;\n        @apply --icon-styles;\n      }\n\n      #label {\n        font-size: 1.3em;\n        margin: .8em 0;\n        flex: 1 1 auto;\n        @apply --label-styles;\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <iron-icon id="icon" icon="[[icon]]" hidden\\$="[[!icon]]"></iron-icon>\n        <div id="label" hidden\\$="[[!label]]">[[label]]</div>\n      </div>\n      <slot></slot>\n    </div>\n'
      ]
    );
    _templateObject_74aa4ba0db3411e88ab63575bf7b2d6a = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_74aa4ba0db3411e88ab63575bf7b2d6a()
    ),
    is: "lrndesign-sidenote",
    behaviors: [A11yBehaviors.A11y, MaterializeCSSBehaviors.ColorBehaviors],
    properties: {
      label: { type: String, value: "" },
      icon: { type: String, value: "" },
      bgColor: { type: String, value: "#f7f7f7" },
      outset: { type: Number, value: 0 },
      outsetMeasurementType: { type: String, value: "em" }
    },
    created: function created() {
      for (prop in this.properties) {
        var prefix = this.is;
        prefix = prefix
          .replace("-", " ")
          .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return 0 == index ? letter.toLowerCase() : letter.toUpperCase();
          })
          .replace(/\s+/g, "");
        if ("undefined" !== typeof window[prefix]) {
          if ("undefined" !== typeof window[prefix][prop]) {
            this.properties[prop].value = window[prefix][prop];
          }
        }
      }
    },
    observers: ["__updateStyles(bgColor, outset, outsetMeasurementType)"],
    __updateStyles: function __updateStyles(
      bgColor,
      outset,
      outsetMeasurementType
    ) {
      var bgColorHex = this._colorTransformFromClass(bgColor) || bgColor;
      this.updateStyles({
        "--container-text-color": this.getTextContrastColor(bgColorHex),
        "--container-bg-color": bgColorHex,
        "--container-outset": "".concat(+outset).concat(outsetMeasurementType)
      });
    }
  });
});
