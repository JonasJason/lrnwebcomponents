!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/iron-icons/av-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/iron-icons/av-icons.js","@polymer/iron-icon/iron-icon.js","lit-element/lit-element.js"],t):t((e=e||self).VoiceRecorder={},null,null,e.litElement_js)}(this,function(e,t,n,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,i,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return r=this,!(i=n)||"object"!=typeof i&&"function"!=typeof i?u(r):i}}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e){return(e|=0)<10?"0".concat(e):"".concat(Math.min(e,99))}function f(){function e(e,t){return new Promise(function(n,r){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="arraybuffer",i.onload=function(){n(WebAssembly.instantiate(i.response,t))},i.onerror=r,i.send()})}var t=null,n=5242880;function r(e){var t=n;return n+=e,t}function i(e){postMessage({type:"internal-error",data:e})}var a=null,o=null,s=null;onmessage=function(n){var c,u=n.data;switch(u.type){case"init":var l=u.data,d=l.wasmURL,h=l.shimURL;Promise.resolve().then(function(){var e,n;return self.WebAssembly&&(e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),n=new WebAssembly.Module(e),0===new WebAssembly.Instance(n,{}).exports.test(4))&&delete self.WebAssembly,self.WebAssembly||importScripts(h),{memory:t=new WebAssembly.Memory({initial:256,maximum:256}),pow:Math.pow,exit:i,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin,sbrk:r}}).then(function(t){return function(t,n){if(!WebAssembly.instantiateStreaming)return e(t,n);var r=fetch(t,{credentials:"same-origin"});return WebAssembly.instantiateStreaming(r,n).catch(function(r){if(r.message&&r.message.indexOf("Argument 0 must be provided and must be a Response")>0)return e(t,n);throw r})}(d,{env:t})}).then(function(e){a=e.instance.exports,postMessage({type:"init",data:null})}).catch(function(e){postMessage({type:"init-error",data:e.toString()})});break;case"start":if(!function(e){if(!(o=a.vmsg_init(e)))return!1;var n=new Uint32Array(t.buffer,o,1)[0];return s=new Float32Array(t.buffer,n),!0}(u.data))return postMessage({type:"error",data:"vmsg_init"});break;case"data":if(c=u.data,s.set(c),!(a.vmsg_encode(o,c.length)>=0))return postMessage({type:"error",data:"vmsg_encode"});break;case"stop":var f=function(){if(a.vmsg_flush(o)<0)return null;var e=new Uint32Array(t.buffer,o+4,1)[0],n=new Uint32Array(t.buffer,o+8,1)[0],r=new Uint8Array(t.buffer,e,n),i=new Blob([r],{type:"audio/mpeg"});return a.vmsg_free(o),o=null,s=null,i}();if(!f)return postMessage({type:"error",data:"vmsg_flush"});postMessage({type:"stop",data:f})}}}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i(this,e),this.wasmURL=new URL(t.wasmURL||"/static/js/vmsg.wasm",location).href,this.shimURL=new URL(t.shimURL||"/static/js/wasm-polyfill.js",location).href,this.onStop=n,this.pitch=t.pitch||0,this.stream=null,this.audioCtx=null,this.gainNode=null,this.pitchFX=null,this.encNode=null,this.worker=null,this.workerURL=null,this.blob=null,this.blobURL=null,this.resolve=null,this.reject=null,Object.seal(this)}return o(e,[{key:"close",value:function(){this.encNode&&this.encNode.disconnect(),this.encNode&&(this.encNode.onaudioprocess=null),this.stream&&this.stopTracks(),this.audioCtx&&this.audioCtx.close(),this.worker&&this.worker.terminate(),this.workerURL&&URL.revokeObjectURL(this.workerURL),this.blobURL&&URL.revokeObjectURL(this.blobURL)}},{key:"initAudio",value:function(){var e=this;return(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(e){return navigator.mediaDevices.getUserMedia(e)}:function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(n,r){t.call(navigator,e,n,r)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})({audio:!0}).then(function(t){e.stream=t;var n=e.audioCtx=new(window.AudioContext||window.webkitAudioContext),r=n.createMediaStreamSource(t),i=e.gainNode=(n.createGain||n.createGainNode).call(n);i.gain.value=1,r.connect(i);var a=e.pitchFX=new R(n);a.setPitchOffset(e.pitch);var o=e.encNode=(n.createScriptProcessor||n.createJavaScriptNode).call(n,0,1,1);a.output.connect(o),i.connect(0===e.pitch?o:a.input)})}},{key:"initWorker",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");var t=new Blob(["(",f.toString(),")()"],{type:"application/javascript"}),n=this.workerURL=URL.createObjectURL(t),r=this.worker=new Worker(n),i=this.wasmURL,a=this.shimURL;return r.postMessage({type:"init",data:{wasmURL:i,shimURL:a}}),new Promise(function(t,n){r.onmessage=function(r){var i=r.data;switch(i.type){case"init":t();break;case"init-error":n(new Error(i.data));break;case"error":case"internal-error":console.error("Worker error:",i.data),e.reject&&e.reject(i.data);break;case"stop":e.blob=i.data,e.blobURL=URL.createObjectURL(i.data),e.onStop&&e.onStop(),e.resolve&&e.resolve(e.blob)}}})}},{key:"init",value:function(){return this.initAudio().then(this.initWorker.bind(this))}},{key:"startRecording",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");this.blob=null,this.blobURL&&URL.revokeObjectURL(this.blobURL),this.blobURL=null,this.resolve=null,this.reject=null,this.worker.postMessage({type:"start",data:this.audioCtx.sampleRate}),this.encNode.onaudioprocess=function(t){var n=t.inputBuffer.getChannelData(0);e.worker.postMessage({type:"data",data:n})},this.encNode.connect(this.audioCtx.destination)}},{key:"stopRecording",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");return this.encNode.disconnect(),this.encNode.onaudioprocess=null,this.stopTracks(),this.worker.postMessage({type:"stop",data:null}),new Promise(function(t,n){e.resolve=t,e.reject=n})}},{key:"stopTracks",value:function(){this.stream.getTracks&&this.stream.getTracks().forEach(function(e){return e.stop()})}}]),e}(),m=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;i(this,e),this.recorder=new p(n,this.onStop.bind(this)),this.resolve=a,this.reject=o,this.target=r,this.renderArea=null,this.recordBtn=null,this.stopBtn=null,this.timer=null,this.audio=null,this.saveBtn=null,this.tid=0,this.start=0,Object.seal(this),this.recorder.initAudio().then(function(){return t.drawInit()}).then(function(){return t.recorder.initWorker()}).then(function(){return t.drawAll()}).catch(function(e){return t.drawError(e)})}return o(e,[{key:"drawInit",value:function(){var e=this.renderArea=document.createElement("div");e.className="vmsg-popup",e.addEventListener("click",function(e){return e.stopPropagation()});var t=document.createElement("div");t.className="vmsg-progress";for(var n=0;n<3;n++){var r=document.createElement("div");r.className="vmsg-progress-dot",t.appendChild(r)}e.appendChild(t),this.target.appendChild(e)}},{key:"drawTime",value:function(e){var t=Math.round(e/1e3);this.timer.textContent=h(t/60)+":"+h(t%60)}},{key:"drawAll",value:function(){var e=this;this.drawInit(),this.clearAll();var t=document.createElement("div");t.className="vmsg-record-row",this.renderArea.appendChild(t);var n=this.recordBtn=document.createElement("button");n.className="vmsg-button vmsg-record-button",n.textContent="●",n.addEventListener("click",function(){return e.startRecording()}),t.appendChild(n);var r=this.stopBtn=document.createElement("button");r.className="vmsg-button vmsg-stop-button",r.style.display="none",r.textContent="■",r.addEventListener("click",function(){return e.stopRecording()}),t.appendChild(r);var i=this.audio=new Audio;i.autoplay=!0;var a=this.timer=document.createElement("span");a.className="vmsg-timer",a.addEventListener("click",function(){i.paused?e.recorder.blobURL&&(i.src=e.recorder.blobURL):i.pause()}),this.drawTime(0),t.appendChild(a);var o=this.saveBtn=document.createElement("button");o.className="vmsg-button vmsg-save-button",o.textContent="✓",o.disabled=!0,o.addEventListener("click",function(){return e.close(e.recorder.blob)}),t.appendChild(o);var s=document.createElement("div");s.className="vmsg-slider-wrapper vmsg-gain-slider-wrapper";var c=document.createElement("input");c.className="vmsg-slider vmsg-gain-slider",c.setAttribute("type","range"),c.min=0,c.max=2,c.step=.2,c.value=1,c.onchange=function(){var t=+c.value;e.recorder.gainNode.gain.value=t},s.appendChild(c),this.renderArea.appendChild(s);var u=document.createElement("div");u.className="vmsg-slider-wrapper vmsg-pitch-slider-wrapper";var l=document.createElement("input");l.className="vmsg-slider vmsg-pitch-slider",l.setAttribute("type","range"),l.min=-1,l.max=1,l.step=.2,l.value=this.recorder.pitch,l.onchange=function(){var t=+l.value;e.recorder.pitchFX.setPitchOffset(t),e.recorder.gainNode.disconnect(),e.recorder.gainNode.connect(0===t?e.recorder.encNode:e.recorder.pitchFX.input)},u.appendChild(l),this.renderArea.appendChild(u),this.target.dispatchEvent(new CustomEvent("vmsg-ready",{detail:{value:!0}}))}},{key:"drawError",value:function(e){console.error(e),this.drawInit(),this.clearAll();var t=document.createElement("div");t.className="vmsg-error",t.textContent=e.toString(),this.renderArea.appendChild(t)}},{key:"clearAll",value:function(){this.renderArea&&(this.renderArea.innerHTML="")}},{key:"close",value:function(e){this.audio&&this.audio.pause(),this.tid&&clearTimeout(this.tid),this.recorder.close(),e?this.resolve(e):this.reject(new Error("No record made"))}},{key:"onStop",value:function(){this.recordBtn.style.display="",this.stopBtn.style.display="none",this.stopBtn.disabled=!1,this.saveBtn.disabled=!1}},{key:"startRecording",value:function(){this.audio.pause(),this.start=Date.now(),this.updateTime(),this.recordBtn.style.display="none",this.stopBtn.style.display="",this.saveBtn.disabled=!0,this.recorder.startRecording()}},{key:"stopRecording",value:function(){clearTimeout(this.tid),this.tid=0,this.stopBtn.disabled=!0,this.recorder.stopRecording()}},{key:"updateTime",value:function(){var e=this;this.drawTime(Date.now()-this.start),this.tid=setTimeout(function(){return e.updateTime()},300)}}]),e}(),v=!1;var g=.1,y=.05,b=.1;function w(e,t,n,r){for(var i=t*e.sampleRate,a=i+(t-2*n)*e.sampleRate,o=e.createBuffer(1,a,e.sampleRate),s=o.getChannelData(0),c=0;c<i;++c)s[c]=r?(i-c)/a:c/i;for(c=i;c<a;++c)s[c]=0;return o}function R(e){this.context=e;var t=(e.createGain||e.createGainNode).call(e),n=(e.createGain||e.createGainNode).call(e);this.input=t,this.output=n;var r=e.createBufferSource(),i=e.createBufferSource(),a=e.createBufferSource(),o=e.createBufferSource();this.shiftDownBuffer=w(e,b,y,!1),this.shiftUpBuffer=w(e,b,y,!0),r.buffer=this.shiftDownBuffer,i.buffer=this.shiftDownBuffer,a.buffer=this.shiftUpBuffer,o.buffer=this.shiftUpBuffer,r.loop=!0,i.loop=!0,a.loop=!0,o.loop=!0;var s=(e.createGain||e.createGainNode).call(e),c=(e.createGain||e.createGainNode).call(e),u=(e.createGain||e.createGainNode).call(e);u.gain.value=0;var l=(e.createGain||e.createGainNode).call(e);l.gain.value=0,r.connect(s),i.connect(c),a.connect(u),o.connect(l);var d=(e.createGain||e.createGainNode).call(e),h=(e.createGain||e.createGainNode).call(e),f=(e.createDelay||e.createDelayNode).call(e),p=(e.createDelay||e.createDelayNode).call(e);s.connect(d),c.connect(h),u.connect(d),l.connect(h),d.connect(f.delayTime),h.connect(p.delayTime);var m=e.createBufferSource(),v=e.createBufferSource(),R=function(e,t,n){for(var r=t*e.sampleRate,i=r+(t-2*n)*e.sampleRate,a=e.createBuffer(1,i,e.sampleRate),o=a.getChannelData(0),s=n*e.sampleRate,c=s,u=r-s,l=0;l<r;++l){var d;d=l<c?Math.sqrt(l/s):l>=u?Math.sqrt(1-(l-u)/s):1,o[l]=d}for(l=r;l<i;++l)o[l]=0;return a}(e,b,y);m.buffer=R,v.buffer=R,m.loop=!0,v.loop=!0;var k=(e.createGain||e.createGainNode).call(e),U=(e.createGain||e.createGainNode).call(e);k.gain.value=0,U.gain.value=0,m.connect(k.gain),v.connect(U.gain),t.connect(f),t.connect(p),f.connect(k),p.connect(U),k.connect(n),U.connect(n);var L=e.currentTime+.05,N=L+b-y;r.start(L),i.start(N),a.start(L),o.start(N),m.start(L),v.start(N),this.mod1=r,this.mod2=i,this.mod1Gain=s,this.mod2Gain=c,this.mod3Gain=u,this.mod4Gain=l,this.modGain1=d,this.modGain2=h,this.fade1=m,this.fade2=v,this.mix1=k,this.mix2=U,this.delay1=f,this.delay2=p,this.setDelay(g)}function k(){var e=d(["\n        :host {\n          display: inline-flex;\n        }\n      "]);return k=function(){return e},e}function U(){var e=d(['\n      <button @click="','">\n        <iron-icon icon="','"></iron-icon>',"\n      </button>\n      <slot></slot>\n    "]);return U=function(){return e},e}R.prototype.setDelay=function(e){this.modGain1.gain.setTargetAtTime(.5*e,0,.01),this.modGain2.gain.setTargetAtTime(.5*e,0,.01)},R.prototype.setPitchOffset=function(e){e>0?(this.mod1Gain.gain.value=0,this.mod2Gain.gain.value=0,this.mod3Gain.gain.value=1,this.mod4Gain.gain.value=1):(this.mod1Gain.gain.value=1,this.mod2Gain.gain.value=1,this.mod3Gain.gain.value=0,this.mod4Gain.gain.value=0),this.setDelay(g*Math.abs(e))};var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,r.LitElement);var t=l(n);function n(){var e;return i(this,n),(e=t.call(this)).recording=!1,setTimeout(function(){e.addEventListener("vmsg-ready",e.vmsgReady.bind(u(e)))},0),e}return o(n,[{key:"render",value:function(){return r.html(U(),this.recordState,this.iconState,this.textState)}}],[{key:"styles",get:function(){return[r.css(k())]}},{key:"properties",get:function(){return{iconState:{type:String},textState:{type:String},recording:{type:Boolean}}}},{key:"tag",get:function(){return"voice-recorder"}}]),o(n,[{key:"recordState",value:function(e){this.recording=!this.recording}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"recording"==n&&(t[n]?(t.textState="stop",t.iconState="av:stop"):(t.textState="Record",t.iconState="av:play-arrow"),t.toggleRecording(t[n],e))})}},{key:"vmsgReady",value:function(e){console.warn(e.detail.value)}},{key:"toggleRecording",value:function(e,t){var n,r,i=this;e&&(n={wasmURL:this.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("voice-recorder.umd.js",document.baseURI).href))+"../../node_modules/vmsg/vmsg.wasm"},r=this,new Promise(function(e,t){if(v)throw new Error("Record form is already opened");v=!0,new m(n,r,e,t)}).then(function(e){return v=!1,e},function(e){throw v=!1,e})).then(function(e){i.dispatchEvent(new CustomEvent("voice-recorder-recording",{value:e}))})}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}]),n}();customElements.define(L.tag,L),e.VoiceRecorder=L,Object.defineProperty(e,"__esModule",{value:!0})});
