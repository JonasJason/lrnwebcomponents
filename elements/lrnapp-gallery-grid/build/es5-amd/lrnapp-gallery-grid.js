define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_76c49590db3311e8a03e9f2b62ca2d3e() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h2>[[title]]</h2>\n"
    ]);
    _templateObject_76c49590db3311e8a03e9f2b62ca2d3e = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_76c49590db3311e8a03e9f2b62ca2d3e()
    ),
    is: "lrnapp-gallery-grid",
    properties: { title: { type: String, value: "lrnapp-gallery-grid" } }
  });
});
