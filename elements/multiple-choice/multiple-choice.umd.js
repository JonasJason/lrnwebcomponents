!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-checkbox/paper-checkbox.js"),require("@polymer/paper-radio-button/paper-radio-button.js"),require("@polymer/paper-radio-group/paper-radio-group.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-toast/paper-toast.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-checkbox/paper-checkbox.js","@polymer/paper-radio-button/paper-radio-button.js","@polymer/paper-radio-group/paper-radio-group.js","@polymer/paper-button/paper-button.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-toast/paper-toast.js","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).MultipleChoice={},null,null,null,null,null,null,null,e.litElement_js,e.schemaBehaviors_js,e.simpleColors_js)}(this,function(e,t,n,o,r,i,s,c,a,l,p){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function x(e,t,n){return(x=k()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&w(r,n.prototype),r}).apply(null,arguments)}function j(e){var t="function"==typeof Map?new Map:void 0;return(j=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return x(e,arguments,g(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),w(o,e)})(e)}function O(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){var t=k();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function q(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}!function(){var e=function(e,t){return Math.random()*(t-e)+e},t=[{front:"#52A7DD",back:"#2287BD"},{front:"#f07178",back:"#c04148"},{front:"#ffcb6b",back:"#cf9b3b"}],n=function(t,n){var o=e(t[0],t[1]),r=n[1]-n[0]+1,i=n[1]-Math.abs(e(0,r)+e(0,r)-r);return i>=n[1]-1&&(i+=Math.random()<.25?e(1,3):0),{x:o,y:-i}};function o(o,r){this.options=r,this.randomModifier=e(0,99),this.color=t[Math.floor(e(0,t.length))],this.dimensions={x:e(8,16),y:e(8,14)},this.position={x:e(o.width/2,o.width/2),y:e(o.height/2,o.height/2)},this.rotation=e(0,2*Math.PI),this.scale={x:1,y:1},this.velocity=n([-9,9],[6,11])}function r(n,o){this.options=o,this.color=t[Math.floor(e(0,t.length))].back,this.radius=e(1,2),this.position={x:e(n.width/2,n.width/2),y:e(n.height/2,n.height/2)},this.velocity={x:e(-6,6),y:e(-8,-12)}}o.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragConfetti,this.velocity.y=Math.min(this.velocity.y+this.options.gravityConfetti,this.options.terminalVelocity),this.velocity.x+=Math.random()>.5?Math.random():-Math.random(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.scale.y=Math.cos(.09*(this.position.y+this.randomModifier))},r.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragSequins,this.velocity.y=this.velocity.y+this.options.gravitySequins,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y};var i=function(e){v(n,j(HTMLElement));var t=S(n);function n(){var e;return h(this,n),(e=t.call(this)).canvas=null,e.confetti=[],e.sequins=[],e.options={confettiCount:55,sequinCount:30,gravityConfetti:.25,gravitySequins:.35,dragConfetti:.025,dragSequins:.02,terminalVelocity:4},e}return f(n,[{key:"connectedCallback",value:function(){this.style="display: block; position: relative;",this.canvas=document.createElement("canvas"),this.canvas.id="confetti-container-canvas-🎉",this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.offsetWidth,this.canvas.height=this.offsetHeight,this.canvas.style="pointer-events: none; position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 1000; image-rendering: crisp-edges;",this.prepend(this.canvas)}},{key:"attributeChangedCallback",value:function(e,t,n){"popped"===e&&null===t&&this.popConfetti()}},{key:"popConfetti",value:function(){for(var e=0;e<this.options.confettiCount;e++)this.confetti.push(new o(this.canvas,this.options));for(var t=0;t<this.options.sequinCount;t++)this.sequins.push(new r(this.canvas,this.options));this.render()}},{key:"render",value:function(){var e=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.confetti.forEach(function(t,n){var o=t.dimensions.x*t.scale.x,r=t.dimensions.y*t.scale.y;e.ctx.translate(t.position.x,t.position.y),e.ctx.rotate(t.rotation),t.update(),e.ctx.fillStyle=t.scale.y>0?t.color.front:t.color.back,e.ctx.fillRect(-o/2,-r/2,o,r),e.ctx.setTransform(1,0,0,1,0,0)}),this.sequins.forEach(function(t,n){e.ctx.translate(t.position.x,t.position.y),t.update(),e.ctx.fillStyle=t.color,e.ctx.beginPath(),e.ctx.arc(0,0,t.radius,0,2*Math.PI),e.ctx.fill(),e.ctx.setTransform(1,0,0,1,0,0)}),this.confetti.forEach(function(t,n){t.position.y-25>=e.canvas.height&&e.confetti.splice(n,1)}),this.sequins.forEach(function(t,n){t.position.y-25>=e.canvas.height&&e.sequins.splice(n,1)}),this.sequins.length||this.confetti.length?window.requestAnimationFrame(this.render.bind(this)):this.removeAttribute("popped")}}],[{key:"observedAttributes",get:function(){return["popped"]}}]),n}();window.customElements&&window.customElements.define&&customElements.define("confetti-container",i)}();var C=Object.freeze({__proto__:null});function T(){var e=_(['\n              <div id="buttons">\n                <paper-button\n                  id="check"\n                  ?disabled="','"\n                  raised\n                  @click="','"\n                  >','</paper-button\n                >\n                <paper-button\n                  id="reset"\n                  ?disabled="','"\n                  raised\n                  @click="','"\n                  >',"</paper-button\n                >\n              </div>\n            "]);return T=function(){return e},e}function E(){var e=_(['\n                    <li>\n                      <paper-checkbox\n                        ?disabled="','"\n                        property="oer:answer"\n                        name="','"\n                        ?checked="','"\n                        @checked-changed="','"\n                        >',"</paper-checkbox\n                      >\n                    </li>\n                  "]);return E=function(){return e},e}function P(){var e=_(["\n              <ul>\n                ","\n              </ul>\n            "]);return P=function(){return e},e}function I(){var e=_(['\n                    <paper-radio-button\n                      ?disabled="','"\n                      property="oer:answer"\n                      name="','"\n                      ?checked="','"\n                      @checked-changed="','"\n                      >',"</paper-radio-button\n                    >\n                  "]);return I=function(){return e},e}function R(){var e=_(["\n              <paper-radio-group>\n                ","\n              </paper-radio-group>\n            "]);return R=function(){return e},e}function z(){var e=_([' <h3><span property="oer:name">',"</span></h3> "]);return z=function(){return e},e}function L(){var e=_(['\n      <confetti-container id="confetti">\n        <meta property="oer:assessing" content="','" />\n        ',"\n        <div>","</div>\n        ","\n        ",'\n        <paper-toast\n          id="toast"\n          scroll-action="cancel"\n          duration="6000"\n          position-target="','"\n          class="fit-bottom ','"\n        >\n          ','\n          <iron-icon\n            icon="','"\n            style="margin-left:16px;"\n          ></iron-icon>\n        </paper-toast>\n      </confetti-container>\n    ']);return L=function(){return e},e}function D(){var e=_(['\n        :host {\n          display: block;\n          padding: 16px 16px 54px 16px;\n          background-color: var(--simple-colors-default-theme-grey-1);\n          color: var(--simple-colors-default-theme-grey-12);\n          --paper-checkbox-unchecked-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --paper-checkbox-unchecked-ink-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --paper-checkbox-checked-color: var(\n            --simple-colors-default-theme-accent-8\n          );\n          --paper-checkbox-checked-ink-color: var(\n            --simple-colors-default-theme-accent-8\n          );\n          --paper-checkbox-checkmark-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --paper-checkbox-label-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --paper-checkbox-error-color: var(\n            --simple-colors-default-theme-red-8\n          );\n        }\n        :host([accent-color="grey"]),\n        :host([accent-color="red"]),\n        :host([accent-color="green"]) {\n          --paper-checkbox-checked-color: var(\n            --simple-colors-default-theme-blue-8\n          );\n          --paper-checkbox-checked-ink-color: var(\n            --simple-colors-default-theme-blue-8\n          );\n        }\n        :host #check {\n          background-color: var(--simple-colors-default-theme-accent-8);\n          color: var(--simple-colors-default-theme-grey-1);\n        }\n        :host #check:hover {\n          background-color: var(--simple-colors-default-theme-accent-9);\n        }\n        :host([accent-color="red"]) #check,\n        :host([accent-color="green"]) #check {\n          background-color: var(--simple-colors-default-theme-blue-8);\n          color: var(--simple-colors-default-theme-grey-1);\n        }\n        :host([accent-color="red"]) #check:hover,\n        :host([accent-color="green"]) #check:hover {\n          background-color: var(--simple-colors-default-theme-blue-9);\n        }\n        :host([accent-color="grey"]) #check,\n        :host paper-button {\n          background-color: var(--simple-colors-default-theme-grey-1);\n          color: var(--simple-colors-default-theme-grey-12);\n        }\n        :host([accent-color="grey"]) #check:hover,\n        :host paper-button:hover {\n          cursor: pointer;\n          background-color: var(--simple-colors-default-theme-grey-2);\n          color: var(--simple-colors-default-theme-grey-12);\n        }\n        .red {\n          background-color: var(--simple-colors-default-theme-red-8);\n        }\n        .green {\n          background-color: var(--simple-colors-default-theme-green-8);\n        }\n        h3 {\n          margin: 8px;\n        }\n        ul {\n          list-style: none;\n          padding: 0;\n          margin: 0;\n        }\n        ul li {\n          padding: 8px;\n        }\n        paper-radio-button {\n          padding: 8px;\n          display: block;\n        }\n        paper-checkbox {\n          padding: 8px;\n        }\n        iron-icon {\n          display: inline-flex;\n        }\n      ']);return D=function(){return e},e}var B=function(e){v(n,l.SchemaBehaviors(p.SimpleColors));var t=S(n);function n(){var e;return h(this,n),(e=t.call(this)).randomize=!1,e.hideButtons=!1,e.title="",e.disabled=!1,e.singleOption=!1,e.checkLabel="Check answer",e.resetLabel="Reset",e.hideTitle=!1,e.question="",e.answers=[],e.displayedAnswers=[],e.correctText="Great job!",e.correctIcon="icons:thumb-up",e.incorrectText="Better luck next time!",e.incorrectIcon="icons:thumb-down",e.quizName="default",e}return f(n,null,[{key:"styles",get:function(){return[].concat(q(A(g(n),"styles",this)),[a.css(D())])}},{key:"tag",get:function(){return"multiple-choice"}}]),f(n,[{key:"updated",value:function(e){var t=this;A(g(n.prototype),"updated",this)&&A(g(n.prototype),"updated",this).call(this,e),e.forEach(function(e,n){if(["answers","displayedAnswers"].includes(n)){var o="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(o,{detail:{value:t[n]}}))}["answers","randomize"].includes(n)&&(t.displayedAnswers=q(t._computeDisplayedAnswers(t.answers,t.randomize))),"singleOption"==n&&t.singleOptionChanged(t[n])})}},{key:"singleOptionChanged",value:function(e){}},{key:"render",value:function(){var e=this;return a.html(L(),this.relatedResource,this.hideTitle?"":a.html(z(),this.title),this.question,this.singleOption?a.html(R(),this.displayedAnswers.map(function(t,n){return a.html(I(),e.disabled,n,t.userGuess,e.checkedEvent,t.label)})):a.html(P(),this.displayedAnswers.map(function(t,n){return a.html(E(),e.disabled,n,t.userGuess,e.checkedEvent,t.label)})),this.hideButtons?"":a.html(T(),this.disabled,this._verifyAnswers,this.checkLabel,this.disabled,this.resetAnswers,this.resetLabel),this.positionTarget,this.__toastColor,this.__toastText,this.__toastIcon)}},{key:"checkedEvent",value:function(e){var t=this.displayedAnswers;t[e.target.name].userGuess=e.detail.value,this.displayedAnswers=q(t)}},{key:"resetAnswers",value:function(e){this.shadowRoot.querySelector("#toast").hide(),this.displayedAnswers=[];var t=this.answers;this.answers.forEach(function(e){e.userGuess=!1}),this.answers=q(t)}},{key:"checkAnswers",value:function(){var e=!0;for(var t in this.displayedAnswers)0!=e&&this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess?e=!0:this.displayedAnswers[t].correct&&!this.displayedAnswers[t].userGuess?e=!1:!this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess&&(e=!1);return e}},{key:"_verifyAnswers",value:function(e){var t=this;this.shadowRoot.querySelector("#toast").hide();var n=this.checkAnswers();n?(this.__toastColor="green",this.__toastIcon=this.correctIcon,this.__toastText=this.correctText,Promise.resolve(C).then(function(e){setTimeout(function(){t.shadowRoot.querySelector("#confetti").setAttribute("popped","")},0)})):(this.__toastColor="red",this.__toastIcon=this.incorrectIcon,this.__toastText=this.incorrectText),this.shadowRoot.querySelector("#toast").show();var o={activityDisplay:"answered",objectName:this.quizName,resultSuccess:n};this.dispatchEvent(new CustomEvent("user-engagement",{bubbles:!0,composed:!0,cancelable:!1,detail:o}))}},{key:"_computeDisplayedAnswers",value:function(e,t){if("undefined"!==u(e)&&null!=e&&e.length>0&&t){for(var n,o,r=e,i=r.length;0!==i;)o=Math.floor(Math.random()*i),n=r[i-=1],r[i]=r[o],r[o]=n;return r}return e}},{key:"preProcessHaxNodeToContent",value:function(e){if(e.answers){for(var t=[],n=0;n<e.answers.length;n++){var o=e.answers[n];o.userGuess&&delete o.userGuess,t.push(o)}e.answers=[].concat(t)}return e}},{key:"preProcessHaxInsertContent",value:function(e){return e.properties.answers&&(e.properties.answers=e.properties.answers.map(function(e){return e.userGuess&&delete e.userGuess,e})),e}},{key:"firstUpdated",value:function(e){A(g(n.prototype),"firstUpdated",this)&&A(g(n.prototype),"firstUpdated",this).call(this,e),this.shadowRoot.querySelector("#positionTarget")&&(this.positionTarget=this.shadowRoot.querySelector("#positionTarget")),this.setAttribute("typeof","oer:Assessment"),this.shadowRoot.querySelector("#toast").fitInto=this}}],[{key:"properties",get:function(){return m(m({},A(g(n),"properties",this)),{},{title:{type:String},positionTarget:{type:Object},disabled:{type:Boolean},singleOption:{type:Boolean,attribute:"single-option"},checkLabel:{type:String,attribute:"check-label"},resetLabel:{type:String,attribute:"reset-label"},relatedResource:{type:String,attribute:"related-resource"},hideTitle:{type:Boolean,attribute:"hide-title"},question:{type:String},answers:{type:Array},displayedAnswers:{type:Array},correctText:{type:String,attribute:"correct-text"},incorrectText:{type:String,attribute:"incorrect-text"},correctIcon:{type:String,attribute:"correct-icon"},incorrectIcon:{type:String,attribute:"incorrect-icon"},quizName:{type:String,attribute:"quiz-name"},randomize:{type:Boolean,reflect:!0},hideButtons:{type:Boolean,attribute:"hide-buttons"},__toastText:{type:String},__toastColor:{type:String},__toastIcon:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Multiple choice",description:"Multiple choice self check",icon:"hax:multiple-choice",color:"purple",groups:["Instructional"],handles:[],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"question",title:"Question",description:"Question for users to respond to.",inputMethod:"textfield",icon:"icons:help"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"hideTitle",title:"Hide title",description:"Whether or not to display the title",inputMethod:"boolean"},{property:"question",title:"Question",description:"Question for users to respond to.",inputMethod:"textfield"},{property:"randomize",title:"Randomize",description:"Randomize the answers dynamically",inputMethod:"boolean"},{property:"answers",title:"Answer set",description:"Answers in a multiple choice",inputMethod:"array",itemLabel:"label",properties:[{property:"correct",title:"Correct",description:"If this is correct or not",inputMethod:"boolean"},{property:"label",title:"Answer",description:"Possible answer to the question",inputMethod:"textfield",required:!0}]},{property:"correctText",title:"Correct feedback",description:"Feedback when they get it right",inputMethod:"textfield"},{property:"correctIcon",title:"Correct icon",description:"Icon to display when correct answer happens",inputMethod:"iconpicker",options:["icons:trending-flat","icons:launch","icons:pan-tool","icons:link","icons:check","icons:favorite","icons:thumb-up","icons:thumb-down","icons:send"]},{property:"incorrectText",title:"Incorrect feedback",description:"Feedback when they get it wrong",inputMethod:"textfield"},{property:"incorrectIcon",title:"Incorrect icon",description:"Icon to display when wrong answer happens",inputMethod:"iconpicker",options:["icons:trending-flat","icons:launch","icons:pan-tool","icons:link","icons:check","icons:favorite","icons:thumb-up","icons:thumb-down","icons:send"]},{property:"quizName",title:"Name of the quiz",description:"Quiz name passed in",inputMethod:"textfield"}],advanced:[{property:"checkLabel",title:"Check answers label",description:"Label for getting solution feedback",inputMethod:"textfield"},{property:"resetLabel",title:"Reset label",description:"label for the reset button",inputMethod:"textfield"}]},saveOptions:{unsetAttributes:["__utils","displayed-answers","displayedAnswers","colors"]}}}}]),n}();window.customElements.define(B.tag,B),e.MultipleChoice=B,Object.defineProperty(e,"__esModule",{value:!0})});
