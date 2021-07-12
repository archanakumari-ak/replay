(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/replay/docs/custom-player/overview.mdx":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t("./node_modules/react/index.js"),r=t.n(n),o=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}class s extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,a=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"overview"}},"Overview"),r.a.createElement(o.MDXTag,{name:"p",components:a},"Besides what can be achieved through ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/custom-replay/configuration"}},"configuration overrides")," or ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"CSS rules (skinning, layout)"),", some approaches exist for creating a custom Replay player component."),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"strategies-for-customisation"}},"Strategies for customisation"),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"adding-custom-features-in-container-components-wrapping-replay"}},"Adding custom features in container components wrapping Replay"),r.a.createElement(o.MDXTag,{name:"p",components:a},"In some cases, it is simpler to wrap extra features around the default Replay player component. For instance integrating with an online video service's REST API, or adding analytics, might be a concern that can be kept in a container component consuming the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/replay/api"}},"Replay API"),"."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"replacing-text-graphics-controlsplayer-ui-through-the-player-composer"}},"Replacing text, graphics, controls/player UI through the player composer"),r.a.createElement(o.MDXTag,{name:"p",components:a},"A full player can be composed through the function ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/playerComposer.js#L44"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"composePlayer()")),". This takes a render method for a player UI, a set of UI strings, and a set of graphics/icons (typically SVG), and produces a React component that can be distributed/consumed separately as a custom player."),r.a.createElement(o.MDXTag,{name:"p",components:a},"The UI render method specifies the full DOM tree for the player controls, overlays, and UI containment. A typical strategy would be to copy the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/playerUI.js#L69-L107"}},"default render method")," and add, remove, or replace some of its components."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"build-a-separate-player-picking-components-and-modules-independently"}},"Build a separate player picking components and modules independently"),r.a.createElement(o.MDXTag,{name:"p",components:a},"After familiarising oneself with the different components included the full player, it is of course possible to refer these individually and compose a new player."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"forking-the-github-repo-and-modify-the-default-player"}},"Forking the GitHub repo and modify the default player"),r.a.createElement(o.MDXTag,{name:"p",components:a},"This might be an option if the architecture and patterns don't match the requirements for customisation."),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"the-anatomy-of-replay"}},"The anatomy of Replay"),r.a.createElement(o.MDXTag,{name:"p",components:a},"These modules, components, and concepts are essential to the Replay architecture."),r.a.createElement(o.MDXTag,{name:"ul",components:a},r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/Replay.js"}},"main player component"),", created from the playerComposer. A custom player means a new main player component."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/PlayerController.js"}},"player controller"),". This is reused when creating a new, custom player. ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/architecture/player-controller"}},"More about the PlayerController"),"."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/playerUI.js"}},"player UI")," with element tree, ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/default-skin/graphics.js"}},"graphics"),", and ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/strings.js"}},"strings"),". One or all of these might be reused or replaced when creating a custom player."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/player/containment-helpers"}},"Containment components")," for several overall concerns. In the default player UI, they are gathered in one component, the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerUIContainer/PlayerUIContainer.js"}},"PlayerUIContainer"),". Might be reused in a custom UI."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/controls"}},"Player controls"),"."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/connectControl.js#L30"}},"connectControl")," higher-order-component, wrapping all controls/components relating to the playback/video streamer so that they can ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/architecture/connected-controls#connecting-the-controls"}},"comsume and control the playback state"),"."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"A selection of one ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/player/VideoStreamer"}},"video streamer")," according to streaming requirements, or the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/VideoStreamer/CompoundVideoStreamer/CompoundVideoStreamer.js"}},"CompoundVideoStreamer")," ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/advanced-playback/adaptive-streaming#enabling-playback-for-multiple-streaming-technologies-based-on-stream-technology-resolution"}},"auto-detecting which of them")," to be used. With the default Replay player, which one to be used is specified when inserting the Replay component in an app. Custom players might specify one of them directly."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"A ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/connectControl.js#L103"}},"higher-order component for the video streamer"),", connecting it to the PlayerController, making it controllable."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Some special components: ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/RenderIfEnabled.js"}},"RenderIfEnabled"),", ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/settings-helpers/PreferredSettingsApplicator.js"}},"PreferredSettingsApplicator"),"."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Configuration. A custom player can replace the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/baseConfiguration.js"}},"base configuration"),". Configuration ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://localhost:3000/#/custom-replay/configuration"}},"overrides can be specified")," when inserting Replay."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"CSS. The ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/default-skin/index.css"}},"default skin")," can be replaced or ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/custom-replay/skins-styles"}},"rules can be overridden"),".")),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"custom-video-streamers"}},"Custom video streamers"),r.a.createElement(o.MDXTag,{name:"p",components:a},'The purpose of creating a custom video streamer would be wrapping other streaming libraries or "headless" players into a React component, exposing the same API as those included in the Replay npm package. There is currently no specific documentation on doing this.'))}}s.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-custom-player-overview.7d334c12fbe63a72fc58.js.map