define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-input/paper-input.js",
  "./node_modules/@polymer/paper-dialog/paper-dialog.js",
  "./node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "./lib/lrnsys-outline-item.js"
], function(_polymerLegacy) {
  "use strict";
  var _listeners, _Polymer;
  function _templateObject_9f05e9a0db3311e8858fbdcba928ff3f() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 0.25em;\n        margin: 0.25em 0.25em 0.25em 0;\n        padding: 0.5em;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>\u2191</kbd> / <kbd>\u2193</kbd> / <kbd>\u2190</kbd> / <kbd>\u2192</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+\u2191</kbd> / <kbd>Shift+\u2193</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template id="domRepeat" is="dom-repeat" items$="{{items}}" as="item">\n        <lrnsys-outline-item disable-down$="{{item.disableDown}}" disable-left$="{{item.disableLeft}}" disable-right$="{{item.disableRight}}" disable-up$="{{item.disableUp}}" id$="{{item.id}}" index$="{{item.index}}" indent-level$="{{item.indent}}" parent$="{{item.parent}}" title$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 0.25em;\n        margin: 0.25em 0.25em 0.25em 0;\n        padding: 0.5em;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>\u2191</kbd> / <kbd>\u2193</kbd> / <kbd>\u2190</kbd> / <kbd>\u2192</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+\u2191</kbd> / <kbd>Shift+\u2193</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template id="domRepeat" is="dom-repeat" items\\$="{{items}}" as="item">\n        <lrnsys-outline-item disable-down\\$="{{item.disableDown}}" disable-left\\$="{{item.disableLeft}}" disable-right\\$="{{item.disableRight}}" disable-up\\$="{{item.disableUp}}" id\\$="{{item.id}}" index\\$="{{item.index}}" indent-level\\$="{{item.indent}}" parent\\$="{{item.parent}}" title\\$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n'
      ]
    );
    _templateObject_9f05e9a0db3311e8858fbdcba928ff3f = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)(
    ((_Polymer = {
      _template: (0, _polymerLegacy.html)(
        _templateObject_9f05e9a0db3311e8858fbdcba928ff3f()
      ),
      is: "lrnsys-outline",
      listeners: ((_listeners = {
        "delete-item": "_handleRemoveItem",
        "indent-item": "_handleIndentItem",
        "focus-item": "_handleFocusItem",
        "add-item": "_handleAddItem",
        "move-item": "_handleMoveItem",
        "change-item": "_handleChangeItem"
      }),
      babelHelpers.defineProperty(_listeners, "focus-item", "_handleFocusItem"),
      babelHelpers.defineProperty(_listeners, "blur-item", "_handleBlurItem"),
      _listeners),
      properties: {
        title: { type: String, value: "Content Outline" },
        data: { type: Array, value: null },
        items: { type: Array, value: null, notify: !0 }
      },
      openDirections: function openDirections() {
        this.$.modal.opened = !0;
      },
      closeDirections: function closeDirections() {
        this.$.modal.opened = !1;
        this.$.dialogtrigger.focus();
      },
      attached: function attached() {
        this.__modal = this.$.modal;
        document.body.addEventListener(
          "iron-overlay-canceled",
          this._accessibleFocus.bind(this)
        );
        document.body.appendChild(this.$.modal);
      },
      _accessibleFocus: function _accessibleFocus(e) {
        if (e.detail === this.__modal) {
          this.$.dialogtrigger.focus();
        }
      },
      ready: function ready() {
        if (null === this.data || 1 > this.data.length) {
          this.__tempid = this.__tempid === void 0 ? 0 : this.__tempid + 1;
          this.data = [
            {
              id: "outline-item-" + this.__tempid,
              title: "",
              order: 0,
              parent: null
            }
          ];
        }
        this.setData(this.data);
      },
      setData: function setData(data) {
        this.items = [];
        this.items = data;
        if (data !== void 0 && 0 < data.length) {
          var prevIndent = -1;
          for (i in data) {
            var indent = parseInt(this._getIndent(data, i));
            this.__tempid = this.__tempid === void 0 ? 0 : this.__tempid + 1;
            data[i].index = parseInt(i);
            data[i].indent = indent;
            data[i].prevSibling = this._getSibling(parseInt(i), indent, !0);
            data[i].nextSibling = this._getSibling(parseInt(i), indent, !1);
            data[i].disableUp = null === data[i].prevSibling;
            data[i].disableDown = null === data[i].nextSibling;
            data[i].disableLeft = 0 === indent;
            data[i].disableRight = indent > prevIndent;
            data[i].id =
              data[i].id === void 0
                ? "outline-item-" + this.__tempid
                : data[i].id;
            prevIndent = indent;
          }
        }
        this.items = [];
        this.items = data;
      },
      getData: function getData() {
        for (i in this.items) {
          this.items[i].order = this._getOrder(this.items[i]);
        }
        return this.items;
      },
      addItem: function addItem(item) {
        var items = this.items,
          i = item.index;
        this.__tempid = this.__tempid + 1;
        items.splice(i + 1, 0, {
          id: "outline-item-" + this.__tempid,
          title: "",
          indent: item.indent,
          parent: item.parent
        });
        this._refreshData();
        this.__focusedItem = item.nextElementSibling;
        this.__focusedItem.focus();
      },
      removeItem: function removeItem(item) {
        var i = item.index;
        if (
          confirm("Do you really want to delete " + this.items[i].title + "?")
        ) {
          this.__focusedItem = item.previousElementSibling;
          for (k in this.items) {
            if (this.items[k].parent == this.items[i].id) {
              this.items[k].parent = this.items[i].parent;
            }
          }
          this.items.splice(i, 1);
          this._refreshData();
          this.__focusedItem.focus();
        }
      },
      moveItem: function moveItem(item, moveUp) {
        var root = this,
          sourceStart = item.index,
          sourceEnd = this._getLastChild(item),
          sourceCount = sourceEnd - sourceStart + 1,
          target = moveUp
            ? this.items[sourceStart].prevSibling
            : this._getLastChild(this.items[sourceEnd + 1]) - sourceCount + 1,
          items = this.items;
        if (-1 < target && target < this.items.length) {
          if ((moveUp && !item.disableUp) || (!moveUp && !item.disableDown)) {
            items.splice.apply(
              items,
              [target, 0].concat(
                babelHelpers.toConsumableArray(
                  items.splice(sourceStart, sourceCount)
                )
              )
            );
            this.setData(items);
            this.__focusedItem = this.$.itemslist.querySelectorAll(
              "lrnsys-outline-item"
            )[target];
            this.__focusedItem.focus();
          }
        }
      },
      _refreshData: function _refreshData() {
        var data = this.items;
        this.items = [];
        this.items = data;
        if (this.__focusedItem !== void 0 && null !== this.__focusedItem)
          this.__focusedItem.focus();
      },
      _adjustIndent: function _adjustIndent(item, amount) {
        if (
          (0 < amount && !item.disableRight) ||
          (0 > amount && !item.disableLeft)
        ) {
          var _i = parseInt(item.index),
            oldIndent = item.indent,
            indent = item.indent + amount,
            n = _i + 1,
            prevParent = null !== item.prevSibling ? item.prevSibling.id : null,
            grandParent =
              this._getItemById(item.parent) &&
              this._getItemById(item.parent).parent
                ? this._getItemById(item.parent).parent.id
                : null;
          item.indent = indent;
          item.parent = 0 < amount ? prevParent : grandParent;
          item.prevSibling = this._getSibling(_i, indent, !0);
          item.nextSibling = this._getSibling(_i, indent, !1);
          item.disableUp = null === item.prevSibling;
          item.disableDown = null === item.nextSibling;
          item.disableLeft = 0 === indent;
          item.disableRight =
            null === this.items[_i - 1] || indent > this.items[_i - 1].indent;
          while (
            null !== this.items[n] &&
            this.items[n] !== void 0 &&
            oldIndent < this.items[n].indent
          ) {
            this.items[n].indent = this.items[n].indent + amount;
            n++;
            next = this.items[n];
          }
          this._refreshData();
        }
      },
      _getLastChild: function _getLastChild(item) {
        var next =
          item !== void 0 && null !== item
            ? this._getSibling(item.index, item.indent, !1)
            : null;
        if (null !== next && next !== void 0) {
          return next - 1;
        } else if (
          null !== item.parent &&
          null !== item.parent &&
          null !== this._getItemById(item.parent)
        ) {
          return this._getLastChild(this._getItemById(item.parent));
        } else {
          return this.items.length - 1;
        }
      },
      _getIndent: function _getIndent(data, i) {
        if (data[i].parent !== void 0) {
          var _k = data.findIndex(function(j) {
            return j.id === data[i].parent;
          });
          if (data[_k] !== void 0 && data[_k].indent !== void 0) {
            return data[_k].indent + 1;
          }
        }
        return 0;
      },
      _getOrder: function _getOrder(item) {
        var ctr = 0,
          order = 0;
        for (i in this.items) {
          if (
            this.items[i].parent == item.parent &&
            this.items[i].id == item.id
          ) {
            order = ctr;
          } else if (this.items[i].parent == item.parent) {
            ctr++;
          }
        }
        return order;
      },
      _getSibling: function _getSibling(index, indent, prev) {
        var inc = prev ? -1 : 1,
          i = index + inc,
          sib = null;
        while (i < this.items.length && -1 < i) {
          if (
            null === sib &&
            this.items[i].parent === this.items[index].parent
          ) {
            sib = i;
          }
          i += inc;
        }
        return sib;
      },
      _getItemById: function _getItemById(id, offset) {
        var i = this.items.findIndex(function(j) {
          return j.id === id;
        });
        offset = offset === void 0 ? 0 : offset;
        if (this.items[i + offset] !== void 0) {
          return this.items[i + offset];
        } else {
          return null;
        }
      },
      _handleAddItem: function _handleAddItem(e) {
        this.addItem(e.detail.item);
      },
      _handleRemoveItem: function _handleRemoveItem(e) {
        this.removeItem(e.detail.item);
      },
      _handleMoveItem: function _handleMoveItem(e) {
        this.moveItem(e.detail.item, e.detail.moveUp, e.detail.byGroup);
      },
      _handleFocusItem: function _handleFocusItem(e) {
        var item = e.detail.moveUp
          ? e.detail.item.previousElementSibling
          : e.detail.item.nextElementSibling;
        item.setSelection();
      },
      _handleIndentItem: function _handleIndentItem(e) {
        var amt = e.detail.increase ? 1 : -1;
        this._adjustIndent(this._getItemById(e.detail.item.id), amt);
      },
      _handleChangeItem: function _handleChangeItem(e) {
        this._getItemById(e.detail.item.id).title = e.detail.value;
        this._refreshData();
      }
    }),
    babelHelpers.defineProperty(
      _Polymer,
      "_handleFocusItem",
      function _handleFocusItem(e) {
        this.__focusedItem = e.srcElement;
      }
    ),
    babelHelpers.defineProperty(
      _Polymer,
      "_handleBlurItem",
      function _handleBlurItem() {}
    ),
    _Polymer)
  );
});
