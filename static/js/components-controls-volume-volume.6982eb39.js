(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return v}));const a="replay-";function r(e,...t){const n=null==e?"":e,a=[];for(let r=0;r<t.length;r++)t[r]&&a.push(n+t[r]);return a.join(" ")}const o=e=>e;function s({classes:e,selectClasses:t,classNames:n,classNamePrefix:a}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(o).join(" "):n}if(n)return r(a,...n)}function l(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let a;return a=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(a.pageX-n.left,n.width)),y:Math.max(0,Math.min(a.pageY-n.top,n.height)),width:n.width,height:n.height}}function i(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const d=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),c=e=>null!=e&&e.constructor==={}.constructor,u=(e,t)=>{if(e===t)return!0;if(c(e)&&c(t)){const n=Object.keys(e),a=Object.keys(t);return n.length===a.length&&(!(n.filter(n=>d(e[n],t[n])).length>0)&&0===a.filter(n=>d(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function m(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{c(n[e])?t[e]=m(n[e]):t[e]=n[e]}),t}}function p(e,t){const n=m(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{c(e[t])?c(n[t])?n[t]=p(n[t],e[t]):n[t]=m(e[t]):n[t]=e[t]})}return n}const h=(e,t="",n=!1,a=!0)=>n&&0===e?"":e<10&&a?"0".concat(e).concat(t):"".concat(e).concat(t),g=(e,t="-")=>{let n=Math.round(e),a="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,a=t);const r=Math.floor(n/86400),o=86400*r,s=Math.floor((n-o)/3600),l=o+3600*s,i=Math.floor((n-l)/60),d=n-l-60*i;return a+h(r,".",!0,!1)+h(s,":",0===r)+h(i,":",!1)+h(d)},f=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,a=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,a=t?e.getMinutes():0,r=t?e.getSeconds():0),h(n,":",!1)+h(a,":",!1)+h(r)},v=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/Volume/Volume.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js"),o=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),s=n("./src/replay/components/generic/Slider/Slider.js");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends a.Component{constructor(...e){super(...e),l(this,"handleMuteToggleClick",e=>{this.props.setProperties&&this.props.setProperties({isMuted:e})}),l(this,"handleVolumeSliderChange",e=>{const t=this.props.setProperties;t&&t({isMuted:!1,volume:e})})}render(){const e=navigator.userAgent.match(/(iPad|iPhone|iPod)/i),t=this.props,n=t.volume,l=t.isMuted,i=t.label,d=t.volumeSliderLabel,c=t.muteToggleLabel,u=t.classNamePrefix,m=t.mutedContent,p=t.unmutedContent,h=t.volumeSliderHandleContent,g=t.volumeSliderTrackContent,f=Object(r.k)(u,"volume",e&&"volume-disabled");return a.createElement("div",{className:f,title:i},a.createElement(o.a,{label:c,isOn:l,toggledOffContent:p,toggledOnContent:m,onToggle:this.handleMuteToggleClick,classNamePrefix:u,className:"mute-toggle"}),!e&&a.createElement(s.a,{label:d,value:l?0:n,maxValue:1,handleContent:h,trackContent:g,onValueChange:this.handleVolumeSliderChange,classNamePrefix:u,className:"volume-slider",trackClassName:"volume-slider-track",handleClassName:"volume-slider-handle"}))}}l(i,"defaultProps",{classNamePrefix:r.a}),l(i,"streamStateKeysForObservation",["volume","isMuted"]),i.displayName="Volume",t.a=i,i.__docgenInfo={description:"",methods:[{name:"handleMuteToggleClick",docblock:null,modifiers:[],params:[{name:"isMuted",type:{name:"boolean"}}],returns:null},{name:"handleVolumeSliderChange",docblock:null,modifiers:[],params:[{name:"volume",type:{name:"number"}}],returns:null}],displayName:"Volume",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},volume:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The current volume level, a number between 0 and 1."},isMuted:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e The current mute state. false means unmuted."},volumeSliderLabel:{required:!1,flowType:{name:"string"},description:""},muteToggleLabel:{required:!1,flowType:{name:"string"},description:""},mutedContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:'Element(s) displayed when isMuted is set to true The convention is to display a disabled or "silent" loudspeaker icon.'},unmutedContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"Element(s) displayed when isMuted is set to false The convention is to display a loudspeaker icon with sound waves."},volumeSliderHandleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},volumeSliderTrackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ volume: number } | { isMuted: boolean }) => void",signature:{arguments:[{name:"",type:{name:"union",raw:"{ volume: number } | { isMuted: boolean }",elements:[{name:"signature",type:"object",raw:"{ volume: number }",signature:{properties:[{key:"volume",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:"{ isMuted: boolean }",signature:{properties:[{key:"isMuted",value:{name:"boolean",required:!0}}]}}]}}],return:{name:"void"}}},description:"\u21d7 This callback is invoked with { isMuted: true } or { isMuted: false } when the mute button is toggled. If the volume slider handle position is changed, it is invoked with { volume: newLevel }"}}}},"./src/replay/components/controls/Volume/Volume.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),l=n("./src/replay/components/controls/Volume/Volume.js"),i=n("./src/replay/docs/mdx-helpers/ShowCase.js"),d=n("./node_modules/react-feather/dist/icons/volume-2.js"),c=n("./node_modules/react-feather/dist/icons/volume-x.js"),u=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),m=n("./src/replay/docs/props-footnote.md");function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class h extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"volume-control"}},"Volume control"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Control combining a mute toggle and volume slider."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(o.MDXTag,{name:"p",components:t},'The mute button is "on" when the prop ',r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isMuted")," set to ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),". It uses a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<ToggleButton/>"),", and invokes ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isMuted: value })")," where value is the opposite of the prop ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isMuted"),". The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"mutedContent")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"unmutedContent")," specify what button content should be displayed for the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isMuted")," ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),"/",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false")," prop values."),r.a.createElement(o.MDXTag,{name:"p",components:t},"The volume slider (using ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Slider/>"),") operates on values between 0 and 1, specified in the prop ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"volume"),". On dragging the handle, or clickingon the slider track, it invokes ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ volume: value })")," where value is the changed value between 0 and 1."),r.a.createElement(o.MDXTag,{name:"p",components:t},"If the prop ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isMuted")," is ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),", the volume slider will display a value of 0 (handle to the left). When dragging/clicking the slider, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isMuted: false, volume: value })")," will be called with the value corresponding to the changed slider value. In other words, adjusting the volume while muted, will also unmute video."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Note that iOS doesn't allow for programmatic adjustment of the volume. However mute toggling is allowed. The volume slider part of this control will not be rendered in iOS."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"undefined",__position:0,__code:"<ShowCase\n  render={({ setProperties, isMuted, volume }) => (\n    <Volume\n      unmutedContent={<Volume2 />}\n      mutedContent={<VolumeX />}\n      setProperties={setProperties}\n      volume={volume}\n      isMuted={isMuted}\n    />\n  )}\n/>",__scope:{props:this?this.props:n,Volume:l.a,ShowCase:i.a,Volume2:d.a,VolumeX:c.a,SimpleTable:u.a,Footnote:m.a}},r.a.createElement(i.a,{render:({setProperties:e,isMuted:t,volume:n})=>r.a.createElement(l.a,{unmutedContent:r.a.createElement(d.a,null),mutedContent:r.a.createElement(c.a,null),setProperties:e,volume:n,isMuted:t})})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:l.a}),r.a.createElement(m.a,null),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(u.a,{rows:[{Element:"div","Class name":"volume","Generic class name":"",States:"volume-disabled",Parent:""},{Element:"div","Class name":"mute-toggle","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:".volume"},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".mute-toggle"},{Element:"div","Class name":"volume-slider","Generic class name":"slider",States:"dragging",Parent:".volume"},{Element:"div","Class name":"volume-track","Generic class name":"slider-track",States:"",Parent:".volume-slider"},{Element:"div","Class name":"volume-handle","Generic class name":"slider-handle",States:"",Parent:".volume-slider"}]}),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"styling-requirements"}},"Styling requirements"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The styling of the volume slider needs to follow some rules in order to get sensible responses from user interactions:"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The draggable or clickable area will be the size of the track element, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".volume-track"),". Remember how margin, borders, padding, box-sizing, etc. affects the size."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".volume-handle")," positioning (between 0 and 100 percent from left or bottom) should align with the track size and placement."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The styling needs to take into account the size of the handle itself. The component will not subtract the size of the component in its positioning and value calculations."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The handle should ideally be shifted by half its width to the left for horizontal sliders, or half its height down for vertical sliders. It is the center coordinate that should count.")))}}h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/Slider/Slider.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>e.slider,l=e=>e.sliderDragging||e.slider,i=e=>e.sliderTrack,d=e=>e.sliderHandle;function c(e,t){const n=e/t;return t===1/0||e===1/0||0===t||isNaN(n)||0===n?"0%":"".concat((100*Math.min(1,n)).toFixed(3),"%")}const u=["Left","ArrowLeft","Down","ArrowDown"],m=["Right","ArrowRight","Up","ArrowUp"],p=u.concat(m);class h extends a.Component{constructor(e){super(e),o(this,"renderedHandle",void 0),o(this,"renderedTrack",void 0),o(this,"isTouchSupported",void 0),o(this,"updateValueFromCoordinates",(e,t)=>{if(this.renderedTrack){const n=Object(r.d)(e,this.renderedTrack);if(this.props.isVertical){const e=(n.height-n.y)/n.height;this.updateValue(e,t)}else{const e=n.x/n.width;this.updateValue(e,t)}}}),o(this,"updateValue",(e,{isDragging:t,isEnded:n,isPreviewing:a})=>{const r=e*this.props.maxValue;a?this.setState({previewValue:r}):(this.state.isDragging&&(this.setState({dragValue:r,previewValue:r}),this.props.onDrag&&this.props.onDrag(r)),this.props.onValueChange&&(n||!this.state.isDragging&&!t)&&this.props.onValueChange(r))}),o(this,"handleHandleOrTrackClick",e=>{this.updateValueFromCoordinates(e,{})}),o(this,"handleHandleStartDrag",e=>{"touchstart"!==e.type&&e.stopPropagation(),this.state.isDragging||(setTimeout(()=>this.setState({wasClicked:!1}),1e3),this.setState({isDragging:!0,wasClicked:!0}),this.updateValueFromCoordinates(e,{isDragging:!0}),this.isTouchSupported?(document.addEventListener("touchmove",this.handleHandleDrag),document.addEventListener("touchend",this.handleHandleEndDrag),document.addEventListener("touchcancel",this.handleHandleEndDrag)):(document.addEventListener("mousemove",this.handleHandleDrag),document.addEventListener("mouseup",this.handleHandleEndDrag),document.addEventListener("mouseleave",this.handleHandleEndDrag)))}),o(this,"handleHandleDrag",e=>{this.state.isDragging?this.updateValueFromCoordinates(e,{}):this.updateValueFromCoordinates(e,{isPreviewing:!0})}),o(this,"handleHandleEndDrag",e=>{this.state.isDragging&&this.updateValueFromCoordinates(e,{isDragging:!0,isEnded:!0}),this.isTouchSupported?(document.removeEventListener("touchmove",this.handleHandleDrag),document.removeEventListener("touchend",this.handleHandleEndDrag),document.removeEventListener("touchcancel",this.handleHandleEndDrag)):(document.removeEventListener("mousemove",this.handleHandleDrag),document.removeEventListener("mouseup",this.handleHandleEndDrag),document.removeEventListener("mouseleave",this.handleHandleEndDrag)),this.setState({isDragging:!1})}),o(this,"handleMouseEnter",()=>{this.setState({isPointerInside:!0})}),o(this,"handleMouseLeave",()=>{this.setState({isPointerInside:!1})}),o(this,"handleKeyDown",Object(r.f)(p)),o(this,"handleKeyUp",e=>{if(!isNaN(this.props.value)&&!isNaN(this.props.maxValue)){const t=this.props.value/this.props.maxValue;u.indexOf(e.key)>=0&&this.updateValue(Math.max(0,t-.025),{}),m.indexOf(e.key)>=0&&this.updateValue(Math.min(1,t+.025),{})}}),o(this,"setRenderedHandle",e=>{this.renderedHandle=e}),o(this,"setRenderedTrack",e=>{this.renderedTrack=e}),this.isTouchSupported="ontouchend"in window,this.state={}}render(){const e=this.props,t=e.children,n=e.handleContent,o=e.trackContent,u=e.classNamePrefix,m=e.className,p=e.classes,h=e.handleClassName,g=e.trackClassName,f=e.label,v=e.isVertical,y=e.value,b=e.maxValue,w=e.isUpdateBlocked,E=this.state,T=E.dragValue,M=E.previewValue,D=E.isDragging,k=E.isPointerInside,C=E.wasClicked,N=(D||w)&&null!=T?T:y,P=D?l:s,O=Object(r.g)({classes:p,selectClasses:P,classNamePrefix:u,classNames:["slider",m,D?"dragging":null,C?"clicked":null]}),j=Object(r.g)({classes:p,selectClasses:d,classNamePrefix:u,classNames:["slider-handle",h]}),S=Object(r.g)({classes:p,selectClasses:i,classNamePrefix:u,classNames:["slider-track",g]});return a.createElement("div",{onClick:this.handleHandleOrTrackClick,onMouseDown:this.handleHandleStartDrag,onTouchStart:this.handleHandleStartDrag,onTouchMove:this.handleHandleDrag,onTouchEnd:this.handleHandleEndDrag,onMouseUp:this.handleHandleEndDrag,onMouseMove:this.handleHandleDrag,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,title:f,role:"slider","aria-valuemin":0,"aria-valuemax":b,"aria-valuenow":y,className:O,tabIndex:0},a.createElement("div",{className:S,ref:this.setRenderedTrack},o),a.Children.map(t,e=>a.cloneElement(e,{previewValue:M,isDragging:D,isPointerInside:k})),a.createElement("div",{className:j,style:{[v?"bottom":"left"]:c(N,b)},role:"button",tabIndex:-1,ref:this.setRenderedHandle},n))}}o(h,"defaultProps",{value:0,maxValue:1}),t.a=h,h.__docgenInfo={description:"",methods:[{name:"updateValueFromCoordinates",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"conditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"updateValue",docblock:null,modifiers:[],params:[{name:"relativeValue",type:{name:"number"}},{name:"{ isDragging, isEnded, isPreviewing }: UpdateConditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"handleHandleOrTrackClick",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleStartDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleHandleEndDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleMouseEnter",docblock:null,modifiers:[],params:[],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"setRenderedHandle",docblock:null,modifiers:[],params:[{name:"handle",type:{name:"HTMLDivElement",nullable:!0}}],returns:null},{name:"setRenderedTrack",docblock:null,modifiers:[],params:[{name:"track",type:{name:"HTMLDivElement",nullable:!0}}],returns:null}],displayName:"Slider",props:{value:{defaultValue:{value:"0",computed:!1},required:!1,flowType:{name:"number"},description:""},maxValue:{defaultValue:{value:"1",computed:!1},required:!1,flowType:{name:"number"},description:""},isUpdateBlocked:{required:!1,flowType:{name:"boolean"},description:""},isVertical:{required:!1,flowType:{name:"boolean"},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleClassName:{required:!1,flowType:{name:"string"},description:""},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},trackClassName:{required:!1,flowType:{name:"string"},description:""},label:{required:!1,flowType:{name:"string"},description:""},onValueChange:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>e.toggleButtonOff||e.toggleButton,l=e=>e.toggleButtonOn||e.toggleButton;class i extends a.Component{constructor(...e){super(...e),o(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),o(this,"handleKeyDown",Object(r.f)(["Enter"," "])),o(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,o=e.className,i=e.classNamePrefix,d=e.toggledOnContent,c=e.toggledOffContent,u=e.onRef,m=e.classes,p=t?"toggled-on":"toggled-off",h=Object(r.g)({classes:m,selectClasses:t?l:s,classNamePrefix:i,classNames:[o,"toggle-button",p]}),g=t?d:c;return a.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:u,className:h,tabIndex:0},a.createElement("div",{tabIndex:-1},g))}}o(i,"defaultProps",{useDefaultClassNaming:!0}),t.a=i,i.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends a.Component{constructor(e){super(e),o(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let a=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=a;break;case"selectedTextTrack":t.currentTextTrack=a;break;default:t[n]=a}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,s=n.render,l=n.height,i=l?{width:"100%",height:l}:{width:"100%"};return a.createElement("div",null,a.createElement("div",{style:i}),a.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=s,s.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},i={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},d={orderSpacing:0,borderCollapse:"collapse"},c={padding:"20px",verticalAlign:"top"},u=o({},c,{fontStyle:"italic",opacity:.5}),m=o({},c,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),p=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return a.createElement("table",{style:l},a.createElement("thead",{style:i},a.createElement("tr",{style:d},n.map(e=>a.createElement("th",{key:"header-"+e,style:c},e)))),a.createElement("tbody",null,e.map((e,n)=>a.createElement("tr",{key:t+"-row-"+n,style:d},Object.values(e).map((e,r)=>{return a.createElement("td",{key:t+"-cell-"+n+"-"+r,style:(o=e,""===o?u:m)},(e=>""===e?"none":e)(e));var o})))))}};t.a=p,p.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class l extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}l.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-volume-volume.7d334c12fbe63a72fc58.js.map