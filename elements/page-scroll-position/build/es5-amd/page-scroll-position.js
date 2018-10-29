var PageScrollPosition = (function(_HTMLElement) {
  babelHelpers.inherits(PageScrollPosition, _HTMLElement);
  function PageScrollPosition() {
    babelHelpers.classCallCheck(this, PageScrollPosition);
    return babelHelpers.possibleConstructorReturn(
      this,
      (
        PageScrollPosition.__proto__ ||
        Object.getPrototypeOf(PageScrollPosition)
      ).apply(this, arguments)
    );
  }
  babelHelpers.createClass(PageScrollPosition, [
    {
      key: "attachedCallback",
      value: function attachedCallback() {
        var _this = this;
        this.value = 0;
        var element = document,
          valueChangedEvent = new CustomEvent("value-changed", {
            detail: { value: 0 }
          });
        this.dispatchEvent(valueChangedEvent);
        element.addEventListener("scroll", function() {
          var a = document.documentElement.scrollTop,
            b =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
          _this.value = 100 * (a / b);
          valueChangedEvent = new CustomEvent("value-changed", {
            detail: { value: _this.value }
          });
          _this.dispatchEvent(valueChangedEvent);
        });
      }
    }
  ]);
  return PageScrollPosition;
})(HTMLElement);
document.registerElement("page-scroll-position", PageScrollPosition);
