(function (env) {
function safeNavigationUrl(value) {
var url = value.trim();
var beforeQuery = url.split(/[?#]/, 1)[0];
if (!url || /[\u0000-\u001f\u007f\\]/.test(beforeQuery) || url.indexOf("//") === 0) return "#";
var match = /^([a-z][a-z0-9+.-]*):/i.exec(url);
var scheme = match && match[1].toLowerCase();
if (scheme && ["http", "https", "mailto", "tel"].indexOf(scheme) < 0) return "#";
if ((scheme === "http" || scheme === "https") && !/^https?:\/\//i.test(url)) return "#";
return url;
}
var writeVarPath = (function K(e,t,i,s,n=!1){if("string"!=typeof t||!t)return;let a=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r=(t,i)=>{if(!s||s(i))return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!0,configurable:!0}),t};if(a(e,t)||!t.includes("."))return r(t,i);let o=!1,l=(e,t)=>{if(!t.length)return i;let[s,...r]=t;if(Array.isArray(e)){let t=n&&"-1"===s;if(!t&&!/^(0|[1-9][0-9]*)$/.test(s))return o=!0,e;let i=t?e.length-1:Number(s);if(!Number.isSafeInteger(i)||i<0||i>e.length||i===e.length&&e.length>=1e4)return o=!0,e;let c=e.slice();return c[i]=l(a(e,i)?e[i]:void 0,r),c}let c=e&&"object"==typeof e?e:{};return{...c,[s]:l(a(c,s)?c[s]:void 0,r)}},[c,...d]=t.split(".");if(d.length>64)return;let h=l(a(e,c)?e[c]:void 0,d);return o?void 0:r(c,h)});
var withinValueLimit = (function G(e){if(null==e)return!0;if("object"!=typeof e)return"number"==typeof e?Number.isFinite(e):"string"==typeof e?e.length<=5242880:"boolean"==typeof e;let t=new WeakMap,i=(e,s)=>{if(s>64)return{cost:1/0,height:0};if(null==e)return{cost:8,height:0};if("object"!=typeof e)return("number"!=typeof e||Number.isFinite(e))&&("number"==typeof e||"string"==typeof e||"boolean"==typeof e)?{cost:"string"==typeof e?e.length+2:8,height:0}:{cost:1/0,height:0};let n=t.get(e);if(n)return s+n.height<=64?n:{cost:1/0,height:0};if(t.set(e,{cost:1/0,height:0}),Array.isArray(e)&&e.length>5242880)return{cost:1/0,height:0};let a=Array.isArray(e)?2+e.length:2,r=0;for(let t of Object.keys(e)){let n=i(e[t],s+1);if(a+=t.length+4+n.cost,r=Math.max(r,n.height+1),a>5242880)return{cost:1/0,height:0}}let o={cost:a,height:r};return t.set(e,o),o};return i(e,0).cost<=5242880});
var matchValueCondition = (function $(e,t,i){let s=e=>null!==e&&"object"==typeof e,n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||!/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(e.trim()))return;let t=Number(e.trim());return Number.isFinite(t)?t:void 0},a=(e,t,i=0)=>{if("number"==typeof e&&!Number.isFinite(e)||"number"==typeof t&&!Number.isFinite(t))return!1;if(e===t)return!0;if("string"==typeof e&&("boolean"==typeof t||"number"==typeof t&&Number.isFinite(t)))return e===String(t);if("string"==typeof t&&("boolean"==typeof e||"number"==typeof e&&Number.isFinite(e)))return String(e)===t;if(!s(e)||!s(t)||i>=16)return!1;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!(n.length>1e4)&&n.every(s=>Object.prototype.hasOwnProperty.call(t,s)&&a(e[s],t[s],i+1))};if("has-key"===t)return!(!s(e)||s(i))&&null!=i&&Object.prototype.propertyIsEnumerable.call(e,String(i));if("empty"===t)return null==e||""===e||!!s(e)&&0===Object.keys(e).length;if("contains-any"===t){let t=s(i)?Object.keys(i).map(e=>i[e]):"string"==typeof i?i.split(",").map(e=>e.trim()):[i];return s(e)?Object.keys(e).some(i=>t.some(t=>a(e[i],t))):"string"==typeof e&&t.some(t=>!s(t)&&null!=t&&e.includes(String(t)))}if("contains"===t)return s(e)?Object.keys(e).some(t=>a(e[t],i)):null!=e&&!s(i)&&String(e).includes(String(i));if("eq"===t||void 0===t)return a(e,i);if("in"===t)return s(i)?Object.keys(i).some(t=>a(i[t],e)):"string"==typeof i&&i.split(",").some(t=>a(e,t.trim()));if("starts-with"===t||"ends-with"===t){if(null==e||s(e)||s(i))return!1;let n=String(e),a=String(i);return"starts-with"===t?n.startsWith(a):n.endsWith(a)}if("gt"===t||"gte"===t||"lt"===t||"lte"===t){let s=n(e),a=n(i);return void 0!==s&&void 0!==a&&("gt"===t?s>a:"gte"===t?s>=a:"lt"===t?s<a:s<=a)}return!1});
var parseValueLiteral = (function H(e){let t=e.trim();if("true"===t||"false"===t||"null"===t||t.startsWith("[")||t.startsWith("{")||/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(t)||t.length>=2&&t.startsWith('"')&&t.endsWith('"'))try{return JSON.parse(t)}catch{}return e});
var formatValueText = (function n(e,t=!1){if(null==e)return"";if(!Array.isArray(e))return"object"==typeof e?t?"[object Object]":"":String(e);let r=[],i=[{value:e,index:0}],o=new WeakSet([e]),a=0,s=0;for(;i.length;){if(++a>5242880)return"";let e=i[i.length-1];if(e.index>=e.value.length){o.delete(e.value),i.pop();continue}t&&e.index>0&&(r.push(","),s++);let n=e.value[e.index++];if(Array.isArray(n))o.has(n)||(o.add(n),i.push({value:n,index:0}));else{let e=null==n?"":"object"==typeof n?t?"[object Object]":"":String(n);e&&(!t&&r.length&&(r.push(", "),s+=2),r.push(e),s+=e.length)}if(s>5242880)return""}return r.join("")});
var __name = function (fn) { return fn; };
var evalRecipe = (function B(e,t,i={}){let s=e=>({kind:"error",code:e});if(!Array.isArray(t)||t.length>32)return s("invalid-recipe");let n=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a=(e,t)=>{if(!t)return e;if(!e||"object"!=typeof e)return;if(n(e,t))return e[t];let i=e,s=t.split(".");if(!(s.length>16)){for(let e of s){if(null===i||"object"!=typeof i)return;let t=Array.isArray(i)&&"-1"===e?i.length-1:e;if(!n(i,t))return;i=i[t]}return i}},r=(e,t)=>{if(!e||"object"!=typeof e)return!1;if(n(e,t))return!0;let i=t.split(".");if(i.length>16)return!1;let s=e;for(let e of i){if(null===s||"object"!=typeof s)return!1;let t=Array.isArray(s)&&"-1"===e?s.length-1:e;if(!n(s,t))return!1;s=s[t]}return!0},o=e=>null===e||"string"==typeof e||"boolean"==typeof e||"number"==typeof e&&Number.isFinite(e),l=e=>"string"==typeof e||"boolean"==typeof e||"number"==typeof e&&Number.isFinite(e)?String(e):void 0,c=(e,t,s=!1)=>{if("string"!=typeof e||e.length>t)return{ok:!1};let n=/^\{([^{}\s"'<>]+)\}$/.exec(e);if(n&&(!s||!/^\d+(,\d*)?$/.test(n[1]))){let e=a(i,n[1]);return void 0===e?{ok:!1}:{ok:!0,value:e}}let r="",o=0;for(let n of e.matchAll(/\\\{|\{([^{}\s"'<>]+)\}/g)){if(r+=e.slice(o,n.index),o=n.index+n[0].length,!n[1]){r+="{";continue}if(s&&/^\d+(,\d*)?$/.test(n[1])){r+=n[0];continue}let l=a(i,n[1]),c="";for(let e of Array.isArray(l)?l:[l]){if(null==e||"object"==typeof e||""===e)continue;let i=String(e);if(r.length+c.length+i.length>t)return{ok:!1};r+=c+i,c=", "}}return(r+=e.slice(o)).length<=t?{ok:!0,value:r}:{ok:!1}},d=(e,t,i=!1)=>{let s=c(e,t,i);if(!s.ok||null===s.value||"object"==typeof s.value)return{ok:!1};let n=String(s.value);return n.length<=t?{ok:!0,value:n}:{ok:!1}},h=e=>{if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(e.trim()))return;let t=Number(e.trim());return Number.isFinite(t)?t:void 0},u=(e,t)=>{if(e.length>256)return!1;let i=t+1,s=()=>({repeats:!1,alternation:!1,paths:0,branchPaths:1,choices:0,branchChoices:1,fixedWork:0,runtimeWork:0}),n=[s()],a=[],r=e=>"\\d"===e||"[0-9]"===e?"digit":"\\w"===e?"word":"\\s"===e?"space":"[a-z]"===e?"lower":"[A-Z]"===e?"upper":1===e.length?"literal:"+e:null,o=(e,t)=>"word"===e?/^[a-zA-Z0-9_]$/.test(t):"digit"===e?/^[0-9]$/.test(t):"lower"===e?/^[a-z]$/.test(t):"upper"===e?/^[A-Z]$/.test(t):"space"!==e||/^\s$/.test(t),l=(e,t)=>!e||!t||(e.startsWith("literal:")?t.startsWith("literal:")?e===t:o(t,e.slice(8)):t.startsWith("literal:")?o(e,t.slice(8)):"word"===e?"space"!==t:"word"===t?"space"!==e:e===t),c=null,d=(e,t)=>{let i=n[n.length-1];t&&(i.branchPaths*=t.paths+t.branchPaths);let s=t?t.choices+t.branchChoices:1,a={category:e,group:t,choices:s,fixedWork:t?t.fixedWork+2:1,runtimeWork:t?1+t.runtimeWork+s:1};return i.fixedWork+=a.fixedWork,i.runtimeWork+=i.branchChoices*a.runtimeWork,i.branchChoices*=s,i.paths+i.branchPaths<=256&&i.choices+i.branchChoices<=0x1000000&&i.fixedWork<=4096&&i.runtimeWork<=0x1000000?a:null};for(let t=0;t<e.length;t++){let o=e[t];if("\\"===o){if(t+1>=e.length||/[1-9]/.test(e[t+1])||"k"===e[t+1])return!1;let i=e[t+1];if("x"===i||"u"===i||"c"===i){let s=/^(?:x[0-9a-f]{2}|u[0-9a-f]{4}|c[a-z])/i.exec(e.slice(t+1));if(!s||!(c=d(r(String.fromCharCode("c"===i?s[0].toUpperCase().charCodeAt(1)%32:parseInt(s[0].slice(1),16))))))return!1;t+=s[0].length;continue}if("0"===i&&/[0-9]/.test(e[t+2]??"")||!(c=d(r("\\"+e[++t]))))return!1;continue}if("["===o){let i=t+1;for(;i<e.length;i++){if("\\"===e[i]){i++;continue}if("]"===e[i])break}if(i>=e.length||!(c=d(r(e.slice(t,i+1)))))return!1;t=i;continue}if("("===o){if("?"===e[t+1]){if(":"!==e[t+2])return!1;t+=2}n.push(s()),c=null;continue}if(")"===o){if(n.length<=1)return!1;let e=n.pop();if(n[n.length-1].repeats||=e.repeats,n[n.length-1].alternation||=e.alternation,!(c=d(null,e)))return!1;continue}if("|"===o){let e=n[n.length-1];if(e.alternation=!0,e.paths+=e.branchPaths,e.branchPaths=1,e.choices+=e.branchChoices,e.branchChoices=1,e.paths+e.branchPaths>256||e.choices+e.branchChoices>0x1000000)return!1;c=null;continue}let h="*"===o||"+"===o||"?"===o,u=!1,p=+("+"===o),f="?"===o?1:1/0;if("{"===o){let i=/^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(t));if(i){let e=Number(i[1]),s=""===i[2]?1/0:void 0===i[2]?e:Number(i[2]);if(e>1e3||s>1e3&&1/0!==s||s<e)return!1;h=!0,u=e===s,p=e,f=s,t+=i[0].length-1}}if(h){if(!c||c.group&&(c.group.repeats||c.group.alternation))return!1;let e=n[n.length-1],t=Math.max(1,1/0===f?p:f),s=1/0===f?Math.max(i,p):Math.max(1,f),r=e.branchChoices/c.choices,o=u?1:s-p+1;if(e.fixedWork+=c.fixedWork*(t-1),e.runtimeWork+=r*c.runtimeWork*(s-1),e.branchChoices=r*o,e.fixedWork>4096||e.runtimeWork>0x1000000||e.choices+e.branchChoices>0x1000000)return!1;if(!u){if(a.some(e=>l(c.category,e)))return!1;a.push(c.category),n[n.length-1].repeats=!0}c=null}else if(!(c=d("."===o||"^"===o||"$"===o?null:r(o))))return!1}let h=n[0];return 1===n.length&&i*h.runtimeWork<=0x1000000},p=e,f=void 0===p;try{for(let e of t){if(!e||"object"!=typeof e||!("kind"in e))return s("invalid-recipe");switch(e.kind){case"fallback":if("string"!=typeof e.text||e.text.length>1e4||"missing"!==e.when&&"nullish"!==e.when)return s("invalid-recipe");if(f||"nullish"===e.when&&null===p){let t=c(e.text,1e4);if(!t.ok)return s("missing-value");p=t.value,f=!1}break;case"field":{if(f)break;let t=d(e.key,256);if(!t.ok||!p||"object"!=typeof p)return s("type-mismatch");let i=n(p,t.value);p=i||t.value&&r(p,t.value)?i?p[t.value]:a(p,t.value):void 0,f=void 0===p;break}case"length":if(f)break;if(!p||"object"!=typeof p)return s("type-mismatch");p=Object.keys(p).length;break;case"stringify":if(f)break;if(p=JSON.stringify(p),"string"!=typeof p||p.length>1e5)return s("limit-exceeded");break;case"parse":if(f)break;if("string"!=typeof p){if(null===p||"boolean"==typeof p||"number"==typeof p&&Number.isFinite(p)||"object"==typeof p)break;return s("type-mismatch")}if(p.length>1e5)return s("limit-exceeded");try{p=JSON.parse(p)}catch{return s("invalid-json")}break;case"math":{if(f)break;if("number"!==e.operandType&&"variable"!==e.operandType)return s("invalid-recipe");let t=h(p),n="variable"===e.operandType?a(i,"string"==typeof e.operand?e.operand:""):e.operand,r=h(n);if(void 0===t||void 0===r)return s("type-mismatch");let o=t;switch(e.operation){case"add":o+=r;break;case"subtract":o-=r;break;case"multiply":o*=r;break;case"divide":if(0===r)return s("division-by-zero");o/=r;break;case"remainder":if(0===r)return s("division-by-zero");o%=r;break;default:return s("invalid-recipe")}if(!Number.isFinite(o))return s("limit-exceeded");p=o;break}case"split":{if(f)break;let t=d(e.separator,256),i=l(p);if(void 0===i||!t.ok)return s("type-mismatch");if(i.length>1e5)return s("limit-exceeded");p=i.split(t.value||",").map(e=>e.trim()).filter(Boolean);break}case"join":{if(f)break;let t=d(e.separator,256);if(!p||"object"!=typeof p||!t.ok)return s("type-mismatch");let i=Object.keys(p);if(i.length>1e4)return s("limit-exceeded");let n=[],a=0;for(let e of i){let i=p[e];if(null===i||""===i)continue;if(!o(i))return s("type-mismatch");let r=String(i);if((a+=r.length+(n.length?t.value.length:0))>1e5)return s("limit-exceeded");n.push(r)}p=n.join(t.value);break}case"replace":{if(f)break;let t=d(e.find,256,e.regex),i=d(e.replacement,1e4),n=l(p);if(void 0===n||!t.ok||!i.ok||"boolean"!=typeof e.regex)return s("type-mismatch");if(n.length>1e4)return s("limit-exceeded");if(!t.value){p=n;break}if(e.regex){let e;if(n.length>2048||!u(t.value,n.length))return s("invalid-regex");try{e=RegExp(t.value,"g")}catch{return s("invalid-regex")}let a=n.length,r=i.value.match(/\$(?:&|[1-9]\d?)/g)?.length??0,o=i.value.match(/\$(?:'|`)/g)?.length??0;for(let t of n.matchAll(e))if((a+=i.value.length+r*t[0].length+o*n.length)>1e5)return s("limit-exceeded");p=n.replace(e,i.value)}else{let e=n.split(t.value),a=e.length-1;if(n.length+a*(i.value.length-t.value.length)>1e5)return s("limit-exceeded");p=e.join(i.value)}if("string"!=typeof p||p.length>1e5)return s("limit-exceeded");break}case"sort":{let t;if(f)break;let i=d(e.field,256);if(!p||"object"!=typeof p||!i.ok||"asc"!==e.direction&&"desc"!==e.direction)return s("type-mismatch");let n=Array.isArray(p),r=Object.entries(p);if(r.length>1e4||Array.isArray(p)&&p.length>1e4)return s("limit-exceeded");let o=[];for(let e=0;e<r.length;e++){let[n,l]=r[e],c=a(l,i.value);if(void 0===c)return s("missing-value");if("number"!=typeof c&&"string"!=typeof c||"number"==typeof c&&!Number.isFinite(c)||void 0!==t&&t!==typeof c)return s("type-mismatch");t=typeof c,o.push({item:l,sourceKey:n,key:c,order:e})}let l="string"===t?new Intl.Collator("ja",{numeric:!0}):void 0;o.sort((t,i)=>{let s="number"==typeof t.key&&"number"==typeof i.key?t.key-i.key:l.compare(String(t.key),String(i.key));return"desc"===e.direction&&(s*=-1),s||t.order-i.order}),p=n?o.map(e=>e.item):o.map(e=>({キー:e.sourceKey,値:e.item}));break}default:return s("invalid-recipe")}if("string"==typeof p&&p.length>1e5||Array.isArray(p)&&p.length>1e4)return s("limit-exceeded")}return f?{kind:"missing"}:{kind:"value",value:p}}catch{return s("invalid-recipe")}});
var removeItem = (function q(e,t,i,s){if(!e||"object"!=typeof e||void 0===i||Array.isArray(e)&&e.length>1e4)return;let n=Object.keys(e);if(n.length>1e4)return;if("key"===t){if("string"!=typeof i&&"number"!=typeof i)return;let t=String(i);if(Array.isArray(e)){if(!/^(0|[1-9][0-9]*)$/.test(t))return;let i=Number(t);if(!Number.isSafeInteger(i)||i>=e.length)return;let s=e.slice();return s.splice(i,1),s}if(!Object.prototype.hasOwnProperty.call(e,t))return;let s=Object.assign(Object.create(null),e);return delete s[t],s}if("value"!==t)return;if(Array.isArray(e)){let t=e.filter(e=>!s(e,"eq",i));return t.length===e.length?void 0:t}let a=Object.assign(Object.create(null),e),r=!1;for(let e of n)s(a[e],"eq",i)&&(delete a[e],r=!0);return r?a:void 0});
var cache = new Map();
var cacheChars = 0;
var cacheMaxChars = 8 * 1024 * 1024;
var cacheMaxEntries = 256;
function parse(el) {
var raw = el.getAttribute("data-scripts") || "[]";
if (raw.length > 5 * 1024 * 1024) return [];
var v = cache.get(raw);
if (v) {
cache.delete(raw);
cache.set(raw, v);
return v;
}
try {
v = JSON.parse(raw);
} catch (e) {
v = [];
}
if (!Array.isArray(v)) v = [];
else v = v.filter(function (entry) {
return entry && typeof entry === "object" &&
typeof entry.trigger === "string" && Array.isArray(entry.steps);
});
if (raw.length <= cacheMaxChars) {
while (cache.size && (cache.size >= cacheMaxEntries || cacheChars + raw.length > cacheMaxChars)) {
var oldest = cache.keys().next().value;
cacheChars -= oldest.length;
cache.delete(oldest);
}
cache.set(raw, v);
cacheChars += raw.length;
}
return v;
}
function has(o, k) {
return Object.prototype.hasOwnProperty.call(o, k);
}
function dig(v, path, missing) {
var keys = String(path).split(".");
for (var i = 0; i < keys.length; i++) {
if (v == null || typeof v !== "object") return missing;
var k = keys[i];
var part = Array.isArray(v) && k === "-1" ? v.length - 1 : k;
if (!has(v, part)) return missing;
v = v[part];
}
return v;
}
function text(v) {
return formatValueText(v);
}
function isHidden(el) {
return getComputedStyle(el).display === "none";
}
function show(el) {
el.style.display = "";
if (isHidden(el)) {
el.style.display =
el.getAttribute("data-toggle-show") ||
"block";
}
}
function hide(el) {
el.style.display = "none";
}
function inputOf(el) {
return el.matches("input,select,textarea")
? el
: el.querySelector("input,select,textarea");
}
function radiosOf(input) {
if (!input.name) return [input];
try {
var tree = input.getRootNode ? input.getRootNode() : document;
return Array.prototype.slice.call(
tree.querySelectorAll('input[type="radio"][name="' + CSS.escape(input.name) + '"]')
).filter(function (radio) { return radio.form === input.form; });
} catch (e) {
return [input];
}
}
function truthy(v) {
v = String(v == null ? "" : v).trim().toLowerCase();
return v !== "" && v !== "off" && v !== "false" && v !== "0" && v !== "no";
}
function isRadioItem(el, input, name) {
return !!input && input.type === "radio" && !!el.id && el.id !== input.name && name !== input.name;
}
function stateOf(els, prop, name) {
var input = els.length ? inputOf(els[0]) : null;
if (!input && els.length && els[0].matches("button")) input = els[0];
if (!input) return undefined;
var radios = input.type === "radio" ? radiosOf(input) : null;
switch (prop) {
case "disabled":
return String(!!input.disabled);
case "length":
return String(valueOf(els, name).length);
case "index":
if (input.tagName === "SELECT") return String(input.selectedIndex + 1);
if (radios) {
var at = -1;
radios.forEach(function (r, i) {
if (r.checked) at = i;
});
return at < 0 ? "" : String(at + 1);
}
return undefined;
default:
return undefined;
}
}
function valueOf(els, name) {
for (var i = 0; i < els.length; i++) {
var input = inputOf(els[i]);
if (!input) return (els[i].textContent || "").trim();
if (input.type === "checkbox" || isRadioItem(els[i], input, name)) return input.checked ? "true" : "false";
if (input.type === "radio") {
var hit = radiosOf(input).filter(function (r) {
return r.checked;
})[0];
if (hit) return hit.value;
continue;
}
return input.value;
}
return "";
}
function go(url, newTab) {
if (!url || safeNavigationUrl(url) === "#") return;
url = safeNavigationUrl(url);
if (newTab) {
window.open(url, "_blank", "noopener");
return;
}
if (url.charAt(0) === "#") {
location.hash = url;
return;
}
var r = window.next && window.next.router;
var hard = ((env && env.hardNav) || []).some(function (re) {
return new RegExp(re).test(url);
});
if (url.charAt(0) === "/" && url.charAt(1) !== "/" && !hard && r && r.push) r.push(url);
else location.href = url;
}
function numericAmount(source, self, locals, resolveVar) {
var value = source;
if (typeof source === "string") {
var match = /^\{([^{}\s]+)\}$/.exec(source.trim());
if (!match) return NaN;
value = resolveVar(match[1], self, locals);
}
if (value === null || value === undefined || typeof value === "boolean" ||
(typeof value === "string" && !value.trim())) return NaN;
var number;
try { number = Number(value); } catch (e) { return NaN; }
return Number.isFinite(number) ? number : NaN;
}
var prefix = "";
var mem = Object.create(null);
var sharedDomain = (env && env.sharedDomain) || "";
function domainAttr() {
var h = location.hostname;
return sharedDomain && (h === sharedDomain || h.slice(-sharedDomain.length - 1) === "." + sharedDomain)
? "; Domain=" + sharedDomain
: "";
}
function lsGet(k) {
try {
return localStorage.getItem(k);
} catch (e) {
return null;
}
}
function ckName(k) {
return "ls_" + encodeURIComponent(k);
}
function ckGet(k) {
return cookieGet(ckName(k));
}
function cookieGet(name) {
var n = name + "=";
var raw;
try { raw = document.cookie; } catch (e) { return null; }
if (!raw) return null;
var parts = raw.split("; ");
for (var i = 0; i < parts.length; i++) {
if (parts[i].indexOf(n) !== 0) continue;
try {
return decodeURIComponent(parts[i].slice(n.length));
} catch (e) {
return null;
}
}
return null;
}
function ckSet(k, v, age) {
document.cookie =
ckName(k) + "=" + encodeURIComponent(v) + "; path=/; max-age=" + age + "; SameSite=Lax" +
(location.protocol === "https:" ? "; Secure" : "");
}
function scSet(k, v) {
document.cookie =
encodeURIComponent(k) + "=" + encodeURIComponent(v) + "; Max-Age=31536000; Path=/" + domainAttr() +
"; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : "");
return cookieGet(encodeURIComponent(k)) === v;
}
function encodeStored(value) {
if (typeof value === "string" && decodeStored(value) === value) return value;
return "tsumu-store-v1:" + JSON.stringify({
value: value === undefined ? null : value,
missing: value === undefined
});
}
function decodeStored(raw) {
if (raw == null) return undefined;
if (typeof raw !== "string" || !raw.startsWith("tsumu-store-v1:")) return raw;
try {
var data = JSON.parse(raw.slice("tsumu-store-v1:".length));
if (!data || typeof data !== "object" ||
!has(data, "missing") || !has(data, "value") ||
typeof data.missing !== "boolean") return raw;
return data.missing ? undefined : data.value;
} catch (e) {
return raw;
}
}
function storeGet(key, shared) {
var k = prefix + key;
if (shared) {
var s = cookieGet(encodeURIComponent(k));
if (s != null) return decodeStored(s);
}
var v = lsGet(k);
if (v == null) v = ckGet(k);
if (v == null && has(mem, k)) v = mem[k];
return decodeStored(v);
}
function storeSet(key, v, shared) {
var k = prefix + key;
try { v = encodeStored(v); } catch (e) { return; }
try {
if (shared && scSet(k, v)) {
try {
localStorage.removeItem(k);
} catch (e) {}
if (ckGet(k) != null) ckSet(k, "", 0);
delete mem[k];
return;
}
} catch (e) {}
try {
localStorage.setItem(k, v);
if (localStorage.getItem(k) === v) {
if (ckGet(k) != null) ckSet(k, "", 0);
delete mem[k];
return;
}
} catch (e) {}
try {
localStorage.removeItem(k);
} catch (e) {}
try {
ckSet(k, v, 31536000);
if (ckGet(k) === v) {
delete mem[k];
return;
}
} catch (e) {}
mem[k] = v;
}
return {
install: function (root, initialVars, pageListRows) {
var alive = true;
var pageGeneration = 0;
var pageBody = null;
var pageId = null;
var pageSeeds = null;
var pendingSleeps = new Set();
function cancelPendingSleeps() {
pendingSleeps.forEach(function (task) {
clearTimeout(task.timer);
task.resolve();
});
pendingSleeps.clear();
}
function sleep(s) {
return new Promise(function (resolve) {
var task = { timer: null, resolve: resolve };
task.timer = setTimeout(function () {
pendingSleeps.delete(task);
resolve();
}, Math.min(86400, Math.max(0, s)) * 1000);
pendingSleeps.add(task);
});
}
function syncPage(checkSeeds) {
var body = root.querySelector("[data-page-body]");
var pid = body ? body.getAttribute("data-page-body") : null;
var changed = body !== pageBody || pid !== pageId;
if (!changed && !checkSeeds) return pageGeneration;
var seedData = body && body.getAttribute("data-list-seeds");
var newData = seedData !== pageSeeds || (changed && !!seedData);
if (changed || newData) {
cancelPendingSleeps();
hovering.forEach(function (timer) { clearTimeout(timer); });
hovering.clear();
pageGeneration++;
pageBody = body;
pageSeeds = seedData;
if (pageId !== null) {
vars = Object.create(null);
if (changed) seen = new WeakSet();
rendered = new WeakSet();
filters.clear();
sorts.clear();
}
pageId = pid;
if (seedData) {
try {
JSON.parse(seedData).forEach(function (entry) {
var value = entry[1];
if (entry[2] === true) {
if (!Number.isSafeInteger(value) || value < 0 || value > 5 * 1024 * 1024) return;
value = new Array(value);
}
writeVarPath(vars, entry[0], value, withinValueLimit);
});
} catch (e) {}
}
}
return pageGeneration;
}
function activeRun(cause) {
var generation = syncPage(true);
var stepsRun = 0;
function active() {
return alive && generation === syncPage() && stepsRun < 20000;
}
active.consume = function () {
if (!active()) return false;
stepsRun++;
return true;
};
active.resetBudget = function () { stepsRun = 0; };
active.cause = cause;
return active;
}
var vars = initialVars && typeof initialVars === "object"
? Object.assign(Object.create(null), initialVars) : Object.create(null);
var missingVar = {};
function getVar(name, missing) {
var source = vars;
return has(source, name) ? source[name] : dig(source, name, missing);
}
function writeVar(name, v, editingList) {
var rootName = writeVarPath(vars, name, v, withinValueLimit, editingList);
if (rootName === undefined) return false;
if (typeof window !== "undefined" && typeof window.__siteVarsOnChange === "function") {
window.__siteVarsOnChange(rootName, vars[rootName]);
}
return true;
}
function inTpl(el) {
return !!(el.closest && el.closest("[data-tpl]"));
}
function namedFields(self, name) {
try {
var fields = Array.prototype.slice.call(root.querySelectorAll('[name="' + CSS.escape(name) + '"]'))
.filter(function (el) {
return !inTpl(el) && el.matches("input,select,textarea") && (!el.id || el.type === "radio");
});
if (!fields.length) return fields;
var owner = self && (self.form || (self.closest && self.closest("form")));
if (!owner || !fields.some(function (el) { return el.form === owner; })) owner = fields[0].form;
return fields.filter(function (el) { return el.form === owner; });
} catch (e) {
return [];
}
}
function find(self, target) {
if (!target || target === "@self") return self ? [self] : [];
var els;
try {
els = Array.prototype.slice
.call(root.querySelectorAll("#" + CSS.escape(target)))
.filter(function (el) {
return !inTpl(el);
});
} catch (e) {
return [];
}
if (els.length > 1) {
var rowSelector = "[data-row],[data-item]";
var row = self && self.closest && self.closest(rowSelector);
while (row) {
var mine = els.filter(function (el) { return row.contains(el); });
if (mine.length) return mine;
row = row.parentElement && row.parentElement.closest(rowSelector);
}
}
return els;
}
function lookup(name, self, item) {
var dot = name.indexOf(".");
var head = dot < 0 ? name : name.slice(0, dot);
if (item && (has(item, name) || has(item, head)))
return has(item, name) ? item[name] : dig(item, name);
if (has(vars, name) || has(vars, head)) return getVar(name);
var prop = dot < 0 ? "" : name.slice(dot + 1);
var els = find(self, head);
if (!els.length) els = namedFields(self, head);
if (els.length) {
var state = prop ? stateOf(els, prop, head) : undefined;
return state !== undefined ? state : valueOf(els, head);
}
try {
var q = new URLSearchParams(location.search).get(name);
if (q != null) return q;
} catch (e) {}
return "";
}
function scriptReference(ref, self, item) {
if (!ref || typeof ref !== "object" ||
typeof ref.name !== "string" || !ref.name) return undefined;
var name = ref.name, head = name.split(".")[0];
if (item && (has(item, name) || has(item, head))) {
return has(item, name) ? item[name] : dig(item, name);
}
var row = self && self.closest && self.closest("[data-row]");
var scope = row && rowScopes.get(row);
if (scope && (has(scope, name) || has(scope, head))) {
return has(scope, name) ? scope[name] : dig(scope, name);
}
return has(ref, "fallback") ? ref.fallback : lookup(name, self, item);
}
function scriptExpression(s, self, item, mode) {
var offset = 0;
return s.scriptParts.map(function (part) {
if (typeof part === "string") { offset += part.length; return part; }
var v = text(scriptReference(part, self, item)), at = offset++;
if (mode !== "url") return v;
return at === 0 && (/^(?:https?:|mailto:|tel:|data:image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon)[;,])/i.test(v) || (v.charAt(0) === "/" && v.charAt(1) !== "/") || v.charAt(0) === "#")
? v : encodeURIComponent(v);
}).join("");
}
function resolve(s, self, item) {
if (s && Array.isArray(s.scriptParts)) return scriptExpression(s, self, item, "text");
var source;
try { source = String(s == null ? "" : s); } catch (e) { return ""; }
return source.replace(/\\\{|\{([^{}\s"'<>`]+)\}/g, function (m, k) {
if (k == null) return "{";
return text(lookup(k.trim(), self, item));
});
}
function resolveUrl(s, self, item) {
if (s && Array.isArray(s.scriptParts)) return scriptExpression(s, self, item, "url");
var source;
try { source = String(s == null ? "" : s); } catch (e) { return ""; }
return source.replace(
/\\\{|\{([^{}\s"'<>`]+)\}|%7B(.*?)%7D/gi,
function (m, a, b, at) {
if (m === "\\{") return "{";
var k = a;
if (k == null) {
try {
k = decodeURIComponent(b);
} catch (e) {
return m;
}
if (!/^[^{}\s"'<>`]+$/.test(k)) return m;
}
var v = text(lookup(k.trim(), self, item));
return at === 0 && (/^(?:https?:|mailto:|tel:|data:image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon)[;,])/i.test(v) || (v.charAt(0) === "/" && v.charAt(1) !== "/") || v.charAt(0) === "#")
? v
: encodeURIComponent(v);
}
);
}
function refreshLive() {
root.querySelectorAll("[data-live]").forEach(function (el) {
if (inTpl(el)) return;
var t = el.firstChild;
if (!t || t.nodeType !== 3) {
t = document.createTextNode("");
el.insertBefore(t, el.firstChild);
}
var next = resolve(el.getAttribute("data-live"), el);
if (t.nodeValue !== next) t.nodeValue = next;
});
root.querySelectorAll("[data-live-placeholder]").forEach(function (el) {
if (inTpl(el)) return;
el.placeholder = resolve(el.getAttribute("data-live-placeholder"), el);
});
var liveValues = Array.prototype.slice.call(root.querySelectorAll("[data-live-value]"));
liveValues.sort(function (a, b) {
return Number(b.tagName === "OPTION") - Number(a.tagName === "OPTION");
});
liveValues.forEach(function (el) {
if (inTpl(el) || el.hasAttribute("data-edited")) return;
var nv = resolve(el.getAttribute("data-live-value"), el);
if (el.value !== nv) el.value = nv;
});
["text", "placeholder", "value"].forEach(function (name) {
var fieldNodes = Array.prototype.slice.call(root.querySelectorAll("[data-field-" + name + "-parts]"));
if (name === "value") fieldNodes.sort(function (a, b) {
return Number(b.tagName === "OPTION") - Number(a.tagName === "OPTION");
});
fieldNodes.forEach(function (el) {
if (inTpl(el)) return;
var row = el.closest("[data-row]");
fillFieldParts(el, row && rowScopes.get(row) || {}, false, name);
});
});
}
function onLiveInput(e) {
if (e.isTrusted && e.target && e.target.setAttribute) e.target.setAttribute("data-edited", "");
refreshLive();
}
function setVar(name, v, editingList) {
if (typeof name !== "string" || !name || Object.is(getVar(name, missingVar), v)) return;
var owner = root.querySelector("[data-page-body]");
var watching = [];
var changedRoot = name.split(".")[0];
if (owner) parse(owner).forEach(function (s) {
if (s.trigger !== "change" || typeof s.changeVariable !== "string" || !s.changeVariable) return;
var watched = s.changeVariable;
if (watched.split(".")[0] === changedRoot)
watching.push({ script: s, name: watched, before: getVar(watched) });
});
if (!writeVar(name, v, editingList)) return;
refreshLive();
var rk = name.split(".")[0];
root.querySelectorAll("[data-client-list]").forEach(function (list) {
var a = list.getAttribute("data-array") || "";
if (a === name || a.indexOf(name + ".") === 0 || a === rk || a.indexOf(rk + ".") === 0) renderList(list);
});
watching.forEach(function (entry) {
if (Object.is(entry.before, getVar(entry.name)) ||
!alive || owner !== root.querySelector("[data-page-body]")) return;
runTriggered(entry.script.steps, owner, entry.script, currentCause);
});
}
function readInput(raw, self, scope) {
if (raw && typeof raw.inputRef === "string") {
var ref = raw.rawRef || { name: raw.inputRef };
if (has(raw, "raw")) ref.fallback = raw.raw;
return scriptReference(ref, self, scope);
}
if (raw && typeof raw === "object" && Array.isArray(raw.scriptParts))
return resolve(raw, self, scope);
if (typeof raw !== "string") return raw;
var source = raw.trim();
var reference = /^\{([^{}\s"'<>]+)\}$/.exec(source);
if (reference) return lookup(reference[1], self, scope);
if (source === "true" || source === "false" || source === "null" ||
source.charAt(0) === "[" || source.charAt(0) === "{" ||
/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(source) ||
(source.length >= 2 && source.charAt(0) === '"' && source.charAt(source.length - 1) === '"')) {
try { return JSON.parse(source); } catch (e) {}
}
return resolve(raw, self, scope);
}
function configuredInput(value) {
return typeof value === "string" ? !!value.trim() :
!!value && (typeof value.inputRef === "string" || Array.isArray(value.scriptParts));
}
function test(c, self, sc) {
if (!c || typeof c !== "object") return false;
if (c.subject === "var") {
if (!configuredInput(c.left)) return false;
var matched = matchValueCondition(readInput(c.left, self, sc), c.op || "eq", readInput(c.value, self, sc));
return c.not ? !matched : matched;
}
if (typeof c.target !== "string" || !c.target.trim()) return false;
var els = find(self, c.target);
if (!els.length) return false;
var r = false;
if (c.subject === "value") {
var w = resolve(c.value, self, sc);
var box = els.length ? inputOf(els[0]) : null;
if (box && (box.type === "checkbox" || isRadioItem(els[0], box))) {
var on = !!box.checked;
if (c.op === "empty") return c.not ? on : !on;
if (!c.op || c.op === "eq") {
var same = truthy(w) === on;
return c.not ? !same : same;
}
}
var matches = matchValueCondition(valueOf(els), c.op || "eq", w);
return c.not ? !matches : matches;
}
if (c.subject === "checked") {
r = els.some(function (el) {
var i = inputOf(el);
return !!(i && i.checked);
});
}
return c.not ? !r : r;
}
function testConditions(step, self, scope) {
var extras = Array.isArray(step.conditions) ? step.conditions : [];
if (extras.length > 32) return false;
var groups = [[step.cond]];
extras.forEach(function (condition) {
if (!condition || typeof condition !== "object") return;
if (!condition.and) groups.push([]);
if (condition.subject !== "var" ||
configuredInput(condition.left))
groups[groups.length - 1].push(condition);
});
return groups.some(function (group) {
return group.length > 0 && group.every(function (condition) {
return test(condition, self, scope);
});
});
}
var filters = new Map();
function fieldOf(item, f) {
if (item == null) return undefined;
return has(item, f) ? item[f] : dig(item, f);
}
function filterText(v) {
return formatValueText(v, true);
}
function passOne(conds, item) {
if (!conds.length) return true;
var groups = [[]];
conds.forEach(function (c, i) {
if (i && !c.and) groups.push([]);
groups[groups.length - 1].push(c);
});
return groups.some(function (group) {
return group.every(function (c) {
var fv = fieldOf(item, c.field);
var matches = matchValueCondition(fv, c.op, c.value);
return c.not ? !matches : matches;
});
});
}
function passes(fs, item) {
return fs.reduce(function (acc, f, i) {
if (i === 0) return passOne(f.conds, item);
return f.join === "or"
? acc || passOne(f.conds, item)
: acc && passOne(f.conds, item);
}, true);
}
var sorts = new Map();
function itemOf(w) {
try {
return JSON.parse(w.getAttribute("data-item")) || {};
} catch (e) {
return {};
}
}
var listCollator;
function order(x, y) {
if (typeof x === "number" && typeof y === "number") return x - y;
if (!listCollator) listCollator = new Intl.Collator("ja", { numeric: true });
return listCollator.compare(filterText(x), filterText(y));
}
function applySort(list) {
var s = sorts.get(list.getAttribute("data-array"));
if (!s) return;
var dir = s.dir === "desc" ? -1 : 1;
var rows = Array.prototype.filter
.call(list.children, function (w) {
return w.hasAttribute("data-item");
})
.map(function (w, i) {
return { w: w, v: fieldOf(itemOf(w), s.field), i: i };
});
rows.sort(function (a, b) {
return order(a.v, b.v) * dir || a.i - b.i;
});
if (
rows.every(function (r, i) {
return r.i === i;
})
) {
return;
}
rows.forEach(function (r) {
list.appendChild(r.w);
});
}
function relist(name) {
listsOf(name).forEach(function (list) {
if (list.hasAttribute("data-client-list")) {
renderList(list);
return;
}
applySort(list);
applyFilters(list);
});
}
function applyFilters(list) {
var fs = filters.get(list.getAttribute("data-array")) || [];
Array.prototype.forEach.call(list.children, function (w) {
if (!w.hasAttribute("data-item")) return;
w.style.display = passes(fs, itemOf(w)) ? "contents" : "none";
});
}
function listsOf(name) {
try {
return Array.prototype.slice.call(
root.querySelectorAll('[data-array="' + CSS.escape(name) + '"]')
).filter(function (list) { return !inTpl(list); });
} catch (e) {
return [];
}
}
var toListItem = (function et(e){return null===e||"object"!=typeof e||Array.isArray(e)?{値:e}:e});
var rendered = new WeakSet();
var rowScopes = new WeakMap();
function listJson(list, name, fallback) {
try { return JSON.parse(list.getAttribute(name)) || fallback; } catch (e) { return fallback; }
}
function fillScriptJson(v, item) {
function fillValue(value) {
if (typeof value === "string") return JSON.parse(fillJson(JSON.stringify(value), item));
if (!value || typeof value !== "object") return value;
if (Array.isArray(value.scriptParts)) return value;
if (Array.isArray(value)) return value.map(fillValue);
var out = Object.create(null);
Object.keys(value).forEach(function (key) {
out[key] = (key === "rawRef" || key === "transform" || key === "raw") ? value[key] : fillValue(value[key]);
});
return out;
}
try { return JSON.stringify(fillValue(JSON.parse(v))); } catch (e) { return v; }
}
function fillJson(v, item) {
return v
.replace(/\\\\\{|\{([^{}\s"'<>`]+)\}/g, function (m, k) {
if (k == null) return m;
return JSON.stringify(text(lookup(k.trim(), null, item))).slice(1, -1);
})
.replace(/%7B(.*?)%7D/gi, function (m, b, at, all) {
try {
var k = decodeURIComponent(b).trim();
if (!/^[^{}\s"'<>`]+$/.test(k)) return m;
var v = text(lookup(k, null, item));
if (all.charAt(at - 1) === '"' && (/^(?:https?:|mailto:|tel:|data:image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon)[;,])/i.test(v) || (v.charAt(0) === "/" && v.charAt(1) !== "/") || v.charAt(0) === "#")) {
return JSON.stringify(v).slice(1, -1);
}
return encodeURIComponent(v);
} catch (e) {
return m;
}
});
}
function fillFieldParts(n, item, initial, only) {
["min", "max", "step", "accept", "placeholder", "text", "value"].forEach(function (name) {
if (only && name !== only) return;
var attr = "data-field-" + name + "-parts";
if (!n.hasAttribute(attr)) return;
var parts = listJson(n, attr, []);
if (!initial && (!parts.some(function (p) { return p && p.live; }) || (name === "value" && n.hasAttribute("data-edited")))) return;
var value = parts.map(function (p) {
if (typeof p === "string") return p;
if (has(item, p.name) || has(item, p.name.split(".")[0])) return text(has(item, p.name) ? item[p.name] : dig(item, p.name));
return p.live || !has(p, "fallback") ? text(lookup(p.name, n, item)) : p.fallback;
}).join("");
if (name === "text") {
if (n.textContent !== value) n.textContent = value;
} else if (name === "value") {
if (initial && n.tagName === "SELECT") {
var options = Array.prototype.slice.call(n.options), found = options.findIndex(function (o) { return o.value === value; });
var selected = found < 0 ? (options.length ? 0 : -1) : found;
options.forEach(function (o, i) { o.defaultSelected = i === selected; });
n.selectedIndex = selected;
} else {
if (initial) n.defaultValue = value;
if (n.value !== value) n.value = value;
}
} else if (n.getAttribute(name) !== value) n.setAttribute(name, value);
});
}
function fill(n, item) {
if (n.nodeType === 3) {
if (n.nodeValue.indexOf("{") >= 0) n.nodeValue = resolve(n.nodeValue, null, item);
return;
}
if (n.nodeType !== 1 || n.hasAttribute("data-tpl")) return;
Array.prototype.slice.call(n.attributes).forEach(function (a) {
if ((a.name === "alt" && n.tagName === "IMG") ||
(a.name === "src" && (n.tagName === "AUDIO" || n.tagName === "VIDEO" || n.tagName === "IFRAME"))) return;
if (a.name.indexOf("data-field-") === 0 || n.hasAttribute("data-field-" + a.name + "-parts") ||
a.name === "data-list-ops" || a.name === "data-text-parts" || a.name === "data-href-parts" || a.name === "data-image-src-parts" ||
(a.name === "href" && n.hasAttribute("data-href-parts")) ||
(a.name === "src" && n.hasAttribute("data-image-src-parts"))) return;
var v = a.value;
if (v.indexOf("{") < 0 && !/%7B/i.test(v)) return;
n.setAttribute(
a.name,
a.name === "data-scripts"
? fillScriptJson(v, item)
: a.name === "href"
? safeNavigationUrl(resolveUrl(v, null, item))
: a.name === "src"
? resolve(v, null, item) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
: resolve(v, null, item)
);
});
if (n.hasAttribute("data-href-parts")) {
var href = listJson(n, "data-href-parts", []).map(function (part) {
if (typeof part === "string") return part;
var v = has(item, part.name) || has(item, part.name.split(".")[0])
? text(has(item, part.name) ? item[part.name] : dig(item, part.name))
: has(part, "fallback") ? part.fallback : text(lookup(part.name, null, item));
if (part.at === 0 && (/^(?:https?:|mailto:|tel:|data:image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon)[;,])/i.test(v) || (v.charAt(0) === "/" && v.charAt(1) !== "/") || v.charAt(0) === "#")) return v;
return encodeURIComponent(v);
}).join("");
n.setAttribute("href", safeNavigationUrl(href));
}
if (n.hasAttribute("data-image-src-parts")) {
var src = listJson(n, "data-image-src-parts", []).map(function (part) {
if (typeof part === "string") return part;
if (has(item, part.name) || has(item, part.name.split(".")[0])) {
return text(has(item, part.name) ? item[part.name] : dig(item, part.name));
}
return has(part, "fallback") ? part.fallback : text(lookup(part.name, null, item));
}).join("");
n.setAttribute("src", src || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
}
if (n.hasAttribute("data-raw")) return;
var ownText = null;
if (n.hasAttribute("data-text-parts")) {
var value = listJson(n, "data-text-parts", []).map(function (part) {
if (typeof part === "string") return part;
if (has(item, part.name) || has(item, part.name.split(".")[0])) {
return text(has(item, part.name) ? item[part.name] : dig(item, part.name));
}
return has(part, "fallback") ? part.fallback : text(lookup(part.name, null, item));
}).join("");
ownText = n.firstChild;
if (!ownText || ownText.nodeType !== 3) {
ownText = document.createTextNode("");
if (n.firstChild) n.insertBefore(ownText, n.firstChild);
else n.appendChild(ownText);
}
ownText.nodeValue = value;
}
if (!n.hasAttribute("data-field-text-parts") && !(n.tagName === "TEXTAREA" && n.hasAttribute("data-field-value-parts"))) {
for (var c = n.firstChild; c; c = c.nextSibling) if (c !== ownText) fill(c, item);
}
fillFieldParts(n, item, true);
}
function renderList(list) {
if (inTpl(list) || !root.contains(list)) return;
rendered.add(list);
var tpl = null, fallback = null;
Array.prototype.slice.call(list.children).forEach(function (c) {
if (c.hasAttribute("data-row")) list.removeChild(c);
else if (c.hasAttribute("data-list-fallback")) fallback = c;
else if (c.hasAttribute("data-tpl")) tpl = c;
});
if (!tpl) return;
var parentRow = list.parentElement && list.parentElement.closest("[data-row]");
var parentScope = parentRow && rowScopes.get(parentRow) || {};
var scope = merged(vars, parentScope);
var name = list.getAttribute("data-array") || "";
var value = has(scope, name) ? scope[name] : dig(scope, name);
if (!has(scope, name) && !has(scope, name.split(".")[0]) && fallback) {
Array.prototype.forEach.call(fallback.children, function (row) { list.appendChild(row.cloneNode(true)); });
applySort(list);
applyFilters(list);
return;
}
var items = pageListRows ? pageListRows(value, name, scope) :
value && typeof value === "object" ? Object.values(value).map(toListItem) : [];
var ops = listJson(list, "data-list-ops", []);
var baseFilters = ops.filter(function (op) { return op.kind === "filter"; }).map(function (op) {
return { join: op.join, conds: op.conds.map(function (c) {
function resolve(part) {
if (typeof part === "string") return part;
if (has(parentScope, part.name) || has(parentScope, part.name.split(".")[0])) {
var own = has(parentScope, part.name) ? parentScope[part.name] : dig(parentScope, part.name);
return c.raw ? own : text(own);
}
if (has(part, "fallback")) return part.fallback;
var value = lookup(part.name, null, parentScope);
return c.raw ? value : text(value);
}
return { field: c.field, op: c.op, and: c.and, not: c.not,
value: c.raw ? resolve(c.parts[0]) : parseValueLiteral(c.parts.map(resolve).join("")) };
}) };
});
items = items.filter(function (x) { return passes(baseFilters, x); });
ops.forEach(function (op) {
if (op.kind !== "sort") return;
items.sort(function (a, b) { return order(fieldOf(a, op.field), fieldOf(b, op.field)) * (op.dir === "desc" ? -1 : 1); });
});
var fs = filters.get(name) || [];
items = items.filter(function (x) {
return passes(fs, x);
});
var so = sorts.get(name);
if (so) {
var sd = so.dir === "desc" ? -1 : 1;
items = items
.map(function (x, i) {
return { x: x, i: i };
})
.sort(function (a, b) {
return order(fieldOf(a.x, so.field), fieldOf(b.x, so.field)) * sd || a.i - b.i;
})
.map(function (r) {
return r.x;
});
}
var lim = Number(list.getAttribute("data-limit")) || 0;
if (lim > 0) items = items.slice(0, lim);
items.forEach(function (item) {
var row = document.createElement("div");
row.setAttribute("data-row", "");
row.setAttribute("data-item", JSON.stringify(item));
row.style.display = "contents";
var itemScope = merged(parentScope, item);
rowScopes.set(row, itemScope);
Array.prototype.forEach.call(tpl.childNodes, function (c) {
var copy = c.cloneNode(true);
fill(copy, itemScope);
row.appendChild(copy);
});
list.appendChild(row);
row.querySelectorAll("[data-client-list]").forEach(function (child) {
if (!inTpl(child) && !rendered.has(child)) renderList(child);
});
});
}
function setValue(self, id, v) {
var els = find(self, id);
if (!els.length) els = namedFields(self, id);
var first = els.length ? inputOf(els[0]) : null;
if (first && first.type === "file" && v !== "") return;
var toggle = !!first && (first.type === "checkbox" || isRadioItem(els[0], first, id));
if (toggle) v = truthy(v) ? "true" : "false";
else if (first && first.type === "radio") els = radiosOf(first);
var select = first && first.tagName === "SELECT";
var scalar = first && !select && first.type !== "checkbox" && first.type !== "radio";
if (valueOf(els, id) === v && !(select && first.selectedIndex < 0)) return;
var changed = [];
els.forEach(function (el) {
var input = inputOf(el);
if (!input) return;
if (input.type === "checkbox" || input.type === "radio") {
var on = toggle ? v === "true" : input.value === v;
if (input.checked === on) return;
input.checked = on;
if (!on && input.type === "radio") return;
} else if (input.tagName === "SELECT") {
var before = input.selectedIndex;
input.value = v;
if (input.selectedIndex === before) return;
} else {
if (input.value === v || (input.type === "file" && v !== "")) return;
var beforeValue = input.value;
input.value = v;
if (input.value === beforeValue) return;
}
changed.push(input);
});
if ((select || scalar) && !changed.length) return;
if (scalar) v = first.value;
if (!changed.length) refreshLive();
changed.forEach(function (input) {
input.dispatchEvent(new Event("input", { bubbles: true }));
input.dispatchEvent(new Event("change", { bubbles: true }));
});
}
function scopeOf(cx) {
if (!cx) return undefined;
var parent = scopeOf(cx.up);
var o = Object.assign(Object.create(null), parent);
if (cx.item) for (var k in cx.item) if (has(cx.item, k)) o[k] = cx.item[k];
o["ループ"] = {
"値": cx.raw,
"キー": cx.key,
"順番": cx.index,
"外側": parent && parent["ループ"]
};
return o;
}
function merged(a, b) {
var o = Object.create(null);
var k;
for (k in a || {}) if (has(a, k)) o[k] = a[k];
for (k in b || {}) if (has(b, k)) o[k] = b[k];
return o;
}
function transformScope(transform, self, local) {
var scope = merged(vars, local);
var count = 0;
function include(name) {
if (!name || count++ >= 64) return;
var rootName = name.split(".")[0];
if (has(scope, name) || has(scope, rootName)) return;
var exists = !!find(self, rootName).length || !!namedFields(self, rootName).length;
if (!exists) {
try { exists = new URLSearchParams(location.search).has(name); } catch (e) {}
}
if (exists) scope[name] = lookup(name, self, local);
}
function scan(value, depth) {
if (depth > 4) return;
if (typeof value === "string") {
var pos = 0;
while ((pos = value.indexOf("{", pos)) >= 0) {
var end = value.indexOf("}", pos + 1);
if (end < 0) break;
var name = value.slice(pos + 1, end);
var escaped = pos > 0 && value.charCodeAt(pos - 1) === 92;
if (!escaped && name && !Array.from(name).some(function (char) {
return char <= " " || char === "{" || char === "}" ||
char === '"' || char === "'" || char === "<" || char === ">" ||
char.charCodeAt(0) === 96;
})) include(name);
pos = end + 1;
}
} else if (Array.isArray(value)) {
value.forEach(function (entry) { scan(entry, depth + 1); });
} else if (value && typeof value === "object") {
Object.keys(value).forEach(function (key) { scan(value[key], depth + 1); });
}
}
scan(transform, 0);
if (transform.operandType === "variable" && typeof transform.operand === "string")
include(transform.operand);
return scope;
}
function exec(st, self, cx) {
var sc = scopeOf(cx);
switch (st.kind) {
case "show":
find(self, st.target).forEach(show);
break;
case "hide":
find(self, st.target).forEach(hide);
break;
case "toggle":
find(self, st.target).forEach(function (el) {
if (isHidden(el)) show(el);
else hide(el);
});
break;
case "set-state": {
var state = typeof st.state === "string" ? st.state.trim() : "";
var valid = state === "default" || state === "" ||
(state.length <= 40 && /^[\p{L}\p{N}_][\p{L}\p{N}_ -]*$/u.test(state) &&
["hover", "active", "focus"].indexOf(state) < 0);
if (!valid) break;
find(self, st.target).forEach(function (el) {
if (!state || state === "default") el.removeAttribute("data-site-state");
else el.setAttribute("data-site-state", state);
});
break;
}
case "open-page":
go(st.href, st.newTab);
break;
case "open-url": {
var url = resolveUrl(st.url, self, sc);
go(url, st.newTab);
break;
}
case "set-value":
setValue(self, st.target, resolve(st.value, self, sc));
break;
case "set-enabled": {
var targets = find(self, st.target);
var controls = new Set(targets.length ? [] : namedFields(self, st.target));
targets.forEach(function (el) {
var ctl = el.matches("button") ? el : inputOf(el);
if (!ctl) return;
if (ctl.type === "radio" && !isRadioItem(el, ctl)) {
radiosOf(ctl).forEach(function (c) { controls.add(c); });
} else controls.add(ctl);
});
controls.forEach(function (c) {
c.disabled = st.op === "toggle" ? !c.disabled : st.op === "disable";
});
refreshLive();
break;
}
case "list-display": {
if (!st.array) break;
if (st.mode === "filter") {
if (!Array.isArray(st.conds) || !st.conds.length ||
!st.conds.every(function (c) {
return c && typeof c === "object" && typeof c.field === "string";
})) break;
var fs = (filters.get(st.array) || []).slice();
var key = st.no != null ? "n" + st.no : "f" +
st.conds.map(function (c) { return c.field; }).sort().join("|");
var entry = {
key: key, no: st.no, join: st.join,
conds: st.conds.map(function (c) {
return { field: c.field, op: c.op, value: readInput(c.value, self, sc), not: c.not, and: c.and };
}),
};
var at = -1;
fs.forEach(function (f, i) { if (f.key === key) at = i; });
if (at >= 0) fs[at] = entry;
else fs.push(entry);
filters.set(st.array, fs);
} else if (st.mode === "sort") {
if (!st.field) break;
sorts.set(st.array, { field: st.field, dir: st.dir });
} else if (st.mode === "clear") {
if (st.no != null) {
filters.set(st.array, (filters.get(st.array) || []).filter(function (f) { return f.no !== st.no; }));
} else {
filters.delete(st.array);
}
} else break;
relist(st.array);
break;
}
case "store-save":
if (st.key) storeSet(st.key, readInput(st.value, self, sc), !!st.shared);
break;
case "store-load":
setVar(st.into, st.key ? storeGet(st.key, !!st.shared) : undefined);
break;
case "transform": {
if (!st.source || !st.into || !st.transform || typeof st.transform !== "object") break;
var inputValue = sc && (has(sc, st.source) ? sc[st.source] : dig(sc, st.source));
var sourceRoot = st.source.split(".")[0];
var localShadows = !!(sc && (has(sc, st.source) || has(sc, sourceRoot)));
var shadowed = localShadows || (!st.serverSource && (has(vars, st.source) || has(vars, sourceRoot)));
if (!localShadows && st.serverSource && "serverValue" in st) {
setVar(st.into, st.serverValue);
break;
}
if (inputValue === undefined && !localShadows) inputValue = getVar(st.source);
if (inputValue === undefined && !shadowed && st.rawRef) inputValue = scriptReference(st.rawRef, self, sc);
if (inputValue === undefined && !shadowed && "raw" in st) inputValue = st.raw;
if (inputValue === undefined && !shadowed &&
st.transform.kind !== "fallback")
inputValue = lookup(st.source, self, sc);
var transformed = evalRecipe(inputValue, [st.transform], transformScope(st.transform, self, sc));
if (transformed.kind === "value") setVar(st.into, transformed.value);
else if (transformed.kind === "missing") setVar(st.into, undefined);
else if (transformed.kind === "error")
console.warn("Value transform failed:", transformed.code, st.transform.kind, st.source, st.into);
break;
}
case "set-list-item": {
if (!st.list || typeof st.list !== "string") break;
var sourceList = getVar(st.list);
if (!sourceList || typeof sourceList !== "object") break;
var providedKey = configuredInput(st.key);
var rawKey = providedKey ? readInput(st.key, self, sc) : undefined;
if (providedKey && (rawKey === null || typeof rawKey !== "string" && typeof rawKey !== "number")) break;
var newValue = readInput(st.value, self, sc);
if (Array.isArray(sourceList)) {
var nextArray = sourceList.slice();
var targetIndex = providedKey ? Number(rawKey) : nextArray.length;
if (!Number.isSafeInteger(targetIndex) || targetIndex < 0 ||
targetIndex > nextArray.length || nextArray.length >= 10000 && targetIndex === nextArray.length) break;
nextArray[targetIndex] = newValue;
setVar(st.list, nextArray, true);
} else {
if (!providedKey) break;
var nextKey = String(rawKey);
if (!Object.prototype.hasOwnProperty.call(sourceList, nextKey) && Object.keys(sourceList).length >= 10000) break;
if (nextKey === "__proto__" || nextKey === "prototype" || nextKey === "constructor") break;
var nextObject = Object.assign(Object.create(null), sourceList);
nextObject[nextKey] = newValue;
setVar(st.list, nextObject, true);
}
break;
}
case "remove-list-item": {
if (!st.list || typeof st.list !== "string" ||
!configuredInput(st.value)) break;
var selected = readInput(st.value, self, sc);
var remaining = removeItem(getVar(st.list), st.mode, selected, matchValueCondition);
if (remaining !== undefined) setVar(st.list, remaining, true);
break;
}
case "set-var": {
if (st.rawRef) {
setVar(st.into, scriptReference(st.rawRef, self, sc));
break;
}
if ("raw" in st) {
setVar(st.into, st.raw);
break;
}
var sv = typeof st.value === "string"
? /^\{([^{}\s"'<>]+)\}$/.exec(st.value.trim()) : null;
setVar(st.into, sv ? lookup(sv[1].trim(), self, sc) : readInput(st.value, self, sc));
break;
}
}
}
var LOOP_BREAK = {};
function loop(st, self, cx, n, active, times, forever, depth, nesting) {
if (!active() || (!forever && n >= times)) return Promise.resolve();
var local = { item: {}, array: "", index: n, key: String(n), raw: n, up: cx };
return runSteps(st.then, self, local, active, depth + 1, nesting + 1).then(function (flow) {
if (flow === LOOP_BREAK || !active()) return;
return (forever ? sleep(0.05).then(function () { active.resetBudget(); }) : Promise.resolve()).then(function () {
return loop(st, self, cx, n + 1, active, times, forever, depth, nesting);
});
});
}
function each(st, self, up, i, active, entries, depth, nesting) {
if (!active()) return Promise.resolve();
if (!entries) {
var source = lookup(st.array, self, scopeOf(up));
if (!source || typeof source !== "object") return Promise.resolve();
var keys = Object.keys(source);
if (keys.length > 10000) return Promise.resolve();
entries = keys.map(function (key) { return { key: key, value: source[key] }; });
}
if (i >= entries.length) return Promise.resolve();
var entry = entries[i], value = entry.value;
var item = value && typeof value === "object" && !Array.isArray(value) ? value : { "値": value };
var cx = { array: st.array, index: i, key: entry.key, raw: value, item: item, up: up };
return runSteps(st.then, self, cx, active, depth + 1, nesting + 1).then(function (flow) {
if (flow === LOOP_BREAK) return;
return each(st, self, up, i + 1, active, entries, depth, nesting);
});
}
function runSteps(steps, self, cx, active, loopDepth, nesting) {
if ((nesting || 0) > 16) return Promise.resolve();
var depth = loopDepth || 0;
var i = 0;
function next() {
while (i < steps.length) {
if (!active.consume()) return Promise.resolve();
var st = steps[i++];
if (!st || typeof st !== "object" || typeof st.kind !== "string") continue;
if (st.kind === "break-loop") {
if (depth > 0) return Promise.resolve(LOOP_BREAK);
continue;
}
if (st.kind === "wait") {
var seconds = numericAmount(st.seconds, self, scopeOf(cx), lookup);
if (!Number.isFinite(seconds) || seconds < 0) continue;
return sleep(seconds).then(function () { active.resetBudget(); return next(); });
}
if (st.kind === "if") {
var branch = testConditions(st, self, scopeOf(cx)) ? st.then : st.else;
if (Array.isArray(branch) && branch.length) {
return runSteps(branch, self, cx, active, depth, (nesting || 0) + 1).then(function (flow) {
return flow === LOOP_BREAK ? LOOP_BREAK : next();
});
}
continue;
}
if (st.kind === "repeat") {
if (!Array.isArray(st.then) || !st.then.length) continue;
var count = numericAmount(st.times, self, scopeOf(cx), lookup);
if (!Number.isInteger(count) || count < 0 || count > 1000) continue;
var forever = typeof st.times === "number" && st.times === 0;
if (!forever && count === 0) continue;
return loop(st, self, cx, 0, active, count, forever, depth, nesting || 0).then(next);
}
if (st.kind === "for-each") {
if (!Array.isArray(st.then) || !st.then.length) continue;
return each(st, self, cx, 0, active, null, depth, nesting || 0).then(next);
}
var previous = currentCause;
currentCause = active.cause;
try { exec(st, self, cx); }
finally { currentCause = previous; }
}
return Promise.resolve();
}
return next();
}
var currentCause;
function runTriggered(steps, owner, trigger, parent) {
for (var cause = parent; cause; cause = cause.parent) {
if (cause.owner === owner && cause.trigger === trigger) return;
}
runSteps(steps, owner, undefined, activeRun({ owner: owner, trigger: trigger, parent: parent }));
}
function fire(el, trigger, keep, cause) {
parse(el).forEach(function (s) {
if (s.trigger !== trigger ||
(trigger === "change" && typeof s.changeVariable === "string")) return;
if (keep !== undefined && !!s.keep !== keep) return;
runTriggered(s.steps, el, trigger, cause || currentCause);
});
}
function chain(t) {
var out = [];
var el = t && t.nodeType === 1 ? t : t && t.parentElement;
el = el && el.closest("[data-scripts]");
while (el && root.contains(el)) {
out.push(el);
el = el.parentElement && el.parentElement.closest("[data-scripts]");
}
return out;
}
function clickSteps(el) {
return parse(el).filter(function (s) {
return s.trigger === "click";
});
}
function innerClick(t) {
var els = chain(t);
for (var i = 0; i < els.length; i++) if (clickSteps(els[i]).length) return els[i];
return null;
}
function onClickCapture(e) {
var inner = innerClick(e.target);
var a = inner && inner.parentElement && inner.parentElement.closest("a[href]");
if (a && root.contains(a)) e.preventDefault();
}
function onClick(e) {
var inner = innerClick(e.target);
if (inner) fire(inner, "click");
}
function shownByHover(el) {
var out = [];
function walk(steps) {
(steps || []).forEach(function (st) {
if (st.kind === "show" || st.kind === "toggle") {
find(el, st.target).forEach(function (t) {
if (t !== el && out.indexOf(t) < 0) out.push(t);
});
} else if (st.kind === "if") {
walk(st.then);
walk(st.else);
} else if (st.kind === "repeat" || st.kind === "for-each") {
walk(st.then);
}
});
}
parse(el).forEach(function (s) {
if (s.trigger === "hover-start") walk(s.steps);
});
return out;
}
function keepsHover(el) {
return parse(el).some(function (s) {
return s.trigger === "hover-end" && s.keep;
});
}
var hovering = new Map();
function withinHoverArea(owner, node) {
if (!node || node.nodeType !== 1) return false;
return owner.contains(node) || shownByHover(owner).some(function (shown) {
return root.contains(shown) && shown.contains(node);
});
}
function leaveLater(el) {
clearTimeout(hovering.get(el));
hovering.set(
el,
setTimeout(function () {
if (!alive || !hovering.has(el) || !root.contains(el)) {
hovering.delete(el);
return;
}
syncPage();
if (!hovering.has(el)) return;
var still = [el].concat(shownByHover(el)).some(function (g) {
return root.contains(g) && g.matches(":hover");
});
if (still) {
hovering.set(el, null);
return;
}
hovering.delete(el);
fire(el, "hover-end", true);
}, 150)
);
}
function onOver(e) {
syncPage();
hovering.forEach(function (timer, owner) {
if (timer !== null && withinHoverArea(owner, e.target)) {
clearTimeout(timer);
hovering.set(owner, null);
}
});
chain(e.target).forEach(function (el) {
if (e.relatedTarget && el.contains(e.relatedTarget)) return;
if (hovering.has(el)) {
clearTimeout(hovering.get(el));
hovering.set(el, null);
return;
}
if (keepsHover(el)) hovering.set(el, null);
fire(el, "hover-start");
});
}
function onOut(e) {
var done = [];
chain(e.target).forEach(function (el) {
if (e.relatedTarget && el.contains(e.relatedTarget)) return;
if (hovering.has(el)) {
done.push(el);
if (withinHoverArea(el, e.relatedTarget)) {
clearTimeout(hovering.get(el));
hovering.set(el, null);
} else leaveLater(el);
fire(el, "hover-end", false);
return;
}
fire(el, "hover-end");
});
hovering.forEach(function (t, el) {
if (t === null && done.indexOf(el) < 0 &&
!withinHoverArea(el, e.relatedTarget)) leaveLater(el);
});
}
function onInput(e) {
chain(e.target).forEach(function (el) {
fire(el, "change");
});
}
var seen = new WeakSet();
function scan() {
if (!alive) return;
syncPage(true);
refreshLive();
root.querySelectorAll("[data-client-list]").forEach(function (list) {
if (!rendered.has(list)) renderList(list);
});
if (sorts.size || filters.size) {
root.querySelectorAll("[data-array]").forEach(function (list) {
if (list.hasAttribute("data-client-list") || inTpl(list)) return;
applySort(list);
applyFilters(list);
});
}
root.querySelectorAll("[data-scripts]").forEach(function (el) {
if (seen.has(el) || inTpl(el)) return;
seen.add(el);
var list = parse(el);
if (list.some(function (s) { return s.trigger === "load"; })) {
fire(el, "load");
}
});
}
var queued = false;
var mo = new MutationObserver(function () {
syncPage();
if (queued) return;
queued = true;
requestAnimationFrame(function () {
queued = false;
scan();
});
});
mo.observe(root, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ["data-scripts", "data-page-body", "data-list-seeds"],
});
root.addEventListener("click", onClickCapture, true);
root.addEventListener("click", onClick);
root.addEventListener("mouseover", onOver);
root.addEventListener("mouseout", onOut);
root.addEventListener("input", onInput);
root.addEventListener("input", onLiveInput);
scan();
return function dispose() {
alive = false;
cancelPendingSleeps();
filters.clear();
sorts.clear();
hovering.forEach(function (t) {
clearTimeout(t);
});
hovering.clear();
mo.disconnect();
root.removeEventListener("click", onClickCapture, true);
root.removeEventListener("click", onClick);
root.removeEventListener("mouseover", onOver);
root.removeEventListener("mouseout", onOut);
root.removeEventListener("input", onInput);
root.removeEventListener("input", onLiveInput);
};
},
};
})({"sharedDomain":"matsufes.info","hardNav":["^/navigation/?(?:[?#].*)?$","^/booth/?(?:[?#].*)?$","^/search/[^/]+/?(?:[?#].*)?$","^/tokimeki-dreamworld/?(?:[?#].*)?$","^/yumeuranai/?(?:[?#].*)?$"]}).install(document);
