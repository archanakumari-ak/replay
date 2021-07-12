(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return h}));const r="replay-";function a(e,...t){const n=null==e?"":e,r=[];for(let a=0;a<t.length;a++)t[a]&&r.push(n+t[a]);return r.join(" ")}const o=e=>e;function s({classes:e,selectClasses:t,classNames:n,classNamePrefix:r}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(o).join(" "):n}if(n)return a(r,...n)}function l(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let r;return r=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(r.pageX-n.left,n.width)),y:Math.max(0,Math.min(r.pageY-n.top,n.height)),width:n.width,height:n.height}}function i(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),p=e=>null!=e&&e.constructor==={}.constructor,u=(e,t)=>{if(e===t)return!0;if(p(e)&&p(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===r.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function d(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{p(n[e])?t[e]=d(n[e]):t[e]=n[e]}),t}}function m(e,t){const n=d(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{p(e[t])?p(n[t])?n[t]=m(n[t],e[t]):n[t]=d(e[t]):n[t]=e[t]})}return n}const g=(e,t="",n=!1,r=!0)=>n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t),f=(e,t="-")=>{let n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);const a=Math.floor(n/86400),o=86400*a,s=Math.floor((n-o)/3600),l=o+3600*s,i=Math.floor((n-l)/60),c=n-l-60*i;return r+g(a,".",!0,!1)+g(s,":",0===a)+g(i,":",!1)+g(c)},y=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,r=0,a=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,a=t?e.getSeconds():0),g(n,":",!1)+g(r,":",!1)+g(a)},h=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/PlayPauseButton/PlayPauseButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),o=n("./src/replay/components/common.js");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l extends r.Component{constructor(...e){super(...e),s(this,"handleToggle",e=>{this.props.setProperties&&this.props.setProperties({isPaused:e})})}render(){const e=this.props,t=e.isPaused,n=e.pausedContent,o=e.playingContent,s=e.label,l=e.classNamePrefix;return r.createElement(a.a,{classNamePrefix:l,isOn:t,className:"play-pause-button",useDefaultClassNaming:!0,label:s,onToggle:this.handleToggle,toggledOnContent:n,toggledOffContent:o})}}s(l,"defaultProps",{classNamePrefix:o.a}),s(l,"streamStateKeysForObservation",["isPaused"]),l.displayName="PlayPauseButton",t.a=l,l.__docgenInfo={description:"",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"value",type:{name:"boolean"}}],returns:null}],displayName:"PlayPauseButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isPaused:{required:!1,flowType:{name:"boolean"},description:""},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ isPaused: boolean }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ isPaused: boolean }",signature:{properties:[{key:"isPaused",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:""},playingContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""},pausedContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""}}}},"./src/replay/components/controls/PlayPauseButton/PlayPauseButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),l=n("./src/replay/components/controls/PlayPauseButton/PlayPauseButton.js"),i=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./node_modules/react-feather/dist/icons/play.js"),u=n("./node_modules/react-feather/dist/icons/pause.js"),d=n("./src/replay/docs/props-footnote.md");function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class g extends a.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=m(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"playpausebutton"}},"PlayPauseButton"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Control bar button for pausing or resuming playback. "),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),a.a.createElement(o.MDXTag,{name:"p",components:t},"The prop ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPaused")," indicates to the button if the playback is paused, or playing (",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false"),"). Through the callback prop ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties")," in invokes ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isPaused: value })")," on clicks, with the opposite value of the ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPaused")," prop passed as value."),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),a.a.createElement(s.Playground,{__codesandbox:"undefined",__position:0,__code:"<ShowCase\n  render={({ setProperties, isPaused }) => (\n    <PlayPauseButton\n      playingContent={<Pause />}\n      pausedContent={<Play />}\n      isPaused={isPaused}\n      setProperties={setProperties}\n    />\n  )}\n/>",__scope:{props:this?this.props:n,PlayPauseButton:l.a,ShowCase:i.a,SimpleTable:c.a,Play:p.a,Pause:u.a,Footnote:d.a}},a.a.createElement(i.a,{render:({setProperties:e,isPaused:t})=>a.a.createElement(l.a,{playingContent:a.a.createElement(u.a,null),pausedContent:a.a.createElement(p.a,null),isPaused:t,setProperties:e})})),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),a.a.createElement(s.PropsTable,{of:l.a}),a.a.createElement(d.a,null),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Please read the ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),a.a.createElement(c.a,{rows:[{Element:"div","Class name":"play-pause-button","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".play-pause-button"}]}))}}g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./src/replay/components/common.js");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>e.toggleButtonOff||e.toggleButton,l=e=>e.toggleButtonOn||e.toggleButton;class i extends r.Component{constructor(...e){super(...e),o(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),o(this,"handleKeyDown",Object(a.f)(["Enter"," "])),o(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,o=e.className,i=e.classNamePrefix,c=e.toggledOnContent,p=e.toggledOffContent,u=e.onRef,d=e.classes,m=t?"toggled-on":"toggled-off",g=Object(a.g)({classes:d,selectClasses:t?l:s,classNamePrefix:i,classNames:[o,"toggle-button",m]}),f=t?c:p;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:u,className:g,tabIndex:0},r.createElement("div",{tabIndex:-1},f))}}o(i,"defaultProps",{useDefaultClassNaming:!0}),t.a=i,i.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends r.Component{constructor(e){super(e),o(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,s=n.render,l=n.height,i=l?{width:"100%",height:l}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:i}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=s,s.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},i={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},p={padding:"20px",verticalAlign:"top"},u=o({},p,{fontStyle:"italic",opacity:.5}),d=o({},p,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),m=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return r.createElement("table",{style:l},r.createElement("thead",{style:i},r.createElement("tr",{style:c},n.map(e=>r.createElement("th",{key:"header-"+e,style:p},e)))),r.createElement("tbody",null,e.map((e,n)=>r.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,a)=>{return r.createElement("td",{key:t+"-cell-"+n+"-"+a,style:(o=e,""===o?u:d)},(e=>""===e?"none":e)(e));var o})))))}};t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class l extends a.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;s(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}l.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-play-pause-button-play-pause-button.7d334c12fbe63a72fc58.js.map