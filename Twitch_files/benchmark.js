!function(n){"use strict";function e(){var e=n.crypto||n.msCrypto;if(!s&&e&&e.getRandomValues)try{var t=new Uint8Array(16);f=s=function(){return e.getRandomValues(t),t},s()}catch(n){}if(!s){var r=new Array(16);u=s=function(){for(var n,e=0;e<16;e++)0===(3&e)&&(n=4294967296*Math.random()),r[e]=n>>>((3&e)<<3)&255;return r},"undefined"!=typeof console&&console.warn&&console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")}}function t(){if("function"==typeof require)try{var n=require("crypto").randomBytes;c=s=n&&function(){return n(16)},s()}catch(n){}}function r(n,e,t){var r=e&&t||0,i=0;for(e=e||[],n.toLowerCase().replace(/[0-9a-f]{2}/g,function(n){i<16&&(e[r+i++]=w[n])});i<16;)e[r+i++]=0;return e}function i(n,e){var t=e||0,r=h;return r[n[t++]]+r[n[t++]]+r[n[t++]]+r[n[t++]]+"-"+r[n[t++]]+r[n[t++]]+"-"+r[n[t++]]+r[n[t++]]+"-"+r[n[t++]]+r[n[t++]]+"-"+r[n[t++]]+r[n[t++]]+r[n[t++]]+r[n[t++]]+r[n[t++]]+r[n[t++]]}function o(n,e,t){var r=e&&t||0,o=e||[];n=n||{};var a=null!=n.clockseq?n.clockseq:p,s=null!=n.msecs?n.msecs:(new Date).getTime(),u=null!=n.nsecs?n.nsecs:_+1,c=s-y+(u-_)/1e4;if(c<0&&null==n.clockseq&&(a=a+1&16383),(c<0||s>y)&&null==n.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=s,_=u,p=a,s+=122192928e5;var f=(1e4*(268435455&s)+u)%4294967296;o[r++]=f>>>24&255,o[r++]=f>>>16&255,o[r++]=f>>>8&255,o[r++]=255&f;var d=s/4294967296*1e4&268435455;o[r++]=d>>>8&255,o[r++]=255&d,o[r++]=d>>>24&15|16,o[r++]=d>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var l=n.node||v,h=0;h<6;h++)o[r+h]=l[h];return e?e:i(o)}function a(n,e,t){var r=e&&t||0;"string"==typeof n&&(e="binary"===n?new l(16):null,n=null),n=n||{};var o=n.random||(n.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;a<16;a++)e[r+a]=o[a];return e||i(o)}var s,u,c,f,d;n?e():t();for(var l="function"==typeof Buffer?Buffer:Array,h=[],w={},g=0;g<256;g++)h[g]=(g+256).toString(16).substr(1),w[h[g]]=g;var m=s(),v=[1|m[0],m[1],m[2],m[3],m[4],m[5]],p=16383&(m[6]<<8|m[7]),y=0,_=0,k=a;k.v1=o,k.v4=a,k.parse=r,k.unparse=i,k.BufferClass=l,k._rng=s,k._mathRNG=u,k._nodeRNG=c,k._whatwgRNG=f,"undefined"!=typeof module&&module.exports?module.exports=k:"function"==typeof define&&define.amd?define(function(){return k}):(d=n.uuid,k.noConflict=function(){return n.uuid=d,k},n.uuid=k)}("undefined"!=typeof window?window:null),function(n){"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?n():define(n)}(function(){"use strict";function n(n){return n?n/1e3:(new Date).getTime()/1e3}var e=window.lazyEvents=[],t=Twitch.tracking.funnel.debugEnabled,r={_firstPageLoad:!0,_init:function(){this.end(),this.start();var e=window.performance.timing;this.track("fetch_start",{client_time:n(e.fetchStart)}),window.INIT_BENCHMARK_TIMESTAMP&&this.track("init",{client_time:n(window.INIT_BENCHMARK_TIMESTAMP)})},transition:function(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.start(),this.track("transition",n)},start:function(){this.getSession()||Twitch.storage.set("benchmark_id",uuid(),{storage:"sessionStorage"})},end:function(){Twitch.storage.del("benchmark_id",{storage:"sessionStorage"})},getSession:function(){return Twitch.storage.get("benchmark_id",{storage:"sessionStorage"})},track:function(r){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i.client_time=i.client_time||n(),i.benchmark_session_id=i.benchmark_session_id||this.getSession();var o="benchmark_"+r;e.push({services:["spade"],event:o,data:i}),window.lazyEventsFlush&&window.lazyEventsFlush(),t()&&console.log("Tracked: "+o+" with the following properties: \n "+JSON.stringify(i))}};window.Twitch.benchmark=r,r._init(),r.track("ember_init")});
//# sourceMappingURL=benchmark.map