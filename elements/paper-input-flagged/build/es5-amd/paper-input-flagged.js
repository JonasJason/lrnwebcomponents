define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "@polymer/paper-input/paper-input.js",
  "@polymer/paper-tooltip/paper-tooltip.js",
  "@polymer/paper-input/paper-input-behavior.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js"
], function(_polymerLegacy, _paperInput, _paperTooltip, _paperInputBehavior) {
  "use strict";
  function _templateObject_daa101c0db3311e8b570cb4c378076f6() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n      iron-icon {\n        transition: .6s all ease-in;\n        width: 24px;\n        height: 24px;\n        margin-right: 4px;\n      }\n      paper-tooltip {\n        font-size: 11px;\n        --paper-tooltip-delay-in: 100;\n      }\n      #icon {\n        color: var(--paper-grey-400);\n        background-color: transparent;\n      }\n      :host[status=info] #icon {\n        color: var(--paper-green-400);\n      }\n      :host[status=notice] #icon {\n        color: var(--paper-grey-400);\n      }\n      :host[status=warning] #icon {\n        color: var(--paper-yellow-700);\n      }\n      :host[status=error] #icon {\n        color: var(--paper-red-900);\n      }\n    </style>\n    <paper-input label="[[label]]" value="{{value}}" char-counter="[[charCounter]]" disabled="[[disabled]]" minlength="[[minlength]]" maxlength="[[minlength]]">\n      <iron-icon id="icon" icon="[[icon]]" slot="prefix"></iron-icon>\n    </paper-input>\n    <paper-tooltip for="icon" position="top" offset="20" fit-to-visible-bounds="">\n        [[__activeMessage]]\n      </paper-tooltip>\n'
    ]);
    _templateObject_daa101c0db3311e8b570cb4c378076f6 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_daa101c0db3311e8b570cb4c378076f6()
    ),
    is: "paper-input-flagged",
    behaviors: [_paperInputBehavior.PaperInputBehavior],
    properties: {
      icon: { type: String, computed: "_iconFromStatus(status)" },
      status: {
        type: String,
        reflectToAttribute: !0,
        computed: "testStatus(flaggedInput, value)"
      },
      value: { type: String, notify: !0 },
      flaggedInput: {
        type: Array,
        value: [
          {
            match: null,
            message:
              "Alt data is required for everything except decoration images.",
            status: "notice"
          },
          {
            match: "image",
            message:
              "Screenreaders will say the word image, don't put it in the descriptive text",
            status: "error"
          },
          {
            match: "photo",
            message:
              "Screenreaders will say the word image, don't put photo in the descriptive text",
            status: "error"
          },
          {
            match: "picture",
            message:
              "Screenreaders will say the word image, don't put picture in the descriptive text",
            status: "error"
          },
          {
            match: 3,
            message:
              "Description not effective enough. This should be at least a sentance about what the image is.",
            status: "error"
          },
          {
            match: 10,
            message:
              "Make sure your alt text is descriptive enough for those that can't see the media.",
            status: "warning"
          }
        ]
      },
      inputSuccess: {
        type: Object,
        value: {
          message: "You passed our simple accessibility checks.",
          status: "info"
        }
      }
    },
    ready: function ready() {
      this.removeAttribute("tabindex");
    },
    testStatus: function testStatus(test, value) {
      for (var i in test) {
        if (null === test[i].match && ("" === value || null === value)) {
          this.__activeMessage = test[i].message;
          return test[i].status;
        } else if (
          !isNaN(test[i].match) &&
          value.split(/\s+/g).length < parseInt(test[i].match)
        ) {
          this.__activeMessage = test[i].message;
          return test[i].status;
        } else if (value.toLowerCase().includes(test[i].match)) {
          this.__activeMessage = test[i].message;
          return test[i].status;
        }
      }
      this.__activeMessage = this.inputSuccess.message;
      return this.inputSuccess.status;
    },
    _iconFromStatus: function _iconFromStatus(status) {
      switch (status) {
        case "error":
          return "icons:error";
          break;
        case "warning":
        case "notice":
          return "icons:warning";
          break;
        case "info":
          return "icons:info-outline";
          break;
        default:
          return "icons:info";
          break;
      }
    }
  });
});
