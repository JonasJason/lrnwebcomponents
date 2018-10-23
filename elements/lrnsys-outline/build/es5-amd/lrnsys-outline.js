define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysOutline = void 0;
  function _templateObject_8a7a8cb0d6fc11e8a31b055a4709fd9f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_8a7a8cb0d6fc11e8a31b055a4709fd9f = function() {
      return data;
    };
    return data;
  }
  var LrnsysOutline = (function(_PolymerElement) {
    babelHelpers.inherits(LrnsysOutline, _PolymerElement);
    function LrnsysOutline() {
      babelHelpers.classCallCheck(this, LrnsysOutline);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnsysOutline.__proto__ || Object.getPrototypeOf(LrnsysOutline)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnsysOutline,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnsysOutline.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnsysOutline.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnsysOutline.haxProperties,
              LrnsysOutline.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_8a7a8cb0d6fc11e8a31b055a4709fd9f()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnsys outline",
                description: "Automated conversion of lrnsys-outline/",
                icon: "icons:android",
                color: "green",
                groups: ["Outline"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrnsys-outline";
          }
        }
      ]
    );
    return LrnsysOutline;
  })(_polymerElement.PolymerElement);
  _exports.LrnsysOutline = LrnsysOutline;
  window.customElements.define(LrnsysOutline.tag, LrnsysOutline);
});
