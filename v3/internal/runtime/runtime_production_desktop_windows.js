(()=>{var we=Object.defineProperty;var W=(e,t)=>{for(var n in t)we(e,n,{get:t[n],enumerable:!0})};var O={};W(O,{SetText:()=>We,Text:()=>be});var ge="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var g=(e=21)=>{let t="",n=e;for(;n--;)t+=ge[Math.random()*64|0];return t};var he=window.location.origin+"/wails/runtime",l={Call:0,Clipboard:1,Application:2,Events:3,ContextMenu:4,Dialog:5,Window:6,Screens:7,System:8},k=g();function xe(e,t,n,i){let o=new URL(he);o.searchParams.append("object",e),o.searchParams.append("method",t);let r={headers:{}};return n&&(r.headers["x-wails-window-name"]=n),i&&o.searchParams.append("args",JSON.stringify(i)),r.headers["x-wails-client-id"]=k,new Promise((u,p)=>{fetch(o,r).then(s=>{if(s.ok)return s.headers.get("Content-Type")&&s.headers.get("Content-Type").indexOf("application/json")!==-1?s.json():s.text();p(Error(s.statusText))}).then(s=>u(s)).catch(s=>p(s))})}function a(e,t){return function(n,i=null){return xe(e,n,t,i)}}var G=a(l.Clipboard),Ce=0,ve=1;function We(e){G(Ce,{text:e})}function be(){return G(ve)}var L={};W(L,{Hide:()=>Se,Quit:()=>De,Show:()=>Me});var N=a(l.Application),I={Hide:0,Show:1,Quit:2};function Se(){N(I.Hide)}function Me(){N(I.Show)}function De(){N(I.Quit)}var P={};W(P,{GetAll:()=>ke,GetCurrent:()=>Ne,GetPrimary:()=>Oe});var z=a(l.Screens),ye=0,Ee=1,Re=2;function ke(){return z(ye)}function Oe(){return z(Ee)}function Ne(){return z(Re)}var T={};W(T,{IsDarkMode:()=>ze});var Ie=a(l.System),Le=0;function ze(){return Ie(Le)}var Pe=a(l.Call),b=0,f=new Map;function Te(){let e;do e=g();while(f.has(e));return e}function U(e,t,n){let i=f.get(e);i&&(n?i.resolve(JSON.parse(t)):i.resolve(t),f.delete(e))}function Z(e,t){let n=f.get(e);n&&(n.reject(t),f.delete(e))}function S(e,t){return new Promise((n,i)=>{let o=Te();t=t||{},t["call-id"]=o,f.set(o,{resolve:n,reject:i}),Pe(e,t).catch(r=>{i(r),f.delete(o)})})}function Y(e){return S(b,e)}function Q(e,...t){if(typeof e!="string"||e.split(".").length!==3)throw new Error("CallByName requires a string in the format 'package.struct.method'");let n=e.split(".");return S(b,{packageName:n[0],structName:n[1],methodName:n[2],args:t})}function X(e,...t){return S(b,{methodID:e,args:t})}function V(e,t,...n){return S(b,{packageName:"wails-plugins",structName:e,methodName:t,args:n})}var Ae=0,je=1,Be=2,He=3,Fe=4,Ge=5,Ue=6,Ze=7,Ye=8,Qe=9,Xe=10,Ve=11,Je=12,qe=13,_e=14,Ke=15,$e=16,et=17,tt=18,nt=19,it=20,ot=21,rt=22,lt=23,at=24,st=25,ut=26,ct=27,dt=28,ft=29;function J(e){let t=a(l.Window,e);return{Center:()=>void t(Ae),SetTitle:n=>void t(je,{title:n}),Fullscreen:()=>void t(Be),UnFullscreen:()=>void t(He),SetSize:(n,i)=>t(Fe,{width:n,height:i}),Size:()=>t(Ge),SetMaxSize:(n,i)=>void t(Ue,{width:n,height:i}),SetMinSize:(n,i)=>void t(Ze,{width:n,height:i}),SetAlwaysOnTop:n=>void t(Ye,{alwaysOnTop:n}),SetRelativePosition:(n,i)=>t(Qe,{x:n,y:i}),RelativePosition:()=>t(Xe),Screen:()=>t(Ve),Hide:()=>void t(Je),Maximise:()=>void t(qe),Show:()=>void t(nt),Close:()=>void t(it),ToggleMaximise:()=>void t(Ke),UnMaximise:()=>void t(_e),Minimise:()=>void t($e),UnMinimise:()=>void t(et),Restore:()=>void t(tt),SetBackgroundColour:(n,i,o,r)=>void t(ot,{r:n,g:i,b:o,a:r}),SetResizable:n=>void t(rt,{resizable:n}),Width:()=>t(lt),Height:()=>t(at),ZoomIn:()=>void t(st),ZoomOut:()=>void t(ut),ZoomReset:()=>void t(ct),GetZoomLevel:()=>t(dt),SetZoomLevel:n=>void t(ft,{zoomLevel:n})}}var mt=a(l.Events),pt=0,A=class{constructor(t,n,i){this.eventName=t,this.maxCallbacks=i||-1,this.Callback=o=>(n(o),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}},M=class{constructor(t,n=null){this.name=t,this.data=n}},c=new Map;function D(e,t,n){let i=c.get(e)||[],o=new A(e,t,n);return i.push(o),c.set(e,i),()=>wt(o)}function q(e,t){return D(e,t,-1)}function _(e,t){return D(e,t,1)}function wt(e){let t=e.eventName,n=c.get(t).filter(i=>i!==e);n.length===0?c.delete(t):c.set(t,n)}function K(e){let t=c.get(e.name);if(t){let n=[];t.forEach(i=>{i.Callback(e)&&n.push(i)}),n.length>0&&(t=t.filter(i=>!n.includes(i)),t.length===0?c.delete(e.name):c.set(e.name,t))}}function $(e,...t){[e,...t].forEach(i=>{c.delete(i)})}function ee(){c.clear()}function y(e){mt(pt,e)}var gt=a(l.Dialog),ht=0,xt=1,Ct=2,vt=3,Wt=4,bt=5,m=new Map;function St(){let e;do e=g();while(m.has(e));return e}function te(e,t,n){let i=m.get(e);i&&(n?i.resolve(JSON.parse(t)):i.resolve(t),m.delete(e))}function ne(e,t){let n=m.get(e);n&&(n.reject(t),m.delete(e))}function h(e,t){return new Promise((n,i)=>{let o=St();t=t||{},t["dialog-id"]=o,m.set(o,{resolve:n,reject:i}),gt(e,t).catch(r=>{i(r),m.delete(o)})})}function ie(e){return h(ht,e)}function oe(e){return h(xt,e)}function re(e){return h(Ct,e)}function C(e){return h(vt,e)}function le(e){return h(Wt,e)}function ae(e){return h(bt,e)}var Mt=a(l.ContextMenu),Dt=0;function yt(e,t,n,i){Mt(Dt,{id:e,x:t,y:n,data:i})}function se(){window.addEventListener("contextmenu",Et)}function Et(e){let t=e.target,n=window.getComputedStyle(t).getPropertyValue("--custom-contextmenu");if(n=n?n.trim():"",n){e.preventDefault();let i=window.getComputedStyle(t).getPropertyValue("--custom-contextmenu-data");yt(n,e.clientX,e.clientY,i);return}Rt(e)}function Rt(e){let t=e.target;switch(window.getComputedStyle(t).getPropertyValue("--default-contextmenu").trim()){case"show":return;case"hide":e.preventDefault();return;default:if(t.isContentEditable)return;let o=window.getSelection(),r=o.toString().length>0;if(r)for(let u=0;u<o.rangeCount;u++){let s=o.getRangeAt(u).getClientRects();for(let w=0;w<s.length;w++){let x=s[w];if(document.elementFromPoint(x.left,x.top)===t)return}}if((t.tagName==="INPUT"||t.tagName==="TEXTAREA")&&(r||!t.readOnly&&!t.disabled))return;e.preventDefault()}}function ue(e,t=null){let n=new M(e,t);y(n)}function kt(){document.querySelectorAll("[data-wml-event]").forEach(function(t){let n=t.getAttribute("data-wml-event"),i=t.getAttribute("data-wml-confirm"),o=t.getAttribute("data-wml-trigger")||"click",r=function(){if(i){C({Title:"Confirm",Message:i,Detached:!1,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(u){u!=="No"&&ue(n)});return}ue(n)};t.removeEventListener(o,r),t.addEventListener(o,r)})}function ce(e){wails.Window[e]===void 0&&console.log("Window method "+e+" not found"),wails.Window[e]()}function Ot(){document.querySelectorAll("[data-wml-window]").forEach(function(t){let n=t.getAttribute("data-wml-window"),i=t.getAttribute("data-wml-confirm"),o=t.getAttribute("data-wml-trigger")||"click",r=function(){if(i){C({Title:"Confirm",Message:i,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(u){u!=="No"&&ce(n)});return}ce(n)};t.removeEventListener(o,r),t.addEventListener(o,r)})}function j(){kt(),Ot()}var B=function(e){chrome.webview.postMessage(e)};var de=new Map;function fe(e){let t=new Map;for(let[n,i]of Object.entries(e))typeof i=="object"&&i!==null?t.set(n,fe(i)):t.set(n,i);return t}fetch("/wails/flags").then(e=>{e.json().then(t=>{de=fe(t)})});function Nt(e){let t=e.split("."),n=de;for(let i of t)if(n instanceof Map?n=n.get(i):n=n[i],n===void 0)break;return n}function E(e){return Nt(e)}var v=!1;function It(e){let t=window.getComputedStyle(e.target).getPropertyValue("--webkit-app-region");return t&&(t=t.trim()),t!=="drag"||e.buttons!==1?!1:e.detail===1}function me(){window.addEventListener("mousedown",zt),window.addEventListener("mousemove",Tt),window.addEventListener("mouseup",Pt)}var R=null;function Lt(e){return R?(B("resize:"+R),!0):!1}function zt(e){if(!Lt())if(It(e)){if(e.offsetX>e.target.clientWidth||e.offsetY>e.target.clientHeight)return;v=!0}else v=!1}function Pt(e){(e.buttons!==void 0?e.buttons:e.which)>0&&H()}function H(){document.body.style.cursor="default",v=!1}function d(e){document.documentElement.style.cursor=e||At,R=e}function Tt(e){if(v){v=!1,(e.buttons!==void 0?e.buttons:e.which)>0&&B("drag");return}jt(e)}var At="auto";function jt(e){let t=E("system.resizeHandleHeight")||5,n=E("system.resizeHandleWidth")||5,i=E("resizeCornerExtra")||10,o=window.outerWidth-e.clientX<n,r=e.clientX<n,u=e.clientY<t,p=window.outerHeight-e.clientY<t,s=window.outerWidth-e.clientX<n+i,w=e.clientX<n+i,x=e.clientY<t+i,F=window.outerHeight-e.clientY<t+i;!r&&!o&&!u&&!p&&R!==void 0?d():s&&F?d("se-resize"):w&&F?d("sw-resize"):w&&x?d("nw-resize"):x&&s?d("ne-resize"):r?d("w-resize"):u?d("n-resize"):p?d("s-resize"):o&&d("e-resize")}window.wails={...pe(null),Capabilities:{},clientId:k};fetch("/wails/capabilities").then(e=>{e.json().then(t=>{window.wails.Capabilities=t})});window._wails={dialogCallback:te,dialogErrorCallback:ne,dispatchWailsEvent:K,callCallback:U,callErrorCallback:Z,endDrag:H};function pe(e){return{Clipboard:{...O},Application:{...L,GetWindowByName(t){return pe(t)}},System:T,Screens:P,Call:Y,CallByID:X,CallByName:Q,Plugin:V,WML:{Reload:j},Dialog:{Info:ie,Warning:oe,Error:re,Question:C,OpenFile:le,SaveFile:ae},Events:{Emit:y,On:q,Once:_,OnMultiple:D,Off:$,OffAll:ee},Window:J(e)}}se();me();document.addEventListener("DOMContentLoaded",function(){j()});})();
