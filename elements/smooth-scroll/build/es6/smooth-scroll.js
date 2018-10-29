import { Polymer } from "./node_modules/@polymer/polymer/polymer-legacy.js";
Polymer({
  is: "smooth-scroll",
  properties: {},
  scroll: function(target, options) {
    const defaultOptions = {
        align: "top",
        delay: 0,
        duration: 300,
        scrollElement: window
      },
      _options = Object.assign({}, defaultOptions, options),
      targetPosition = target.getBoundingClientRect(),
      scrollElementPosition = _options.scrollElement.getBoundingClientRect(),
      scrollElementHeight =
        _options.scrollElement.getBoundingClientRect().bottom -
        _options.scrollElement.getBoundingClientRect().top,
      targetHeight = targetPosition.bottom - targetPosition.top,
      startPosition = _options.scrollElement.scrollTop;
    let distance =
      target.getBoundingClientRect().top -
      _options.scrollElement.getBoundingClientRect().top;
    distance = distance - scrollElementHeight / 2;
    switch (_options.align) {
      case "center":
        distance = distance + targetHeight / 2;
        break;
      case "bottom":
        distance = distance + targetHeight;
        break;
      default:
        break;
    }
    let startTime = null;
    function animation(currentTime) {
      if (null === startTime) startTime = currentTime;
      let timeElapsed = currentTime - startTime,
        run = ease(timeElapsed, startPosition, distance, _options.duration);
      _options.scrollElement.scrollTop = run;
      if (timeElapsed < _options.duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
      if (1 > (t /= d / 2)) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }
});
