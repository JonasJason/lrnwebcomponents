define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/date.format.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_f9dc4410db3211e89e52a56357dd77b1() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        font-size: 14px;\n        color: #b3b3b1;\n        line-height: 30px;\n      }\n    </style>\n    <time datetime$="[[date]]">[[date]]</time>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        font-size: 14px;\n        color: #b3b3b1;\n        line-height: 30px;\n      }\n    </style>\n    <time datetime\\$="[[date]]">[[date]]</time>\n'
      ]
    );
    _templateObject_f9dc4410db3211e89e52a56357dd77b1 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_f9dc4410db3211e89e52a56357dd77b1()
    ),
    is: "simple-datetime",
    properties: {
      timestamp: { type: Number },
      format: { type: String, value: "M jS, Y" },
      date: { type: String, computed: "formatDate(timestamp, format, unix)" },
      unix: { type: Boolean, value: !1 }
    },
    formatDate: function formatDate(timestamp, format, unix) {
      if (unix) {
        timestamp = 1e3 * timestamp;
      }
      return new Date(timestamp).format(format);
    }
  });
});
