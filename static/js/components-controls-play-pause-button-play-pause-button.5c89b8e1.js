(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/replay/components/common.js":function(e,t,n){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return A}),n.d(t,"j",function(){return d}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return y}),n.d(t,"e",function(){return h});var r="replay-";function a(e){for(var t=null==e?"":e,n=[],o=0;o<(arguments.length<=1?0:arguments.length-1);o++)(o+1<1||arguments.length<=o+1?void 0:arguments[o+1])&&n.push(t+(o+1<1||arguments.length<=o+1?void 0:arguments[o+1]));return n.join(" ")}var s=function(e){return e};function i(e){var t=e.classes,n=e.selectClasses,r=e.classNames,i=e.classNamePrefix;if(t&&n){var c=n(t);return Array.isArray(c)?c.filter(s).join(" "):c}if(r)return a.apply(void 0,[i].concat(o(r)))}function c(e,t){var n,o=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-o.left,o.width)),y:Math.max(0,Math.min(n.pageY-o.top,o.height)),width:o.width,height:o.height}}function u(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var l=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},p=function(e){return null!=e&&e.constructor==={}.constructor},A=function(e,t){if(e===t)return!0;if(p(e)&&p(t)){var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(function(n){return l(e[n],t[n])}).length>0)&&0===o.filter(function(n){return l(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var r=e.length;r--;)if(e[r]!==t[r])return!1;return!0}return!1};function f(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){p(n[e])?t[e]=f(n[e]):t[e]=n[e]}),t}function d(e,t){var n=f(e);if(t){var o=t;Object.getOwnPropertyNames(o).forEach(function(e){p(o[e])?p(n[e])?n[e]=d(n[e],o[e]):n[e]=f(o[e]):n[e]=o[e]})}return n}var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t)},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);var r=Math.floor(n/86400),a=86400*r,s=Math.floor((n-a)/3600),i=a+3600*s,c=Math.floor((n-i)/60),u=n-i-60*c;return o+m(r,".",!0,!1)+m(s,":",0===r)+m(c,":",!1)+m(u)},y=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),m(n,":",!1)+m(o,":",!1)+m(r)},h=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/PlayPauseButton/PlayPauseButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),a=n("./src/replay/components/common.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return o=this,r=(e=c(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==s(r)&&"function"!==typeof r?l(o):r,p(l(l(n)),"handleToggle",function(e){n.props.setProperties&&n.props.setProperties({isPaused:e})}),n}var n,a,A;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.isPaused,n=e.pausedContent,a=e.playingContent,s=e.label,i=e.classNamePrefix;return o.createElement(r.a,{classNamePrefix:i,isOn:t,className:"play-pause-button",useDefaultClassNaming:!0,label:s,onToggle:this.handleToggle,toggledOnContent:n,toggledOffContent:a})}}])&&i(n.prototype,a),A&&i(n,A),t}();p(A,"defaultProps",{classNamePrefix:a.a}),p(A,"streamStateKeysForObservation",["isPaused"]),t.a=A,A.__docgenInfo={description:"",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"value",type:{name:"boolean"}}],returns:null}],displayName:"PlayPauseButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isPaused:{required:!1,flowType:{name:"boolean"},description:""},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ isPaused: boolean }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ isPaused: boolean }",signature:{properties:[{key:"isPaused",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:""},playingContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""},pausedContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""}}}},"./src/replay/components/controls/PlayPauseButton/PlayPauseButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/controls/PlayPauseButton/PlayPauseButton.js"),c=n("./src/replay/docs/mdx-helpers/ShowCase.js"),u=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),l=n("./node_modules/react-feather/dist/index.js"),p=n("./src/replay/docs/props-footnote.md");function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==A(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,g(t).call(this,e))).layout=null,n}var n,o,A;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"playpausebutton"}},"PlayPauseButton"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar button for pausing or resuming playback. "),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPaused")," indicates to the button if the playback is paused, or playing (",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false"),"). Through the callback prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties")," in invokes ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isPaused: value })")," on clicks, with the opposite value of the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPaused")," prop passed as value."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAAUoFcRIoLCOAYBvcIInMY05XaT04AEchJC6ck4MBJ1qH0OBiJoIQoHImC4IQvJkNQ6hJFo-DEMYm5qH9AV7SmZxhhGexKTdE0sMkHC8II2CAUPciiHQLALU2KA4XI_jRiEpDuMg9hnB42BLFcDxYBEzDsNw_CYEImTTjkhSlIXVTJD0v9DOMmBtN49hgHYVilnopD2HkUzTS1C0wAlCYMk8jV2AAMRfH5aBCsSJMs6zpFsyQB0oO5wsSkR_3kmKHSDKUUrNJU7VinzNB8YKMPlAABGAiBEAZUGIrp2nBVBdFRY5TgAL2cAhEmxdhuG89YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnRaABZ1vYAA2dbNvWMAQLin1oESRb-GcQ5EUdTBfKEfgljan44B2xELprK6aD0obLnYABGA6tvkXr-qmABBOZJvYSMfPIGwoHQcMgs5SaxBRmMZHYVFxpgbhgEPEaxuxeRt1rYB0egLHggAMhZ8ZEnmShmkZzHse4AX5TAUI-p7VB2nYAB-DYmfDSNcauXnmdQGGaykGRq3fMxYVizAwDCKApnlvGCbVxGVxrRMyoIHA4syFJrwIOnazrdTBMpVcXanDJydR4mxygwcMhieAllsAK83kXHuHx6NLZd2tGFYiOUM4gN44T2trIKRw9Bocmk_Y9gt1VzPM52hj0Fz0CCAL1ji7EUuy5d8P2J4YBW8rpvm4sJCCED3Lg4geByb7ge4RDuBu7LrdPdrTlp4sWf46ka3bftx26akc3NbMb8QDSqSiM-DcaHI3Q0UoaiWOklOmM65P2NTtCAK0CgQP0QxJHYJqwCgUZqoOiMCEOw1sKpahKlMSwlBMSwGfiyRqWFPQ4E9GkF0_Q8LQNgRxNCkgsFYhwVxVUqAeI1WODAfWoRDb2FgnAOAAA5H0MBA4UIgPVFKKDJCcM-N9SBHN5jeUdEQb6487ANXdEgrhnoeFEMAVMMaAifKjTNEQUaWQADSMBEhwASgIXUHgkICFYNEDqQUOHIM9NZDIN84IZGrlRWAAhJD2Kvo46u2BXzELMAo7oojkbphEYOOw7NgDrE7khdAksrheCvhKVAW1e4ByDiKYecAokox8uE7I0ThAUnMFHE2rBKBcC2usbOs53E0CuGvehxYEn9jbpUgg1StQ4FqZgMw8gvF9WoANcgtCGFMORu0ayFoK5IQtB4e-_ozD9P8HYR-DF4HmA8XQdAoDWnrlIjQJOQT8ahJrKiEx5ByGUMNn4qaByXZzLoYw48LDIBYCuHrA2BAaHzLucwrojz1hdN6r3AgxziZoglKowFtBNHaN0fowxxixZXGUaCtREKtE6OFDCjIcLTFTQANrtCyegdoABdbpFg_AYAMjAghyNIzGKgIyHJsT3DR32auCAzRIwTFsDgHKdwcBj2SZPXGVyE5crgDyoJ_KkmDxSfAP2BKrh0sZDjYhLsm5_PThYb2AhjYiosHDQRBKySNI_jQMk0kc6moIEsWCgQoBLBuYM-53y2FmKmmKiVuU4CqtrF0AgfRzBx0zowfBcD75z31QMz5Dy2Hk0ddGl1WBF61lsLqVA5MCXJsjR8phcao1MKzbkJC2oKGvPebc26s5yZokZIW21C5yb1qgIW6goaybAA9eS9AlLsGFoiNg9Aaamnk3GdkJpfaqWwEHWAMAw7gDlJSOOuey8Xafl-Z03qOsHQvKodBW-T977EP3ofKy0lMpnEkPJRSyknJu00v-QC2gL6f3Ao8H-f8AEkJ0sA_w7AwGIMqp4uR_Dug-VYh4SU2xRFLAAGpcBgJQRFPpkXdHEaJTh3CSKZgIORKxTi4OYEQyCphTifFwD4ZIzhR9EhWlLbuj4dCZk0E5r4oJyMRXaquJGAjCGkNgqyOwEJ_t-6CtSVccDkGLn4yKVwHGJsal1PWJsCAKRCDpNRDOQoKtukGt0KwYOojoEoZpby-4vlpIQZ2KIzkVweNEZUcZmO00awGqObQWz8H7NIvBd0S5GqLD6PUFsG22xUWRlM5yHAV0BDnklHgSMoXkhOb1cXb-AASOK_8RhxTYfqbo9hNgmNnOwDwyQiBsIKOZuClmoNscqOwOzfGUM4FXLAKYSrfP9iCTixLJLVxwALOjFGiXhVzziIFdoSFYBSmyPDUILBKCWEyDsdoiAI2pfYBlrLOWsB5YcIVmIxXSvsHK1gSrEmrN1YwA1zzTWfMtYzrWNzMA8W9AEOGAgc2FtLcg8S5GHWfWZw8GabYgPazje6JNhcwXsiWA8T9lba3HtL3S5l0YO29sFcipV47p3zsWck1dnIjXiP8doA95uz3Xt9A-3DrABAEfbD-1NAH63gcSlB3PHdhskfNzfVt9HuX8sHZx2VirxWLu1a9SEa7JOHP3fW1T3r_34iMjB-qtdNY_UBuBVkYhGrZkDN0gJe9MJ6drI2eaHAWzsO7K9bB27pOUOspc70mtUphThaCeJoJo344MjhF7r1muXYeue-x_zQV_kbYF9loX-3sdHbF2diXBPLvS_q3L7zWR6jqSoTkEYwpdgjAXFAI0woTuUAGtzAk3RTMU-E-PIe8ATPe6q4kGr1mTZh7HChyMemDNBKMz5oPdxOSa_WNq3Vq4DU-QFTKyeSxw_BXdYSMHs_JxrIyEsZTqmpgr4JNy0z6-3fAtJsjXfhApaCNxOgCYi1wZLSWgAUk2r4GAKmr_BSuD5W_9_5SP4v4SyR5apjg65BoJyxiyDrZQFn6wCjzUwwDBQrplywHxq5r8DUYWgXxURwCTKuACD8BwHtq1R5AxBgCJBNKLSIh6ACDAG0zrYWDABT4-QoL8o-ZL7SoTypI4yFrqxxhzz8HQHxwh5R4qzaxYBeTc58Qm6UhHpKAHwWTUbnp2TXqOQZBqT6QwBuSwCvxATPpgQgBvq_xZbAY_qW7lQAYQLdI-LvTS6XKT6jBpJXDwzvZwSMA-Q4oaYFBEpXDeHFYMHaawyn6AruSjSkx2AOHbS7QFBXBLT1KhGwAAAycE-wi0YQEQAMFg1Q_EnYowi0K0hREMx0AAxPYOeNqAdNqOeFkSVsKNOM4H9LEewPEesF4AINOI4P_OWPKCkJkIkLUe0Z0a4rMEhNQSMXcB5PUkMRkOEbAItDYF2HQIMfURkKKJ2BAHkIdOdPUr8BkB-iMAAJoLFcCYDiz1JAwEAgxgztCQw7HrBUDdGLQlHgzJjgwnTgxxS1F_54AP5P6v71IsC_TSSLSJEeSdI6YhGFboBzEt5RH6pXzCjPEADs2oAAHAAJwYn2CDGQZ9FtAYDPHnjnhxSfEACstRtA9O8MUAKmC08osAYAr4FxIE1xD-R0G00xqxAgjRkozRrRNYMxAgXRsEkx4xCQox4JQR6cBqaIsJkRzmFg3JvJ5A_JXJHRdiExYx8ojxopWkEJwRqAA0BAMJiBCpIqO0XYzR7QAATEtPcTWPpiknEFADSXSaCblD1NKbMiEegM2PELEPKexusGwSafKSycDIgYtC8AGeQLUblHyWNHETgGSQaTKb6Y4C4GacGTWKGaaRERGQQDdOVkkA9CAE9H0C9JmaxpQJ9N9FXn9FMesCMDYLQCqTcT8CMJkDMF6Qbj0kaVMLMOSIkEGVNAYVMMlmEhyuOZNILO0G-Iqb6mAQIOYCaf6bSeQPKT6sFAuIFCltriueMFXMWFueut6f2QNNFlEG8lasjDOZOTWOyijPeXOQufucueYO0D8C6P6BYDudRKBquAeeYOOduWmT6QObpFoToZ1n7EICMGIj7sHibCKgaoljeMJFNPBXYNLNhTgFEDMJGPBSbJGIFsFjgB1nAERaMDZjLokJFuoMUqgE-BaG-AxUxSxQuYtL-ZwBythYJuzHhbALOBMH7tcqftCRocjGRVKDgIllRdhTiktESqIaAf6oeRAS7IwGCcQdWkZLAPKYEc3NpdCbpR2tCYZc7KgWiGZXKWaUZT3EwZJQIOKgRZGM5SRYwZAYWIluTO0M5axewAANTv6dgZDBQkzwEdr5k0xWWOVOUSjTiFrBqSATBxVlzj7JV1ipUCDpU7hRSdh5V1gEBeDoCJBFVMF4VuXUUjBhwsqmzxXFVHC-XADoXCQhXtAWjwWBUhUQARWIHVo8n2UVUJzACkUeBBayWUU1W0XIiRbVUdZLDqD1WaWNXFU5AtVtWBQdXYGl49WcDBXyj7XqD9WkzkxDlJDym0qq4wALwjXNzABXnRBNLXX0q3VZUpUmn3XzwLxeX5W5VeWZUwGpWlXlWCGpX6UwBWWiGqx9lbpTDSFQWuSQ3yHKAnoZSyTZRBL5QiBJRFToD6FWoMB-KzShYF54jsCAAbhCEF0LkDMOgFkOTYWFFOwH8IRsCiotFHYF4T5l1gvokESpGJZBFOGIiJIJQAYpipDRaBpqCjLT5rjH4H8MVizRUMeOwKgEwksC2cELoC6DNjkMdizTiqUNQPrTeZRFfPLMUOwAABK6j2CC2SAEGMy0BSh9AwAUTm3ZDYEgS4ElF63BYFAWhRS-2W3USRZWCbDsCABwf8UPPtwXKpyDbS6VADVnzTMJwHYKTXmAWPiDHYAOuEJWWwRcE4tgRYqA3tOQ0WGw7g80c4LN1k6dz29Q-owo3QaAV0nAq50dLtrZwWHt5CcA5A_QMwYsewzQOKBAheFoIwcExw0QrgRoWWTtfdLwA9XQ4tTpfwMAIwJRBB2FFolQky3g8AkWe8Ch6NZ6J82yOGTw6QGCeCk6hCnUbayyehT6RNr638Jhn6pCQCICf6Wo4C5ofCPkthAS1AAA4g_bENBqOAQJCl4AQTCcMCKL0AQDeP_DsNvr4IkFjFkOWk6i3mhmZBYsRMIrIunLYRckIt9DA-gnA2xiEusMYMAs4GOMOOMOiB3c0CzVMmnMTMMPnsXd3bXsOAOnsOYG1JgPULyGEnAGmukjEnkvUmw1Hd0E2vmNAGXkORKEcGgOIzEAQCZNEGiBAAI90DXizUICIOwCGDCFeK6NY9Hf2tSgIy_OwPIzWE2upuY7OGoyYBoyVvfBXTXFw4EMcLYFYgXpsD3d0B4yyOXW41OhPWAHI3yDWCk9kLqDOk0ukgppgIE8AtYAk6EzOREKI0CTE_mHE-I4k3SHYNkzkNQBk-sM00OlagU60u0jAMU-wPDKsAkOnceBME4ASNENowkKI2gEUmTbU8EPw6E-Xf0rEPM_VizR1hIwQugPUJCEs4I34AEEEKuc_S0_Etw8quXTtHQnmJUyzanTVm0zWK2s_co7knEoUsUosKw0E4M485BidmOMMDkLM5QPM3neI9qnmA04461PoEsDXVdL0HYDMH0EKEhOKl45k0qagOKGAOkpGJLLbZYPqEkZePCzQPVTJugOBReVMBBkhEQ58sMtk5MtMsQgatzLOvmurVNO0M0xaNy_6Fy6gMy0Mvy4K1QxBQNFNsFrkzy_MnCT0AMnCfjI6vADgNk8sgq-wAAD56sqtKvirauHoytTBytShDqqsKkauRHqs2tavP06vmAGtGu3MmvOtmvpxsNFDALigRguUhAhOCOQvT0jjPZ2AWjbOpMsj1bcv1AADqdTqzODiwnAUwBEGoAQgLLNuUGL69uu5OfrmTjqVgXrgjqyGAFhNsNu-gdudwLuAKQK0htDKWDEJaZybyvLzRNaTINYfZZKlQsANCazNK9VHq9erz2CAlh-4qU7qAbakYAAhJO5Kqmh-KStMBSjAJCtqKMOYFNGeEg5QCg-pOg-EFg6cKFjqniueLQW_hLMShPjWF2rAJCgAKqZ1TQJZaLIMdHnj6ZVLsAnsoOAf6D1UpZPm_sd6nsAdAchZaKzn8v3u0B0H6uGuJb_voDgc0ByVIcCz8vyhiUJxYdwc4cIcSowAIeduvLyxg4WCdrDswCjs7D0erjqpbtT4kcImQWZKKMXNNoOq8t9PuvEMxpYBLAdNitWpSdnMKtNJLDUD4vCfGtupzuep3An6QXZPit8tZ1prX7UB6fdBXDcsmfad9IicKl4D4OZC0AmdUUpbZoev1IuyWvdvGtXAbvX4efWtqd-HQ5Wt5M2tufg4icSdhcufENmY4roHHhLCMsscidyfYImdEoceqUV19K3lTQ-fSzSdNLsBXAdN5NWpg7AUNWQEyDrZURkz8ANP8DrYEEQCuBjJdC3Ptwbt9ovBRVNotpisbnbDVqEj4DMesfbADefszAjfcpvu7taJftTdaL7sjDprmVzfMd7sHuFrfLkzKcUKFrxftrHdTzrahENARhYDkxLQOXBpEwXdXfkwWjgy0wMxWryBCHpVfergw0brpzw2nKvLlvYLLKo2KGSSnrHxYZkQUPfQf3vx5wGDf2_0jC9QQM2vsbsA82aa-FSz-Fzhw2SGxQQORD0OwPkBtsPE2vpKSxEOhzU85rOqsJYB-Oab1LHds8FB0uA-k-UOoBU8uYReJpc8BPrC-N-H-NaZE9eS2EPjIwE_6sa2hBECBACA2EsaOj1FoBZDmnsBPLK-q-4P3SG9q_a1cD_6oAq9m_v6f7NKm8ZBBTdKA8GrSEmcSfDJYFMaA_CyiymIDgs-Ode4s9XCSwE9LBsGa3HhmauH9GMBh9S9iC0WK-oWn7EgvAQCgzoAe9TQB-PKznK_TPSzznFddYs8-q6Yiex_z24p9aAwV6RhtYHVTRLTKgHWMAa1MLirCUpATBt8QBBVBU8cbaxYCBJB7Bj0Ci2AmLUBXC6LsD_y5RZ2V600UIRRShsDdATDuAnazCSCQCGwZBsFsocpR_wA4oQAqWLnXJV9uGJA8p5Dxbp8xBZ8e8hVn9wAX8qXq5nlqU67HfV97-jFNAE-GI765eoxgH3iLA34sgpkTMIPh2zozUIe2-0KWCoziRkhE0ofcPuwEj5d8XCd_ePgTyT6S9NMi5SrogK7Z6dKs0sPPmwiD50DJOuAlBB_wVid9o-SlIlBh3lD-h5A3jc1lnU7ZoA8weXWgHKCczr0iAzvYng6F94wDzAtnAhg52s6oxGerndYB53p5wAOe1nHQUzy-Qs9OkP-NQZi1D5aD6kmgm1lcC0EmwE-ZAw1pLEAFEDE-egitNH3SROC7BBQMQK4PE4i9SB3PFWLRS8HFYRU0HO1rO0sHGth-rmILrQCriY8poUQj1v3htZZdoOgAnALYEAGRgPOY6NIcPz_6Hk8hCQ41lFmgBodIwtgIQS6HQDsUQBT7LLv-T3JzxKuJQrQT_wHaONAo4Q6zsP0q6MCg-x3SLswI-B9CwK4hAHjIOlDQDx6Z4G8AST2gpBcON5bXprVoBUVqO9vZEEsGhyOx0kJLMlhS0di0VHAaw3XouTfTah2UkAXoIbC4ZAg522jQsN4XKgKJKshjJegAClnAQrSflEDLxz17-ukGIDsEqyVNkQ5eI4CzWo4ngHip-a0OKHKg_s9hroN1lsI-A059AhkOaGOEizzDFhOcWkvoCREEB2OPjThh4mWzxCVhPqaDhiIiChB0YLeNmDCFYA2xGRzI7vnQF774h8YS0YflSPNDZAVhyMBkW0C5GcDty3Q3hijAxHow66sOCUZsGCTsx5R5KNIOgGgRMiVROAHvoWH5GCj6c1IkUQhzFHsiPgGopUTqPP7KVpRu5QCvHCFEG1RRU0LYRMKKHmAUsBvfUNEDwD4VXAWASMPEXYC-iJg-FEAc6JpGUcdoaQAABrsBo2iI8ioyWtSDQiApInAD8XHxhcTeYY_0VECDEhj8xEY5ilGNNEnhYxMAQ4omPTGZiIgMwJYMmNkqX4CAOY1cD8WeSRBMxPxMLq2K7EZjyKrY35OAKmFeQ5BcwscKBw6LnsCAGDK9jgx1TyVoEN4ZCNgzJoEC4-xA2itOIo6ugnMNLcgR-WGx_tyOKwq4LuJWGQcT-J47RCuLXHXtsgWQq7rkxg7YcVh-HeiuwDEAt9Ch7AMjmBxjFdAaOSAskVlwsAAT4OJ4VELlHHiuAUgM_Zik0JHH_cJCXkA1NUJuEXAswP7VwFcB2ElZ8JqAL8Q-QsDQcl6hHErP0OPH6wAKHo3iijCXpoAjkfUBDM0G1ACZWRHgbuixMRA14OJyUVka4FPBjhLAAoGAMbEonvAzwYk48PLGonqV0I8QJCPRMq7LtIw9Ca3kf1sCMJ6EkYVwLjFZGaSjeAgLIYMj0keBx8-uaQehNPypoJqwWGlBLXUCh9gABSJzM5PYDLspoVvaZqyOckfA3c6ID3EcEoluTApA5YKREHV6bpph2XccHAFyIJBRg54AAI6hA-wuEoiYkES7ZTaK6AnfqRIYn6TkOVE6_pvkUmXMYA9ogCsVPsmTUyRBk2dvVOCyRhLJMQ0_PJUGZTQZKiHbRPpKy5oVUUN4aSg5NkryU2p6QjlF1L1E8jCw3kqaPJRvCzSRKeAP8ZV1okqSOOM-BEVhI-zwxHAIsCcv-NRTwxyhh_JcQR3xiYSZ02ExqT1i0REpEuD0gWuPhWm8iwc0HFgLdP2mHSswho8qZ6KNDKTqp20-OJVyWnnTKhiWE2DdJFr6A2pL0p6SECRlvT9R-ISia31-QyjipmQ7IXfwGmzs8ZcAHIZZNnbCT0ZpU94OjOH411G-nDCAMjAplzS8A_fC0BaDb5_jyJX_LyYLA8Bf9cYG0kGZ0K9jHi-2NUlofHDfS1JOAZxUEX2BgDpSAyY0ICjROFlnkZesUCcaYkwBWQaEpESMM5NclRwf8wUMIRyk8mCxfJUABSTrjckSzHR4lSCv0lIgR5LOBwfoPNEyl7AJqYOXqZ-KorOTIs0WWLOjBg4oU540HFqVKENmeydeUAVGX-MjSkQkZyMXWTMH1kuhY5KmeOajIY5mIHRgM8LinOVxTRhQOczWgnN6z5zp4UcCrseJdkugJhqsNCVrNmGmI9i72eDG1MpDGylOTpfoOUGNm0Vepi5XTLlCSzkI9Z_8LOUl1ELQdO5g8s-uVINRVt8gs_byAfkXnwZvUG2PPJjFEYix9a8ACoAIESDLtVw_ss8LqDW5N4RQiQT5FRUjBryOopst6SHLizhyipLcDlNHLJEvzqAicouWRN_mKMxpZIqgDMESBALnOCcSBdAtLl7AB53c-BUjN2Hm4jSHUPOetmaGOye4qCxBenMzkSSAFqAbBcjjEKZxcFwCosFAtTluiMF68shdXLni1y_uWuBuRPNHGtyHQBqJ6gznEl1scJVXNALQDSA9EreJkiwVZAILRAkSHNSrPy1qKtQx694MAAAC0MglARlHkmRibS-mZSTsDos-buoeGZga8RwsqkqKxoTQTRUIGal6BxFpUlaMXwljedHFjvDvo_lnaWlr8xQJaGlg7geKBA8gQJUhB2j2dhQ8gG2lcGKCBLRFMAcRaEuADhLZF0U6JdZNim2TIK_C2SbBSQi6B1kVwSRTbxdAISYg-mX0QIG2ABDis_LVihYosBN8hAIsTADkCmgliWlGAXIVsGoDrJRCTfNAP0nmzZB6EiSkxJUoIK7AlFdIjlD4hrwFK-ldgBafKBKXRRuBOk1wHpMWXVtcYbrHZeslKmXdIAJCMaP0MWEiCWiDs4qV0raV1gWi5y1pZcq6oXL0An0vqPSjaVjLylm_KpdMo1rjKKlMAP5fRNd5wQFSJYj9J7luV5hv4aJE6AdCfyiEwV2iS7hw0KUKkGa2iLxuwHhWIqsZruSCsIyDYdK_RUWRfjqmopPKcgSY8FWit6W7Li4q0E6Eior4SVDgJMjABxNRWoB0VSytOXSt5UMrDlIVYlXYGATJgWVBK3jgNHKxW8NhyMSFRSsjBUqIwNK3wByvhhcrBVfKxld_BZXIq0-WwBUjCvVViqtV6AblXAHpUYraxcq8IC3mAQsqfUlXVakMs-WjLAVvyqZcFVXC5LBFMPGgJGCxXaCPQb-PtoixBm4wgqfq4UNeTyVCKyRYqpYKtjfwhrnF0a2NQIHjUBqMwCM-1RsJTWIA38-izNfHH9XHhE1PSs4O-AsCa5NZvC0_Pwv1k7A8lNKBmu5ilgCTbqEcwlQNFsAwYAylqgTFNA7Ud0By7gPiexM4nsxl2myvSWOpEkCK5JVk8XpwzFXIxpVC_ThgWuVZbqm-ByhUluqjlwBB1tJYdYJPZhjreZhfG2eVLfR6QEgyQOGFFKhHL1Rgt6jYFsG2AN4yUHK5GAOqHXdrr8i6s8LbQ5XGw4iYOXdQqUA3nrgN0sUDWOH1BoAHVVFNgVusSS2q8up6oDQJkQ054zwuq9ZJBquW_8Kp4BLNTmsrWBqk1HKotSWqjWHUK1LHWjZGBg0MbI1AFaNVCOo2sa81Qaw9bWvYD1qbJsUA1GeEu5oc6UooI-Y7x_ajMQWXGalt8zDi0E6UxGszGsoECNLt144dTfEAaDahQ-UmqWlACM3IxrZLq48SliOQihlNvazONBznUGbzN2oJOd3Wk2GbtQCvMcKZqMTxB2NwLJwGpq81QBNNOKwAgKJrkccwuMEmYA5u_kppf5rmozR5v6T6N_NdKKoalvc35yyJuWyzVQigAxb44nHNMseiUJQ8AQN9bDLhmkjWJWImpcOo4mcR-1XEzWqkjbEfSI8a4X8d9KYS_ReRzCQDc0CAyVDEJ_68iTXmBjTxS47gDuQjHdiyCLbeMTuHzJCjETmJJAWeEjKlRYzkYxNDoWwhiiMQsd4gadQFj-08K7aycC3bRHj0hHuTpM3zYhLz016nbKlwW9pSjFu0oZNtSwT7eduGaQYVNXAN7XFNsIfsfgktM7XljGY_agd8OkFhDtl6a9Luv0YLMjvGY_t6qf2nzKjpJ6a8OGImBfKkmx0_bJcUmVmq9qyVE6BEy2lFFCnRSw6sULIKaE4Px0aJUUYgQncdo-2s7LU4dZFEw3sKLlZayGDbaimhSs7EJ6SRnfdrRR6JZdYsHnpDs14uIEgGQRGIzPhKN5RM8ABFFwWbxwAKduxVnWDElhI7vt9SZifMClBXAMd9uggGbvWBs01tnNHopLDXjHD62yIHwesBFgS1YUYMa3QjrTIYTTlrXKAO4npxnqGUjoFrdrpmC67xdxu2VGZkkn7IlAbux3J7uKXFbbdRpZ3YltjhuTOQ5ukPQXoSD1Ig9Fu0vZvIj2n5NdbiD-PTmRhrwR6kUVjXoHpyMAW9yeiAI2DQAZ94gseggPHtupHaEaoExPZfC13Ck29BAcHlfWh4Ca76eGHbXntBTWIyMCPYCEj362o8IB38SwAdrfXh5g9UtVXenCm0gZBEkDVAAwwyCi6FtdDagH4lIYehyGMicWNPvv2sRHM8oHXhv30wSxDWk2QFCklnDgH5QC6WAyMjbgIGkIMAbYAUAQNTIfp6BvndNoESsQ26b0fln0taiVAEDtJMA0r3aDkHsgrAOgv_tsLnh3swoaspNHWAQHnAlgUUOeHhj6gAA-ueFFCihdQooXg5YHPD2Bba9CXUEkV1BQNDivBj9vQmcAfsoIUEYQ2Ie1BekLA7Bzg9wb4MCGhDIhvUIm3oQyH4Ymhtg_KA4NcGeD_BwQ8Id4PVF7AuoaolocoPWG9Ddhww44dFB8HdQH7SwFBACO8GbwMh-wOogqJuGdDNh_Q_YaMO-HeD9gJIg0HPD0JLACh-hPDBgzwwGgSReGKEZqKWH2gHh2wwYeEPe91dDO2Ef0DGjDI4o8MSwPDCSIIHE28MUUPQgaD0IoGCBzo3FF1AVH0JRuSXIwaEBHAq2hykYxXlT6RSmR0U_vMWCuCTHF9RTcYFsDwA_B_4KQE3jgOj4VA0govFIJwSdIvATeHDY47Uf5b1HGjzRpfM9BgBLH0kc1cqQHijC7H4JU-1cB6keFjliwYOHvOccnlIQATfx0bm7XWOIktjyMMExsZgSJAQT3KOAHcaWMK8kTTBmKQO3hGYBFjaJ6sj6iBMv6kyukaoycZ9TQmIT2xqXnidROjHsp3Cl0JUe6DwxjE0ASGozhzIQTVABx-pBLwUVi8fGddDKfsdqWHHmQcc1AOkkmzwYLQ_8MKoSkoNoB5aKiWolwAONK9tNautHQIi53JQ9dBKd5kyniQKMUIWB2cPqdUYKMOGqBgoGaYwFlIq8GfagOkm02Ak-gcugvVIvWBGRET9KWgFBHtNix0k3a-pF6avgOq1EIoP0_kADNXAgzCjeGAQCSKb9zw6AIU3UQNP1JrIKGdJIAY4JlJpIBBmANmfzOKZHSoZ48E6a0kCBbdpuh1ZEmMXuBqzUECADMCZOuAWT7kG0w2YUZNmWzoBws_WcNOPkSZEAAQKxFbPtnYAnZwc2ROHOjnpI8MPs1OemKhAfps2aEhWY9MuYsRt4F4PZ37MO8qzbRXc1kB2y09nTR5tEIQ1mBnnKz0xY8xsI8GEDtNAerc-9mxHw5ls2wWnuOdtQGRPzCRD85BmcIDNCBP51k5-ZfP6ptzn2ebAMEZzfnmTv57Qv-c9OwXFsn54C04LAvuRGckFmEGicePESNT9O7oNqcV3Iw0sm2xgGRd508LcDpF7fZLqyCT6FSaWFi9RcYt3baLPrU_efsrhiM-4OlevHTv50M67jbJvXRJGFPcmjIC4Lk-sDQMYB5L_J2cIKf3Ph94RSPM_fMGUtQX4Aj5uPnPigP29nTMIQkgeYdRWphTQUasA2vovxQ2zc5uCOKHSnwAiycayZvyyvIdrXAGBnXmfIwOUgEVAxkiwM3QDGJWJ2fObRWVwidYRUEuogB-zH7SXNLNcbS-pal7cnYgdAJCElagC6Xjg2a9KwVbs39x_THUDc2bwUaJn9MS59poBZ2CYXCBMVxELhfqSjNOwi9QizlPF7ZWjSMABc-lNsAOnUAJaQFNAGAspYNyOVmAC5cZCohbaiVDQukk8IE88eivHPeWscusR7AQ8W4VkDysFWLAt-ajsII4ZGJsru1lJPtdoCHWUrW1kc6xDmtuXdE15dJDdEevSRnrqIV69EDC7jkHw54Y0eaDDHoxumywyQkrw0vxwAbdZ3k1pj_LEXRLviaK3cYV5S8le8McK5OuyCS4WroMn1iU3P011BLkNDOuKsyZ0X79l3UfVACp1sZdTNZ-IXVdLP0pyz7pqq0OYjhw2Cp05krPefO0zBKr2-C83udPMc3HeEBwsQgblW9l6Dmvem2LppsxB4gitocCw22jlXHTEtw80OfjM1X7jKZ_cxGu7PNmFzQKlmzOfhifW4IOIs8E2cXFwZ8gHZkrjw2kXTZ4hdOBnJ-YQttmkLjOd2zDnQBfY4LPtlwohfAuQYkb9l27RkAp3mkNB6eyeOJjm3U6aWCRGwB0QQj3ymtPRZENHfv2x3RzDN9_QL2YaXDv4ugSACkFdPRmpYRd3ONXdrsdQLBdx2nnjbuMAX6cjOYC44OaviWILvgz5AVZH0q26bqdoJOkmVvR61b2g5kHi0SqJB0kRd-O18xKTz2FdBWRUcvc4uOYXt69l5mXZgQddgLfsWEcBw2tg6fmh94YwRZTvVZIMyJg8d8wLu2EG71AJu_Z2xSLlpr_Vwa6EGGt13JYKWE68rTBiwLYUl1va7EAOtj9ae0NzOHnXsBdA5Z0e3u7zdi1-rtrIJIuZA8RBXXyCMD263A-wGZW54SDlB_oDQe09ebUXTfK5Z-seWCAtPD605cSDfX3L2av62NitSA3gbUoUG3gFp6RhxQENzOoawJ7Ca_yYXayEGDKrGDHsFD7IFQ-Uk0OPmawMrb8navuB2Ubljh73ZAd4hkHyjmgNQ9D4YOB23JmBEkVhH5XFoUh-hDUUoNlHRQLRtox0a6M9H6EfRhA9URvAftujgJUCRhQwA_Ebzm5_VEIDoS6gxT8Dsh9tGkjWrUAtJF0Go_TO9X9MyZtIFUvmjhPObFgUdF-zHVZb4geTsEOeXe1anOLGQBoL6FEQhoPMS20nM1s_uIT8YU0Iu34hZjrBH9z-jBF05Xkf2VMzd7W1LEsAoTUAlWyHhlCwLSEGMb8A_X1vAhLwTAqztZ-s42ebOtn3jYuMAhLT5AUgnUOAIpZCCHOq8oIosLTUiqOrMmbDbZ_c4edrPKbqAJqHfvaC1bYem-3Ox-waDVw2z6CGxIkAyA_O_nwg0yWcEO1mBXnOkd57RvIhoIX9eEDhh7eFDOQ4hwoeZ_6GhdeRYX6--FxT2cjnrrEzgIl-C8YzEJsXsUXF6fDvoIvH6yySQO_QhdMZKXDoal7fXPjtbr4MGMs57R5ds3_wzLil284-dnwKI8-8iJrrgAYUnEUrmV5i-FcwvRXd9HAlfHIh5KUnMAY5Uw46h4JxJmr7V1w7FgKuoXIruF-K9wKAuasbdU5ai8lw2uXgGLoV6a6VfmvN9RdrfU0890mvNUuzx56s5xbGB7Gs-454Y28Z3P_Xzz1l1MHaDSExkDWpxHG9DedRVA2AH1_vD-jbB3jr8agITUP3gQRU_AM_vwCuD8AgQxIKoKfQEAWhfw5IJkCAHqT8AnSTCkt-wH4BLQcAHbpaJ9HWD8BygI9Zs6rqQBtuQAgzfIH-DNw-g635CckJQCBc5A8glWQDL7XKAggq3PbmsPwCiBoBW3_AVNxoDgAbuLAfbqyFvj6ipJW3KWTAlqF3cgAAAeu8RwAnQcAyYI97WGvfmhwokUTYIQWHf8AH3OAcGJ27ffHvBAYUa0Le4ffPvn3r7kABrOPRrvcAVdlTDm8mef183IAUJCADEGERaAJbst2aFoBdUwoQ5fgPIAUDyB5AQAA",__position:0,__code:"<ShowCase\n  render={({ setProperties, isPaused }) => (\n    <PlayPauseButton\n      playingContent={<Pause />}\n      pausedContent={<Play />}\n      isPaused={isPaused}\n      setProperties={setProperties}\n    />\n  )}\n/>",__scope:{props:this?this.props:n,PlayPauseButton:i.a,ShowCase:c.a,SimpleTable:u.a,Play:l.Play,Pause:l.Pause,Footnote:p.a}},r.a.createElement(c.a,{render:function(e){var t=e.setProperties,n=e.isPaused;return r.a.createElement(i.a,{playingContent:r.a.createElement(l.Pause,null),pausedContent:r.a.createElement(l.Play,null),isPaused:n,setProperties:t})}})),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:i.a}),r.a.createElement(p.a,null),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(u.a,{rows:[{Element:"div","Class name":"play-pause-button","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".play-pause-button"}]}))}}])&&d(n.prototype,o),A&&d(n,A),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.toggleButtonOff||e.toggleButton},A=function(e){return e.toggleButtonOn||e.toggleButton},f=function(e){function t(){var e,n,o,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,p=new Array(c),A=0;A<c;A++)p[A]=arguments[A];return o=this,s=(e=i(t)).call.apply(e,[this].concat(p)),n=!s||"object"!==a(s)&&"function"!==typeof s?u(o):s,l(u(u(n)),"handleClick",function(){return n.props.onToggle&&n.props.onToggle(!n.props.isOn)}),l(u(u(n)),"handleKeyDown",Object(r.f)(["Enter"," "])),l(u(u(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,f,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(f=[{key:"render",value:function(){var e=this.props,t=e.isOn,n=e.label,a=e.className,s=e.classNamePrefix,i=e.toggledOnContent,c=e.toggledOffContent,u=e.onRef,l=e.classes,f=t?"toggled-on":"toggled-off",d=Object(r.g)({classes:l,selectClasses:t?A:p,classNamePrefix:s,classNames:[a,"toggle-button",f]}),m=t?i:c;return o.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:u,className:d,tabIndex:0},o.createElement("div",{tabIndex:-1},m))}}])&&s(n.prototype,f),d&&s(n,d),t}();l(f,"defaultProps",{useDefaultClassNaming:!0}),t.a=f,f.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t},p=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=s(t).call(this,e),n=!a||"object"!==r(a)&&"function"!==typeof a?c(o):a,u(c(c(n)),"setProperties",function(e){return n.setState(l(e))}),n.state={},n}var n,p,A;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,o["Component"]),n=t,(p=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,r=n.render,a=n.height,s=a?{width:"100%",height:a}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:s}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,p),A&&a(n,A),t}();t.a=p,p.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},i={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},u={padding:"20px",verticalAlign:"top"},l=r({},u,{fontStyle:"italic",opacity:.5}),p=r({},u,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),A=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var r=Object.keys(t[0]);return o.createElement("table",{style:s},o.createElement("thead",{style:i},o.createElement("tr",{style:c},r.map(function(e){return o.createElement("th",{key:"header-"+e,style:u},e)}))),o.createElement("tbody",null,t.map(function(e,t){return o.createElement("tr",{key:n+"-row-"+t,style:c},Object.values(e).map(function(e,r){return o.createElement("td",{key:n+"-cell-"+t+"-"+r,style:(a=e,""===a?l:p)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=A,A.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return A});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&c(n.prototype,o),s&&c(n,s),t}();A.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-play-pause-button-play-pause-button.8e142dbb9f125be07af7.js.map