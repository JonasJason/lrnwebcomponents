define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SocketProject = void 0;
  function _templateObject_afdacdf0d70911e8a0c15db9629d87a1() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_afdacdf0d70911e8a0c15db9629d87a1 = function() {
      return data;
    };
    return data;
  }
  var SocketProject = (function(_PolymerElement) {
    babelHelpers.inherits(SocketProject, _PolymerElement);
    function SocketProject() {
      babelHelpers.classCallCheck(this, SocketProject);
      return babelHelpers.possibleConstructorReturn(
        this,
        (SocketProject.__proto__ || Object.getPrototypeOf(SocketProject)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      SocketProject,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SocketProject.prototype.__proto__ ||
                  Object.getPrototypeOf(SocketProject.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              SocketProject.haxProperties,
              SocketProject.tag,
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
              _templateObject_afdacdf0d70911e8a0c15db9629d87a1()
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
                title: "Socket project",
                description: "Automated conversion of socket-project/",
                icon: "icons:android",
                color: "green",
                groups: ["Project"],
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
            return "socket-project";
          }
        }
      ]
    );
    return SocketProject;
  })(_polymerElement.PolymerElement);
  _exports.SocketProject = SocketProject;
  window.customElements.define(SocketProject.tag, SocketProject);
});
