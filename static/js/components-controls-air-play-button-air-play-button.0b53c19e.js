(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"k",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return h}));const r="replay-";function o(e,...t){const n=null==e?"":e,r=[];for(let o=0;o<t.length;o++)t[o]&&r.push(n+t[o]);return r.join(" ")}const a=e=>e;function i({classes:e,selectClasses:t,classNames:n,classNamePrefix:r}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(a).join(" "):n}if(n)return o(r,...n)}function s(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let r;return r=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(r.pageX-n.left,n.width)),y:Math.max(0,Math.min(r.pageY-n.top,n.height)),width:n.width,height:n.height}}function l(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),A=e=>null!=e&&e.constructor==={}.constructor,p=(e,t)=>{if(e===t)return!0;if(A(e)&&A(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===r.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function g(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{A(n[e])?t[e]=g(n[e]):t[e]=n[e]}),t}}function u(e,t){const n=g(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{A(e[t])?A(n[t])?n[t]=u(n[t],e[t]):n[t]=g(e[t]):n[t]=e[t]})}return n}const d=(e,t="",n=!1,r=!0)=>n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t),m=(e,t="-")=>{let n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);const o=Math.floor(n/86400),a=86400*o,i=Math.floor((n-a)/3600),s=a+3600*i,l=Math.floor((n-s)/60),c=n-s-60*l;return r+d(o,".",!0,!1)+d(i,":",0===o)+d(l,":",!1)+d(c)},y=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),d(n,":",!1)+d(r,":",!1)+d(o)},h=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/AirPlayButton/AirPlayButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),a=n("./src/replay/components/common.js");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends r.Component{constructor(...e){super(...e),i(this,"handleToggle",()=>{this.props.setProperties&&this.props.setProperties({isAirPlayTargetPickerVisible:!0})})}render(){if(this.props.isAirPlayAvailable){const e=this.props,t=e.isAirPlayActive,n=e.airPlayActiveContent,a=e.airPlayInactiveContent,i=e.label,s=e.classNamePrefix;return r.createElement(o.a,{classNamePrefix:s,isOn:t,className:"airplay-button",label:i,onToggle:this.handleToggle,toggledOnContent:n,toggledOffContent:a})}return null}}i(s,"defaultProps",{classNamePrefix:a.a}),i(s,"streamStateKeysForObservation",["isAirPlayAvailable","isAirPlayActive"]),s.displayName="AirPlayButton",t.a=s,s.__docgenInfo={description:"",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"AirPlayButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isAirPlayAvailable:{required:!1,flowType:{name:"boolean"},description:"If true, this button will be rendered."},isAirPlayActive:{required:!1,flowType:{name:"boolean"},description:"The current AirPlay state, as reported from a video streamer."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ isAirPlayTargetPickerVisible: true }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ isAirPlayTargetPickerVisible: true }",signature:{properties:[{key:"isAirPlayTargetPickerVisible",value:{name:"literal",value:"true",required:!0}}]}}}],return:{name:"void"}}},description:"Intended for the setProperties method passed from the player controller through connectControl(). When the button is clicked, this callback is invoked with an object having an isAirPlayTargetPickerVisible property equal to true."},airPlayActiveContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAirPlayActive is true."},airPlayInactiveContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAirPlayActive is false."}}}},"./src/replay/components/controls/AirPlayButton/AirPlayButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/replay/components/controls/AirPlayButton/AirPlayButton.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),A=n("./node_modules/react-feather/dist/icons/airplay.js"),p=n("./src/replay/docs/props-footnote.md");function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}class u extends o.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=g(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"airplaybutton"}},"AirPlayButton"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar button for invoking Safari's AirPlay device picker, allowing transferring the playback to a different device."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"In order for this button to render, the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAirPlayAvailable")," must have the value ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),". This property is reported from the video streamer based on browser feature detection and AirPlay target devices being available. Currently only Apple Safari (and iOS browsers built in on it) supports AirPlay."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAirPlayActive")," indicates to the button if picture-in-picture playback is currently active(",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),"/",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false"),"). This can be used for indicating the AirPlay mode in the button. Through the callback prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties")," in invokes ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isAirPlayTargetPickerVisible: true })")," on clicks. Even if this is a toggle button, it cannot be used to hide the target picker. However, any other user gestures will do so."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAEEIAEAAFKBXESG9wgicxjTldpPTgARyEkLpySQwEnWofQ4GImghCgciYPgxDkNQ6hJFohCkJQm5qH9AV7SmZxhhGexKTdE0sMkHC8II-jpFOciiHQLALU2KA4XIvjRkEuAYC4yD2GcbjYEsVwPFgYTMOw3D8JgQiAUPWT5MUhcVMkPS_0M4ytNVVBuI1dhgHYWjrPYeRTNNLULTACUJgybSePYAAxF8floELRPEyzrOks5JAHSg7nCxKRH_OSYp8oMpRSs0lTtHy_M0Hxgow-UAAEYCIEQBlQYiunacFUF0VFjlOAAvZwCESbF2G4Xz1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdFoAFnW9gADZ1s29YwBAuKfWgRJFv4ZxDkRR1MHYOChH4JY2p-OAdsRC6ayumg9KGy52AARgOrb5F6_roLmSb2EjPzyBsKB0HDILOUmsRkZjGR2FRcaYG4YBDxGsbsXkbda2ANHoEx4IADJmfGRJ5koZoGYxrHuH5-UwFCPqe1Qdp2AAfg2Rnw0jHGrh5pnUFhmspBkat3zMWEfMwMAwigKY5dx_HVaguZacTMqCBwOLMhSa8CAt2tGDUgTKVXWtJzoacyZRomxw-3KMhieAllsFj6MMuaA9ibYMgANVsCB3Ox43oxrT3PcYCO2MYgMM8zz3w9g1jEig1hXGgIzYDJtFGRVwvC8ruikKgqU2BgRw9BoMns9gwKtwbxvPeb0uGlQc0O670CCF7gL6PYQePcbzSCEDuEQ7gMmK6gRlceX4f-soWAcCgSgUifVf1-DiB4CNtBWEoOOcgLPBNvYHfGXfYfPaH4etwPuwTkf9awAILlIK2Ns7YO1plIM2K4PxmG_CANKkkiKfA3DQciug0THxoiXei7E0LMQIbnDiqAAJaAoCBfQhhJDsCamAM-IxqoOiMCEOwVsKpahKg6Sw58sQwCISyRqWFPQ4E9GkF0_Q8L8MxLAYRnU5GCMUbwqYfldb6wIPYRCcA4AADkfQwA-jASA9UUoSMkJYz4P01Hs3mL5R0RAfrrzsA1d0YirGehsZxTy3kHRjQcX5UaZoiCjSyAAaRgIkOACUBC6g8JpAQFdRZBQseIz01kMiSFLhkaeVFYACEkPk4-hTp7YFfJ5MwgTuiuKRumFxg47Bs2AOsYw7DIR1xgEsCYth2AeDzvmaAUB-lUm9hcdA9ReTrGLi3MuFcq7uQllcLwx8JSoC2hYdpVhNg9D6OGaCpCUQECyEsfwXseJ5kaq4D-XAYAjlRKEjIUy-Q1lmaXNuMRWAwGWf04QFINltJMI0bumAchXSOFFf2a9Bw33gOwY8EwnD9n8JpcF7ooVZKODggpGQCRCAxPiXQLopQlKgHLeoAB1TY5goUDPIZwOw5AoCx2yD0wkqwEgeElLsPpD8n55lfiEcwlAPDqC2FMPwfxZzCsZTnRIUczxwVZQIRO-QU45Q3skGAABHUIfYIjjHRP-dg0yaxX1hSKW-cBfl-3eZHVw0c14qrVcnWAVwump24HjR-XBNmL2BdYbo9K0JFm7lMQ1gRji2CyS_dG3R7Wt3bt8xlRrGQvPWKPeinyp40JoFcSB-jiz-u2UG_pgycGukjd0Fgf16KCvjXKo5OaU19L1tRE1ZqLBZqQuPSe3zyn5vYIW4sZh5BVL6tQAazLUWGOPEjdozdrIWhDb4uGui7DysUTCLAoF0CcK1DgdcpEaCMFcXjVp5qTkxHIMcUxWi6lTUvZ7Gdei53GK6GYq4mjQgGx0bOoxJizHrHHb1CwqJoixCJmiCUYTr0wCiTEuJCSkkpI6lcEJsHwm0EQ7E4UKGMhoZZFNAA2u0RN8zK6IXcu_cjcB5Utq0gAXQnRYPwGADICJMlNI23rpoFwgM0SMvS4A4E1aJi1QcrXwBxs-zOImxNNJwJJje1q7X0aOYqmOOwE5J3ch6412NPK_xA6xr2EYBBGzkxYQTyMFPiZwBR8uVHq4wFk8veGjinPJu6SEZtPnB0EDOUcvtAW81BfYNRhcSxX0GMA5-iA5ipr2aacZzOXQCB9HMOnYejBlEKLzoAiwsX31AcS2TEr8XTGJZAYXWwupUBk2818mAtXM6VePBVjd762ueyi1AMm_Xeu1moPl0mwAFPsfQJx-RrWivDlm-gBrgWyY9rLmF8Nw2LAREW7qMAYAVvADW6FlrgXhtgMLp-VcwUFyaX44XDLWX2CoF_VANLFgh4qxVmYLdeccC1usu-hdv3yH-m1g6H9Bt_JHMUZ5ZBqCrJSVspIOSCklJOVdhpf8gFtCVrAiAR4DCmGjFYVMdh5yuGiMqpU0n9juh-VLtynYriliJ0wJQTDPpsPdHcSJSx1iSKZgIORLFkg2f3M58eIpNS4B2M8ZYtBiQrT3t_dbM4suJ01Pek0pGcmpwZCuJGcXHOYNc_g-wFp0Lr7SfuO9eiTPtiPp9ZQLgXq8YjswP6zYEAUiEF-Y8goY6J2ed0N8kUrj-Hc6RpGcTVxGc8tcZyK4xvJdR743JzzEHaDJ7uSb0JaffKgZrAk8VUocBxxiTHppnIcAQvPJKPAkYK_G2s4vehAASOKzC4qJf1N0ewmxIMyo8MkIgiWCh26Qg7uplR2Ap9N3BrIOBVywCmJ_boU1xMkYryx1ccACxo2RhX9zBditCXaJpWAUpshQVCCwSglhMg7HaIgQBhPO_d97_3wfMRh-j_HzKvHszjrrPvPvnvBsvqfrWFnjAGRr0AIAcrfvfo_jyu0ExkjOvu9pnB4GaNsFgWfndhfguBKtkJYBUigc_q_lAVsh3l3qMD3lgH3g4D_hPiPgigAXOEAY7iARgHPrnqnhAYAjAXAfsvoGQbuhQdsGgRgfEIyPgbWDgRKHgcvJDgQFQf_LQZ_owd_pFKwf_lgBPlwTPrwWAVhoIdQdBlkNvtEugVNJgddiBldjWI9gIOYDAZ5EXmYLFrpPxFjjunugeuaEeoLvoGek0qzvwQvtzheusPDOiFKMKFXrlLbonvdtAaEHCEkXcE4Z7ApjAbrkXh9mBm3uwB_vQV_swboX_uwQYYAfbgnjwTkKYWbkvj4W0BjPmMKLsCMAuCMhCgipQANFzASN0A5usCpnCnYDxrHpPokNPtXsbHkWONzpGKHsHBHiblkFkXAJyE4esPrpZifi-lOuolbpapvEsPkcFMloSFgZ5n5AcUsN7r7lMNcQSLYIpskXcScdBiTEjM8YQJLI4riOgBMItBDEtEtAAKTvwAmvHsBXB-QglgnygQnQniyFG1guHZbLyxiyCAJ4m_E1zADEywDBQXaNyEkdakz8CK4Wg4p4IrqOr8BEnja1R5AxBgCJCBaLSIh6ACAYk0zzbAAHF-wSLKbwaXEBznHWrYzDZqxxi4m7j4kFw5FBRjpaxYCxSqFtFuyaRw5KAoIWSK6ZR2Ro6OQZCqT6QwBuQnw47ULhp0JE7MK07k6BHlRU48Ka4cy1I65Pr7GjA2pXBQQIFISMB-QkYB6zhMZXBRlzhCnKzB4_EnLuSjQkxTFpE7RdgFBXBLT-opmwAAAySE-wi0YQEQgMFg1QfEnYowi0K0DZkMx0AAxPYOeNqAdNqOeJWX8gINOM4P9DmewHmesF4H2XksfMKItCkJkIkD2WOdOI4AkLMJpLyaUiuVpP6guRkGme6vKDYF2HQPOcKNOKKJ2BAHkIdOdP6r8BkMTiMAAJqLQHmYBiz-rAwECgzgztBQzXmxGTnljyjNkQzJgQwnQQxxQ9nIl4DgmQkwn-oA70SLQFlaRB5wzJmD7oC7nwr-k1hUBnyAXtDNkADs2oAAHAAJwUX2Dzk8ozltAYCLTNnnjnhxQQUACsPZtAu6UELKKQC08osAYAr475IEX54JR0G0W5J5O5g5-0w50l45AgS5iEdw35-FqlmkPUiZ6FqAA0aI2FGZcmMlAgA5koQ5I5NY25yl65ala5y5al2lnhk6elEaWFVMOFmZu0Q57QAATEtH-TWGHjevELxT7gJe0BEDME5Uma5eMOgM2PELEIZbrusOKQQO5emaJSDB5YtC8EleQD2blOZWNLmTgOxWhfnJ5hlY4C4B5UZWlRIhlYZdlQQDdGPkkA9CAE9H0C9LVb6ZQF9D9IMf9JuesCMDYLQGZYiItD8CMJkNFZVV4T8bMOSIkClVNHjlMOnjMkJltZNALO0G-GkRYNifFYlSyuQIZWljdh2idV7Jlq4fFf1ddSBktS5QNBClENouFkjPtTtW8ntb9fzFNEdUcViWOE9u0D8C6P6B9jCHda3mdVtTde9Z5i5OSDaa5tHg8YGUFHHgsQDcVj8RXjeEJFNEICMHYFLJTaJlEDMJGJTWnCXhKjgOvnAIzaMEnsKokDXuoC7qgE-BaG-HzQLULcdYtHDZwEJrTRbmzLTafHQCkBMODcTXFZhZaUjCzWXhXhzbTSRktExmqadZDU9TlpnIwChaybXK5oZQmbllFJ2NbRNphXbU7IXJbUcKSeNgZfVfbT_BYMABrQIHTbMJGMHWnPNlnIWBXmTO0MHcLewAANS-ASjTjBTe21yZXUzu0B2-TB1bYW2SATC52XbALzZSBoil11jF2YXV2W1eDoCJDV2B0K302Ric0jBhw4x8bm0B2e3sCx3ACk1CQp3tAWiU2J0p0QAZ0eW1ymV-0t2ZzACRja3Wzs2d3c3Ig17t2Rjr5LDqA914x9152JgZWD3RJkwj13Zj30m9FT2cDJ3ygP3qCz0kyrZzBJCGV72yFub-2n2ezABfXRCBY_27x_1R1F0ZVL2ey7GF07hV3zZwMEnF2N3N1KkoVOxqlfYTrg5TA6kY0GSuYGnKAI4ZTI7ib5QiBJRFToBARbUMB1KzTPxDKFiAAbhCEF0LkDMOgFkC_HiCMbcuztBk8gKXYJGebpqsHIkExpGJZBFOGIiJIKKqhq5haI8rBuo_BjjFKhPlChUPOhPMeEsBNcEMSiQTkGwVCiRqUNQCSj9ZRMfHLMUOwAABK6j2CyOSCOoMy0BSh9AwAUT2PZD0kgRURwDNnmPtyzgWhRShOOPUQ147LdCABwf8UBMTbs45ylAA7v2IOKmsw4KgIyk4AOuEoycQeQCa44TKdjFjRowoGw7g80c4mK9ROwlhtA9Q-owoCaqAV0nAtKuyPjk1EqATd6cA5A_QMwqSwxJGBAIwlAFoIwSExw0QNy95XjwzLwozXQyjYefwMAIwzZjqtNFolQK63gMmkB8OxpiO6CIRWCTw6QMikgY2iirzXGQif29pwEjp4EhOjCLpXkOkbpw6Wo3C5odifkWuDS1AAA4s87ECzqOAQIhl4I6lhcMCKL0AQDeGfDpgIE8YkJjFkP-m-kYm4ukl4sRM4muvnFro-k4j9Ai9Ikizri0kCuws4GOMOGmgms0HSoMnAMML-pY704IztoIjkCyG1JgBmm8nAA1r8qsgCiWoGrsv1kMgkCEHMBKEcGgBKy8CZNEGiMnOEN0MMVCkICIOwCGAja1K6Ja7spKyZKuhQqaq8hYP1v7qa7OGq-wmWm62GjPLy1GohUhA2sEIKwyn0i63mFzGAPK9tp80tvtoFr8h7t0py8k-WgyvtdWtGnWhG3GlG7skG7Gym3sO612gtlK8tuFhm4ekWp7tm1BNk7k4isMDkBMNEFqyMlGvyiw6Y4M8GoMn0syqyjkLPlCuvrW7AJMo0AK2W4Mn4AEEELSpW9QD0oZn0jtHonmIalCnEFyjykm1W2Nsq_8ussbL6osK2-2zygimOF2wM4_EOwI1a-Ml0JY4MsQQ7EsP0VdL0HYDMH0EKJpKJh68yKgOKGALahLK45YPqIWZeA6zQEfR_C7ugGjT8dyppGS3FvOqDXGyunnP6J5gmwR0DsRymxaAm-Rz8dQFR0YgunG-gHR2LLFQNJfhKntgdhup5bFjhXjEJ6JnG4onx-wAAD5Sc9ACdiefOw7LVxU8dSjLbyd_Uad8aic4Did5wNbSeyc6d6fkITrtJFDsLigWZ2A3JBtCrzMPLwZ2AWhzvxvmCz4JtUo0pyeTthxTAEQagBCPtQq5TgfbMdP_gWevLeFvO_u7rezunWzHpC5hHJExFXqQa3qqGMut6VPagq5_rda3TyVdKmbFFTawA6KxzR4YcpbJE4CjafNy3vGiYOaNezaRgACEdXdwjmirH4ZmFXCG0S2oow5gU0Z4aLlAGLak2L4QeLpwcclmZG54_JtG8oRtg3lQsAiGAAqjMNHhXui32eeN8kOlNxi6d_oBh63rZk3tEsd-gFdzQOXtEgdaDat7QAKYZxfXMdNyd2d9bM3iDfKPKKrbWEd_9094D4pjAID_l3rKrnLPIZNtt53JddsMjw4TWM5SbRZlZquPcYyg1ksP1jFkV8Y3JwBseGVlgD0im_W-GvT7tmm-FksNQLB-T6ivCm8T13AN8XFXG8x0R8T-YFLExxT90FcJR5LwL9OpLxmXgMS5kLQML3fK3sVvJ_6p7Kp9ovJ1cPVmL_7FfgQOp9z3YLGcQWp2m1rx5pL7T9r7WNSbbiRtSUsHh-j9T75kL5L0xtdsbWGtOsDaL0CWx4zyGx6gz6z-GlgWdSfYmDIIAlRDSSAG6_wIAo6hAK4BaAOPAGik1v18NjEAQMSUNoAhL7HLXISPgGj1VzsMNtQHtzMFXx8UN03w36gIhqNyMI1i7a32j132N8Np-mTBz6YsNtSV1l73AEX0ZOPGoGTEtP_RbYTCmfP9gGTBaBDDTPTOFvIAqSqR7cqVg6jcrL1Hg3eoj1DrF6Z0goaWQ1JBgiesLjSz9JQvQ-FnQoCyTvSz6Q4Fp44gkYzgUgMZSWHGSCi4MtSPkGFpEGZaItyAOXWIvJ1-QSwCOocJAV71p4-tgB_qaktgMDw6V84F_GAbS1QCIC8K9vBLFgHwF-t1g3rWMr60KCEDNSsULXA-CRjgDZOL2IgIEAEDekHEjgE8mgCyBGV2AWAK4NwN4FLB7oz2UIDwIyAmMuAKJSQQoNTo-5CAEguQbwIgHn8oBDoTzKoTV608F0dJf0CwJ8hCwRYHUPJtViwBq8OaufL9GAMYFLBxSRjeAMGVDKJBGAEsOMmIG5rgCM8PxYkC8AgBgx0AxgzfFQIOqyDtWUsI6giRsFmI0sIeSXiGVnJIwSMu-IGA00jCr5H6U0JaMqEfqMBnsFLRWrOAmDFCIASdJOuD0Jz14BASQPYNMwFC2BIM1AK4HEkizCADufSNqFw1MQRQfMBIdwAilmCSBIABsZ5BIlXB3d3BcAEjBACNr3VNeXvdIUhDEx5BG8IQmIOEOMEp0FhSwzbtjyKLOFTa5gakhsMSAAQxa4sN8B4V6jGAL-lg9uCyAGSMx7BkYPLgVz17U8hyEsFVusjJBUCrgvglwewDcEUtPBs5HwX4ICGMC0iZ1H4Vfz-Hksx8MqKWI4MSxfDsRdPSERIgWHywyhx4RYYbR-5HUPCZqZTgNFsAI80AeYKaNszlB8ZmRkA2KK8NSRK8SWqvBXijAwH7s4A_qXXmgKFECjCO6AigZgKoFjpES4ojwZLFFHCireaIiDlcFFHGxwRwA6TpLGuFwjGBYgXAQr1-R6itRBQQ0eKNKxUCaBTA-QNzTNEyo5Md3UTs1xFHydwemeFUdkA1FTQ3R5vVYu6KwJ3drhfXa4ZGF17ej3R4PE2o9TcJej0Aoo2vNAC-6Rg6R1WF0OgFFpoAnwYPLArdTuwa8HqT2CMQmPk55iQMCNO7M6IV7g8zqeIr4dSQd4EiPgNY0_t9hdB6DpQwsN4eYDPA3gGKe0FIM9x-pCCJ4tADmnDzUI80lgf7fQL8kQ7IdUODsbmoIL7LCDxxaRQnNqEEyQBegUOQ1ECBa6sN8QAecqIEgnwGsbkAAKWcB0dWhUQEZMsxuG6Qb02wPRiOGRD1NIUuyOHieH_JxVrQ4ocqDxlnFZgZOMIVgGrlEI0AtMBAGvH2IHEFAqu-gICQQCx41h8hFSJ_LQGh76A0sd3ScbpzaBox4UrMCCdbAiChASJomWAJUPxB4wlo4PLCeaGyDDikYhEyidRINrZD4at2flsjEIlowmmpBYiZsGaRsxBJ7GNIOgH4RUSxJFQ5WvROHJMTd02E1iYD3YmQSPgUkkSXJPgDcSbqlY-nKuGYnX5cJWYKaJONP4xinsrecQewH1DRA8AOAKIFgEjB5kHJTklydmNMk4ThxYmVwGkAAAa7AFzoBNZpCUIs4UsvNBV2KO8ZBjkiYC5NcBuSPJiU5yRiMjC-T1JJ4HaGkAfKhTBoRAVCURJmBLBop1sOEnFNXDQVv0kQEqdBUd5wk6pxU1mnCTK5n8iBnYo0N2NSSTcHuUPWbgQBxYLcCW93GJPwhvBCJ8Wz8GEWGXhFXALuAPV0HxlvZIiLhR-AaZd0B6LStpy09Di3jmFCZdak06aYt2yCOYIwWAPbONMe7-Tj87AMQIUOjG_c7pMPXPvD1-HoTC4kPbaSeFRC5R14gUjoYLQD6fZHhXU2KJ5jpE7iLgFk5GK4CuDIh3eSM1ALzUOmA0EZ73fpLWI2ntp9Sb1TGZGBuRoAIMfUe5M0G1BZBmuHgAZmTMRDDEqZyUMia4FPBjhLAAoGALxgFjvAzwHM48HLFxmxijQ8QAmTj32IbTOukYfRFoOeS2BDE-iYmTjDIkyz5BAgPrgrMjAeBdiHhdkT5GhmKsxUEqaPKKnUBgjgAdo42KbPYCdcpoL2bVmRNNkfATi8RCIEcBB4WznZrlV2cKD1n6CfitgGsgkFGDng9UfYHjIjOnH9JUZvNFZFezGFE1paWMkHtrPupnUukhkviUnNTGGzS8aE1wMrLZj1YjZUoLWbsXuqeZdabbKaGvVe6V4C5cvKYLrRvBa0S5QPaJBzW1lBjjpHcqCApMLC2ypozc_uXgBelnV8ZMAcsQXAMGwzECjgYWNtV-70Ykx0wyzMDzxgwz9scM_OdYRkbu9d5RtGvLRMUndzkYLALeXPIYpTAGJY8vGaLMnmnCIaws4eVMJTHrzGU24i-foC1kHyzkB83YiPOxlFCKxWc4MV4NDFeClZzXEMeHEgWpyWZgClOSPPB79E8hPLCAEjFZnHyqhnAC0BaGKEvS7urgY4TbJ5nHCcY48--VPM9jpzjUmcxGquEJxFpOAr5EKiMl1T6oWUY0VcJQo7Rti_ZXYqwSyEwBWQdEpESMKbPNl2jESwUJ0UJmtkCx7ZUAIWbZMxL5jjJ08n4sylIgFFG5ewfoPNHDl7AxUWBWubrQkVioa8deBvONIxl1YhMxcvORIoMXCCoA_8l6Zr1IgHykYIimYGIpdDOKfcri_-fIXUWrCneZ8F0N4qmjCgglE8NxTvlCX-9Y-G07RS6DbG6CORvU6wbeQQJ3ItZlIKRezzDz9BygUi7mmvTSIh5coyQKaL4v8VcyPeapO7rktKUyYK5PxCpHQHyCdDC8SMVpXcn54lE1IorUZLkFQAko8-jqRIJ11XC1yzwuoHvtbjGjvoOaWU-LnpXQyF4AF1itGLYsTlFwHFuciVOstAg9LUA7i8JTZiOVr1ViNSy5YWOOIzBEg0SvYCUvyVUBnlv8_wt0o6ghLAEYSx5U73uU74fFQQPxZEq5ldLNl1Af5RYTayArAEnyl5aCsskbLzlB8pJQXDtHWSixT1ZFRDPMH-y4qwDAgPzM7gPNF55tNALQDSCAUVBhLcYlZEdTRApyIjCfKDR7KtRpm94MAAAC0MglAOOWsgTkiyO0_qLMsKoBRIxSuH4OxXivMDcqxoTQAVUIGa40qYAdKoBUCQSEG89AWq0oRCWa5ZkgSxQJaO3mAAaq6V8gC1ZpB2gq9hQ8gFxlcGKAWqrVGQG1SSWZUOqBATq3WZkv1k_FSV5K6PJpF0D7pNBaspYC6BSCQZvkjkgQNsAYHajQawtG7nQJ5YEoIwOQKaOlLDADjwxWwagPujVL5C0AzKO_NkH0Saq41MABNbsE5X4ShMNSYYmGuLV2BB58oBleLHAnyzXAisttRgB2I_dB1-6bGePEgBeQxotYgcYyOHL0KqxMtWdTkFKGMS05y6pGBPWXVBi-ou8MFNWtjUtZ61SMGNbWvrW4qDBSEDMnmuJyJEs1YKReOwDIonQDokJNUpepiTjxuW4ajMrwxiSmon1L6yEikJ-IisQ6SMG9WfESKc1hYD6sKVeq_VFqh1OMehMmBOhvqQN6tQ4PRgwBUzP1qAb9e2p8UIaCNSGsdSnTA12B2EaG4Df-IGgYjzW16rybesswwbs1hUyjVBFw0kbCNyGx9ehvfXBCtgGZe9XmBc6cbuN-G3jWOpc4MaNx7CdDWljj5zDd1la9AAerPWOpdgSdVcMGs5nJdv5f6oUR6HfhdIAO98nGDpoLh6bjwBmmgOHWw1LAX878IzUAss26bhQ31clXZrQlybQ48oRAO_AnnubrNnm6IN5spWFqzg38IBP6shmBqSVYWvXotxDU8ZeG2eSWEzLczyqDZ8cJKugCy3EbkopMk5OTMZnUyyJnXPtYrPS3_g-ZnMwWWlnyGUakYwCjCTyz80Zk2tXrHlqOq61NrkYtgPLSygK0Va2YtW0hbEOUX3VCcekBIMkDiJUTpQDTe8lNo2BbBtgkBT2C1qZFwBhtXAQrVLFq1syCArjbDUbFzJYFOtSMIbflsO2rNOmZ4fUGgEY0Xb51e-MjRmVu0jb7tx2s8NJo5rEjut6pc4cLJPo2aKVGYb-ZRqc2BbzNHaSzV-K836bItnW2HUFos1P0IdPmqLe2pi1OFnKF_TzGeHHhfcd4ooYWNImjydsnAhuDDrezDj8kd4AOyNbwPTXtbxwTO-IA0G1BgjSdhGbndqBPWvYlNG01vBBhFB075Vhy5GFVq51QAedHigZmTsF0cCxw_O5JPEEjA07FgyugXVAAB0Aa0SjErFb_Ed4AyZgUug5bWDu4arNdCu7UEruZR6sNdO8VMfLsV3yEbMHuoXXbJF3LwQE4Myqjcwkh3MAQT_IXCLnrRFJckNlBJoUmKRhNSkE5PQLunf645P-_zehN_xYTAtYooLSnB4mpx2ItcDONptwWSIRF2cAhU5HwWr1RF4MuGNJKIksTNEpcxdH0hrgDUBI_-BGZJJ3HiA5NH2PGCMm3u5y4ZQBn4y2atKw6eRiBvexJIRjrXPtkUPGMfY3o7lLA-9A6QfQ7np2z6iVEaP_rtx-CL7-9feJFDmvYDb7l9l-ufd1LYF6V5gUoC_S-x4wYd19WQe_awL_7csYUUmTeK_tX2zF5iyRG9gfvi096HENenDB3OQxn6iM43fyF4MYCf7YDMSMQN_ugEL7UMSEpPQbuvRsswDuFcDA3siRwH8MCBkGb8hgPDckMlB1RqLHerz6BB-BwpGbAwUkGziAB61BhmlI8H4AQBu9jWBUZL6wRN-oQ_6lJnP6px48P6BKkkPrA_g9e0RmCMgRLjQiyIC0TWGFiiH-9VwCQyvuw6EDoZU6rPlAHKS7phtjIdUWwYyAcHUq5qfg6pgVG8YL0SgJQ5EVUNTapDT-iVFbuPoWzOQN5BA-DCUX-pdDoRgI4XkqqeYyUZSGhLuiRiQJJmkUClanoICMB4j9hmYBAEbBoBQh8QSwwQGsNuYBFl_LRI6Hj0p7uKBAEhkaVD0ZQI9ZEbKNHrFxeHYM2SGXOnodIzwnSOep4fQksCd6vxEXYxYwY6i9R_ER-oJEy3hbwDkWsLMgTrl5xmQMkr_OlofrpyzEC85GCeD5h7XygJdv-FIIcfaDWQCgZxnaJU3QBnHNIMAN8bODOMDIL5lxrA1AdqT0Rumb0UGsWtaiVAzjLKb5ICY7joBWAApco1rnPAIFhQ_VSaOsFk7tBnAlgUUOeCgj6gAA-ueFFCihdQooDE5YHPD2BXG-iXUIWV1BwsHyGJ3bvomcC7c4IcEPE4Se1DaULAiJ5E6ifRNYmcTeJjE3qEpT6JyTUEFkwiflAcm0TmJ7E7ifxNdl7AuoLsqyZ1FImUTEp7k9Kb5OihMTuoXbpYDgg6mMTN4ck_YAiTtlFT7JlU1yalO8ntQmpjE_YELINBzw-iSwNSf0RQR44UEBoIWSgiGnuyop5U5yclM8nRQZgjsT_ugO_j-gY0BdHFCgiWAoIhZM45Sigiih9EDQfRHCzOPpm4ouoUM0To3QgGeU0JoQEcGhVjrizDTIId7KW2JEgQVwCszZU9zjAtgeAH4GfBSAyC4y30KZWkBtFSkw8LwGQdywHPRnQasZ-M4mcuLPQYADZ35NvXuoMhMipIioGkAD4KZDxm1YsFgSWIjnal_sXc9uer5-NWzk5DszKpbNtnz4iQQ8x8TgDTmGzHA-8zCb4GEziamAes8-f6ppZNIu5vgwefWDHnLzHZ5NQUG_NPmSzMcwlWGewMOJnMiyAyE_gbVpFHj6APs3QKMgLg0LGEppvql7MgXaBIhlxagF-QX47kFoM-J2GyBnG0AWjUJD2S4A2idRDK5gw_r_5oGN8aRWwHBDCBopL2IqwFAqxQivHZwfF1VjMjgDcsHjBQUS8CPWBhdRYvyBlQhT6DUHWdCgzNIkmPjms4IgxUIdQF-RZb_URkO87vCmonJw8ulhS1cEMviWoIBAQsh3HPDoA8LfyfixKvojc5fkpcbnO5aQjfGfkceL48WiUNaXjwil2WYyoVb6hzWqFqVbJYVbKoZgcF6jLABkvuApDcARK4xjSsCWbMGmOZMldcw5WMrDGHzMVdHKhAv56AKCJhXCtRrYi0E3Fi8BV4BXZB9Vqys1ayAMEUBSl0cp1dV6zAerEVrcv1fgAmiUDDK7Q8VkaviEyViFlAYVfciSF8y5BRC0GWQOwjFrCFnlFNb2QIF9ASBAYJIQWsLIUrNpRC0ZbvxHW1r41za6ddcySFdrGQEs3ObRksXwz3Qdi03qmjt5cMqBjoy0VoCYGtjWudi6UYzLt5wb_1lQ2YSyDA384hOYY_MDsA3GBm0KK2mMUgMzHugPVXCOdeH1pFxI-FlIP6noHsqCLFgFC1ha9Y4XAprVrs_-JnhI36bLghq2NbmneC_IxxtS4SxhCMU2rUg4NvoGJtBRqwhO1iw4huhHJxQeqeAG1SS0Lovq6W1wM8eEECA5ySpj3i-rzMS3ugUEME-4ERARDy9uNl6FwY0Y-hduTQ4m7gPCzM3qbkWWIN0pgBW2oADtzGEQHts23xi5lteJZY6h1WpB4lhy98nKs1hajkhda3qNNv42dgu1xFJ2DWavXEgpNp23pRgBtw9UScUWPlxOTQB1rreS6s7ZluMhUQrjNOpaV-QRk4yoA8AR4es1rZ7AN8XcVkFdsO2LAIJOHgyO5bJInbTdq1C3doBt3vbDd6WxwrltxJvqvyKW3MhLsT2ktjvLag-HPCqTzQiUtGI2yHFakdRDNzReGgfDt3JwoqDki6D0RV3l4QAgoKAKBVhB78I94eMofuTE2A9j8nBt3uxuFmdgMdjgYiNk762K45M421Ph5Qx2zOAbEY_0VXgY2dc1I6Cx8ZBSFGoARhP0pxbgDRWcJYdiwI_F3hhWebGV7izccwf9JRrgkGYIHfUsdW0QXVxLOQ6OCInXJZxjETFXfvbHkHxBhBzEHiBsOhwHLbaP7f0t4PbL9lxy85datmbxLWVsq3FfSu2XNMjqJVC6j0ypWDMjIZUSb1IKrWeUJ1lzEtYutMr1H1Vq6w_nmvBl7rujnlO9ZgufWAbUuIQw1ScP_6XDKRcvU7kw5-oALNgPstxZFCJBY9Mcyx_A7b0ZBGWSxupLw5oJhpIAKQFS1ZclhBO49UTmJx1GFHTmUBXBGOytYkI3WwR0d6c49aNFe8HbBRzh0g5cdNJfk48RB9w7FEiGYOadRIL8nid2PwD7j2p7QYHzCTGnNjtPM7lacWBqAgcGcnn1tR-RfxQ6Ou_vr6dVsuCs5wK8A52APmZ9XAAJx_fiddxEnKvawVwaLvp3M7oQbOwHfNk1S7k0qcGIWNwOIh-7nJWIK3aaEoDd7hcV-PYG_b6BzD61wEfHNyvpZj7qIU-wXYz5GP77jcR-0KvJtMDC4gex3nrCORyioCFzzuM3ZudD27nYIh55nCecvOaAbzlAUCJkdQEugst1EJPeiAoCZ7pcOe0S4XseZwsy91ey_uiAb2wRkYcUFvYO6yc4yMWj7I72shBgm6sLx53iGefZBXnosnF588d6nUfnBAP5-fYsK32BgQLwuCC-ftQFA9IGf1FEC8gRRUQFL4XCgNbwYvhXWL0V2CNxf5wuXdA8-IWV_Fu3FopJ_RN2SVNWmQzSp5M6mfTOZmlT2Z3M0qa7I3hdunrxE_HGxM3hdQzgbsghV-Fk0MA0FIa-1eKxCA9EuoIi_c9ZvbR6IcAceCyhdBiu3LdAkR2kATXzQ43Qd7aDxZds8Msgru-ICW7BDMC4HqzmxxkAaC-hXEeWHPDDaMQJOfcST6gHjCmjxOwn6wJYyywyBEGeHHSvpj282cCPJYlgDqSHvShSQ6SqhD4Hog_5_MQAWyEwDu93d7v93B7w912mMC2t4A4VMSI8ZCD8VBiN6IsFw29pUbXk7SI9y-9fe7vXkZgJqNMflDNHHmouWPbtwaDTxK40iHJNHsA_AeGR6s9XP6C_c6R2gv7l_lIjHd4RuWJvYUM5BVHCg13Xe1AHB9igIfKV5EZDy82cAjbskZHu5NB70Swfv3hHqHY8xI-xBJA7zRRDh9DP4efI9HzBC_wZLUQxcoVwJvHEE_sfPInHh0Nx-f7YJ8D5EMlHADJpFI5PCn0T5-7o-IfpPCTciOSuzcwAJ1SWjqK805k6e9PAgb6h1BU94e1PRHiiLgn49cFumU6jD_Z-oAvBsPMHsT1Z4Y8v9Rc8T9o526lwWfOWb7kwJ6xPcI9KjcAS92amffBeP3ln-D6oRz5tHEvkXtAJIFUDYALPyCf6NsDpuUJqAG7vo-BDkz8B3B_AK4PwCBDEgqglzAQBaF_CY0vo6wfgGHnOXlf2A_AJaDgC69LQmvNYfgOUEmYQBWh1Adr_wDbb5A_wO6H0JjTvTkhKAiQPMHkAnzU5Qm5QEELV768WB-AUQNAGN5UBXTKEW3jryAEwDzAIwfUa1O19by0ktQ-3gAHpgUcAIFZ78d-2-CAwoEUJyWCCQAnf7vvlbrzgDIpveTvq360A96e8veIY6fcWcrHhwbfcAugKJ_l9QCFfaExX_gLQF9BZByvlXs0LQAnphRVq_AeQAoHkDyAgAA",__position:0,__code:"<ShowCase\n  render={({ setProperties, isAirPlayTargetPickerVisible }) => (\n    <AirPlayButton\n      isAirPlayAvailable={true}\n      airPlayActiveContent={<Airplay />}\n      airPlayInactiveContent={<Airplay />}\n      setProperties={value =>\n        console.log('setProperties() invoked with', value)\n      }\n    />\n  )}\n/>",__scope:{props:this?this.props:n,AirPlayButton:s.a,ShowCase:l.a,SimpleTable:c.a,Airplay:A.a,Footnote:p.a}},o.a.createElement(l.a,{render:({setProperties:e,isAirPlayTargetPickerVisible:t})=>o.a.createElement(s.a,{isAirPlayAvailable:!0,airPlayActiveContent:o.a.createElement(A.a,null),airPlayInactiveContent:o.a.createElement(A.a,null),setProperties:e=>console.log("setProperties() invoked with",e)})})),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(i.PropsTable,{of:s.a}),o.a.createElement(p.a,null),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(c.a,{rows:[{Element:"div","Class name":"airplay-button","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".airplay-button"}]}))}}u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=e=>e.toggleButtonOff||e.toggleButton,s=e=>e.toggleButtonOn||e.toggleButton;class l extends r.Component{constructor(...e){super(...e),a(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),a(this,"handleKeyDown",Object(o.f)(["Enter"," "])),a(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,c=e.toggledOnContent,A=e.toggledOffContent,p=e.onRef,g=e.classes,u=t?"toggled-on":"toggled-off",d=Object(o.g)({classes:g,selectClasses:t?s:i,classNamePrefix:l,classNames:[a,"toggle-button",u]}),m=t?c:A;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:p,className:d,tabIndex:0},r.createElement("div",{tabIndex:-1},m))}}a(l,"defaultProps",{useDefaultClassNaming:!0}),t.a=l,l.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends r.Component{constructor(e){super(e),a(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,i=n.render,s=n.height,l=s?{width:"100%",height:s}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:l}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=i,i.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},l={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},A={padding:"20px",verticalAlign:"top"},p=a({},A,{fontStyle:"italic",opacity:.5}),g=a({},A,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),u=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return r.createElement("table",{style:s},r.createElement("thead",{style:l},r.createElement("tr",{style:c},n.map(e=>r.createElement("th",{key:"header-"+e,style:A},e)))),r.createElement("tbody",null,e.map((e,n)=>r.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,o)=>{return r.createElement("td",{key:t+"-cell-"+n+"-"+o,style:(a=e,""===a?p:g)},(e=>""===e?"none":e)(e));var a})))))}};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}class s extends o.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}s.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-air-play-button-air-play-button.54acb99fd796b3d719eb.js.map