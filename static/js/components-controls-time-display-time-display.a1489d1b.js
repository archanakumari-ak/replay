(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return g}));const a="replay-";function r(e,...t){const n=null==e?"":e,a=[];for(let r=0;r<t.length;r++)t[r]&&a.push(n+t[r]);return a.join(" ")}const o=e=>e;function s({classes:e,selectClasses:t,classNames:n,classNamePrefix:a}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(o).join(" "):n}if(n)return r(a,...n)}function i(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let a;return a=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(a.pageX-n.left,n.width)),y:Math.max(0,Math.min(a.pageY-n.top,n.height)),width:n.width,height:n.height}}function l(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),p=e=>null!=e&&e.constructor==={}.constructor,m=(e,t)=>{if(e===t)return!0;if(p(e)&&p(t)){const n=Object.keys(e),a=Object.keys(t);return n.length===a.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===a.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function d(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{p(n[e])?t[e]=d(n[e]):t[e]=n[e]}),t}}function u(e,t){const n=d(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{p(e[t])?p(n[t])?n[t]=u(n[t],e[t]):n[t]=d(e[t]):n[t]=e[t]})}return n}const y=(e,t="",n=!1,a=!0)=>n&&0===e?"":e<10&&a?"0".concat(e).concat(t):"".concat(e).concat(t),f=(e,t="-")=>{let n=Math.round(e),a="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,a=t);const r=Math.floor(n/86400),o=86400*r,s=Math.floor((n-o)/3600),i=o+3600*s,l=Math.floor((n-i)/60),c=n-i-60*l;return a+y(r,".",!0,!1)+y(s,":",0===r)+y(l,":",!1)+y(c)},h=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,a=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,a=t?e.getMinutes():0,r=t?e.getSeconds():0),y(n,":",!1)+y(a,":",!1)+y(r)},g=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/TimeDisplay/TimeDisplay.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");const o=(e,t,n=!1)=>Object(r.c)(null==e?0:Math[n?"min":"max"](0,e),t),s=({position:e,duration:t,absolutePosition:n,playMode:s,liveDisplayMode:i="clock-time",negativeMark:l,label:c,positionLabel:p,durationLabel:m,clockTimeLabel:d,classNamePrefix:u=r.a})=>{return"ondemand"===s?a.createElement("div",{className:Object(r.k)(u,"time-display"),title:c},a.createElement("span",{className:Object(r.k)(u,"time-display-position"),title:p},o(e,l)),a.createElement("span",{className:Object(r.k)(u,"time-display-duration"),title:m},o(t,l))):("live-offset"!==i||"livedvr"!==s)&&((y=n)instanceof Date&&!isNaN(y.getTime())&&y.getTime()>15147612e5)?a.createElement("div",{className:Object(r.k)(u,"time-display","time-display-no-duration"),title:c},a.createElement("span",{className:Object(r.k)(u,"time-display-clock-time"),title:p},Object(r.b)(n))):a.createElement("div",{className:Object(r.k)(u,"time-display"),title:c},a.createElement("span",{className:Object(r.k)(u,"time-display-position"),title:p},o((e||t||0)-(t||0),l,!0)),"livedvr"===s&&a.createElement("span",{className:Object(r.k)(u,"time-display-duration"),title:m},o(t,l)));var y};s.streamStateKeysForObservation=["position","duration","absolutePosition","playMode"],s.displayName="TimeDisplay",t.a=s,s.__docgenInfo={description:"",methods:[],displayName:"TimeDisplay",props:{liveDisplayMode:{defaultValue:{value:"'clock-time'",computed:!1},required:!1,flowType:{name:"union",raw:"'clock-time' | 'live-offset'",elements:[{name:"literal",value:"'clock-time'"},{name:"literal",value:"'live-offset'"}]},description:"When set to 'live-offset', DVR times will be displayed as offsets from the live edge. Default is 'clock-time'."},classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The relative playback position, used for on demand position and timeshift offset display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The duration of the stream, used for on demand position and timeshift offset display."},absolutePosition:{required:!1,flowType:{name:"Date",nullable:!0},description:"\u21d8\ufe0e The clock time, used for live streams and DVR streams when liveDisplayMode is set to 'live-offset'."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Play mode is used to decide what times to display."},negativeMark:{required:!1,flowType:{name:"string"},description:""},positionLabel:{required:!1,flowType:{name:"string"},description:""},durationLabel:{required:!1,flowType:{name:"string"},description:""},clockTimeLabel:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/components/controls/TimeDisplay/TimeDisplay.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/controls/TimeDisplay/TimeDisplay.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class d extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"timedisplay-component"}},"TimeDisplay component"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Presents the current position of a playback, and the duration of a stream. For live streams, displays clock time or timeshift offset."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The display switches mode based on the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"playMode")," property. When this has a value of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'ondemand'"),", both ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position")," props are formatted and displayed. If it has a value of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'livedvr'"),", it can either display only time-of-day clock time based on the prop ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"absolutePosition"),", or 00:00 when playing at the live edge, or negative times when timeshifted. By setting the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'live-offset'")," on the prop ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"liveDisplayMode"),", the latter option with 00:00 and negative times is selected. When displaying time-of-day clock times, duration is not displayed."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"undefined",__position:0,__code:'<ShowCase\n  render={({ setProperties, position }) => (\n    <>\n      <TimeDisplay playMode="ondemand" position={123.4} duration={234.5} />\n      <TimeDisplay\n        playMode="livedvr"\n        liveDisplayMode="live-offset"\n        position={123}\n        duration={234}\n      />\n      <TimeDisplay\n        playMode="livedvr"\n        liveDisplayMode="live-offset"\n        position={234}\n        duration={234}\n      />\n      <TimeDisplay\n        playMode="livedvr"\n        absolutePosition={new Date(\'2018-11-07T05:14:13Z\')}\n        position={234}\n        duration={234}\n      />\n    </>\n  )}\n/>',__scope:{props:this?this.props:n,TimeDisplay:i.a,ShowCase:l.a,SimpleTable:c.a,Footnote:p.a}},r.a.createElement(l.a,{render:({setProperties:e,position:t})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{playMode:"ondemand",position:123.4,duration:234.5}),r.a.createElement(i.a,{playMode:"livedvr",liveDisplayMode:"live-offset",position:123,duration:234}),r.a.createElement(i.a,{playMode:"livedvr",liveDisplayMode:"live-offset",position:234,duration:234}),r.a.createElement(i.a,{playMode:"livedvr",absolutePosition:new Date("2018-11-07T05:14:13Z"),position:234,duration:234}))})),r.a.createElement(o.MDXTag,{name:"p",components:t},"This example shows four different display modes."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:i.a}),r.a.createElement(p.a,null),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(c.a,{rows:[{Element:"div","Class name":"time-display","Generic class name":"",States:"time-display-no-duration",Parent:""},{Element:"span","Class name":"time-display-position","Generic class name":"",States:"",Parent:".time-display"},{Element:"span","Class name":"time-display-duration","Generic class name":"",States:"",Parent:".time-display"},{Element:"span","Class name":"time-display-clock-time","Generic class name":"",States:"",Parent:".time-display"}]}))}}d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends a.Component{constructor(e){super(e),o(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let a=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=a;break;case"selectedTextTrack":t.currentTextTrack=a;break;default:t[n]=a}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,s=n.render,i=n.height,l=i?{width:"100%",height:i}:{width:"100%"};return a.createElement("div",null,a.createElement("div",{style:l}),a.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=s,s.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},l={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},p={padding:"20px",verticalAlign:"top"},m=o({},p,{fontStyle:"italic",opacity:.5}),d=o({},p,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),u=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return a.createElement("table",{style:i},a.createElement("thead",{style:l},a.createElement("tr",{style:c},n.map(e=>a.createElement("th",{key:"header-"+e,style:p},e)))),a.createElement("tbody",null,e.map((e,n)=>a.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,r)=>{return a.createElement("td",{key:t+"-cell-"+n+"-"+r,style:(o=e,""===o?m:d)},(e=>""===e?"none":e)(e));var o})))))}};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class i extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-time-display-time-display.54acb99fd796b3d719eb.js.map