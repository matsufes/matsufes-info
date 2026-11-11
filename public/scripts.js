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
var writeVarPath = (function ew(e,t,n,s){if("string"!=typeof t||!t)return;let r=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i=(t,n)=>{if(!s||s(n))return Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0}),t};if(r(e,t)||!t.includes("."))return i(t,n);let a=!1,l=(e,t)=>{if(!t.length)return n;let[s,...i]=t;if(Array.isArray(e)){if(!/^(0|[1-9][0-9]*)$/.test(s))return a=!0,e;let t=Number(s);if(!Number.isSafeInteger(t)||t>e.length||t===e.length&&e.length>=1e4)return a=!0,e;let n=e.slice();return n[t]=l(r(e,t)?e[t]:void 0,i),n}let o=e&&"object"==typeof e?e:{};return{...o,[s]:l(r(o,s)?o[s]:void 0,i)}},[o,...c]=t.split(".");if(c.length>64)return;let d=l(r(e,o)?e[o]:void 0,c);return a?void 0:i(o,d)});
var withinValueLimit = (function ej(e){if(null==e)return!0;if("object"!=typeof e)return"number"==typeof e?Number.isFinite(e):"string"==typeof e?e.length<=5242880:"boolean"==typeof e;let t=new WeakMap,n=(e,s)=>{if(s>64)return{cost:1/0,height:0};if(null==e)return{cost:8,height:0};if("object"!=typeof e)return("number"!=typeof e||Number.isFinite(e))&&("number"==typeof e||"string"==typeof e||"boolean"==typeof e)?{cost:"string"==typeof e?e.length+2:8,height:0}:{cost:1/0,height:0};let r=t.get(e);if(r)return s+r.height<=64?r:{cost:1/0,height:0};if(t.set(e,{cost:1/0,height:0}),Array.isArray(e)&&e.length>5242880)return{cost:1/0,height:0};let i=Array.isArray(e)?2+e.length:2,a=0;for(let t of Object.keys(e)){let r=n(e[t],s+1);if(i+=t.length+4+r.cost,a=Math.max(a,r.height+1),i>5242880)return{cost:1/0,height:0}}let l={cost:i,height:a};return t.set(e,l),l};return n(e,0).cost<=5242880});
var matchValueCondition = (function eb(e,t,n){let s=e=>null!==e&&"object"==typeof e,r=e=>{if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||!/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(e.trim()))return;let t=Number(e.trim());return Number.isFinite(t)?t:void 0},i=(e,t,n=0)=>{if("number"==typeof e&&!Number.isFinite(e)||"number"==typeof t&&!Number.isFinite(t))return!1;if(e===t)return!0;if("string"==typeof e&&("boolean"==typeof t||"number"==typeof t&&Number.isFinite(t)))return e===String(t);if("string"==typeof t&&("boolean"==typeof e||"number"==typeof e&&Number.isFinite(e)))return String(e)===t;if(!s(e)||!s(t)||n>=16)return!1;let r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&!(r.length>1e4)&&r.every(s=>Object.prototype.hasOwnProperty.call(t,s)&&i(e[s],t[s],n+1))};if("has-key"===t)return!(!s(e)||s(n))&&null!=n&&Object.prototype.propertyIsEnumerable.call(e,String(n));if("empty"===t)return null==e||""===e||!!s(e)&&0===Object.keys(e).length;if("contains"===t)return s(e)?Object.keys(e).some(t=>i(e[t],n)):null!=e&&!s(n)&&String(e).includes(String(n));if("eq"===t||void 0===t)return i(e,n);if("in"===t)return s(n)?Object.keys(n).some(t=>i(n[t],e)):"string"==typeof n&&n.split(",").some(t=>i(e,t.trim()));if("starts-with"===t||"ends-with"===t){if(null==e||s(e)||s(n))return!1;let r=String(e),i=String(n);return"starts-with"===t?r.startsWith(i):r.endsWith(i)}if("gt"===t||"gte"===t||"lt"===t||"lte"===t){let s=r(e),i=r(n);return void 0!==s&&void 0!==i&&("gt"===t?s>i:"gte"===t?s>=i:"lt"===t?s<i:s<=i)}return!1});
var parseValueLiteral = (function ey(e){let t=e.trim();if("true"===t||"false"===t||"null"===t||t.startsWith("[")||t.startsWith("{")||/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(t)||t.length>=2&&t.startsWith('"')&&t.endsWith('"'))try{return JSON.parse(t)}catch{}return e});
var __name = function (fn) { return fn; };
var evalRecipe = (function ex(e,t,n={}){let s=e=>({kind:"error",code:e});if(!Array.isArray(t)||t.length>32)return s("invalid-recipe");let r=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i=(e,t)=>{if(!t)return e;if(!e||"object"!=typeof e)return;if(r(e,t))return e[t];let n=e,s=t.split(".");if(!(s.length>16)){for(let e of s){if(null===n||"object"!=typeof n)return;let t=Array.isArray(n)&&"-1"===e?n.length-1:e;if(!r(n,t))return;n=n[t]}return n}},a=(e,t)=>{if(!e||"object"!=typeof e)return!1;if(r(e,t))return!0;let n=t.split(".");if(n.length>16)return!1;let s=e;for(let e of n){if(null===s||"object"!=typeof s)return!1;let t=Array.isArray(s)&&"-1"===e?s.length-1:e;if(!r(s,t))return!1;s=s[t]}return!0},l=e=>null===e||"string"==typeof e||"boolean"==typeof e||"number"==typeof e&&Number.isFinite(e),o=e=>"string"==typeof e||"boolean"==typeof e||"number"==typeof e&&Number.isFinite(e)?String(e):void 0,c=(e,t,s=!1)=>{if("string"!=typeof e||e.length>t)return{ok:!1};let r=/^\{([^{}\s"'<>]+)\}$/.exec(e);if(r&&(!s||!/^\d+(,\d*)?$/.test(r[1]))){let e=i(n,r[1]);return void 0===e?{ok:!1}:{ok:!0,value:e}}let a="",l=0;for(let r of e.matchAll(/\\\{|\{([^{}\s"'<>]+)\}/g)){if(a+=e.slice(l,r.index),l=r.index+r[0].length,!r[1]){a+="{";continue}if(s&&/^\d+(,\d*)?$/.test(r[1])){a+=r[0];continue}let o=i(n,r[1]),c="";for(let e of Array.isArray(o)?o:[o]){if(null==e||"object"==typeof e||""===e)continue;let n=String(e);if(a.length+c.length+n.length>t)return{ok:!1};a+=c+n,c=", "}}return(a+=e.slice(l)).length<=t?{ok:!0,value:a}:{ok:!1}},d=(e,t,n=!1)=>{let s=c(e,t,n);if(!s.ok||null===s.value||"object"==typeof s.value)return{ok:!1};let r=String(s.value);return r.length<=t?{ok:!0,value:r}:{ok:!1}},u=e=>{if("text"===e.operandType)return c(e.operand,4096);if("variable"!==e.operandType)return((e,t)=>{if("string"!=typeof e||e.length>4096)return{ok:!1};if("text"===t)return{ok:!0,value:e};if("null"===t)return{ok:!0,value:null};if("boolean"===t)return"true"===e||"false"===e?{ok:!0,value:"true"===e}:{ok:!1};if("number"===t&&/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(e.trim())){let t=Number(e);return Number.isFinite(t)?{ok:!0,value:t}:{ok:!1}}return{ok:!1}})(e.operand,e.operandType);let t=i(n,e.operand);return void 0===t?{ok:!1}:{ok:!0,value:t}},p=e=>{if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(e.trim()))return;let t=Number(e.trim());return Number.isFinite(t)?t:void 0},h=e=>{if(e.length>256)return!1;let t=[{repeats:!1,alternation:!1}],n=[],s=e=>"\\d"===e||"[0-9]"===e?"digit":"\\w"===e?"word":"\\s"===e?"space":"[a-z]"===e?"lower":"[A-Z]"===e?"upper":1===e.length?"literal:"+e:null,r=(e,t)=>"word"===e?/^[a-zA-Z0-9_]$/.test(t):"digit"===e?/^[0-9]$/.test(t):"lower"===e?/^[a-z]$/.test(t):"upper"===e?/^[A-Z]$/.test(t):"space"!==e||/^\s$/.test(t),i=(e,t)=>!e||!t||(e.startsWith("literal:")?t.startsWith("literal:")?e===t:r(t,e.slice(8)):t.startsWith("literal:")?r(e,t.slice(8)):"word"===e?"space"!==t:"word"===t?"space"!==e:e===t),a=null;for(let r=0;r<e.length;r++){let l=e[r];if("\\"===l){if(r+1>=e.length||/[1-9]/.test(e[r+1])||"k"===e[r+1])return!1;let t=e[r+1];if("x"===t||"u"===t||"c"===t){let n=/^(?:x[0-9a-f]{2}|u[0-9a-f]{4}|c[a-z])/i.exec(e.slice(r+1));if(!n)return!1;a={category:s(String.fromCharCode("c"===t?n[0].toUpperCase().charCodeAt(1)%32:parseInt(n[0].slice(1),16)))},r+=n[0].length;continue}if("0"===t&&/[0-9]/.test(e[r+2]??""))return!1;a={category:s("\\"+e[++r])};continue}if("["===l){let t=r+1;for(;t<e.length;t++){if("\\"===e[t]){t++;continue}if("]"===e[t])break}if(t>=e.length)return!1;a={category:s(e.slice(r,t+1))},r=t;continue}if("("===l){if("?"===e[r+1]){if(":"!==e[r+2])return!1;r+=2}t.push({repeats:!1,alternation:!1}),a=null;continue}if(")"===l){if(t.length<=1)return!1;let e=t.pop();t[t.length-1].repeats||=e.repeats,t[t.length-1].alternation||=e.alternation,a={category:null,group:e};continue}if("|"===l){t[t.length-1].alternation=!0,a=null;continue}let o="*"===l||"+"===l||"?"===l,c=!1;if("{"===l){let t=/^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(r));if(t){let e=Number(t[1]),n=""===t[2]?1/0:void 0===t[2]?e:Number(t[2]);if(e>1e3||n>1e3&&1/0!==n||n<e)return!1;o=!0,c=e===n,r+=t[0].length-1}}if(o){if(!a||a.group&&(a.group.repeats||a.group.alternation))return!1;if(!c){if(n.some(e=>i(a.category,e)))return!1;n.push(a.category),t[t.length-1].repeats=!0}a=null}else a={category:"."===l||"^"===l||"$"===l?null:s(l)}}return 1===t.length},f=e,m=void 0===f;try{for(let e of t){if(!e||"object"!=typeof e||!("kind"in e))return s("invalid-recipe");switch(e.kind){case"fallback":if("string"!=typeof e.text||e.text.length>1e4)return s("invalid-recipe");if(m||"nullish"===e.when&&null===f){let t=c(e.text,1e4);if(!t.ok)return s("missing-value");f=t.value,m=!1}break;case"field":{if(m)break;let t=d(e.key,256);if(!t.ok||!f||"object"!=typeof f)return s("type-mismatch");let n=r(f,t.value);f=n||t.value&&a(f,t.value)?n?f[t.value]:i(f,t.value):void 0,m=void 0===f;break}case"length":if(m)break;if(!f||"object"!=typeof f)return s("type-mismatch");f=Object.keys(f).length;break;case"stringify":if(m)break;if(f=JSON.stringify(f),"string"!=typeof f||f.length>1e5)return s("limit-exceeded");break;case"parse":if(m)break;if("string"!=typeof f){if(null===f||"boolean"==typeof f||"number"==typeof f&&Number.isFinite(f)||"object"==typeof f)break;return s("type-mismatch")}if(f.length>1e5)return s("limit-exceeded");try{f=JSON.parse(f)}catch{return s("invalid-json")}break;case"math":{if(m)break;if(void 0!==e.operandType&&"number"!==e.operandType&&"variable"!==e.operandType)return s("invalid-recipe");let t=p(f),r="variable"===e.operandType?i(n,"string"==typeof e.operand?e.operand:""):e.operand,a=p(r);if(void 0===t||void 0===a)return s("type-mismatch");let l=t;switch(e.operation){case"add":l+=a;break;case"subtract":l-=a;break;case"multiply":l*=a;break;case"divide":if(0===a)return s("division-by-zero");l/=a;break;case"remainder":if(0===a)return s("division-by-zero");l%=a;break;default:return s("invalid-recipe")}if(!Number.isFinite(l))return s("limit-exceeded");f=l;break}case"split":{if(m)break;let t=d(e.separator,256),n=o(f);if(void 0===n||!t.ok)return s("type-mismatch");if(n.length>1e5)return s("limit-exceeded");f=n.split(t.value||",").map(e=>e.trim()).filter(Boolean);break}case"join":{if(m)break;let t=d(e.separator,256);if(!f||"object"!=typeof f||!t.ok)return s("type-mismatch");let n=Object.keys(f);if(n.length>1e4)return s("limit-exceeded");let r=[],i=0;for(let e of n){let n=f[e];if(null===n||""===n)continue;if(!l(n))return s("type-mismatch");let a=String(n);if((i+=a.length+(r.length?t.value.length:0))>1e5)return s("limit-exceeded");r.push(a)}f=r.join(t.value);break}case"replace":{if(m)break;let t=d(e.find,256,e.regex),n=d(e.replacement,1e4),r=o(f);if(void 0===r||!t.ok||!n.ok||"boolean"!=typeof e.regex)return s("type-mismatch");if(r.length>1e4)return s("limit-exceeded");if(!t.value){f=r;break}if(e.regex){let e;if(r.length>2048||!h(t.value))return s("invalid-regex");try{e=RegExp(t.value,"g")}catch{return s("invalid-regex")}let i=r.length,a=n.value.match(/\$(?:&|[1-9]\d?)/g)?.length??0,l=n.value.match(/\$(?:'|`)/g)?.length??0;for(let t of r.matchAll(e))if((i+=n.value.length+a*t[0].length+l*r.length)>1e5)return s("limit-exceeded");f=r.replace(e,n.value)}else{let e=r.split(t.value),i=e.length-1;if(r.length+i*(n.value.length-t.value.length)>1e5)return s("limit-exceeded");f=e.join(n.value)}if("string"!=typeof f||f.length>1e5)return s("limit-exceeded");break}case"append":{if(m)break;if(!Array.isArray(f)||f.length>=1e4)return s("type-mismatch");let t=u(e);if(!t.ok)return s("invalid-literal");f=[...f,t.value];break}case"sort":{let t;if(m)break;let n=d(e.field,256);if(!f||"object"!=typeof f||!n.ok||"asc"!==e.direction&&"desc"!==e.direction)return s("type-mismatch");let r=Array.isArray(f),a=Object.entries(f);if(a.length>1e4||Array.isArray(f)&&f.length>1e4)return s("limit-exceeded");let l=[];for(let e=0;e<a.length;e++){let[r,o]=a[e],c=i(o,n.value);if(void 0===c)return s("missing-value");if("number"!=typeof c&&"string"!=typeof c||"number"==typeof c&&!Number.isFinite(c)||void 0!==t&&t!==typeof c)return s("type-mismatch");t=typeof c,l.push({item:o,sourceKey:r,key:c,order:e})}l.sort((t,n)=>{let s="number"==typeof t.key&&"number"==typeof n.key?t.key-n.key:String(t.key).localeCompare(String(n.key),"ja",{numeric:!0});return"desc"===e.direction&&(s*=-1),s||t.order-n.order}),f=r?l.map(e=>e.item):l.map(e=>({キー:e.sourceKey,値:e.item}));break}default:return s("invalid-recipe")}if("string"==typeof f&&f.length>1e5||Array.isArray(f)&&f.length>1e4)return s("limit-exceeded")}return m?{kind:"missing"}:{kind:"value",value:f}}catch{return s("invalid-recipe")}});
var cache = new Map();
function parse(el) {
var raw = el.getAttribute("data-scripts") || "[]";
if (raw.length > 5 * 1024 * 1024) return [];
var v = cache.get(raw);
if (!v) {
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
cache.set(raw, v);
}
return v;
}
function has(o, k) {
return Object.prototype.hasOwnProperty.call(o, k);
}
function dig(v, path) {
var keys = String(path).split(".");
for (var i = 0; i < keys.length; i++) {
if (v == null || typeof v !== "object") return undefined;
var k = keys[i];
var part = Array.isArray(v) && k === "-1" ? v.length - 1 : k;
if (!has(v, part)) return undefined;
v = v[part];
}
return v;
}
function text(v) {
if (v == null) return "";
if (Array.isArray(v)) return v.map(text).filter(Boolean).join(", ");
if (typeof v === "object") return "";
return String(v);
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
return Array.prototype.slice.call(
document.querySelectorAll('input[type="radio"][name="' + CSS.escape(input.name) + '"]')
);
} catch (e) {
return [input];
}
}
function truthy(v) {
v = String(v == null ? "" : v).trim().toLowerCase();
return v !== "" && v !== "off" && v !== "false" && v !== "0" && v !== "no";
}
function isRadioItem(el, input) {
return !!input && input.type === "radio" && !!el.id && el.id !== input.name;
}
function stateOf(els, prop) {
var input = els.length ? inputOf(els[0]) : null;
if (!input && els.length && els[0].matches("button")) input = els[0];
if (!input) return undefined;
var radios = input.type === "radio" ? radiosOf(input) : null;
switch (prop) {
case "disabled":
return String(!!input.disabled);
case "length":
return String(valueOf(els).length);
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
function valueOf(els) {
for (var i = 0; i < els.length; i++) {
var input = inputOf(els[i]);
if (!input) return (els[i].textContent || "").trim();
if (input.type === "checkbox" || isRadioItem(els[i], input)) return input.checked ? "true" : "false";
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
var parts = document.cookie ? document.cookie.split("; ") : [];
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
if (s != null) return s;
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
install: function (root, initialVars) {
var alive = true;
var pageGeneration = 0;
var pageBody = null;
var pageId = null;
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
function syncPage() {
var body = root.querySelector("[data-page-body]");
var pid = body ? body.getAttribute("data-page-body") : null;
if (body !== pageBody || pid !== pageId) {
cancelPendingSleeps();
hovering.forEach(function (timer) { clearTimeout(timer); });
hovering.clear();
pageGeneration++;
pageBody = body;
}
if (pid !== pageId) {
if (pageId !== null) {
vars = Object.create(null);
filters.clear();
sorts.clear();
}
pageId = pid;
}
return pageGeneration;
}
function activeRun() {
var generation = syncPage();
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
return active;
}
var vars = initialVars && typeof initialVars === "object"
? Object.assign(Object.create(null), initialVars) : Object.create(null);
function getVar(name) {
return has(vars, name) ? vars[name] : dig(vars, name);
}
function writeVar(name, v) {
var rootName = writeVarPath(vars, name, v, withinValueLimit);
if (rootName === undefined) return false;
if (typeof window !== "undefined" && typeof window.__siteVarsOnChange === "function") {
window.__siteVarsOnChange(rootName, vars[rootName]);
}
return true;
}
function inTpl(el) {
return !!(el.closest && el.closest("[data-tpl]"));
}
function groupOf(name) {
try {
return Array.prototype.slice
.call(root.querySelectorAll('input[type="radio"][name="' + CSS.escape(name) + '"]'))
.filter(function (el) {
return !inTpl(el);
});
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
var row = self && self.closest && self.closest("[data-row],[data-item]");
if (row) {
var mine = els.filter(function (el) {
return row.contains(el);
});
if (mine.length) return mine;
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
if (!els.length) els = groupOf(head);
if (els.length) {
var state = prop ? stateOf(els, prop) : undefined;
return state !== undefined ? state : valueOf(els);
}
try {
var q = new URLSearchParams(location.search).get(name);
if (q != null) return q;
} catch (e) {}
return "";
}
function resolve(s, self, item) {
var source;
try { source = String(s == null ? "" : s); } catch (e) { return ""; }
return source.replace(/\\\{|\{([^{}\s"'<>`]+)\}/g, function (m, k) {
if (k == null) return "{";
return text(lookup(k.trim(), self, item));
});
}
function resolveUrl(s, self, item) {
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
}
function setVar(name, v) {
if (!name || !writeVar(name, v)) return;
refreshLive();
}
function readInput(raw, self, scope) {
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
function test(c, self, sc) {
if (!c || typeof c !== "object") return false;
if (c.subject === "var") {
if (typeof c.left !== "string" || !c.left.trim()) return false;
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
(typeof condition.left === "string" && !!condition.left.trim()))
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
if (v == null) return "";
if (Array.isArray(v)) return v.map(filterText).join(",");
if (typeof v === "object") return "[object Object]";
return String(v);
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
function order(x, y) {
return typeof x === "number" && typeof y === "number"
? x - y
: filterText(x).localeCompare(filterText(y), "ja", {
numeric: true,
});
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
function itemsOf(v) {
var out = [];
if (!Array.isArray(v)) return out;
v.forEach(function (x) {
if (x == null || Array.isArray(x)) return;
out.push(typeof x === "object" ? x : { "値": x });
});
return out;
}
function setValue(self, id, v) {
var els = find(self, id);
if (!els.length) els = groupOf(id);
var first = els.length ? inputOf(els[0]) : null;
if (first && first.type === "file" && v !== "") return;
var toggle = !!first && (first.type === "checkbox" || isRadioItem(els[0], first));
if (toggle) v = truthy(v) ? "true" : "false";
else if (first && first.type === "radio") els = radiosOf(first);
var select = first && first.tagName === "SELECT";
var scalar = first && !select && first.type !== "checkbox" && first.type !== "radio";
if (valueOf(els) === v && !(select && first.selectedIndex < 0)) return;
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
var exists = !!find(self, rootName).length || !!groupOf(rootName).length;
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
case "set-enabled":
(find(self, st.target).length ? find(self, st.target) : groupOf(st.target)).forEach(function (el) {
var ctl = el.matches("button") ? el : inputOf(el);
if (!ctl) return;
var list = ctl.type === "radio" && !isRadioItem(el, ctl) ? radiosOf(ctl) : [ctl];
list.forEach(function (c) {
c.disabled = st.op === "toggle" ? !c.disabled : st.op === "disable";
});
});
refreshLive();
break;
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
var shadowed = has(vars, st.source) || has(vars, sourceRoot) || localShadows;
if (inputValue === undefined && !localShadows) inputValue = getVar(st.source);
if (inputValue === undefined && !shadowed && "serverValue" in st) {
setVar(st.into, st.serverValue);
break;
}
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
var providedKey = typeof st.key === "string" && st.key.trim() !== "";
var rawKey = providedKey ? readInput(st.key, self, sc) : undefined;
if (providedKey && (rawKey === null || typeof rawKey !== "string" && typeof rawKey !== "number")) break;
var newValue = readInput(st.value, self, sc);
if (Array.isArray(sourceList)) {
var nextArray = sourceList.slice();
var targetIndex = providedKey ? Number(rawKey) : nextArray.length;
if (!Number.isSafeInteger(targetIndex) || targetIndex < 0 ||
targetIndex > nextArray.length || nextArray.length >= 10000 && targetIndex === nextArray.length) break;
nextArray[targetIndex] = newValue;
setVar(st.list, nextArray);
} else {
if (!providedKey) break;
var nextKey = String(rawKey);
if (!Object.prototype.hasOwnProperty.call(sourceList, nextKey) && Object.keys(sourceList).length >= 10000) break;
if (nextKey === "__proto__" || nextKey === "prototype" || nextKey === "constructor") break;
var nextObject = Object.assign(Object.create(null), sourceList);
nextObject[nextKey] = newValue;
setVar(st.list, nextObject);
}
break;
}
case "set-var": {
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
while (active() && i < steps.length) {
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
exec(st, self, cx);
}
return Promise.resolve();
}
return next();
}
var firingTriggers = new WeakMap();
function fire(el, trigger, keep) {
var running = firingTriggers.get(el);
if (!running) {
running = new Set();
firingTriggers.set(el, running);
}
if (running.has(trigger)) return;
running.add(trigger);
try {
parse(el).forEach(function (s) {
if (s.trigger !== trigger) return;
if (keep !== undefined && !!s.keep !== keep) return;
runSteps(s.steps || [], el, undefined, activeRun());
});
} finally {
running.delete(trigger);
}
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
syncPage();
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
attributeFilter: ["data-scripts", "data-page-body"],
});
scan();
root.addEventListener("click", onClickCapture, true);
root.addEventListener("click", onClick);
root.addEventListener("mouseover", onOver);
root.addEventListener("mouseout", onOut);
root.addEventListener("input", onInput);
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
};
},
};
})({"sharedDomain":"matsufes.info","hardNav":["^/navigation/?(?:[?#].*)?$","^/booth/?(?:[?#].*)?$","^/search/[^/]+/?(?:[?#].*)?$","^/tokimeki-dreamworld/?(?:[?#].*)?$"]}).install(document);
