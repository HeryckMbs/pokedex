import{P as xe,A as V}from"./PokemonCard-luqaJIkU.js";import{j as X,k as Me,l as Be,m as Ve,q as Fe,s as He,u as j,o as d,c as h,x as C,g as m,a as p,y as F,t as S,_ as B,r as $,F as x,d as O,h as E,w as M,z as I,A as ee,e as te,n as T,B as Ne,C as pe,b as k,D as L,p as We,i as Re}from"./index-KvOSic1D.js";function G(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=re(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(u){throw u},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,l;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){o=!0,l=u},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw l}}}}function ze(t){return Ke(t)||qe(t)||re(t)||Ue()}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ke(t){if(Array.isArray(t))return ne(t)}function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function Y(t,e){return Ye(t)||Ge(t,e)||re(t,e)||Xe()}function Xe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){if(t){if(typeof t=="string")return ne(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(t,e)}}function ne(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ge(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,l=[],a=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(i=s.call(n)).done)&&(l.push(i.value),l.length!==e);a=!0);}catch(c){u=!0,r=c}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}function Ye(t){if(Array.isArray(t))return t}var H={innerWidth:function(e){if(e){var n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}return 0},width:function(e){if(e){var n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,n){if(e){var i=e.offsetWidth;if(n){var r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}return 0},getOuterHeight:function(e,n){if(e){var i=e.offsetHeight;if(n){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getClientHeight:function(e,n){if(e){var i=e.clientHeight;if(n){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getViewport:function(){var e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,o=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:o}},getOffset:function(e){if(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var n,i=(n=this.getParentNode(e))===null||n===void 0?void 0:n.childNodes,r=0,s=0;s<i.length;s++){if(i[s]===e)return r;i[s].nodeType===1&&r++}return-1},addMultipleClasses:function(e,n){var i=this;e&&n&&[n].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(s){return i.addClass(e,s)})})},removeMultipleClasses:function(e,n){var i=this;e&&n&&[n].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(s){return i.removeClass(e,s)})})},addClass:function(e,n){e&&n&&!this.hasClass(e,n)&&(e.classList?e.classList.add(n):e.className+=" "+n)},removeClass:function(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1},addStyles:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(n).forEach(function(i){var r=Y(i,2),s=r[0],o=r[1];return e.style[s]=o})},find:function(e,n){return this.isElement(e)?e.querySelectorAll(n):[]},findSingle:function(e,n){return this.isElement(e)?e.querySelector(n):null},createElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=document.createElement(e);this.setAttributes(i,n);for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return i.append.apply(i,s),i}},setAttribute:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)},setAttributes:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var r=function s(o,l){var a,u,c=e!=null&&(a=e.$attrs)!==null&&a!==void 0&&a[o]?[e==null||(u=e.$attrs)===null||u===void 0?void 0:u[o]]:[];return[l].flat().reduce(function(g,f){if(f!=null){var v=N(f);if(v==="string"||v==="number")g.push(f);else if(v==="object"){var b=Array.isArray(f)?s(o,f):Object.entries(f).map(function(_){var A=Y(_,2),P=A[0],D=A[1];return o==="style"&&(D||D===0)?"".concat(P.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(D):D?P:void 0});g=b.length?g.concat(b.filter(function(_){return!!_})):g}}return g},c)};Object.entries(i).forEach(function(s){var o=Y(s,2),l=o[0],a=o[1];if(a!=null){var u=l.match(/^on(.+)/);u?e.addEventListener(u[1].toLowerCase(),a):l==="p-bind"?n.setAttributes(e,a):(a=l==="class"?ze(new Set(r("class",a))).join(" ").trim():l==="style"?r("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[l]=a),e.setAttribute(l,a))}})}},getAttribute:function(e,n){if(this.isElement(e)){var i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}},isAttributeEquals:function(e,n,i){return this.isElement(e)?this.getAttribute(e,n)===i:!1},isAttributeNotEquals:function(e,n,i){return!this.isAttributeEquals(e,n,i)},getHeight:function(e){if(e){var n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}return 0},getWidth:function(e){if(e){var n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}return 0},absolutePosition:function(e,n){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,s=i.width,o=n.offsetHeight,l=n.offsetWidth,a=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),g=this.getViewport(),f,v;a.top+o+r>g.height?(f=a.top+u-r,e.style.transformOrigin="bottom",f<0&&(f=u)):(f=o+a.top+u,e.style.transformOrigin="top"),a.left+s>g.width?v=Math.max(0,a.left+c+l-s):v=a.left+c,e.style.top=f+"px",e.style.left=v+"px"}},relativePosition:function(e,n){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=n.offsetHeight,s=n.getBoundingClientRect(),o=this.getViewport(),l,a;s.top+r+i.height>o.height?(l=-1*i.height,e.style.transformOrigin="bottom",s.top+l<0&&(l=-1*s.top)):(l=r,e.style.transformOrigin="top"),i.width>o.width?a=s.left*-1:s.left+i.width>o.width?a=(s.left+i.width-o.width)*-1:a=0,e.style.top=l+"px",e.style.left=a+"px"}},nestedPosition:function(e,n){if(e){var i=e.parentElement,r=this.getOffset(i),s=this.getViewport(),o=e.offsetParent?e.offsetWidth:this.getHiddenElementOuterWidth(e),l=this.getOuterWidth(i.children[0]),a;parseInt(r.left,10)+l+o>s.width-this.calculateScrollbarWidth()?parseInt(r.left,10)<o?n%2===1?a=parseInt(r.left,10)?"-"+parseInt(r.left,10)+"px":"100%":n%2===0&&(a=s.width-o-this.calculateScrollbarWidth()+"px"):a="-100%":a="100%",e.style.top="0px",e.style.left=a}},getParentNode:function(e){var n=e==null?void 0:e.parentNode;return n&&n.host&&(n=n.host),n},getParents:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=this.getParentNode(e);return i===null?n:this.getParents(i,n.concat([i]))},getScrollableParents:function(e){var n=[];if(e){var i=this.getParents(e),r=/(auto|scroll)/,s=function(A){try{var P=window.getComputedStyle(A,null);return r.test(P.getPropertyValue("overflow"))||r.test(P.getPropertyValue("overflowX"))||r.test(P.getPropertyValue("overflowY"))}catch{return!1}},o=G(i),l;try{for(o.s();!(l=o.n()).done;){var a=l.value,u=a.nodeType===1&&a.dataset.scrollselectors;if(u){var c=u.split(","),g=G(c),f;try{for(g.s();!(f=g.n()).done;){var v=f.value,b=this.findSingle(a,v);b&&s(b)&&n.push(b)}}catch(_){g.e(_)}finally{g.f()}}a.nodeType!==9&&s(a)&&n.push(a)}}catch(_){o.e(_)}finally{o.f()}}return n},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(e){if(e){var n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}return 0},fadeIn:function(e,n){if(e){e.style.opacity=0;var i=+new Date,r=0,s=function o(){r=+e.style.opacity+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};s()}},fadeOut:function(e,n){if(e)var i=1,r=50,s=n,o=r/s,l=setInterval(function(){i-=o,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,n){if(this.isElement(n))n.appendChild(e);else if(n.el&&n.elElement)n.elElement.appendChild(e);else throw new Error("Cannot append "+n+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":N(HTMLElement))==="object"?e instanceof HTMLElement:e&&N(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,n){var i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,l=e.getBoundingClientRect(),a=n.getBoundingClientRect(),u=a.top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-o,c=e.scrollTop,g=e.clientHeight,f=this.getOuterHeight(n);u<0?e.scrollTop=c+u:u+f>g&&(e.scrollTop=c+u-g+f)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,n,i){e[n].apply(e,i)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&this.getParentNode(e))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,n){e&&document.activeElement!==e&&e.focus(n)},isFocusableElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),r=[],s=G(i),o;try{for(s.s();!(o=s.n()).done;){var l=o.value;getComputedStyle(l).display!="none"&&getComputedStyle(l).visibility!="hidden"&&r.push(l)}}catch(a){s.e(a)}finally{s.f()}return r},getFirstFocusableElement:function(e,n){var i=this.getFocusableElements(e,n);return i.length>0?i[0]:null},getLastFocusableElement:function(e,n){var i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null},getNextFocusableElement:function(e,n,i){var r=this.getFocusableElements(e,i),s=r.length>0?r.findIndex(function(l){return l===n}):-1,o=s>-1&&r.length>=s+1?s+1:-1;return o>-1?r[o]:null},getPreviousElementSibling:function(e,n){for(var i=e.previousElementSibling;i;){if(i.matches(n))return i;i=i.previousElementSibling}return null},getNextElementSibling:function(e,n){for(var i=e.nextElementSibling;i;){if(i.matches(n))return i;i=i.nextElementSibling}return null},isClickable:function(e){if(e){var n=e.nodeName,i=e.parentElement&&e.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,n){if(typeof n=="string")e.style.cssText=n;else for(var i in n)e.style[i]=n[i]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var n=getComputedStyle(e),i=parseFloat(n.getPropertyValue("animation-duration")||"0");return i>0}return!1},hasCSSTransition:function(e){if(e){var n=getComputedStyle(e),i=parseFloat(n.getPropertyValue("transition-duration")||"0");return i>0}return!1},exportCSV:function(e,n){var i=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,n+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(i)),r.setAttribute("download",n+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}},blockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)},unblockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}};function fe(t,e){return Qe(t)||Je(t,e)||oe(t,e)||Ze()}function Ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Je(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,l=[],a=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(i=s.call(n)).done)&&(l.push(i.value),l.length!==e);a=!0);}catch(c){u=!0,r=c}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}function Qe(t){if(Array.isArray(t))return t}function ge(t){return nt(t)||tt(t)||oe(t)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nt(t){if(Array.isArray(t))return ie(t)}function Z(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=oe(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(u){throw u},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,l;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){o=!0,l=u},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw l}}}}function oe(t,e){if(t){if(typeof t=="string")return ie(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(t,e)}}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(t)}var w={equals:function(e,n,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(n,i):this.deepEquals(e,n)},deepEquals:function(e,n){if(e===n)return!0;if(e&&n&&W(e)=="object"&&W(n)=="object"){var i=Array.isArray(e),r=Array.isArray(n),s,o,l;if(i&&r){if(o=e.length,o!=n.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(e[s],n[s]))return!1;return!0}if(i!=r)return!1;var a=e instanceof Date,u=n instanceof Date;if(a!=u)return!1;if(a&&u)return e.getTime()==n.getTime();var c=e instanceof RegExp,g=n instanceof RegExp;if(c!=g)return!1;if(c&&g)return e.toString()==n.toString();var f=Object.keys(e);if(o=f.length,o!==Object.keys(n).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,f[s]))return!1;for(s=o;s--!==0;)if(l=f[s],!this.deepEquals(e[l],n[l]))return!1;return!0}return e!==e&&n!==n},resolveFieldData:function(e,n){if(!e||!n)return null;try{var i=e[n];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(n))return n(e);if(n.indexOf(".")===-1)return e[n];for(var r=n.split("."),s=e,o=0,l=r.length;o<l;++o){if(s==null)return null;s=s[r[o]]}return s}return null},getItemValue:function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,i):e},filter:function(e,n,i){var r=[];if(e){var s=Z(e),o;try{for(s.s();!(o=s.n()).done;){var l=o.value,a=Z(n),u;try{for(a.s();!(u=a.n()).done;){var c=u.value;if(String(this.resolveFieldData(l,c)).toLowerCase().indexOf(i.toLowerCase())>-1){r.push(l);break}}}catch(g){a.e(g)}finally{a.f()}}}catch(g){s.e(g)}finally{s.f()}}return r},reorderArray:function(e,n,i){e&&n!==i&&(i>=e.length&&(i%=e.length,n%=e.length),e.splice(i,0,e.splice(n,1)[0]))},findIndexInList:function(e,n){var i=-1;if(n){for(var r=0;r<n.length;r++)if(n[r]===e){i=r;break}}return i},contains:function(e,n){if(e!=null&&n&&n.length){var i=Z(n),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;if(this.equals(e,s))return!0}}catch(o){i.e(o)}finally{i.f()}}return!1},insertIntoOrderedArray:function(e,n,i,r){if(i.length>0){for(var s=!1,o=0;o<i.length;o++){var l=this.findIndexInList(i[o],r);if(l>n){i.splice(o,0,e),s=!0;break}}s||i.push(e)}else i.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,n){if(e){var i=e.props;if(i){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(i,r)?r:n;return e.type.extends.props[n].type===Boolean&&i[s]===""?!0:i[s]}}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,i){return i===0?n:"-"+n.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&W(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(n||e.length!==0)},isString:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(n||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,n){var i;if(this.isNotEmpty(e))try{i=e.findLast(n)}catch{i=ge(e).reverse().find(n)}return i},findLastIndex:function(e,n){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(n)}catch{i=e.lastIndexOf(ge(e).reverse().find(n))}return i},sort:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,o=this.compare(e,n,r,i),l=i;return(this.isEmpty(e)||this.isEmpty(n))&&(l=s===1?i:s),l*o},compare:function(e,n,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=-1,o=this.isEmpty(e),l=this.isEmpty(n);return o&&l?s=0:o?s=r:l?s=-r:typeof e=="string"&&typeof n=="string"?s=i(e,n):s=e<n?-1:e>n?1:0,s},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(r,s){var o=fe(s,2),l=o[0],a=o[1],u=i?"".concat(i,".").concat(l):l;return e.isObject(a)?r=r.concat(e.nestedKeys(a,u)):r.push(u),r},[])},stringify:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=" ".repeat(r),o=" ".repeat(r+i);return this.isArray(e)?"["+e.map(function(l){return n.stringify(l,i,r+i)}).join(", ")+"]":this.isDate(e)?e.toISOString():this.isFunction(e)?e.toString():this.isObject(e)?`{
`+Object.entries(e).map(function(l){var a=fe(l,2),u=a[0],c=a[1];return"".concat(o).concat(u,": ").concat(n.stringify(c,i,r+i))}).join(`,
`)+`
`.concat(s)+"}":JSON.stringify(e)}};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?me(Object(n),!0).forEach(function(i){it(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function it(t,e,n){return e=st(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function st(t){var e=rt(t,"string");return R(e)=="symbol"?e:String(e)}function rt(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(R(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ot(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Be()?Ve(t):e?t():Fe(t)}var at=0;function Ce(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=X(!1),i=X(t),r=X(null),s=H.isClient()?window.document:void 0,o=e.document,l=o===void 0?s:o,a=e.immediate,u=a===void 0?!0:a,c=e.manual,g=c===void 0?!1:c,f=e.name,v=f===void 0?"style_".concat(++at):f,b=e.id,_=b===void 0?void 0:b,A=e.media,P=A===void 0?void 0:A,D=e.nonce,$e=D===void 0?void 0:D,le=e.props,Pe=le===void 0?{}:le,ue=function(){},de=function(Ae){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var K=ve(ve({},Pe),Ie),je=K.name||v,he=K.id||_,De=K.nonce||$e;r.value=l.querySelector('style[data-primevue-style-id="'.concat(je,'"]'))||l.getElementById(he)||l.createElement("style"),r.value.isConnected||(i.value=Ae||t,H.setAttributes(r.value,{type:"text/css",id:he,media:P,nonce:De}),l.head.appendChild(r.value),H.setAttribute(r.value,"data-primevue-style-id",v),H.setAttributes(r.value,K)),!n.value&&(ue=He(i,function(Le){r.value.textContent=Le},{immediate:!0}),n.value=!0)}},Te=function(){!l||!n.value||(ue(),H.isExist(r.value)&&l.head.removeChild(r.value),n.value=!1)};return u&&!g&&ot(de),{id:_,name:v,css:i,unload:Te,load:de,isLoaded:Me(n)}}function z(t){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(t)}function lt(t,e){return ht(t)||ct(t,e)||dt(t,e)||ut()}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(t,e){if(t){if(typeof t=="string")return ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(t,e)}}function ye(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ct(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,l=[],a=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(i=s.call(n)).done)&&(l.push(i.value),l.length!==e);a=!0);}catch(c){u=!0,r=c}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}function ht(t){if(Array.isArray(t))return t}function be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?be(Object(n),!0).forEach(function(i){pt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function pt(t,e,n){return e=ft(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ft(t){var e=gt(t,"string");return z(e)=="symbol"?e:String(e)}function gt(t,e){if(z(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(z(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var mt=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,vt={},yt={},ae={name:"base",css:mt,classes:vt,inlineStyles:yt,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?Ce(this.css,J({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var i=Object.entries(n).reduce(function(r,s){var o=lt(s,2),l=o[0],a=o[1];return r.push("".concat(l,'="').concat(a,'"'))&&r},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return J(J({},this),{},{css:void 0},e)}};function U(t){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(t)}function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(i){St(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function St(t,e,n){return e=_t(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _t(t){var e=wt(t,"string");return U(e)=="symbol"?e:String(e)}function wt(t,e){if(U(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(U(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xt=`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,Ct=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: default;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,kt=`
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}


.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,Ot=`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton.p-radiobutton-disabled {
    cursor: default;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}
`,Et=`
@layer primevue {
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
`.concat(xt,`
`).concat(Ct,`
`).concat(kt,`
`).concat(Ot,`
}
`),Q=ae.extend({name:"common",css:Et,loadGlobalStyle:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ce(e,bt({name:"global"},n))}});function q(t){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(t)}function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(i){se(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function se(t,e,n){return e=$t(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $t(t){var e=Pt(t,"string");return q(e)=="symbol"?e:String(e)}function Pt(t,e){if(q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(q(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Tt={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var n,i;Q.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(i=this.$config)===null||i===void 0||(i=i.csp)===null||i===void 0?void 0:i.nonce})}}}},beforeCreate:function(){var e,n,i,r,s,o,l,a,u,c,g,f=(e=this.pt)===null||e===void 0?void 0:e._usept,v=f?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,b=f?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=b||v)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var _=(o=this.$config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,A=_?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,P=_?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(c=P||A)===null||c===void 0||(c=c[this.$.type.name])===null||c===void 0||(c=c.hooks)===null||c===void 0||(g=c.onBeforeCreate)===null||g===void 0||g.call(c)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;ae.loadStyle({nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),i==null||i()}},_loadGlobalStyles:function(){var e,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);w.isNotEmpty(n)&&Q.loadGlobalStyle(n,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=w.toFlatCase(n).split("."),s=r.shift();return s?w.isObject(e)?this._getOptionValue(w.getItemValue(e[Object.keys(e).find(function(o){return w.toFlatCase(o)===s})||""],i),r.join("."),i):void 0:w.getItemValue(e,i)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o="data-pc-",l=/./g.test(i)&&!!r[i.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$config)===null||e===void 0?void 0:e.ptOptions)||{},u=a.mergeSections,c=u===void 0?!0:u,g=a.mergeProps,f=g===void 0?!1:g,v=s?l?this._useGlobalPT(this._getPTClassValue,i,r):this._useDefaultPT(this._getPTClassValue,i,r):void 0,b=l?void 0:this._usePT(this._getPT(n,this.$name),this._getPTClassValue,i,y(y({},r),{},{global:v||{}})),_=i!=="transition"&&y(y({},i==="root"&&se({},"".concat(o,"name"),w.toFlatCase(this.$.type.name))),{},se({},"".concat(o,"section"),w.toFlatCase(i)));return c||!c&&b?f?j(v,b,_):y(y(y({},v),b),_):y(y({},b),_)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return w.isString(e)||w.isArray(e)?{class:e}:e},_getPT:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=function(l){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=r?r(l):l,g=w.toFlatCase(i),f=w.toFlatCase(n.$name);return(a=u?g!==f?c==null?void 0:c[g]:void 0:c==null?void 0:c[g])!==null&&a!==void 0?a:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,n,i,r){var s=function(_){return n(_,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o,l=e._usept||((o=this.$config)===null||o===void 0?void 0:o.ptOptions)||{},a=l.mergeSections,u=a===void 0?!0:a,c=l.mergeProps,g=c===void 0?!1:c,f=s(e.originalValue),v=s(e.value);return f===void 0&&v===void 0?void 0:w.isString(v)?v:w.isString(f)?f:u||!u&&v?g?j(f,v):y(y({},f),v):v}return s(e)},_useGlobalPT:function(e,n,i){return this._usePT(this.globalPT,e,n,i)},_useDefaultPT:function(e,n,i){return this._usePT(this.defaultPT,e,n,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,y(y({},this.$params),n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,y({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,y(y({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,e,y(y({},this.$params),i)),s=this._getOptionValue(Q.inlineStyles,e,y(y({},this.$params),i));return[s,r]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return w.getItemValue(i,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return n._getOptionValue(i,n.$name,y({},n.$params))||w.getItemValue(i,y({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs},parentInstance:e}},$style:function(){return y(y({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},At=`
@layer primevue {
    .p-progressbar {
        position: relative;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        border: 0 none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-determinate .p-progressbar-value-animate {
        transition: width 1s ease-in-out;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
}
`,It={root:function(e){var n=e.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},jt=ae.extend({name:"progressbar",css:At,classes:It}),Dt={name:"BaseProgressBar",extends:Tt,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:jt,provide:function(){return{$parentInstance:this}}},ke={name:"ProgressBar",extends:Dt,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},Lt=["aria-valuenow"];function Mt(t,e,n,i,r,s){return d(),h("div",j({role:"progressbar",class:t.cx("root"),"aria-valuemin":"0","aria-valuenow":t.value,"aria-valuemax":"100"},t.ptm("root")),[s.determinate?(d(),h("div",j({key:0,class:t.cx("value"),style:s.progressStyle},t.ptm("value")),[t.value!=null&&t.value!==0&&t.showValue?(d(),h("div",j({key:0,class:t.cx("label")},t.ptm("label")),[C(t.$slots,"default",{},function(){return[F(S(t.value+"%"),1)]})],16)):m("",!0)],16)):m("",!0),s.indeterminate?(d(),h("div",j({key:1,class:t.cx("container")},t.ptm("container")),[p("div",j({class:t.cx("value")},t.ptm("value")),null,16)],16)):m("",!0)],16,Lt)}ke.render=Mt;const Bt={components:{PokemonCard:xe},props:{linhasEvolucao:Object,arvoreEvolucao:Object}},Vt={class:"main-container evolucoesContainer"},Ft=p("h3",null,"Evolutions",-1),Ht={class:"evolucoes"},Nt={class:"",style:{display:"flex","flex-direction":"column"}},Wt={class:"",style:{display:"flex","align-items":"center","justify-content":"center",flex:"1"}},Rt={key:0};function zt(t,e,n,i,r,s){const o=$("PokemonCard");return d(),h("div",Vt,[Ft,p("div",Ht,[(d(!0),h(x,null,O(n.arvoreEvolucao,(l,a,u)=>(d(),h("div",{class:"evolucao-item",key:u},[(d(),E(o,{style:{"max-width":"30%"},pokemon:l,key:l.name},null,8,["pokemon"])),p("div",Nt,[(d(!0),h(x,null,O(n.linhasEvolucao,(c,g,f)=>(d(),h("div",{key:f,style:{display:"flex","flex-direction":"row !important"},class:""},[(d(!0),h(x,null,O(c,(v,b,_)=>(d(),h("div",Wt,[b<c.length?(d(),h("h1",Rt,">")):m("",!0),(d(),E(o,{style:{"max-width":"90%"},pokemon:v,key:v.name},null,8,["pokemon"]))]))),256))]))),128))])]))),128))])])}const Ut=B(Bt,[["render",zt]]),qt=["src"],Kt=["src"],Xt=["src"],Gt=["src"],Yt=["src"],Zt={key:2},Jt={class:"vueperslide__content-wrapper"},Qt=["innerHTML"],en=["innerHTML"],tn={class:"vueperslide__content-wrapper"},nn=["innerHTML"],sn=["innerHTML"],rn={key:4,class:"vueperslide__loader"};function on(t,e,n,i,r,s){return d(),E(Ne(n.link?"a":"div"),{class:T(["vueperslide",s.slideClasses]),href:n.link&&!s.justDragged?n.link:!1,target:n.link&&n.openInNew?typeof n.openInNew=="boolean"?"_blank":n.openInNew:"_self",face:s.slideFace3d,style:I(s.slideStyles),"aria-hidden":s.slides.activeId===t._.uid||s.isSlideVisible?"false":"true",onMouseenter:e[0]||(e[0]=o=>t.$emit("mouse-enter",{slideIndex:s.slideIndex,title:n.title,content:n.content,image:n.image,link:n.link},t.$el)),onMouseleave:e[1]||(e[1]=o=>t.$emit("mouse-leave"))},{default:M(()=>[s.videoObj?(d(),h(x,{key:0},[s.videoObj.webm||s.videoObj.mp4?(d(),h("video",j({key:0,class:"vueperslide__video",width:"100%",height:"100%"},s.videoObj.props||{}),[s.videoObj.webm?(d(),h("source",{key:0,src:s.videoObj.webm,type:"video/webm"},null,8,qt)):m("",!0),s.videoObj.mp4?(d(),h("source",{key:1,src:s.videoObj.mp4,type:"video/mp4"},null,8,Kt)):m("",!0),s.videoObj.ogv?(d(),h("source",{key:2,src:s.videoObj.ogv,type:"video/ogg"},null,8,Xt)):m("",!0),s.videoObj.avi?(d(),h("source",{key:3,src:s.videoObj.avi,type:"video/avi"},null,8,Gt)):m("",!0),F(S(s.videoObj.alt||"Sorry, your browser doesn't support embedded videos."),1)],16)):s.videoObj.url?(d(),h("iframe",j({key:1,class:"vueperslide__video",src:s.videoObj.url,type:"text/html",frameborder:"0",width:"100%",height:"100%"},s.videoObj.props||{}),null,16,Yt)):m("",!0)],64)):m("",!0),t.imageSrc&&s.conf.slideImageInside?(d(),h("div",{key:1,class:"vueperslide__image",style:I(s.imageStyles)},null,4)):m("",!0),s.conf.slideContentOutside?te((d(),h("div",Zt,[C(t.$slots,"content",{},()=>[p("div",Jt,[n.title?(d(),h("div",{key:0,class:"vueperslide__title",innerHTML:n.title},null,8,Qt)):m("",!0),n.content?(d(),h("div",{key:1,class:"vueperslide__content",innerHTML:n.content},null,8,en)):m("",!0)])])],512)),[[ee,!1]]):C(t.$slots,"content",{key:3},()=>[p("div",tn,[n.title?(d(),h("div",{key:0,class:"vueperslide__title",innerHTML:n.title},null,8,nn)):m("",!0),n.content?(d(),h("div",{key:1,class:"vueperslide__content",innerHTML:n.content},null,8,sn)):m("",!0)])]),s.conf.lazy&&!t.loaded?(d(),h("div",rn,[C(t.$slots,"loader")])):m("",!0)]),_:3},40,["href","target","class","face","style","aria-hidden"])}const Oe=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},an={inject:["slides","touch","updateSlide","addClone","addSlide","removeSlide"],props:{clone:{type:Boolean},image:{type:String,default:""},video:{type:[String,Object],default:""},title:{type:String,default:""},content:{type:String,default:""},link:{type:String,default:""},duration:{type:Number,default:0},lazyloaded:{type:Boolean},openInNew:{type:[Boolean,String]}},emits:["mouse-enter","mouse-leave"],data:()=>({imageSrc:"",loading:!1,loaded:!1}),computed:{conf(){return this.$parent.conf},slideClasses(){return{"vueperslide--active":this.slides.activeId===this._.uid,"vueperslide--previous-slide":this.isPreviousSlide,"vueperslide--next-slide":this.isNextSlide,"vueperslide--visible":this.isSlideVisible,"vueperslide--loading":this.conf.lazy&&!this.loaded,"vueperslide--has-video":this.videoObj,"vueperslide--has-image-inside":this.conf.slideImageInside,"vueperslide--no-pointer-events":this.videoObj&&this.videoObj.pointerEvents===!1}},slideStyles(){const{visibleSlides:t,fade:e,slideImageInside:n,gap:i,gapPx:r}=this.conf;return{...!n&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`},...t>1&&{width:(100-(i?i*(t-1):0))/t+"%"},...t>1&&e&&{[this.conf.rtl?"right":"left"]:this.slideIndex%t/t*100+"%"},...i&&{[this.conf.rtl?"marginLeft":"marginRight"]:i+(r?"px":"%")}}},videoObj(){if(!this.video)return null;let t={url:"",alt:"",props:{controls:!0}};return typeof this.video=="object"?t=Object.assign(t,this.video):typeof this.video=="string"&&(t.url=this.video),t},youtubeVideo(){return/youtube\.|youtu\.be/.test(this.videoObj.url)},imageStyles(){return{...this.conf.slideImageInside&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`}}},slideFace3d(){if(!this.conf["3d"])return!1;const t=["front","right","back","left"],e=(this.slides.current-1+this.slidesCount)%this.slidesCount,n=(this.slides.current+1)%this.slidesCount;let i="front";return this.slideIndex===e?i=t[(4+this.slides.current-1)%4]:this.slideIndex===n&&(i=t[(this.slides.current+1)%4]),i=t[this.slideIndex%4],this.conf.rtl&&i==="left"?i="right":this.conf.rtl&&i==="right"&&(i="left"),i},isPreviousSlide(){if(!this.conf["3d"])return!1;const t=(this.slides.current-1+this.slidesCount)%this.slidesCount;return this._.uid===this.slides.list[t].id},isNextSlide(){if(!this.conf["3d"])return!1;const t=(this.slides.current+1)%this.slidesCount;return this._.uid===this.slides.list[t].id},isSlideVisible(){return this.slideIndex>=this.slides.firstVisible&&this.slideIndex<this.slides.firstVisible+this.conf.visibleSlides},slidesList(){return this.slides.list.map(t=>t.id)},slidesCount(){return this.slidesList.length},slideIndex(){return this.slidesList.indexOf(this._.uid)},justDragged(){return this.touch.justDragged}},methods:{updateThisSlide(t){this.updateSlide(this._.uid,t)},loadImage(){if(!(this.loading||this.loaded))return this.loading=!0,new Promise((t,e)=>{const n=document.createElement("img");n.onload=()=>{this.imageSrc=this.image,this.loading=!1,this.loaded=!0,this.$nextTick(()=>{t({image:this.imageSrc,style:((this.$el.attributes||{}).style||{}).value})})},n.onerror=(this.loading=!1)||e,n.src=this.image})},playVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.$el.querySelector("video").play())},pauseVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):this.$el.querySelector("video").pause())}},created(){if(this.imageSrc=this.conf.lazy?"":this.image,this.clone)return this.addClone();this.addSlide({id:this._.uid,image:this.imageSrc,video:this.videoObj&&{...this.videoObj,play:this.playVideo,pause:this.pauseVideo},title:this.title,content:this.content,contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,link:this.link,style:"",loadImage:this.loadImage,duration:this.duration})},mounted(){this.clone||this.updateThisSlide({contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,style:((this.$el.attributes||{}).style||{}).value})},beforeUnmount(){this.clone||this.removeSlide(this._.uid)},watch:{image(){this.imageSrc=this.conf.lazy&&!this.isSlideVisible?"":this.image,this.clone||this.updateThisSlide({image:this.imageSrc,...!this.conf.slideImageInside&&{style:this.slideStyles}})},title(){this.clone||this.updateThisSlide({title:this.title})},content(){this.clone||this.updateThisSlide({content:this.content})},link(){this.clone||this.updateThisSlide({link:this.link})},lazyloaded(){this.clone&&(this.loaded=this.lazyloaded)}}},Ee=Oe(an,[["render",on]]),ln=["innerHTML"],un=["innerHTML"],dn={class:"vueperslides__inner"},cn={key:0,class:"vueperslides__paused"},hn={key:1,class:"vueperslides__progress"},pn={key:2,class:"vueperslides__fractions"},fn={viewBox:"0 0 9 18"},gn=["d"],mn={viewBox:"0 0 9 18"},vn=["d"],yn={key:4,class:"vueperslides__bullets",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},bn=["aria-label","onClick"],Sn={class:"default"},_n={key:1,class:"vueperslides__bullets vueperslides__bullets--outside",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},wn=["aria-label","onClick"],xn={class:"default"},Cn=["innerHTML"],kn=["innerHTML"];function On(t,e,n,i,r,s){const o=$("vnodes"),l=$("vueper-slide");return d(),h("div",{class:T(["vueperslides",s.vueperslidesClasses]),ref:"vueperslides","aria-label":"Slideshow",style:I(s.vueperslidesStyles)},[s.slidesCount&&s.conf.slideContentOutside==="top"?(d(),h("div",{key:0,class:T(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",s.conf.slideContentOutsideClass])},[s.currentSlide.contentSlot?(d(),E(o,{key:0,vnodes:s.currentSlide.contentSlot()},null,8,["vnodes"])):(d(),h(x,{key:1},[s.currentSlide.title?(d(),h("div",{key:0,class:"vueperslide__title",innerHTML:s.currentSlide.title},null,8,ln)):m("",!0),s.currentSlide.content?(d(),h("div",{key:1,class:"vueperslide__content",innerHTML:s.currentSlide.content},null,8,un)):m("",!0)],64))],2)):m("",!0),p("div",dn,[p("div",{class:"vueperslides__parallax-wrapper",style:I(`padding-bottom: ${s.conf.slideRatio*100}%`),"aria-live":"polite"},[p("div",{class:T(["vueperslides__track",{"vueperslides__track--dragging":t.touch.dragging,"vueperslides__track--mousedown":t.mouseDown}]),ref:"track",style:I(s.trackStyles)},[p("div",{class:"vueperslides__track-inner",style:I(s.trackInnerStyles)},[C(t.$slots,"default"),t.isReady&&s.conf.infinite&&s.canSlide&&s.lastSlide?(d(),E(l,{key:0,class:"vueperslide--clone vueperslide--clone-1",clone:"",title:s.lastSlide.title,content:s.lastSlide.content,image:s.lastSlide.image,link:s.lastSlide.link,style:I(s.lastSlide.style),lazyloaded:s.lastSlide.loaded,"aria-hidden":"true"},pe({_:2},[s.lastSlide.contentSlot?{name:"content",fn:M(()=>[k(o,{vnodes:s.lastSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,s.conf.lazy&&!s.lastSlide.loaded&&s.lastSlide.loaderSlot?{name:"loader",fn:M(()=>[k(o,{vnodes:s.lastSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):m("",!0),t.isReady&&s.conf.infinite&&s.canSlide&&s.firstSlide?(d(),E(l,{key:1,class:"vueperslide--clone vueperslide--clone-2",clone:"",title:s.firstSlide.title,content:s.firstSlide.content,image:s.firstSlide.image,link:s.firstSlide.link,style:I(s.firstSlide.style),lazyloaded:s.firstSlide.loaded,"aria-hidden":"true"},pe({_:2},[s.firstSlide.contentSlot?{name:"content",fn:M(()=>[k(o,{vnodes:s.firstSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,s.conf.lazy&&!s.firstSlide.loaded&&s.firstSlide.loaderSlot?{name:"loader",fn:M(()=>[k(o,{vnodes:s.firstSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):m("",!0)],4)],6)],4),(s.conf.pauseOnHover||s.conf.pauseOnTouch)&&t.$slots.pause?(d(),h("div",cn,[C(t.$slots,"pause")])):m("",!0),s.conf.progress?(d(),h("div",hn,[C(t.$slots,"progress",{current:t.slides.current+1,total:s.slidesCount},()=>[p("div",{style:I(`width: ${(t.slides.current+1)*100/s.slidesCount}%`)},null,4)])])):m("",!0),s.conf.fractions?(d(),h("div",pn,[C(t.$slots,"fraction",{current:t.slides.current+1,total:s.slidesCount},()=>[F(S(`${t.slides.current+1} / ${s.slidesCount}`),1)])])):m("",!0),s.conf.arrows&&s.canSlide&&!n.disable?(d(),h("div",{key:3,class:T(["vueperslides__arrows",{"vueperslides__arrows--outside":s.conf.arrowsOutside}])},[te(p("button",{class:"vueperslides__arrow vueperslides__arrow--prev",type:"button",onClick:e[0]||(e[0]=a=>s.previous()),"aria-label":"Previous",onKeyup:[e[1]||(e[1]=L(a=>s.conf.rtl?s.next():s.previous(),["left"])),e[2]||(e[2]=L(a=>s.conf.rtl?s.previous():s.next(),["right"]))]},[C(t.$slots,`arrow-${s.conf.rtl?"right":"left"}`,{},()=>[(d(),h("svg",fn,[p("path",{"stroke-linecap":"round",d:s.conf.rtl?"m1 1 l7 8 -7 8":"m8 1 l-7 8 7 8"},null,8,gn)]))])],544),[[ee,!s.arrowPrevDisabled]]),te(p("button",{class:"vueperslides__arrow vueperslides__arrow--next",type:"button",onClick:e[3]||(e[3]=a=>s.next()),"aria-label":"Next",onKeyup:[e[4]||(e[4]=L(a=>s.conf.rtl?s.next():s.previous(),["left"])),e[5]||(e[5]=L(a=>s.conf.rtl?s.previous():s.next(),["right"]))]},[C(t.$slots,`arrow-${s.conf.rtl?"left":"right"}`,{},()=>[(d(),h("svg",mn,[p("path",{"stroke-linecap":"round",d:s.conf.rtl?"m8 1 l-7 8 7 8":"m1 1 l7 8 -7 8"},null,8,vn)]))])],544),[[ee,!s.arrowNextDisabled]])],2)):m("",!0),s.conf.bullets&&s.canSlide&&!n.disable&&!s.conf.bulletsOutside?(d(),h("div",yn,[C(t.$slots,"bullets",{currentSlide:t.slides.current,bulletIndexes:s.bulletIndexes,goToSlide:s.goToSlide,previous:s.previous,next:s.next},()=>[(d(!0),h(x,null,O(s.bulletIndexes,(a,u)=>(d(),h("button",{class:T(["vueperslides__bullet",{"vueperslides__bullet--active":t.slides.current===a}]),type:"button",key:u,role:"tab","aria-label":`Slide ${u+1}`,onClick:c=>s.goToSlide(a),onKeyup:[e[6]||(e[6]=L(c=>s.conf.rtl?s.next():s.previous(),["left"])),e[7]||(e[7]=L(c=>s.conf.rtl?s.previous():s.next(),["right"]))]},[C(t.$slots,"bullet",{active:t.slides.current===a,slideIndex:a,index:u+1},()=>[p("div",Sn,[p("span",null,S(u+1),1)])])],42,bn))),128))])],512)):m("",!0)]),s.conf.bullets&&s.canSlide&&!n.disable&&s.conf.bulletsOutside?(d(),h("div",_n,[C(t.$slots,"bullets",{currentSlide:t.slides.current,bulletIndexes:s.bulletIndexes,goToSlide:s.goToSlide,previous:s.previous,next:s.next},()=>[(d(!0),h(x,null,O(s.bulletIndexes,(a,u)=>(d(),h("button",{class:T(["vueperslides__bullet",{"vueperslides__bullet--active":t.slides.current===a}]),type:"button",key:u,role:"tab","aria-label":`Slide ${u+1}`,onClick:c=>s.goToSlide(a),onKeyup:[e[8]||(e[8]=L(c=>s.conf.rtl?s.next():s.previous(),["left"])),e[9]||(e[9]=L(c=>s.conf.rtl?s.previous():s.next(),["right"]))]},[C(t.$slots,"bullet",{active:t.slides.current===a,slideIndex:a,index:u+1},()=>[p("div",xn,[p("span",null,S(u+1),1)])])],42,wn))),128))])],512)):m("",!0),s.slidesCount&&s.conf.slideContentOutside==="bottom"?(d(),h("div",{key:2,class:T(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",s.conf.slideContentOutsideClass])},[s.currentSlide.contentSlot?(d(),E(o,{key:0,vnodes:s.currentSlide.contentSlot()},null,8,["vnodes"])):(d(),h(x,{key:1},[s.currentSlide.title?(d(),h("div",{key:0,class:"vueperslide__title",innerHTML:s.currentSlide.title},null,8,Cn)):m("",!0),s.currentSlide.content?(d(),h("div",{key:1,class:"vueperslide__content",innerHTML:s.currentSlide.content},null,8,kn)):m("",!0)],64))],2)):m("",!0)],6)}const En={name:"vueper-slides",components:{VueperSlide:Ee,vnodes:{render(){return this.$attrs.vnodes}}},provide(){return{conf:this.conf,slides:this.slides,touch:this.touch,updateSlide:this.updateSlide,addClone:this.addClone,addSlide:this.addSlide,removeSlide:this.removeSlide}},props:{alwaysRefreshClones:{type:Boolean,default:!1},arrows:{type:Boolean,default:!0},arrowsOutside:{type:Boolean,default:null},autoplay:{type:Boolean,default:!1},breakpoints:{type:Object,default:()=>({})},bullets:{type:Boolean,default:!0},bulletsOutside:{type:Boolean,default:null},disable:{type:Boolean,default:!1},disableArrowsOnEdges:{type:[Boolean,String],default:!1},draggingDistance:{type:Number,default:null},duration:{type:[Number,String],default:4e3},infinite:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},fixedHeight:{type:[Boolean,String],default:!1},fractions:{type:Boolean,default:!1},gap:{type:Number,default:0},initSlide:{type:Number,default:1},lazy:{type:Boolean,default:!1},lazyLoadOnDrag:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},pauseOnTouch:{type:Boolean,default:!0},parallax:{type:[Boolean,Number],default:!1},pageScrollingElement:{type:String,default:""},parallaxFixedContent:{type:Boolean,default:!1},preventYScroll:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},slideContentOutside:{type:[Boolean,String],default:!1},slideContentOutsideClass:{type:String,default:""},slideImageInside:{type:Boolean,default:!1},slideMultiple:{type:[Boolean,Number],default:!1},slideRatio:{type:Number,default:1/3},touchable:{type:Boolean,default:!0},transitionSpeed:{type:[Number,String],default:600},visibleSlides:{type:Number,default:1},"3d":{type:Boolean,default:!1}},emits:["ready","next","previous","autoplay-pause","autoplay-resume","before-slide","slide","image-loaded","image-failed"],data:()=>({isReady:!1,isPaused:!1,container:null,slides:{list:[],activeId:null,current:0,focus:0,firstVisible:0},mouseDown:!1,mouseOver:!1,touch:{enabled:!0,dragging:!1,lazyloadTriggered:!1,justDragged:!1,dragStartX:0,dragNowX:0,dragAmount:0},transition:{currentTranslation:0,speed:0,animated:!1},autoplayTimer:null,nextSlideIsClone:!1,breakpointsData:{list:[],current:null},parallaxData:{translation:0,slideshowOffsetTop:null,isVisible:!1}}),computed:{conf(){const t={...this.$props,...this.$props.breakpoints&&this.$props.breakpoints[this.breakpointsData.current]||{}};return t.slideMultiple=t.slideMultiple?t.visibleSlides:1,t.gap=this.gap&&parseInt(this.gap)||0,t.visibleSlides>1&&(t["3d"]=!1),(t.fade||t.disableArrowsOnEdges||t.visibleSlides>1||t["3d"])&&(t.infinite=!1),t.visibleSlides>1&&t.arrowsOutside===null&&(t.arrowsOutside=!0),t.visibleSlides>1&&t.bulletsOutside===null&&(t.bulletsOutside=!0),this.touch.enabled!==t.touchable&&this.toggleTouchableOption(t.touchable),t.parallax&&t.parallaxFixedContent&&(t.slideContentOutside="top",t.slideContentOutsideClass="parallax-fixed-content"),t},slidesCount(){return this.slides.list.length},gapsCount(){const{fade:t,"3d":e,slideMultiple:n,gap:i}=this.conf;if(!i||t||e||this.multipleSlides1by1&&this.slides.current<this.preferredPosition)return 0;if(!this.slides.current&&this.nextSlideIsClone)return this.slidesCount;if(this.nextSlideIsClone===0)return-1;let r=this.slides.current/n-this.preferredPosition;return this.multipleSlides1by1&&this.slidePosAfterPreferred>0&&(r-=this.slidePosAfterPreferred),r},slidesAfterCurrent(){return this.slidesCount-(this.slides.current+1)},preferredPosition(){return this.multipleSlides1by1?Math.ceil(this.conf.visibleSlides/2)-1:0},slidePosAfterPreferred(){return this.conf.visibleSlides-this.preferredPosition-this.slidesAfterCurrent-1},multipleSlides1by1(){return this.conf.visibleSlides>1&&this.conf.slideMultiple===1},touchEnabled:{get(){return this.slidesCount>1&&this.touch.enabled},set(t){this.touch.enabled=t}},canSlide(){return this.slidesCount/this.conf.visibleSlides>1},firstSlide(){const t=this.slidesCount?this.slides.list[0]:{};return t.style&&typeof t.style=="string"&&(t.style=t.style.replace(/width: ?\d+.*?;?/,"")),t},lastSlide(){const t=this.slidesCount?this.slides.list[this.slidesCount-1]:{};return t.style&&typeof t.style=="string"&&(t.style=t.style.replace(/width: ?\d+.*?;?/,"")),t},currentSlide(){const t=this.slidesCount&&this.slides.list[this.slides.current]||{};return this.slides.current<this.slidesCount&&t.id!==this.slides.activeId&&this.goToSlide(this.slides.current,{animation:!1,autoPlaying:!0}),t},vueperslidesClasses(){return{"vueperslides--ready":this.isReady,"vueperslides--rtl":this.conf.rtl,"vueperslides--fade":this.conf.fade,"vueperslides--parallax":this.conf.parallax,"vueperslides--slide-image-inside":this.conf.slideImageInside,"vueperslides--touchable":this.touchEnabled&&!this.disable,"vueperslides--fixed-height":this.conf.fixedHeight,"vueperslides--3d":this.conf["3d"],"vueperslides--slide-multiple":this.conf.slideMultiple>1,"vueperslides--bullets-outside":this.conf.bulletsOutside,"vueperslides--animated":this.transition.animated,"vueperslides--no-animation":!this.isReady}},vueperslidesStyles(){return/^-?\d/.test(this.conf.fixedHeight)?`height: ${this.conf.fixedHeight}`:null},trackStyles(){const t={};return this.conf.parallax&&(t.transform=`translate3d(0, ${this.parallaxData.translation}%, 0)`,t.willChange=this.parallaxData.isVisible?"transform":"auto"),t},trackInnerStyles(){const t={},{fade:e,"3d":n}=this.conf;if(t.transitionDuration=`${this.transition.speed}ms`,n){const i=this.transition.currentTranslation*90/100;t.transform=`rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${i}deg)`}else e||(t.transform=`translate3d(${this.transition.currentTranslation}%, 0, 0)`,t.willChange=this.touch.dragging||this.transition.animated?"transform":"auto");return t},bulletIndexes(){return Array(Math.ceil(this.slidesCount/this.conf.slideMultiple)).fill().map((t,e)=>e*this.conf.slideMultiple)},arrowPrevDisabled(){return!this.slides.current&&this.conf.disableArrowsOnEdges},arrowNextDisabled(){const{disableArrowsOnEdges:t,visibleSlides:e,slideMultiple:n}=this.conf;return this.slides.current+(n>1&&e>1?e-1:0)===this.slidesCount-1&&t}},methods:{init(){this.container=this.$refs.vueperslides,this.touchEnabled=this.conf.touchable,this.transition.speed=this.conf.transitionSpeed,Object.keys(this.breakpoints).length&&(this.setBreakpointsList(),this.setBreakpointConfig(this.getCurrentBreakpoint()));const t={animation:!1,autoPlaying:this.conf.autoplay};this.goToSlide(this.conf.initSlide-1,t),this.bindEvents(),this.$nextTick(()=>{this.isReady=!0,this.emit("ready")})},emit(t,e=!0,n=!1){let i=null;if((e||typeof n=="number")&&(i={},e&&this.slides.activeId&&this.slidesCount&&(i.currentSlide=this.getSlideData(this.slides.current)),typeof n=="number"&&this.slidesCount)){const{nextSlide:r}=this.getSlideInRange(n);i.nextSlide=this.getSlideData(r)}this.$emit(...i?[t,i]:[t])},getSlideData(t){const e=this.slides.list[t];let n={};return e&&(n={index:t,title:e.title,content:e.content,contentSlot:e.contentSlot,image:e.image,link:e.link}),n},setBreakpointsList(){this.breakpointsData.list=[99999,...Object.keys(this.breakpoints)].map(t=>parseInt(t)).sort((t,e)=>parseInt(e)-parseInt(t))},getCurrentBreakpoint(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=[t,...this.breakpointsData.list].sort((n,i)=>parseInt(i)-parseInt(n));return this.breakpointsData.list[e.indexOf(t)-1]},hasBreakpointChanged(t){return this.breakpointsData.current!==parseInt(t)},setBreakpointConfig(t){const e=this.breakpoints&&this.breakpoints[t]||{},n=e.slideMultiple&&e.slideMultiple!==this.conf.slideMultiple,i=e.visibleSlides&&e.visibleSlides!==this.conf.visibleSlides;this.breakpointsData.current=t,this.slides.current=this.getFirstVisibleSlide(this.slides.focus),n||i?this.goToSlide(this.slides.current,{breakpointChange:!0}):this.updateTrackTranslation()},bindEvents(){const t="ontouchstart"in window;this.touchEnabled&&this.toggleTouchableOption(!0),this.conf.autoplay&&(this.conf.pauseOnHover&&!t?(this.container.addEventListener("mouseenter",this.onMouseEnter),this.container.addEventListener("mouseleave",this.onMouseLeave)):this.conf.pauseOnTouch&&t&&document.addEventListener("touchstart",e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()})),(this.breakpointsData.list.length||this.conf.parallax)&&window.addEventListener("resize",this.onResize),this.conf.parallax&&this.enableParallax()},getSlideshowOffsetTop(t=!1){if(this.parallaxData.slideshowOffsetTop===null||t){let e=this.container,n=e.offsetTop;for(;e=e.offsetParent;)n+=e.offsetTop;this.parallaxData.slideshowOffsetTop=n}return this.parallaxData.slideshowOffsetTop},enableParallax(){this.refreshParallax(),this.pageScrollingElement?(this.parallaxData.scrollingEl=document.querySelector(this.pageScrollingElement),this.parallaxData.scrollingEl.addEventListener("scroll",this.onScroll)):document.addEventListener("scroll",this.onScroll)},disableParallax(){(this.pageScrollingElement?document.querySelector(this.pageScrollingElement):document).removeEventListener("scroll",this.onScroll),this.parallaxData.scrollingEl=null,this.parallaxData.isVisible=!1,this.parallaxData.translation=0,this.parallaxData.slideshowOffsetTop=null},onScroll(){const{scrollingEl:t}=this.parallaxData,e=document.documentElement;let n=0;t?n=t.scrollTop:n=(window.pageYOffset||e.scrollTop)-(e.clientTop||0);const i=window.innerHeight||e.clientHeight||document.body.clientHeight,r=this.container.clientHeight,s=this.getSlideshowOffsetTop(),o=s+r-n,l=i+n-s;if(this.parallaxData.isVisible=o>0&&l>0,this.parallaxData.isVisible){const a=i+r,u=o*100/a,c=this.conf.parallax===-1?100-u:u;this.parallaxData.translation=-c/2}},onResize(){if(this.breakpointsData.list.length){const t=this.getCurrentBreakpoint();this.hasBreakpointChanged(t)&&this.setBreakpointConfig(t)}this.conf.parallax&&this.getSlideshowOffsetTop(!0)},onMouseEnter(){this.mouseOver=!0,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!0)},onMouseLeave(){this.mouseOver=!1,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!1)},onMouseDown(t){!this.touchEnabled||this.disable||(!t.touches&&this.preventYScroll&&t.preventDefault(),this.mouseDown=!0,this.touch.dragStartX=this.getCurrentMouseX(t),this.conf.draggingDistance||this.updateTrackTranslation(this.touch.dragStartX))},onMouseMove(t){if(this.mouseDown||this.touch.dragging)if(this.conf.autoplay&&(this.isPaused=!0),this.preventYScroll&&t.preventDefault(),this.mouseDown=!1,this.touch.dragging=!0,this.touch.dragNowX=this.getCurrentMouseX(t),this.conf.draggingDistance){this.touch.dragAmount=this.touch.dragNowX-this.touch.dragStartX;const e=this.touch.dragAmount/this.container.clientWidth;this.updateTrackTranslation(),this.transition.currentTranslation+=100*e}else this.updateTrackTranslation(this.touch.dragNowX)},onMouseUp(t){if(this.mouseDown=!1,this.touch.dragging)this.conf.autoplay&&(!("ontouchstart"in window)&&!this.mouseOver?this.isPaused=!1:this.conf.pauseOnTouch||(this.isPaused=!1));else return this.cancelSlideChange();this.touch.dragging=!1;const e=this.conf.draggingDistance?-this.touch.dragAmount:0,n=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth,i=(this.touch.dragNowX-this.container.offsetLeft)/this.container.clientWidth,r=((n<.5?0:1)-i)*100;let s=(e||r)>0;if(this.conf.rtl&&(s=!s),[Math.abs(e)<this.conf.draggingDistance,!this.conf.draggingDistance&&Math.abs(r)<50,this.arrowPrevDisabled&&!this.slides.current&&!s,this.arrowNextDisabled&&this.slides.current===this.slidesCount-1&&s].includes(!0))this.cancelSlideChange();else{const o=this.slides.current+this.conf.slideMultiple*(s?1:-1);this.emit(s?"next":"previous"),this.goToSlide(o)}this.touch.dragStartX=null,this.touch.dragNowX=null,this.touch.dragAmount=null,this.touch.justDragged=!0,setTimeout(()=>this.touch.justDragged=!1,50),this.touch.lazyloadTriggered=!1},onSlideshowTouch(){this.isPaused=!0},onOustideTouch(){this.isPaused=!1},justDragged(){return this.touch.justDragged},cancelSlideChange(){this.conf.fade||this.updateTrackTranslation()},getCurrentMouseX(t){return"ontouchstart"in window?t.touches[0].clientX:t.clientX},getBasicTranslation(){return this.slides.current/this.conf.visibleSlides},updateTrackTranslation(t=null){let e=this.getBasicTranslation();const{infinite:n,visibleSlides:i,slideMultiple:r,gap:s,"3d":o,lazy:l,lazyLoadOnDrag:a}=this.conf;if(n&&this.nextSlideIsClone!==!1&&(e=(this.nextSlideIsClone?this.slidesCount:-1)/i),s&&(e+=this.gapsCount/(i/r)*s/100),this.touch.dragStartX&&t&&!(n&&this.nextSlideIsClone!==!1)){let u=0;const c=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth;let g=(t-this.container.offsetLeft)/this.container.clientWidth;if(o){const f=Math.round(c)?[0,2]:[-1,1];g=Math.min(Math.max(g,f[0]),f[1])}if(u=(c<.5?0:1)-g,e+=u*(this.conf.rtl?-1:1),l&&a&&!this.touch.lazyloadTriggered){this.touch.lazyloadTriggered=!0;let f=this.slides.current+(u>0?1:-1)*i;n&&f===-1?f=this.slidesCount-1:n&&f===this.slidesCount&&(f=0);for(let v=0;v<i;v++){const b=this.slides.list[f+v];b&&!b.loaded&&this.loadSlide(b,f+v)}}}if(this.multipleSlides1by1&&!n){const u=this.slidePosAfterPreferred>0;let c=Math.min(this.preferredPosition,this.slides.current);u&&(c+=this.slidePosAfterPreferred),e-=c/i}this.transition.currentTranslation=-e*100*(this.conf.rtl?-1:1)},pauseAutoplay(){this.isPaused=!0,clearTimeout(this.autoplayTimer),this.autoplayTimer=0,this.emit("autoplay-pause")},resumeAutoplay(){this.isPaused=!1,this.doAutoplay(),this.emit("autoplay-resume")},doAutoplay(){clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout(()=>{this.goToSlide(this.slides.current+this.conf.slideMultiple,{autoPlaying:!0})},this.currentSlide.duration||this.conf.duration)},previous(t=!0){t&&this.emit("previous"),this.goToSlide(this.slides.current-this.conf.slideMultiple)},next(t=!0){t&&this.emit("next"),this.goToSlide(this.slides.current+this.conf.slideMultiple)},refreshParallax(){setTimeout(()=>{this.onResize(),this.onScroll()},100)},getFirstVisibleSlide(t){const{slideMultiple:e,visibleSlides:n}=this.conf;let i=this.slides.current;return n>1&&e===n?i=Math.floor(t/n)*n:this.multipleSlides1by1&&(i=t-Math.min(t,this.preferredPosition)-Math.max(this.slidePosAfterPreferred,0)),i},getSlideInRange(t,e){let n=!1;this.conf.infinite&&t===-1?n=0:this.conf.infinite&&t===this.slidesCount&&(n=1);let i=(t+this.slidesCount)%this.slidesCount;if(this.conf.slideMultiple>1){const r=this.slidesCount%this.conf.slideMultiple||this.conf.slideMultiple,s=this.conf.slideMultiple-r;i+=t<0?s:0,i=this.getFirstVisibleSlide(i)}return this.conf.disableArrowsOnEdges&&(t<0||t>this.slidesCount-1)&&!e&&(i=this.slides.current),{nextSlide:i,clone:n}},goToSlide(t,{animation:e=!0,autoPlaying:n=!1,jumping:i=!1,breakpointChange:r=!1,emit:s=!0}={}){if(!this.slidesCount||this.disable)return;this.conf.autoplay&&!n&&!this.isPaused&&(this.isPaused=!0,this.$nextTick(()=>this.isPaused=!1)),this.transition.animated=e,setTimeout(()=>this.transition.animated=!1,this.transitionSpeed);const{nextSlide:o,clone:l}=this.getSlideInRange(t,n);if(this.nextSlideIsClone=l,!this.slides.list[o])return;if(this.conf.lazy)for(let u=0;u<this.conf.visibleSlides;u++){const c=this.slides.list[o+u];c&&!c.loaded&&this.loadSlide(c,o+u)}this.isReady&&!i&&s&&this.emit("before-slide",!0,o);const a=this.slides.list[o];if(this.isReady&&a.video){const u=this.slides.list[this.slides.current];u.video&&u.video.pause(),a.video.play()}if(l!==!1&&setTimeout(()=>{const u=t===-1&&this.slides.current!==this.slidesCount-1,c=t===this.slidesCount&&this.slides.current!==0;u||c||(this.transition.speed=0,this.goToSlide(l?0:this.slidesCount-1,{animation:!1,jumping:!0}),setTimeout(()=>this.transition.speed=this.conf.transitionSpeed,50))},this.transition.speed-50),this.slides.current=o,this.slides.firstVisible=this.getFirstVisibleSlide(o),r||(this.slides.focus=o),this.conf.fade||this.updateTrackTranslation(),this.slides.activeId=this.slides.list[this.slides.current].id,this.conf.autoplay&&n&&!this.isPaused&&this.doAutoplay(),this.slidesCount&&(this.isReady&&!i&&s&&this.emit("slide"),this.isReady&&this.conf.bullets&&!n&&!i&&this.$refs.bullets)){const u=this.$refs.bullets.children,c=u&&u[this.slides.current/this.conf.slideMultiple];if(c&&c.nodeName.toLowerCase()==="button"){let g=document.documentElement;this.pageScrollingElement&&(g=document.querySelector(this.pageScrollingElement));const f=g.scrollTop;c.focus({preventScroll:!0}),g.scrollTop=f}}},addSlide(t){return this.slides.list.push(t),this.isReady&&this.slidesCount===1&&this.conf.autoplay&&this.isPaused&&(this.isPaused=!1),this.slidesCount},addClone(){return this.updateTrackTranslation(),this.slidesCount},updateSlide(t,e){let n=this.slides.list.find(i=>i.id===t);n&&(n=Object.assign(n,e))},removeSlide(t){const e=this.slides.list.findIndex(n=>n.id===t);e>-1&&(this.slides.list.splice(e,1),this.slidesCount&&t===this.slides.activeId&&this.goToSlide(e-1,{autoPlaying:!0})),this.slides.current>=this.slidesCount&&this.goToSlide(0,{autoPlaying:!0})},loadSlide(t,e){t.loadImage().then(n=>{const{image:i,style:r}=n;t.loaded=!0,t.image=i,t.style=r,this.$emit("image-loaded",this.getSlideData(e))},()=>{t.loaded=!1,this.$emit("image-failed",this.getSlideData(e))})},toggleTouchableOption(t){const{track:e}=this.$refs;if(!e)return;this.touchEnabled=t;const n="ontouchstart"in window;t?(this.$refs.track.addEventListener(n?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.addEventListener(n?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.addEventListener(n?"touchend":"mouseup",this.onMouseUp,{passive:!0})):this.removeEventListeners()},removeEventListeners(){const t="ontouchstart"in window;this.$refs.track.removeEventListener(t?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.removeEventListener(t?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.removeEventListener(t?"touchend":"mouseup",this.onMouseUp,{passive:!0})}},watch:{isPaused(t){this[t?"pauseAutoplay":"resumeAutoplay"]()},parallax(t){this[t?"enableParallax":"disableParallax"]()}},mounted(){this.init()},beforeUnmount(){this.removeEventListeners(),this.conf.parallax&&this.disableParallax(),window.removeEventListener("resize",this.onResize),document.removeEventListener("touchstart",t=>{this[this.$el.contains(t.target)?"onSlideshowTouch":"onOustideTouch"]()}),this.container.removeEventListener("mouseenter",this.onMouseEnter),this.container.removeEventListener("mouseleave",this.onMouseLeave)}},$n=Oe(En,[["render",On]]),Pn={name:"MyComponent",data(){return{name:"sadfasfd"}},components:{VueperSlides:$n,VueperSlide:Ee},props:{images:Object},methods:{filtrarNaoNulos(t){return Object.entries(t).filter(([e,n])=>n!==null).reduce((e,[n,i])=>(typeof i=="string"&&(e[n]=i),e),{})}},computed:{showdownImages(){return this.images?this.filtrarNaoNulos(this.images.other.showdown):[]},mainArtsImages(){if(this.images){let t=this.filtrarNaoNulos(this.images.other.dream_world),e=this.filtrarNaoNulos(this.images.other.home),n=this.filtrarNaoNulos(this.images.other["official-artwork"]);return[...Object.values(t),...Object.values(e),...Object.values(n)]}return[]}}},Tn=t=>(We("data-v-6b15f9ed"),t=t(),Re(),t),An={class:"main-container galeryContainer"},In=Tn(()=>p("h1",null,"Galery",-1)),jn={class:"galery"};function Dn(t,e,n,i,r,s){const o=$("vueper-slide"),l=$("vueper-slides");return d(),h("div",An,[In,p("div",jn,[k(l,{class:"no-shadow","arrows-outside":!1,"visible-slides":1,"slide-multiple":!0,gap:3,"slide-ratio":.9/1,"dragging-distance":200,breakpoints:{800:{visibleSlides:4,slideMultiple:2}}},{default:M(()=>[(d(!0),h(x,null,O(s.showdownImages,(a,u)=>(d(),E(o,{key:a,image:a},null,8,["image"]))),128))]),_:1}),n.images&&s.mainArtsImages?(d(),E(l,{key:0,"slide-ratio":.9/1,class:"no-shadow","arrows-outside":"","bullets-outside":"","transition-speed":"250"},{default:M(()=>[(d(!0),h(x,null,O(s.mainArtsImages,(a,u)=>(d(),E(o,{key:u,image:a},null,8,["image"]))),128))]),_:1})):m("",!0)])])}const Ln=B(Pn,[["render",Dn],["__scopeId","data-v-6b15f9ed"]]),Mn={props:{arrayDamage:Object,title:String}},Bn={key:0,class:"doubleDamageContainer"},Vn={class:"baseContainer doubleDamage"};function Fn(t,e,n,i,r,s){return Object.keys(n.arrayDamage).length>0?(d(),h("div",Bn,[p("h4",null,S(n.title),1),p("div",Vn,[(d(!0),h(x,null,O(n.arrayDamage,(o,l)=>(d(),h("div",{class:T([l,"badge"]),key:l},[p("p",null,S(l),1)],2))),128))])])):m("",!0)}const Hn=B(Mn,[["render",Fn]]),Nn={props:{title:String,arrayContent:Array}},Wn={class:"stats"},Rn={class:"baseContainer"},zn={style:{display:"flex","flex-wrap":"wrap"}},Un={style:{color:"white"}};function qn(t,e,n,i,r,s){return d(),h("div",Wn,[p("h4",null,S(n.title),1),p("div",Rn,[p("div",zn,[(d(!0),h(x,null,O(n.arrayContent,(o,l)=>(d(),h("div",{class:"",key:l,style:{"margin-right":"4%"}},[p("h6",null,S(o.label),1),p("p",Un,S(o.text),1)]))),128))])])])}const Kn=B(Nn,[["render",qn]]),Xn={props:{detalhesEspecie:Object,pokemon:Object},computed:{generaPokemon(){return this.detalhesEspecie.genera?this.detalhesEspecie.genera.filter(e=>e.language.name=="en")[0].genus:""},getGender(){switch(this.detalhesEspecie.gender_rate){case 0:return{male:100,female:0};case 1:return{male:87.5,female:12.5};case 2:return{male:75,female:25};case 3:return{male:62.5,female:37.5};case 4:return{male:50,female:50};case 5:return{male:37.5,female:62.5};case 6:return{male:25,female:75};case 7:return{male:12.5,female:87.5};case 8:return{male:0,female:100};default:return{make:0}}}},methods:{transformaCamelCase(t){return t!=null?t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "):""}}},Gn={class:"presentation"},Yn={style:{display:"flex","justify-content":"center"}},Zn={class:""},Jn={class:"image"},Qn=["src"],ei={class:"typeList"},ti=["src"],ni={key:0,class:"badge water"},ii=p("p",null,"Baby",-1),si=[ii],ri={key:1,class:"badge dark"},oi=p("p",null,"Legendary",-1),ai=[oi],li={key:2,class:"badge dark"},ui=p("p",null,"Mythical",-1),di=[ui],ci={key:0},hi=p("b",null,"Habitat",-1),pi=p("strong",null,"Height:",-1),fi=p("b",null,"Weight:",-1);function gi(t,e,n,i,r,s){return d(),h("div",Gn,[p("h2",null,"#"+S(n.pokemon.id),1),p("h1",null,S(s.transformaCamelCase(n.pokemon.name)),1),p("div",Yn,[p("h6",Zn,S(s.generaPokemon),1)]),p("div",Jn,[n.pokemon.sprites!=null?(d(),h("img",{key:0,src:n.pokemon.sprites.other["official-artwork"].front_default,alt:""},null,8,Qn)):m("",!0)]),p("div",ei,[(d(!0),h(x,null,O(n.pokemon.types,(o,l)=>(d(),h("div",{class:T(["badge",o.type.name]),key:l},[p("img",{src:`/src/assets/icons/${o.type.name}.png`,alt:""},null,8,ti),p("p",null,S(s.transformaCamelCase(o.type.name)),1)],2))),128)),n.detalhesEspecie.is_baby?(d(),h("div",ni,si)):m("",!0),n.detalhesEspecie.is_legendary?(d(),h("div",ri,ai)):m("",!0),n.detalhesEspecie.is_mythical?(d(),h("div",li,di)):m("",!0)]),Object.keys(n.detalhesEspecie).length>0&&n.detalhesEspecie.habitat!=null?(d(),h("p",ci,[hi,F(" "+S(s.transformaCamelCase(n.detalhesEspecie.habitat.name)),1)])):m("",!0),p("p",null,[pi,F(" "+S(n.pokemon.height/10)+" m",1)]),p("p",null,[fi,F(" "+S(n.pokemon.weight/10)+" Kg",1)]),p("p",null,"Male: "+S(s.getGender.male)+"%",1),p("p",null,"Female: "+S(s.getGender.female)+"%",1)])}const mi=B(Xn,[["render",gi]]),vi={components:{GridDamage:Hn,RowList:Kn,Presentation:mi},props:{pokemon:Object,detalhesEspecie:Object,strongAgainst:Object,weakAgainst:Object},data(){return{}},computed:{baseStats(){return Object.keys(this.pokemon).length>0?this.pokemon.stats.map(function(t){return{label:t.stat.name,text:t.base_stat}}):[]},extraInfo(){return Object.keys(this.detalhesEspecie).length>0&&Object.keys(this.pokemon).length>0?[{label:"Hapiness",text:this.detalhesEspecie.base_happiness??"-"},{label:"Capture Rate",text:this.detalhesEspecie.capture_rate??"-"},{label:"Color",text:this.detalhesEspecie.color.name??"-"},{label:"Base Experience",text:this.pokemon.base_experience??"-"}]:[]},generaPokemon(){return this.detalhesEspecie.genera?this.detalhesEspecie.genera.filter(e=>e.language.name=="en")[0].genus:""},descriptionPokemon(){return this.detalhesEspecie.flavor_text_entries?this.detalhesEspecie.flavor_text_entries.filter(e=>e.language.name=="en")[0].flavor_text:""}},methods:{transformaCamelCase(t){return t!=null?t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "):""}}},yi={class:"main-container"},bi={class:"infos"},Si=p("h4",null,"About",-1),_i={class:"baseContainer"},wi=p("h4",null,"Habilities",-1),xi={class:"baseContainer"},Ci={class:"habilities"},ki={class:"combat"},Oi=p("h4",null,"Egg Groups",-1),Ei={class:"baseContainer"},$i={class:"habilities"};function Pi(t,e,n,i,r,s){const o=$("Presentation"),l=$("RowList"),a=$("GridDamage");return d(),h("div",yi,[k(o,{detalhesEspecie:n.detalhesEspecie,pokemon:n.pokemon},null,8,["detalhesEspecie","pokemon"]),p("div",bi,[p("div",null,[Si,p("div",_i,[p("p",null,S(s.descriptionPokemon),1)])]),p("div",null,[wi,p("div",xi,[p("ul",Ci,[(d(!0),h(x,null,O(n.pokemon.abilities,(u,c)=>(d(),h("li",{key:c},[p("p",null,S(s.transformaCamelCase(u.ability.name)),1)]))),128))])])]),k(l,{title:"Base Stats",arrayContent:s.baseStats},null,8,["arrayContent"]),p("div",ki,[k(a,{arrayDamage:n.strongAgainst,title:"Double damage To"},null,8,["arrayDamage"]),k(a,{arrayDamage:n.weakAgainst,title:"Double damage from"},null,8,["arrayDamage"])]),k(l,{title:"Extra Info",arrayContent:s.extraInfo},null,8,["arrayContent"]),p("div",null,[Oi,p("div",Ei,[p("ul",$i,[(d(!0),h(x,null,O(n.detalhesEspecie.egg_groups,(u,c)=>(d(),h("li",{key:c},[p("p",null,S(s.transformaCamelCase(u.name)),1)]))),128))])])])])])}const we=B(vi,[["render",Pi]]),Ti={components:{ProgressBar:ke,PokemonCard:xe,GaleryComponent:Ln,EvolutionComponent:Ut,PresentationComponent:we,PresentationComponent:we},data(){return{linhasEvolucao:{},arvoreEvolucao:{},pokemon:{},evolucao:{},detalhesEspecie:{},strongAgainst:{},weakAgainst:{}}},methods:{mountChain(){V.callApi().get(`/pokemon/${this.evolucao.specie_initial.name}`).then(e=>{this.arvoreEvolucao[0]=e.data}).catch(e=>{});for(let e in this.evolucao.evolutions){let n=this.evolucao.evolutions[e];this.linhasEvolucao[n.line]=[];for(var t of n.evolutions)V.callApi().get(`/pokemon/${t.name}`).then(i=>{this.linhasEvolucao[n.line].push(i.data)}).catch(i=>{})}},mountEvolutionTree(t){let e=t.evolves_to;this.evolucao.specie_initial=t.species,this.evolucao.evolutions=[];for(let n in e){let i=e[n],r={line:n,evolutions:[]};for(;i.evolves_to.length>0;)r.evolutions.push(i.species),i=i.evolves_to[0];i.evolves_to.length==0&&r.evolutions.push(i.species),this.evolucao.evolutions.push(r)}this.mountChain()},filtrarNaoNulos(t){return Object.entries(t).filter(([e,n])=>n!==null).reduce((e,[n,i])=>(typeof i=="string"&&(e[n]=i),e),{})},async getSpecieDetail(){console.log(!this.$store.state.loading),await V.callApi().get(`/pokemon-species/${this.pokemon.id}`).then(t=>{this.detalhesEspecie=t.data,this.getEvolutionChain(t.data.evolution_chain.url),this.getDamageRelation()}).catch(t=>{})},async getEvolutionChain(t){await V.callApi().get(t).then(e=>{this.mountEvolutionTree(e.data.chain)}).catch(e=>{})},async getDamageRelation(){for(let t of this.pokemon.types)await V.callApi().get(`${t.type.url}`).then(e=>{for(let n of e.data.damage_relations.double_damage_from)this.weakAgainst[n.name]==null?this.weakAgainst[n.name]=1:this.weakAgainst[n.name]++;for(let n of e.data.damage_relations.double_damage_to)this.strongAgainst[n.name]==null?this.strongAgainst[n.name]=1:this.strongAgainst[n.name]++}).catch(e=>{})}},async created(){let t=this.$route.params.id;await V.callApi().get(`/pokemon/${t}`).then(e=>{this.pokemon=e.data,this.getSpecieDetail()}).catch(e=>{})}},Ai={class:"links"},Ii=["href"],ji=["href"];function Di(t,e,n,i,r,s){const o=$("PresentationComponent"),l=$("EvolutionComponent"),a=$("GaleryComponent");return d(),h(x,null,[p("div",Ai,[t.$route.params.id>1?(d(),h("a",{key:0,href:`/pokemon/${parseInt(t.$route.params.id)-1}`},"Previous",8,Ii)):m("",!0),p("a",{href:`/pokemon/${parseInt(t.$route.params.id)+1}`},"Next",8,ji)]),k(o,{pokemon:r.pokemon,detalhesEspecie:r.detalhesEspecie,strongAgainst:r.strongAgainst,weakAgainst:r.weakAgainst},null,8,["pokemon","detalhesEspecie","strongAgainst","weakAgainst"]),r.linhasEvolucao&&r.arvoreEvolucao?(d(),E(l,{key:0,linhasEvolucao:r.linhasEvolucao,arvoreEvolucao:r.arvoreEvolucao},null,8,["linhasEvolucao","arvoreEvolucao"])):m("",!0),k(a,{images:r.pokemon.sprites},null,8,["images"])],64)}const Bi=B(Ti,[["render",Di]]);export{Bi as default};
