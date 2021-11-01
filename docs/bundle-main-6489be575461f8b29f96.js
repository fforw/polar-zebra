var Demo;!function(){var e={20:function(e){"use strict";var n="%[a-f0-9]{2}",t=new RegExp(n,"gi"),r=new RegExp("("+n+")+","gi");function o(e,n){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;n=n||1;var t=e.slice(0,n),r=e.slice(n);return Array.prototype.concat.call([],o(t),o(r))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var n=e.match(t),r=1;r<n.length;r++)n=(e=o(n,r).join("")).match(t);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(n){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},t=r.exec(e);t;){try{n[t[0]]=decodeURIComponent(t[0])}catch(e){var o=a(t[0]);o!==t[0]&&(n[t[0]]=o)}t=r.exec(e)}n["%C2"]="�";for(var i=Object.keys(n),c=0;c<i.length;c++){var s=i[c];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},806:function(e){"use strict";e.exports=function(e,n){for(var t={},r=Object.keys(e),o=Array.isArray(n),a=0;a<r.length;a++){var i=r[a],c=e[i];(o?-1!==n.indexOf(i):n(i,c,e))&&(t[i]=c)}return t}},75:function(e){(function(){var n,t,r,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(n()-a)/1e6},t=process.hrtime,o=(n=function(){var e;return 1e9*(e=t())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},563:function(e,n,t){"use strict";const r=t(610),o=t(20),a=t(500),i=t(806),c=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,n){return n.encode?n.strict?r(e):encodeURIComponent(e):e}function l(e,n){return n.decode?o(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,n)=>Number(e)-Number(n))).map((n=>e[n])):e}function p(e){const n=e.indexOf("#");return-1!==n&&(e=e.slice(0,n)),e}function d(e){const n=(e=p(e)).indexOf("?");return-1===n?"":e.slice(n+1)}function m(e,n){return n.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!n.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,n){s((n=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},n)).arrayFormatSeparator);const t=function(e){let n;switch(e.arrayFormat){case"index":return(e,t,r)=>{n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===r[e]&&(r[e]={}),r[e][n[1]]=t):r[e]=t};case"bracket":return(e,t,r)=>{n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};case"comma":case"separator":return(n,t,r)=>{const o="string"==typeof t&&t.includes(e.arrayFormatSeparator),a="string"==typeof t&&!o&&l(t,e).includes(e.arrayFormatSeparator);t=a?l(t,e):t;const i=o||a?t.split(e.arrayFormatSeparator).map((n=>l(n,e))):null===t?t:l(t,e);r[n]=i};case"bracket-separator":return(n,t,r)=>{const o=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),!o)return void(r[n]=t?l(t,e):t);const a=null===t?[]:t.split(e.arrayFormatSeparator).map((n=>l(n,e)));void 0!==r[n]?r[n]=[].concat(r[n],a):r[n]=a};default:return(e,n,t)=>{void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(n.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(n.arrayFormat)?i:l(i,n),t(l(e,n),i,r)}for(const e of Object.keys(r)){const t=r[e];if("object"==typeof t&&null!==t)for(const e of Object.keys(t))t[e]=m(t[e],n);else r[e]=m(t,n)}return!1===n.sort?r:(!0===n.sort?Object.keys(r).sort():Object.keys(r).sort(n.sort)).reduce(((e,n)=>{const t=r[n];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=f(t):e[n]=t,e}),Object.create(null))}n.extract=d,n.parse=y,n.stringify=(e,n)=>{if(!e)return"";s((n=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},n)).arrayFormatSeparator);const t=t=>n.skipNull&&null==e[t]||n.skipEmptyString&&""===e[t],r=function(e){switch(e.arrayFormat){case"index":return n=>(t,r)=>{const o=t.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:null===r?[...t,[u(n,e),"[",o,"]"].join("")]:[...t,[u(n,e),"[",u(o,e),"]=",u(r,e)].join("")]};case"bracket":return n=>(t,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:null===r?[...t,[u(n,e),"[]"].join("")]:[...t,[u(n,e),"[]=",u(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const n="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[u(t,e),n,u(o,e)].join("")]:[[r,u(o,e)].join(e.arrayFormatSeparator)])}default:return n=>(t,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:null===r?[...t,u(n,e)]:[...t,[u(n,e),"=",u(r,e)].join("")]}}(n),o={};for(const n of Object.keys(e))t(n)||(o[n]=e[n]);const a=Object.keys(o);return!1!==n.sort&&a.sort(n.sort),a.map((t=>{const o=e[t];return void 0===o?"":null===o?u(t,n):Array.isArray(o)?0===o.length&&"bracket-separator"===n.arrayFormat?u(t,n)+"[]":o.reduce(r(t),[]).join("&"):u(t,n)+"="+u(o,n)})).filter((e=>e.length>0)).join("&")},n.parseUrl=(e,n)=>{n=Object.assign({decode:!0},n);const[t,r]=a(e,"#");return Object.assign({url:t.split("?")[0]||"",query:y(d(e),n)},n&&n.parseFragmentIdentifier&&r?{fragmentIdentifier:l(r,n)}:{})},n.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const r=p(e.url).split("?")[0]||"",o=n.extract(e.url),a=n.parse(o,{sort:!1}),i=Object.assign(a,e.query);let s=n.stringify(i,t);s&&(s=`?${s}`);let l=function(e){let n="";const t=e.indexOf("#");return-1!==t&&(n=e.slice(t)),n}(e.url);return e.fragmentIdentifier&&(l=`#${t[c]?u(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${r}${s}${l}`},n.pick=(e,t,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[c]:!1},r);const{url:o,query:a,fragmentIdentifier:s}=n.parseUrl(e,r);return n.stringifyUrl({url:o,query:i(a,t),fragmentIdentifier:s},r)},n.exclude=(e,t,r)=>{const o=Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n);return n.pick(e,o,r)}},500:function(e){"use strict";e.exports=(e,n)=>{if("string"!=typeof e||"string"!=typeof n)throw new TypeError("Expected the arguments to be of type `string`");if(""===n)return[e];const t=e.indexOf(n);return-1===t?[e]:[e.slice(0,t),e.slice(t+n.length)]}},610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";t.r(r);var e,n,o,a,i,c,s,u,l,f,p,d=t(75),m=t.n(d),y=(t(563),Math.sqrt(5),Math.PI,{width:0,height:0}),v=0,x=0;function g(){var t=-16&window.innerWidth,r=0|window.innerHeight;y.width=t,y.height=r,e.width=t,e.height=r,v=t/2,x=r/2,n.viewport(0,0,e.width,e.height)}function h(e,n,t){var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;console.error(e.getShaderInfoLog(r)),e.deleteShader(r)}function b(e){var t=u?1:-1;n.uniform1f(i,m()()/1e3),n.uniform2f(c,y.width,y.height),n.uniform4f(s,v,y.height-x,l*t,(y.height-f)*t),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT);var r=n.TRIANGLES;n.drawArrays(r,0,6),requestAnimationFrame(b)}function w(e){u&&(v=e.clientX-p.left+self.pageXOffset,x=e.clientY-p.top+self.pageYOffset)}function S(e){u=!0,l=e.clientX-p.left+self.pageXOffset,f=e.clientY-p.top+self.pageYOffset,v=l,x=f}function F(e){u=!1}window.onload=function(){if(e=document.getElementById("screen"),!(n=e.getContext("webgl2")))return e.parentNode.removeChild(e),"Cannot run shader. Your browser does not support WebGL2.",void(document.getElementById("out").innerHTML="<p>Cannot run shader. Your browser does not support WebGL2.</p>");var t=h(n,n.VERTEX_SHADER,"#version 300 es\n#define GLSLIFY 1\n\n// an attribute is an input (in) to a vertex shader.\n// It will receive data from a buffer\nin vec4 a_position;\n\n// all shaders have a main function\nvoid main() {\n\n    // gl_Position is a special variable a vertex shader\n    // is responsible for setting\n    gl_Position = a_position;\n}\n"),r=h(n,n.FRAGMENT_SHADER,"#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float u_time;\n\nuniform vec2 u_resolution;\nuniform vec4 u_mouse;\n\nconst float pi = 3.141592653589793;\nconst float tau = pi * 2.0;\nconst float invTau = 1.0 / tau;\nconst float hpi = pi * 0.5;\nconst float phi = (1.0+sqrt(5.0))/2.0;\n\nout vec4 outColor;\n\nfloat atan2(in float y, in float x)\n{\n    return abs(x) > abs(y) ? hpi - atan(x,y) : atan(y,x);\n}\n\n////////////////////// NOISE\n\n//\tSimplex 3D Noise\n//\tby Ian McEwan, Ashima Arts\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //  x0 = x0 - 0. + 0.0 * C\n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n    // Permutations\n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute(\n    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients\n    // ( N*N points uniformly over a square, mapped onto an octahedron.)\n    float n_ = 1.0/7.0; // N=7\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n    dot(p2,x2), dot(p3,x3) ) );\n}\n\nvoid main(void)\n{\n    vec2 ratio = vec2(0.2);\n    vec2 uv = (gl_FragCoord.xy * ratio - .5 * u_resolution.xy * ratio)/min(u_resolution.x, u_resolution.y);\n\n    float dist = length(uv);\n\n    float r = tau * dist;\n    float time = u_time * 0.1;\n    float time2 = u_time * 0.07;\n\n    float angle = atan2(uv.y, uv.x) + time;\n    float n = snoise(vec3(dist * 200.0, cos(angle) * r, sin(angle) * r) + vec3(0, time, time2)) < 0.0 ? 0.0 : 1.0;\n\n    outColor = vec4(n, n, n,1);\n}\n");a=function(e,n,t){var r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,t),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;console.error(e.getProgramInfoLog(r)),e.deleteProgram(r)}(n,t,r);var u=n.getAttribLocation(a,"a_position"),l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,1,1,-1]),n.STATIC_DRAW),o=n.createVertexArray(),n.bindVertexArray(o),n.enableVertexAttribArray(u);var f=n.FLOAT;n.vertexAttribPointer(u,2,f,!1,0,0),g(),i=n.getUniformLocation(a,"u_time"),c=n.getUniformLocation(a,"u_resolution"),s=n.getUniformLocation(a,"u_mouse"),n.useProgram(a),n.bindVertexArray(o),window.addEventListener("resize",g,!0),e.addEventListener("mousemove",w,!0),e.addEventListener("mousedown",S,!0),document.addEventListener("mouseup",F,!0),window.addEventListener("touchstart",S,!0),window.addEventListener("touchmove",w,!0),window.addEventListener("touchend",F,!0),p=document.getElementById("screen").getBoundingClientRect(),requestAnimationFrame(b)}}(),Demo=r}();
//# sourceMappingURL=bundle-main-6489be575461f8b29f96.js.map