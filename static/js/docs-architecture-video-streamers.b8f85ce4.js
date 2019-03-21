(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/replay/docs/architecture/video-streamers.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=p(this,c(t).call(this,e))).layout=null,a}var a,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"video-streamers"}},"Video streamers"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The video streamer is a React component having almost the same role as the HTML video element, but wrapped into a nicer and more consistent and predictable API. Several alternative video streamer implementations can be provided in different video streamer components, with the possibility of wrapping more advanced playback technologies needed for advanced purposes or special browsers."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Included in the Replay library comes a selection of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"VideoStreamer")," components. See the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/advanced-playback/adaptive-streaming"}},"Adaptive streaming")," for how to use them."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"basicvideostreamer"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<BasicVideoStreamer/>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The most basic one is called, yep, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<BasicVideoStreamer/>"),". This is wrapping the HTML video element with the higher-level VideoStreamer API. A ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<BasicVideoStreamer/>")," is inserted implicitly by the Replay player unless another video streamer component is specified as a child element of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Replay/>"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"shakavideostreamer"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<ShakaVideoStreamer/>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"For MPEG-DASH adaptive stream playback. This wraps Shaka Player."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"hlsjsvideostreamer"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<HlsjsVideoStreamer/>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"For HLS adaptive stream playback. This wraps hls.js."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"htmlvideostreamer"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<HtmlVideoStreamer/>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"For HLS adaptive stream playback in Safari. This is the same as BasicVideoStreamer, but adds support for FairPlay DRM."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"mockvideostreamer"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<MockVideoStreamer/>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This mocks a video streamer with state properties and settable properties, but plays no video. It is useful for design and development of Replay or custom UIs."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"the-video-streamer-api"}},"The video streamer API"),o.a.createElement(r.MDXTag,{name:"p",components:t},"All video streamer components implement the same API interface, and behave identically when playing a video or stream, as long as the underlying playback technology allows for it. This makes the video streamer components interchangeable within the same Replay player setup, and controls/UI will behave as expected by the end user."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In other words, the same player UI and same integrations can be used and reused when swapping e.g. HLS streams with MPEG-DASH streams, or playing different stream formats in different browsers. The latter becomes relevant especially when DRM encryption is required."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Mainly, the video streamer API can be divided into three concerns:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Specifying what to play. That means technical stream details provided in a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"source")," prop."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Manipulating or controlling the playback, e.g. by pausing, seeking, changing volume, or selecting text tracks for display. This is done by setting properties in a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"setProperties()")," method call. Regular React props are not usable for this."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Allowing for observation of the playback state. The observers will get updated on state properties when they change.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"See the API reference for ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/settable-properties"}},"settable properties")," and ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"stream state properties"),"."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When connecting a video streamer to the player controller, the player controller takes care of the two-way communication with player controls, and with Replay player component consumeres (i.e. the React outside Replay). Two-way communication means setting properties and observing the stream state properties. The player controller is also passing on playback source objects specified as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"source")," props to Replay."))}}])&&m(a.prototype,n),s&&m(a,s),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-video-streamers.912fc1973fd901984c48.js.map