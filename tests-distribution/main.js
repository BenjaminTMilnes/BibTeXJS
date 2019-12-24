!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return s})),r.d(t,"a",(function(){return x})),r.d(t,"d",(function(){return E})),r.d(t,"b",(function(){return O})),r.d(t,"e",(function(){return F}));class n{constructor(e){this._type="bibtexEntry",this.name=e,this.citationKey="",this.note=new i("note",""),this.key=new i("key","")}get fields(){return Object.keys(this).filter(e=>void 0!==this[e]._type&&"bibtexField"===this[e]._type).map(e=>this[e])}hasFieldWithName(e){return this.fields.filter(t=>t.name==e).length>0}getFieldWithName(e){return this.fields.filter(t=>t.name==e)[0]}}class i{constructor(e,t,r,n){this._type="bibtexField",this.name=e,this.value=t,this.isOptional=void 0!==r&&r,this.requiredFieldGroup=void 0!==n?n:""}}const o={None:{value:0,long:"",short:""},January:{value:1,long:"January",short:"Jan"},February:{value:2,long:"February",short:"Feb"},March:{value:3,long:"March",short:"Mar"},April:{value:4,long:"April",short:"Apr"},May:{value:5,long:"May",short:"May"},June:{value:6,long:"June",short:"Jun"},July:{value:7,long:"July",short:"Jul"},August:{value:8,long:"August",short:"Aug"},September:{value:9,long:"September",short:"Sep"},October:{value:10,long:"October",short:"Oct"},November:{value:11,long:"November",short:"Nov"},December:{value:12,long:"December",short:"Dec"}},s={Long:0,Short:1,Numeric:2};class a extends n{constructor(e,t,r,n){super("book"),this.title=new i("title",e),this.edition=new i("edition","",!0),this.author=new i("author",t,!0,"author/editor"),this.editor=new i("editor","",!0,"author/editor"),this.publisher=new i("publisher",r),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.volume=new i("volume","",!0),this.number=new i("number","",!0),this.series=new i("series","",!0)}}class u extends n{constructor(e,t,r,n,s){super("inbook"),this.title=new i("title",e),this.edition=new i("edition","",!0),this.author=new i("author",t,!0,"author/editor"),this.editor=new i("editor","",!0,"author/editor"),this.publisher=new i("publisher",r),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.volume=new i("volume","",!0),this.number=new i("number","",!0),this.series=new i("series","",!0),this.chapter=new i("chapter",s,!0,"chapter/pages"),this.pages=new i("pages","",!0,"chapter/pages"),this.type=new i("type","",!0)}}class c extends n{constructor(e){super("booklet"),this.title=new i("title",e),this.author=new i("author","",!0),this.howPublished=new i("howpublished","",!0),this.address=new i("address","",!0),this.year=new i("year","",!0),this.month=new i("month",o.None,!0)}}class l extends n{constructor(e,t,r,n,s){super("article"),this.title=new i("title",e),this.author=new i("author",t),this.journal=new i("journal",r),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.volume=new i("volume",s),this.number=new i("number","",!0),this.pages=new i("pages","",!0)}}class h extends n{constructor(e,t,r,n,s){super("incollection"),this.title=new i("title",e),this.bookTitle=new i("bookTitle",t),this.edition=new i("edition","",!0),this.author=new i("author",r,!0,"author/editor"),this.editor=new i("editor","",!0,"author/editor"),this.publisher=new i("publisher",n),this.address=new i("address","",!0),this.year=new i("year",s),this.month=new i("month",o.None,!0),this.volume=new i("volume","",!0),this.number=new i("number","",!0),this.series=new i("series","",!0),this.chapter=new i("chapter","",!0,"chapter/pages"),this.pages=new i("pages","",!0,"chapter/pages"),this.type=new i("type","",!0)}}class p extends n{constructor(e,t,r,n){super("inproceedings"),this.title=new i("title",e),this.bookTitle=new i("bookTitle",t),this.author=new i("author",r,!0,"author/editor"),this.editor=new i("editor","",!0,"author/editor"),this.publisher=new i("publisher","",!0),this.organization=new i("organization","",!0),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.volume=new i("volume","",!0),this.number=new i("number","",!0),this.series=new i("series","",!0),this.pages=new i("pages","",!0)}}class f extends n{constructor(e){super("manual"),this.title=new i("title",e),this.edition=new i("edition","",!0),this.author=new i("author","",!0),this.organization=new i("organization","",!0),this.address=new i("address","",!0),this.year=new i("year","",!0),this.month=new i("month",o.None,!0)}}class d extends n{constructor(e,t,r,n){super("mastersthesis"),this.title=new i("title",e),this.author=new i("author",t),this.school=new i("school",r),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.type=new i("type","",!0)}}class y extends n{constructor(){super("misc"),this.title=new i("title","",!0),this.author=new i("author","",!0),this.howPublished=new i("howpublished","",!0),this.year=new i("year","",!0),this.month=new i("month",o.None,!0)}}class b extends n{constructor(e,t,r,n){super("phdthesis"),this.title=new i("title",e),this.author=new i("author",t),this.school=new i("school",r),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.type=new i("type","",!0)}}class m extends n{constructor(e,t){super("proceedings"),this.title=new i("title",e),this.editor=new i("editor","",!0),this.publisher=new i("publisher","",!0),this.organization=new i("organization","",!0),this.address=new i("address","",!0),this.year=new i("year",t),this.month=new i("month",o.None,!0),this.volume=new i("volume","",!0),this.number=new i("number","",!0),this.series=new i("series","",!0)}}class g extends n{constructor(e,t,r,n){super("techreport"),this.title=new i("title",e),this.author=new i("author",t),this.institution=new i("institution",r),this.address=new i("address","",!0),this.year=new i("year",n),this.month=new i("month",o.None,!0),this.number=new i("number","",!0),this.type=new i("type","",!0)}}class w extends n{constructor(e,t,r,n){super("unpublished"),this.title=new i("title",e),this.author=new i("author",t),this.year=new i("year",r,!0),this.month=new i("month",n,!0)}}class v extends n{constructor(e,t,r,n){super("webpage"),this.author=new i("author",e,!0),this.title=new i("title",t),this.websiteTitle=new i("website_title","",!0),this.url=new i("url",r),this.dateAccessed=new i("date_accessed",n)}}class T{constructor(){this.entries=[]}getEntryByCitationKey(e){return this.entries.filter(t=>t.citationKey==e)[0]}getEntriesByType(e){return this.entries.filter(t=>t.name==e)}}const x={QuotationMarks:0,RecurveBrackets:1},E={Minimal:0,Readable:1};class O{constructor(e=x.QuotationMarks,t=s.Long,r=E.Readable,n=!1){this.beginEndFieldValueCharacterType=e,this.beginEndFieldValueCharacterType==x.QuotationMarks?(this.beginFieldValueCharacter='"',this.endFieldValueCharacter='"'):this.beginEndFieldValueCharacterType==x.RecurveBrackets&&(this.beginFieldValueCharacter="{",this.endFieldValueCharacter="}"),this.monthStyle=t,this.formatStyle=r,this.includeNullFields=n}static getBibTeXEntryFields(e){var t=[];for(var r in e){var n=e[r];n instanceof i&&t.push(n)}return t}static listContainsObject(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}isFieldValueMonth(e){var t=[o.None,o.January,o.February,o.March,o.April,o.May,o.June,o.July,o.August,o.September,o.October,o.November,o.December];return O.listContainsObject(t,e)}convertBibTeXFieldValueToText(e){return void 0===e||""==e?"":this.isFieldValueMonth(e)?this.monthStyle==s.Short?e.short:this.monthStyle==s.Numeric?e.value>0?e.value:"":e.long:e}convertBibTeXFieldToText(e){var t="";return t+=e.name,this.formatStyle==E.Minimal?t+="=":t+=" = ",t+=this.beginFieldValueCharacter,t+=this.convertBibTeXFieldValueToText(e.value),t+=this.endFieldValueCharacter}convertBibTeXFieldsToText(e){for(var t="",r=0;r<e.length;r++){var n=e[r];""!=this.convertBibTeXFieldValueToText(n.value)&&(t+=",",this.formatStyle==E.Readable&&(t+="\n\t"),t+=this.convertBibTeXFieldToText(n))}return t}convertBibTeXEntryToText(e){var t=O.getBibTeXEntryFields(e),r="";return r+="@"+e.name+"{"+e.citationKey,r+=this.convertBibTeXFieldsToText(t),r+="\n} ",this.formatStyle==E.Readable&&(r+="\n\n"),r}convertBibTeXEntriesToText(e){return e.map(e=>this.convertBibTeXEntryToText(e)).join("")}convertBibTeXDatabaseToText(e){return this.convertBibTeXEntriesToText(e.entries)}}class S{constructor(){this.position=0}copy(){var e=new S;return e.position=this.position,e}}function j(e,t){return t.indexOf(e)>=0}class F{constructor(){this.entryTypes={book:a,inbook:u,booklet:c,article:l,incollection:h,inproceedings:p,manual:f,mastersthesis:d,misc:y,phdthesis:b,proceedings:m,techreport:g,unpublished:w,webpage:v}}importDatabase(e){var t=new S,r=this._importEntries(e,t),n=new T;return n.entries=r,n}_importEntries(e,t){for(var r=[],n=!0;n;){var i=this._importEntry(e,t);null!==i?r.push(i):n=!1}return r}_importEntry(e,t){var r=t.copy();if(this._importWhiteSpace(e,r),!this._expect(e,r,"@"))return null;for(var n="";r.position<e.length;){if(!j(o=e.charAt(r.position),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"))break;r.position++,n+=o}if(""==n)return null;if(this._importWhiteSpace(e,r),!this._expect(e,r,"{"))return null;this._importWhiteSpace(e,r);for(var i="";r.position<e.length;){var o;if(!j(o=e.charAt(r.position),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+:;."))break;r.position++,i+=o}if(""!=i&&(this._importWhiteSpace(e,r),!this._expect(e,r,",")))return null;var s=this._importFields(e,r);if(this._importWhiteSpace(e,r),!this._expect(e,r,"}"))return null;if(this._importWhiteSpace(e,r),null==this.entryTypes[n])throw new Error(`'${n}' is not a valid BibTeX entry type.`);var a=new this.entryTypes[n];return a.citationKey=i,null!==s&&s.forEach(e=>{if(!a.hasFieldWithName(e.name))throw new Error(`The @${n} BibTeX entry type does not have a field with the name '${e.name}'.`);a[e.name].value=e.value}),t.position=r.position,a}_importFields(e,t){for(var r=[],n=!0,i=0;n&&(!(i>0)||this._expect(e,t,","));){var o=this._importField(e,t);null===o?n=!1:(i++,r.push(o))}return r}_expect(e,t,r){return e.charAt(t.position)==r&&(t.position++,!0)}_importField(e,t){var r=t.copy();this._importWhiteSpace(e,r);var n=this._importFieldName(e,r);if(null===n)return null;if(this._importWhiteSpace(e,r),!this._expect(e,r,"="))return null;this._importWhiteSpace(e,r);var o=this._importFieldValue(e,r);return null===o?null:(this._importWhiteSpace(e,r),t.position=r.position,new i(n,o))}_importFieldName(e,t){for(var r="";t.position<e.length;){var n=e.charAt(t.position);if(!j(n,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"))break;t.position++,r+=n}return""!=r?r:null}_importFieldValue(e,t){if('"'==e.charAt(t.position)){t.position++;for(var r="";t.position<e.length;){var n=e.charAt(t.position);if(t.position++,'"'==n)break;r+=n}return r}if("{"==e.charAt(t.position)){t.position++;var i=1;for(r="";t.position<e.length;){n=e.charAt(t.position);if(t.position++,"{"==n)i++;else if("}"==n&&0==--i)break;r+=n}return r}return null}_importWhiteSpace(e,t){for(var r="";t.position<e.length;){var n=e.charAt(t.position);if(!j(n," \t\n"))break;t.position++,r+=n}return""!=r?r:null}}},function(e,t,r){"use strict";(function(t){var n=r(5);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function i(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var s=r(6),a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,c="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function h(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=g,f=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(s.isFunction(e)){if(c)return e.name;var t=e.toString().match(f);return t&&t[1]}}function y(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(c||!s.isFunction(e))return s.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,r,n,i){throw new p.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function g(e,t){e||m(e,!0,t,"==",p.ok)}function w(e,t,r,n){if(e===t)return!0;if(o(e)&&o(t))return 0===i(e,t);if(s.isDate(e)&&s.isDate(t))return e.getTime()===t.getTime();if(s.isRegExp(e)&&s.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(h(e)&&h(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var a=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==a&&a===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,r,n){if(null==e||null==t)return!1;if(s.isPrimitive(e)||s.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=v(e),o=v(t);if(i&&!o||!i&&o)return!1;if(i)return e=u.call(e),t=u.call(t),w(e,t,r);var a,c,l=E(e),h=E(t);if(l.length!==h.length)return!1;for(l.sort(),h.sort(),c=l.length-1;c>=0;c--)if(l[c]!==h[c])return!1;for(c=l.length-1;c>=0;c--)if(a=l[c],!w(e[a],t[a],r,n))return!1;return!0}(e,t,r,n))}return r?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function T(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function x(e,t,r,n){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&m(i,r,"Missing expected exception"+n);var o="string"==typeof n,a=!e&&i&&!r;if((!e&&s.isError(i)&&o&&T(i,r)||a)&&m(i,r,"Got unwanted exception"+n),e&&i&&r&&!T(i,r)||!e&&i)throw i}p.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=y(b((t=this).actual),128)+" "+t.operator+" "+y(b(t.expected),128),this.generatedMessage=!0);var r=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var n=new Error;if(n.stack){var i=n.stack,o=d(r),s=i.indexOf("\n"+o);if(s>=0){var a=i.indexOf("\n",s+1);i=i.substring(a+1)}this.stack=i}}},s.inherits(p.AssertionError,Error),p.fail=m,p.ok=g,p.equal=function(e,t,r){e!=t&&m(e,t,r,"==",p.equal)},p.notEqual=function(e,t,r){e==t&&m(e,t,r,"!=",p.notEqual)},p.deepEqual=function(e,t,r){w(e,t,!1)||m(e,t,r,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,r){w(e,t,!0)||m(e,t,r,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,r){w(e,t,!1)&&m(e,t,r,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,r,n){w(t,r,!0)&&m(t,r,n,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,r){e!==t&&m(e,t,r,"===",p.strictEqual)},p.notStrictEqual=function(e,t,r){e===t&&m(e,t,r,"!==",p.notStrictEqual)},p.throws=function(e,t,r){x(!0,e,t,r)},p.doesNotThrow=function(e,t,r){x(!1,e,t,r)},p.ifError=function(e){if(e)throw e},p.strict=n((function e(t,r){t||m(t,!0,r,"==",e)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var E=Object.keys||function(e){var t=[];for(var r in e)a.call(e,r)&&t.push(r);return t}}).call(this,r(4))},function(e,t,r){r(3),e.exports=r(10)},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),o=r(0),s=new o.b;describe("BibTeXExporter",(function(){describe("convertBibTeXFieldToText",(function(){[[new o.c("author","B. T. Milnes"),'author = "B. T. Milnes"'],[new o.c("year","2019"),'year = "2019"'],[new o.c("month",o.f.January),'month = "January"']].forEach(e=>{it(`should export to '${e[1]}'`,(function(){s.beginEndFieldValueCharacterType=o.a.QuotationMarks,s.monthStyle=o.g.Long,s.formatStyle=o.d.Readable;var t=s.convertBibTeXFieldToText(e[0]);i.a.equal(t,e[1])}))}),[[new o.c("author","B. T. Milnes"),"author={B. T. Milnes}"],[new o.c("year","2019"),"year={2019}"],[new o.c("month",o.f.January),"month={Jan}"]].forEach(e=>{it(`should export to '${e[1]}'`,(function(){s.beginEndFieldValueCharacterType=o.a.RecurveBrackets,s.beginFieldValueCharacter="{",s.endFieldValueCharacter="}",s.monthStyle=o.g.Short,s.formatStyle=o.d.Minimal;var t=s.convertBibTeXFieldToText(e[0]);i.a.equal(t,e[1])}))})}))}))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,u=s(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))i.call(r,l)&&(u[l]=r[l]);if(n){a=n(r);for(var h=0;h<a.length;h++)o.call(r,a[h])&&(u[a[h]]=r[a[h]])}}return u}},function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,s=String(e).replace(i,(function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),u=n[r];r<o;u=n[++r])y(u)||!v(u)?s+=" "+u:s+=" "+a(u);return s},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var o,s={};function a(e,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&t._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),l(n,e,n.depth)}function u(e,t){var r=a.styles[t];return r?"["+a.colors[r][0]+"m"+e+"["+a.colors[r][1]+"m":e}function c(e,t){return e}function l(e,r,n){if(e.customInspect&&r&&E(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return m(i)||(i=l(e,i,n)),i}var o=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(b(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,r);if(o)return o;var s=Object.keys(r),a=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),x(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(r);if(0===s.length){if(E(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(w(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(T(r))return e.stylize(Date.prototype.toString.call(r),"date");if(x(r))return h(r)}var c,v="",O=!1,S=["{","}"];(f(r)&&(O=!0,S=["[","]"]),E(r))&&(v=" [Function"+(r.name?": "+r.name:"")+"]");return w(r)&&(v=" "+RegExp.prototype.toString.call(r)),T(r)&&(v=" "+Date.prototype.toUTCString.call(r)),x(r)&&(v=" "+h(r)),0!==s.length||O&&0!=r.length?n<0?w(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),c=O?function(e,t,r,n,i){for(var o=[],s=0,a=t.length;s<a;++s)k(t,String(s))?o.push(p(e,t,r,n,String(s),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(p(e,t,r,n,i,!0))})),o}(e,r,n,a,s):s.map((function(t){return p(e,r,n,a,t,O)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,v,S)):S[0]+v+S[1]}function h(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,i,o){var s,a,u;if((u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(a=e.stylize("[Setter]","special")),k(n,i)||(s="["+i+"]"),a||(e.seen.indexOf(u.value)<0?(a=y(r)?l(e,u.value,null):l(e,u.value,r-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),g(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function f(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function y(e){return null===e}function b(e){return"number"==typeof e}function m(e){return"string"==typeof e}function g(e){return void 0===e}function w(e){return v(e)&&"[object RegExp]"===O(e)}function v(e){return"object"==typeof e&&null!==e}function T(e){return v(e)&&"[object Date]"===O(e)}function x(e){return v(e)&&("[object Error]"===O(e)||e instanceof Error)}function E(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(g(o)&&(o=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!s[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=e.pid;s[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e)}}else s[r]=function(){};return s[r]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=f,t.isBoolean=d,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=w,t.isObject=v,t.isDate=T,t.isError=x,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(8);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function F(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),j[e.getMonth()],t].join(" ")}function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",F(),t.format.apply(t,arguments))},t.inherits=r(9),t._extend=function(e,t){if(!t||!v(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var _="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function B(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(_&&e[_]){var t;if("function"!=typeof(t=e[_]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,_,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,n){e?r(e):t(n)}));try{e.apply(this,i)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),_&&Object.defineProperty(t,_,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=_,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};t.apply(this,r).then((function(t){e.nextTick(s,null,t)}),(function(t){e.nextTick(B,t,s)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r}}).call(this,r(7))},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,h=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),o=new(r(0).e);describe("BibTeXImporter",(function(){describe("importDatabase",(function(){it("should correctly import example 1.",(function(){var e=o.importDatabase('\n  @book{HarryPotter1,\n      author = "J. K. Rowling",\n      title = "Harry Potter and the Philosopher\'s Stone"\n  }\n  @book{HarryPotter2,\n      author = "J. K. Rowling",\n      title = "Harry Potter and the Chamber of Secrets"\n  }\n  \n  @book{TheLordOfTheRings,\n        author={J. R. R. Tolkien},\n        title={The Lord of the Rings}\n    }\n  ');i.a.equal(e.entries.length,3);var t=e.getEntryByCitationKey("HarryPotter1");i.a.equal(t.author.value,"J. K. Rowling"),i.a.equal(t.title.value,"Harry Potter and the Philosopher's Stone");var r=e.getEntryByCitationKey("HarryPotter2");i.a.equal(r.author.value,"J. K. Rowling"),i.a.equal(r.title.value,"Harry Potter and the Chamber of Secrets");var n=e.getEntryByCitationKey("TheLordOfTheRings");i.a.equal(n.author.value,"J. R. R. Tolkien"),i.a.equal(n.title.value,"The Lord of the Rings")}))}))}))}]);