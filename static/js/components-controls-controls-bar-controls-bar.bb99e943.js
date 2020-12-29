(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return B})),n.d(t,"e",(function(){return h}));const o="replay-";function r(e,...t){const n=null==e?"":e,o=[];for(let r=0;r<t.length;r++)t[r]&&o.push(n+t[r]);return o.join(" ")}const s=e=>e;function a({classes:e,selectClasses:t,classNames:n,classNamePrefix:o}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(s).join(" "):n}if(n)return r(o,...n)}function l(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let o;return o=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(o.pageX-n.left,n.width)),y:Math.max(0,Math.min(o.pageY-n.top,n.height)),width:n.width,height:n.height}}function c(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const A=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),i=e=>null!=e&&e.constructor==={}.constructor,u=(e,t)=>{if(e===t)return!0;if(i(e)&&i(t)){const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(n=>A(e[n],t[n])).length>0)&&0===o.filter(n=>A(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function g(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{i(n[e])?t[e]=g(n[e]):t[e]=n[e]}),t}}function p(e,t){const n=g(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{i(e[t])?i(n[t])?n[t]=p(n[t],e[t]):n[t]=g(e[t]):n[t]=e[t]})}return n}const m=(e,t="",n=!1,o=!0)=>n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t),d=(e,t="-")=>{let n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);const r=Math.floor(n/86400),s=86400*r,a=Math.floor((n-s)/3600),l=s+3600*a,c=Math.floor((n-l)/60),A=n-l-60*c;return o+m(r,".",!0,!1)+m(a,":",0===r)+m(c,":",!1)+m(A)},B=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),m(n,":",!1)+m(o,":",!1)+m(r)},h=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/ControlsBar/ControlsBar.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a extends o.Component{constructor(...e){super(...e),s(this,"baseClassName","container"),s(this,"selectClasses",e=>e.container)}render(){const e=this.props,t=e.className,n=e.classNamePrefix,s=e.classes,a=e.children,l=this.selectClasses,c=Object(r.g)({classes:s,selectClasses:l,classNamePrefix:n,classNames:[t,this.baseClassName]});return o.createElement("div",{className:c},a)}}s(a,"defaultProps",{classNamePrefix:r.a,useDefaultClassNaming:!0});var l=a;a.__docgenInfo={description:"",methods:[{name:"selectClasses",docblock:null,modifiers:[],params:[{name:"classes",type:null}],returns:null}],displayName:"Container",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},children:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The controls to be included in the container."}}};class c extends l{constructor(...e){var t,n,o;super(...e),o="controls-bar",(n="baseClassName")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}}c.displayName="ControlsBar";t.a=c},"./src/replay/components/controls/ControlsBar/ControlsBar.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./node_modules/@mdx-js/tag/dist/index.js"),a=(n("./src/replay/replay-default.css"),n("./node_modules/docz/dist/index.m.js")),l=n("./src/replay/components/controls/ControlsBar/ControlsBar.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js");function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class i extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=A(e,["components"]);return r.a.createElement(s.MDXTag,{name:"wrapper",components:t},r.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"controlsbar-component"}},"ControlsBar component"),r.a.createElement(s.MDXTag,{name:"p",components:t},"This is the container element for the bottom-aligned bar with player controls."),r.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(s.MDXTag,{name:"p",components:t},"Except for adhering to the conventions on class names, there is no functionality in this component."),r.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(a.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZ2k9OABHISQunJVwAUQqBkKtGAwDCKACA-OA4H9AV7SmRwaCEKA4BvVwjmNOVoMkWD4NQ5DASdah9DgViyMoCjJFItEeMo6i-JA8ihIEQjIPYZwiNgSxXA8WA3RNejGIQmAkIBQ9OKIdAsAtTYoDhTiZL_eTFJgSTiPYIMpWUuizSVO0NXYYB2E0Hx5Hs-UAAEYCIEQBlQViunacFUF0VFjlOAAvZwCESbF2G4Vz1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdsoAFkK9gADZCuK9YwBAgAxH1oESbL-GcQ5EUdTB2AABSEfglgCn44DKxEmprFqaBkmLLnYABGKqSvkcLIqmABBOZkvYSM3PIGwoHQcN2HkTlkrEQ6YxkdhUUSmBuGAQ84oS7F5G3WtgBO6BzuCAAyIHxkSeZKGaf6zou7g4flMBQgintUHadgAH4NgB8NI2uq5ocB1BNprKQZGrd8zFhFzMCw0IcMO67uFu6MSb2lca0TWzcNazIUmvAgftrNdRMEqiji3VcpC5nAedcPn9B-qQ2fJsxvxANTmJQjS0MSDDaZwvCtAoED9AYCxjBMS2retm3bbtvlzGMdhtXgCAUmCuBtjQEJ3coVFYiLLpHs--B2F5MwLbtqPo9th2zB8oiXPaT4NxoTjNIySQhp1jIAFUGn41w0Ez7PkLzguQKLl0BEN_0E6k5O2MzAhOLSavYkkZwFy2CIBE77upWFWvVVQevrMbjMOKedJ-ng5woC4TP58XmuzgIkex6TlP2LT6f2_gm9wgiYLD5uahh_CzeHQn1OW64gTeIANR40Jj0kZ-oFf_817rxPr-35unFdAP04vxMSYsRLcQomLC-o8_5QQAVPYBYlJCWAFAuYuDRUAtQEFEFGqD0ELxdFgnBeCgqwKvggpuSCRa8VLokDwkptj6moC8YUWcdaMJ2Cw1AbDV74V_g3RBu8M590fovSg8UzTHjERIqREoZGwPWJHGOJgHbsCdi7fWUxPbe3DsFVRVs45wIbjTbClpRHSEwuYi0ujgqqGwLAtWGttYsWEXfZBglIEgIgWA0W1EAJG2AnoMCIBHjsB8mAKAowI6SHgWHEIdgubeQVOaKyLlC7Fxou6aCnocCejbhkDumTq7eKrhkf0ZhyBoXwo6KB4kYRYFAugOwJSMipRrIwuAMB7A1LgAAOR9N0FKjd6kWkYRJEexMzB-OgQElgU0daDOPAddoszxL-ipg6MxdMSK0PEiPZxcF1KaWkKcHSekDILmMp3WSMBzKwECUBYBptwLhMidEkYzkHRGESTZLUKTHKvhHmYBK8xhqDjsClYA6whAjDgOjK4O0BCZESIwNyABtVEM4UgAF0rjYoKJdas8gQURWoFFAgClYDxWelCjpFgypdgKFcHKJULBUosgAGWQvsbKYQIizQsNUZwfgTgjGynlKVq1aoAGJ7Dnm1FVbU54hXsC8AIaczhposvYGy9YGrpyOGieWeUKRUVqsNRkY1aE7jLUbgkWY3TLXCi1SHbKNgux0BdZqjIopOwQDyNVRq7K9isAyFE0YABND1XBMCo1DfNAgi17VrRDesKgJrsqypWsmFadUVqtTVbidAExsorRyjlAApGqhZmlsqcr9GYUlW0KVTAmBKdAtKkrQozTxYU2aADs2oAAcABOMd9hLVMPNW0DA2bzznlaoWgArGq2gTSdoL3dtlWAYBXyJpAim8tNUiqhqtQIbVkpdX6s6a661PFbXdOypmp9llm1ku2uMS9Id6UwprPey9OrKp6vPYBm1Tr7Wvsg2FImn623jC7b-g6_7GXlV1e0AATDldNNZw0iliPELdbssrygiDMWDLaAzktQJS9AzZ4ixG7aHXtNZ8k4AIEhulh6FruvlC8Rj5A1WUB1QlVlOAV0ftbbR9t6BHAuGQ6xiw7HOPMbgDxgg7UiCdW6iAXqfR-rye6CNSgY0Jp-2mpZUNIwbC0CvYibKPwRiZAo1J6jX7ZjkkSGpg6LysxMwZZwZokY_NTDhiMt8gWLBdAIH0cwnGGML3IGpkeFgvILm6VFycY44uIaMyl9YxMqNVIQ6Q6I_FXQpVCzdQLEBgvVfC_KSLqHawxdy-0H4Lp_RpZhBRboLXos5YEOYULqXLpuZKzJ6SdyHnDMOm5OFdh5BXBM3cRmt0Wtfu2DARIVFMspUWxjScow4A4CiDMSMcKauRl1B4dQPccCsHiIyOAl3RiciuMiTkAFKBoCfBaN8331C_dQP9yL2VutBcOodkGx34U4FgLOCY10BtFim5sTsGR6W3fu1KHA23EivcWxinKuLPyrja8Nu6HNayMEbd0J6sBXr07U99VcQs6cY5yIzl6wAO2dlZ4LIWtO0TB2eszn9dK2c0-F79LnWOzuzEjPLo4AWWay413WQsBPXrtBVwD9gABqXwnaMheR58zrjX0hea6FsAFXxNbfC6kBMG3GvOSckd7bl3Ag3c7n5-gP3WuvDoESEHiwwBFuK4u29kYSwIDrep07xMoudfAAJ3t7oxv2gWjhQb43EBzchwl4L9ntvgA3buw9p7n94Cx4-yEVAiRvvncjJGGvjIljqET-r5PHPOPsDTxnykRv5QWkRAkfPnBR857Rsb9QRfxfAE80kNT7fnswE9-H8vZWCAVZoOv2vnuy9O5d4Hk_7vj8y41z77fHuvey5dyHsPZeXfUpgEL8nNYitkq2VMHZ9Mpk5I9y7-hySg6sxymsrEk8u8hSs8ZSWSCB1cTy2goWhgkgESkaXyvCUkvy_g_y5ogKWo6SDobkeAiQ50WQvS_gAyQy6mYM4K6YE0AA4jPLEKtvQQAXvn0ssjACNJhBAJ5CkvkpICIZ8BNJUjQODMZpCgdEwdQKwfvBwewKDC1hbFYJsGjiAsOOqt0GgNUqEJgDkN7B2loeUjXGHOoljDDHQFcNLP0sWBNhFH0nUlSlko0s0kklqDgOuDvAQIwBwRtgapSNQfhLwassAuYZDt0rAFKKEd0vcPNuwFimiAUPihjISrOJdInujJkXOAAD4YzIqoqMC5GpGzi3RVZ9Isa3TVI0HwAfCVxZJkoWCojRABxcHKFKa1h1FhFDL8GQBYBXBcHxG8EDGCGhoWB5AwBaLmKjEdQgZoiMiFYtHZYRgCC4xZZfrHQ8FDJLC9G0HHjjFYD7HVH0EEwXTLYQoib0oTC2A4ADg3FjYWDbGPQDzcH1FLYHR3FwDPFo5RQHG8H0rkGUG0DzHHivao4vFnGTG1gxE9zxHwCwnQk0FjFdCDHIk9C7EQlXAYqAl7EEj3FdI9LYkwC4qrhXR_GU7mCxgcD4nHivT0nwDfR_SnSEzyCkxxhjZFbhR_7HDWK7KuHmFgHKAuKnLuJAKRATQoHGwhIGBvKSAfIxLUZgrdCIl_rJF5HpFlE4qXS_5YDWSqmOhEAsFsHkBdGBYHHwCIoYzqmhpMnHE2l5H2mklOnlGFBwa8kGkuRGnyGoAWmbakmOkErumhpoSBBQBuk4pOF8lGkPgHR5HsCFGoCvyBACBkq-nCCapoBZAalDHsAplEBplLBdQFmpkZBLAlplpllFkVkm5uyEBXCFlpl6lenWRfojFBnomCGrKawA76nWSIzIxBT9jdlYDgl14DgCH5k6kFBLDsaoB0FIoorISlF5FiAN6JmbYIbEgvAQBLToDHEHRTmDHJQpQpkJBHbtBoxXAnmCFjZfpMnFHIQHQYq4pjY4KHSwDjgHQ5TKjT6MAFl0EI50ApATD_kQCG6G4o6rjhLnjURJB7AzAxDaYVAoxXCtTCjsDRIiacB2ABRByYRgA9xsDdATDuDsDnaSCQA4QZDsarh1aHSLkQkYoQBk5ZYol9HHjPmJAPF5B4CRi7kxAHlHnG7MXwCsVk5_Fe5e7UlYmolDI8U_Z_ZoxvhTLhTGB8lDlSgjkeChAAwTmvbTGzG7Lgm6roxeA8QSioBkhjlXCzmzjzn5LiWJE8Vrnukbkhm6ktZyXGUCk4RmVZGYx3njmkmvYhVOU4AuV4xAUsWk5JmFHXlTL6KTZRS2BaLFw5ApQvD-Q1Y5VEADkuTaUoy-AUGZBglhVHQZownrDwlxE1U1hMnqbVUKVHFjnNpXCBmfH2V2m1XvHqlXDqk1YOUFFFErloojViAumtXWnLklGTXTVcV8FjlRkFDNoN4jW1b1ZnEqGgx1UfH4TwAwU05fr7XZBDUpT7XqkhZnFf5CyMWRhKW2A8WCXvHnW3XHWy5yVnVyZnE4A0W0AbHpUCEujoBA4g5Pjyh3W1jpZ9YcXZaxZU4_XqnSWFa9aZYPVNWfWtZDbmAhWGU3UzXHGRVY3cnNptlFVIw6Ushng3hzoVQpDnjho0COCuo5m0CvYwCsAECfZN5LDdz8w2kAASlg-oXKl4_k-gDerN2Zi5HNgW4S2odWkAvQ9MEQRYg0Px-YeIwcs87a4MRK3srg7AAAUs4BaCJihX2CMMhPUPFLEF7FkerciEaFhaYVzSeH2lNtaOKHZClJGALa6PkYUVzbhL0CivoPJBlGON9rTfTQUL0hAPoL7QQLjGNt-R4ZkFKNkEzfoGNg9aHRxm0CdKHLDoXREKECXadojmBfiLdDlNjRYNgGiOaDnczWFjCNzUXZXZsHACTu-WjRlnocFoXSdO4GkOgJYMXb3btZ3WHX4LONkFPT3Q0TXYWPXY3Zna3egLnf5nPR8AvRPcvVXf3dyejf1quM3VnbQDve3QdKHWTTWHJajvmfqNEHgIrlgJGGyuwG_RMGdn9lfdvbvbhGVGkAABrsAWjRREAp0gX7pLA-0PZVl4Ae6wmll_0f1RBf0_2YMAOg5APZ230nhgMwBRpQMwNwPkaIORBwObANkEBoOrgoPDG0PINcATCwn0MpCNmUMPbcOEArHk3UZaVU0lVngADSO2Xg1EXawwIovQBAN40SOwUYBOcAU9N4MAyjpw226Ac1q565DeUjDClAsjIDNWrAv2OQPluNh0BOMjmqIDVwJjjjxDNAieqOD16jmj2jKjejOADiWAuoYAkYDjZjTj7d-OO210YgKUDd8N4T5jUTU57dJlOEadZeSTkTJ4qIImq2cs7R1AmTNOMl6lIj3pDoX66VytFwe9kYrgvNiQSwHgTTnj6wD1xtjWHgm9clWEfWj9FgnTnAMm7giIkMzsWQs9HgIzbREUMAEz2oUzsOrgp4Y4aCx4mx3TazBAGzMAuMvTdj_T3SgzCNuWAAhJGP0uWTXLYIMv0g09dLDtc7Wbc7QQ8z01_sVi6JU1MNU3ADjj3AdJGJQHdvZcAFdDVqC-oOwOc-eXTFALPdC40TJuiIPKrvDBCyi9ipXb3IVVUwhrYKKvEJ8ueAAI6hB9j-2NON7NPqptNXCWUUjmABYtbDPdOHOI3xbogwBn1D1Q6Ri2CAtSiPOz1CtV4iufNbEIbqM7QHTCu4TqOPN_FbY7aUTysSuKtquRg9N_HeNqs7QgVI74hwspTqM3hGu12b2DZctGjxAnMUmrgdm1PhgEA7SOBIwd2yv_XQCA1hM7Z5VwBK1gDEWusNMYoE64otMRs7Zk7fZr14B6vBYsAht1NusetZgb3w19P2u8uOs05yXms-u0UbEE6BvBuhv6A6sxuJBRshA1txuWuFiNZ_mD1w0PVPVwAvWuBPOgydsvU9Oz2rMJtnkpTvAJub2fmRgZ0QAHTDugXgWcAWgWj_nWsCuuCSWwvwweCSXXQ5sDP5tCxyVLF5vf7n1ZbhIOGcDxoxBxCIswAUuMYJQU5HO5uP3fOiPDksiYAaS9LsQgtgsYwQsN4QtbWHTQtnllmLhZbP1UY9b8uo6PnRIugoZwc9EIbChuw5mIspTQt_EKvROE4Afd7_XCjwUnT-vJCstl4PXiu46p2YeZTxANse7w3QnsQNsHQ_szB_suggv9BMdQAsd_Hwdw1Qk9HIcwCce4cCfYcNsifjalPQ02u5bVLsTvsU0OjFUjm_AZD9CYA6uUjgtKBhp6eLyJHozAdXAKuWkIZUAzBUf8m_uSeGfdLQ0PW6cormeb1frN10D5DUCdVeS4f4b6fwD_nhKiptBnS6G5CoAuiIj4TUSJDnOrgEdni6gjD-mDgZAJRAlt5-e0ZBRBce6kcCDkcCVlvUfX60cAuasB1NL-dBQsdrtDPBZ0c9whYiaJAtdsfocOfSemdecGf2c9eRv82NdFfUDCcX6w2ZbidCyjeDfce8f7OFcBeoAzfX5pZl5zcX3bdFgDeRv32Tcbfye7cUnQ2yV2OjflOUy_P_HSjCh4J7O-HNzAsdN6BpCmrNkVl9VlTlUDq61EoRahr-TIX3hgAABaGQlAjLwgzLB0xzMAoaTK8PVlFFKUJ7Zg7TT9dj4PCUTQMPQgYrX37SLbV5N5IztA33dYq0eUsOTKR2xQOUAAJMAGgDT2buz90gD9EMKPIMUOwFcMUOz5zzAN9_IDzxpNRPzwIIL1Mvi386Vs99EHs8C90roC0k2Tc0sC6CkO0eGm_QINsF5SD2PpFtVxYBnUIEjEYQdHg7bxgK9Vr3ANDTO84YYdkP0hL4bzAMb7sBFvncFqqRM5r9QC0luyMr9xJAlXhfcy7xH273H-HxgFCvDCQmgC8M3jB_TXmPE3y-28Fk7_b4BQk6jiX_n1A5X-gHq570YT7wbzEEb9RIHwWb783_7636cx2chPSng5GsKG9nb3mBgSOnVFVJWtDb34Tlgl3K71x33wkuP5P6241QhsMH0P3-_f9ThRscPxGDkNA-gH33P1sEn9dBgcmHVFPw-Rv4cF2xgEs7P6gPP0n4vy_2_2n6PpvwIHYL8tf0rR38ps2mFMvLRSgD89-beGvhQ1_6P90Az_OAGf1d6X96oDdYAVFE170oYB0DOATtCf6n9X-5_b_tA1AHhBQ4vyG_mNjkq94hm9fb3h31IoB8jcq4XfK92oQH4T-hOJYNBGKjfpO8drPrNdENysDVeuzdBG9yrZwCeBiAPgVwPT7xNhBog3BGrwkEcDU6ZAjmjIL4HI8lBNONgWoJgKp0sB74CwF8yV6PdXaKg7gro3V7-0T-tAeyks1oC48XihLOAI_EYwICpmKUBwXoVGbzNFmyzUGOczuauAHmfgnZnswObp0xwvgB_r-ViEtg0A5A-lGv2t5xDU-kfAvh03a4eCvBzg7oLDj8FbsoOUATepF2gCIVtoaLJ7jRE-RlCNgWwbYDgFXBwCDotgTwQvG8G0AjskQs8ELQf6bFWUfxTQSxjwpdCuAhQvoVkB2b6gUhHNYYXqj-JZD6UnQgoVM0xj9CxwX_FpEsPSGKcVOVOWgVYJe6GDb4yuB_toKWC6DR8Bg48JIIPxjD6C7QWQTcNzbCDThqgh4eoMT5p9TB7AcwZp2V5TYzwWCQGjXlFBIxq4wLY8BMCcBXAtmt0KxlwHjx6ABANeXYYkRj6uDsKcQ8XhiPiANBtQ9lcERkBrzEiDoF5KANQLsao42iIoREbiPurBZQh6IikdqFa7U9yRRI7UAmTHBkjCRUASMHCOGCLBuRQorEQkgrS38LupTWEnkxmBMias4nWjuyN5FcjqkEoAQIKJryCt1RUAYkcp2FwEiORVIhFgpwfyHDWynpVAGrGmjbA5Y_4TQNQGeQmxQkLWfgOJX4BXB-AQIYkFUG8AZALQv4YAmNHWD8B8MG3H0ewH4A5QcA8YnKOGJrD8Byg5AfoMhSCgxj-AcrfIH-EaQ-hgC_JckJQESB5g8gRKIFOPmLABjQQAgZMRYH4BRA0A2YlQBGA0BwAGxsYkAJgHmARgIoSdTsUgCyz8AgUrYgAHr5ocAuaacV2MbGCAtQVoSIBOKnEziVo_AQrM2mcQghvAKLSACkECSujUC7o-UiABhQgBaAvoLID6L9FmhaAueRcZ5n4DyAFA8geQEAA",__position:0,__code:"<ControlsBar />",__scope:{props:this?this.props:n,ControlsBar:l.a,SimpleTable:c.a}},r.a.createElement(l.a,null)),r.a.createElement(s.MDXTag,{name:"p",components:t},"The example shows an empty controls bar."),r.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(a.PropsTable,{of:l.a}),r.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(s.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(c.a,{rows:[{Element:"div","Class name":"controls-bar","Generic class name":"",States:"",Parent:""}]}))}}i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},c={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},A={orderSpacing:0,borderCollapse:"collapse"},i={padding:"20px",verticalAlign:"top"},u=s({},i,{fontStyle:"italic",opacity:.5}),g=s({},i,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),p=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return o.createElement("table",{style:l},o.createElement("thead",{style:c},o.createElement("tr",{style:A},n.map(e=>o.createElement("th",{key:"header-"+e,style:i},e)))),o.createElement("tbody",null,e.map((e,n)=>o.createElement("tr",{key:t+"-row-"+n,style:A},Object.values(e).map((e,r)=>{return o.createElement("td",{key:t+"-cell-"+n+"-"+r,style:(s=e,""===s?u:g)},(e=>""===e?"none":e)(e));var s})))))}};t.a=p,p.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-controls-bar-controls-bar.54acb99fd796b3d719eb.js.map