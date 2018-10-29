define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js",
  "./lib/simple-concept-network-node.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_93ecc470db3411e8af14f7c2e81bf095() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n      }\n      :host[visualization="network"] simple-concept-network-node {\n        position: relative;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(1) {\n        top: 150px;\n        left: 176px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(2) {\n        top: 0px;\n        left: 60px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(3) {\n        top: 75px;\n        left: 60px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(4) {\n        top: 230px;\n        left: -56px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(5) {\n        top: 300px;\n        left: -282px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(6) {\n        top: 230px;\n        left: -515px;\n      }\n      :host[visualization="network"] simple-concept-network-node:nth-child(7) {\n        top: 75px;\n        left: -630px;\n      }\n      :host[visualization="network"] {\n        display: block;\n        min-height: 450px;\n      }\n    </style>\n    <template is="dom-repeat" items="[[nodes]]" as="node">\n      <simple-concept-network-node visualization="[[visualization]]" src="[[node.src]]" icon="[[node.icon]]" icon-color="[[node.iconColor]]" image="[[node.image]]" label="[[node.label]]" color="[[node.color]]" disabled="[[node.disabled]]"></simple-concept-network-node>\n    </template>\n'
    ]);
    _templateObject_93ecc470db3411e8af14f7c2e81bf095 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_93ecc470db3411e8af14f7c2e81bf095()
    ),
    is: "simple-concept-network",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      A11yBehaviors.A11y
    ],
    observers: ["_valueChanged(nodes.*)"],
    properties: {
      color: { type: String },
      visualization: { type: String, reflectToAttribute: !0, value: "3d" },
      nodes: { type: Array, value: [], notify: !0 }
    },
    _valueChanged: function _valueChanged(e) {
      for (var i in e.base) {
        for (var j in e.base[i]) {
          this.notifyPath("nodes." + i + "." + j);
        }
      }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Concept Network",
          description:
            "A simple way of visualizing data in a small network style configuration.",
          icon: "lrn:network",
          color: "blue",
          groups: ["Image", "Visualization"],
          handles: [
            {
              type: "image",
              source: "nodes.source",
              title: "nodes.label",
              link: "nodes.src",
              description: "nodes.description"
            }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "color",
              title: "Color",
              description: "Primary / background color",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            }
          ],
          configure: [
            {
              property: "color",
              title: "Color",
              description: "Default background color",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              property: "visualization",
              title: "Visualization",
              description: "How to visualize the concept",
              inputMethod: "select",
              options: { "3d": "3d plain", network: "network", flat: "flat" }
            },
            {
              property: "nodes",
              title: "Node list",
              description: "List of the items to present in the visual",
              inputMethod: "array",
              properties: [
                {
                  property: "icon",
                  title: "Icon",
                  description: "icon to display in the middle",
                  inputMethod: "iconpicker",
                  options: []
                },
                {
                  property: "iconColor",
                  title: "Icon Color",
                  description: "Color for this icon",
                  inputMethod: "colorpicker"
                },
                {
                  property: "label",
                  title: "Label",
                  description: "Label",
                  inputMethod: "textfield"
                },
                {
                  property: "image",
                  title: "Image",
                  description: "Image for the background",
                  inputMethod: "textfield",
                  validationType: "url"
                },
                {
                  property: "description",
                  title: "Description",
                  description:
                    "A longer description that can be used as part of a modal presentation",
                  inputMethod: "textfield"
                },
                {
                  property: "color",
                  title: "Color",
                  description: "Color for this node",
                  inputMethod: "colorpicker"
                },
                {
                  property: "src",
                  title: "Link",
                  description: "Label",
                  inputMethod: "textfield",
                  validationType: "url"
                }
              ]
            }
          ],
          advanced: []
        }
      });
    }
  });
});
