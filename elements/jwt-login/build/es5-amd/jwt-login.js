define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_905e5870db3211e89ab469b1dea864bb() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        visibility: hidden;\n      }\n    </style>\n    <iron-ajax id="loginrequest" method="GET" url="[[url]]" handle-as="json" on-response="loginResponse">\n    </iron-ajax>\n'
    ]);
    _templateObject_905e5870db3211e89ab469b1dea864bb = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_905e5870db3211e89ab469b1dea864bb()
    ),
    is: "jwt-login",
    properties: {
      url: { type: String },
      key: { type: String, value: "jwt" },
      jwt: { type: String, notify: !0 }
    },
    ready: function ready() {
      this.jwt = localStorage.getItem(this.key);
      this.fire("jwt-token", this.jwt);
    },
    toggleLogin: function toggleLogin() {
      if (null == this.jwt) {
        this.$.loginrequest.generateRequest();
      } else {
        localStorage.removeItem(this.key);
        this.jwt = null;
        this.fire("jwt-logged-in", !1);
      }
    },
    loginResponse: function loginResponse(e) {
      this.jwt = e.detail.response;
      if (null == this.jwt || "" == this.jwt) {
        this.fire("jwt-logged-in", !1);
      } else {
        localStorage.setItem(this.key, this.jwt);
        this.fire("jwt-token", this.jwt);
        this.fire("jwt-logged-in", !0);
      }
    }
  });
});
