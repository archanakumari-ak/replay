(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/replay/components/common.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"k",(function(){return i})),t.d(n,"g",(function(){return s})),t.d(n,"d",(function(){return o})),t.d(n,"f",(function(){return l})),t.d(n,"h",(function(){return d})),t.d(n,"i",(function(){return c})),t.d(n,"j",(function(){return h})),t.d(n,"c",(function(){return g})),t.d(n,"b",(function(){return f})),t.d(n,"e",(function(){return v}));const a="replay-";function i(e,...n){const t=null==e?"":e,a=[];for(let i=0;i<n.length;i++)n[i]&&a.push(t+n[i]);return a.join(" ")}const r=e=>e;function s({classes:e,selectClasses:n,classNames:t,classNamePrefix:a}){if(e&&n){const t=n(e);return Array.isArray(t)?t.filter(r).join(" "):t}if(t)return i(a,...t)}function o(e,n){const t=(n||e.currentTarget).getBoundingClientRect();let a;return a=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(a.pageX-t.left,t.width)),y:Math.max(0,Math.min(a.pageY-t.top,t.height)),width:t.width,height:t.height}}function l(e){return n=>{e.indexOf(n.key)>=0&&(n.preventDefault(),n.stopPropagation())}}const d=(e,n)=>e!==n&&(!(e instanceof Date&&n instanceof Date&&e.getTime()===n.getTime())&&!(Number.isNaN(e)&&Number.isNaN(n))),u=e=>null!=e&&e.constructor==={}.constructor,c=(e,n)=>{if(e===n)return!0;if(u(e)&&u(n)){const t=Object.keys(e),a=Object.keys(n);return t.length===a.length&&(!(t.filter(t=>d(e[t],n[t])).length>0)&&0===a.filter(t=>d(n[t],e[t])).length)}if(Array.isArray(e)&&Array.isArray(n)&&e.length===n.length){for(let t=e.length;t--;)if(e[t]!==n[t])return!1;return!0}return!1};function m(e){if(null==e)return{};{const n={},t=e;return Object.keys(e).forEach(e=>{u(t[e])?n[e]=m(t[e]):n[e]=t[e]}),n}}function h(e,n){const t=m(e);if(n){const e=n;Object.getOwnPropertyNames(e).forEach(n=>{u(e[n])?u(t[n])?t[n]=h(t[n],e[n]):t[n]=m(e[n]):t[n]=e[n]})}return t}const p=(e,n="",t=!1,a=!0)=>t&&0===e?"":e<10&&a?"0".concat(e).concat(n):"".concat(e).concat(n),g=(e,n="-")=>{let t=Math.round(e),a="";"number"!==typeof e||isNaN(e)||e===1/0?t=0:t<0&&(t=-t,a=n);const i=Math.floor(t/86400),r=86400*i,s=Math.floor((t-r)/3600),o=r+3600*s,l=Math.floor((t-o)/60),d=t-o-60*l;return a+p(i,".",!0,!1)+p(s,":",0===i)+p(l,":",!1)+p(d)},f=e=>{const n=e instanceof Date&&!isNaN(e.getTime());let t=0,a=0,i=0;return n&&null!=e&&(t=n?e.getHours():0,a=n?e.getMinutes():0,i=n?e.getSeconds():0),p(t,":",!1)+p(a,":",!1)+p(i)},v=(e,n)=>{let t=null;return{start:()=>{t||(t=setInterval(e,1e3*n))},stop:()=>{t&&(clearInterval(t),t=null)}}}},"./src/replay/components/controls/Timeline/Timeline.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),i=t("./src/replay/components/common.js"),r=t("./src/replay/components/generic/Slider/Slider.js");function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class o extends a.Component{constructor(e){super(e),s(this,"timeoutId",void 0),s(this,"handleSliderChange",e=>{this.props.setProperties&&this.props.setProperties({position:e})}),s(this,"handleDrag",()=>{this.setState({isDragging:!0}),this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.setState({isDragging:!1}),this.timeoutId=null},800)}),this.state={isDragging:!1}}componentWillUnmount(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}render(){const e=this.props,n=e.position,t=e.duration,i=e.isSeeking,s=e.label,o=e.classNamePrefix,l=e.children,d=e.handleContent,u=e.trackContent,c=e.reduceDragGlitch;return a.createElement(r.a,{label:s,value:n,maxValue:t,isUpdateBlocked:i||this.state.isDragging,handleContent:d,trackContent:u,onValueChange:this.handleSliderChange,onDrag:c?this.handleDrag:void 0,classNamePrefix:o,className:"timeline",trackClassName:"timeline-track",handleClassName:"timeline-handle"},l)}}s(o,"defaultProps",{classNamePrefix:i.a,reduceDragGlitch:!0}),s(o,"streamStateKeysForObservation",["position","duration","isSeeking"]),o.displayName="Timeline",n.a=o,o.__docgenInfo={description:"",methods:[{name:"handleSliderChange",docblock:null,modifiers:[],params:[{name:"position",type:{name:"number"}}],returns:null},{name:"handleDrag",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Timeline",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},reduceDragGlitch:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"If set to false, glitches after dragging completes will occur, while the stream reports a position before seeking is performed. When true glitches are prevented by activating a timer for a small time after dragging has completed."},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The current playback position in seconds (with decimals). A value between 0 and duration."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The stream's duration or seekable range in seconds (with decimals)."},isSeeking:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e True if a seeking operation is ongoing. This prop is used by the component to avoid glitching while dragging."},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Elements that will display on top of the timeline slider track, but below the timeline handle."},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content in the slider handle."},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content representing the slider track."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ position: number }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ position: number }",signature:{properties:[{key:"position",value:{name:"number",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 If the volume slider handle position is changed, this callback is invoked with { position: newPosition }"}}}},"./src/replay/components/controls/TimelineInformation/TimelineInformation.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),i=t("./src/replay/components/common.js");function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class s extends a.Component{render(){const e=this.props,n=e.absoluteStartPosition,t=e.duration,r=e.playMode,s=e.previewValue,o=e.isDragging,l=e.isPointerInside,d=e.classNamePrefix,u=((e,n,t)=>null!=t?"livedvr"===e&&n instanceof Date&&n.getTime()>0?Object(i.b)(new Date(n.getTime()+1e3*t)):Object(i.c)(t):"")(r,n,s),c=((s||0)/(t||1)*100).toFixed(2),m=Object(i.k)(d,"timeline-information"),h=Object(i.k)(d,"timeline-tooltip",o||l?"timeline-tooltip-visible":null);return a.createElement("div",{className:m},a.createElement("div",{className:h,style:{left:"".concat(c,"%")}},u))}}r(s,"streamStateKeysForObservation",["absoluteStartPosition","duration","playMode"]),r(s,"defaultProps",{classNamePrefix:i.a}),s.displayName="TimelineInformation",n.a=s,s.__docgenInfo={description:"",methods:[],displayName:"TimelineInformation",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},absoluteStartPosition:{required:!1,flowType:{name:"Date"},description:"\u21d8\ufe0e For previewing live clock time positions, this should contain the date/time corresponding to the start of the timeline.."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Used for selecting relative position or clock time display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e Used for computing the tooltip position."},previewValue:{required:!1,flowType:{name:"number",nullable:!0},description:"The relative preview position, passed automatically from a Timeline parent."},isPointerInside:{required:!1,flowType:{name:"boolean"},description:"The Timeline parent manages mouse pointer state, and passes to this component. If true, the tooltip is displayed."},isDragging:{required:!1,flowType:{name:"boolean",nullable:!0},description:"Passed from the Timeline parent. When dragging, it is set to true, and the tooltip displays."}}}},"./src/replay/components/generic/Slider/Slider.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),i=t("./src/replay/components/common.js");function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const s=e=>e.slider,o=e=>e.sliderDragging||e.slider,l=e=>e.sliderTrack,d=e=>e.sliderHandle;function u(e,n){const t=e/n;return n===1/0||e===1/0||0===n||isNaN(t)||0===t?"0%":"".concat((100*Math.min(1,t)).toFixed(3),"%")}const c=["Left","ArrowLeft","Down","ArrowDown"],m=["Right","ArrowRight","Up","ArrowUp"],h=c.concat(m);class p extends a.Component{constructor(e){super(e),r(this,"renderedHandle",void 0),r(this,"renderedTrack",void 0),r(this,"isTouchSupported",void 0),r(this,"updateValueFromCoordinates",(e,n)=>{if(this.renderedTrack){const t=Object(i.d)(e,this.renderedTrack);if(this.props.isVertical){const e=(t.height-t.y)/t.height;this.updateValue(e,n)}else{const e=t.x/t.width;this.updateValue(e,n)}}}),r(this,"updateValue",(e,{isDragging:n,isEnded:t,isPreviewing:a})=>{const i=e*this.props.maxValue;a?this.setState({previewValue:i}):(this.state.isDragging&&(this.setState({dragValue:i,previewValue:i}),this.props.onDrag&&this.props.onDrag(i)),this.props.onValueChange&&(t||!this.state.isDragging&&!n)&&this.props.onValueChange(i))}),r(this,"handleHandleOrTrackClick",e=>{this.updateValueFromCoordinates(e,{})}),r(this,"handleHandleStartDrag",e=>{"touchstart"!==e.type&&e.stopPropagation(),this.state.isDragging||(setTimeout(()=>this.setState({wasClicked:!1}),1e3),this.setState({isDragging:!0,wasClicked:!0}),this.updateValueFromCoordinates(e,{isDragging:!0}),this.isTouchSupported?(document.addEventListener("touchmove",this.handleHandleDrag),document.addEventListener("touchend",this.handleHandleEndDrag),document.addEventListener("touchcancel",this.handleHandleEndDrag)):(document.addEventListener("mousemove",this.handleHandleDrag),document.addEventListener("mouseup",this.handleHandleEndDrag),document.addEventListener("mouseleave",this.handleHandleEndDrag)))}),r(this,"handleHandleDrag",e=>{this.state.isDragging?this.updateValueFromCoordinates(e,{}):this.updateValueFromCoordinates(e,{isPreviewing:!0})}),r(this,"handleHandleEndDrag",e=>{this.state.isDragging&&this.updateValueFromCoordinates(e,{isDragging:!0,isEnded:!0}),this.isTouchSupported?(document.removeEventListener("touchmove",this.handleHandleDrag),document.removeEventListener("touchend",this.handleHandleEndDrag),document.removeEventListener("touchcancel",this.handleHandleEndDrag)):(document.removeEventListener("mousemove",this.handleHandleDrag),document.removeEventListener("mouseup",this.handleHandleEndDrag),document.removeEventListener("mouseleave",this.handleHandleEndDrag)),this.setState({isDragging:!1})}),r(this,"handleMouseEnter",()=>{this.setState({isPointerInside:!0})}),r(this,"handleMouseLeave",()=>{this.setState({isPointerInside:!1})}),r(this,"handleKeyDown",Object(i.f)(h)),r(this,"handleKeyUp",e=>{if(!isNaN(this.props.value)&&!isNaN(this.props.maxValue)){const n=this.props.value/this.props.maxValue;c.indexOf(e.key)>=0&&this.updateValue(Math.max(0,n-.025),{}),m.indexOf(e.key)>=0&&this.updateValue(Math.min(1,n+.025),{})}}),r(this,"setRenderedHandle",e=>{this.renderedHandle=e}),r(this,"setRenderedTrack",e=>{this.renderedTrack=e}),this.isTouchSupported="ontouchend"in window,this.state={}}render(){const e=this.props,n=e.children,t=e.handleContent,r=e.trackContent,c=e.classNamePrefix,m=e.className,h=e.classes,p=e.handleClassName,g=e.trackClassName,f=e.label,v=e.isVertical,y=e.value,b=e.maxValue,w=e.isUpdateBlocked,T=this.state,E=T.dragValue,D=T.previewValue,k=T.isDragging,M=T.isPointerInside,N=T.wasClicked,C=(k||w)&&null!=E?E:y,S=k?o:s,H=Object(i.g)({classes:h,selectClasses:S,classNamePrefix:c,classNames:["slider",m,k?"dragging":null,N?"clicked":null]}),P=Object(i.g)({classes:h,selectClasses:d,classNamePrefix:c,classNames:["slider-handle",p]}),V=Object(i.g)({classes:h,selectClasses:l,classNamePrefix:c,classNames:["slider-track",g]});return a.createElement("div",{onClick:this.handleHandleOrTrackClick,onMouseDown:this.handleHandleStartDrag,onTouchStart:this.handleHandleStartDrag,onTouchMove:this.handleHandleDrag,onTouchEnd:this.handleHandleEndDrag,onMouseUp:this.handleHandleEndDrag,onMouseMove:this.handleHandleDrag,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,title:f,role:"slider","aria-valuemin":0,"aria-valuemax":b,"aria-valuenow":y,className:H,tabIndex:0},a.createElement("div",{className:V,ref:this.setRenderedTrack},r),a.Children.map(n,e=>a.cloneElement(e,{previewValue:D,isDragging:k,isPointerInside:M})),a.createElement("div",{className:P,style:{[v?"bottom":"left"]:u(C,b)},role:"button",tabIndex:-1,ref:this.setRenderedHandle},t))}}r(p,"defaultProps",{value:0,maxValue:1}),n.a=p,p.__docgenInfo={description:"",methods:[{name:"updateValueFromCoordinates",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"conditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"updateValue",docblock:null,modifiers:[],params:[{name:"relativeValue",type:{name:"number"}},{name:"{ isDragging, isEnded, isPreviewing }: UpdateConditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"handleHandleOrTrackClick",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleStartDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleHandleEndDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleMouseEnter",docblock:null,modifiers:[],params:[],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"setRenderedHandle",docblock:null,modifiers:[],params:[{name:"handle",type:{name:"HTMLDivElement",nullable:!0}}],returns:null},{name:"setRenderedTrack",docblock:null,modifiers:[],params:[{name:"track",type:{name:"HTMLDivElement",nullable:!0}}],returns:null}],displayName:"Slider",props:{value:{defaultValue:{value:"0",computed:!1},required:!1,flowType:{name:"number"},description:""},maxValue:{defaultValue:{value:"1",computed:!1},required:!1,flowType:{name:"number"},description:""},isUpdateBlocked:{required:!1,flowType:{name:"boolean"},description:""},isVertical:{required:!1,flowType:{name:"boolean"},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleClassName:{required:!1,flowType:{name:"string"},description:""},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},trackClassName:{required:!1,flowType:{name:"string"},description:""},label:{required:!1,flowType:{name:"string"},description:""},onValueChange:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}}},"./src/replay/replay-default.css":function(e,n,t){}}]);
//# sourceMappingURL=components-controls-timeline-information-timeline-information~components-controls-timeline-timeline~~33df0126.54acb99fd796b3d719eb.js.map