var Bc=Object.defineProperty;var Gc=(r,e,t)=>e in r?Bc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Tn=(r,e,t)=>Gc(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="174",yi={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hc=0,pl=1,Vc=2,Wa=1,kc=2,_n=3,Mn=0,Pt=1,tn=2,On=0,Mi=1,ml=2,gl=3,Il=4,zc=5,Zn=100,Wc=101,Kc=102,Xc=103,Yc=104,qc=200,jc=201,$c=202,Zc=203,Ks=204,Xs=205,Jc=206,Qc=207,ed=208,td=209,nd=210,id=211,rd=212,sd=213,od=214,Ys=0,qs=1,js=2,bi=3,$s=4,Zs=5,Js=6,Qs=7,Ka=0,ld=1,ad=2,Bn=0,cd=1,dd=2,ud=3,hd=4,fd=5,pd=6,md=7,_l="attached",gd="detached",Xa=300,wi=301,Ri=302,eo=303,to=304,ts=306,Ci=1e3,Un=1001,$r=1002,Et=1003,Ya=1004,Ji=1005,Ut=1006,kr=1007,xn=1008,Sn=1009,qa=1010,ja=1011,ir=1012,Go=1013,ti=1014,$t=1015,ar=1016,Ho=1017,Vo=1018,Pi=1020,$a=35902,Za=1021,Ja=1022,kt=1023,Qa=1024,ec=1025,Si=1026,Li=1027,ko=1028,zo=1029,tc=1030,Wo=1031,Ko=1033,zr=33776,Wr=33777,Kr=33778,Xr=33779,no=35840,io=35841,ro=35842,so=35843,oo=36196,lo=37492,ao=37496,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,Io=37815,_o=37816,Ao=37817,xo=37818,vo=37819,yo=37820,Mo=37821,Yr=36492,So=36494,To=36495,nc=36283,Eo=36284,bo=36285,wo=36286,rr=2300,sr=2301,ls=2302,Al=2400,xl=2401,vl=2402,Id=2500,_d=0,ic=1,Ro=2,Ad=3200,xd=3201,rc=0,vd=1,Nn="",_t="srgb",wt="srgb-linear",Zr="linear",Qe="srgb",si=7680,yl=519,yd=512,Md=513,Sd=514,sc=515,Td=516,Ed=517,bd=518,wd=519,Co=35044,Ml="300 es",vn=2e3,Jr=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const er=Math.PI/180,Di=180/Math.PI;function Zt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Ue(r,e,t){return Math.max(e,Math.min(t,r))}function Xo(r,e){return(r%e+e)%e}function Rd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Cd(r,e,t){return r!==e?(t-r)/(e-r):0}function tr(r,e,t){return(1-t)*r+t*e}function Pd(r,e,t,n){return tr(r,e,1-Math.exp(-t*n))}function Ld(r,e=1){return e-Math.abs(Xo(r,e*2)-e)}function Dd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ud(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Fd(r,e){return r+Math.random()*(e-r)}function Od(r){return r*(.5-Math.random())}function Bd(r){r!==void 0&&(Sl=r);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(r){return r*er}function Hd(r){return r*Di}function Vd(r){return(r&r-1)===0&&r!==0}function kd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wd(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),a=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(l*d,a*u,a*h,l*c);break;case"YZY":r.set(a*h,l*d,a*u,l*c);break;case"ZXZ":r.set(a*u,a*h,l*d,l*c);break;case"XZX":r.set(l*d,a*g,a*p,l*c);break;case"YXY":r.set(a*p,l*d,a*g,l*c);break;case"ZYZ":r.set(a*g,a*p,l*d,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const oc={DEG2RAD:er,RAD2DEG:Di,generateUUID:Zt,clamp:Ue,euclideanModulo:Xo,mapLinear:Rd,inverseLerp:Cd,lerp:tr,damp:Pd,pingpong:Ld,smoothstep:Dd,smootherstep:Nd,randInt:Ud,randFloat:Fd,randFloatSpread:Od,seededRandom:Bd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:kd,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Wd,normalize:Ze,denormalize:qt};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,s,o,l,a,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,a,c)}set(e,t,n,i,s,o,l,a,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=s,d[5]=a,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],g=n[8],I=i[0],m=i[3],f=i[6],M=i[1],y=i[4],x=i[7],P=i[2],w=i[5],E=i[8];return s[0]=o*I+l*M+a*P,s[3]=o*m+l*y+a*w,s[6]=o*f+l*x+a*E,s[1]=c*I+d*M+u*P,s[4]=c*m+d*y+u*w,s[7]=c*f+d*x+u*E,s[2]=h*I+p*M+g*P,s[5]=h*m+p*y+g*w,s[8]=h*f+p*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],d=e[8];return t*o*d-t*l*c-n*s*d+n*l*a+i*s*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],d=e[8],u=d*o-l*c,h=l*a-d*s,p=c*s-o*a,g=t*u+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/g;return e[0]=u*I,e[1]=(i*c-d*n)*I,e[2]=(l*n-i*o)*I,e[3]=h*I,e[4]=(d*t-i*a)*I,e[5]=(i*s-l*t)*I,e[6]=p*I,e[7]=(n*a-c*t)*I,e[8]=(o*t-n*s)*I,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-i*c,i*a,-i*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Pe;function lc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kd(){const r=or("canvas");return r.style.display="block",r}const Tl={};function jn(r){r in Tl||(Tl[r]=!0,console.warn(r))}function Xd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const El=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const r={enabled:!0,workingColorSpace:wt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wt]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:El,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:El,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),r}const ke=jd();function yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ti(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let oi;class $d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=or("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zd=0;class Yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Zt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(cs(i[o].image)):s.push(cs(i[o]))}else s=cs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$d.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jd=0;class gt extends ii{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Un,i=Un,s=Ut,o=xn,l=kt,a=Sn,c=gt.DEFAULT_ANISOTROPY,d=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Zt(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Xa;gt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,c=a[0],d=a[4],u=a[8],h=a[1],p=a[5],g=a[9],I=a[2],m=a[6],f=a[10];if(Math.abs(d-h)<.01&&Math.abs(u-I)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+I)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,P=(f+1)/2,w=(d+h)/4,E=(u+I)/4,U=(g+m)/4;return y>x&&y>P?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):x>P?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=U/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=E/s,i=U/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-I)*(u-I)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-I)/M,this.z=(h-d)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ac extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let a=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],I=s[o+3];if(l===0){e[t+0]=a,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(l===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=I;return}if(u!==I||a!==h||c!==p||d!==g){let m=1-l;const f=a*h+c*p+d*g+u*I,M=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const P=Math.sqrt(y),w=Math.atan2(P,f*M);m=Math.sin(m*w)/P,l=Math.sin(l*w)/P}const x=l*M;if(a=a*m+h*x,c=c*m+p*x,d=d*m+g*x,u=u*m+I*x,m===1-l){const P=1/Math.sqrt(a*a+c*c+d*d+u*u);a*=P,c*=P,d*=P,u*=P}}e[t]=a,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],a=n[i+1],c=n[i+2],d=n[i+3],u=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=l*g+d*u+a*p-c*h,e[t+1]=a*g+d*h+c*u-l*p,e[t+2]=c*g+d*p+l*h-a*u,e[t+3]=d*g-l*u-a*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),d=l(i/2),u=l(s/2),h=a(n/2),p=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"YXZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"ZXY":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"ZYX":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"YZX":this._x=h*d*u+c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u-h*p*g;break;case"XZY":this._x=h*d*u-c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],a=t[9],c=t[2],d=t[6],u=t[10],h=n+l+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-a)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>l&&n>u){const p=2*Math.sqrt(1+n-l-u);this._w=(d-a)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(l>u){const p=2*Math.sqrt(1+l-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(a+d)/p}else{const p=2*Math.sqrt(1+u-n-l);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(a+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,a=t._y,c=t._z,d=t._w;return this._x=n*d+o*l+i*c-s*a,this._y=i*d+o*a+s*l-n*c,this._z=s*d+o*c+n*a-i*l,this._w=o*d-n*l-i*a-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-l*l;if(a<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(a),d=Math.atan2(c,l),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*i-l*n),d=2*(l*t-s*i),u=2*(s*n-o*t);return this.x=t+a*c+o*u-l*d,this.y=n+a*d+l*c-s*u,this.z=i+a*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,a=t.z;return this.x=i*a-s*l,this.y=s*o-n*a,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ds.copy(this).projectOnVector(e),this.sub(ds)}reflect(e){return this.sub(ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new C,wl=new sn;class ln{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),mr.subVectors(this.max,zi),li.subVectors(e.a,zi),ai.subVectors(e.b,zi),ci.subVectors(e.c,zi),En.subVectors(ai,li),bn.subVectors(ci,ai),kn.subVectors(li,ci);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-kn.z,kn.y,En.z,0,-En.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-En.y,En.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!us(t,li,ai,ci,mr)||(t=[1,0,0,0,1,0,0,0,1],!us(t,li,ai,ci,mr))?!1:(gr.crossVectors(En,bn),t=[gr.x,gr.y,gr.z],us(t,li,ai,ci,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new C,new C,new C,new C,new C,new C,new C,new C],Kt=new C,pr=new ln,li=new C,ai=new C,ci=new C,En=new C,bn=new C,kn=new C,zi=new C,mr=new C,gr=new C,zn=new C;function us(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zn.fromArray(r,s);const l=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),a=e.dot(zn),c=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(a,c,d),Math.min(a,c,d))>l)return!1}return!0}const tu=new ln,Wi=new C,hs=new C;class an{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(hs)),this.expandByPoint(Wi.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new C,fs=new C,Ir=new C,wn=new C,ps=new C,_r=new C,ms=new C;class cr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fs.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),l=wn.dot(this.direction),a=-wn.dot(Ir),c=wn.lengthSq(),d=Math.abs(1-o*o);let u,h,p,g;if(d>0)if(u=o*a-l,h=o*l-a,g=s*d,u>=0)if(h>=-g)if(h<=g){const I=1/d;u*=I,h*=I,p=u*(u+o*h+2*l)+h*(o*u+h+2*a)+c}else h=s,u=Math.max(0,-(o*h+l)),p=-u*u+h*(h+2*a)+c;else h=-s,u=Math.max(0,-(o*h+l)),p=-u*u+h*(h+2*a)+c;else h<=-g?(u=Math.max(0,-(-o*s+l)),h=u>0?-s:Math.min(Math.max(-s,-a),s),p=-u*u+h*(h+2*a)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-a),s),p=h*(h+2*a)+c):(u=Math.max(0,-(o*s+l)),h=u>0?s:Math.min(Math.max(-s,-a),s),p=-u*u+h*(h+2*a)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+l)),p=-u*u+h*(h+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fs).addScaledVector(Ir,h),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,a;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(l=(e.min.z-h.z)*u,a=(e.max.z-h.z)*u):(l=(e.max.z-h.z)*u,a=(e.min.z-h.z)*u),n>a||l>i)||((l>n||n!==n)&&(n=l),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,s){ps.subVectors(t,e),_r.subVectors(n,e),ms.crossVectors(ps,_r);let o=this.direction.dot(ms),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;wn.subVectors(this.origin,e);const a=l*this.direction.dot(_r.crossVectors(wn,_r));if(a<0)return null;const c=l*this.direction.dot(ps.cross(wn));if(c<0||a+c>o)return null;const d=-l*wn.dot(ms);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,s,o,l,a,c,d,u,h,p,g,I,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,a,c,d,u,h,p,g,I,m)}set(e,t,n,i,s,o,l,a,c,d,u,h,p,g,I,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=l,f[13]=a,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=I,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),o=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*u,g=l*d,I=l*u;t[0]=a*d,t[4]=-a*u,t[8]=c,t[1]=p+g*c,t[5]=h-I*c,t[9]=-l*a,t[2]=I-h*c,t[6]=g+p*c,t[10]=o*a}else if(e.order==="YXZ"){const h=a*d,p=a*u,g=c*d,I=c*u;t[0]=h+I*l,t[4]=g*l-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-l,t[2]=p*l-g,t[6]=I+h*l,t[10]=o*a}else if(e.order==="ZXY"){const h=a*d,p=a*u,g=c*d,I=c*u;t[0]=h-I*l,t[4]=-o*u,t[8]=g+p*l,t[1]=p+g*l,t[5]=o*d,t[9]=I-h*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const h=o*d,p=o*u,g=l*d,I=l*u;t[0]=a*d,t[4]=g*c-p,t[8]=h*c+I,t[1]=a*u,t[5]=I*c+h,t[9]=p*c-g,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const h=o*a,p=o*c,g=l*a,I=l*c;t[0]=a*d,t[4]=I-h*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-l*d,t[2]=-c*d,t[6]=p*u+g,t[10]=h-I*u}else if(e.order==="XZY"){const h=o*a,p=o*c,g=l*a,I=l*c;t[0]=a*d,t[4]=-u,t[8]=c*d,t[1]=h*u+I,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=l*d,t[10]=I*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Rn.crossVectors(n,Dt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Rn.crossVectors(n,Dt)),Rn.normalize(),Ar.crossVectors(Dt,Rn),i[0]=Rn.x,i[4]=Ar.x,i[8]=Dt.x,i[1]=Rn.y,i[5]=Ar.y,i[9]=Dt.y,i[2]=Rn.z,i[6]=Ar.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],g=n[2],I=n[6],m=n[10],f=n[14],M=n[3],y=n[7],x=n[11],P=n[15],w=i[0],E=i[4],U=i[8],S=i[12],v=i[1],R=i[5],z=i[9],G=i[13],q=i[2],j=i[6],K=i[10],Z=i[14],V=i[3],re=i[7],de=i[11],_e=i[15];return s[0]=o*w+l*v+a*q+c*V,s[4]=o*E+l*R+a*j+c*re,s[8]=o*U+l*z+a*K+c*de,s[12]=o*S+l*G+a*Z+c*_e,s[1]=d*w+u*v+h*q+p*V,s[5]=d*E+u*R+h*j+p*re,s[9]=d*U+u*z+h*K+p*de,s[13]=d*S+u*G+h*Z+p*_e,s[2]=g*w+I*v+m*q+f*V,s[6]=g*E+I*R+m*j+f*re,s[10]=g*U+I*z+m*K+f*de,s[14]=g*S+I*G+m*Z+f*_e,s[3]=M*w+y*v+x*q+P*V,s[7]=M*E+y*R+x*j+P*re,s[11]=M*U+y*z+x*K+P*de,s[15]=M*S+y*G+x*Z+P*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],a=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],g=e[3],I=e[7],m=e[11],f=e[15];return g*(+s*a*u-i*c*u-s*l*h+n*c*h+i*l*p-n*a*p)+I*(+t*a*p-t*c*h+s*o*h-i*o*p+i*c*d-s*a*d)+m*(+t*c*u-t*l*p-s*o*u+n*o*p+s*l*d-n*c*d)+f*(-i*l*d-t*a*u+t*l*h+i*o*u-n*o*h+n*a*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],g=e[12],I=e[13],m=e[14],f=e[15],M=u*m*c-I*h*c+I*a*p-l*m*p-u*a*f+l*h*f,y=g*h*c-d*m*c-g*a*p+o*m*p+d*a*f-o*h*f,x=d*I*c-g*u*c+g*l*p-o*I*p-d*l*f+o*u*f,P=g*u*a-d*I*a-g*l*h+o*I*h+d*l*m-o*u*m,w=t*M+n*y+i*x+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=M*E,e[1]=(I*h*s-u*m*s-I*i*p+n*m*p+u*i*f-n*h*f)*E,e[2]=(l*m*s-I*a*s+I*i*c-n*m*c-l*i*f+n*a*f)*E,e[3]=(u*a*s-l*h*s-u*i*c+n*h*c+l*i*p-n*a*p)*E,e[4]=y*E,e[5]=(d*m*s-g*h*s+g*i*p-t*m*p-d*i*f+t*h*f)*E,e[6]=(g*a*s-o*m*s-g*i*c+t*m*c+o*i*f-t*a*f)*E,e[7]=(o*h*s-d*a*s+d*i*c-t*h*c-o*i*p+t*a*p)*E,e[8]=x*E,e[9]=(g*u*s-d*I*s-g*n*p+t*I*p+d*n*f-t*u*f)*E,e[10]=(o*I*s-g*l*s+g*n*c-t*I*c-o*n*f+t*l*f)*E,e[11]=(d*l*s-o*u*s-d*n*c+t*u*c+o*n*p-t*l*p)*E,e[12]=P*E,e[13]=(d*I*i-g*u*i+g*n*h-t*I*h-d*n*m+t*u*m)*E,e[14]=(g*l*i-o*I*i-g*n*a+t*I*a+o*n*m-t*l*m)*E,e[15]=(o*u*i-d*l*i+d*n*a-t*u*a-o*n*h+t*l*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,a=e.z,c=s*o,d=s*l;return this.set(c*o+n,c*l-i*a,c*a+i*l,0,c*l+i*a,d*l+n,d*a-i*o,0,c*a-i*l,d*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,a=t._w,c=s+s,d=o+o,u=l+l,h=s*c,p=s*d,g=s*u,I=o*d,m=o*u,f=l*u,M=a*c,y=a*d,x=a*u,P=n.x,w=n.y,E=n.z;return i[0]=(1-(I+f))*P,i[1]=(p+x)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(p-x)*w,i[5]=(1-(h+f))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+y)*E,i[9]=(m-M)*E,i[10]=(1-(h+I))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=di.set(i[0],i[1],i[2]).length();const o=di.set(i[4],i[5],i[6]).length(),l=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/s,d=1/o,u=1/l;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=d,Xt.elements[5]*=d,Xt.elements[6]*=d,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=vn){const a=this.elements,c=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let p,g;if(l===vn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===Jr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=d,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=vn){const a=this.elements,c=1/(t-e),d=1/(n-i),u=1/(o-s),h=(t+e)*c,p=(n+i)*d;let g,I;if(l===vn)g=(o+s)*u,I=-2*u;else if(l===Jr)g=s*u,I=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*d,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=I,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Xt=new Le,nu=new C(0,0,0),iu=new C(1,1,1),Rn=new C,Ar=new C,Dt=new C,Rl=new Le,Cl=new sn;class on{constructor(e=0,t=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],a=i[1],c=i[5],d=i[9],u=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ru=0;const Pl=new C,ui=new sn,pn=new Le,xr=new C,Ki=new C,su=new C,ou=new sn,Ll=new C(1,0,0),Dl=new C(0,1,0),Nl=new C(0,0,1),Ul={type:"added"},lu={type:"removed"},hi={type:"childadded",child:null},gs={type:"childremoved",child:null};class ot extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new C,t=new on,n=new sn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Pe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ki,xr,this.up):pn.lookAt(xr,Ki,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(pn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),gs.child=e,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,d=a.length;c<d;c++){const u=a[c];s(e.shapes,u)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(s(e.materials,this.material[a]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];i.animations.push(s(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(l){const a=[];for(const c in l){const d=l[c];delete d.metadata,a.push(d)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new C(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new C,mn=new C,Is=new C,gn=new C,fi=new C,pi=new C,Fl=new C,_s=new C,As=new C,xs=new C,vs=new Ye,ys=new Ye,Ms=new Ye;class jt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yt.subVectors(i,t),mn.subVectors(n,t),Is.subVectors(e,t);const o=Yt.dot(Yt),l=Yt.dot(mn),a=Yt.dot(Is),c=mn.dot(mn),d=mn.dot(Is),u=o*c-l*l;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*a-l*d)*h,g=(o*d-l*a)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,s,o,l,a){return this.getBarycoord(e,t,n,i,gn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,gn.x),a.addScaledVector(o,gn.y),a.addScaledVector(l,gn.z),a)}static getInterpolatedAttribute(e,t,n,i,s,o){return vs.setScalar(0),ys.setScalar(0),Ms.setScalar(0),vs.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Ms.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vs,s.x),o.addScaledVector(ys,s.y),o.addScaledVector(Ms,s.z),o}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;fi.subVectors(i,n),pi.subVectors(s,n),_s.subVectors(e,n);const a=fi.dot(_s),c=pi.dot(_s);if(a<=0&&c<=0)return t.copy(n);As.subVectors(e,i);const d=fi.dot(As),u=pi.dot(As);if(d>=0&&u<=d)return t.copy(i);const h=a*u-d*c;if(h<=0&&a>=0&&d<=0)return o=a/(a-d),t.copy(n).addScaledVector(fi,o);xs.subVectors(e,s);const p=fi.dot(xs),g=pi.dot(xs);if(g>=0&&p<=g)return t.copy(s);const I=p*c-a*g;if(I<=0&&c>=0&&g<=0)return l=c/(c-g),t.copy(n).addScaledVector(pi,l);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Fl.subVectors(s,i),l=(u-d)/(u-d+(p-g)),t.copy(i).addScaledVector(Fl,l);const f=1/(m+I+h);return o=I*f,l=h*f,t.copy(n).addScaledVector(fi,o).addScaledVector(pi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ss(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=Xo(e,1),t=Ue(t,0,1),n=Ue(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ss(o,s,e+1/3),this.g=Ss(o,s,e),this.b=Ss(o,s,e-1/3)}return ke.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ke.fromWorkingColorSpace(vt.copy(this),e),Math.round(Ue(vt.r*255,0,255))*65536+Math.round(Ue(vt.g*255,0,255))*256+Math.round(Ue(vt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,s=vt.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let a,c;const d=(l+o)/2;if(l===o)a=0,c=0;else{const u=o-l;switch(c=d<=.5?u/(o+l):u/(2-o-l),o){case n:a=(i-s)/u+(i<s?6:0);break;case i:a=(s-n)/u+2;break;case s:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=d,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=_t){ke.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(vr);const n=tr(Cn.h,vr.h,t),i=tr(Cn.s,vr.s,t),s=tr(Cn.l,vr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new we;we.NAMES=dc;let au=0;class nn extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Zt(),this.name="",this.type="Material",this.blending=Mi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Xs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==Xs&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const a=s[l];delete a.metadata,o.push(a)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qn extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new C,yr=new be;let cu=0;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}}class uc extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hc extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let du=0;const Ht=new Le,Ts=new ot,mi=new C,Nt=new ln,Xi=new ln,mt=new C;class Qt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?hc:uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Xi.setFromBufferAttribute(l),this.morphTargetsRelative?(mt.addVectors(Nt.min,Xi.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,Xi.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(Xi.min),Nt.expandByPoint(Xi.max))}Nt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],a=this.morphTargetsRelative;for(let c=0,d=l.count;c<d;c++)mt.fromBufferAttribute(l,c),a&&(mi.fromBufferAttribute(e,c),mt.add(mi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],a=[];for(let U=0;U<n.count;U++)l[U]=new C,a[U]=new C;const c=new C,d=new C,u=new C,h=new be,p=new be,g=new be,I=new C,m=new C;function f(U,S,v){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),h.fromBufferAttribute(s,U),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),d.sub(c),u.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(I.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(R),l[U].add(I),l[S].add(I),l[v].add(I),a[U].add(m),a[S].add(m),a[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,S=M.length;U<S;++U){const v=M[U],R=v.start,z=v.count;for(let G=R,q=R+z;G<q;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new C,x=new C,P=new C,w=new C;function E(U){P.fromBufferAttribute(i,U),w.copy(P);const S=l[U];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(w,S);const R=x.dot(a[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,R)}for(let U=0,S=M.length;U<S;++U){const v=M[U],R=v.start,z=v.count;for(let G=R,q=R+z;G<q;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new C,s=new C,o=new C,l=new C,a=new C,c=new C,d=new C,u=new C;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),I=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,I),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),l.fromBufferAttribute(n,g),a.fromBufferAttribute(n,I),c.fromBufferAttribute(n,m),l.add(d),a.add(d),c.add(d),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(I,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(l,a){const c=l.array,d=l.itemSize,u=l.normalized,h=new c.constructor(a.length*d);let p=0,g=0;for(let I=0,m=a.length;I<m;I++){l.isInterleavedBufferAttribute?p=a[I]*l.data.stride+l.offset:p=a[I]*d;for(let f=0;f<d;f++)h[g++]=c[p++]}return new bt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const l in i){const a=i[l],c=e(a,n);t.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const a=[],c=s[l];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,n);a.push(p)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(i[a]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new Le,Wn=new cr,Mr=new an,Bl=new C,Sr=new C,Tr=new C,Er=new C,Es=new C,br=new C,Gl=new C,wr=new C;class Ft extends ot{constructor(e=new Qt,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){br.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const d=l[a],u=s[a];d!==0&&(Es.fromBufferAttribute(u,e),o?br.addScaledVector(Es,d):br.addScaledVector(Es.sub(t),d))}t.add(br)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Mr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Mr,Bl)===null||Wn.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Ol.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,a=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,I=h.length;g<I;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,P=y;x<P;x+=3){const w=l.getX(x),E=l.getX(x+1),U=l.getX(x+2);i=Rr(this,f,e,n,c,d,u,w,E,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),I=Math.min(l.count,p.start+p.count);for(let m=g,f=I;m<f;m+=3){const M=l.getX(m),y=l.getX(m+1),x=l.getX(m+2);i=Rr(this,o,e,n,c,d,u,M,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let g=0,I=h.length;g<I;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,P=y;x<P;x+=3){const w=x,E=x+1,U=x+2;i=Rr(this,f,e,n,c,d,u,w,E,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),I=Math.min(a.count,p.start+p.count);for(let m=g,f=I;m<f;m+=3){const M=m,y=m+1,x=m+2;i=Rr(this,o,e,n,c,d,u,M,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function uu(r,e,t,n,i,s,o,l){let a;if(e.side===Pt?a=n.intersectTriangle(o,s,i,!0,l):a=n.intersectTriangle(i,s,o,e.side===Mn,l),a===null)return null;wr.copy(l),wr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:r}}function Rr(r,e,t,n,i,s,o,l,a,c){r.getVertexPosition(l,Sr),r.getVertexPosition(a,Tr),r.getVertexPosition(c,Er);const d=uu(r,e,t,n,Sr,Tr,Er,Gl);if(d){const u=new C;jt.getBarycoord(Gl,Sr,Tr,Er,u),i&&(d.uv=jt.getInterpolatedAttribute(i,l,a,c,u,new be)),s&&(d.uv1=jt.getInterpolatedAttribute(s,l,a,c,u,new be)),o&&(d.normal=jt.getInterpolatedAttribute(o,l,a,c,u,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:l,b:a,c,normal:new C,materialIndex:0};jt.getNormal(Sr,Tr,Er,h.normal),d.face=h,d.barycoord=u}return d}class dr extends Qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],c=[],d=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(u,2));function g(I,m,f,M,y,x,P,w,E,U,S){const v=x/E,R=P/U,z=x/2,G=P/2,q=w/2,j=E+1,K=U+1;let Z=0,V=0;const re=new C;for(let de=0;de<K;de++){const _e=de*R-G;for(let Fe=0;Fe<j;Fe++){const tt=Fe*v-z;re[I]=tt*M,re[m]=_e*y,re[f]=q,c.push(re.x,re.y,re.z),re[I]=0,re[m]=0,re[f]=w>0?1:-1,d.push(re.x,re.y,re.z),u.push(Fe/E),u.push(1-de/U),Z+=1}}for(let de=0;de<U;de++)for(let _e=0;_e<E;_e++){const Fe=h+_e+j*de,tt=h+_e+j*(de+1),W=h+(_e+1)+j*(de+1),ee=h+(_e+1)+j*de;a.push(Fe,tt,ee),a.push(tt,W,ee),V+=6}l.addGroup(p,V,S),p+=V,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(r){const e={};for(let t=0;t<r.length;t++){const n=Ni(r[t]);for(const i in n)e[i]=n[i]}return e}function hu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const fu={clone:Ni,merge:St};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pc extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new C,Hl=new be,Vl=new be;class Tt extends pc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Vl),t.subVectors(Vl,Hl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,Ii=1;class gu extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(gi,Ii,e,t);i.layers=this.layers,this.add(i);const s=new Tt(gi,Ii,e,t);s.layers=this.layers,this.add(s);const o=new Tt(gi,Ii,e,t);o.layers=this.layers,this.add(o);const l=new Tt(gi,Ii,e,t);l.layers=this.layers,this.add(l);const a=new Tt(gi,Ii,e,t);a.layers=this.layers,this.add(a);const c=new Tt(gi,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,a]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,a,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,a),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=I,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mc extends gt{constructor(e,t,n,i,s,o,l,a,c,d){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,n,i,s,o,l,a,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iu extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dr(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:On});s.uniforms.tEquirect.value=t;const o=new Ft(i,s),l=t.minFilter;return t.minFilter===xn&&(t.minFilter=Ut),new gu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ei extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _u={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const I of e.hand.values()){const m=t.getJointPose(I,n),f=this._getHandJoint(c,I);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_u)))}return l!==null&&(l.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Au extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new C;class qo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kl=new C,zl=new Ye,Wl=new Ye,vu=new C,Kl=new Le,Cr=new C,ws=new an,Xl=new Le,Rs=new cr;class yu extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_l,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(i),e.ray.intersectsSphere(ws)!==!1&&(Xl.copy(i).invert(),Rs.copy(e.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&Rs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Wl.fromBufferAttribute(i.attributes.skinWeight,e),kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Wl.getComponent(s);if(o!==0){const l=zl.getComponent(s);Kl.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(vu.copy(kl).applyMatrix4(Kl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gc extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ic extends gt{constructor(e=null,t=1,n=1,i,s,o,l,a,c=Et,d=Et,u,h){super(null,o,l,a,c,d,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=new Le,Mu=new Le;class jo{constructor(e=[],t=[]){this.uuid=Zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:Mu;Yl.multiplyMatrices(l,t[s]),Yl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ic(t,e,e,kt,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new gc),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Po extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _i=new Le,ql=new Le,Pr=[],jl=new ln,Su=new Le,Yi=new Ft,qi=new an;class Tu extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Su)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),jl.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),qi.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),e.ray.intersectsSphere(qi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_i),ql.multiplyMatrices(n,_i),Yi.matrixWorld=ql,Yi.raycast(e,Pr);for(let o=0,l=Pr.length;o<l;o++){const a=Pr[o];a.instanceId=s,a.object=this,t.push(a)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(i*this.count),i,this.count,ko,$t));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=i*e;s[a]=l,s.set(n,a+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cs=new C,Eu=new C,bu=new Pe;class Dn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cs.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bu.getNormalMatrix(e),i=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new an,Lr=new C;class $o{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],a=i[3],c=i[4],d=i[5],u=i[6],h=i[7],p=i[8],g=i[9],I=i[10],m=i[11],f=i[12],M=i[13],y=i[14],x=i[15];if(n[0].setComponents(a-s,h-c,m-p,x-f).normalize(),n[1].setComponents(a+s,h+c,m+p,x+f).normalize(),n[2].setComponents(a+o,h+d,m+g,x+M).normalize(),n[3].setComponents(a-o,h-d,m-g,x-M).normalize(),n[4].setComponents(a-l,h-u,m-I,x-y).normalize(),t===vn)n[5].setComponents(a+l,h+u,m+I,x+y).normalize();else if(t===Jr)n[5].setComponents(l,u,I,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qr=new C,es=new C,$l=new Le,ji=new cr,Dr=new an,Ps=new C,Zl=new C;class Jo extends ot{constructor(e=new Qt,t=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qr.fromBufferAttribute(t,i-1),es.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qr.distanceTo(es);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;$l.copy(i).invert(),ji.copy(e.ray).applyMatrix4($l);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let I=p,m=g-1;I<m;I+=c){const f=d.getX(I),M=d.getX(I+1),y=Nr(this,e,ji,a,f,M,I);y&&t.push(y)}if(this.isLineLoop){const I=d.getX(g-1),m=d.getX(p),f=Nr(this,e,ji,a,I,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let I=p,m=g-1;I<m;I+=c){const f=Nr(this,e,ji,a,I,I+1,I);f&&t.push(f)}if(this.isLineLoop){const I=Nr(this,e,ji,a,g-1,p,g-1);I&&t.push(I)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Nr(r,e,t,n,i,s,o){const l=r.geometry.attributes.position;if(Qr.fromBufferAttribute(l,i),es.fromBufferAttribute(l,s),t.distanceSqToSegment(Qr,es,Ps,Zl)>n)return;Ps.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ps);if(!(c<e.near||c>e.far))return{distance:c,point:Zl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Jl=new C,Ql=new C;class _c extends Jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Jl.fromBufferAttribute(t,i),Ql.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wu extends Jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ac extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ea=new Le,Lo=new cr,Ur=new an,Fr=new C;class Ru extends ot{constructor(e=new Qt,t=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;ea.copy(i).invert(),Lo.copy(e.ray).applyMatrix4(ea);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,I=p;g<I;g++){const m=c.getX(g);Fr.fromBufferAttribute(u,m),ta(Fr,m,a,i,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,I=p;g<I;g++)Fr.fromBufferAttribute(u,g),ta(Fr,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ta(r,e,t,n,i,s,o){const l=Lo.distanceSqToPoint(r);if(l<t){const a=new C;Lo.closestPointToPoint(r,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xc extends gt{constructor(e,t,n,i,s,o,l,a,c,d=Si){if(d!==Si&&d!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Si&&(n=ti),n===void 0&&d===Li&&(n=Pi),super(null,i,s,o,l,a,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Et,this.minFilter=a!==void 0?a:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ns extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),a=Math.floor(i),c=l+1,d=a+1,u=e/l,h=t/a,p=[],g=[],I=[],m=[];for(let f=0;f<d;f++){const M=f*h-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-M,0),I.push(0,0,1),m.push(y/l),m.push(1-f/a)}}for(let f=0;f<a;f++)for(let M=0;M<l;M++){const y=M+c*f,x=M+c*(f+1),P=M+1+c*(f+1),w=M+1+c*f;p.push(y,x,w),p.push(x,P,w)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(I,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qo extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Qo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cu extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pu extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Or(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Lu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Du(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function na(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const l=t[s]*e;for(let a=0;a!==e;++a)i[o++]=r[l+a]}return i}function vc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nu extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,l=i[s],a=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case xl:s=e,l=2*t-n;break;case vl:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case xl:o=e,a=2*n-t;break;case vl:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),I=g*g,m=I*g,f=-h*m+2*h*I-h*g,M=(1+h)*m+(-1.5-2*h)*I+(-.5+h)*g+1,y=(-1-p)*m+(1.5+p)*I+.5*g,x=p*m-p*I;for(let P=0;P!==l;++P)s[P]=f*o[d+P]+M*o[c+P]+y*o[a+P]+x*o[u+P];return s}}class Uu extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,d=(n-t)/(i-t),u=1-d;for(let h=0;h!==l;++h)s[h]=o[c+h]*u+o[a+h]*d;return s}}class Fu extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case ls:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return ls}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const a=n[l];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(i!==void 0&&Lu(i))for(let l=0,a=i.length;l!==a;++l){const c=i[l];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ls,s=e.length-1;let o=1;for(let l=1;l<s;++l){let a=!1;const c=e[l],d=e[l+1];if(c!==d&&(l!==1||c!==e[0]))if(i)a=!0;else{const u=l*n,h=u-n,p=u+n;for(let g=0;g!==n;++g){const I=t[u+g];if(I!==t[h+g]||I!==t[p+g]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];const u=l*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=sr;class Bi extends dn{constructor(e,t,n){super(e,t,n)}}Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=rr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class yc extends dn{}yc.prototype.ValueTypeName="color";class Ui extends dn{}Ui.prototype.ValueTypeName="number";class Ou extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(i-t);let c=e*l;for(let d=c+l;c!==d;c+=4)sn.slerpFlat(s,0,o,c-l,o,c,a);return s}}class Fi extends dn{InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}}Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends dn{constructor(e,t,n){super(e,t,n)}}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=rr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Oi extends dn{}Oi.prototype.ValueTypeName="vector";class Bu{constructor(e="",t=-1,n=[],i=Id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(Hu(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let l=0;l<s;l++){let a=[],c=[];a.push((l+s-1)%s,l,(l+1)%s),c.push(0,1,0);const d=Du(a);a=na(a,1,d),c=na(c,1,d),!i&&a[0]===0&&(a.push(s),c.push(c[0])),o.push(new Ui(".morphTargetInfluences["+t[l].name+"]",a,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const c=e[l],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,p,g,I){if(p.length!==0){const m=[],f=[];vc(p,m,f,g),m.length!==0&&I.push(new u(h,m,f))}},i=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let I=0;I<h[g].morphTargets.length;I++)p[h[g].morphTargets[I]]=-1;for(const I in p){const m=[],f=[];for(let M=0;M!==h[g].morphTargets.length;++M){const y=h[g];m.push(y.time),f.push(y.morphTarget===I?1:0)}i.push(new Ui(".morphTargetInfluence["+I+"]",m,f))}a=p.length*o}else{const p=".bones["+t[u].name+"]";n(Oi,p+".position",h,"pos",i),n(Fi,p+".quaternion",h,"rot",i),n(Oi,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,a,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Gu(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return yc;case"quaternion":return Fi;case"bool":case"boolean":return Bi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Hu(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Gu(r.type);if(r.times===void 0){const t=[],n=[];vc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vu{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,l),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return a?a(d):d},this.setURLModifier=function(d){return a=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const ku=new Vu;class Hi{constructor(e){this.manager=e!==void 0?e:ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class zu extends Error{constructor(e,t){super(e),this.response=t}}class Mc extends Hi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,a=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=In[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let I=0;const m=new ReadableStream({start(f){M();function M(){u.read().then(({done:y,value:x})=>{if(y)f.close();else{I+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:I,total:p});for(let w=0,E=d.length;w<E;w++){const U=d[w];U.onProgress&&U.onProgress(P)}f.enqueue(x),M()}},y=>{f.error(y)})}}});return new Response(m)}else throw new zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return c.json();default:if(l===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(l),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Fn.add(e,c);const d=In[e];delete In[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=In[e];if(d===void 0)throw this.manager.itemError(e),c;delete In[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wu extends Hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=or("img");function a(){d(),Fn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){d(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Ku extends Hi{constructor(e){super(e)}load(e,t,n,i){const s=new gt,o=new Wu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class is extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ls=new Le,ia=new C,ra=new C;class el{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ia.setFromMatrixPosition(e.matrixWorld),t.position.copy(ia),ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ra),t.updateMatrixWorld(),Ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xu extends el{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Di*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yu extends is{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sa=new Le,$i=new C,Ds=new C;class qu extends el{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),Ds.copy(n.position),Ds.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ds),n.updateMatrixWorld(),i.makeTranslation(-$i.x,-$i.y,-$i.z),sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa)}}class ju extends is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tl extends pc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,l-=d*this.view.offsetY,a=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $u extends el{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new $u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ju extends is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qu extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const a=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fn.add(e,a),s.manager.itemStart(e)}}class eh extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const nl="\\[\\]\\.:\\/",th=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",nh="[^"+nl.replace("\\.","")+"]",ih=/((?:WC+[\/:])*)/.source.replace("WC",il),rh=/(WCOD+)?/.source.replace("WCOD",nh),sh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),oh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),lh=new RegExp("^"+ih+rh+sh+oh+"$"),ah=["material","materials","bones","map"];class ch{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(th,"")}static parseTrackName(e){const t=lh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ah.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const a=n(l.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=ch;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oa{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ue(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ue(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dh extends _c{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Qt;i.setAttribute("position",new Jt(t,3)),i.setAttribute("color",new Jt(n,3));const s=new Zo({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new we,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class uh extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function la(r,e,t,n){const i=hh(n);switch(t){case Za:return r*e;case Qa:return r*e;case ec:return r*e*2;case ko:return r*e/i.components*i.byteLength;case zo:return r*e/i.components*i.byteLength;case tc:return r*e*2/i.components*i.byteLength;case Wo:return r*e*2/i.components*i.byteLength;case Ja:return r*e*3/i.components*i.byteLength;case kt:return r*e*4/i.components*i.byteLength;case Ko:return r*e*4/i.components*i.byteLength;case zr:case Wr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Xr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case io:case so:return Math.max(r,16)*Math.max(e,8)/4;case no:case ro:return Math.max(r,8)*Math.max(e,8)/2;case oo:case lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yr:case So:case To:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nc:case Eo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bo:case wo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hh(r){switch(r){case Sn:case qa:return{byteLength:1,components:1};case ir:case ja:case ar:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case ti:case Go:case $t:return{byteLength:4,components:1};case $a:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fh(r){const e=new WeakMap;function t(l,a){const c=l.array,d=l.usage,u=c.byteLength,h=r.createBuffer();r.bindBuffer(a,h),r.bufferData(a,c,d),l.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,a,c){const d=a.array,u=a.updateRanges;if(r.bindBuffer(c,l),u.length===0)r.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){const g=u[h],I=u[p];I.start<=g.start+g.count+1?g.count=Math.max(g.count,I.start+I.count-g.start):(++h,u[h]=I)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){const I=u[p];r.bufferSubData(c,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(r.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:i,remove:s,update:o}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:Ih,alphatest_fragment:_h,alphatest_pars_fragment:Ah,aomap_fragment:xh,aomap_pars_fragment:vh,batching_pars_vertex:yh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:Th,bsdfs:Eh,iridescence_fragment:bh,bumpmap_pars_fragment:wh,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Nh,color_pars_vertex:Uh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:kh,emissivemap_pars_fragment:zh,colorspace_fragment:Wh,colorspace_pars_fragment:Kh,envmap_fragment:Xh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:qh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:lf,envmap_vertex:$h,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:rf,lights_lambert_pars_fragment:sf,lights_pars_begin:of,lights_toon_fragment:af,lights_toon_pars_fragment:cf,lights_phong_fragment:df,lights_phong_pars_fragment:uf,lights_physical_fragment:hf,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:xf,map_fragment:vf,map_pars_fragment:yf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:bf,morphcolor_vertex:wf,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:Nf,normal_pars_vertex:Uf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Vf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Wf,project_vertex:Kf,dithering_fragment:Xf,dithering_pars_fragment:Yf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:Zf,shadowmap_vertex:Jf,shadowmask_pars_fragment:Qf,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:rp,specularmap_pars_fragment:sp,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:ap,transmission_pars_fragment:cp,uv_pars_fragment:dp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:Ip,cube_vert:_p,cube_frag:Ap,depth_vert:xp,depth_frag:vp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:Tp,linedashed_vert:Ep,linedashed_frag:bp,meshbasic_vert:wp,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Np,meshnormal_frag:Up,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:Gp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:kp,points_frag:zp,shadow_vert:Wp,shadow_frag:Kp,sprite_vert:Xp,sprite_frag:Yp},te={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},en={basic:{uniforms:St([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:St([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:St([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:St([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:St([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:St([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:St([te.points,te.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:St([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:St([te.common,te.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:St([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:St([te.sprite,te.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:St([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:St([te.lights,te.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};en.physical={uniforms:St([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Br={r:0,b:0,g:0},Xn=new on,qp=new Le;function jp(r,e,t,n,i,s,o){const l=new we(0);let a=s===!0?0:1,c,d,u=null,h=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function I(y){let x=!1;const P=g(y);P===null?f(l,a):P&&P.isColor&&(f(P,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===ts)?(d===void 0&&(d=new Ft(new dr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ni(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,E,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Xn)),d.material.toneMapped=ke.getTransfer(P.colorSpace)!==Qe,(u!==P||h!==P.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,u=P,h=P.version,p=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Ft(new ns(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ni(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ke.getTransfer(P.colorSpace)!==Qe,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(Br,fc(r)),n.buffers.color.setClear(Br.r,Br.g,Br.b,x,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(y,x=1){l.set(y),a=x,f(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,f(l,a)},render:I,addToRenderList:m,dispose:M}}function $p(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function l(v,R,z,G,q){let j=!1;const K=u(G,z,R);s!==K&&(s=K,c(s.object)),j=p(v,G,z,q),j&&g(v,G,z,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(v,R,z,G),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function a(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function d(v){return r.deleteVertexArray(v)}function u(v,R,z){const G=z.wireframe===!0;let q=n[v.id];q===void 0&&(q={},n[v.id]=q);let j=q[R.id];j===void 0&&(j={},q[R.id]=j);let K=j[G];return K===void 0&&(K=h(a()),j[G]=K),K}function h(v){const R=[],z=[],G=[];for(let q=0;q<t;q++)R[q]=0,z[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:G,object:v,attributes:{},index:null}}function p(v,R,z,G){const q=s.attributes,j=R.attributes;let K=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){const de=q[V];let _e=j[V];if(_e===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function g(v,R,z,G){const q={},j=R.attributes;let K=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){let de=j[V];de===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),q[V]=_e,K++}s.attributes=q,s.attributesNum=K,s.index=G}function I(){const v=s.newAttributes;for(let R=0,z=v.length;R<z;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const z=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;z[v]=1,G[v]===0&&(r.enableVertexAttribArray(v),G[v]=1),q[v]!==R&&(r.vertexAttribDivisor(v,R),q[v]=R)}function M(){const v=s.newAttributes,R=s.enabledAttributes;for(let z=0,G=R.length;z<G;z++)R[z]!==v[z]&&(r.disableVertexAttribArray(z),R[z]=0)}function y(v,R,z,G,q,j,K){K===!0?r.vertexAttribIPointer(v,R,z,q,j):r.vertexAttribPointer(v,R,z,G,q,j)}function x(v,R,z,G){I();const q=G.attributes,j=z.getAttributes(),K=R.defaultAttributeValues;for(const Z in j){const V=j[Z];if(V.location>=0){let re=q[Z];if(re===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const de=re.normalized,_e=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;const tt=Fe.buffer,W=Fe.type,ee=Fe.bytesPerElement,me=W===r.INT||W===r.UNSIGNED_INT||re.gpuType===Go;if(re.isInterleavedBufferAttribute){const se=re.data,ye=se.stride,Xe=re.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)f(V.location+Se,se.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Se=0;Se<V.locationSize;Se++)y(V.location+Se,_e/V.locationSize,W,de,ye*ee,(Xe+_e/V.locationSize*Se)*ee,me)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)f(V.location+se,re.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let se=0;se<V.locationSize;se++)y(V.location+se,_e/V.locationSize,W,de,_e*ee,_e/V.locationSize*se*ee,me)}}else if(K!==void 0){const de=K[Z];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(V.location,de);break;case 3:r.vertexAttrib3fv(V.location,de);break;case 4:r.vertexAttrib4fv(V.location,de);break;default:r.vertexAttrib1fv(V.location,de)}}}}M()}function P(){U();for(const v in n){const R=n[v];for(const z in R){const G=R[z];for(const q in G)d(G[q].object),delete G[q];delete R[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const z in R){const G=R[z];for(const q in G)d(G[q].object),delete G[q];delete R[z]}delete n[v.id]}function E(v){for(const R in n){const z=n[R];if(z[v.id]===void 0)continue;const G=z[v.id];for(const q in G)d(G[q].object),delete G[q];delete z[v.id]}}function U(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:U,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:I,enableAttribute:m,disableUnusedAttributes:M}}function Zp(r,e,t){let n;function i(c){n=c}function s(c,d){r.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(r.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function l(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,n,1)}function a(c,d,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let I=0;I<u;I++)g+=d[I]*h[I];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function Jp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==kt&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(E){const U=E===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Sn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$t&&!U)}function a(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=a(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:I,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:w}}function Qp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Dn,l=new Pe,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||i;return i=h,n=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,I=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?d(null):c();else{const M=s?0:n,y=M*4;let x=f.clippingState||null;a.value=x,x=d(g,h,y,p);for(let P=0;P!==y;++P)x[P]=t[P];f.clippingState=x,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=M}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,g){const I=u!==null?u.length:0;let m=null;if(I!==0){if(m=a.value,g!==!0||m===null){const f=p+I*4,M=h.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==I;++y,x+=4)o.copy(u[y]).applyMatrix4(M,l),o.normal.toArray(m,x),m[x+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,m}}function em(r){let e=new WeakMap;function t(o,l){return l===eo?o.mapping=wi:l===to&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===eo||l===to)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const c=new Iu(a.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const vi=4,aa=[.125,.215,.35,.446,.526,.582],Jn=20,Ns=new tl,ca=new we;let Us=null,Fs=0,Os=0,Bs=!1;const $n=(1+Math.sqrt(5))/2,Ai=1/$n,da=[new C(-$n,Ai,0),new C($n,Ai,0),new C(-Ai,0,$n),new C(Ai,0,$n),new C(0,$n,-Ai),new C(0,$n,Ai),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],tm=new C;class ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:l=tm}=s;Us=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Fs,Os),this._renderer.xr.enabled=Bs,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:ar,format:kt,colorSpace:wt,depthBuffer:!1},i=ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(s)),this._blurMaterial=im(s,e,t)}return i}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,i,s){const a=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(ca),u.toneMapping=Bn,u.autoClear=!1;const g=new Qn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),I=new Ft(new dr,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(ca),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(a.up.set(0,c[M],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+d[M],s.y,s.z)):y===1?(a.up.set(0,0,c[M]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+d[M],s.z)):(a.up.set(0,c[M],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+d[M]));const x=this._cubeSize;Gr(i,y*x,M>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(I,a),u.render(e,a)}I.geometry.dispose(),I.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const a=this._cubeSize;Gr(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=da[(i-s-1)%da.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ft(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),I=s/g,m=isFinite(s)?1+Math.floor(d*I):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let M=0;for(let E=0;E<Jn;++E){const U=E/I,S=Math.exp(-U*U/2);f.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[i],P=3*x*(i>y-vi?i-y+vi:0),w=4*(this._cubeSize-x);Gr(t,P,w,3*x,2*x),a.setRenderTarget(t),a.render(u,Ns)}}function nm(r){const e=[],t=[],n=[];let i=r;const s=r-vi+1+aa.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let a=1/l;o>r-vi?a=aa[o-r+vi-1]:o===0&&(a=0),n.push(a);const c=1/(l-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,I=3,m=2,f=1,M=new Float32Array(I*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,U=w>2?0:-1,S=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];M.set(S,I*g*w),y.set(h,m*g*w);const v=[w,w,w,w,w,w];x.set(v,f*g*w)}const P=new Qt;P.setAttribute("position",new bt(M,I)),P.setAttribute("uv",new bt(y,m)),P.setAttribute("faceIndex",new bt(x,f)),e.push(P),i>vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ha(r,e,t){const n=new ni(r,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function im(r,e,t){const n=new Float32Array(Jn),i=new C(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function fa(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function pa(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rm(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const a=l.mapping,c=a===eo||a===to,d=a===wi||a===Ri;if(c||d){let u=e.get(l);const h=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==h)return t===null&&(t=new ua(r)),u=c?t.fromEquirectangular(l,u):t.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),u.texture;if(u!==void 0)return u.texture;{const p=l.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new ua(r)),u=c?t.fromEquirectangular(l):t.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),l.addEventListener("dispose",s),u.texture):null}}}return l}function i(l){let a=0;const c=6;for(let d=0;d<c;d++)l[d]!==void 0&&a++;return a===c}function s(l){const a=l.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&jn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function om(r,e,t,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function a(u){const h=u.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,g=u.attributes.position;let I=0;if(p!==null){const M=p.array;I=p.version;for(let y=0,x=M.length;y<x;y+=3){const P=M[y+0],w=M[y+1],E=M[y+2];h.push(P,w,w,E,E,P)}}else if(g!==void 0){const M=g.array;I=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const P=y+0,w=y+1,E=y+2;h.push(P,w,w,E,E,P)}}else return;const m=new(lc(h)?hc:uc)(h,1);m.version=I;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function d(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:l,update:a,getWireframeAttribute:d}}function lm(r,e,t){let n;function i(h){n=h}let s,o;function l(h){s=h.type,o=h.bytesPerElement}function a(h,p){r.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(h,p,g,I){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],I[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,I,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*I[M];t.update(f,n,1)}}this.setMode=i,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function am(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cm(r,e,t){const n=new WeakMap,i=new Ye;function s(o,l,a){const c=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(l);if(h===void 0||h.count!==u){let v=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",v)};var p=v;h!==void 0&&h.texture.dispose();const g=l.morphAttributes.position!==void 0,I=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let x=0;g===!0&&(x=1),I===!0&&(x=2),m===!0&&(x=3);let P=l.attributes.position.count*x,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*w*4*u),U=new ac(E,P,w,u);U.type=$t,U.needsUpdate=!0;const S=x*4;for(let R=0;R<u;R++){const z=f[R],G=M[R],q=y[R],j=P*w*4*R;for(let K=0;K<z.count;K++){const Z=K*S;g===!0&&(i.fromBufferAttribute(z,K),E[j+Z+0]=i.x,E[j+Z+1]=i.y,E[j+Z+2]=i.z,E[j+Z+3]=0),I===!0&&(i.fromBufferAttribute(G,K),E[j+Z+4]=i.x,E[j+Z+5]=i.y,E[j+Z+6]=i.z,E[j+Z+7]=0),m===!0&&(i.fromBufferAttribute(q,K),E[j+Z+8]=i.x,E[j+Z+9]=i.y,E[j+Z+10]=i.z,E[j+Z+11]=q.itemSize===4?i.w:1)}}h={count:u,texture:U,size:new be(P,w)},n.set(l,h),l.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const I=l.morphTargetsRelative?1:1-g;a.getUniforms().setValue(r,"morphTargetBaseInfluence",I),a.getUniforms().setValue(r,"morphTargetInfluences",c)}a.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function dm(r,e,t,n){let i=new WeakMap;function s(a){const c=n.render.frame,d=a.geometry,u=e.get(a,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),i.get(a)!==c&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,c))),a.isSkinnedMesh){const h=a.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function l(a){const c=a.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Tc=new gt,ma=new xc(1,1),Ec=new ac,bc=new eu,wc=new mc,ga=[],Ia=[],_a=new Float32Array(16),Aa=new Float32Array(9),xa=new Float32Array(4);function Vi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ga[i];if(s===void 0&&(s=new Float32Array(i),ga[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rs(r,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function um(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function mm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;xa.set(n),r.uniformMatrix2fv(this.addr,!1,xa),pt(t,n)}}function gm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Aa.set(n),r.uniformMatrix3fv(this.addr,!1,Aa),pt(t,n)}}function Im(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;_a.set(n),r.uniformMatrix4fv(this.addr,!1,_a),pt(t,n)}}function _m(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function ym(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ma.compareFunction=sc,s=ma):s=Tc,t.setTexture2D(e||s,i)}function bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bc,i)}function wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wc,i)}function Rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ec,i)}function Cm(r){switch(r){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return Im;case 5124:case 35670:return _m;case 35667:case 35671:return Am;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(r,e){r.uniform1fv(this.addr,e)}function Lm(r,e){const t=Vi(e,this.size,2);r.uniform2fv(this.addr,t)}function Dm(r,e){const t=Vi(e,this.size,3);r.uniform3fv(this.addr,t)}function Nm(r,e){const t=Vi(e,this.size,4);r.uniform4fv(this.addr,t)}function Um(r,e){const t=Vi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fm(r,e){const t=Vi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Om(r,e){const t=Vi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bm(r,e){r.uniform1iv(this.addr,e)}function Gm(r,e){r.uniform2iv(this.addr,e)}function Hm(r,e){r.uniform3iv(this.addr,e)}function Vm(r,e){r.uniform4iv(this.addr,e)}function km(r,e){r.uniform1uiv(this.addr,e)}function zm(r,e){r.uniform2uiv(this.addr,e)}function Wm(r,e){r.uniform3uiv(this.addr,e)}function Km(r,e){r.uniform4uiv(this.addr,e)}function Xm(r,e,t){const n=this.cache,i=e.length,s=rs(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tc,s[o])}function Ym(r,e,t){const n=this.cache,i=e.length,s=rs(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bc,s[o])}function qm(r,e,t){const n=this.cache,i=e.length,s=rs(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wc,s[o])}function jm(r,e,t){const n=this.cache,i=e.length,s=rs(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ec,s[o])}function $m(r){switch(r){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Nm;case 35674:return Um;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return km;case 36294:return zm;case 36295:return Wm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return jm}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cm(t.type)}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$m(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function va(r,e){r.seq.push(e),r.map[e.id]=e}function eg(r,e,t){const n=r.name,i=n.length;for(Gs.lastIndex=0;;){const s=Gs.exec(n),o=Gs.lastIndex;let l=s[1];const a=s[2]==="]",c=s[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===i){va(t,c===void 0?new Zm(l,r,e):new Jm(l,r,e));break}else{let u=t.map[l];u===void 0&&(u=new Qm(l),va(t,u)),t=u}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);eg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ya(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const tg=37297;let ng=0;function ig(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Ma=new Pe;function rg(r){ke._getMatrix(Ma,ke.workingColorSpace,r);const e=`mat3( ${Ma.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(r)){case Zr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Sa(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ig(r.getShaderSource(e),o)}else return i}function sg(r,e){const t=rg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function og(r,e){let t;switch(e){case cd:t="Linear";break;case dd:t="Reinhard";break;case ud:t="Cineon";break;case hd:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new C;function lg(){ke.getLuminanceCoefficients(Hr);const r=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function cg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Qi(r){return r!==""}function Ta(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ea(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(r){return r.replace(ug,fg)}const hg=new Map;function fg(r,e){let t=Ne[e];if(t===void 0){const n=hg.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(r){return r.replace(pg,mg)}function mg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wa(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wi:case Ri:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Ag(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function xg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=gg(t),c=Ig(t),d=_g(t),u=Ag(t),h=xg(t),p=ag(t),g=cg(s),I=i.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(m=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Bn?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Do(o),o=Ta(o,t),o=Ea(o,t),l=Do(l),l=Ta(l,t),l=Ea(l,t),o=ba(o),l=ba(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=M+m+o,x=M+f+l,P=ya(i,i.VERTEX_SHADER,y),w=ya(i,i.FRAGMENT_SHADER,x);i.attachShader(I,P),i.attachShader(I,w),t.index0AttributeName!==void 0?i.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(I,0,"position"),i.linkProgram(I);function E(R){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(I).trim(),G=i.getShaderInfoLog(P).trim(),q=i.getShaderInfoLog(w).trim();let j=!0,K=!0;if(i.getProgramParameter(I,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,I,P,w);else{const Z=Sa(i,P,"vertex"),V=Sa(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(I,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||q==="")&&(K=!1);K&&(R.diagnostics={runnable:j,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(P),i.deleteShader(w),U=new qr(i,I),S=dg(i,I)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(I,tg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ng++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=w,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sg(e),t.set(e,n)),n}}class Sg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Tg(r,e,t,n,i,s,o){const l=new cc,a=new Mg,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,R,z,G){const q=z.fog,j=G.geometry,K=S.isMeshStandardMaterial?z.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),V=Z&&Z.mapping===ts?Z.image.height:null,re=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=de!==void 0?de.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let tt,W,ee,me;if(re){const $e=en[re];tt=$e.vertexShader,W=$e.fragmentShader}else tt=S.vertexShader,W=S.fragmentShader,a.update(S),ee=a.getVertexShaderID(S),me=a.getFragmentShaderID(S);const se=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Xe=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,ct=!!S.map,st=!!S.matcap,Be=!!Z,b=!!S.aoMap,Ot=!!S.lightMap,Ge=!!S.bumpMap,He=!!S.normalMap,Ae=!!S.displacementMap,it=!!S.emissiveMap,Ie=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,F=S.clearcoat>0,X=S.dispersion>0,$=S.iridescence>0,k=S.sheen>0,ge=S.transmission>0,oe=_&&!!S.anisotropyMap,ue=F&&!!S.clearcoatMap,ze=F&&!!S.clearcoatNormalMap,Q=F&&!!S.clearcoatRoughnessMap,he=$&&!!S.iridescenceMap,Me=$&&!!S.iridescenceThicknessMap,Te=k&&!!S.sheenColorMap,fe=k&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,De=!!S.specularColorMap,nt=!!S.specularIntensityMap,L=ge&&!!S.transmissionMap,ne=ge&&!!S.thicknessMap,H=!!S.gradientMap,Y=!!S.alphaMap,ae=S.alphaTest>0,le=!!S.alphaHash,Ce=!!S.extensions;let lt=Bn;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(lt=r.toneMapping);const At={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:W,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&G.instanceColor!==null,instancingMorph:Xe&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:wt,alphaToCoverage:!!S.alphaToCoverage,map:ct,matcap:st,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:Ot,bumpMap:Ge,normalMap:He,displacementMap:h&&Ae,emissiveMap:it,normalMapObjectSpace:He&&S.normalMapType===vd,normalMapTangentSpace:He&&S.normalMapType===rc,metalnessMap:Ie,roughnessMap:T,anisotropy:_,anisotropyMap:oe,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:ze,clearcoatRoughnessMap:Q,dispersion:X,iridescence:$,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:k,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:De,specularIntensityMap:nt,transmission:ge,transmissionMap:L,thicknessMap:ne,gradientMap:H,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ae,alphaHash:le,combine:S.combine,mapUv:ct&&I(S.map.channel),aoMapUv:b&&I(S.aoMap.channel),lightMapUv:Ot&&I(S.lightMap.channel),bumpMapUv:Ge&&I(S.bumpMap.channel),normalMapUv:He&&I(S.normalMap.channel),displacementMapUv:Ae&&I(S.displacementMap.channel),emissiveMapUv:it&&I(S.emissiveMap.channel),metalnessMapUv:Ie&&I(S.metalnessMap.channel),roughnessMapUv:T&&I(S.roughnessMap.channel),anisotropyMapUv:oe&&I(S.anisotropyMap.channel),clearcoatMapUv:ue&&I(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&I(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&I(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&I(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&I(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&I(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&I(S.sheenRoughnessMap.channel),specularMapUv:Ve&&I(S.specularMap.channel),specularColorMapUv:De&&I(S.specularColorMap.channel),specularIntensityMapUv:nt&&I(S.specularIntensityMap.channel),transmissionMapUv:L&&I(S.transmissionMap.channel),thicknessMapUv:ne&&I(S.thicknessMap.channel),alphaMapUv:Y&&I(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(He||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(ct||Y),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:ct&&S.map.isVideoTexture===!0&&ke.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&ke.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.reverseDepthBuffer&&l.enable(4),v.skinning&&l.enable(5),v.morphTargets&&l.enable(6),v.morphNormals&&l.enable(7),v.morphColors&&l.enable(8),v.premultipliedAlpha&&l.enable(9),v.shadowMapEnabled&&l.enable(10),v.doubleSided&&l.enable(11),v.flipSided&&l.enable(12),v.useDepthPacking&&l.enable(13),v.dithering&&l.enable(14),v.transmission&&l.enable(15),v.sheen&&l.enable(16),v.opaque&&l.enable(17),v.pointsUvs&&l.enable(18),v.decodeVideoTexture&&l.enable(19),v.decodeVideoTextureEmissive&&l.enable(20),v.alphaToCoverage&&l.enable(21),S.push(l.mask)}function x(S){const v=g[S.type];let R;if(v){const z=en[v];R=fu.clone(z.uniforms)}else R=S.uniforms;return R}function P(S,v){let R;for(let z=0,G=d.length;z<G;z++){const q=d[z];if(q.cacheKey===v){R=q,++R.usedTimes;break}}return R===void 0&&(R=new vg(r,v,S,s),d.push(R)),R}function w(S){if(--S.usedTimes===0){const v=d.indexOf(S);d[v]=d[d.length-1],d.pop(),S.destroy()}}function E(S){a.remove(S)}function U(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:w,releaseShaderCache:E,programs:d,dispose:U}}function Eg(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function i(o,l,a){r.get(o)[l]=a}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function bg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ra(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ca(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,p,g,I,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:I,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=I,f.group=m),e++,f}function l(u,h,p,g,I,m){const f=o(u,h,p,g,I,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function a(u,h,p,g,I,m){const f=o(u,h,p,g,I,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||bg),n.length>1&&n.sort(h||Ra),i.length>1&&i.sort(h||Ra)}function d(){for(let u=e,h=r.length;u<h;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:a,finish:d,sort:c}}function wg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ca,r.set(n,[o])):i>=s.length?(o=new Ca,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new we};break;case"SpotLight":t={position:new C,direction:new C,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Pg=0;function Lg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dg(r){const e=new Rg,t=Cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,s=new Le,o=new Le;function l(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,I=0,m=0,f=0,M=0,y=0,x=0,P=0,w=0,E=0;c.sort(Lg);for(let S=0,v=c.length;S<v;S++){const R=c[S],z=R.color,G=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*G,u+=z.g*G,h+=z.b*G;else if(R.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(R.sh.coefficients[K],G);E++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=K,p++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(z).multiplyScalar(G),K.distance=q,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,n.spot[I]=K;const Z=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Z.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[I]=Z.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[I]=V,n.spotShadowMap[I]=j,x++}I++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(z).multiplyScalar(G),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=K,m++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const Z=R.shadow,V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=K,g++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(G),K.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[f]=K,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==I||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==M||U.numPointShadows!==y||U.numSpotShadows!==x||U.numSpotMaps!==P||U.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=I,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,U.directionalLength=p,U.pointLength=g,U.spotLength=I,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=M,U.numPointShadows=y,U.numSpotShadows=x,U.numSpotMaps=P,U.numLightProbes=E,n.version=Pg++)}function a(c,d){let u=0,h=0,p=0,g=0,I=0;const m=d.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[I];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),I++}}}return{setup:l,setupView:a,state:n}}function Pa(r){const e=new Dg(r),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function l(){e.setup(t)}function a(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:l,setupLightsView:a,pushLight:s,pushShadow:o}}function Ng(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new Pa(r),e.set(i,[l])):s>=o.length?(l=new Pa(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Og(r,e,t){let n=new $o;const i=new be,s=new be,o=new Ye,l=new Cu({depthPacking:xd}),a=new Pu,c={},d=t.maxTextureSize,u={[Mn]:Pt,[Pt]:Mn,[tn]:tn},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Ug,fragmentShader:Fg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let f=this.type;this.render=function(w,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),z=r.state;z.setBlending(On),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=f!==_n&&this.type===_n,q=f===_n&&this.type!==_n;for(let j=0,K=w.length;j<K;j++){const Z=w[j],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const re=V.getFrameExtents();if(i.multiply(re),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/re.x),i.x=s.x*re.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/re.y),i.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||G===!0||q===!0){const _e=this.type!==_n?{minFilter:Et,magFilter:Et}:{};V.map!==null&&V.map.dispose(),V.map=new ni(i.x,i.y,_e),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const de=V.getViewportCount();for(let _e=0;_e<de;_e++){const Fe=V.getViewport(_e);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(o),V.updateMatrices(Z,_e),n=V.getFrustum(),x(E,U,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&M(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,R)};function M(w,E){const U=e.update(I);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,U,h,I,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,U,p,I,null)}function y(w,E,U,S){let v=null;const R=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=U.isPointLight===!0?a:l,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=v.uuid,G=E.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let j=q[G];j===void 0&&(j=v.clone(),q[G]=j,E.addEventListener("dispose",P)),v=j}if(v.visible=E.visible,v.wireframe=E.wireframe,S===_n?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=r.properties.get(v);z.light=U}return v}function x(w,E,U,S,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===_n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const G=e.update(w),q=w.material;if(Array.isArray(q)){const j=G.groups;for(let K=0,Z=j.length;K<Z;K++){const V=j[K],re=q[V.materialIndex];if(re&&re.visible){const de=y(w,re,S,v);w.onBeforeShadow(r,w,E,U,G,de,V),r.renderBufferDirect(U,null,G,de,w,V),w.onAfterShadow(r,w,E,U,G,de,V)}}}else if(q.visible){const j=y(w,q,S,v);w.onBeforeShadow(r,w,E,U,G,j,null),r.renderBufferDirect(U,null,G,j,w,null),w.onAfterShadow(r,w,E,U,G,j,null)}}const z=w.children;for(let G=0,q=z.length;G<q;G++)x(z[G],E,U,S,v)}function P(w){w.target.removeEventListener("dispose",P);for(const U in c){const S=c[U],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Bg={[Ys]:qs,[js]:Js,[$s]:Qs,[bi]:Zs,[qs]:Ys,[Js]:js,[Qs]:$s,[Zs]:bi};function Gg(r,e){function t(){let L=!1;const ne=new Ye;let H=null;const Y=new Ye(0,0,0,0);return{setMask:function(ae){H!==ae&&!L&&(r.colorMask(ae,ae,ae,ae),H=ae)},setLocked:function(ae){L=ae},setClear:function(ae,le,Ce,lt,At){At===!0&&(ae*=lt,le*=lt,Ce*=lt),ne.set(ae,le,Ce,lt),Y.equals(ne)===!1&&(r.clearColor(ae,le,Ce,lt),Y.copy(ne))},reset:function(){L=!1,H=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,H=null,Y=null,ae=null;return{setReversed:function(le){if(ne!==le){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const lt=ae;ae=null,this.setClear(lt)}ne=le},getReversed:function(){return ne},setTest:function(le){le?se(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(le){H!==le&&!L&&(r.depthMask(le),H=le)},setFunc:function(le){if(ne&&(le=Bg[le]),Y!==le){switch(le){case Ys:r.depthFunc(r.NEVER);break;case qs:r.depthFunc(r.ALWAYS);break;case js:r.depthFunc(r.LESS);break;case bi:r.depthFunc(r.LEQUAL);break;case $s:r.depthFunc(r.EQUAL);break;case Zs:r.depthFunc(r.GEQUAL);break;case Js:r.depthFunc(r.GREATER);break;case Qs:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=le}},setLocked:function(le){L=le},setClear:function(le){ae!==le&&(ne&&(le=1-le),r.clearDepth(le),ae=le)},reset:function(){L=!1,H=null,Y=null,ae=null,ne=!1}}}function i(){let L=!1,ne=null,H=null,Y=null,ae=null,le=null,Ce=null,lt=null,At=null;return{setTest:function($e){L||($e?se(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function($e){ne!==$e&&!L&&(r.stencilMask($e),ne=$e)},setFunc:function($e,zt,un){(H!==$e||Y!==zt||ae!==un)&&(r.stencilFunc($e,zt,un),H=$e,Y=zt,ae=un)},setOp:function($e,zt,un){(le!==$e||Ce!==zt||lt!==un)&&(r.stencilOp($e,zt,un),le=$e,Ce=zt,lt=un)},setLocked:function($e){L=$e},setClear:function($e){At!==$e&&(r.clearStencil($e),At=$e)},reset:function(){L=!1,ne=null,H=null,Y=null,ae=null,le=null,Ce=null,lt=null,At=null}}}const s=new t,o=new n,l=new i,a=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],g=null,I=!1,m=null,f=null,M=null,y=null,x=null,P=null,w=null,E=new we(0,0,0),U=0,S=!1,v=null,R=null,z=null,G=null,q=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=Z>=2);let re=null,de={};const _e=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),tt=new Ye().fromArray(_e),W=new Ye().fromArray(Fe);function ee(L,ne,H,Y){const ae=new Uint8Array(4),le=r.createTexture();r.bindTexture(L,le),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<H;Ce++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ne+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return le}const me={};me[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),se(r.DEPTH_TEST),o.setFunc(bi),Ge(!1),He(pl),se(r.CULL_FACE),b(On);function se(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function ye(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Xe(L,ne){return u[L]!==ne?(r.bindFramebuffer(L,ne),u[L]=ne,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ne),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Se(L,ne){let H=p,Y=!1;if(L){H=h.get(ne),H===void 0&&(H=[],h.set(ne,H));const ae=L.textures;if(H.length!==ae.length||H[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ce=ae.length;le<Ce;le++)H[le]=r.COLOR_ATTACHMENT0+le;H.length=ae.length,Y=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,Y=!0);Y&&r.drawBuffers(H)}function ct(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const st={[Zn]:r.FUNC_ADD,[Wc]:r.FUNC_SUBTRACT,[Kc]:r.FUNC_REVERSE_SUBTRACT};st[Xc]=r.MIN,st[Yc]=r.MAX;const Be={[qc]:r.ZERO,[jc]:r.ONE,[$c]:r.SRC_COLOR,[Ks]:r.SRC_ALPHA,[nd]:r.SRC_ALPHA_SATURATE,[ed]:r.DST_COLOR,[Jc]:r.DST_ALPHA,[Zc]:r.ONE_MINUS_SRC_COLOR,[Xs]:r.ONE_MINUS_SRC_ALPHA,[td]:r.ONE_MINUS_DST_COLOR,[Qc]:r.ONE_MINUS_DST_ALPHA,[id]:r.CONSTANT_COLOR,[rd]:r.ONE_MINUS_CONSTANT_COLOR,[sd]:r.CONSTANT_ALPHA,[od]:r.ONE_MINUS_CONSTANT_ALPHA};function b(L,ne,H,Y,ae,le,Ce,lt,At,$e){if(L===On){I===!0&&(ye(r.BLEND),I=!1);return}if(I===!1&&(se(r.BLEND),I=!0),L!==zc){if(L!==m||$e!==S){if((f!==Zn||x!==Zn)&&(r.blendEquation(r.FUNC_ADD),f=Zn,x=Zn),$e)switch(L){case Mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ml:r.blendFunc(r.ONE,r.ONE);break;case gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ml:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,P=null,w=null,E.set(0,0,0),U=0,m=L,S=$e}return}ae=ae||ne,le=le||H,Ce=Ce||Y,(ne!==f||ae!==x)&&(r.blendEquationSeparate(st[ne],st[ae]),f=ne,x=ae),(H!==M||Y!==y||le!==P||Ce!==w)&&(r.blendFuncSeparate(Be[H],Be[Y],Be[le],Be[Ce]),M=H,y=Y,P=le,w=Ce),(lt.equals(E)===!1||At!==U)&&(r.blendColor(lt.r,lt.g,lt.b,At),E.copy(lt),U=At),m=L,S=!1}function Ot(L,ne){L.side===tn?ye(r.CULL_FACE):se(r.CULL_FACE);let H=L.side===Pt;ne&&(H=!H),Ge(H),L.blending===Mi&&L.transparent===!1?b(On):b(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;l.setTest(Y),Y&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function He(L){L!==Hc?(se(r.CULL_FACE),L!==R&&(L===pl?r.cullFace(r.BACK):L===Vc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),R=L}function Ae(L){L!==z&&(K&&r.lineWidth(L),z=L)}function it(L,ne,H){L?(se(r.POLYGON_OFFSET_FILL),(G!==ne||q!==H)&&(r.polygonOffset(ne,H),G=ne,q=H)):ye(r.POLYGON_OFFSET_FILL)}function Ie(L){L?se(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function T(L){L===void 0&&(L=r.TEXTURE0+j-1),re!==L&&(r.activeTexture(L),re=L)}function _(L,ne,H){H===void 0&&(re===null?H=r.TEXTURE0+j-1:H=re);let Y=de[H];Y===void 0&&(Y={type:void 0,texture:void 0},de[H]=Y),(Y.type!==L||Y.texture!==ne)&&(re!==H&&(r.activeTexture(H),re=H),r.bindTexture(L,ne||me[L]),Y.type=L,Y.texture=ne)}function F(){const L=de[re];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){tt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function fe(L){W.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Ve(L,ne){let H=c.get(ne);H===void 0&&(H=new WeakMap,c.set(ne,H));let Y=H.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(ne,L.name),H.set(L,Y))}function De(L,ne){const Y=c.get(ne).get(L);a.get(ne)!==Y&&(r.uniformBlockBinding(ne,Y,L.__bindingPointIndex),a.set(ne,Y))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,de={},u={},h=new WeakMap,p=[],g=null,I=!1,m=null,f=null,M=null,y=null,x=null,P=null,w=null,E=new we(0,0,0),U=0,S=!1,v=null,R=null,z=null,G=null,q=null,tt.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:se,disable:ye,bindFramebuffer:Xe,drawBuffers:Se,useProgram:ct,setBlending:b,setMaterial:Ot,setFlipSided:Ge,setCullFace:He,setLineWidth:Ae,setPolygonOffset:it,setScissorTest:Ie,activeTexture:T,bindTexture:_,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:he,texImage3D:Me,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:ze,texStorage3D:Q,texSubImage2D:k,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Te,viewport:fe,reset:nt}}function Hg(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):or("canvas")}function I(T,_,F){let X=1;const $=Ie(T);if(($.width>F||$.height>F)&&(X=F/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(X*$.width),ge=Math.floor(X*$.height);u===void 0&&(u=g(k,ge));const oe=_?g(k,ge):u;return oe.width=k,oe.height=ge,oe.getContext("2d").drawImage(T,0,0,k,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+ge+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(T,_,F,X,$=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=_;if(_===r.RED&&(F===r.FLOAT&&(k=r.R32F),F===r.HALF_FLOAT&&(k=r.R16F),F===r.UNSIGNED_BYTE&&(k=r.R8)),_===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(k=r.R8UI),F===r.UNSIGNED_SHORT&&(k=r.R16UI),F===r.UNSIGNED_INT&&(k=r.R32UI),F===r.BYTE&&(k=r.R8I),F===r.SHORT&&(k=r.R16I),F===r.INT&&(k=r.R32I)),_===r.RG&&(F===r.FLOAT&&(k=r.RG32F),F===r.HALF_FLOAT&&(k=r.RG16F),F===r.UNSIGNED_BYTE&&(k=r.RG8)),_===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(k=r.RG8UI),F===r.UNSIGNED_SHORT&&(k=r.RG16UI),F===r.UNSIGNED_INT&&(k=r.RG32UI),F===r.BYTE&&(k=r.RG8I),F===r.SHORT&&(k=r.RG16I),F===r.INT&&(k=r.RG32I)),_===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(k=r.RGB8UI),F===r.UNSIGNED_SHORT&&(k=r.RGB16UI),F===r.UNSIGNED_INT&&(k=r.RGB32UI),F===r.BYTE&&(k=r.RGB8I),F===r.SHORT&&(k=r.RGB16I),F===r.INT&&(k=r.RGB32I)),_===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(k=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(k=r.RGBA16UI),F===r.UNSIGNED_INT&&(k=r.RGBA32UI),F===r.BYTE&&(k=r.RGBA8I),F===r.SHORT&&(k=r.RGBA16I),F===r.INT&&(k=r.RGBA32I)),_===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(k=r.RGB9_E5),_===r.RGBA){const ge=$?Zr:ke.getTransfer(X);F===r.FLOAT&&(k=r.RGBA32F),F===r.HALF_FLOAT&&(k=r.RGBA16F),F===r.UNSIGNED_BYTE&&(k=ge===Qe?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(k=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(k=r.RGB5_A1)}return(k===r.R16F||k===r.R32F||k===r.RG16F||k===r.RG32F||k===r.RGBA16F||k===r.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function x(T,_){let F;return T?_===null||_===ti||_===Pi?F=r.DEPTH24_STENCIL8:_===$t?F=r.DEPTH32F_STENCIL8:_===ir&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Pi?F=r.DEPTH_COMPONENT24:_===$t?F=r.DEPTH_COMPONENT32F:_===ir&&(F=r.DEPTH_COMPONENT16),F}function P(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&d.delete(_)}function E(T){const _=T.target;_.removeEventListener("dispose",E),v(_)}function U(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,X=h.get(F);if(X){const $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(T),Object.keys(X).length===0&&h.delete(F)}n.remove(T)}function S(T){const _=n.get(T);r.deleteTexture(_.__webglTexture);const F=T.source,X=h.get(F);delete X[_.__cacheKey],o.memory.textures--}function v(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(_.__webglFramebuffer[X][$]);else r.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)r.deleteFramebuffer(_.__webglFramebuffer[X]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,$=F.length;X<$;X++){const k=n.get(F[X]);k.__webglTexture&&(r.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(T)}let R=0;function z(){R=0}function G(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function q(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const F=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,T,_);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+_)}function K(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+_)}function Z(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,_);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+_)}function V(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ee(F,T,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+_)}const re={[Ci]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[$r]:r.MIRRORED_REPEAT},de={[Et]:r.NEAREST,[Ya]:r.NEAREST_MIPMAP_NEAREST,[Ji]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[kr]:r.LINEAR_MIPMAP_NEAREST,[xn]:r.LINEAR_MIPMAP_LINEAR},_e={[yd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[sc]:r.LEQUAL,[Sd]:r.EQUAL,[bd]:r.GEQUAL,[Td]:r.GREATER,[Ed]:r.NOTEQUAL};function Fe(T,_){if(_.type===$t&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ut||_.magFilter===kr||_.magFilter===Ji||_.magFilter===xn||_.minFilter===Ut||_.minFilter===kr||_.minFilter===Ji||_.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,re[_.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,re[_.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,re[_.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,de[_.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Et||_.minFilter!==Ji&&_.minFilter!==xn||_.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let $=h.get(X);$===void 0&&($={},h.set(X,$));const k=q(_);if(k!==T.__cacheKey){$[k]===void 0&&($[k]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[k].usedTimes++;const ge=$[T.__cacheKey];ge!==void 0&&($[T.__cacheKey].usedTimes--,ge.usedTimes===0&&S(_)),T.__cacheKey=k,T.__webglTexture=$[k].texture}return F}function W(T,_,F){let X=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=r.TEXTURE_3D);const $=tt(T,_),k=_.source;t.bindTexture(X,T.__webglTexture,r.TEXTURE0+F);const ge=n.get(k);if(k.version!==ge.__version||$===!0){t.activeTexture(r.TEXTURE0+F);const oe=ke.getPrimaries(ke.workingColorSpace),ue=_.colorSpace===Nn?null:ke.getPrimaries(_.colorSpace),ze=_.colorSpace===Nn||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=I(_.image,!1,i.maxTextureSize);Q=it(_,Q);const he=s.convert(_.format,_.colorSpace),Me=s.convert(_.type);let Te=y(_.internalFormat,he,Me,_.colorSpace,_.isVideoTexture);Fe(X,_);let fe;const Ve=_.mipmaps,De=_.isVideoTexture!==!0,nt=ge.__version===void 0||$===!0,L=k.dataReady,ne=P(_,Q);if(_.isDepthTexture)Te=x(_.format===Li,_.type),nt&&(De?t.texStorage2D(r.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,Me,null));else if(_.isDataTexture)if(Ve.length>0){De&&nt&&t.texStorage2D(r.TEXTURE_2D,ne,Te,Ve[0].width,Ve[0].height);for(let H=0,Y=Ve.length;H<Y;H++)fe=Ve[H],De?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,he,Me,fe.data):t.texImage2D(r.TEXTURE_2D,H,Te,fe.width,fe.height,0,he,Me,fe.data);_.generateMipmaps=!1}else De?(nt&&t.texStorage2D(r.TEXTURE_2D,ne,Te,Q.width,Q.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Me,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,Me,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Te,Ve[0].width,Ve[0].height,Q.depth);for(let H=0,Y=Ve.length;H<Y;H++)if(fe=Ve[H],_.format!==kt)if(he!==null)if(De){if(L)if(_.layerUpdates.size>0){const ae=la(fe.width,fe.height,_.format,_.type);for(const le of _.layerUpdates){const Ce=fe.data.subarray(le*ae/fe.data.BYTES_PER_ELEMENT,(le+1)*ae/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,le,fe.width,fe.height,1,he,Ce)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,he,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Te,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,he,Me,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Te,fe.width,fe.height,Q.depth,0,he,Me,fe.data)}else{De&&nt&&t.texStorage2D(r.TEXTURE_2D,ne,Te,Ve[0].width,Ve[0].height);for(let H=0,Y=Ve.length;H<Y;H++)fe=Ve[H],_.format!==kt?he!==null?De?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,he,Me,fe.data):t.texImage2D(r.TEXTURE_2D,H,Te,fe.width,fe.height,0,he,Me,fe.data)}else if(_.isDataArrayTexture)if(De){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Te,Q.width,Q.height,Q.depth),L)if(_.layerUpdates.size>0){const H=la(Q.width,Q.height,_.format,_.type);for(const Y of _.layerUpdates){const ae=Q.data.subarray(Y*H/Q.data.BYTES_PER_ELEMENT,(Y+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,he,Me,ae)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Me,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,he,Me,Q.data);else if(_.isData3DTexture)De?(nt&&t.texStorage3D(r.TEXTURE_3D,ne,Te,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Me,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,he,Me,Q.data);else if(_.isFramebufferTexture){if(nt)if(De)t.texStorage2D(r.TEXTURE_2D,ne,Te,Q.width,Q.height);else{let H=Q.width,Y=Q.height;for(let ae=0;ae<ne;ae++)t.texImage2D(r.TEXTURE_2D,ae,Te,H,Y,0,he,Me,null),H>>=1,Y>>=1}}else if(Ve.length>0){if(De&&nt){const H=Ie(Ve[0]);t.texStorage2D(r.TEXTURE_2D,ne,Te,H.width,H.height)}for(let H=0,Y=Ve.length;H<Y;H++)fe=Ve[H],De?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,he,Me,fe):t.texImage2D(r.TEXTURE_2D,H,Te,he,Me,fe);_.generateMipmaps=!1}else if(De){if(nt){const H=Ie(Q);t.texStorage2D(r.TEXTURE_2D,ne,Te,H.width,H.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Me,Q)}else t.texImage2D(r.TEXTURE_2D,0,Te,he,Me,Q);m(_)&&f(X),ge.__version=k.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ee(T,_,F){if(_.image.length!==6)return;const X=tt(T,_),$=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+F);const k=n.get($);if($.version!==k.__version||X===!0){t.activeTexture(r.TEXTURE0+F);const ge=ke.getPrimaries(ke.workingColorSpace),oe=_.colorSpace===Nn?null:ke.getPrimaries(_.colorSpace),ue=_.colorSpace===Nn||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ze=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!ze&&!Q?he[Y]=I(_.image[Y],!0,i.maxCubemapSize):he[Y]=Q?_.image[Y].image:_.image[Y],he[Y]=it(_,he[Y]);const Me=he[0],Te=s.convert(_.format,_.colorSpace),fe=s.convert(_.type),Ve=y(_.internalFormat,Te,fe,_.colorSpace),De=_.isVideoTexture!==!0,nt=k.__version===void 0||X===!0,L=$.dataReady;let ne=P(_,Me);Fe(r.TEXTURE_CUBE_MAP,_);let H;if(ze){De&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Ve,Me.width,Me.height);for(let Y=0;Y<6;Y++){H=he[Y].mipmaps;for(let ae=0;ae<H.length;ae++){const le=H[ae];_.format!==kt?Te!==null?De?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,le.width,le.height,Te,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,le.width,le.height,Te,fe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ve,le.width,le.height,0,Te,fe,le.data)}}}else{if(H=_.mipmaps,De&&nt){H.length>0&&ne++;const Y=Ie(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Ve,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){De?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Te,fe,he[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,he[Y].width,he[Y].height,0,Te,fe,he[Y].data);for(let ae=0;ae<H.length;ae++){const Ce=H[ae].image[Y].image;De?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Ce.width,Ce.height,Te,fe,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ve,Ce.width,Ce.height,0,Te,fe,Ce.data)}}else{De?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,fe,he[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,Te,fe,he[Y]);for(let ae=0;ae<H.length;ae++){const le=H[ae];De?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Te,fe,le.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ve,Te,fe,le.image[Y])}}}m(_)&&f(r.TEXTURE_CUBE_MAP),k.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,F,X,$,k){const ge=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),ue=y(F.internalFormat,ge,oe,F.colorSpace),ze=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!ze.__hasExternalTextures){const he=Math.max(1,_.width>>k),Me=Math.max(1,_.height>>k);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,k,ue,he,Me,_.depth,0,ge,oe,null):t.texImage2D($,k,ue,he,Me,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),He(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,Q.__webglTexture,0,Ge(_)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,Q.__webglTexture,k),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(T,_,F){if(r.bindRenderbuffer(r.RENDERBUFFER,T),_.depthBuffer){const X=_.depthTexture,$=X&&X.isDepthTexture?X.type:null,k=x(_.stencilBuffer,$),ge=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Ge(_);He(_)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,k,_.width,_.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,k,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,k,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,T)}else{const X=_.textures;for(let $=0;$<X.length;$++){const k=X[$],ge=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),ue=y(k.internalFormat,ge,oe,k.colorSpace),ze=Ge(_);F&&He(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,ue,_.width,_.height):He(_)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze,ue,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ue,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const $=X.__webglTexture,k=Ge(_);if(_.depthTexture.format===Si)He(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(_.depthTexture.format===Li)He(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Xe(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=X}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ye(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=r.createRenderbuffer(),se(_.__webglDepthbuffer[X],T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,k),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,k)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),se(_.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,X,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(T,_,F){const X=n.get(T);_!==void 0&&me(X.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Xe(T)}function ct(T){const _=T.texture,F=n.get(T),X=n.get(_);T.addEventListener("dispose",E);const $=T.textures,k=T.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=_.version,o.memory.textures++),k){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let ue=0;ue<_.mipmaps.length;ue++)F.__webglFramebuffer[oe][ue]=r.createFramebuffer()}else F.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)F.__webglFramebuffer[oe]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,ue=$.length;oe<ue;oe++){const ze=n.get($[oe]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&He(T)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];F.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const ze=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),he=y(ue.internalFormat,ze,Q,ue.colorSpace,T.isXRRenderTarget===!0),Me=Ge(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,he,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),se(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(k){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)me(F.__webglFramebuffer[oe][ue],T,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else me(F.__webglFramebuffer[oe],T,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,ue=$.length;oe<ue;oe++){const ze=$[oe],Q=n.get(ze);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Fe(r.TEXTURE_2D,ze),me(F.__webglFramebuffer,T,ze,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(ze)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),Fe(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)me(F.__webglFramebuffer[ue],T,_,r.COLOR_ATTACHMENT0,oe,ue);else me(F.__webglFramebuffer,T,_,r.COLOR_ATTACHMENT0,oe,0);m(_)&&f(oe),t.unbindTexture()}T.depthBuffer&&Xe(T)}function st(T){const _=T.textures;for(let F=0,X=_.length;F<X;F++){const $=_[F];if(m($)){const k=M(T),ge=n.get($).__webglTexture;t.bindTexture(k,ge),f(k),t.unbindTexture()}}}const Be=[],b=[];function Ot(T){if(T.samples>0){if(He(T)===!1){const _=T.textures,F=T.width,X=T.height;let $=r.COLOR_BUFFER_BIT;const k=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(T),oe=_.length>1;if(oe)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]);const ze=n.get(_[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ze,0)}r.blitFramebuffer(0,0,F,X,0,0,F,X,$,r.NEAREST),a===!0&&(Be.length=0,b.length=0,Be.push(r.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Be.push(k),b.push(k),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,b)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]);const ze=n.get(_[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&a){const _=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function Ge(T){return Math.min(i.maxSamples,T.samples)}function He(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ae(T){const _=o.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function it(T,_){const F=T.colorSpace,X=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==wt&&F!==Nn&&(ke.getTransfer(F)===Qe?(X!==kt||$!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Se,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=He}function Vg(r,e){function t(n,i=Nn){let s;const o=ke.getTransfer(i);if(n===Sn)return r.UNSIGNED_BYTE;if(n===Ho)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$a)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qa)return r.BYTE;if(n===ja)return r.SHORT;if(n===ir)return r.UNSIGNED_SHORT;if(n===Go)return r.INT;if(n===ti)return r.UNSIGNED_INT;if(n===$t)return r.FLOAT;if(n===ar)return r.HALF_FLOAT;if(n===Za)return r.ALPHA;if(n===Ja)return r.RGB;if(n===kt)return r.RGBA;if(n===Qa)return r.LUMINANCE;if(n===ec)return r.LUMINANCE_ALPHA;if(n===Si)return r.DEPTH_COMPONENT;if(n===Li)return r.DEPTH_STENCIL;if(n===ko)return r.RED;if(n===zo)return r.RED_INTEGER;if(n===tc)return r.RG;if(n===Wo)return r.RG_INTEGER;if(n===Ko)return r.RGBA_INTEGER;if(n===zr||n===Wr||n===Kr||n===Xr)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===ro||n===so)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===ao)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oo||n===lo)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ao)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===Io||n===_o||n===Ao||n===xo||n===vo||n===yo||n===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===co)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===So||n===To)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yr)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===Eo||n===bo||n===wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new gt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gn({vertexShader:kg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends ii{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",a=1,c=null,d=null,u=null,h=null,p=null,g=null;const I=new Wg,m=t.getContextAttributes();let f=null,M=null;const y=[],x=[],P=new be;let w=null;const E=new Tt;E.viewport=new Ye;const U=new Tt;U.viewport=new Ye;const S=[E,U],v=new eh;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=y[W];return ee===void 0&&(ee=new bs,y[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=y[W];return ee===void 0&&(ee=new bs,y[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=y[W];return ee===void 0&&(ee=new bs,y[W]=ee),ee.getHandSpace()};function G(W){const ee=x.indexOf(W.inputSource);if(ee===-1)return;const me=y[ee];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",j);for(let W=0;W<y.length;W++){const ee=x[W];ee!==null&&(x[W]=null,y[W].disconnect(ee))}R=null,z=null,I.reset(),e.setRenderTarget(f),p=null,h=null,u=null,i=null,M=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){l=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,se=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Li:Si,se=m.stencil?Pi:ti);const Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Xe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ni(h.textureWidth,h.textureHeight,{format:kt,type:Sn,depthTexture:new xc(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ni(p.framebufferWidth,p.framebufferHeight,{format:kt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(l),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function j(W){for(let ee=0;ee<W.removed.length;ee++){const me=W.removed[ee],se=x.indexOf(me);se>=0&&(x[se]=null,y[se].disconnect(me))}for(let ee=0;ee<W.added.length;ee++){const me=W.added[ee];let se=x.indexOf(me);if(se===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=x.length){x.push(me),se=Xe;break}else if(x[Xe]===null){x[Xe]=me,se=Xe;break}if(se===-1)break}const ye=y[se];ye&&ye.connect(me)}}const K=new C,Z=new C;function V(W,ee,me){K.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const se=K.distanceTo(Z),ye=ee.projectionMatrix.elements,Xe=me.projectionMatrix.elements,Se=ye[14]/(ye[10]-1),ct=ye[14]/(ye[10]+1),st=(ye[9]+1)/ye[5],Be=(ye[9]-1)/ye[5],b=(ye[8]-1)/ye[0],Ot=(Xe[8]+1)/Xe[0],Ge=Se*b,He=Se*Ot,Ae=se/(-b+Ot),it=Ae*-b;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(it),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ye[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ie=Se+Ae,T=ct+Ae,_=Ge-it,F=He+(se-it),X=st*ct/T*Ie,$=Be*ct/T*Ie;W.projectionMatrix.makePerspective(_,F,X,$,Ie,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ee=W.near,me=W.far;I.texture!==null&&(I.depthNear>0&&(ee=I.depthNear),I.depthFar>0&&(me=I.depthFar)),v.near=U.near=E.near=ee,v.far=U.far=E.far=me,(R!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far),E.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,v.layers.mask=E.layers.mask|U.layers.mask;const se=W.parent,ye=v.cameras;re(v,se);for(let Xe=0;Xe<ye.length;Xe++)re(ye[Xe],se);ye.length===2?V(v,E,U):v.projectionMatrix.copy(E.projectionMatrix),de(W,v,se)};function de(W,ee,me){me===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Di*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return a},this.setFoveation=function(W){a=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(v)};let _e=null;function Fe(W,ee){if(d=ee.getViewerPose(c||o),g=ee,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let se=!1;me.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Se=0;Se<me.length;Se++){const ct=me[Se];let st=null;if(p!==null)st=p.getViewport(ct);else{const b=u.getViewSubImage(h,ct);st=b.viewport,Se===0&&(e.setRenderTargetTextures(M,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(M))}let Be=S[Se];Be===void 0&&(Be=new Tt,Be.layers.enable(Se),Be.viewport=new Ye,S[Se]=Be),Be.matrix.fromArray(ct.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ct.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),Se===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Be)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Se=u.getDepthInformation(me[0]);Se&&Se.isValid&&Se.texture&&I.init(e,Se,i.renderState)}}for(let me=0;me<y.length;me++){const se=x[me],ye=y[me];se!==null&&ye!==void 0&&ye.update(se,ee,c||o)}_e&&_e(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const tt=new Sc;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}}const Yn=new on,Xg=new Le;function Yg(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,fc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),I(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?a(m,f,M,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Yn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,M,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function I(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qg(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(g(M),x=d(M),i[M.id]=x,M.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(M,P);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function d(M){const y=u();M.__bindingPointIndex=y;const x=r.createBuffer(),P=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<l;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],x=M.uniforms,P=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){const U=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,v=U.length;S<v;S++){const R=U[S];if(p(R,w,S,P)===!0){const z=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let j=0;j<G.length;j++){const K=G[j],Z=I(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,z+q,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,y,x,P){const w=M.value,E=y+"_"+x;if(P[E]===void 0)return typeof w=="number"||typeof w=="boolean"?P[E]=w:P[E]=w.clone(),!0;{const U=P[E];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[E]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(M){const y=M.uniforms;let x=0;const P=16;for(let E=0,U=y.length;E<U;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,R=S.length;v<R;v++){const z=S[v],G=Array.isArray(z.value)?z.value:[z.value];for(let q=0,j=G.length;q<j;q++){const K=G[q],Z=I(K),V=x%P,re=V%Z.boundary,de=V+re;x+=re,de!==0&&P-de<Z.storage&&(x+=P-de),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const w=x%P;return w>0&&(x+=P-w),M.__size=x,M.__cache={},this}function I(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:a,update:c,dispose:f}}class jg{constructor(e={}){const{canvas:t=Kd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),I=new Int32Array(4);let m=null,f=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Bn,this.toneMappingExposure=1;const x=this;let P=!1,w=0,E=0,U=null,S=-1,v=null;const R=new Ye,z=new Ye;let G=null;const q=new we(0);let j=0,K=t.width,Z=t.height,V=1,re=null,de=null;const _e=new Ye(0,0,K,Z),Fe=new Ye(0,0,K,Z);let tt=!1;const W=new $o;let ee=!1,me=!1;this.transmissionResolutionScale=1;const se=new Le,ye=new Le,Xe=new C,Se=new Ye,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Be(){return U===null?V:1}let b=n;function Ot(A,D){return t.getContext(A,D)}try{const A={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",le,!1),b===null){const D="webgl2";if(b=Ot(D,A),b===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ge,He,Ae,it,Ie,T,_,F,X,$,k,ge,oe,ue,ze,Q,he,Me,Te,fe,Ve,De,nt,L;function ne(){Ge=new sm(b),Ge.init(),De=new Vg(b,Ge),He=new Jp(b,Ge,e,De),Ae=new Gg(b,Ge),He.reverseDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),it=new am(b),Ie=new Eg,T=new Hg(b,Ge,Ae,Ie,He,De,it),_=new em(x),F=new rm(x),X=new fh(b),nt=new $p(b,X),$=new om(b,X,it,nt),k=new dm(b,$,X,it),Te=new cm(b,He,T),Q=new Qp(Ie),ge=new Tg(x,_,F,Ge,He,nt,Q),oe=new Yg(x,Ie),ue=new wg,ze=new Ng(Ge),Me=new jp(x,_,F,Ae,k,p,a),he=new Og(x,k,He),L=new qg(b,it,He,Ae),fe=new Zp(b,Ge,it),Ve=new lm(b,Ge,it),it.programs=ge.programs,x.capabilities=He,x.extensions=Ge,x.properties=Ie,x.renderLists=ue,x.shadowMap=he,x.state=Ae,x.info=it}ne();const H=new Kg(x,b);this.xr=H,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=Ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(K,Z,!1))},this.getSize=function(A){return A.set(K,Z)},this.setSize=function(A,D,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,Z=D,t.width=Math.floor(A*V),t.height=Math.floor(D*V),O===!0&&(t.style.width=A+"px",t.style.height=D+"px"),this.setViewport(0,0,A,D)},this.getDrawingBufferSize=function(A){return A.set(K*V,Z*V).floor()},this.setDrawingBufferSize=function(A,D,O){K=A,Z=D,V=O,t.width=Math.floor(A*O),t.height=Math.floor(D*O),this.setViewport(0,0,A,D)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,D,O,B){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,D,O,B),Ae.viewport(R.copy(_e).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,D,O,B){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,D,O,B),Ae.scissor(z.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){Ae.setScissorTest(tt=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,D=!0,O=!0){let B=0;if(A){let N=!1;if(U!==null){const J=U.texture.format;N=J===Ko||J===Wo||J===zo}if(N){const J=U.texture.type,ie=J===Sn||J===ti||J===ir||J===Pi||J===Ho||J===Vo,ce=Me.getClearColor(),pe=Me.getClearAlpha(),Ee=ce.r,Re=ce.g,xe=ce.b;ie?(g[0]=Ee,g[1]=Re,g[2]=xe,g[3]=pe,b.clearBufferuiv(b.COLOR,0,g)):(I[0]=Ee,I[1]=Re,I[2]=xe,I[3]=pe,b.clearBufferiv(b.COLOR,0,I))}else B|=b.COLOR_BUFFER_BIT}D&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Me.dispose(),ue.dispose(),ze.dispose(),Ie.dispose(),_.dispose(),F.dispose(),k.dispose(),nt.dispose(),L.dispose(),ge.dispose(),H.dispose(),H.removeEventListener("sessionstart",ll),H.removeEventListener("sessionend",al),Hn.stop()};function Y(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=it.autoReset,D=he.enabled,O=he.autoUpdate,B=he.needsUpdate,N=he.type;ne(),it.autoReset=A,he.enabled=D,he.autoUpdate=O,he.needsUpdate=B,he.type=N}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ce(A){const D=A.target;D.removeEventListener("dispose",Ce),lt(D)}function lt(A){At(A),Ie.remove(A)}function At(A){const D=Ie.get(A).programs;D!==void 0&&(D.forEach(function(O){ge.releaseProgram(O)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,D,O,B,N,J){D===null&&(D=ct);const ie=N.isMesh&&N.matrixWorld.determinant()<0,ce=Lc(A,D,O,B,N);Ae.setMaterial(B,ie);let pe=O.index,Ee=1;if(B.wireframe===!0){if(pe=$.getWireframeAttribute(O),pe===void 0)return;Ee=2}const Re=O.drawRange,xe=O.attributes.position;let We=Re.start*Ee,qe=(Re.start+Re.count)*Ee;J!==null&&(We=Math.max(We,J.start*Ee),qe=Math.min(qe,(J.start+J.count)*Ee)),pe!==null?(We=Math.max(We,0),qe=Math.min(qe,pe.count)):xe!=null&&(We=Math.max(We,0),qe=Math.min(qe,xe.count));const dt=qe-We;if(dt<0||dt===1/0)return;nt.setup(N,B,ce,O,pe);let at,Ke=fe;if(pe!==null&&(at=X.get(pe),Ke=Ve,Ke.setIndex(at)),N.isMesh)B.wireframe===!0?(Ae.setLineWidth(B.wireframeLinewidth*Be()),Ke.setMode(b.LINES)):Ke.setMode(b.TRIANGLES);else if(N.isLine){let ve=B.linewidth;ve===void 0&&(ve=1),Ae.setLineWidth(ve*Be()),N.isLineSegments?Ke.setMode(b.LINES):N.isLineLoop?Ke.setMode(b.LINE_LOOP):Ke.setMode(b.LINE_STRIP)}else N.isPoints?Ke.setMode(b.POINTS):N.isSprite&&Ke.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ve=N._multiDrawStarts,It=N._multiDrawCounts,je=N._multiDrawCount,Wt=pe?X.get(pe).bytesPerElement:1,ri=Ie.get(B).currentProgram.getUniforms();for(let Lt=0;Lt<je;Lt++)ri.setValue(b,"_gl_DrawID",Lt),Ke.render(ve[Lt]/Wt,It[Lt])}else if(N.isInstancedMesh)Ke.renderInstances(We,dt,N.count);else if(O.isInstancedBufferGeometry){const ve=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,It=Math.min(O.instanceCount,ve);Ke.renderInstances(We,dt,It)}else Ke.render(We,dt)};function $e(A,D,O){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=Pt,A.needsUpdate=!0,fr(A,D,O),A.side=Mn,A.needsUpdate=!0,fr(A,D,O),A.side=tn):fr(A,D,O)}this.compile=function(A,D,O=null){O===null&&(O=A),f=ze.get(O),f.init(D),y.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),A!==O&&A.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let ie=0;ie<J.length;ie++){const ce=J[ie];$e(ce,O,N),B.add(ce)}else $e(J,O,N),B.add(J)}),f=y.pop(),B},this.compileAsync=function(A,D,O=null){const B=this.compile(A,D,O);return new Promise(N=>{function J(){if(B.forEach(function(ie){Ie.get(ie).currentProgram.isReady()&&B.delete(ie)}),B.size===0){N(A);return}setTimeout(J,10)}Ge.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let zt=null;function un(A){zt&&zt(A)}function ll(){Hn.stop()}function al(){Hn.start()}const Hn=new Sc;Hn.setAnimationLoop(un),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){zt=A,H.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},H.addEventListener("sessionstart",ll),H.addEventListener("sessionend",al),this.render=function(A,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,D,U),f=ze.get(A,y.length),f.init(D),y.push(f),ye.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(ye),me=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,me),m=ue.get(A,M.length),m.init(),M.push(m),H.enabled===!0&&H.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&ss(J,D,-1/0,x.sortObjects)}ss(A,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,de),st=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,st&&Me.addToRenderList(m,A),this.info.render.frame++,ee===!0&&Q.beginShadows();const O=f.state.shadowsArray;he.render(O,A,D),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){const J=D.cameras;if(N.length>0)for(let ie=0,ce=J.length;ie<ce;ie++){const pe=J[ie];dl(B,N,A,pe)}st&&Me.render(A);for(let ie=0,ce=J.length;ie<ce;ie++){const pe=J[ie];cl(m,A,pe,pe.viewport)}}else N.length>0&&dl(B,N,A,D),st&&Me.render(A),cl(m,A,D);U!==null&&E===0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(x,A,D),nt.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],ee===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ss(A,D,O,B){if(A.visible===!1)return;if(A.layers.test(D.layers)){if(A.isGroup)O=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(D);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){B&&Se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const ie=k.update(A),ce=A.material;ce.visible&&m.push(A,ie,ce,O,Se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const ie=k.update(A),ce=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Se.copy(A.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Se.copy(ie.boundingSphere.center)),Se.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(ce)){const pe=ie.groups;for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const xe=pe[Ee],We=ce[xe.materialIndex];We&&We.visible&&m.push(A,ie,We,O,Se.z,xe)}}else ce.visible&&m.push(A,ie,ce,O,Se.z,null)}}const J=A.children;for(let ie=0,ce=J.length;ie<ce;ie++)ss(J[ie],D,O,B)}function cl(A,D,O,B){const N=A.opaque,J=A.transmissive,ie=A.transparent;f.setupLightsView(O),ee===!0&&Q.setGlobalState(x.clippingPlanes,O),B&&Ae.viewport(R.copy(B)),N.length>0&&hr(N,D,O),J.length>0&&hr(J,D,O),ie.length>0&&hr(ie,D,O),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function dl(A,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new ni(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ar:Sn,minFilter:xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const J=f.state.transmissionRenderTarget[B.id],ie=B.viewport||R;J.setSize(ie.z*x.transmissionResolutionScale,ie.w*x.transmissionResolutionScale);const ce=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),st&&Me.render(O);const pe=x.toneMapping;x.toneMapping=Bn;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ee===!0&&Q.setGlobalState(x.clippingPlanes,B),hr(A,O,B),T.updateMultisampleRenderTarget(J),T.updateRenderTargetMipmap(J),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let xe=0,We=D.length;xe<We;xe++){const qe=D[xe],dt=qe.object,at=qe.geometry,Ke=qe.material,ve=qe.group;if(Ke.side===tn&&dt.layers.test(B.layers)){const It=Ke.side;Ke.side=Pt,Ke.needsUpdate=!0,ul(dt,O,B,at,Ke,ve),Ke.side=It,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(T.updateMultisampleRenderTarget(J),T.updateRenderTargetMipmap(J))}x.setRenderTarget(ce),x.setClearColor(q,j),Ee!==void 0&&(B.viewport=Ee),x.toneMapping=pe}function hr(A,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,J=A.length;N<J;N++){const ie=A[N],ce=ie.object,pe=ie.geometry,Ee=B===null?ie.material:B,Re=ie.group;ce.layers.test(O.layers)&&ul(ce,D,O,pe,Ee,Re)}}function ul(A,D,O,B,N,J){A.onBeforeRender(x,D,O,B,N,J),A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(x,D,O,B,A,J),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=Pt,N.needsUpdate=!0,x.renderBufferDirect(O,D,B,N,A,J),N.side=Mn,N.needsUpdate=!0,x.renderBufferDirect(O,D,B,N,A,J),N.side=tn):x.renderBufferDirect(O,D,B,N,A,J),A.onAfterRender(x,D,O,B,N,J)}function fr(A,D,O){D.isScene!==!0&&(D=ct);const B=Ie.get(A),N=f.state.lights,J=f.state.shadowsArray,ie=N.state.version,ce=ge.getParameters(A,N.state,J,D,O),pe=ge.getProgramCacheKey(ce);let Ee=B.programs;B.environment=A.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(A.isMeshStandardMaterial?F:_).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?D.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",Ce),Ee=new Map,B.programs=Ee);let Re=Ee.get(pe);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===ie)return fl(A,ce),Re}else ce.uniforms=ge.getUniforms(A),A.onBeforeCompile(ce,x),Re=ge.acquireProgram(ce,pe),Ee.set(pe,Re),B.uniforms=ce.uniforms;const xe=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(xe.clippingPlanes=Q.uniform),fl(A,ce),B.needsLights=Nc(A),B.lightsStateVersion=ie,B.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function hl(A){if(A.uniformsList===null){const D=A.currentProgram.getUniforms();A.uniformsList=qr.seqWithValue(D.seq,A.uniforms)}return A.uniformsList}function fl(A,D){const O=Ie.get(A);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Lc(A,D,O,B,N){D.isScene!==!0&&(D=ct),T.resetTextureUnits();const J=D.fog,ie=B.isMeshStandardMaterial?D.environment:null,ce=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wt,pe=(B.isMeshStandardMaterial?F:_).get(B.envMap||ie),Ee=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,qe=!!O.morphAttributes.color;let dt=Bn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=x.toneMapping);const at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=at!==void 0?at.length:0,ve=Ie.get(B),It=f.state.lights;if(ee===!0&&(me===!0||A!==v)){const yt=A===v&&B.id===S;Q.setState(B,A,yt)}let je=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==It.state.version||ve.outputColorSpace!==ce||N.isBatchedMesh&&ve.batching===!1||!N.isBatchedMesh&&ve.batching===!0||N.isBatchedMesh&&ve.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ve.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ve.instancing===!1||!N.isInstancedMesh&&ve.instancing===!0||N.isSkinnedMesh&&ve.skinning===!1||!N.isSkinnedMesh&&ve.skinning===!0||N.isInstancedMesh&&ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ve.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ve.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ve.instancingMorph===!1&&N.morphTexture!==null||ve.envMap!==pe||B.fog===!0&&ve.fog!==J||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Ee||ve.vertexTangents!==Re||ve.morphTargets!==xe||ve.morphNormals!==We||ve.morphColors!==qe||ve.toneMapping!==dt||ve.morphTargetsCount!==Ke)&&(je=!0):(je=!0,ve.__version=B.version);let Wt=ve.currentProgram;je===!0&&(Wt=fr(B,D,N));let ri=!1,Lt=!1,ki=!1;const rt=Wt.getUniforms(),Bt=ve.uniforms;if(Ae.useProgram(Wt.program)&&(ri=!0,Lt=!0,ki=!0),B.id!==S&&(S=B.id,Lt=!0),ri||v!==A){Ae.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),Yd(se),qd(se),rt.setValue(b,"projectionMatrix",se)):rt.setValue(b,"projectionMatrix",A.projectionMatrix),rt.setValue(b,"viewMatrix",A.matrixWorldInverse);const Rt=rt.map.cameraPosition;Rt!==void 0&&Rt.setValue(b,Xe.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&rt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Lt=!0,ki=!0)}if(N.isSkinnedMesh){rt.setOptional(b,N,"bindMatrix"),rt.setOptional(b,N,"bindMatrixInverse");const yt=N.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),rt.setValue(b,"boneTexture",yt.boneTexture,T))}N.isBatchedMesh&&(rt.setOptional(b,N,"batchingTexture"),rt.setValue(b,"batchingTexture",N._matricesTexture,T),rt.setOptional(b,N,"batchingIdTexture"),rt.setValue(b,"batchingIdTexture",N._indirectTexture,T),rt.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(b,"batchingColorTexture",N._colorsTexture,T));const Gt=O.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&Te.update(N,O,Wt),(Lt||ve.receiveShadow!==N.receiveShadow)&&(ve.receiveShadow=N.receiveShadow,rt.setValue(b,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Bt.envMap.value=pe,Bt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Bt.envMapIntensity.value=D.environmentIntensity),Lt&&(rt.setValue(b,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&Dc(Bt,ki),J&&B.fog===!0&&oe.refreshFogUniforms(Bt,J),oe.refreshMaterialUniforms(Bt,B,V,Z,f.state.transmissionRenderTarget[A.id]),qr.upload(b,hl(ve),Bt,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qr.upload(b,hl(ve),Bt,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(b,"center",N.center),rt.setValue(b,"modelViewMatrix",N.modelViewMatrix),rt.setValue(b,"normalMatrix",N.normalMatrix),rt.setValue(b,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const yt=B.uniformsGroups;for(let Rt=0,os=yt.length;Rt<os;Rt++){const Vn=yt[Rt];L.update(Vn,Wt),L.bind(Vn,Wt)}}return Wt}function Dc(A,D){A.ambientLightColor.needsUpdate=D,A.lightProbe.needsUpdate=D,A.directionalLights.needsUpdate=D,A.directionalLightShadows.needsUpdate=D,A.pointLights.needsUpdate=D,A.pointLightShadows.needsUpdate=D,A.spotLights.needsUpdate=D,A.spotLightShadows.needsUpdate=D,A.rectAreaLights.needsUpdate=D,A.hemisphereLights.needsUpdate=D}function Nc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,D,O){Ie.get(A.texture).__webglTexture=D,Ie.get(A.depthTexture).__webglTexture=O;const B=Ie.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,D){const O=Ie.get(A);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const Uc=b.createFramebuffer();this.setRenderTarget=function(A,D=0,O=0){U=A,w=D,E=O;let B=!0,N=null,J=!1,ie=!1;if(A){const pe=Ie.get(A);if(pe.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(pe.__hasExternalTextures)T.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const xe=A.depthTexture;if(pe.__boundDepthTexture!==xe){if(xe!==null&&Ie.has(xe)&&(A.width!==xe.image.width||A.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ie=!0);const Re=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][O]:N=Re[D],J=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?N=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[O]:N=Re,R.copy(A.viewport),z.copy(A.scissor),G=A.scissorTest}else R.copy(_e).multiplyScalar(V).floor(),z.copy(Fe).multiplyScalar(V).floor(),G=tt;if(O!==0&&(N=Uc),Ae.bindFramebuffer(b.FRAMEBUFFER,N)&&B&&Ae.drawBuffers(A,N),Ae.viewport(R),Ae.scissor(z),Ae.setScissorTest(G),J){const pe=Ie.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,O)}else if(ie){const pe=Ie.get(A.texture),Ee=D;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.__webglTexture,O,Ee)}else if(A!==null&&O!==0){const pe=Ie.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pe.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(A,D,O,B,N,J,ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ie!==void 0&&(ce=ce[ie]),ce){Ae.bindFramebuffer(b.FRAMEBUFFER,ce);try{const pe=A.texture,Ee=pe.format,Re=pe.type;if(!He.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=A.width-B&&O>=0&&O<=A.height-N&&b.readPixels(D,O,B,N,De.convert(Ee),De.convert(Re),J)}finally{const pe=U!==null?Ie.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(b.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(A,D,O,B,N,J,ie){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ie!==void 0&&(ce=ce[ie]),ce){const pe=A.texture,Ee=pe.format,Re=pe.type;if(!He.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=A.width-B&&O>=0&&O<=A.height-N){Ae.bindFramebuffer(b.FRAMEBUFFER,ce);const xe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),b.readPixels(D,O,B,N,De.convert(Ee),De.convert(Re),0);const We=U!==null?Ie.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(b.FRAMEBUFFER,We);const qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Xd(b,qe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(xe),b.deleteSync(qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,D=null,O=0){A.isTexture!==!0&&(jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,A=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(A.image.width*B),J=Math.floor(A.image.height*B),ie=D!==null?D.x:0,ce=D!==null?D.y:0;T.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,ie,ce,N,J),Ae.unbindTexture()};const Fc=b.createFramebuffer(),Oc=b.createFramebuffer();this.copyTextureToTexture=function(A,D,O=null,B=null,N=0,J=null){A.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1],D=arguments[2],J=arguments[3]||0,O=null),J===null&&(N!==0?(jn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let ie,ce,pe,Ee,Re,xe,We,qe,dt;const at=A.isCompressedTexture?A.mipmaps[J]:A.image;if(O!==null)ie=O.max.x-O.min.x,ce=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,Ee=O.min.x,Re=O.min.y,xe=O.isBox3?O.min.z:0;else{const Gt=Math.pow(2,-N);ie=Math.floor(at.width*Gt),ce=Math.floor(at.height*Gt),A.isDataArrayTexture?pe=at.depth:A.isData3DTexture?pe=Math.floor(at.depth*Gt):pe=1,Ee=0,Re=0,xe=0}B!==null?(We=B.x,qe=B.y,dt=B.z):(We=0,qe=0,dt=0);const Ke=De.convert(D.format),ve=De.convert(D.type);let It;D.isData3DTexture?(T.setTexture3D(D,0),It=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),It=b.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),It=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const je=b.getParameter(b.UNPACK_ROW_LENGTH),Wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ri=b.getParameter(b.UNPACK_SKIP_PIXELS),Lt=b.getParameter(b.UNPACK_SKIP_ROWS),ki=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,at.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),b.pixelStorei(b.UNPACK_SKIP_IMAGES,xe);const rt=A.isDataArrayTexture||A.isData3DTexture,Bt=D.isDataArrayTexture||D.isData3DTexture;if(A.isDepthTexture){const Gt=Ie.get(A),yt=Ie.get(D),Rt=Ie.get(Gt.__renderTarget),os=Ie.get(yt.__renderTarget);Ae.bindFramebuffer(b.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let Vn=0;Vn<pe;Vn++)rt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ie.get(A).__webglTexture,N,xe+Vn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ie.get(D).__webglTexture,J,dt+Vn)),b.blitFramebuffer(Ee,Re,ie,ce,We,qe,ie,ce,b.DEPTH_BUFFER_BIT,b.NEAREST);Ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||Ie.has(A)){const Gt=Ie.get(A),yt=Ie.get(D);Ae.bindFramebuffer(b.READ_FRAMEBUFFER,Fc),Ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,Oc);for(let Rt=0;Rt<pe;Rt++)rt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Gt.__webglTexture,N,xe+Rt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Gt.__webglTexture,N),Bt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,yt.__webglTexture,J,dt+Rt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,yt.__webglTexture,J),N!==0?b.blitFramebuffer(Ee,Re,ie,ce,We,qe,ie,ce,b.COLOR_BUFFER_BIT,b.NEAREST):Bt?b.copyTexSubImage3D(It,J,We,qe,dt+Rt,Ee,Re,ie,ce):b.copyTexSubImage2D(It,J,We,qe,Ee,Re,ie,ce);Ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(It,J,We,qe,dt,ie,ce,pe,Ke,ve,at.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(It,J,We,qe,dt,ie,ce,pe,Ke,at.data):b.texSubImage3D(It,J,We,qe,dt,ie,ce,pe,Ke,ve,at):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,We,qe,ie,ce,Ke,ve,at.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,We,qe,at.width,at.height,Ke,at.data):b.texSubImage2D(b.TEXTURE_2D,J,We,qe,ie,ce,Ke,ve,at);b.pixelStorei(b.UNPACK_ROW_LENGTH,je),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ri),b.pixelStorei(b.UNPACK_SKIP_ROWS,Lt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ki),J===0&&D.generateMipmaps&&b.generateMipmap(It),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,D,O=null,B=null,N=0){return A.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,A=arguments[2],D=arguments[3],N=arguments[4]||0),jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,D,O,B,N)},this.initRenderTarget=function(A){Ie.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){w=0,E=0,U=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}function La(r,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ro||e===ic){let t=r.getIndex();if(t===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let a=0;a<l.count;a++)o.push(a);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ro)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class $g extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tI(t)}),this.register(function(t){return new nI(t)}),this.register(function(t){return new uI(t)}),this.register(function(t){return new hI(t)}),this.register(function(t){return new fI(t)}),this.register(function(t){return new rI(t)}),this.register(function(t){return new sI(t)}),this.register(function(t){return new oI(t)}),this.register(function(t){return new lI(t)}),this.register(function(t){return new eI(t)}),this.register(function(t){return new aI(t)}),this.register(function(t){return new iI(t)}),this.register(function(t){return new dI(t)}),this.register(function(t){return new cI(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new pI(t)}),this.register(function(t){return new mI(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=nr.extractUrlBase(e);o=nr.resolveURL(c,this.path)}else o=nr.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},a=new Mc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},l={},a=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Rc){try{o[Oe.KHR_BINARY_GLTF]=new gI(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RI(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const u=s.extensionsUsed[d],h=s.extensionsRequired||[];switch(u){case Oe.KHR_MATERIALS_UNLIT:o[u]=new Qg;break;case Oe.KHR_DRACO_MESH_COMPRESSION:o[u]=new II(s,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:o[u]=new _I;break;case Oe.KHR_MESH_QUANTIZATION:o[u]=new AI;break;default:h.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Zg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jg{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new we(16777215);a.color!==void 0&&d.setRGB(a.color[0],a.color[1],a.color[2],wt);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new Zu(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ju(d),c.distance=u;break;case"spot":c=new Yu(d),c.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),An(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return n._getNodeRef(t.cache,l,a)})}}class Qg{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(i)}}class eI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class tI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(l,l)}return Promise.all(s)}}class nI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class iI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class rI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class sI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class oI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(l[0],l[1],l[2],wt),Promise.all(s)}}class lI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class aI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(l[0],l[1],l[2],wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class cI{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class dI{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uI{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class hI{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fI{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pI{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const a=i.byteOffset||0,c=i.byteLength||0,d=i.count,u=i.byteStride,h=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,h,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(p),d,u,h,i.mode,i.filter),p})})}else return null}}class mI{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Vt.TRIANGLES&&c.mode!==Vt.TRIANGLE_STRIP&&c.mode!==Vt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(d=>(a[c]=d,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(const g of u){const I=new Le,m=new C,f=new sn,M=new C(1,1,1),y=new Tu(g.geometry,g.material,h);for(let x=0;x<h;x++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,x),a.ROTATION&&f.fromBufferAttribute(a.ROTATION,x),a.SCALE&&M.fromBufferAttribute(a.SCALE,x),y.setMatrixAt(x,I.compose(m,f,M));for(const x in a)if(x==="_COLOR_0"){const P=a[x];y.instanceColor=new Po(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,a[x]);ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const Rc="glTF",Zi=12,Da={JSON:1313821514,BIN:5130562};class gI{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zi,s=new DataView(e,Zi);let o=0;for(;o<i;){const l=s.getUint32(o,!0);o+=4;const a=s.getUint32(o,!0);if(o+=4,a===Da.JSON){const c=new Uint8Array(e,Zi+o,l);this.content=n.decode(c)}else if(a===Da.BIN){const c=Zi+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class II{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const d in o){const u=No[d]||d.toLowerCase();l[u]=o[d]}for(const d in e.attributes){const u=No[d]||d.toLowerCase();if(o[d]!==void 0){const h=n.accessors[e.attributes[d]],p=Ei[h.componentType];c[u]=p.name,a[u]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(u,h){i.decodeDracoFile(d,function(p){for(const g in p.attributes){const I=p.attributes[g],m=a[g];m!==void 0&&(I.normalized=m)}u(p)},l,c,wt,h)})})}}class _I{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class AI{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Cc extends ur{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,d=i-t,u=(n-t)/d,h=u*u,p=h*u,g=e*c,I=g-c,m=-2*p+3*h,f=p-h,M=1-m,y=f-h+u;for(let x=0;x!==l;x++){const P=o[I+x+l],w=o[I+x+a]*d,E=o[g+x+l],U=o[g+x]*d;s[x]=M*P+y*w+m*E+f*U}return s}}const xI=new sn;class vI extends Cc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return xI.fromArray(s).normalize().toArray(s),s}}const Vt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ei={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Na={9728:Et,9729:Ut,9984:Ya,9985:kr,9986:Ji,9987:xn},Ua={33071:Un,33648:$r,10497:Ci},Hs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},No={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ln={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yI={CUBICSPLINE:void 0,LINEAR:sr,STEP:rr},Vs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MI(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),r.DefaultMaterial}function qn(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function An(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SI(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],l=[],a=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(h)}if(i){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;l.push(h)}if(s){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;a.push(h)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function TI(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EI(r){let e;const t=r.extensions&&r.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ks(t.attributes):e=r.indices+":"+ks(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ks(r.targets[n]);return e}function ks(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Uo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bI(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wI=new Le;class RI{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,s=l.indexOf("Firefox")>-1,o=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Ku(this.options.manager):this.textureLoader=new Qu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return qn(s,l,i),An(l,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,d]of o.children.entries())s(d,l.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(nr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Hs[i.type],l=Ei[i.componentType],a=i.normalized===!0,c=new l(i.count*o);return Promise.resolve(new bt(c,o,a))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],a=Hs[i.type],c=Ei[i.componentType],d=c.BYTES_PER_ELEMENT,u=d*a,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let I,m;if(p&&p!==u){const f=Math.floor(h/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(M);y||(I=new c(l,f*p,i.count*p/d),y=new xu(I,p/d),t.cache.add(M,y)),m=new qo(y,a,h%p/d,g)}else l===null?I=new c(i.count*a):I=new c(l,h,i.count*a),m=new bt(I,a,g);if(i.sparse!==void 0){const f=Hs.SCALAR,M=Ei[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,P=new M(o[1],y,i.sparse.count*f),w=new c(o[2],x,i.sparse.count*a);l!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,U=P.length;E<U;E++){const S=P[E];if(m.setX(S,w[E*a]),a>=2&&m.setY(S,w[E*a+1]),a>=3&&m.setZ(S,w[E*a+2]),a>=4&&m.setW(S,w[E*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const a=n.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],l=s.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const h=(s.samplers||{})[o.sampler]||{};return d.magFilter=Na[h.magFilter]||Ut,d.minFilter=Na[h.minFilter]||xn,d.wrapS=Ua[h.wrapS]||Ci,d.wrapT=Ua[h.wrapT]||Ci,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Et&&d.minFilter!==Ut,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1;if(o.bufferView!==void 0)a=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:o.mimeType});return a=l.createObjectURL(h),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(a).then(function(u){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(I){const m=new gt(I);m.needsUpdate=!0,h(m)}),t.load(nr.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&l.revokeObjectURL(a),An(u,o),u.userData.mimeType=o.mimeType||bI(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=s.associations.get(o);o=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,a)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Ac,nn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(l,a)),n=a}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Zo,nn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(l,a)),n=a}if(i||s||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=n.clone(),s&&(a.vertexColors=!0),o&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return Qo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const l={},a=s.extensions||{},c=[];if(a[Oe.KHR_MATERIALS_UNLIT]){const u=i[Oe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(l,s,t))}else{const u=s.pbrMetallicRoughness||{};if(l.color=new we(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;l.color.setRGB(h[0],h[1],h[2],wt),l.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",u.baseColorTexture,_t)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=tn);const d=s.alphaMode||Vs.OPAQUE;if(d===Vs.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Vs.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Qn&&(c.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;l.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Qn&&(c.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Qn){const u=s.emissiveFactor;l.emissive=new we().setRGB(u[0],u[1],u[2],wt)}return s.emissiveTexture!==void 0&&o!==Qn&&c.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const u=new o(l);return s.name&&(u.name=s.name),An(u,s),t.associations.set(u,{materials:e}),s.extensions&&qn(i,u,s),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return Fa(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],d=EI(c),u=i[d];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Fa(new Qt,c,t),i[d]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const d=o[a].material===void 0?MI(this.cache):this.getDependency("material",o[a].material);l.push(d)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(a){const c=a.slice(0,a.length-1),d=a[a.length-1],u=[];for(let p=0,g=d.length;p<g;p++){const I=d[p],m=o[p];let f;const M=c[p];if(m.mode===Vt.TRIANGLES||m.mode===Vt.TRIANGLE_STRIP||m.mode===Vt.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new yu(I,M):new Ft(I,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Vt.TRIANGLE_STRIP?f.geometry=La(f.geometry,ic):m.mode===Vt.TRIANGLE_FAN&&(f.geometry=La(f.geometry,Ro));else if(m.mode===Vt.LINES)f=new _c(I,M);else if(m.mode===Vt.LINE_STRIP)f=new Jo(I,M);else if(m.mode===Vt.LINE_LOOP)f=new wu(I,M);else if(m.mode===Vt.POINTS)f=new Ru(I,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&TI(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),An(f,s),m.extensions&&qn(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&qn(i,u[0],s),u[0];const h=new ei;s.extensions&&qn(i,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(oc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),An(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,l=[],a=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){l.push(u);const h=new Le;s!==null&&h.fromArray(s.array,c*16),a.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jo(l,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],l=[],a=[],c=[],d=[];for(let u=0,h=i.channels.length;u<h;u++){const p=i.channels[u],g=i.samplers[p.sampler],I=p.target,m=I.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;I.node!==void 0&&(o.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",f)),a.push(this.getDependency("accessor",M)),c.push(g),d.push(I))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],p=u[1],g=u[2],I=u[3],m=u[4],f=[];for(let M=0,y=h.length;M<y;M++){const x=h[M],P=p[M],w=g[M],E=I[M],U=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,P,w,E,U);if(S)for(let v=0;v<S.length;v++)f.push(S[v])}return new Bu(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=i.weights.length;a<c;a++)l.morphTargetInfluences[a]=i.weights[a]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=i.children||[];for(let c=0,d=l.length;c<d;c++)o.push(n.getDependency("node",l[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),a]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,wI)});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",l=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let d;if(s.isBone===!0?d=new gc:c.length>1?d=new ei:c.length===1?d=c[0]:d=new ot,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(s.name&&(d.userData.name=s.name,d.name=o),An(d,s),s.extensions&&qn(n,d,s),s.matrix!==void 0){const u=new Le;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ei;n.name&&(s.name=i.createUniqueName(n.name)),An(s,n),n.extensions&&qn(t,s,n);const o=n.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(i.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let d=0,u=a.length;d<u;d++)s.add(a[d]);const c=d=>{const u=new Map;for(const[h,p]of i.associations)(h instanceof nn||h instanceof gt)&&u.set(h,p);return d.traverse(h=>{const p=i.associations.get(h);p!=null&&u.set(h,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],l=e.name?e.name:e.uuid,a=[];Ln[s.path]===Ln.weights?e.traverse(function(h){h.morphTargetInfluences&&a.push(h.name?h.name:h.uuid)}):a.push(l);let c;switch(Ln[s.path]){case Ln.weights:c=Ui;break;case Ln.rotation:c=Fi;break;case Ln.position:case Ln.scale:c=Oi;break;default:switch(n.itemSize){case 1:c=Ui;break;case 2:case 3:default:c=Oi;break}break}const d=i.interpolation!==void 0?yI[i.interpolation]:sr,u=this._getArrayFromAccessor(n);for(let h=0,p=a.length;h<p;h++){const g=new c(a[h]+"."+Ln[s.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Uo(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fi?vI:Cc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function CI(r,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(i.set(new C(a[0],a[1],a[2]),new C(c[0],c[1],c[2])),l.normalized){const d=Uo(Ei[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new C,a=new C;for(let c=0,d=s.length;c<d;c++){const u=s[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const I=Uo(Ei[h.componentType]);a.multiplyScalar(I)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const o=new an;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Fa(r,e,t){const n=e.attributes,i=[];function s(o,l){return t.getDependency("accessor",o).then(function(a){r.setAttribute(l,a)})}for(const o in n){const l=No[o]||o.toLowerCase();l in r.attributes||i.push(s(n[o],l))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(o)}return ke.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),An(r,e),CI(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SI(r,e.targets,t):r})}const Oa={type:"change"},sl={type:"start"},Pc={type:"end"},Vr=new cr,Ba=new Dn,PI=Math.cos(70*oc.DEG2RAD),ht=new C,Ct=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zs=1e-6;class LI extends uh{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new sn,this._lastTargetPosition=new C,this._quat=new sn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oa,this._sphericalDelta=new oa,this._scale=1,this._panOffset=new C,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new C,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NI.bind(this),this._onPointerDown=DI.bind(this),this._onPointerUp=UI.bind(this),this._onContextMenu=kI.bind(this),this._onMouseWheel=BI.bind(this),this._onKeyDown=GI.bind(this),this._onTouchStart=HI.bind(this),this._onTouchMove=VI.bind(this),this._onMouseDown=FI.bind(this),this._onMouseMove=OI.bind(this),this._interceptControlDown=zI.bind(this),this._interceptControlUp=WI.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oa),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;ht.copy(t).sub(this.target),ht.applyQuaternion(this._quat),this._spherical.setFromVector3(ht),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),i<-Math.PI?i+=Ct:i>Math.PI&&(i-=Ct),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ht.setFromSpherical(this._spherical),ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=ht.length();o=this._clampDistance(l*this._scale);const a=l-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),s=!!a}else if(this.object.isOrthographicCamera){const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=a!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<PI?this.object.lookAt(this.target):(Ba.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(Ba,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>zs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zs||this._lastTargetPosition.distanceToSquared(this.target)>zs?(this.dispatchEvent(Oa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ht.setFromMatrixColumn(t,0),ht.multiplyScalar(-e),this._panOffset.add(ht)}_panUp(e,t){this.screenSpacePanning===!0?ht.setFromMatrixColumn(t,1):(ht.setFromMatrixColumn(t,0),ht.crossVectors(this.object.up,ht)),ht.multiplyScalar(e),this._panOffset.add(ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ht.copy(i).sub(this.target);let s=ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function DI(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function NI(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function UI(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pc),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function FI(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=et.DOLLY;break;case yi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=et.ROTATE}break;case yi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(sl)}function OI(r){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BI(r){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(r.preventDefault(),this.dispatchEvent(sl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Pc))}function GI(r){this.enabled!==!1&&this._handleKeyDown(r)}function HI(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=et.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=et.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(sl)}function VI(r){switch(this._trackPointer(r),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=et.NONE}}function kI(r){this.enabled!==!1&&r.preventDefault()}function zI(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WI(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KI(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var jr={exports:{}},XI=jr.exports,Ga;function YI(){return Ga||(Ga=1,function(r,e){(function(t,n){r.exports=n()})(XI,function(){var t=function(){function n(p){return o.appendChild(p.dom),p}function i(p){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===p?"block":"none";s=p}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++s%o.children.length)},!1);var l=(performance||Date).now(),a=l,c=0,d=n(new t.Panel("FPS","#0ff","#002")),u=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){l=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(u.update(p-l,200),p>a+1e3&&(d.update(1e3*c/(p-a),100),a=p,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){l=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,l=0,a=Math.round,c=a(window.devicePixelRatio||1),d=80*c,u=48*c,h=3*c,p=2*c,g=3*c,I=15*c,m=74*c,f=30*c,M=document.createElement("canvas");M.width=d,M.height=u,M.style.cssText="width:80px;height:48px";var y=M.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=s,y.fillRect(0,0,d,u),y.fillStyle=i,y.fillText(n,h,p),y.fillRect(g,I,m,f),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g,I,m,f),{dom:M,update:function(x,P){o=Math.min(o,x),l=Math.max(l,x),y.fillStyle=s,y.globalAlpha=1,y.fillRect(0,0,d,I),y.fillStyle=i,y.fillText(a(x)+" "+n+" ("+a(o)+"-"+a(l)+")",h,p),y.drawImage(M,g+c,I,m-c,f,g,I,m-c,f),y.fillRect(g+m-c,I,c,f),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g+m-c,I,c,a((1-x/P)*f))}}},t})}(jr)),jr.exports}var qI=YI();const jI=KI(qI),$I=[{cellId:"A1",originId:null},{cellId:"A2",originId:null},{cellId:"A3",originId:null},{cellId:"A4",originId:null},{cellId:"A5",originId:null},{cellId:"A6",originId:null},{cellId:"A7",originId:null},{cellId:"A8",originId:null},{cellId:"A9",originId:null},{cellId:"A10",originId:null},{cellId:"A11",originId:null},{cellId:"A12",originId:null},{cellId:"A13",originId:null},{cellId:"A14",originId:null},{cellId:"A15",originId:null},{cellId:"A16",originId:null},{cellId:"A17",originId:null},{cellId:"A18",originId:null},{cellId:"A19",originId:null},{cellId:"A20",originId:null},{cellId:"A21",originId:null},{cellId:"A22",originId:null},{cellId:"A23",originId:null},{cellId:"A24",originId:null},{cellId:"A25",originId:null},{cellId:"A26",originId:null},{cellId:"A27",originId:null},{cellId:"A28",originId:null},{cellId:"A29",originId:null},{cellId:"A30",originId:null},{cellId:"A31",originId:null},{cellId:"A32",originId:null},{cellId:"A33",originId:null},{cellId:"A34",originId:null},{cellId:"A35",originId:null},{cellId:"A36",originId:null},{cellId:"A37",originId:null},{cellId:"A38",originId:null},{cellId:"B1",originId:null},{cellId:"B2",originId:null},{cellId:"B3",originId:null},{cellId:"B4",originId:null},{cellId:"B5",originId:null},{cellId:"B6",originId:null},{cellId:"B7",originId:null},{cellId:"B8",originId:null},{cellId:"B9",originId:null},{cellId:"B10",originId:null},{cellId:"B11",originId:null},{cellId:"B12",originId:null},{cellId:"B13",originId:null},{cellId:"B14",originId:null},{cellId:"B15",originId:null},{cellId:"B16",originId:null},{cellId:"B17",originId:null},{cellId:"B18",originId:null},{cellId:"B19",originId:null},{cellId:"B20",originId:null},{cellId:"B21",originId:null},{cellId:"B22",originId:null},{cellId:"B23",originId:null},{cellId:"B24",originId:null},{cellId:"B25",originId:null},{cellId:"B26",originId:null},{cellId:"B27",originId:null},{cellId:"B28",originId:null},{cellId:"B29",originId:null},{cellId:"B30",originId:null},{cellId:"B31",originId:null},{cellId:"B32",originId:null},{cellId:"B33",originId:null},{cellId:"B34",originId:null},{cellId:"B35",originId:null},{cellId:"B36",originId:null},{cellId:"B37",originId:null},{cellId:"B38",originId:null},{cellId:"C1",originId:null},{cellId:"C2",originId:null},{cellId:"C3",originId:null},{cellId:"C4",originId:null},{cellId:"C5",originId:null},{cellId:"C6",originId:null},{cellId:"C7",originId:null},{cellId:"C8",originId:null},{cellId:"C9",originId:null},{cellId:"C10",originId:null},{cellId:"C11",originId:null},{cellId:"C12",originId:null},{cellId:"C13",originId:null},{cellId:"C14",originId:null},{cellId:"C15",originId:null},{cellId:"C16",originId:null},{cellId:"C17",originId:null},{cellId:"C18",originId:null},{cellId:"C19",originId:null},{cellId:"C20",originId:null},{cellId:"C21",originId:null},{cellId:"C22",originId:null},{cellId:"C23",originId:null},{cellId:"C24",originId:null},{cellId:"C25",originId:null},{cellId:"C26",originId:null},{cellId:"C27",originId:null},{cellId:"C28",originId:null},{cellId:"C29",originId:null},{cellId:"C30",originId:null},{cellId:"C31",originId:null},{cellId:"C32",originId:null},{cellId:"C33",originId:null},{cellId:"C34",originId:null},{cellId:"C35",originId:null},{cellId:"C36",originId:null},{cellId:"C37",originId:null},{cellId:"C38",originId:null},{cellId:"D1",originId:null},{cellId:"D2",originId:null},{cellId:"D3",originId:null},{cellId:"D4",originId:null},{cellId:"D5",originId:null},{cellId:"D6",originId:null},{cellId:"D7",originId:null},{cellId:"D8",originId:null},{cellId:"D9",originId:null},{cellId:"D10",originId:null},{cellId:"D11",originId:null},{cellId:"D12",originId:null},{cellId:"D13",originId:null},{cellId:"D14",originId:null},{cellId:"D15",originId:null},{cellId:"D16",originId:"D16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D17",originId:"D17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D18",originId:"D18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D19",originId:"D19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D20",originId:"D20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D21",originId:"D21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D22",originId:"D22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D23",originId:"D23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D24",originId:"D24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D25",originId:"D25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D26",originId:"D26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D27",originId:"D27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D28",originId:"D28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D29",originId:"D29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D30",originId:"D30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D31",originId:"D31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D32",originId:"D32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D33",originId:"D33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D34",originId:"D34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D35",originId:"D35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"D36",originId:"D35"},{cellId:"D37",originId:null},{cellId:"D38",originId:null},{cellId:"E1",originId:null},{cellId:"E2",originId:null},{cellId:"E3",originId:null},{cellId:"E4",originId:null},{cellId:"E5",originId:null},{cellId:"E6",originId:null},{cellId:"E7",originId:null},{cellId:"E8",originId:null},{cellId:"E9",originId:null},{cellId:"E10",originId:null},{cellId:"E11",originId:null},{cellId:"E12",originId:null},{cellId:"E13",originId:"E13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"E14",originId:null},{cellId:"E15",originId:null},{cellId:"E16",originId:null},{cellId:"E17",originId:null},{cellId:"E18",originId:null},{cellId:"E19",originId:null},{cellId:"E20",originId:null},{cellId:"E21",originId:null},{cellId:"E22",originId:null},{cellId:"E23",originId:null},{cellId:"E24",originId:null},{cellId:"E25",originId:null},{cellId:"E26",originId:null},{cellId:"E27",originId:null},{cellId:"E28",originId:null},{cellId:"E29",originId:null},{cellId:"E30",originId:null},{cellId:"E31",originId:null},{cellId:"E32",originId:null},{cellId:"E33",originId:null},{cellId:"E34",originId:null},{cellId:"E35",originId:null},{cellId:"E36",originId:null},{cellId:"E37",originId:null},{cellId:"E38",originId:"E38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"F1",originId:null},{cellId:"F2",originId:null},{cellId:"F3",originId:null},{cellId:"F4",originId:null},{cellId:"F5",originId:null},{cellId:"F6",originId:null},{cellId:"F7",originId:null},{cellId:"F8",originId:null},{cellId:"F9",originId:null},{cellId:"F10",originId:null},{cellId:"F11",originId:null},{cellId:"F12",originId:null},{cellId:"F13",originId:"E13"},{cellId:"F14",originId:null},{cellId:"F15",originId:null},{cellId:"F16",originId:null},{cellId:"F17",originId:null},{cellId:"F18",originId:null},{cellId:"F19",originId:null},{cellId:"F20",originId:null},{cellId:"F21",originId:null},{cellId:"F22",originId:null},{cellId:"F23",originId:null},{cellId:"F24",originId:null},{cellId:"F25",originId:null},{cellId:"F26",originId:null},{cellId:"F27",originId:null},{cellId:"F28",originId:null},{cellId:"F29",originId:null},{cellId:"F30",originId:null},{cellId:"F31",originId:null},{cellId:"F32",originId:null},{cellId:"F33",originId:null},{cellId:"F34",originId:null},{cellId:"F35",originId:null},{cellId:"F36",originId:null},{cellId:"F37",originId:null},{cellId:"F38",originId:"E38"},{cellId:"G1",originId:null},{cellId:"G2",originId:null},{cellId:"G3",originId:null},{cellId:"G4",originId:null},{cellId:"G5",originId:null},{cellId:"G6",originId:null},{cellId:"G7",originId:null},{cellId:"G8",originId:null},{cellId:"G9",originId:null},{cellId:"G10",originId:null},{cellId:"G11",originId:null},{cellId:"G12",originId:null},{cellId:"G13",originId:null},{cellId:"G14",originId:null},{cellId:"G15",originId:null},{cellId:"G16",originId:"G16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G17",originId:"G17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G18",originId:"G18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G19",originId:"G19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G20",originId:"G20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G21",originId:"G21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G22",originId:"G22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G23",originId:"G23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G24",originId:"G24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G25",originId:"G25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G26",originId:"G26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G27",originId:"G27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G28",originId:"G28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G29",originId:"G29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G30",originId:"G30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G31",originId:"G31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G32",originId:"G32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G33",originId:"G33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G34",originId:"G34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G35",originId:"G35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"G36",originId:"G35"},{cellId:"G37",originId:null},{cellId:"G38",originId:null},{cellId:"H1",originId:null},{cellId:"H2",originId:null},{cellId:"H3",originId:null},{cellId:"H4",originId:null},{cellId:"H5",originId:null},{cellId:"H6",originId:null},{cellId:"H7",originId:null},{cellId:"H8",originId:null},{cellId:"H9",originId:null},{cellId:"H10",originId:null},{cellId:"H11",originId:null},{cellId:"H12",originId:null},{cellId:"H13",originId:null},{cellId:"H14",originId:null},{cellId:"H15",originId:null},{cellId:"H16",originId:null},{cellId:"H17",originId:null},{cellId:"H18",originId:null},{cellId:"H19",originId:null},{cellId:"H20",originId:null},{cellId:"H21",originId:null},{cellId:"H22",originId:null},{cellId:"H23",originId:null},{cellId:"H24",originId:null},{cellId:"H25",originId:null},{cellId:"H26",originId:null},{cellId:"H27",originId:null},{cellId:"H28",originId:null},{cellId:"H29",originId:null},{cellId:"H30",originId:null},{cellId:"H31",originId:null},{cellId:"H32",originId:null},{cellId:"H33",originId:null},{cellId:"H34",originId:null},{cellId:"H35",originId:null},{cellId:"H36",originId:null},{cellId:"H37",originId:null},{cellId:"H38",originId:null},{cellId:"I1",originId:null},{cellId:"I2",originId:null},{cellId:"I3",originId:null},{cellId:"I4",originId:null},{cellId:"I5",originId:null},{cellId:"I6",originId:null},{cellId:"I7",originId:null},{cellId:"I8",originId:null},{cellId:"I9",originId:null},{cellId:"I10",originId:null},{cellId:"I11",originId:null},{cellId:"I12",originId:null},{cellId:"I13",originId:null},{cellId:"I14",originId:null},{cellId:"I15",originId:null},{cellId:"I16",originId:null},{cellId:"I17",originId:null},{cellId:"I18",originId:null},{cellId:"I19",originId:null},{cellId:"I20",originId:null},{cellId:"I21",originId:null},{cellId:"I22",originId:null},{cellId:"I23",originId:null},{cellId:"I24",originId:null},{cellId:"I25",originId:null},{cellId:"I26",originId:null},{cellId:"I27",originId:null},{cellId:"I28",originId:null},{cellId:"I29",originId:null},{cellId:"I30",originId:null},{cellId:"I31",originId:null},{cellId:"I32",originId:null},{cellId:"I33",originId:null},{cellId:"I34",originId:null},{cellId:"I35",originId:null},{cellId:"I36",originId:null},{cellId:"I37",originId:null},{cellId:"I38",originId:null},{cellId:"J1",originId:null},{cellId:"J2",originId:null},{cellId:"J3",originId:null},{cellId:"J4",originId:null},{cellId:"J5",originId:null},{cellId:"J6",originId:null},{cellId:"J7",originId:null},{cellId:"J8",originId:null},{cellId:"J9",originId:null},{cellId:"J10",originId:null},{cellId:"J11",originId:null},{cellId:"J12",originId:null},{cellId:"J13",originId:null},{cellId:"J14",originId:null},{cellId:"J15",originId:null},{cellId:"J16",originId:"J16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J17",originId:"J17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J18",originId:"J18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J19",originId:"J19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J20",originId:"J20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J21",originId:"J21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J22",originId:"J22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J23",originId:"J23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J24",originId:"J24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J25",originId:"J25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J26",originId:"J26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J27",originId:"J27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J28",originId:"J28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J29",originId:"J29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J30",originId:"J30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J31",originId:"J31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J32",originId:"J32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J33",originId:"J33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J34",originId:"J34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J35",originId:"J35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"J36",originId:"J35"},{cellId:"J37",originId:null},{cellId:"J38",originId:null},{cellId:"K1",originId:null},{cellId:"K2",originId:null},{cellId:"K3",originId:null},{cellId:"K4",originId:null},{cellId:"K5",originId:null},{cellId:"K6",originId:null},{cellId:"K7",originId:null},{cellId:"K8",originId:null},{cellId:"K9",originId:null},{cellId:"K10",originId:null},{cellId:"K11",originId:null},{cellId:"K12",originId:null},{cellId:"K13",originId:"K13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"K14",originId:null},{cellId:"K15",originId:null},{cellId:"K16",originId:null},{cellId:"K17",originId:null},{cellId:"K18",originId:null},{cellId:"K19",originId:null},{cellId:"K20",originId:null},{cellId:"K21",originId:null},{cellId:"K22",originId:null},{cellId:"K23",originId:null},{cellId:"K24",originId:null},{cellId:"K25",originId:null},{cellId:"K26",originId:null},{cellId:"K27",originId:null},{cellId:"K28",originId:null},{cellId:"K29",originId:null},{cellId:"K30",originId:null},{cellId:"K31",originId:null},{cellId:"K32",originId:null},{cellId:"K33",originId:null},{cellId:"K34",originId:null},{cellId:"K35",originId:null},{cellId:"K36",originId:null},{cellId:"K37",originId:null},{cellId:"K38",originId:"K38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"L1",originId:null},{cellId:"L2",originId:null},{cellId:"L3",originId:null},{cellId:"L4",originId:null},{cellId:"L5",originId:null},{cellId:"L6",originId:null},{cellId:"L7",originId:null},{cellId:"L8",originId:null},{cellId:"L9",originId:null},{cellId:"L10",originId:null},{cellId:"L11",originId:null},{cellId:"L12",originId:null},{cellId:"L13",originId:"K13"},{cellId:"L14",originId:null},{cellId:"L15",originId:null},{cellId:"L16",originId:null},{cellId:"L17",originId:null},{cellId:"L18",originId:null},{cellId:"L19",originId:null},{cellId:"L20",originId:null},{cellId:"L21",originId:null},{cellId:"L22",originId:null},{cellId:"L23",originId:null},{cellId:"L24",originId:null},{cellId:"L25",originId:null},{cellId:"L26",originId:null},{cellId:"L27",originId:null},{cellId:"L28",originId:null},{cellId:"L29",originId:null},{cellId:"L30",originId:null},{cellId:"L31",originId:null},{cellId:"L32",originId:null},{cellId:"L33",originId:null},{cellId:"L34",originId:null},{cellId:"L35",originId:null},{cellId:"L36",originId:null},{cellId:"L37",originId:null},{cellId:"L38",originId:"K38"},{cellId:"M1",originId:null},{cellId:"M2",originId:null},{cellId:"M3",originId:null},{cellId:"M4",originId:null},{cellId:"M5",originId:null},{cellId:"M6",originId:null},{cellId:"M7",originId:null},{cellId:"M8",originId:null},{cellId:"M9",originId:null},{cellId:"M10",originId:null},{cellId:"M11",originId:null},{cellId:"M12",originId:null},{cellId:"M13",originId:null},{cellId:"M14",originId:null},{cellId:"M15",originId:null},{cellId:"M16",originId:"M16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M17",originId:"M17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M18",originId:"M18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M19",originId:"M19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M20",originId:"M20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M21",originId:"M21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M22",originId:"M22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M23",originId:"M23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M24",originId:"M24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M25",originId:"M25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M26",originId:"M26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M27",originId:"M27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M28",originId:"M28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M29",originId:"M29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M30",originId:"M30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M31",originId:"M31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M32",originId:"M32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M33",originId:"M33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M34",originId:"M34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M35",originId:"M35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"M36",originId:"M35"},{cellId:"M37",originId:null},{cellId:"M38",originId:null},{cellId:"N1",originId:null},{cellId:"N2",originId:null},{cellId:"N3",originId:null},{cellId:"N4",originId:null},{cellId:"N5",originId:null},{cellId:"N6",originId:null},{cellId:"N7",originId:null},{cellId:"N8",originId:null},{cellId:"N9",originId:null},{cellId:"N10",originId:null},{cellId:"N11",originId:null},{cellId:"N12",originId:null},{cellId:"N13",originId:null},{cellId:"N14",originId:null},{cellId:"N15",originId:null},{cellId:"N16",originId:null},{cellId:"N17",originId:null},{cellId:"N18",originId:null},{cellId:"N19",originId:null},{cellId:"N20",originId:null},{cellId:"N21",originId:null},{cellId:"N22",originId:null},{cellId:"N23",originId:null},{cellId:"N24",originId:null},{cellId:"N25",originId:null},{cellId:"N26",originId:null},{cellId:"N27",originId:null},{cellId:"N28",originId:null},{cellId:"N29",originId:null},{cellId:"N30",originId:null},{cellId:"N31",originId:null},{cellId:"N32",originId:null},{cellId:"N33",originId:null},{cellId:"N34",originId:null},{cellId:"N35",originId:null},{cellId:"N36",originId:null},{cellId:"N37",originId:null},{cellId:"N38",originId:null},{cellId:"O1",originId:null},{cellId:"O2",originId:null},{cellId:"O3",originId:null},{cellId:"O4",originId:null},{cellId:"O5",originId:null},{cellId:"O6",originId:null},{cellId:"O7",originId:null},{cellId:"O8",originId:null},{cellId:"O9",originId:null},{cellId:"O10",originId:null},{cellId:"O11",originId:null},{cellId:"O12",originId:null},{cellId:"O13",originId:null},{cellId:"O14",originId:null},{cellId:"O15",originId:null},{cellId:"O16",originId:null},{cellId:"O17",originId:null},{cellId:"O18",originId:null},{cellId:"O19",originId:null},{cellId:"O20",originId:null},{cellId:"O21",originId:null},{cellId:"O22",originId:null},{cellId:"O23",originId:null},{cellId:"O24",originId:null},{cellId:"O25",originId:null},{cellId:"O26",originId:null},{cellId:"O27",originId:null},{cellId:"O28",originId:null},{cellId:"O29",originId:null},{cellId:"O30",originId:null},{cellId:"O31",originId:null},{cellId:"O32",originId:null},{cellId:"O33",originId:null},{cellId:"O34",originId:null},{cellId:"O35",originId:null},{cellId:"O36",originId:null},{cellId:"O37",originId:null},{cellId:"O38",originId:null},{cellId:"P1",originId:null},{cellId:"P2",originId:null},{cellId:"P3",originId:null},{cellId:"P4",originId:null},{cellId:"P5",originId:null},{cellId:"P6",originId:null},{cellId:"P7",originId:null},{cellId:"P8",originId:null},{cellId:"P9",originId:null},{cellId:"P10",originId:null},{cellId:"P11",originId:null},{cellId:"P12",originId:null},{cellId:"P13",originId:null},{cellId:"P14",originId:null},{cellId:"P15",originId:null},{cellId:"P16",originId:"P16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P17",originId:"P17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P18",originId:"P18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P19",originId:"P19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P20",originId:"P20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P21",originId:"P21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P22",originId:"P22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P23",originId:"P23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P24",originId:"P24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P25",originId:"P25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P26",originId:"P26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P27",originId:"P27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P28",originId:"P28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P29",originId:"P29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P30",originId:"P30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P31",originId:"P31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P32",originId:"P32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P33",originId:"P33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P34",originId:"P34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P35",originId:"P35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"P36",originId:"P35"},{cellId:"P37",originId:null},{cellId:"P38",originId:null},{cellId:"Q1",originId:null},{cellId:"Q2",originId:null},{cellId:"Q3",originId:null},{cellId:"Q4",originId:null},{cellId:"Q5",originId:null},{cellId:"Q6",originId:null},{cellId:"Q7",originId:null},{cellId:"Q8",originId:null},{cellId:"Q9",originId:null},{cellId:"Q10",originId:null},{cellId:"Q11",originId:null},{cellId:"Q12",originId:null},{cellId:"Q13",originId:"Q13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"Q14",originId:null},{cellId:"Q15",originId:null},{cellId:"Q16",originId:null},{cellId:"Q17",originId:null},{cellId:"Q18",originId:null},{cellId:"Q19",originId:null},{cellId:"Q20",originId:null},{cellId:"Q21",originId:null},{cellId:"Q22",originId:null},{cellId:"Q23",originId:null},{cellId:"Q24",originId:null},{cellId:"Q25",originId:null},{cellId:"Q26",originId:null},{cellId:"Q27",originId:null},{cellId:"Q28",originId:null},{cellId:"Q29",originId:null},{cellId:"Q30",originId:null},{cellId:"Q31",originId:null},{cellId:"Q32",originId:null},{cellId:"Q33",originId:null},{cellId:"Q34",originId:null},{cellId:"Q35",originId:null},{cellId:"Q36",originId:null},{cellId:"Q37",originId:null},{cellId:"Q38",originId:"Q38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"R1",originId:null},{cellId:"R2",originId:null},{cellId:"R3",originId:null},{cellId:"R4",originId:null},{cellId:"R5",originId:null},{cellId:"R6",originId:null},{cellId:"R7",originId:null},{cellId:"R8",originId:null},{cellId:"R9",originId:null},{cellId:"R10",originId:null},{cellId:"R11",originId:null},{cellId:"R12",originId:null},{cellId:"R13",originId:"Q13"},{cellId:"R14",originId:null},{cellId:"R15",originId:null},{cellId:"R16",originId:null},{cellId:"R17",originId:null},{cellId:"R18",originId:null},{cellId:"R19",originId:null},{cellId:"R20",originId:null},{cellId:"R21",originId:null},{cellId:"R22",originId:null},{cellId:"R23",originId:null},{cellId:"R24",originId:null},{cellId:"R25",originId:null},{cellId:"R26",originId:null},{cellId:"R27",originId:null},{cellId:"R28",originId:null},{cellId:"R29",originId:null},{cellId:"R30",originId:null},{cellId:"R31",originId:null},{cellId:"R32",originId:null},{cellId:"R33",originId:null},{cellId:"R34",originId:null},{cellId:"R35",originId:null},{cellId:"R36",originId:null},{cellId:"R37",originId:null},{cellId:"R38",originId:"Q38"},{cellId:"S1",originId:null},{cellId:"S2",originId:null},{cellId:"S3",originId:null},{cellId:"S4",originId:null},{cellId:"S5",originId:null},{cellId:"S6",originId:null},{cellId:"S7",originId:null},{cellId:"S8",originId:null},{cellId:"S9",originId:null},{cellId:"S10",originId:null},{cellId:"S11",originId:null},{cellId:"S12",originId:null},{cellId:"S13",originId:null},{cellId:"S14",originId:null},{cellId:"S15",originId:null},{cellId:"S16",originId:"S16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S17",originId:"S17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S18",originId:"S18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S19",originId:"S19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S20",originId:"S20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S21",originId:"S21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S22",originId:"S22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S23",originId:"S23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S24",originId:"S24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S25",originId:"S25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S26",originId:"S26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S27",originId:"S27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S28",originId:"S28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S29",originId:"S29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S30",originId:"S30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S31",originId:"S31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S32",originId:"S32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S33",originId:"S33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S34",originId:"S34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S35",originId:"S35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"S36",originId:"S35"},{cellId:"S37",originId:null},{cellId:"S38",originId:null},{cellId:"T1",originId:null},{cellId:"T2",originId:null},{cellId:"T3",originId:null},{cellId:"T4",originId:null},{cellId:"T5",originId:null},{cellId:"T6",originId:null},{cellId:"T7",originId:null},{cellId:"T8",originId:null},{cellId:"T9",originId:null},{cellId:"T10",originId:null},{cellId:"T11",originId:null},{cellId:"T12",originId:null},{cellId:"T13",originId:null},{cellId:"T14",originId:null},{cellId:"T15",originId:null},{cellId:"T16",originId:null},{cellId:"T17",originId:null},{cellId:"T18",originId:null},{cellId:"T19",originId:null},{cellId:"T20",originId:null},{cellId:"T21",originId:null},{cellId:"T22",originId:null},{cellId:"T23",originId:null},{cellId:"T24",originId:null},{cellId:"T25",originId:null},{cellId:"T26",originId:null},{cellId:"T27",originId:null},{cellId:"T28",originId:null},{cellId:"T29",originId:null},{cellId:"T30",originId:null},{cellId:"T31",originId:null},{cellId:"T32",originId:null},{cellId:"T33",originId:null},{cellId:"T34",originId:null},{cellId:"T35",originId:null},{cellId:"T36",originId:null},{cellId:"T37",originId:null},{cellId:"T38",originId:null},{cellId:"U1",originId:null},{cellId:"U2",originId:null},{cellId:"U3",originId:null},{cellId:"U4",originId:null},{cellId:"U5",originId:null},{cellId:"U6",originId:null},{cellId:"U7",originId:null},{cellId:"U8",originId:null},{cellId:"U9",originId:null},{cellId:"U10",originId:null},{cellId:"U11",originId:null},{cellId:"U12",originId:null},{cellId:"U13",originId:null},{cellId:"U14",originId:null},{cellId:"U15",originId:null},{cellId:"U16",originId:null},{cellId:"U17",originId:null},{cellId:"U18",originId:null},{cellId:"U19",originId:null},{cellId:"U20",originId:null},{cellId:"U21",originId:null},{cellId:"U22",originId:null},{cellId:"U23",originId:null},{cellId:"U24",originId:null},{cellId:"U25",originId:null},{cellId:"U26",originId:null},{cellId:"U27",originId:null},{cellId:"U28",originId:null},{cellId:"U29",originId:null},{cellId:"U30",originId:null},{cellId:"U31",originId:null},{cellId:"U32",originId:null},{cellId:"U33",originId:null},{cellId:"U34",originId:null},{cellId:"U35",originId:null},{cellId:"U36",originId:null},{cellId:"U37",originId:null},{cellId:"U38",originId:null},{cellId:"V1",originId:null},{cellId:"V2",originId:null},{cellId:"V3",originId:null},{cellId:"V4",originId:null},{cellId:"V5",originId:null},{cellId:"V6",originId:null},{cellId:"V7",originId:null},{cellId:"V8",originId:null},{cellId:"V9",originId:null},{cellId:"V10",originId:null},{cellId:"V11",originId:null},{cellId:"V12",originId:null},{cellId:"V13",originId:null},{cellId:"V14",originId:null},{cellId:"V15",originId:null},{cellId:"V16",originId:"V16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V17",originId:"V17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V18",originId:"V18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V19",originId:"V19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V20",originId:"V20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V21",originId:"V21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V22",originId:"V22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V23",originId:"V23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V24",originId:"V24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V25",originId:"V25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V26",originId:"V26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V27",originId:"V27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V28",originId:"V28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V29",originId:"V29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V30",originId:"V30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V31",originId:"V31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V32",originId:"V32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V33",originId:"V33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V34",originId:"V34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V35",originId:"V35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"V36",originId:"V35"},{cellId:"V37",originId:null},{cellId:"V38",originId:null},{cellId:"W1",originId:null},{cellId:"W2",originId:null},{cellId:"W3",originId:null},{cellId:"W4",originId:null},{cellId:"W5",originId:null},{cellId:"W6",originId:null},{cellId:"W7",originId:null},{cellId:"W8",originId:null},{cellId:"W9",originId:null},{cellId:"W10",originId:null},{cellId:"W11",originId:null},{cellId:"W12",originId:null},{cellId:"W13",originId:"W13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"W14",originId:null},{cellId:"W15",originId:null},{cellId:"W16",originId:null},{cellId:"W17",originId:null},{cellId:"W18",originId:null},{cellId:"W19",originId:null},{cellId:"W20",originId:null},{cellId:"W21",originId:null},{cellId:"W22",originId:null},{cellId:"W23",originId:null},{cellId:"W24",originId:null},{cellId:"W25",originId:null},{cellId:"W26",originId:null},{cellId:"W27",originId:null},{cellId:"W28",originId:null},{cellId:"W29",originId:null},{cellId:"W30",originId:null},{cellId:"W31",originId:null},{cellId:"W32",originId:null},{cellId:"W33",originId:null},{cellId:"W34",originId:null},{cellId:"W35",originId:null},{cellId:"W36",originId:null},{cellId:"W37",originId:null},{cellId:"W38",originId:"W38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"X1",originId:null},{cellId:"X2",originId:null},{cellId:"X3",originId:null},{cellId:"X4",originId:null},{cellId:"X5",originId:null},{cellId:"X6",originId:null},{cellId:"X7",originId:null},{cellId:"X8",originId:null},{cellId:"X9",originId:null},{cellId:"X10",originId:null},{cellId:"X11",originId:null},{cellId:"X12",originId:null},{cellId:"X13",originId:"W13"},{cellId:"X14",originId:null},{cellId:"X15",originId:null},{cellId:"X16",originId:null},{cellId:"X17",originId:null},{cellId:"X18",originId:null},{cellId:"X19",originId:null},{cellId:"X20",originId:null},{cellId:"X21",originId:null},{cellId:"X22",originId:null},{cellId:"X23",originId:null},{cellId:"X24",originId:null},{cellId:"X25",originId:null},{cellId:"X26",originId:null},{cellId:"X27",originId:null},{cellId:"X28",originId:null},{cellId:"X29",originId:null},{cellId:"X30",originId:null},{cellId:"X31",originId:null},{cellId:"X32",originId:null},{cellId:"X33",originId:null},{cellId:"X34",originId:null},{cellId:"X35",originId:null},{cellId:"X36",originId:null},{cellId:"X37",originId:null},{cellId:"X38",originId:"W38"},{cellId:"Y1",originId:null},{cellId:"Y2",originId:null},{cellId:"Y3",originId:null},{cellId:"Y4",originId:null},{cellId:"Y5",originId:null},{cellId:"Y6",originId:null},{cellId:"Y7",originId:null},{cellId:"Y8",originId:null},{cellId:"Y9",originId:null},{cellId:"Y10",originId:null},{cellId:"Y11",originId:null},{cellId:"Y12",originId:null},{cellId:"Y13",originId:null},{cellId:"Y14",originId:null},{cellId:"Y15",originId:null},{cellId:"Y16",originId:"Y16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y17",originId:"Y17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y18",originId:"Y18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y19",originId:"Y19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y20",originId:"Y20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y21",originId:"Y21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y22",originId:"Y22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y23",originId:"Y23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y24",originId:"Y24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y25",originId:"Y25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y26",originId:"Y26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y27",originId:"Y27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y28",originId:"Y28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y29",originId:"Y29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y30",originId:"Y30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y31",originId:"Y31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y32",originId:"Y32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y33",originId:"Y33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y34",originId:"Y34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y35",originId:"Y35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"Y36",originId:"Y35"},{cellId:"Y37",originId:null},{cellId:"Y38",originId:null},{cellId:"Z1",originId:null},{cellId:"Z2",originId:null},{cellId:"Z3",originId:null},{cellId:"Z4",originId:null},{cellId:"Z5",originId:null},{cellId:"Z6",originId:null},{cellId:"Z7",originId:null},{cellId:"Z8",originId:null},{cellId:"Z9",originId:null},{cellId:"Z10",originId:null},{cellId:"Z11",originId:null},{cellId:"Z12",originId:null},{cellId:"Z13",originId:null},{cellId:"Z14",originId:null},{cellId:"Z15",originId:null},{cellId:"Z16",originId:null},{cellId:"Z17",originId:null},{cellId:"Z18",originId:null},{cellId:"Z19",originId:null},{cellId:"Z20",originId:null},{cellId:"Z21",originId:null},{cellId:"Z22",originId:null},{cellId:"Z23",originId:null},{cellId:"Z24",originId:null},{cellId:"Z25",originId:null},{cellId:"Z26",originId:null},{cellId:"Z27",originId:null},{cellId:"Z28",originId:null},{cellId:"Z29",originId:null},{cellId:"Z30",originId:null},{cellId:"Z31",originId:null},{cellId:"Z32",originId:null},{cellId:"Z33",originId:null},{cellId:"Z34",originId:null},{cellId:"Z35",originId:null},{cellId:"Z36",originId:null},{cellId:"Z37",originId:null},{cellId:"Z38",originId:null},{cellId:"AA1",originId:null},{cellId:"AA2",originId:null},{cellId:"AA3",originId:null},{cellId:"AA4",originId:null},{cellId:"AA5",originId:null},{cellId:"AA6",originId:null},{cellId:"AA7",originId:null},{cellId:"AA8",originId:null},{cellId:"AA9",originId:null},{cellId:"AA10",originId:null},{cellId:"AA11",originId:null},{cellId:"AA12",originId:null},{cellId:"AA13",originId:null},{cellId:"AA14",originId:null},{cellId:"AA15",originId:null},{cellId:"AA16",originId:null},{cellId:"AA17",originId:null},{cellId:"AA18",originId:null},{cellId:"AA19",originId:null},{cellId:"AA20",originId:null},{cellId:"AA21",originId:null},{cellId:"AA22",originId:null},{cellId:"AA23",originId:null},{cellId:"AA24",originId:null},{cellId:"AA25",originId:null},{cellId:"AA26",originId:null},{cellId:"AA27",originId:null},{cellId:"AA28",originId:null},{cellId:"AA29",originId:null},{cellId:"AA30",originId:null},{cellId:"AA31",originId:null},{cellId:"AA32",originId:null},{cellId:"AA33",originId:null},{cellId:"AA34",originId:null},{cellId:"AA35",originId:null},{cellId:"AA36",originId:null},{cellId:"AA37",originId:null},{cellId:"AA38",originId:null},{cellId:"AB1",originId:null},{cellId:"AB2",originId:null},{cellId:"AB3",originId:null},{cellId:"AB4",originId:null},{cellId:"AB5",originId:null},{cellId:"AB6",originId:null},{cellId:"AB7",originId:null},{cellId:"AB8",originId:null},{cellId:"AB9",originId:null},{cellId:"AB10",originId:null},{cellId:"AB11",originId:null},{cellId:"AB12",originId:null},{cellId:"AB13",originId:null},{cellId:"AB14",originId:null},{cellId:"AB15",originId:null},{cellId:"AB16",originId:"AB16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB17",originId:"AB17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB18",originId:"AB18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB19",originId:"AB19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB20",originId:"AB20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB21",originId:"AB21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB22",originId:"AB22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB23",originId:"AB23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB24",originId:"AB24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB25",originId:"AB25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB26",originId:"AB26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB27",originId:"AB27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB28",originId:"AB28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB29",originId:"AB29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB30",originId:"AB30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB31",originId:"AB31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB32",originId:"AB32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB33",originId:"AB33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB34",originId:"AB34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB35",originId:"AB35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AB36",originId:"AB35"},{cellId:"AB37",originId:null},{cellId:"AB38",originId:null},{cellId:"AC1",originId:null},{cellId:"AC2",originId:null},{cellId:"AC3",originId:null},{cellId:"AC4",originId:null},{cellId:"AC5",originId:null},{cellId:"AC6",originId:null},{cellId:"AC7",originId:null},{cellId:"AC8",originId:null},{cellId:"AC9",originId:null},{cellId:"AC10",originId:null},{cellId:"AC11",originId:null},{cellId:"AC12",originId:null},{cellId:"AC13",originId:"AC13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"AC14",originId:null},{cellId:"AC15",originId:null},{cellId:"AC16",originId:null},{cellId:"AC17",originId:null},{cellId:"AC18",originId:null},{cellId:"AC19",originId:null},{cellId:"AC20",originId:null},{cellId:"AC21",originId:null},{cellId:"AC22",originId:null},{cellId:"AC23",originId:null},{cellId:"AC24",originId:null},{cellId:"AC25",originId:null},{cellId:"AC26",originId:null},{cellId:"AC27",originId:null},{cellId:"AC28",originId:null},{cellId:"AC29",originId:null},{cellId:"AC30",originId:null},{cellId:"AC31",originId:null},{cellId:"AC32",originId:null},{cellId:"AC33",originId:null},{cellId:"AC34",originId:null},{cellId:"AC35",originId:null},{cellId:"AC36",originId:null},{cellId:"AC37",originId:null},{cellId:"AC38",originId:"AC38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"AD1",originId:null},{cellId:"AD2",originId:null},{cellId:"AD3",originId:null},{cellId:"AD4",originId:null},{cellId:"AD5",originId:null},{cellId:"AD6",originId:null},{cellId:"AD7",originId:null},{cellId:"AD8",originId:null},{cellId:"AD9",originId:null},{cellId:"AD10",originId:null},{cellId:"AD11",originId:null},{cellId:"AD12",originId:null},{cellId:"AD13",originId:"AC13"},{cellId:"AD14",originId:null},{cellId:"AD15",originId:null},{cellId:"AD16",originId:null},{cellId:"AD17",originId:null},{cellId:"AD18",originId:null},{cellId:"AD19",originId:null},{cellId:"AD20",originId:null},{cellId:"AD21",originId:null},{cellId:"AD22",originId:null},{cellId:"AD23",originId:null},{cellId:"AD24",originId:null},{cellId:"AD25",originId:null},{cellId:"AD26",originId:null},{cellId:"AD27",originId:null},{cellId:"AD28",originId:null},{cellId:"AD29",originId:null},{cellId:"AD30",originId:null},{cellId:"AD31",originId:null},{cellId:"AD32",originId:null},{cellId:"AD33",originId:null},{cellId:"AD34",originId:null},{cellId:"AD35",originId:null},{cellId:"AD36",originId:null},{cellId:"AD37",originId:null},{cellId:"AD38",originId:"AC38"},{cellId:"AE1",originId:null},{cellId:"AE2",originId:null},{cellId:"AE3",originId:null},{cellId:"AE4",originId:null},{cellId:"AE5",originId:null},{cellId:"AE6",originId:null},{cellId:"AE7",originId:null},{cellId:"AE8",originId:null},{cellId:"AE9",originId:null},{cellId:"AE10",originId:null},{cellId:"AE11",originId:null},{cellId:"AE12",originId:null},{cellId:"AE13",originId:null},{cellId:"AE14",originId:null},{cellId:"AE15",originId:null},{cellId:"AE16",originId:"AE16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE17",originId:"AE17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE18",originId:"AE18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE19",originId:"AE19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE20",originId:"AE20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE21",originId:"AE21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE22",originId:"AE22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE23",originId:"AE23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE24",originId:"AE24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE25",originId:"AE25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE26",originId:"AE26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE27",originId:"AE27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE28",originId:"AE28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE29",originId:"AE29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE30",originId:"AE30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE31",originId:"AE31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE32",originId:"AE32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE33",originId:"AE33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE34",originId:"AE34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE35",originId:"AE35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AE36",originId:"AE35"},{cellId:"AE37",originId:null},{cellId:"AE38",originId:null},{cellId:"AF1",originId:null},{cellId:"AF2",originId:null},{cellId:"AF3",originId:null},{cellId:"AF4",originId:null},{cellId:"AF5",originId:null},{cellId:"AF6",originId:null},{cellId:"AF7",originId:null},{cellId:"AF8",originId:null},{cellId:"AF9",originId:null},{cellId:"AF10",originId:null},{cellId:"AF11",originId:null},{cellId:"AF12",originId:null},{cellId:"AF13",originId:null},{cellId:"AF14",originId:null},{cellId:"AF15",originId:null},{cellId:"AF16",originId:null},{cellId:"AF17",originId:null},{cellId:"AF18",originId:null},{cellId:"AF19",originId:null},{cellId:"AF20",originId:null},{cellId:"AF21",originId:null},{cellId:"AF22",originId:null},{cellId:"AF23",originId:null},{cellId:"AF24",originId:null},{cellId:"AF25",originId:null},{cellId:"AF26",originId:null},{cellId:"AF27",originId:null},{cellId:"AF28",originId:null},{cellId:"AF29",originId:null},{cellId:"AF30",originId:null},{cellId:"AF31",originId:null},{cellId:"AF32",originId:null},{cellId:"AF33",originId:null},{cellId:"AF34",originId:null},{cellId:"AF35",originId:null},{cellId:"AF36",originId:null},{cellId:"AF37",originId:null},{cellId:"AF38",originId:null},{cellId:"AG1",originId:null},{cellId:"AG2",originId:null},{cellId:"AG3",originId:null},{cellId:"AG4",originId:null},{cellId:"AG5",originId:null},{cellId:"AG6",originId:null},{cellId:"AG7",originId:null},{cellId:"AG8",originId:null},{cellId:"AG9",originId:null},{cellId:"AG10",originId:null},{cellId:"AG11",originId:null},{cellId:"AG12",originId:null},{cellId:"AG13",originId:null},{cellId:"AG14",originId:null},{cellId:"AG15",originId:null},{cellId:"AG16",originId:null},{cellId:"AG17",originId:null},{cellId:"AG18",originId:null},{cellId:"AG19",originId:null},{cellId:"AG20",originId:null},{cellId:"AG21",originId:null},{cellId:"AG22",originId:null},{cellId:"AG23",originId:null},{cellId:"AG24",originId:null},{cellId:"AG25",originId:null},{cellId:"AG26",originId:null},{cellId:"AG27",originId:null},{cellId:"AG28",originId:null},{cellId:"AG29",originId:null},{cellId:"AG30",originId:null},{cellId:"AG31",originId:null},{cellId:"AG32",originId:null},{cellId:"AG33",originId:null},{cellId:"AG34",originId:null},{cellId:"AG35",originId:null},{cellId:"AG36",originId:null},{cellId:"AG37",originId:null},{cellId:"AG38",originId:null},{cellId:"AH1",originId:null},{cellId:"AH2",originId:null},{cellId:"AH3",originId:null},{cellId:"AH4",originId:null},{cellId:"AH5",originId:null},{cellId:"AH6",originId:null},{cellId:"AH7",originId:null},{cellId:"AH8",originId:null},{cellId:"AH9",originId:null},{cellId:"AH10",originId:null},{cellId:"AH11",originId:null},{cellId:"AH12",originId:null},{cellId:"AH13",originId:null},{cellId:"AH14",originId:null},{cellId:"AH15",originId:null},{cellId:"AH16",originId:"AH16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH17",originId:"AH17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH18",originId:"AH18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH19",originId:"AH19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH20",originId:"AH20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH21",originId:"AH21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH22",originId:"AH22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH23",originId:"AH23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH24",originId:"AH24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH25",originId:"AH25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH26",originId:"AH26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH27",originId:"AH27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH28",originId:"AH28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH29",originId:"AH29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH30",originId:"AH30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH31",originId:"AH31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH32",originId:"AH32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH33",originId:"AH33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH34",originId:"AH34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH35",originId:"AH35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AH36",originId:"AH35"},{cellId:"AH37",originId:null},{cellId:"AH38",originId:null},{cellId:"AI1",originId:null},{cellId:"AI2",originId:null},{cellId:"AI3",originId:null},{cellId:"AI4",originId:null},{cellId:"AI5",originId:null},{cellId:"AI6",originId:null},{cellId:"AI7",originId:null},{cellId:"AI8",originId:null},{cellId:"AI9",originId:null},{cellId:"AI10",originId:null},{cellId:"AI11",originId:null},{cellId:"AI12",originId:null},{cellId:"AI13",originId:"AI13",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"N"},{cellId:"AI14",originId:null},{cellId:"AI15",originId:null},{cellId:"AI16",originId:null},{cellId:"AI17",originId:null},{cellId:"AI18",originId:null},{cellId:"AI19",originId:null},{cellId:"AI20",originId:null},{cellId:"AI21",originId:null},{cellId:"AI22",originId:null},{cellId:"AI23",originId:null},{cellId:"AI24",originId:null},{cellId:"AI25",originId:null},{cellId:"AI26",originId:null},{cellId:"AI27",originId:null},{cellId:"AI28",originId:null},{cellId:"AI29",originId:null},{cellId:"AI30",originId:null},{cellId:"AI31",originId:null},{cellId:"AI32",originId:null},{cellId:"AI33",originId:null},{cellId:"AI34",originId:null},{cellId:"AI35",originId:null},{cellId:"AI36",originId:null},{cellId:"AI37",originId:null},{cellId:"AI38",originId:"AI38",rowGrid:2,colGrid:1,fmsType:"CRAC",direction:"S"},{cellId:"AJ1",originId:null},{cellId:"AJ2",originId:null},{cellId:"AJ3",originId:null},{cellId:"AJ4",originId:null},{cellId:"AJ5",originId:null},{cellId:"AJ6",originId:null},{cellId:"AJ7",originId:null},{cellId:"AJ8",originId:null},{cellId:"AJ9",originId:null},{cellId:"AJ10",originId:null},{cellId:"AJ11",originId:null},{cellId:"AJ12",originId:null},{cellId:"AJ13",originId:"AI13"},{cellId:"AJ14",originId:null},{cellId:"AJ15",originId:null},{cellId:"AJ16",originId:null},{cellId:"AJ17",originId:null},{cellId:"AJ18",originId:null},{cellId:"AJ19",originId:null},{cellId:"AJ20",originId:null},{cellId:"AJ21",originId:null},{cellId:"AJ22",originId:null},{cellId:"AJ23",originId:null},{cellId:"AJ24",originId:null},{cellId:"AJ25",originId:null},{cellId:"AJ26",originId:null},{cellId:"AJ27",originId:null},{cellId:"AJ28",originId:null},{cellId:"AJ29",originId:null},{cellId:"AJ30",originId:null},{cellId:"AJ31",originId:null},{cellId:"AJ32",originId:null},{cellId:"AJ33",originId:null},{cellId:"AJ34",originId:null},{cellId:"AJ35",originId:null},{cellId:"AJ36",originId:null},{cellId:"AJ37",originId:null},{cellId:"AJ38",originId:"AI38"},{cellId:"AK1",originId:null},{cellId:"AK2",originId:null},{cellId:"AK3",originId:null},{cellId:"AK4",originId:null},{cellId:"AK5",originId:null},{cellId:"AK6",originId:null},{cellId:"AK7",originId:null},{cellId:"AK8",originId:null},{cellId:"AK9",originId:null},{cellId:"AK10",originId:null},{cellId:"AK11",originId:null},{cellId:"AK12",originId:null},{cellId:"AK13",originId:null},{cellId:"AK14",originId:null},{cellId:"AK15",originId:null},{cellId:"AK16",originId:"AK16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK17",originId:"AK17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK18",originId:"AK18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK19",originId:"AK19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK20",originId:"AK20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK21",originId:"AK21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK22",originId:"AK22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK23",originId:"AK23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK24",originId:"AK24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK25",originId:"AK25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK26",originId:"AK26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK27",originId:"AK27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK28",originId:"AK28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK29",originId:"AK29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK30",originId:"AK30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK31",originId:"AK31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK32",originId:"AK32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK33",originId:"AK33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK34",originId:"AK34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK35",originId:"AK35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AK36",originId:"AK35"},{cellId:"AK37",originId:null},{cellId:"AK38",originId:null},{cellId:"AL1",originId:null},{cellId:"AL2",originId:null},{cellId:"AL3",originId:null},{cellId:"AL4",originId:null},{cellId:"AL5",originId:null},{cellId:"AL6",originId:null},{cellId:"AL7",originId:null},{cellId:"AL8",originId:null},{cellId:"AL9",originId:null},{cellId:"AL10",originId:null},{cellId:"AL11",originId:null},{cellId:"AL12",originId:null},{cellId:"AL13",originId:null},{cellId:"AL14",originId:null},{cellId:"AL15",originId:null},{cellId:"AL16",originId:null},{cellId:"AL17",originId:null},{cellId:"AL18",originId:null},{cellId:"AL19",originId:null},{cellId:"AL20",originId:null},{cellId:"AL21",originId:null},{cellId:"AL22",originId:null},{cellId:"AL23",originId:null},{cellId:"AL24",originId:null},{cellId:"AL25",originId:null},{cellId:"AL26",originId:null},{cellId:"AL27",originId:null},{cellId:"AL28",originId:null},{cellId:"AL29",originId:null},{cellId:"AL30",originId:null},{cellId:"AL31",originId:null},{cellId:"AL32",originId:null},{cellId:"AL33",originId:null},{cellId:"AL34",originId:null},{cellId:"AL35",originId:null},{cellId:"AL36",originId:null},{cellId:"AL37",originId:null},{cellId:"AL38",originId:null},{cellId:"AM1",originId:null},{cellId:"AM2",originId:null},{cellId:"AM3",originId:null},{cellId:"AM4",originId:null},{cellId:"AM5",originId:null},{cellId:"AM6",originId:null},{cellId:"AM7",originId:null},{cellId:"AM8",originId:null},{cellId:"AM9",originId:null},{cellId:"AM10",originId:null},{cellId:"AM11",originId:null},{cellId:"AM12",originId:null},{cellId:"AM13",originId:null},{cellId:"AM14",originId:null},{cellId:"AM15",originId:null},{cellId:"AM16",originId:null},{cellId:"AM17",originId:null},{cellId:"AM18",originId:null},{cellId:"AM19",originId:null},{cellId:"AM20",originId:null},{cellId:"AM21",originId:null},{cellId:"AM22",originId:null},{cellId:"AM23",originId:null},{cellId:"AM24",originId:null},{cellId:"AM25",originId:null},{cellId:"AM26",originId:null},{cellId:"AM27",originId:null},{cellId:"AM28",originId:null},{cellId:"AM29",originId:null},{cellId:"AM30",originId:null},{cellId:"AM31",originId:null},{cellId:"AM32",originId:null},{cellId:"AM33",originId:null},{cellId:"AM34",originId:null},{cellId:"AM35",originId:null},{cellId:"AM36",originId:null},{cellId:"AM37",originId:null},{cellId:"AM38",originId:null},{cellId:"AN1",originId:null},{cellId:"AN2",originId:null},{cellId:"AN3",originId:null},{cellId:"AN4",originId:null},{cellId:"AN5",originId:null},{cellId:"AN6",originId:null},{cellId:"AN7",originId:null},{cellId:"AN8",originId:null},{cellId:"AN9",originId:null},{cellId:"AN10",originId:null},{cellId:"AN11",originId:null},{cellId:"AN12",originId:null},{cellId:"AN13",originId:null},{cellId:"AN14",originId:null},{cellId:"AN15",originId:null},{cellId:"AN16",originId:"AN16",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN17",originId:"AN17",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN18",originId:"AN18",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN19",originId:"AN19",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN20",originId:"AN20",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN21",originId:"AN21",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN22",originId:"AN22",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN23",originId:"AN23",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN24",originId:"AN24",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN25",originId:"AN25",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN26",originId:"AN26",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN27",originId:"AN27",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN28",originId:"AN28",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN29",originId:"AN29",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN30",originId:"AN30",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN31",originId:"AN31",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN32",originId:"AN32",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN33",originId:"AN33",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN34",originId:"AN34",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN35",originId:"AN35",rowGrid:1,colGrid:2,fmsType:"RACK",direction:"W"},{cellId:"AN36",originId:"AN35"},{cellId:"AN37",originId:null},{cellId:"AN38",originId:null},{cellId:"AO1",originId:null},{cellId:"AO2",originId:null},{cellId:"AO3",originId:null},{cellId:"AO4",originId:null},{cellId:"AO5",originId:null},{cellId:"AO6",originId:null},{cellId:"AO7",originId:null},{cellId:"AO8",originId:null},{cellId:"AO9",originId:null},{cellId:"AO10",originId:null},{cellId:"AO11",originId:null},{cellId:"AO12",originId:null},{cellId:"AO13",originId:null},{cellId:"AO14",originId:null},{cellId:"AO15",originId:null},{cellId:"AO16",originId:null},{cellId:"AO17",originId:null},{cellId:"AO18",originId:null},{cellId:"AO19",originId:null},{cellId:"AO20",originId:null},{cellId:"AO21",originId:null},{cellId:"AO22",originId:null},{cellId:"AO23",originId:null},{cellId:"AO24",originId:null},{cellId:"AO25",originId:null},{cellId:"AO26",originId:null},{cellId:"AO27",originId:null},{cellId:"AO28",originId:null},{cellId:"AO29",originId:null},{cellId:"AO30",originId:null},{cellId:"AO31",originId:null},{cellId:"AO32",originId:null},{cellId:"AO33",originId:null},{cellId:"AO34",originId:null},{cellId:"AO35",originId:null},{cellId:"AO36",originId:null},{cellId:"AO37",originId:null},{cellId:"AO38",originId:null},{cellId:"AP1",originId:null},{cellId:"AP2",originId:null},{cellId:"AP3",originId:null},{cellId:"AP4",originId:null},{cellId:"AP5",originId:null},{cellId:"AP6",originId:null},{cellId:"AP7",originId:null},{cellId:"AP8",originId:null},{cellId:"AP9",originId:null},{cellId:"AP10",originId:null},{cellId:"AP11",originId:null},{cellId:"AP12",originId:null},{cellId:"AP13",originId:null},{cellId:"AP14",originId:null},{cellId:"AP15",originId:null},{cellId:"AP16",originId:null},{cellId:"AP17",originId:null},{cellId:"AP18",originId:null},{cellId:"AP19",originId:null},{cellId:"AP20",originId:null},{cellId:"AP21",originId:null},{cellId:"AP22",originId:null},{cellId:"AP23",originId:null},{cellId:"AP24",originId:null},{cellId:"AP25",originId:null},{cellId:"AP26",originId:null},{cellId:"AP27",originId:null},{cellId:"AP28",originId:null},{cellId:"AP29",originId:null},{cellId:"AP30",originId:null},{cellId:"AP31",originId:null},{cellId:"AP32",originId:null},{cellId:"AP33",originId:null},{cellId:"AP34",originId:null},{cellId:"AP35",originId:null},{cellId:"AP36",originId:null},{cellId:"AP37",originId:null},{cellId:"AP38",originId:null},{cellId:"AQ1",originId:null},{cellId:"AQ2",originId:null},{cellId:"AQ3",originId:null},{cellId:"AQ4",originId:null},{cellId:"AQ5",originId:null},{cellId:"AQ6",originId:null},{cellId:"AQ7",originId:null},{cellId:"AQ8",originId:null},{cellId:"AQ9",originId:null},{cellId:"AQ10",originId:null},{cellId:"AQ11",originId:null},{cellId:"AQ12",originId:null},{cellId:"AQ13",originId:null},{cellId:"AQ14",originId:null},{cellId:"AQ15",originId:null},{cellId:"AQ16",originId:null},{cellId:"AQ17",originId:null},{cellId:"AQ18",originId:null},{cellId:"AQ19",originId:null},{cellId:"AQ20",originId:null},{cellId:"AQ21",originId:null},{cellId:"AQ22",originId:null},{cellId:"AQ23",originId:null},{cellId:"AQ24",originId:null},{cellId:"AQ25",originId:null},{cellId:"AQ26",originId:null},{cellId:"AQ27",originId:null},{cellId:"AQ28",originId:null},{cellId:"AQ29",originId:null},{cellId:"AQ30",originId:null},{cellId:"AQ31",originId:null},{cellId:"AQ32",originId:null},{cellId:"AQ33",originId:null},{cellId:"AQ34",originId:null},{cellId:"AQ35",originId:null},{cellId:"AQ36",originId:null},{cellId:"AQ37",originId:null},{cellId:"AQ38",originId:null},{cellId:"AR1",originId:null},{cellId:"AR2",originId:null},{cellId:"AR3",originId:null},{cellId:"AR4",originId:null},{cellId:"AR5",originId:null},{cellId:"AR6",originId:null},{cellId:"AR7",originId:null},{cellId:"AR8",originId:null},{cellId:"AR9",originId:null},{cellId:"AR10",originId:null},{cellId:"AR11",originId:null},{cellId:"AR12",originId:null},{cellId:"AR13",originId:null},{cellId:"AR14",originId:null},{cellId:"AR15",originId:null},{cellId:"AR16",originId:null},{cellId:"AR17",originId:null},{cellId:"AR18",originId:null},{cellId:"AR19",originId:null},{cellId:"AR20",originId:null},{cellId:"AR21",originId:null},{cellId:"AR22",originId:null},{cellId:"AR23",originId:null},{cellId:"AR24",originId:null},{cellId:"AR25",originId:null},{cellId:"AR26",originId:null},{cellId:"AR27",originId:null},{cellId:"AR28",originId:null},{cellId:"AR29",originId:null},{cellId:"AR30",originId:null},{cellId:"AR31",originId:null},{cellId:"AR32",originId:null},{cellId:"AR33",originId:null},{cellId:"AR34",originId:null},{cellId:"AR35",originId:null},{cellId:"AR36",originId:null},{cellId:"AR37",originId:null},{cellId:"AR38",originId:null},{cellId:"AS1",originId:null},{cellId:"AS2",originId:null},{cellId:"AS3",originId:null},{cellId:"AS4",originId:null},{cellId:"AS5",originId:null},{cellId:"AS6",originId:null},{cellId:"AS7",originId:"AS7",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AS8",originId:"AS7"},{cellId:"AS9",originId:null},{cellId:"AS10",originId:null},{cellId:"AS11",originId:null},{cellId:"AS12",originId:null},{cellId:"AS13",originId:null},{cellId:"AS14",originId:null},{cellId:"AS15",originId:null},{cellId:"AS16",originId:null},{cellId:"AS17",originId:null},{cellId:"AS18",originId:null},{cellId:"AS19",originId:null},{cellId:"AS20",originId:null},{cellId:"AS21",originId:null},{cellId:"AS22",originId:null},{cellId:"AS23",originId:null},{cellId:"AS24",originId:"AS24",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AS25",originId:"AS24"},{cellId:"AS26",originId:null},{cellId:"AS27",originId:null},{cellId:"AS28",originId:null},{cellId:"AS29",originId:null},{cellId:"AS30",originId:null},{cellId:"AS31",originId:null},{cellId:"AS32",originId:null},{cellId:"AS33",originId:null},{cellId:"AS34",originId:null},{cellId:"AS35",originId:null},{cellId:"AS36",originId:null},{cellId:"AS37",originId:null},{cellId:"AS38",originId:null},{cellId:"AT1",originId:null},{cellId:"AT2",originId:null},{cellId:"AT3",originId:null},{cellId:"AT4",originId:null},{cellId:"AT5",originId:null},{cellId:"AT6",originId:null},{cellId:"AT7",originId:null},{cellId:"AT8",originId:null},{cellId:"AT9",originId:null},{cellId:"AT10",originId:null},{cellId:"AT11",originId:null},{cellId:"AT12",originId:null},{cellId:"AT13",originId:null},{cellId:"AT14",originId:null},{cellId:"AT15",originId:null},{cellId:"AT16",originId:null},{cellId:"AT17",originId:null},{cellId:"AT18",originId:null},{cellId:"AT19",originId:null},{cellId:"AT20",originId:null},{cellId:"AT21",originId:null},{cellId:"AT22",originId:null},{cellId:"AT23",originId:null},{cellId:"AT24",originId:null},{cellId:"AT25",originId:null},{cellId:"AT26",originId:null},{cellId:"AT27",originId:null},{cellId:"AT28",originId:null},{cellId:"AT29",originId:null},{cellId:"AT30",originId:null},{cellId:"AT31",originId:null},{cellId:"AT32",originId:null},{cellId:"AT33",originId:null},{cellId:"AT34",originId:null},{cellId:"AT35",originId:null},{cellId:"AT36",originId:null},{cellId:"AT37",originId:null},{cellId:"AT38",originId:null},{cellId:"AU1",originId:null},{cellId:"AU2",originId:null},{cellId:"AU3",originId:"AU3",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AU4",originId:null},{cellId:"AU5",originId:null},{cellId:"AU6",originId:null},{cellId:"AU7",originId:"AU7",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AU8",originId:"AU7"},{cellId:"AU9",originId:null},{cellId:"AU10",originId:null},{cellId:"AU11",originId:null},{cellId:"AU12",originId:null},{cellId:"AU13",originId:null},{cellId:"AU14",originId:null},{cellId:"AU15",originId:null},{cellId:"AU16",originId:null},{cellId:"AU17",originId:null},{cellId:"AU18",originId:null},{cellId:"AU19",originId:null},{cellId:"AU20",originId:null},{cellId:"AU21",originId:null},{cellId:"AU22",originId:null},{cellId:"AU23",originId:null},{cellId:"AU24",originId:"AU24",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AU25",originId:"AU24"},{cellId:"AU26",originId:null},{cellId:"AU27",originId:null},{cellId:"AU28",originId:null},{cellId:"AU29",originId:null},{cellId:"AU30",originId:null},{cellId:"AU31",originId:null},{cellId:"AU32",originId:null},{cellId:"AU33",originId:null},{cellId:"AU34",originId:null},{cellId:"AU35",originId:null},{cellId:"AU36",originId:null},{cellId:"AU37",originId:null},{cellId:"AU38",originId:null},{cellId:"AV1",originId:null},{cellId:"AV2",originId:null},{cellId:"AV3",originId:"AV3",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AV4",originId:null},{cellId:"AV5",originId:null},{cellId:"AV6",originId:null},{cellId:"AV7",originId:null},{cellId:"AV8",originId:null},{cellId:"AV9",originId:null},{cellId:"AV10",originId:null},{cellId:"AV11",originId:null},{cellId:"AV12",originId:null},{cellId:"AV13",originId:null},{cellId:"AV14",originId:null},{cellId:"AV15",originId:null},{cellId:"AV16",originId:null},{cellId:"AV17",originId:null},{cellId:"AV18",originId:null},{cellId:"AV19",originId:null},{cellId:"AV20",originId:null},{cellId:"AV21",originId:null},{cellId:"AV22",originId:null},{cellId:"AV23",originId:null},{cellId:"AV24",originId:null},{cellId:"AV25",originId:null},{cellId:"AV26",originId:"AV26",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AV27",originId:null},{cellId:"AV28",originId:null},{cellId:"AV29",originId:null},{cellId:"AV30",originId:null},{cellId:"AV31",originId:null},{cellId:"AV32",originId:null},{cellId:"AV33",originId:null},{cellId:"AV34",originId:null},{cellId:"AV35",originId:null},{cellId:"AV36",originId:null},{cellId:"AV37",originId:null},{cellId:"AV38",originId:null},{cellId:"AW1",originId:null},{cellId:"AW2",originId:null},{cellId:"AW3",originId:"AW3",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AW4",originId:null},{cellId:"AW5",originId:null},{cellId:"AW6",originId:null},{cellId:"AW7",originId:"AW7",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AW8",originId:"AW7"},{cellId:"AW9",originId:null},{cellId:"AW10",originId:null},{cellId:"AW11",originId:null},{cellId:"AW12",originId:null},{cellId:"AW13",originId:null},{cellId:"AW14",originId:null},{cellId:"AW15",originId:null},{cellId:"AW16",originId:null},{cellId:"AW17",originId:null},{cellId:"AW18",originId:null},{cellId:"AW19",originId:null},{cellId:"AW20",originId:null},{cellId:"AW21",originId:null},{cellId:"AW22",originId:null},{cellId:"AW23",originId:null},{cellId:"AW24",originId:"AW24",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AW25",originId:"AW24"},{cellId:"AW26",originId:"AW26",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AW27",originId:null},{cellId:"AW28",originId:null},{cellId:"AW29",originId:null},{cellId:"AW30",originId:null},{cellId:"AW31",originId:null},{cellId:"AW32",originId:null},{cellId:"AW33",originId:null},{cellId:"AW34",originId:null},{cellId:"AW35",originId:null},{cellId:"AW36",originId:null},{cellId:"AW37",originId:null},{cellId:"AW38",originId:null},{cellId:"AX1",originId:null},{cellId:"AX2",originId:null},{cellId:"AX3",originId:"AX3",rowGrid:3,colGrid:1,fmsType:"BATTERY",direction:"E"},{cellId:"AX4",originId:null},{cellId:"AX5",originId:null},{cellId:"AX6",originId:null},{cellId:"AX7",originId:null},{cellId:"AX8",originId:null},{cellId:"AX9",originId:null},{cellId:"AX10",originId:null},{cellId:"AX11",originId:null},{cellId:"AX12",originId:null},{cellId:"AX13",originId:null},{cellId:"AX14",originId:null},{cellId:"AX15",originId:null},{cellId:"AX16",originId:null},{cellId:"AX17",originId:null},{cellId:"AX18",originId:null},{cellId:"AX19",originId:null},{cellId:"AX20",originId:null},{cellId:"AX21",originId:null},{cellId:"AX22",originId:null},{cellId:"AX23",originId:null},{cellId:"AX24",originId:null},{cellId:"AX25",originId:null},{cellId:"AX26",originId:"AW26"},{cellId:"AX27",originId:null},{cellId:"AX28",originId:null},{cellId:"AX29",originId:null},{cellId:"AX30",originId:null},{cellId:"AX31",originId:null},{cellId:"AX32",originId:null},{cellId:"AX33",originId:null},{cellId:"AX34",originId:null},{cellId:"AX35",originId:null},{cellId:"AX36",originId:null},{cellId:"AX37",originId:null},{cellId:"AX38",originId:null},{cellId:"AY1",originId:null},{cellId:"AY2",originId:null},{cellId:"AY3",originId:"AX3"},{cellId:"AY4",originId:null},{cellId:"AY5",originId:null},{cellId:"AY6",originId:null},{cellId:"AY7",originId:"AY7",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AY8",originId:"AY7"},{cellId:"AY9",originId:null},{cellId:"AY10",originId:null},{cellId:"AY11",originId:null},{cellId:"AY12",originId:null},{cellId:"AY13",originId:null},{cellId:"AY14",originId:null},{cellId:"AY15",originId:null},{cellId:"AY16",originId:null},{cellId:"AY17",originId:null},{cellId:"AY18",originId:null},{cellId:"AY19",originId:null},{cellId:"AY20",originId:null},{cellId:"AY21",originId:null},{cellId:"AY22",originId:null},{cellId:"AY23",originId:null},{cellId:"AY24",originId:"AY24",rowGrid:1,colGrid:2,fmsType:"UPS",direction:"N"},{cellId:"AY25",originId:"AY24"},{cellId:"AY26",originId:"AW26"},{cellId:"AY27",originId:null},{cellId:"AY28",originId:null},{cellId:"AY29",originId:null},{cellId:"AY30",originId:null},{cellId:"AY31",originId:null},{cellId:"AY32",originId:null},{cellId:"AY33",originId:null},{cellId:"AY34",originId:null},{cellId:"AY35",originId:null},{cellId:"AY36",originId:null},{cellId:"AY37",originId:null},{cellId:"AY38",originId:null},{cellId:"AZ1",originId:null},{cellId:"AZ2",originId:null},{cellId:"AZ3",originId:"AX3"},{cellId:"AZ4",originId:null},{cellId:"AZ5",originId:null},{cellId:"AZ6",originId:null},{cellId:"AZ7",originId:null},{cellId:"AZ8",originId:null},{cellId:"AZ9",originId:null},{cellId:"AZ10",originId:null},{cellId:"AZ11",originId:null},{cellId:"AZ12",originId:null},{cellId:"AZ13",originId:null},{cellId:"AZ14",originId:null},{cellId:"AZ15",originId:null},{cellId:"AZ16",originId:null},{cellId:"AZ17",originId:null},{cellId:"AZ18",originId:null},{cellId:"AZ19",originId:null},{cellId:"AZ20",originId:null},{cellId:"AZ21",originId:null},{cellId:"AZ22",originId:null},{cellId:"AZ23",originId:null},{cellId:"AZ24",originId:null},{cellId:"AZ25",originId:null},{cellId:"AZ26",originId:null},{cellId:"AZ27",originId:null},{cellId:"AZ28",originId:null},{cellId:"AZ29",originId:null},{cellId:"AZ30",originId:null},{cellId:"AZ31",originId:null},{cellId:"AZ32",originId:null},{cellId:"AZ33",originId:null},{cellId:"AZ34",originId:null},{cellId:"AZ35",originId:null},{cellId:"AZ36",originId:null},{cellId:"AZ37",originId:null},{cellId:"AZ38",originId:null},{cellId:"BA1",originId:null},{cellId:"BA2",originId:null},{cellId:"BA3",originId:null},{cellId:"BA4",originId:null},{cellId:"BA5",originId:null},{cellId:"BA6",originId:null},{cellId:"BA7",originId:null},{cellId:"BA8",originId:null},{cellId:"BA9",originId:null},{cellId:"BA10",originId:null},{cellId:"BA11",originId:null},{cellId:"BA12",originId:null},{cellId:"BA13",originId:null},{cellId:"BA14",originId:null},{cellId:"BA15",originId:null},{cellId:"BA16",originId:null},{cellId:"BA17",originId:null},{cellId:"BA18",originId:null},{cellId:"BA19",originId:null},{cellId:"BA20",originId:null},{cellId:"BA21",originId:null},{cellId:"BA22",originId:null},{cellId:"BA23",originId:null},{cellId:"BA24",originId:null},{cellId:"BA25",originId:null},{cellId:"BA26",originId:null},{cellId:"BA27",originId:null},{cellId:"BA28",originId:null},{cellId:"BA29",originId:null},{cellId:"BA30",originId:null},{cellId:"BA31",originId:null},{cellId:"BA32",originId:null},{cellId:"BA33",originId:null},{cellId:"BA34",originId:null},{cellId:"BA35",originId:null},{cellId:"BA36",originId:null},{cellId:"BA37",originId:null},{cellId:"BA38",originId:null},{cellId:"BB1",originId:null},{cellId:"BB2",originId:null},{cellId:"BB3",originId:null},{cellId:"BB4",originId:null},{cellId:"BB5",originId:null},{cellId:"BB6",originId:null},{cellId:"BB7",originId:null},{cellId:"BB8",originId:null},{cellId:"BB9",originId:null},{cellId:"BB10",originId:null},{cellId:"BB11",originId:null},{cellId:"BB12",originId:null},{cellId:"BB13",originId:null},{cellId:"BB14",originId:null},{cellId:"BB15",originId:null},{cellId:"BB16",originId:null},{cellId:"BB17",originId:null},{cellId:"BB18",originId:null},{cellId:"BB19",originId:null},{cellId:"BB20",originId:null},{cellId:"BB21",originId:null},{cellId:"BB22",originId:null},{cellId:"BB23",originId:null},{cellId:"BB24",originId:null},{cellId:"BB25",originId:null},{cellId:"BB26",originId:null},{cellId:"BB27",originId:null},{cellId:"BB28",originId:null},{cellId:"BB29",originId:null},{cellId:"BB30",originId:null},{cellId:"BB31",originId:null},{cellId:"BB32",originId:null},{cellId:"BB33",originId:null},{cellId:"BB34",originId:null},{cellId:"BB35",originId:null},{cellId:"BB36",originId:null},{cellId:"BB37",originId:null},{cellId:"BB38",originId:null}],Ha={maxRow:54,maxCol:38,cellInfos:$I},ZI=["A8_A9","B8_B9","C8_C9","D8_D9","E8_E9","F8_F9","G8_G9","H8_H9","I8_I9","J8_J9","K8_K9","K1_L1","K2_L2","K3_L3","K4_L4","K5_L5","K6_L6","K7_L7","K8_L8","O1_P1","O2_P2","O3_P3","O4_P4","O5_P5","O6_P6","O7_P7","O8_P8","P8_P9","Q8_Q9","R8_R9","S8_S9","T8_T9","U8_U9","V8_V9","W8_W9","X8_X9","Y8_Y9","Z8_Z9","AA8_AA9","AB8_AB9","AC8_AC9","AC1_AD1","AC2_AD2","AC3_AD3","AC4_AD4","AC5_AD5","AC6_AD6","AC7_AD7","AC8_AD8","AG1_AH1","AG2_AH2","AG3_AH3","AG4_AH4","AG5_AH5","AG6_AH6","AG7_AH7","AG8_AH8","AH8_AH9","AI8_AI9","AJ8_AJ9","AK8_AK9","AL8_AL9","AM8_AM9","AN8_AN9","AO8_AO9","AP8_AP9","AP1_AQ1","AP2_AQ2","AP3_AQ3","AP4_AQ4","AP5_AQ5","AP6_AQ6","AP7_AQ7","AP8_AQ8","AP9_AQ9","AP10_AQ10","AP11_AQ11","AP12_AQ12","AP13_AQ13","AP14_AQ14","AP15_AQ15","AP16_AQ16","AP17_AQ17","AP18_AQ18","AP19_AQ19","AP20_AQ20","AP21_AQ21","AP22_AQ22","AP23_AQ23","AP24_AQ24","AP25_AQ25","AP26_AQ26","AP27_AQ27","AP28_AQ28","AP29_AQ29","AP30_AQ30","AP31_AQ31","AP32_AQ32","AP33_AQ33","AP34_AQ34","AP35_AQ35","AP36_AQ36","AP37_AQ37","AP38_AQ38","AT19_AT20","AU19_AU20","AV19_AV20","AW19_AW20","AX19_AX20","AY19_AY20","AZ19_AZ20","BA19_BA20","BB19_BB20","A12_A13","B12_B13","C12_C13","D12_D13","E12_E13","F12_F13","G12_G13","H12_H13","I12_I13","J12_J13","K12_K13","L12_L13","M12_M13","N12_N13","O12_O13","P12_P13","Q12_Q13","R12_R13","S12_S13","T12_T13","U12_U13","V12_V13","W12_W13","X12_X13","Y12_Y13","Z12_Z13","AA12_AA13","AB12_AB13","AC12_AC13","AD12_AD13","AE12_AE13","AF12_AF13","AG12_AG13","AH12_AH13","AI12_AI13","AJ12_AJ13","AK12_AK13","AL12_AL13","AM12_AM13","AN12_AN13","AO12_AO13","AP12_AP13","P5_P6","Q5_Q6","R5_R6","S5_S6","T5_T6","U5_U6","V5_V6","W5_W6","X3_X4","Y3_Y4","Z3_Z4","AA3_AA4","AB3_AB4","AC3_AC4","W4_X4","W5_X5","W6_X6","W7_X7","W8_X8"];/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class rn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),rn.nextNameID=rn.nextNameID||0,this.$name.id=`lil-gui-name-${++rn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class JI extends rn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fo(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const QI={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Fo,toHexString:Fo},lr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},e_={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=lr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return lr.toHexString(i)}},t_={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=lr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return lr.toHexString(i)}},n_=[QI,lr,e_,t_];function i_(r){return n_.find(e=>e.match(r))}class r_ extends rn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=i_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Fo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ws extends rn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class s_ extends rn{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+M),this.$input.value=this.getValue())},i=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,l,a,c,d,u;const h=5,p=M=>{l=M.clientX,a=c=M.clientY,o=!0,d=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",I)},g=M=>{if(o){const y=M.clientX-l,x=M.clientY-a;Math.abs(x)>h?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>h&&I()}if(!o){const y=M.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(M),d+u>this._max?u=this._max-d:d+u<this._min&&(u=this._min-d),this._snapClampSetValue(d+u)}c=M.clientY},I=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",I)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,M,y,x,P)=>(f-M)/(y-M)*(P-x)+x,t=f=>{const M=this.$slider.getBoundingClientRect();let y=e(f,M.left,M.right,this._min,this._max);this._snapClampSetValue(y)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,l,a;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},d=f=>{f.touches.length>1||(this._hasScrollBar?(l=f.touches[0].clientX,a=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=f=>{if(o){const M=f.touches[0].clientX-l,y=f.touches[0].clientY-a;Math.abs(M)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else f.preventDefault(),t(f.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),g=400;let I;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(I),I=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class o_ extends rn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class l_ extends rn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var a_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function c_(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Va=!1;class ol{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!Va&&l&&(c_(a_),Va=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new o_(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new s_(this,e,t,n,i,s);case"boolean":return new JI(this,e,t);case"string":return new l_(this,e,t);case"function":return new Ws(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new r_(this,e,t,n)}addFolder(e){const t=new ol({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ws||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ws)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const ka={backgroundColor:14869218},za={opacity:.5,color:"#e2e2e2"},Oo=new jI;document.body.appendChild(Oo.dom);const d_=document.querySelector("#app"),u_={RACK:"rack",TILE:"tile",WALL:"wall",CRAC:"crac",UPS:"ups",BATTERY:"battery"};class h_{constructor(){Tn(this,"_renderer");Tn(this,"_container");Tn(this,"_scene");Tn(this,"_camera");Tn(this,"_modelMap",{});Tn(this,"_deviceTextureMap",{});Tn(this,"_container",d_);this._setup(),this._render()}async _setup(){this._setupScene(),this._setupRenderer(),this._setupCamera(),this._setupLight(),this._setupResize(),this._setupControls(),await this._loadModels(),this._addModel(),this._renderer.render(this._scene,this._camera)}_setupScene(){this._scene=new Au,this._scene.background=new we(ka.backgroundColor)}updateBackgroundColor(e){this._scene.background.set(e)}_setupRenderer(){this._renderer=new jg({antialias:!0}),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement)}_setupCamera(){const{clientWidth:e,clientHeight:t}=this._container;this._camera=new Tt(75,e/t,.1,1e3),this._camera.position.x=0,this._camera.position.z=0,this._camera.position.y=20,this._camera.lookAt(0,4,4)}_setupLight(){const t=new Ju(16777215,2);this._scene.add(t)}_setupResize(){const{clientWidth:e,clientHeight:t}=this._container;this._renderer.setSize(e,t),this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),window.addEventListener("resize",this._setupResize.bind(this))}_setupControls(){new LI(this._camera,this._container)}_setupHelper(){const e=new dh(100);this._scene.add(e)}async _render(){Oo.begin(),this._renderer.render(this._scene,this._camera),Oo.end(),requestAnimationFrame(this._render.bind(this))}async _loadModels(){const e=new $g,t=["rack","tile","wall","crac","ups","battery"],n=await Promise.all(t.map(i=>{const s=`/3d_demo/${i}.glb`;return e.loadAsync(s)}));t.forEach((i,s)=>{this._modelMap[i]=n[s].scene})}_addModel(){this.mapRender(),this.wallRender(),this.addGUI()}addGUI(){const e=new ol;e.addFolder("배경 색상").addColor(ka,"backgroundColor").onChange(i=>{this._scene.background.set(i)});const n=e.addFolder("벽 색상");n.add(za,"opacity",0,1,.01).onChange(i=>{this._modelMap.wall.children[0].material.transparent=!0,this._modelMap.wall.children[0].material.opacity=i}),n.addColor(za,"color").onChange(i=>{this._modelMap.wall.children[0].material.color.set(i)})}wallRender(){const{maxRow:e,maxCol:t}=Ha,n=this._modelMap.tile,{x:i}=this.getObjectSize(n),s=-1*(e/2)*i,o=-1*(t/2)*i;for(const l of ZI){const[a,c]=l.split("_"),{row:d,col:u}=this.cellIdToRowCol(a),{row:h,col:p}=this.cellIdToRowCol(c);if(u===p){const g=s+u*i,I=o+d*i+i/2,m=this._modelMap.wall.clone();m.scale.set(1,1.2,1),m.position.set(g,0,I),m.rotation.y=Math.PI/2,this._scene.add(m)}if(d===h){const g=s+u*i+i/2,I=o+d*i,m=this._modelMap.wall.clone();m.scale.set(1,1.2,1),m.position.set(g,0,I),this._scene.add(m)}}}getObjectSize(e){const t=new ln().setFromObject(e),n=new C;return t.getSize(n),n}mapRender(){const{cellInfos:e,maxRow:t,maxCol:n}=Ha,i=this._modelMap.tile,{x:s}=this.getObjectSize(i),o=-1*(t/2)*s,l=-1*(n/2)*s;for(let a=0;a<e.length;a+=1){const c=e[a],{cellId:d,originId:u}=c,{row:h,col:p}=this.cellIdToRowCol(d),g=o+p*s,I=l+h*s,m=i.clone();if(m.position.set(g,0,I),this._scene.add(m),d!==u)continue;const{fmsType:f,direction:M}=c,y=this._modelMap[u_[f]].clone();y.rotation.y=this.directionToRotation(M),y.position.set(g,0,I),this._scene.add(y)}}directionToRotation(e){if(e==="N")return Math.PI*3/2;if(e==="S")return Math.PI/2;if(e==="E")return Math.PI;if(e==="W")return 0}cellIdToRowCol(e){const t=e.match(/^([A-Z]+)(\d+)$/);if(!t)return null;const[,n,i]=t;let s=0;for(let o=0;o<n.length;o+=1)s=s*26+(n.charCodeAt(o)-64);return{col:s,row:Number(i)}}}new h_;
