define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_8dfd6890db3311e8b0e1e3d39bb8a99c() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h2>[[title]]</h2>\n"
    ]);
    _templateObject_8dfd6890db3311e8b0e1e3d39bb8a99c = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_8dfd6890db3311e8b0e1e3d39bb8a99c()
    ),
    is: "lrndesign-diff2html",
    properties: { title: { type: String, value: "lrndesign-diff2html" } }
  });
});
