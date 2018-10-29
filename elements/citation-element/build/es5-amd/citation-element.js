define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_37975600db3311e8bd872d73f5ccbd50() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        color: var(\'--license-text-color\');\n      }\n      :host[display-method="footnote"] {\n        visibility: hidden;\n        opacity: 0;\n      }\n      :host[display-method="popup"] {\n        display: block;\n      }\n      .license-link {\n        font-size: 1em;\n        line-height: 1em;\n        font-style: italic;\n      }\n      .citation-date {\n        font-size: 1em;\n        line-height: 1em;\n        font-style: italic;\n      }\n      .license-link img {\n        height: 1em;\n        min-width: 1em;\n        margin-right: .5em;\n      }\n    </style>\n    <!-- Link the license for the course -->\n    <link about$="[[relatedResource]]" property="cc:license" content$="[[licenseLink]]">\n    <meta about$="[[relatedResource]]" property="cc:attributionUrl" content$="[[source]]">\n    <meta about$="[[relatedResource]]" property="cc:attributionName" typeof="oer:Text" content$="[[title]]">\n    <meta rel="cc:license" href$="[[licenseLink]]" content$="License: [[licenseName]]">\n    <link rel="license" typeof="resource" src="[[source]]">\n    <cite><a target="_blank" href="[[source]]">[[title]]</a> by [[creator]], licensed under <a class="license-link" target="_blank" href="[[licenseLink]]"><img alt="[[licenseName]] graphic" src="[[licenseImage]]" hidden&="[[!licenseImage]]">[[licenseName]]</a>. Accessed <span class="citation-date">[[date]]</span>.</cite>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        color: var(\'--license-text-color\');\n      }\n      :host[display-method="footnote"] {\n        visibility: hidden;\n        opacity: 0;\n      }\n      :host[display-method="popup"] {\n        display: block;\n      }\n      .license-link {\n        font-size: 1em;\n        line-height: 1em;\n        font-style: italic;\n      }\n      .citation-date {\n        font-size: 1em;\n        line-height: 1em;\n        font-style: italic;\n      }\n      .license-link img {\n        height: 1em;\n        min-width: 1em;\n        margin-right: .5em;\n      }\n    </style>\n    <!-- Link the license for the course -->\n    <link about\\$="[[relatedResource]]" property="cc:license" content\\$="[[licenseLink]]">\n    <meta about\\$="[[relatedResource]]" property="cc:attributionUrl" content\\$="[[source]]">\n    <meta about\\$="[[relatedResource]]" property="cc:attributionName" typeof="oer:Text" content\\$="[[title]]">\n    <meta rel="cc:license" href\\$="[[licenseLink]]" content\\$="License: [[licenseName]]">\n    <link rel="license" typeof="resource" src="[[source]]">\n    <cite><a target="_blank" href="[[source]]">[[title]]</a> by [[creator]], licensed under <a class="license-link" target="_blank" href="[[licenseLink]]"><img alt="[[licenseName]] graphic" src="[[licenseImage]]" hidden&="[[!licenseImage]]">[[licenseName]]</a>. Accessed <span class="citation-date">[[date]]</span>.</cite>\n'
      ]
    );
    _templateObject_37975600db3311e8bd872d73f5ccbd50 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_37975600db3311e8bd872d73f5ccbd50()
    ),
    is: "citation-element",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      title: { type: String },
      scope: { type: String, value: "sibling", observer: "_scopeChanged" },
      displayMethod: { type: String, reflectToAttribute: !0 },
      creator: { type: String },
      source: { type: String },
      date: { type: String },
      licenseName: { type: String },
      licenseLink: { type: String },
      license: { type: String, observer: "_licenseUpdated" }
    },
    _scopeChanged: function _scopeChanged(newValue) {
      if (
        "sibling" === newValue &&
        null !== (0, _polymerDom.dom)(this).previousElementSibling
      ) {
        if (
          (0, _polymerDom.dom)(this).previousElementSibling.getAttribute(
            "resource"
          )
        ) {
          this.relatedResource = (0, _polymerDom.dom)(
            this
          ).previousElementSibling.getAttribute("resource");
        } else {
          var uuid = this.generateResourceID();
          this.relatedResource = uuid;
          (0, _polymerDom.dom)(this).previousElementSibling.setAttribute(
            "resource",
            uuid
          );
        }
        (0, _polymerDom.dom)(this).previousElementSibling.setAttribute(
          "prefix",
          this.getAttribute("prefix")
        );
      } else if ("parent" === newValue) {
        if ((0, _polymerDom.dom)(this).parentNode.getAttribute("resource")) {
          this.relatedResource = (0, _polymerDom.dom)(
            this
          ).parentNode.getAttribute("resource");
        } else {
          var _uuid = this.generateResourceID();
          this.relatedResource = _uuid;
          (0, _polymerDom.dom)(this).parentNode.setAttribute("resource", _uuid);
        }
        (0, _polymerDom.dom)(this).parentNode.setAttribute(
          "prefix",
          this.getAttribute("prefix")
        );
      }
    },
    attached: function attached() {
      var props = {
        canScale: !1,
        canPosition: !1,
        canEditSource: !1,
        gizmo: {
          title: "Citation",
          description: "A basic citation element with 3 presentation modes",
          icon: "editor:title",
          color: "grey",
          groups: ["Content", "Text", "Copyright"],
          handles: [
            {
              type: "citation",
              source: "source",
              title: "title",
              author: "creator",
              license: "license",
              accessDate: "date"
            },
            { type: "inline", text: "title" }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the work being cited.",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the work being cited.",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "source",
              title: "Source link",
              description: "The source url for the element this is citing.",
              inputMethod: "textfield",
              icon: "link",
              validationType: "url"
            },
            {
              property: "date",
              title: "Date accessed",
              description: "The date this was accessed.",
              inputMethod: "textfield",
              icon: "link"
            },
            {
              property: "scope",
              title: "Scope",
              description: "Scope of what to cite.",
              inputMethod: "select",
              options: { sibling: "Sibling element", parent: "Parent element" },
              icon: "code"
            },
            {
              property: "license",
              title: "License",
              description: "The source url for the element this is citing.",
              inputMethod: "select",
              options: this.licenseList("select"),
              icon: "link"
            },
            {
              property: "creator",
              title: "Creator",
              description: "Who made or owns this.",
              inputMethod: "textfield",
              icon: "link"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
    },
    licenseList: function licenseList() {
      var mode =
          0 < arguments.length && arguments[0] !== void 0
            ? arguments[0]
            : "full",
        list = {
          by: {
            name: "Attribution",
            link: "https://creativecommons.org/licenses/by/4.0/",
            image: "https://i.creativecommons.org/l/by/4.0/88x31.png"
          },
          "by-sa": {
            name: "Attribution Share a like",
            link: "https://creativecommons.org/licenses/by-sa/4.0/",
            image: "https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
          },
          "by-nd": {
            name: "Attribution No derivatives",
            link: "https://creativecommons.org/licenses/by-nd/4.0/",
            image: "https://i.creativecommons.org/l/by-nd/4.0/88x31.png"
          },
          "by-nc": {
            name: "Attribution non-commercial",
            link: "https://creativecommons.org/licenses/by-nc/4.0/",
            image: "https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
          },
          "by-nc-sa": {
            name: "Attribution non-commercial share a like",
            link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            image: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
          },
          "by-nc-nd": {
            name: "Attribution Non-commercial No derivatives",
            link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            image: "https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
          }
        };
      if ("select" == mode) {
        var select = {};
        for (var i in list) {
          select[i] = list[i].name;
        }
        return select;
      }
      return list;
    },
    _licenseUpdated: function _licenseUpdated(newValue) {
      if (babelHelpers.typeof(newValue) !== "undefined") {
        var list = this.licenseList();
        if (babelHelpers.typeof(list[newValue]) !== "undefined") {
          this.licenseName = list[newValue].name;
          this.licenseLink = list[newValue].link;
          this.licenseImage = list[newValue].image;
        }
      }
    }
  });
});
