!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/materializecss-styles/lib/colors.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("./lrn-calendar.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/paper-menu-button/paper-menu-button.js"),require("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/lrnsys-layout/lrnsys-layout.js"),require("@lrnwebcomponents/lrnsys-layout/lrnsys-drawer.js"),require("@lrnwebcomponents/lrnsys-layout/lrnsys-dialog.js"),require("@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist.js"),require("@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist-item.js"),require("ical.js/build/ical.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/materializecss-styles/lib/colors.js","@polymer/paper-card/paper-card.js","@polymer/iron-ajax/iron-ajax.js","./lrn-calendar.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/paper-menu-button/paper-menu-button.js","@polymer/paper-dropdown-menu/paper-dropdown-menu.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/lrnsys-layout/lrnsys-layout.js","@lrnwebcomponents/lrnsys-layout/lrnsys-drawer.js","@lrnwebcomponents/lrnsys-layout/lrnsys-dialog.js","@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist.js","@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist-item.js","ical.js/build/ical.js"],e):e(t.polymerLegacy_js,null,null,null,null,null,null,t.polymer_dom_js)}(this,function(t,e,n,r,i,a,s,o){"use strict";function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function c(){var t=l(['\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      ::-webkit-scrollbar {\n        width: 0px;  /* remove scrollbar space */\n        background: transparent;  /* optional: just make scrollbar invisible */\n      }\n\n\n      .month {\n        width: 100%;\n        height: 20vh;\n        vertical-align: top;\n        overflow: scroll;\n\n      }\n      .week{\n        width: 100%;\n        height: 40vh;\n        vertical-align: top;\n        overflow: scroll;\n      }\n      .card-content{\n        position: relative;\n        bottom: 10px;\n        white-space: nowrap;\n        font-size: 12px;\n        padding: 0px 5px;\n        line-height: 7px;\n      }\n      .label{\n        width: 100%\n      }\n\n\n    </style>\n    \n      <div id="test">\n        <div>\n          <template is="dom-if" if="[[firstWeek]]">\n            <paper-card class="label">\n            <h3>[[getWeek(date)]]</h3>\n            </paper-card>\n          </template>\n        </div>\n        <paper-card class$="{{view}}" id="dateHeader">\n          \n            <h5> [[getMonth(date)]] </h5>\n          \n          <template is="dom-repeat" items="{{events}}">\n              <div class="card-content">\n                <lrnsys-drawer text="[[timeString(item.event.startDate._time.hour, item.event.startDate._time.minute, item.event.endDate._time.hour,item.event.endDate._time.minute)]] {{item.event.summary}}" header="[[getDateString(date)]]" align="left" heading-class="orange lighten-3 blue-text text-darken-4" style="{{computeStyle(item)}};overflow:auto;">\n                [[displayActivity(item)]] <br><br>[[displayStart(item)]]<br><br>[[displayEnd(item)]]<br><br>[[displayDuration(item)]]<br><br>[[displayDescription(item)]]<br><br>[[displayLocation(item)]]\n                </lrnsys-drawer>\n              </div>\n          </template>\n        </paper-card>\n      </div>\n'],['\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      ::-webkit-scrollbar {\n        width: 0px;  /* remove scrollbar space */\n        background: transparent;  /* optional: just make scrollbar invisible */\n      }\n\n\n      .month {\n        width: 100%;\n        height: 20vh;\n        vertical-align: top;\n        overflow: scroll;\n\n      }\n      .week{\n        width: 100%;\n        height: 40vh;\n        vertical-align: top;\n        overflow: scroll;\n      }\n      .card-content{\n        position: relative;\n        bottom: 10px;\n        white-space: nowrap;\n        font-size: 12px;\n        padding: 0px 5px;\n        line-height: 7px;\n      }\n      .label{\n        width: 100%\n      }\n\n\n    </style>\n    \n      <div id="test">\n        <div>\n          <template is="dom-if" if="[[firstWeek]]">\n            <paper-card class="label">\n            <h3>[[getWeek(date)]]</h3>\n            </paper-card>\n          </template>\n        </div>\n        <paper-card class\\$="{{view}}" id="dateHeader">\n          \n            <h5> [[getMonth(date)]] </h5>\n          \n          <template is="dom-repeat" items="{{events}}">\n              <div class="card-content">\n                <lrnsys-drawer text="[[timeString(item.event.startDate._time.hour, item.event.startDate._time.minute, item.event.endDate._time.hour,item.event.endDate._time.minute)]] {{item.event.summary}}" header="[[getDateString(date)]]" align="left" heading-class="orange lighten-3 blue-text text-darken-4" style="{{computeStyle(item)}};overflow:auto;">\n                [[displayActivity(item)]] <br><br>[[displayStart(item)]]<br><br>[[displayEnd(item)]]<br><br>[[displayDuration(item)]]<br><br>[[displayDescription(item)]]<br><br>[[displayLocation(item)]]\n                </lrnsys-drawer>\n              </div>\n          </template>\n        </paper-card>\n      </div>\n']);return c=function(){return t},t}function u(){var t=l(['\n    <style>\n      :host {\n        display: block;\n      }\n      lrn-calendar-date {\n        display: inline-table;\n        top: 0px;\n      }\n      paper-card {\n        width: 14%;\n        height: 20px;\n        display: inline-table;\n        padding: 0;\n        margin: 0;\n      }\n      .calendar {\n        color: var(--my-toolbar-title-color);\n      }\n      .header{\n        padding-bottom: 15px;\n      }\n    </style>\n\n    <div class="calendar">\n      <div class="header">\n        <div style="float: left">\n          <paper-button raised="" type="button" on-tap="monthView">Month</paper-button>\n          <paper-button raised="" type="button" on-tap="weekView">Week</paper-button>\n        </div>\n        <div style="float: right">\n          <paper-button raised="" type="button" on-tap="showDate">Today</paper-button>\n          <paper-icon-button icon="arrow-back" on-tap="showPrev"></paper-icon-button>\n          <paper-icon-button icon="arrow-forward" on-tap="showNext"></paper-icon-button>\n        </div>\n        <div style="margin: 0 auto; width: 200px; text-align: center">\n          <h2>[[getDisplayDate(date)]]</h2>\n        </div>\n      </div>\n\n      <div class="calendarView" id="calView">\n      </div>\n    </div>\n']);return u=function(){return t},t}t.Polymer({_template:t.html(c()),is:"lrn-calendar-date",properties:{title:{type:String,value:"lrn-calendar-date"},name:{type:String},date:{type:Date},loadeddate:{type:Boolean},firstWeek:{type:Boolean},view:{type:String},valid:{type:Boolean,value:!1}},getMonth:function(t){var e=t.getMonth(),n=t.getDate();return monthstring=1==n?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e]+" "+n:n,monthstring},getWeek:function(t){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()]},timeString:function(t,e,n,r){var i=t>11?"pm":"am";if(t>12)t-=12;else if(0==t){if(0==e&&0==n&&0==r){return""}t="12"}return e<10&&(e="0"+e),0==e?t+i:t+":"+e+i},computeStyle:function(t){if(0==t.event.startDate._time.hour)var e="background-color: yellow";else e="background-color: clear";return e},getDateString:function(t){var e=t.getMonth();t.getDate();return monthstring=["January","February","March","April","May","June","July","August","September","October","November","December"][e]+" "+t.getDate()+" "+t.getFullYear(),monthstring},displayActivity:function(t){return"Activity: "+t.event.summary},displayStart:function(t){var e=this.timeString(t.event.startDate._time.hour,t.event.startDate._time.minute);this.timeString(t.event.endDate._time.hour,t.event.endDate._time.minute);return"Start Time: "+e},displayEnd:function(t){return"End Time: "+this.timeString(t.event.endDate._time.hour,t.event.endDate._time.minute)},displayDuration:function(t){var e=t.event.duration,n=e.days,r=e.hours,i=e.minutes;e.weeks;return 0==r&&0==i&&1==n?"Duration: All Day":0==n?0==r?0==i?"Duration: ":"Duration: "+i+"min":0==i?"Duration: "+r+"H ":"Duration: "+r+"H "+i+"min ":0==r&&0==i?"Duration: "+n+"Days ":r>0&&0==i?"Duration: "+n+"Days "+r+"H ":"Duration: "+n+"Days "+r+"H "+i+"min "},displayDescription:function(t){t.event.description;return"Description: "},displayLocation:function(t){var e=t.event.location;return null==(e=String(e))||"null"==e?"Location: ":"Location: "+e}}),t.Polymer({_template:t.html(u()),is:"lrn-calendar",behaviors:[HAXBehaviors.PropertiesBehaviors],properties:{listOfEvents:{type:Array,value:[]},dateString:{type:String,observer:"_dateStringChanged"},date:{type:Date,value:new Date,observer:"_dateChanged"},view:{type:String,value:"month",observer:"_viewTypeChanged"},file:{type:String,reflectToAttribute:!0,observer:"_fileChanged"}},_fileChanged:function(t,e){"undefined"!==h(t)&&(this.loadFile(),this.getDateInfo(),this.createCalendar())},_viewTypeChanged:function(t,e){"undefined"!==h(t)&&"undefined"!==h(this.file)&&(this.getDateInfo(),this.createCalendar())},_dateChanged:function(t,e){"undefined"!==h(t)&&"undefined"!==h(this.file)&&(this.getDateInfo(),this.createCalendar())},_dateStringChanged:function(t,e){"undefined"!==h(t)&&""!=t&&(this.date=new Date(t))},attached:function(){this.setHaxProperties({canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Calendar",description:"Present dates.",icon:"icons:today",color:"grey",groups:["Date"],handles:[{type:"ical",source:"file",date:"date"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"file",title:"iCal feed",description:"Calendar feed to display",inputMethod:"textfield",icon:"link",required:!0}],configure:[{property:"file",title:"iCal feed",description:"Calendar feed to display",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"view",title:"View calendar in week or month format",description:"week or month view",inputMethod:"select",options:{week:"Week",month:"Month"}},{property:"dateString",title:"Date: yyyy/mm/dd",description:"Date to display calendar",inputMethod:"datepicker"}],advanced:[]}})},loadFile:function(){this.startIndex=0,this.calendarText=this.readTextFile(this.file),this.listOfEvents=this.getEvents(this.date,this.calendarText),this.listOfEvents=this.sortByTime(this.listOfEvents)},showPrev:function(){if(this.startIndex=0,"month"==this.view)t=2==this.date.getMonth()&&this.date.getDate()>28?new Date(this.date.getFullYear(),this.date.getMonth()-1,28):new Date(this.date.getFullYear(),this.date.getMonth()-1,this.date.getDate()),this.date=t;else{var t=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()-7);this.date=t}this.startMonth=this.date.getMonth()+1,this.getDateInfo(),this.createCalendar()},showNext:function(){if("month"==this.view)t=11==this.date.getMonth()?new Date(this.date.getFullYear()+1,0,this.date.getDate()):0==this.date.getMonth()&&this.date.getDate()>28?new Date(this.date.getFullYear(),this.date.getMonth()+1,28):new Date(this.date.getFullYear(),this.date.getMonth()+1,this.date.getDate()),this.date=t;else{var t=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+7);this.date=t}this.getDateInfo(),this.createCalendar()},showDate:function(){this.startIndex=0,this.date=new Date,this.getDateInfo(),this.createCalendar()},monthView:function(){this.view="month",this.startIndex=0,this.createCalendar()},weekView:function(){this.view="week",this.startIndex=0,this.createCalendar()},readTextFile:function(t){this.fileNotFound=!1;var e=new XMLHttpRequest,n="";return e.open("GET",t,!1),e.onreadystatechange=function(){4===e.readyState&&(n=200===e.status||0==e.status?e.responseText:"Not Found")},e.send(null),this.calendarText=n,n},createCalendar:function(){"month"!=this.view&&"week"!=this.view&&(this.view="month"),this.date.getFullYear()||(this.date=new Date),this.getDateInfo(),this.totalDays=7*this.numweeks,this.calendarText=this.readTextFile(this.file),this.calendarView=this.querySelector(".calendarView");for(var t=1,e=o.dom(this.$.calView).node,n=e.childNodes;n[1];)e.removeChild(e.childNodes[1]);var r=this.currentDayofWeek;if("week"==this.view){for(var i=0;this.currentDayofWeek+i<6;)i+=1;this.totalDays=i}if("month"==this.view&&(1==this.currentMonth||3==this.currentMonth||5==this.currentMonth||7==this.currentMonth||8==this.currentMonth||10==this.currentMonth||12==this.currentMonth?(this.totalDays=31,this.totalDays=this.totalDays-this.startDay+1):4==this.currentMonth||6==this.currentMonth||9==this.currentMonth||11==this.currentMonth?(this.totalDays=30,this.totalDays=this.totalDays-this.startDay+1):(this.totalDays=29,this.totalDays=this.totalDays-this.startDay)),this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),"month"==this.view){for(;1!=this.currentDate;)t-=1,1==this.currentMonth&&1==this.currentDate?(this.currentYear=this.currentYear-1,this.currentMonth=12,this.currentDate=31,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate-1,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDate.getDate()!=this.currentDate&&(0!=this.currentDate||2!=this.currentMonth&&4!=this.currentMonth&&6!=this.currentMonth&&8!=this.currentMonth&&9!=this.currentMonth&&11!=this.currentMonth&&1!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/31"),this.currentDate=31),0!=this.currentDate||5!=this.currentMonth&&7!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/30"),this.currentDate=30),0==this.currentDate&&3==this.currentMonth&&(this.newDate=new Date(this.currentYear+"/2/29"),this.currentDate=29,2==this.newDate.getMonth()&&(this.newDate=new Date(this.currentYear+"/2/28"),this.currentDate=28)),this.currentMonth=this.currentMonth-1)),0!=this.currentDayofWeek&&0!=r||(this.currentDayofWeek=7,r=-1),this.currentDayofWeek=this.currentDayofWeek-1;7==this.currentDayofWeek&&(this.currentDayofWeek=0)}for(;0!=this.currentDayofWeek;)t-=1,1==this.currentMonth&&1==this.currentDate?(this.currentYear=this.currentYear-1,this.currentMonth=12,this.currentDate=31,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate-1,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDate.getDate()!=this.currentDate&&(0!=this.currentDate||2!=this.currentMonth&&4!=this.currentMonth&&6!=this.currentMonth&&8!=this.currentMonth&&9!=this.currentMonth&&11!=this.currentMonth&&1!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/31"),this.currentDate=31),0!=this.currentDate||5!=this.currentMonth&&7!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/30"),this.currentDate=30),0==this.currentDate&&3==this.currentMonth&&(this.newDate=new Date(this.currentYear+"/2/29"),this.currentDate=29,2==this.newDate.getMonth()&&(this.newDate=new Date(this.currentYear+"/2/28"),this.currentDate=28)),this.currentMonth=this.currentMonth-1)),this.currentDayofWeek=this.currentDayofWeek-1;(l=document.createElement("lrn-calendar-date")).date=this.newDate,l.firstWeek=!0,l.style.width="14.25%",l.style.display="inline-block",l.id="date",l.view=this.view,this.date.getFullYear()===this.newDate.getFullYear()&&this.date.getMonth()===this.newDate.getMonth()&&this.date.getDate()===this.newDate.getDate()&&(l.loadeddate=!0);var a=this.eventCheck(this.listOfEvents,this.newDate),s=this.createReturn(a);l.events=s,l.valid=!0,o.dom(this.calendarView).appendChild(l);for(var h=1;t<this.totalDays;){var l;12==this.currentMonth&&31==this.currentDate?(this.currentYear=this.currentYear+1,this.currentMonth=1,this.currentDate=1,this.newDay=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate+1,this.newDay=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDay.getDate()!=this.currentDate&&(1!=this.currentMonth&&3!=this.currentMonth&&5!=this.currentMonth&&7!=this.currentMonth&&8!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDay=new Date(this.currentYear+"/"+(this.currentMonth+1)+"/1")),this.currentDate=1,this.currentMonth=this.currentMonth+1)),(l=document.createElement("lrn-calendar-date")).valid=!0,l.id="date",l.date=this.newDay,l.style.width="14.25%",l.style.display="inline-block",l.view=this.view,this.date.getFullYear()===this.newDay.getFullYear()&&this.date.getMonth()===this.newDay.getMonth()&&this.date.getDate()===this.newDay.getDate()&&(l.loadeddate=!0);var c=this.eventCheck(this.listOfEvents,this.newDay),u=this.createReturn(c);l.events=u,h<7&&(l.firstWeek=!0),h+=1,l.valid=!0,o.dom(this.calendarView).appendChild(l),(t+=1)==this.totalDays&&6!=this.newDay.getDay()&&(t-=1)}},getEvents:function(t,e){if("Not Found"==e)return"";var n=e,r=ICAL.parse(n),i=new ICAL.Component(r),a=(i.getFirstSubcomponent("vevent"),i.getAllSubcomponents("vevent").map(function(t){return event=new ICAL.Event(t),event}));this.eventArray=[];for(var s=0;s<a.length;s++){this.createDate(a[s]);a[s].isRecurring()&&this.createRecurrence(a[s]),this.eventArray.push(a[s])}return this.eventArray},createRecurrence:function(t){t.getRecurrenceTypes().WEEKLY?this.createRepeatedEvent(t,156):t.getRecurrenceTypes().DAILY?this.createRepeatedEvent(t,720):t.getRecurrenceTypes().MONTHLY?this.createRepeatedEvent(t,36):t.getRecurrenceTypes().YEARLY&&this.createRepeatedEvent(t,10)},createRepeatedEvent:function(t,e){for(var n,r=t.iterator(t.startDate),i=0;(n=r.next())&&i++<e;){var a=new ICAL.Event;a.summary=t.summary,a.description=t.description,a.startDate=t.getOccurrenceDetails(n).startDate,a.endDate=t.getOccurrenceDetails(n).endDate;var s=String(t.location);a.location=s,a.startDate._time.day==t.startDate._time.day&&a.startDate._time.month==t.startDate._time.month&&a.startDate._time.year==t.startDate._time.year||this.eventArray.push(a)}},createDate:function(t){var e=t.startDate._time.year,n=t.startDate._time.month,r=t.startDate._time.day;return new Date(e+"/"+n+"/"+r)},eventCheck:function(t,e){for(var n=[],r=t.length,i=this.startIndex;i<r;i++){var a=this.createDate(t[i]);a.getTime()>e.getTime()&&(r=i,0!=i&&(this.startIndex=i-1)),a.getTime()==e.getTime()&&n.push(t[i])}return n},sortByTime:function(t){var e;do{e=!1;for(var n=0;n<t.length-1;n++)if(t[n].startDate>t[n+1].startDate){var r=t[n];t[n]=t[n+1],t[n+1]=r,e=!0}}while(e);return t},getDateInfo:function(){this.startMonth=this.date.getMonth()+1,this.startYear=this.date.getFullYear(),this.startDay=this.date.getDate(),this.startDayOfWeek=this.date.getDay(),this.currentDate=this.startDay,this.currentMonth=this.startMonth,this.currentYear=this.startYear,this.currentDayofWeek=this.startDayOfWeek},createReturn:function(t){for(var e=[],n=0;n<t.length;n++)e.push({event:t[n]});return e},getDisplayDate:function(t){if("function"==typeof t.getMonth){var e=t.getMonth();t.getDate();return monthstring=["January","February","March","April","May","June","July","August","September","October","November","December"][e]+" "+t.getFullYear(),monthstring}return""}})});
//# sourceMappingURL=lrn-calendar.umd.js.map
