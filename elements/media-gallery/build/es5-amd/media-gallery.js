define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@lrnwebcomponents/lrndesign-gallery/lrndesign-gallery.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_057fc790db3511e8927d576faa839e1b() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <lrndesign-gallery accent-color$="[[accentColor]]" dark$="[[dark]]" grid$="[[grid]]" sizing$="[[sizing]]" sources$="[[sources]]" title$="[[title]]">\n      <div slot="description"><slot name="description"></slot></div>\n    </lrndesign-gallery>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <lrndesign-gallery accent-color\\$="[[accentColor]]" dark\\$="[[dark]]" grid\\$="[[grid]]" sizing\\$="[[sizing]]" sources\\$="[[sources]]" title\\$="[[title]]">\n      <div slot="description"><slot name="description"></slot></div>\n    </lrndesign-gallery>\n'
      ]
    );
    _templateObject_057fc790db3511e8927d576faa839e1b = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_057fc790db3511e8927d576faa839e1b()
    ),
    is: "media-gallery",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      accentColor: { type: String, value: null },
      dark: { type: Boolean, value: !1 },
      grid: { type: Boolean, value: !1 },
      sources: { type: Array, value: [] },
      sizing: { type: String, value: "cover" },
      title: { type: String, value: null }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !1,
        canPosition: !1,
        canEditSource: !1,
        gizmo: {
          title: "Image Gallery",
          description:
            "Displays carousels, grids, thumbnails, and images with captions.",
          icon: "image:photo-library",
          color: "deep-purple",
          groups: ["Images", "Media"],
          handles: [{ type: "image", url: "source" }],
          meta: { author: "Your organization on github" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the gallery",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "grid",
              title: "Thumbnails/Grid",
              description: "Display as thumbnails.",
              inputMethod: "boolean",
              icon: "image:grid-on"
            },
            {
              property: "accentColor",
              title: "Accent color",
              description: "Select the accent color for the player.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              property: "dark",
              title: "Dark",
              description: "Use dark theme.",
              inputMethod: "boolean",
              icon: "invert-colors"
            }
          ],
          configure: [
            {
              property: "sizing",
              title: "Sizing",
              description: "How images will fit into the gallery.",
              inputMethod: "select",
              options: {
                cover: "Cover (cropping)",
                contain: "Contain (letterboxing)"
              }
            },
            {
              property: "sources",
              title: "Image(s)",
              description: "Tracks of different languages of closed captions",
              inputMethod: "array",
              properties: [
                {
                  property: "title",
                  title: "Title",
                  description: "Title of the image.",
                  inputMethod: "textfield"
                },
                {
                  property: "src",
                  title: "Source/URL",
                  description: "Source of the image",
                  inputMethod: "textfield"
                },
                {
                  property: "alt",
                  title: "Alt text",
                  description:
                    "Alternative text of this image (for accessibility).",
                  inputMethod: "textfield"
                },
                {
                  property: "details",
                  title: "Details/long description about this image",
                  description: "Alternative text for accessibility.",
                  inputMethod: "textfield"
                },
                {
                  property: "zoom",
                  title: "Zoom",
                  description: "Allow zooming.",
                  inputMethod: "boolean",
                  icon: "zoom-in"
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
