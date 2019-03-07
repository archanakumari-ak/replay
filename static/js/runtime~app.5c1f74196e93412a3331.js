!function(e){function t(t){for(var n,r,c=t[0],a=t[1],i=t[2],s=t[3]||[],l=0,d=[];l<c.length;l++)r=c[l],q[r]&&d.push(q[r][0]),q[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(C&&C(t),s.forEach(function(e){if(void 0===q[e]){q[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",M.nc&&t.setAttribute("nonce",M.nc),t.rel="prefetch",t.as="script",t.href=I(e),document.head.appendChild(t)}});d.length;)d.shift()();return A.push.apply(A,i||[]),o()}function o(){for(var e,t=0;t<A.length;t++){for(var o=A[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==q[c]&&(n=!1)}n&&(A.splice(t--,1),e=M(M.s=o[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!k[e])return;for(var o in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,o)&&(b[o]=t[o]);0===--v&&0===g&&x()}(e,t),n&&n(e,t)};var r,c=!0,a="5c1f74196e93412a3331",i=1e4,s={},l=[],d=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,o){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=o||function(){};else t._acceptedDependencies[e]=o||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var o=0;o<e.length;o++)t._declinedDependencies[e[o]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var o=t._disposeHandlers.indexOf(e);o>=0&&t._disposeHandlers.splice(o,1)},check:j,apply:D,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return r=void 0,t}var u=[],f="idle";function m(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var y,b,h,v=0,g=0,w={},k={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,m("check"),(t=i,t=t||1e4,new Promise(function(e,o){if("undefined"===typeof XMLHttpRequest)return o(new Error("No browser support"));try{var n=new XMLHttpRequest,r=M.p+""+a+".hot-update.json";n.open("GET",r,!0),n.timeout=t,n.send(null)}catch(c){return o(c)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)o(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)o(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(c){return void o(c)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;k={},w={},O=e.c,h=e.h,m("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});for(var o in b={},q)E(o);return"prepare"===f&&0===g&&0===v&&x(),t});var t}function E(e){O[e]?(k[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+a+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):w[e]=!0}function x(){m("ready");var e=y;if(y=null,e)if(c)Promise.resolve().then(function(){return D(c)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var o in b)Object.prototype.hasOwnProperty.call(b,o)&&t.push(_(o));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var o,n,r,c,i;function d(e){for(var t=[e],o={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var r=n.pop(),a=r.id,i=r.chain;if((c=P[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],d=P[l];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[a]?(o[l]||(o[l]=[]),p(o[l],[a])):(delete o[l],t.push(l),n.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var u={},y=[],v={},g=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var w in b)if(Object.prototype.hasOwnProperty.call(b,w)){var k;i=_(w);var j=!1,E=!1,x=!1,D="";switch((k=b[w]?d(i):{type:"disposed",moduleId:w}).chain&&(D="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+k.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(j=new Error("Aborted because "+i+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(k),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),x=!0;break;default:throw new Error("Unexception type "+k.type)}if(j)return m("abort"),Promise.reject(j);if(E)for(i in v[i]=b[i],p(y,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,i)&&(u[i]||(u[i]=[]),p(u[i],k.outdatedDependencies[i]));x&&(p(y,[k.moduleId]),v[i]=g)}var H,A=[];for(n=0;n<y.length;n++)i=y[n],P[i]&&P[i].hot._selfAccepted&&A.push({module:i,errorHandler:P[i].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete q[e]}(e)});for(var I,S,T=y.slice();T.length>0;)if(i=T.pop(),c=P[i]){var U={},C=c.hot._disposeHandlers;for(r=0;r<C.length;r++)(o=C[r])(U);for(s[i]=U,c.hot.active=!1,delete P[i],delete u[i],r=0;r<c.children.length;r++){var N=P[c.children[r]];N&&((H=N.parents.indexOf(i))>=0&&N.parents.splice(H,1))}}for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(c=P[i]))for(S=u[i],r=0;r<S.length;r++)I=S[r],(H=c.children.indexOf(I))>=0&&c.children.splice(H,1);for(i in m("apply"),a=h,v)Object.prototype.hasOwnProperty.call(v,i)&&(e[i]=v[i]);var L=null;for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(c=P[i])){S=u[i];var R=[];for(n=0;n<S.length;n++)if(I=S[n],o=c.hot._acceptedDependencies[I]){if(-1!==R.indexOf(o))continue;R.push(o)}for(n=0;n<R.length;n++){o=R[n];try{o(S)}catch(J){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:S[n],error:J}),t.ignoreErrored||L||(L=J)}}}for(n=0;n<A.length;n++){var B=A[n];i=B.module,l=[i];try{M(i)}catch(J){if("function"===typeof B.errorHandler)try{B.errorHandler(J)}catch(X){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:X,originalError:J}),t.ignoreErrored||L||(L=X),L||(L=J)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:J}),t.ignoreErrored||L||(L=J)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(y)}))}var P={},H={45:0},q={45:0},A=[];function I(e){return M.p+"static/js/"+({1:"components-controls-timeline-information-timeline-information~components-controls-timeline-timeline~~0b1431de",2:"components-controls-quality-selector-quality-selector~docs-advanced-playback-adaptive-streaming~docs~d14aeb67",3:"docs-advanced-playback-adaptive-streaming~docs-custom-replay-configuration~docs-using-replay-control~7f45d6c0",5:"components-controls-air-play-button-air-play-button",6:"components-controls-audio-selector-audio-selector",7:"components-controls-buffering-indicator-buffering-indicator",8:"components-controls-controls-bar-controls-bar",9:"components-controls-exit-button-exit-button",10:"components-controls-fullscreen-button-fullscreen-button",11:"components-controls-goto-live-button-goto-live-button",12:"components-controls-pip-button-pip-button",13:"components-controls-play-pause-button-play-pause-button",14:"components-controls-playback-monitor-playback-monitor",15:"components-controls-quality-selector-quality-selector",16:"components-controls-skip-button-skip-button",17:"components-controls-subtitles-selector-subtitles-selector",18:"components-controls-time-display-time-display",19:"components-controls-timeline-information-timeline-information",20:"components-controls-timeline-timeline",21:"components-controls-volume-volume",22:"components-generic-selector-selector",23:"docs-advanced-playback-adaptive-streaming",24:"docs-advanced-playback-bitrates",25:"docs-advanced-playback-drm",26:"docs-advanced-playback-text-audio-tracks",27:"docs-architecture-background",28:"docs-architecture-connected-controls",29:"docs-architecture-overview",30:"docs-architecture-player-controller",31:"docs-architecture-project",32:"docs-architecture-video-streamers",33:"docs-custom-player-add-ui-components",34:"docs-custom-player-custom-strings-graphics",35:"docs-custom-player-multiple-skins",36:"docs-custom-replay-configuration",37:"docs-custom-replay-skins-styles",38:"docs-reference-observable-stream-state",39:"docs-reference-settable-properties",40:"docs-using-replay-controlling-playback",41:"docs-using-replay-insert",42:"docs-using-replay-replay-api",43:"docs-using-replay-startup-options",44:"index"}[e]||e)+"."+{1:"c11e27fa",2:"e062a676",3:"9e5297a3",5:"ccf7c037",6:"08bb47b7",7:"8bc7f75d",8:"0bcdc693",9:"279113d4",10:"dede7f2b",11:"0dd67fae",12:"6eb08d3a",13:"66f0327c",14:"117e35e4",15:"998556d7",16:"14512472",17:"77b803ed",18:"87aa3327",19:"4e1a5cd6",20:"4bb676f5",21:"d709bc6b",22:"857e8c83",23:"cc38910a",24:"668b3578",25:"745f12f8",26:"fc3cf318",27:"40ae2462",28:"e734fa3b",29:"f2d223f3",30:"41c37e6a",31:"c5a87497",32:"219888ec",33:"bac4ccf2",34:"39477860",35:"1d369c3e",36:"91cae4c3",37:"ee0882d6",38:"b7d7e0a0",39:"02e45792",40:"ec610b25",41:"a7e7f4e6",42:"7fb3a947",43:"2457d4d4",44:"3478d9ab",46:"d684ed13",47:"7204a4d4"}[e]+".js"}function M(t){if(P[t])return P[t].exports;var o=P[t]={i:t,l:!1,exports:{},hot:p(t),parents:(d=l,l=[],d),children:[]};return e[t].call(o.exports,o,o.exports,function(e){var t=P[e];if(!t)return M;var o=function(o){return t.hot.active?(P[o]?-1===P[o].parents.indexOf(e)&&P[o].parents.push(e):(l=[e],r=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),l=[]),M(o)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(o,c,n(c));return o.e=function(e){return"ready"===f&&m("prepare"),g++,M.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===v&&x())}},o.t=function(e,t){return 1&t&&(e=o(e)),M.t(e,-2&t)},o}(t)),o.l=!0,o.exports}M.e=function(e){var t=[];H[e]?t.push(H[e]):0!==H[e]&&{1:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,15:1,16:1,17:1,18:1}[e]&&t.push(H[e]=new Promise(function(t,o){for(var n="static/css/"+({1:"components-controls-timeline-information-timeline-information~components-controls-timeline-timeline~~0b1431de",2:"components-controls-quality-selector-quality-selector~docs-advanced-playback-adaptive-streaming~docs~d14aeb67",3:"docs-advanced-playback-adaptive-streaming~docs-custom-replay-configuration~docs-using-replay-control~7f45d6c0",5:"components-controls-air-play-button-air-play-button",6:"components-controls-audio-selector-audio-selector",7:"components-controls-buffering-indicator-buffering-indicator",8:"components-controls-controls-bar-controls-bar",9:"components-controls-exit-button-exit-button",10:"components-controls-fullscreen-button-fullscreen-button",11:"components-controls-goto-live-button-goto-live-button",12:"components-controls-pip-button-pip-button",13:"components-controls-play-pause-button-play-pause-button",14:"components-controls-playback-monitor-playback-monitor",15:"components-controls-quality-selector-quality-selector",16:"components-controls-skip-button-skip-button",17:"components-controls-subtitles-selector-subtitles-selector",18:"components-controls-time-display-time-display",19:"components-controls-timeline-information-timeline-information",20:"components-controls-timeline-timeline",21:"components-controls-volume-volume",22:"components-generic-selector-selector",23:"docs-advanced-playback-adaptive-streaming",24:"docs-advanced-playback-bitrates",25:"docs-advanced-playback-drm",26:"docs-advanced-playback-text-audio-tracks",27:"docs-architecture-background",28:"docs-architecture-connected-controls",29:"docs-architecture-overview",30:"docs-architecture-player-controller",31:"docs-architecture-project",32:"docs-architecture-video-streamers",33:"docs-custom-player-add-ui-components",34:"docs-custom-player-custom-strings-graphics",35:"docs-custom-player-multiple-skins",36:"docs-custom-replay-configuration",37:"docs-custom-replay-skins-styles",38:"docs-reference-observable-stream-state",39:"docs-reference-settable-properties",40:"docs-using-replay-controlling-playback",41:"docs-using-replay-insert",42:"docs-using-replay-replay-api",43:"docs-using-replay-startup-options",44:"index"}[e]||e)+"."+a+".css",r=M.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=(d=c[i]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===n||s===r))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){var d;if((s=(d=l[i]).getAttribute("data-href"))===n||s===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.request=n,delete H[e],p.parentNode.removeChild(p),o(c)},p.href=r,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){H[e]=0}));var o=q[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(function(t,n){o=q[e]=[t,n]});t.push(o[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=I(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous"),r=function(t){c.onerror=c.onload=null,clearTimeout(i);var o=q[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,o[1](a)}q[e]=void 0}};var i=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},M.m=e,M.c=P,M.d=function(e,t,o){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(M.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)M.d(o,n,function(t){return e[t]}.bind(null,n));return o},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/replay/",M.oe=function(e){throw console.error(e),e},M.h=function(){return a};var S=window.webpackJsonp=window.webpackJsonp||[],T=S.push.bind(S);S.push=t,S=S.slice();for(var U=0;U<S.length;U++)t(S[U]);var C=T;o()}([]);
//# sourceMappingURL=runtime~app.5c1f74196e93412a3331.js.map