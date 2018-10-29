class PageScrollPosition extends HTMLElement {
  attachedCallback() {
    this.value = 0;
    let element = document,
      valueChangedEvent = new CustomEvent("value-changed", {
        detail: { value: 0 }
      });
    this.dispatchEvent(valueChangedEvent);
    element.addEventListener("scroll", () => {
      let a = document.documentElement.scrollTop,
        b =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      this.value = 100 * (a / b);
      valueChangedEvent = new CustomEvent("value-changed", {
        detail: { value: this.value }
      });
      this.dispatchEvent(valueChangedEvent);
    });
  }
}
document.registerElement("page-scroll-position", PageScrollPosition);
