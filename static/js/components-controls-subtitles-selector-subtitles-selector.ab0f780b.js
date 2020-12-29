(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return b}));const r="replay-";function a(e,...t){const n=null==e?"":e,r=[];for(let a=0;a<t.length;a++)t[a]&&r.push(n+t[a]);return r.join(" ")}const s=e=>e;function o({classes:e,selectClasses:t,classNames:n,classNamePrefix:r}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(s).join(" "):n}if(n)return a(r,...n)}function l(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let r;return r=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(r.pageX-n.left,n.width)),y:Math.max(0,Math.min(r.pageY-n.top,n.height)),width:n.width,height:n.height}}function i(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),d=e=>null!=e&&e.constructor==={}.constructor,p=(e,t)=>{if(e===t)return!0;if(d(e)&&d(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===r.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function m(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{d(n[e])?t[e]=m(n[e]):t[e]=n[e]}),t}}function u(e,t){const n=m(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{d(e[t])?d(n[t])?n[t]=u(n[t],e[t]):n[t]=m(e[t]):n[t]=e[t]})}return n}const g=(e,t="",n=!1,r=!0)=>n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t),f=(e,t="-")=>{let n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);const a=Math.floor(n/86400),s=86400*a,o=Math.floor((n-s)/3600),l=s+3600*o,i=Math.floor((n-l)/60),c=n-l-60*i;return r+g(a,".",!0,!1)+g(o,":",0===a)+g(i,":",!1)+g(c)},h=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,r=0,a=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,a=t?e.getSeconds():0),g(n,":",!1)+g(r,":",!1)+g(a)},b=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./src/replay/components/generic/Selector/Selector.js"),s=n("./src/replay/components/common.js");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=(...e)=>e.filter(e=>e).join("."),i=({label:e,kind:t="subtitles",language:n="unknown"})=>e||("subtitles"!==t?"[".concat(n,"] ").concat(t):"[".concat(n,"]"))||"",c=e=>{if(e.noTrack){return{id:0,label:e.label||"",data:e}}return{id:e.id||l(e.language,e.kind,e.origin)||e.label,label:i(e),data:e}};class d extends r.Component{constructor(e){super(e),o(this,"handleSelect",e=>{this.props.setProperties&&(e.noTrack?this.props.setProperties({selectedTextTrack:null}):this.props.setProperties({selectedTextTrack:e}))}),this.state={noSubtitlesItem:{noTrack:!0,label:this.props.noSubtitlesLabel}}}render(){const e=this.props,t=e.textTracks,n=e.currentTextTrack,s=e.label,o=e.toggleContent,l=e.classNamePrefix;if(Array.isArray(t)&&t.length>0){const e=[this.state.noSubtitlesItem].concat(t);let i=this.state.noSubtitlesItem;if(n){const r=t.indexOf(n)+1;r>0&&(i=e[r])}return r.createElement(a.a,{items:e,itemMapper:c,classNamePrefix:l,className:"subtitles-selector",selectedItem:i,label:s,onSelect:this.handleSelect,reverseOrder:!0,expandedToggleContent:o,collapsedToggleContent:o})}return null}}o(d,"defaultProps",{classNamePrefix:s.a}),o(d,"streamStateKeysForObservation",["textTracks","currentTextTrack"]),d.displayName="SubtitlesSelector",t.a=d,d.__docgenInfo={description:"",methods:[{name:"handleSelect",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}}],returns:null}],displayName:"SubtitlesSelector",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},textTracks:{required:!1,flowType:{name:"Array",elements:[{name:"AvailableTrack"}],raw:"Array<AvailableTrack>"},description:"\u21d8\ufe0e The list of text tracks available for selection."},currentTextTrack:{required:!1,flowType:{name:"AvailableTrack"},description:"\u21d8 The currently displaying text track. Must be strict equal one of the items in the text track list. Set to null if no subtitles are displayed."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedTextTrack: ?AvailableTrack }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedTextTrack: ?AvailableTrack }",signature:{properties:[{key:"selectedTextTrack",value:{name:"AvailableTrack",nullable:!0,required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 When one item is clicked, this callback is invoked with an object having an selectedTextTrack property with the textTrack object corresponding to the selection."},noSubtitlesLabel:{required:!0,flowType:{name:"string"},description:"The label to use on the selector option for not displaying subtitles."},toggleContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"Element displayed in the control bar for expanding/collapsing the selector items."}}}},"./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("./node_modules/react/index.js"),a=n.n(r),s=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./node_modules/docz/dist/index.m.js"),l=n("./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.js"),i=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./node_modules/react-feather/dist/icons/type.js"),d=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class u extends a.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=m(e,["components"]);return a.a.createElement(s.MDXTag,{name:"wrapper",components:t},a.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"subtitlesselector"}},"SubtitlesSelector"),a.a.createElement(s.MDXTag,{name:"p",components:t},"Control bar widget for controlling subtitle display and language selections."),a.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),a.a.createElement(s.MDXTag,{name:"p",components:t},"The subtitles selector lists the stream's available text tracks, and controls what track to display, if any. The control is only rendered if there are one or more text tracks."),a.a.createElement(s.MDXTag,{name:"p",components:t},"The subtitles selector uses the ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Selector />")," generic component, and is implemented similar patterns to ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<AudioSelector />")," and partly ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<QualitySelector />"),". Upon clicking on one selector item representing a track, it invokes ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ selectedTextTrack: track })")," where ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"track")," is the clicked selector item. The selector also contains one item for turning off display of subtitles. This item must be given a label through the ",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"noSubtitlesLabel"),' prop. If the "No subtitles" item is selected, ',a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ selectedTextTrack: null })")," is invoked."),a.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),a.a.createElement(o.Playground,{__codesandbox:"undefined",__position:0,__code:"() => {\n  const textTracks = [\n    { label: 'Finnish', language: 'fi', kind: 'subtitles' },\n    { label: 'German', language: 'de', kind: 'subtitles' },\n    { label: 'Spanish', languag: 'es', kind: 'subtitles' },\n  ]\n  return (\n    <ShowCase\n      height=\"90px\"\n      render={({ setProperties, currentTextTrack }) => (\n        <SubtitlesSelector\n          setProperties={setProperties}\n          currentTextTrack={currentTextTrack}\n          noSubtitlesLabel=\"No subtitles\"\n          toggleContent={<Type />}\n          textTracks={textTracks}\n        />\n      )}\n    />\n  )\n}",__scope:{props:this?this.props:n,SubtitlesSelector:l.a,ShowCase:i.a,Type:c.a,SimpleTable:d.a,Footnote:p.a}},()=>{const e=[{label:"Finnish",language:"fi",kind:"subtitles"},{label:"German",language:"de",kind:"subtitles"},{label:"Spanish",languag:"es",kind:"subtitles"}];return a.a.createElement(i.a,{height:"90px",render:({setProperties:t,currentTextTrack:n})=>a.a.createElement(l.a,{setProperties:t,currentTextTrack:n,noSubtitlesLabel:"No subtitles",toggleContent:a.a.createElement(c.a,null),textTracks:e})})}),a.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),a.a.createElement(o.PropsTable,{of:l.a}),a.a.createElement(p.a,null),a.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),a.a.createElement(s.MDXTag,{name:"p",components:t},"Please read the ",a.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),a.a.createElement(d.a,{rows:[{Element:"div","Class name":"subtitles-selector","Generic class name":"selector",States:"collapsed, expanded",Parent:""},{Element:"div","Class name":"selector-toggle","Generic class name":"toggle-button",States:"toggled-on, toggled-off",Parent:".subtitles-selector"},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".selector-toggle"},{Element:"div","Class name":"selector-items","Generic class name":"",States:"",Parent:".subtitles-selector"},{Element:"div (0..n)","Class name":"selector-item","Generic class name":"",States:"selected",Parent:".selector-items"},{Element:"div (0..n)","Class name":"","Generic class name":"",States:"",Parent:".selector-item"}]}))}}u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/Selector/Selector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./src/replay/components/common.js"),s=n("./src/replay/components/generic/ToggleButton/ToggleButton.js");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=e=>e.selectorItem,i=e=>e.selectorItemSelected||e.selectorItem;class c extends r.Component{constructor(...e){super(...e),o(this,"handleRef",e=>{this.props.onRef(e,this.props.index)}),o(this,"handleClick",()=>this.props.onSelect&&this.props.onSelect(this.props.item.data)),o(this,"handleKeyDown",Object(a.f)(["Enter"," "])),o(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.className,n=e.classNamePrefix,s=e.classes,o=e.defaultItemClassName,c=e.item,d=e.isSelected,p=e.canReceiveFocus,m=e.selectedClassName,u=c.label,g=Object(a.g)({classes:s,classNamePrefix:n,selectClasses:d?i:l,classNames:[t,o,d?m:null]}),f=p?0:void 0;return r.createElement("div",{role:"option","aria-selected":d,className:g,ref:this.handleRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:f},r.createElement("div",{tabIndex:-1},u))}}function d(e,t,n,r){const a=(t?n.slice(0).reverse():n).concat(r);for(let s=0;s<a.length;s++)if(a[s]===document.activeElement)if(e){if(s>0)for(let e=s-1;e>=0;e--){const t=a[e];if(t)return t.focus(),t}}else if(s<a.length-1)for(let e=s+1;e<a.length;e++){const t=a[e];if(t)return t.focus(),t}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}c.__docgenInfo={description:"",methods:[{name:"handleRef",docblock:null,modifiers:[],params:[{name:"element",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"SelectorItem",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  label: string,\n  id?: Id,\n  data?: any\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"Id",required:!1}},{key:"data",value:{name:"any",required:!1}}]}},description:""},index:{required:!0,flowType:{name:"number"},description:""},isSelected:{required:!0,flowType:{name:"boolean"},description:""},canReceiveFocus:{required:!0,flowType:{name:"boolean"},description:""},defaultItemClassName:{required:!0,flowType:{name:"string"},description:""},selectedClassName:{required:!0,flowType:{name:"string"},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""},onRef:{required:!0,flowType:{name:"signature",type:"function",raw:"(?HTMLElement, number) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}},{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}};const m=e=>e.selectorCollapsed||e.selector,u=e=>e.selectorExpanded||e.selector,g=e=>e.selectorItemsContainer;class f extends r.Component{constructor(e){super(e),p(this,"focusableItems",[]),p(this,"toggleElement",null),p(this,"onToggleRef",e=>{this.toggleElement=e}),p(this,"handleToggle",e=>this.setState({isExpanded:e})),p(this,"handleItemRef",(e,t)=>{this.focusableItems[t]=e}),p(this,"renderSelectorItem",(e,t)=>{const n=this.props.itemMapper(e);return r.createElement(c,{key:n.id,item:n,index:t,onSelect:this.props.onSelect,onRef:this.handleItemRef,isSelected:e===this.props.selectedItem,canReceiveFocus:this.state.isExpanded,selectedClassName:"selected",defaultItemClassName:"selector-item",className:this.props.itemClassName,classes:this.props.classes,classNamePrefix:this.props.classNamePrefix})}),p(this,"handleKeyDown",e=>{switch(e.key){case"ArrowUp":case"Up":return void e.preventDefault();case"ArrowDown":case"Down":return void(this.state.isExpanded&&e.preventDefault());default:return}}),p(this,"handleKeyUp",e=>{if(this.state.isExpanded){if("ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),d(!0,this.props.reverseOrder||!1,this.focusableItems,this.toggleElement)),"ArrowDown"===e.key||"Down"===e.key){e.preventDefault(),d(!1,this.props.reverseOrder||!1,this.focusableItems,this.toggleElement)===this.toggleElement&&this.setState({isExpanded:!1})}}else"ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),this.setState({isExpanded:!0}))}),p(this,"handleMouseLeave",()=>{this.setState({isExpanded:!1})}),this.state={isExpanded:!1}}render(){const e=this.props,t=e.className,n=e.classNamePrefix,o=e.classes,l=e.items,i=e.collapsedToggleContent,c=e.expandedToggleContent,d=e.reverseOrder,p=e.label,f=l?d?l.map(this.renderSelectorItem).reverse():l.map(this.renderSelectorItem):null,h=Object(a.g)({classes:o,classNamePrefix:n,selectClasses:this.state.isExpanded?u:m,classNames:[t,"selector",this.state.isExpanded?"expanded":"collapsed"]}),b=Object(a.g)({classes:o,selectClasses:g,classNamePrefix:n,classNames:["selector-items"]}),y=o?{toggleButtonOff:o.selectorToggle||o.selectorToggleOff,toggleButtonOn:o.selectorToggleOn}:null;return r.createElement("div",{className:h,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onMouseLeave:this.handleMouseLeave},r.createElement(s.a,{isOn:this.state.isExpanded,className:"selector-toggle",classNamePrefix:n,classes:y,label:p,onToggle:this.handleToggle,onRef:this.onToggleRef,toggledOffContent:i,toggledOnContent:c}),r.createElement("div",{role:"listbox",className:b},f))}}p(f,"defaultProps",{useDefaultClassNaming:!0});t.a=f;f.__docgenInfo={description:"",methods:[{name:"onToggleRef",docblock:null,modifiers:[],params:[{name:"toggleElement",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"isOn",type:{name:"boolean"}}],returns:null},{name:"handleItemRef",docblock:null,modifiers:[],params:[{name:"itemElement",type:{name:"HTMLElement",nullable:!0}},{name:"index",type:{name:"number"}}],returns:null},{name:"renderSelectorItem",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Selector",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:""},selectedItem:{required:!1,flowType:{name:"any"},description:""},reverseOrder:{required:!1,flowType:{name:"boolean"},description:""},itemClassName:{required:!1,flowType:{name:"string"},description:""},collapsedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},expandedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},label:{required:!1,flowType:{name:"string"},description:""},itemMapper:{required:!0,flowType:{name:"signature",type:"function",raw:"any => ItemData",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"ItemData"}}},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""}}}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./src/replay/components/common.js");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=e=>e.toggleButtonOff||e.toggleButton,l=e=>e.toggleButtonOn||e.toggleButton;class i extends r.Component{constructor(...e){super(...e),s(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),s(this,"handleKeyDown",Object(a.f)(["Enter"," "])),s(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,s=e.className,i=e.classNamePrefix,c=e.toggledOnContent,d=e.toggledOffContent,p=e.onRef,m=e.classes,u=t?"toggled-on":"toggled-off",g=Object(a.g)({classes:m,selectClasses:t?l:o,classNamePrefix:i,classNames:[s,"toggle-button",u]}),f=t?c:d;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:p,className:g,tabIndex:0},r.createElement("div",{tabIndex:-1},f))}}s(i,"defaultProps",{useDefaultClassNaming:!0}),t.a=i,i.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o extends r.Component{constructor(e){super(e),s(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,o=n.render,l=n.height,i=l?{width:"100%",height:l}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:i}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=o,o.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},i={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},d={padding:"20px",verticalAlign:"top"},p=s({},d,{fontStyle:"italic",opacity:.5}),m=s({},d,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),u=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return r.createElement("table",{style:l},r.createElement("thead",{style:i},r.createElement("tr",{style:c},n.map(e=>r.createElement("th",{key:"header-"+e,style:d},e)))),r.createElement("tbody",null,e.map((e,n)=>r.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,a)=>{return r.createElement("td",{key:t+"-cell-"+n+"-"+a,style:(s=e,""===s?p:m)},(e=>""===e?"none":e)(e));var s})))))}};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("./node_modules/react/index.js"),a=n.n(r),s=n("./node_modules/@mdx-js/tag/dist/index.js");function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class l extends a.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;o(e,["components"]);return a.a.createElement(s.MDXTag,{name:"wrapper",components:t},a.a.createElement(s.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",a.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",a.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",a.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",a.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}l.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-subtitles-selector-subtitles-selector.54acb99fd796b3d719eb.js.map