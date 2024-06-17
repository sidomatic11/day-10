(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="164",qv=0,wd=1,Yv=2,Jp=1,$v=2,as=3,zs=0,Rn=1,Gi=2,Us=0,oo=1,bd=2,Rd=3,Cd=4,jv=5,hr=100,Zv=101,Kv=102,Jv=103,Qv=104,tx=200,ex=201,nx=202,ix=203,bu=204,Ru=205,sx=206,rx=207,ox=208,ax=209,cx=210,lx=211,ux=212,hx=213,dx=214,fx=0,px=1,mx=2,yc=3,gx=4,_x=5,vx=6,xx=7,$c=0,yx=1,Mx=2,mi=0,Qp=1,tm=2,em=3,nm=4,Sx=5,im=6,Tx=7,sm=300,xo=301,yo=302,Cu=303,Lu=304,jc=306,Pu=1e3,pr=1001,Iu=1002,Mn=1003,Ex=1004,za=1005,wi=1006,Sl=1007,Cs=1008,Bs=1009,Ax=1010,Nx=1011,rm=1012,om=1013,Mo=1014,hs=1015,wa=1016,am=1017,cm=1018,ba=1020,wx=35902,bx=1021,Rx=1022,qi=1023,Cx=1024,Lx=1025,ao=1026,fa=1027,Px=1028,lm=1029,Ix=1030,um=1031,hm=1033,Tl=33776,El=33777,Al=33778,Nl=33779,Ld=35840,Pd=35841,Id=35842,Dd=35843,Od=36196,Ud=37492,Fd=37496,Vd=37808,zd=37809,Bd=37810,kd=37811,Hd=37812,Gd=37813,Wd=37814,Xd=37815,qd=37816,Yd=37817,$d=37818,jd=37819,Zd=37820,Kd=37821,wl=36492,Jd=36494,Qd=36495,Dx=36283,tf=36284,ef=36285,nf=36286,Ox=3200,Ux=3201,Er=0,dm=1,Rs="",Ai="srgb",Oi="srgb-linear",Sh="display-p3",Zc="display-p3-linear",Mc="linear",Ne="srgb",Sc="rec709",Tc="p3",Or=7680,sf=519,Fx=512,fm=513,Vx=514,pm=515,zx=516,Bx=517,kx=518,Hx=519,Ec=35044,Du=35048,rf="300 es",Ri=2e3,So=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let of=1234567;const ra=Math.PI/180,To=180/Math.PI;function ds(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function vn(s,t,e){return Math.max(t,Math.min(e,s))}function Th(s,t){return(s%t+t)%t}function Gx(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wx(s,t,e){return s!==t?(e-s)/(t-s):0}function oa(s,t,e){return(1-e)*s+e*t}function Xx(s,t,e,n){return oa(s,t,1-Math.exp(-e*n))}function qx(s,t=1){return t-Math.abs(Th(s,t*2)-t)}function Yx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $x(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Zx(s,t){return s+Math.random()*(t-s)}function Kx(s){return s*(.5-Math.random())}function Jx(s){s!==void 0&&(of=s);let t=of+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qx(s){return s*ra}function ty(s){return s*To}function ey(s){return(s&s-1)===0&&s!==0}function ny(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function iy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sy(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const mm={DEG2RAD:ra,RAD2DEG:To,generateUUID:ds,clamp:vn,euclideanModulo:Th,mapLinear:Gx,inverseLerp:Wx,lerp:oa,damp:Xx,pingpong:qx,smoothstep:Yx,smootherstep:$x,randInt:jx,randFloat:Zx,randFloatSpread:Kx,seededRandom:Jx,degToRad:Qx,radToDeg:ty,isPowerOfTwo:ey,ceilPowerOfTwo:ny,floorPowerOfTwo:iy,setQuaternionFromProperEuler:sy,normalize:fe,denormalize:bi};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],v=i[4],S=i[7],w=i[2],N=i[5],E=i[8];return r[0]=o*g+a*y+c*w,r[3]=o*p+a*v+c*N,r[6]=o*m+a*S+c*E,r[1]=l*g+u*y+h*w,r[4]=l*p+u*v+h*N,r[7]=l*m+u*S+h*E,r[2]=d*g+f*y+_*w,r[5]=d*p+f*v+_*N,r[8]=d*m+f*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,_=e*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*l-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(u*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bl.makeScale(t,e)),this}rotate(t){return this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new Ht;function gm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ry(){const s=Ac("canvas");return s.style.display="block",s}const af={};function _m(s){s in af||(af[s]=!0,console.warn(s))}const cf=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lf=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ba={[Oi]:{transfer:Mc,primaries:Sc,toReference:s=>s,fromReference:s=>s},[Ai]:{transfer:Ne,primaries:Sc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zc]:{transfer:Mc,primaries:Tc,toReference:s=>s.applyMatrix3(lf),fromReference:s=>s.applyMatrix3(cf)},[Sh]:{transfer:Ne,primaries:Tc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(lf),fromReference:s=>s.applyMatrix3(cf).convertLinearToSRGB()}},oy=new Set([Oi,Zc]),me={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!oy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ba[t].toReference,i=Ba[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ba[s].primaries},getTransfer:function(s){return s===Rs?Mc:Ba[s].transfer}};function co(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ur;class ay{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ur===void 0&&(Ur=Ac("canvas")),Ur.width=t.width,Ur.height=t.height;const n=Ur.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ac("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=co(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(co(e[n]/255)*255):e[n]=co(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cy=0;class vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cl(i[o].image)):r.push(Cl(i[o]))}else r=Cl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ay.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;class Cn extends Ys{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=pr,i=pr,r=wi,o=Cs,a=qi,c=Bs,l=Cn.DEFAULT_ANISOTROPY,u=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=ds(),this.name="",this.source=new vm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pu:t.x=t.x-Math.floor(t.x);break;case pr:t.x=t.x<0?0:1;break;case Iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pu:t.y=t.y-Math.floor(t.y);break;case pr:t.y=t.y<0?0:1;break;case Iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=sm;Cn.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(f+1)/2,w=(m+1)/2,N=(u+d)/4,E=(h+g)/4,L=(_+p)/4;return v>S&&v>w?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=N/n,r=E/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=N/i,r=L/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=L/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ks extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends ks{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eh extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uy extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let p=1-a;const m=c*d+l*f+u*_+h*g,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),N=Math.atan2(w,m*y);p=Math.sin(p*N)/w,a=Math.sin(a*N)/w}const S=a*y;if(c=c*p+d*S,l=l*p+f*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+u*h+c*f-l*d,t[e+1]=c*_+u*d+l*h-a*f,t[e+2]=l*_+u*f+a*d-c*h,t[e+3]=u*_-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(vn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new F,uf=new Do;class Ra{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(t.matrixWorld),this.union(ka)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Ha.subVectors(this.max,Yo),Fr.subVectors(t.a,Yo),Vr.subVectors(t.b,Yo),zr.subVectors(t.c,Yo),Ms.subVectors(Vr,Fr),Ss.subVectors(zr,Vr),Zs.subVectors(Fr,zr);let e=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Zs.z,Zs.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Zs.z,0,-Zs.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Zs.y,Zs.x,0];return!Pl(e,Fr,Vr,zr,Ha)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,Fr,Vr,zr,Ha))?!1:(Ga.crossVectors(Ms,Ss),e=[Ga.x,Ga.y,Ga.z],Pl(e,Fr,Vr,zr,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const es=[new F,new F,new F,new F,new F,new F,new F,new F],Si=new F,ka=new Ra,Fr=new F,Vr=new F,zr=new F,Ms=new F,Ss=new F,Zs=new F,Yo=new F,Ha=new F,Ga=new F,Ks=new F;function Pl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ks.fromArray(s,r);const a=i.x*Math.abs(Ks.x)+i.y*Math.abs(Ks.y)+i.z*Math.abs(Ks.z),c=t.dot(Ks),l=e.dot(Ks),u=n.dot(Ks);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const hy=new Ra,$o=new F,Il=new F;class Ah{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hy.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);const e=$o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(Il)),this.expandByPoint($o.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ns=new F,Dl=new F,Wa=new F,Ts=new F,Ol=new F,Xa=new F,Ul=new F;class xm{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dl.copy(t).add(e).multiplyScalar(.5),Wa.copy(e).sub(t).normalize(),Ts.copy(this.origin).sub(Dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wa),a=Ts.dot(this.direction),c=-Ts.dot(Wa),l=Ts.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dl).addScaledVector(Wa,d),f}intersectSphere(t,e){ns.subVectors(t.center,this.origin);const n=ns.dot(this.direction),i=ns.dot(ns)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,i,r){Ol.subVectors(e,t),Xa.subVectors(n,t),Ul.crossVectors(Ol,Xa);let o=this.direction.dot(Ul),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,t);const c=a*this.direction.dot(Xa.crossVectors(Ts,Xa));if(c<0)return null;const l=a*this.direction.dot(Ol.cross(Ts));if(l<0||c+l>o)return null;const u=-a*Ts.dot(Ul);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,r,o,a,c,l,u,h,d,f,_,g,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,d,f,_,g,p)}set(t,e,n,i,r,o,a,c,l,u,h,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Br.setFromMatrixColumn(t,0).length(),r=1/Br.setFromMatrixColumn(t,1).length(),o=1/Br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;e[0]=d-g*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*h,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dy,t,fy)}lookAt(t,e,n){const i=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Es.crossVectors(n,qn),Es.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Es.crossVectors(n,qn)),Es.normalize(),qa.crossVectors(qn,Es),i[0]=Es.x,i[4]=qa.x,i[8]=qn.x,i[1]=Es.y,i[5]=qa.y,i[9]=qn.y,i[2]=Es.z,i[6]=qa.z,i[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],w=n[15],N=i[0],E=i[4],L=i[8],x=i[12],M=i[1],V=i[5],q=i[9],P=i[13],K=i[2],j=i[6],it=i[10],st=i[14],W=i[3],ut=i[7],ct=i[11],St=i[15];return r[0]=o*N+a*M+c*K+l*W,r[4]=o*E+a*V+c*j+l*ut,r[8]=o*L+a*q+c*it+l*ct,r[12]=o*x+a*P+c*st+l*St,r[1]=u*N+h*M+d*K+f*W,r[5]=u*E+h*V+d*j+f*ut,r[9]=u*L+h*q+d*it+f*ct,r[13]=u*x+h*P+d*st+f*St,r[2]=_*N+g*M+p*K+m*W,r[6]=_*E+g*V+p*j+m*ut,r[10]=_*L+g*q+p*it+m*ct,r[14]=_*x+g*P+p*st+m*St,r[3]=y*N+v*M+S*K+w*W,r[7]=y*E+v*V+S*j+w*ut,r[11]=y*L+v*q+S*it+w*ct,r[15]=y*x+v*P+S*st+w*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+p*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=h*p*l-g*d*l+g*c*f-a*p*f-h*c*m+a*d*m,v=_*d*l-u*p*l-_*c*f+o*p*f+u*c*m-o*d*m,S=u*g*l-_*h*l+_*a*f-o*g*f-u*a*m+o*h*m,w=_*h*c-u*g*c-_*a*d+o*g*d+u*a*p-o*h*p,N=e*y+n*v+i*S+r*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/N;return t[0]=y*E,t[1]=(g*d*r-h*p*r-g*i*f+n*p*f+h*i*m-n*d*m)*E,t[2]=(a*p*r-g*c*r+g*i*l-n*p*l-a*i*m+n*c*m)*E,t[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*E,t[4]=v*E,t[5]=(u*p*r-_*d*r+_*i*f-e*p*f-u*i*m+e*d*m)*E,t[6]=(_*c*r-o*p*r-_*i*l+e*p*l+o*i*m-e*c*m)*E,t[7]=(o*d*r-u*c*r+u*i*l-e*d*l-o*i*f+e*c*f)*E,t[8]=S*E,t[9]=(_*h*r-u*g*r-_*n*f+e*g*f+u*n*m-e*h*m)*E,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*m+e*a*m)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*E,t[12]=w*E,t[13]=(u*g*i-_*h*i+_*n*d-e*g*d-u*n*p+e*h*p)*E,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*p-e*a*p)*E,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,_=r*h,g=o*u,p=o*h,m=a*h,y=c*l,v=c*u,S=c*h,w=n.x,N=n.y,E=n.z;return i[0]=(1-(g+m))*w,i[1]=(f+S)*w,i[2]=(_-v)*w,i[3]=0,i[4]=(f-S)*N,i[5]=(1-(d+m))*N,i[6]=(p+y)*N,i[7]=0,i[8]=(_+v)*E,i[9]=(p-y)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Br.set(i[0],i[1],i[2]).length();const o=Br.set(i[4],i[5],i[6]).length(),a=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ti.copy(this);const l=1/r,u=1/o,h=1/a;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,e.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ri){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(a===Ri)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===So)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ri){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*l,f=(n+i)*u;let _,g;if(a===Ri)_=(o+r)*h,g=-2*h;else if(a===So)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Br=new F,Ti=new we,dy=new F(0,0,0),fy=new F(1,1,1),Es=new F,qa=new F,qn=new F,hf=new we,df=new Do;class vi{constructor(t=0,e=0,n=0,i=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return df.setFromEuler(this),this.setFromQuaternion(df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let py=0;const ff=new F,kr=new Do,is=new we,Ya=new F,jo=new F,my=new F,gy=new Do,pf=new F(1,0,0),mf=new F(0,1,0),gf=new F(0,0,1),_f={type:"added"},_y={type:"removed"},Hr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class Xe extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new F,e=new vi,n=new Do,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Ht}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ya.copy(t):Ya.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(jo,Ya,this.up):is.lookAt(Ya,jo,this.up),this.quaternion.setFromRotationMatrix(is),i&&(is.extractRotation(i.matrixWorld),kr.setFromRotationMatrix(is),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_f),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_y),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_f),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,my),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,gy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new F(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new F,ss=new F,Vl=new F,rs=new F,Gr=new F,Wr=new F,vf=new F,zl=new F,Bl=new F,kl=new F;class Wi{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ei.subVectors(t,e),i.cross(Ei);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ei.subVectors(i,e),ss.subVectors(n,e),Vl.subVectors(t,e);const o=Ei.dot(Ei),a=Ei.dot(ss),c=Ei.dot(Vl),l=ss.dot(ss),u=ss.dot(Vl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,rs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rs.x),c.addScaledVector(o,rs.y),c.addScaledVector(a,rs.z),c)}static isFrontFacing(t,e,n,i){return Ei.subVectors(n,e),ss.subVectors(t,e),Ei.cross(ss).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Ei.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Wi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Gr.subVectors(i,n),Wr.subVectors(r,n),zl.subVectors(t,n);const c=Gr.dot(zl),l=Wr.dot(zl);if(c<=0&&l<=0)return e.copy(n);Bl.subVectors(t,i);const u=Gr.dot(Bl),h=Wr.dot(Bl);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Gr,o);kl.subVectors(t,r);const f=Gr.dot(kl),_=Wr.dot(kl);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Wr,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return vf.subVectors(r,i),a=(h-u)/(h-u+(f-_)),e.copy(i).addScaledVector(vf,a);const m=1/(p+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Th(t,1),e=vn(e,0,1),n=vn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ai){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){const n=ym[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}copyLinearToSRGB(t){return this.r=Rl(t.r),this.g=Rl(t.g),this.b=Rl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return me.fromWorkingColorSpace(_n.copy(this),t),Math.round(vn(_n.r*255,0,255))*65536+Math.round(vn(_n.g*255,0,255))*256+Math.round(vn(_n.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Ai){me.fromWorkingColorSpace(_n.copy(this),t);const e=_n.r,n=_n.g,i=_n.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(As),this.setHSL(As.h+t,As.s+e,As.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(As),t.getHSL($a);const n=oa(As.h,$a.h,e),i=oa(As.s,$a.s,e),r=oa(As.l,$a.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ut;Ut.NAMES=ym;let vy=0;class ri extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=oo,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Ru,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(n.blending=this.blending),this.side!==zs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ru&&(n.blendDst=this.blendDst),this.blendEquation!==hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kc extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new F,ja=new Ct;class gi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return _m("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}}class Mm extends gi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sm extends gi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _i extends gi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xy=0;const ci=new we,Gl=new Xe,Xr=new F,Yn=new Ra,Zo=new Ra,nn=new F;class vs extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?Sm:Mm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,n){return ci.makeTranslation(t,e,n),this.applyMatrix4(ci),this}scale(t,e,n){return ci.makeScale(t,e,n),this.applyMatrix4(ci),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _i(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ah);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Yn.min,Zo.min),Yn.expandByPoint(nn),nn.addVectors(Yn.max,Zo.max),Yn.expandByPoint(nn)):(Yn.expandByPoint(Zo.min),Yn.expandByPoint(Zo.max))}Yn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(t,l),nn.add(Xr)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new F,c[L]=new F;const l=new F,u=new F,h=new F,d=new Ct,f=new Ct,_=new Ct,g=new F,p=new F;function m(L,x,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,x),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const V=1/(f.x*_.y-_.x*f.y);isFinite(V)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(V),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(V),a[L].add(g),a[x].add(g),a[M].add(g),c[L].add(p),c[x].add(p),c[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,x=y.length;L<x;++L){const M=y[L],V=M.start,q=M.count;for(let P=V,K=V+q;P<K;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const v=new F,S=new F,w=new F,N=new F;function E(L){w.fromBufferAttribute(i,L),N.copy(w);const x=a[L];v.copy(x),v.sub(w.multiplyScalar(w.dot(x))).normalize(),S.crossVectors(N,x);const V=S.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,V)}for(let L=0,x=y.length;L<x;++L){const M=y[L],V=M.start,q=M.count;for(let P=V,K=V+q;P<K;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let m=0;m<u;m++)d[_++]=l[f++]}return new gi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vs,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new we,Js=new xm,Za=new Ah,yf=new F,qr=new F,Yr=new F,$r=new F,Wl=new F,Ka=new F,Ja=new Ct,Qa=new Ct,tc=new Ct,Mf=new F,Sf=new F,Tf=new F,ec=new F,nc=new F;class di extends Xe{constructor(t=new vs,e=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Wl.fromBufferAttribute(h,t),o?Ka.addScaledVector(Wl,u):Ka.addScaledVector(Wl.sub(e),u))}e.add(Ka)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(Za.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Za,yf)===null||Js.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(xf.copy(r).invert(),Js.copy(t.ray).applyMatrix4(xf),!(n.boundingBox!==null&&Js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Js)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const N=a.getX(S),E=a.getX(S+1),L=a.getX(S+2);i=ic(this,m,t,n,l,u,h,N,E,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=ic(this,o,t,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const N=S,E=S+1,L=S+2;i=ic(this,m,t,n,l,u,h,N,E,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=p,v=p+1,S=p+2;i=ic(this,o,t,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function yy(s,t,e,n,i,r,o,a){let c;if(t.side===Rn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===zs,a),c===null)return null;nc.copy(a),nc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(nc);return l<e.near||l>e.far?null:{distance:l,point:nc.clone(),object:s}}function ic(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,qr),s.getVertexPosition(c,Yr),s.getVertexPosition(l,$r);const u=yy(s,t,e,n,qr,Yr,$r,ec);if(u){i&&(Ja.fromBufferAttribute(i,a),Qa.fromBufferAttribute(i,c),tc.fromBufferAttribute(i,l),u.uv=Wi.getInterpolation(ec,qr,Yr,$r,Ja,Qa,tc,new Ct)),r&&(Ja.fromBufferAttribute(r,a),Qa.fromBufferAttribute(r,c),tc.fromBufferAttribute(r,l),u.uv1=Wi.getInterpolation(ec,qr,Yr,$r,Ja,Qa,tc,new Ct)),o&&(Mf.fromBufferAttribute(o,a),Sf.fromBufferAttribute(o,c),Tf.fromBufferAttribute(o,l),u.normal=Wi.getInterpolation(ec,qr,Yr,$r,Mf,Sf,Tf,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new F,materialIndex:0};Wi.getNormal(qr,Yr,$r,h.normal),u.face=h}return u}class Oo extends vs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _i(l,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(h,2));function _(g,p,m,y,v,S,w,N,E,L,x){const M=S/E,V=w/L,q=S/2,P=w/2,K=N/2,j=E+1,it=L+1;let st=0,W=0;const ut=new F;for(let ct=0;ct<it;ct++){const St=ct*V-P;for(let Vt=0;Vt<j;Vt++){const he=Vt*M-q;ut[g]=he*y,ut[p]=St*v,ut[m]=K,l.push(ut.x,ut.y,ut.z),ut[g]=0,ut[p]=0,ut[m]=N>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Vt/E),h.push(1-ct/L),st+=1}}for(let ct=0;ct<L;ct++)for(let St=0;St<E;St++){const Vt=d+St+j*ct,he=d+St+j*(ct+1),Y=d+(St+1)+j*(ct+1),lt=d+(St+1)+j*ct;c.push(Vt,he,lt),c.push(he,Y,lt),W+=6}a.addGroup(f,W,x),f+=W,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function wn(s){const t={};for(let e=0;e<s.length;e++){const n=Eo(s[e]);for(const i in n)t[i]=n[i]}return t}function My(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tm(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Sy={clone:Eo,merge:wn};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=My(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Em extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new F,Ef=new Ct,Af=new Ct;class On extends Em{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,e){return this.getViewBounds(t,Ef,Af),e.subVectors(Af,Ef)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const jr=-90,Zr=1;class Ay extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(jr,Zr,t,e);i.layers=this.layers,this.add(i);const r=new On(jr,Zr,t,e);r.layers=this.layers,this.add(r);const o=new On(jr,Zr,t,e);o.layers=this.layers,this.add(o);const a=new On(jr,Zr,t,e);a.layers=this.layers,this.add(a);const c=new On(jr,Zr,t,e);c.layers=this.layers,this.add(c);const l=new On(jr,Zr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Am extends Cn{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ny extends Ar{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Am(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oo(5,5,5),r=new ps({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Us});r.uniforms.tEquirect.value=e;const o=new di(i,r),a=e.minFilter;return e.minFilter===Cs&&(e.minFilter=wi),new Ay(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Xl=new F,wy=new F,by=new Ht;class ws{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xl.subVectors(n,e).cross(wy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||by.getNormalMatrix(t),i=this.coplanarPoint(Xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new Ah,sc=new F;class wh{constructor(t=new ws,e=new ws,n=new ws,i=new ws,r=new ws,o=new ws){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,p-f,S-m).normalize(),n[1].setComponents(c+r,d+l,p+f,S+m).normalize(),n[2].setComponents(c+o,d+u,p+_,S+y).normalize(),n[3].setComponents(c-o,d-u,p-_,S-y).normalize(),n[4].setComponents(c-a,d-h,p-g,S-v).normalize(),e===Ri)n[5].setComponents(c+a,d+h,p+g,S+v).normalize();else if(e===So)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(sc.x=i.normal.x>0?t.max.x:t.min.x,sc.y=i.normal.y>0?t.max.y:t.min.y,sc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nm(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ry(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&d.length===0&&s.bufferSubData(l,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Jc extends vs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*d-o;for(let v=0;v<l;v++){const S=v*h-r;_.push(S,-y,0),g.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const v=y+l*m,S=y+l*(m+1),w=y+1+l*(m+1),N=y+1+l*m;f.push(v,S,N),f.push(S,w,N)}this.setIndex(f),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
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
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qy=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eM=`vec3 transformedNormal = objectNormal;
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
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",aM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
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
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,RM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zM=`#if defined( USE_POINTS_UV )
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
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
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
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,xS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,US=`#if DEPTH_PACKING == 3200
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
	#endif
}`,FS=`#define DISTANCE
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
}`,VS=`#define DISTANCE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,jS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,JS=`#define PHONG
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
}`,QS=`#define STANDARD
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
}`,tT=`#define STANDARD
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
}`,eT=`#define TOON
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
}`,nT=`#define TOON
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
}`,iT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 color;
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
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,cT=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Cy,alphahash_pars_fragment:Ly,alphamap_fragment:Py,alphamap_pars_fragment:Iy,alphatest_fragment:Dy,alphatest_pars_fragment:Oy,aomap_fragment:Uy,aomap_pars_fragment:Fy,batching_pars_vertex:Vy,batching_vertex:zy,begin_vertex:By,beginnormal_vertex:ky,bsdfs:Hy,iridescence_fragment:Gy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:$y,color_fragment:jy,color_pars_fragment:Zy,color_pars_vertex:Ky,color_vertex:Jy,common:Qy,cube_uv_reflection_fragment:tM,defaultnormal_vertex:eM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:sM,emissivemap_pars_fragment:rM,colorspace_fragment:oM,colorspace_pars_fragment:aM,envmap_fragment:cM,envmap_common_pars_fragment:lM,envmap_pars_fragment:uM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:SM,envmap_vertex:dM,fog_vertex:fM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:_M,lightmap_pars_fragment:vM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:EM,lights_phong_fragment:AM,lights_phong_pars_fragment:NM,lights_physical_fragment:wM,lights_physical_pars_fragment:bM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:LM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:OM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:VM,map_particle_pars_fragment:zM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:kM,morphinstance_vertex:HM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:YM,normal_fragment_maps:$M,normal_pars_fragment:jM,normal_pars_vertex:ZM,normal_vertex:KM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:eS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:sS,premultiplied_alpha_fragment:rS,project_vertex:oS,dithering_fragment:aS,dithering_pars_fragment:cS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:dS,shadowmap_vertex:fS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:_S,skinnormal_vertex:vS,specularmap_fragment:xS,specularmap_pars_fragment:yS,tonemapping_fragment:MS,tonemapping_pars_fragment:SS,transmission_fragment:TS,transmission_pars_fragment:ES,uv_pars_fragment:AS,uv_pars_vertex:NS,uv_vertex:wS,worldpos_vertex:bS,background_vert:RS,background_frag:CS,backgroundCube_vert:LS,backgroundCube_frag:PS,cube_vert:IS,cube_frag:DS,depth_vert:OS,depth_frag:US,distanceRGBA_vert:FS,distanceRGBA_frag:VS,equirect_vert:zS,equirect_frag:BS,linedashed_vert:kS,linedashed_frag:HS,meshbasic_vert:GS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:YS,meshmatcap_frag:$S,meshnormal_vert:jS,meshnormal_frag:ZS,meshphong_vert:KS,meshphong_frag:JS,meshphysical_vert:QS,meshphysical_frag:tT,meshtoon_vert:eT,meshtoon_frag:nT,points_vert:iT,points_frag:sT,shadow_vert:rT,shadow_frag:oT,sprite_vert:aT,sprite_frag:cT},pt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},zi={basic:{uniforms:wn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:wn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:wn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:wn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:wn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:wn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:wn([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:wn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:wn([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:wn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:wn([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:wn([pt.common,pt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:wn([pt.lights,pt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};zi.physical={uniforms:wn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const rc={r:0,b:0,g:0},tr=new vi,lT=new we;function uT(s,t,e,n,i,r,o){const a=new Ut(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function g(y){let v=!1;const S=_(y);S===null?m(a,c):S&&S.isColor&&(m(S,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(y,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===jc)?(u===void 0&&(u=new di(new Oo(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:Eo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,N,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),tr.copy(v.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(tr)),u.material.toneMapped=me.getTransfer(S.colorSpace)!==Ne,(h!==S||d!==S.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new di(new Jc(2,2),new ps({name:"BackgroundMaterial",uniforms:Eo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=me.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(rc,Tm(s)),n.buffers.color.setClear(rc.r,rc.g,rc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:g,addToRenderList:p}}function hT(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,V,q,P,K){let j=!1;const it=h(P,q,V);r!==it&&(r=it,l(r.object)),j=f(M,P,q,K),j&&_(M,P,q,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(M,V,q,P),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,V,q){const P=q.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let j=K[V.id];j===void 0&&(j={},K[V.id]=j);let it=j[P];return it===void 0&&(it=d(c()),j[P]=it),it}function d(M){const V=[],q=[],P=[];for(let K=0;K<e;K++)V[K]=0,q[K]=0,P[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,V,q,P){const K=r.attributes,j=V.attributes;let it=0;const st=q.getAttributes();for(const W in st)if(st[W].location>=0){const ct=K[W];let St=j[W];if(St===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),ct===void 0||ct.attribute!==St||St&&ct.data!==St.data)return!0;it++}return r.attributesNum!==it||r.index!==P}function _(M,V,q,P){const K={},j=V.attributes;let it=0;const st=q.getAttributes();for(const W in st)if(st[W].location>=0){let ct=j[W];ct===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const St={};St.attribute=ct,ct&&ct.data&&(St.data=ct.data),K[W]=St,it++}r.attributes=K,r.attributesNum=it,r.index=P}function g(){const M=r.newAttributes;for(let V=0,q=M.length;V<q;V++)M[V]=0}function p(M){m(M,0)}function m(M,V){const q=r.newAttributes,P=r.enabledAttributes,K=r.attributeDivisors;q[M]=1,P[M]===0&&(s.enableVertexAttribArray(M),P[M]=1),K[M]!==V&&(s.vertexAttribDivisor(M,V),K[M]=V)}function y(){const M=r.newAttributes,V=r.enabledAttributes;for(let q=0,P=V.length;q<P;q++)V[q]!==M[q]&&(s.disableVertexAttribArray(q),V[q]=0)}function v(M,V,q,P,K,j,it){it===!0?s.vertexAttribIPointer(M,V,q,K,j):s.vertexAttribPointer(M,V,q,P,K,j)}function S(M,V,q,P){g();const K=P.attributes,j=q.getAttributes(),it=V.defaultAttributeValues;for(const st in j){const W=j[st];if(W.location>=0){let ut=K[st];if(ut===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const ct=ut.normalized,St=ut.itemSize,Vt=t.get(ut);if(Vt===void 0)continue;const he=Vt.buffer,Y=Vt.type,lt=Vt.bytesPerElement,Et=Y===s.INT||Y===s.UNSIGNED_INT||ut.gpuType===om;if(ut.isInterleavedBufferAttribute){const mt=ut.data,Kt=mt.stride,Jt=ut.offset;if(mt.isInstancedInterleavedBuffer){for(let B=0;B<W.locationSize;B++)m(W.location+B,mt.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let B=0;B<W.locationSize;B++)p(W.location+B);s.bindBuffer(s.ARRAY_BUFFER,he);for(let B=0;B<W.locationSize;B++)v(W.location+B,St/W.locationSize,Y,ct,Kt*lt,(Jt+St/W.locationSize*B)*lt,Et)}else{if(ut.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt);s.bindBuffer(s.ARRAY_BUFFER,he);for(let mt=0;mt<W.locationSize;mt++)v(W.location+mt,St/W.locationSize,Y,ct,St*lt,St/W.locationSize*mt*lt,Et)}}else if(it!==void 0){const ct=it[st];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(W.location,ct);break;case 3:s.vertexAttrib3fv(W.location,ct);break;case 4:s.vertexAttrib4fv(W.location,ct);break;default:s.vertexAttrib1fv(W.location,ct)}}}}y()}function w(){L();for(const M in n){const V=n[M];for(const q in V){const P=V[q];for(const K in P)u(P[K].object),delete P[K];delete V[q]}delete n[M]}}function N(M){if(n[M.id]===void 0)return;const V=n[M.id];for(const q in V){const P=V[q];for(const K in P)u(P[K].object),delete P[K];delete V[q]}delete n[M.id]}function E(M){for(const V in n){const q=n[V];if(q[M.id]===void 0)continue;const P=q[M.id];for(const K in P)u(P[K].object),delete P[K];delete q[M.id]}}function L(){x(),o=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:N,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function dT(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fT(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(N){return!(N!==qi&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const E=N===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Bs&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==hs&&!E)}function c(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:w}}function pT(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ws,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,v=y*4;let S=m.clippingState||null;c.value=S,S=u(_,d,v,f);for(let w=0;w!==v;++w)S[w]=e[w];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=f+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==g;++v,S+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function mT(s){let t=new WeakMap;function e(o,a){return a===Cu?o.mapping=xo:a===Lu&&(o.mapping=yo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cu||a===Lu)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ny(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bh extends Em{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qr=4,Nf=[.125,.215,.35,.446,.526,.582],dr=20,ql=new bh,wf=new Ut;let Yl=null,$l=0,jl=0,Zl=!1;const cr=(1+Math.sqrt(5))/2,Kr=1/cr,bf=[new F(-cr,Kr,0),new F(cr,Kr,0),new F(-Kr,0,cr),new F(Kr,0,cr),new F(0,cr,-Kr),new F(0,cr,Kr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Rf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,$l,jl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,oc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:wa,format:qi,colorSpace:Oi,depthBuffer:!1},i=Cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gT(r)),this._blurMaterial=_T(r,t,e)}return i}_compileMaterial(t){const e=new di(this._lodPlanes[0],t);this._renderer.compile(e,ql)}_sceneToCubeUV(t,e,n,i){const a=new On(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wf),u.toneMapping=mi,u.autoClear=!1;const f=new Kc({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new di(new Oo,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(wf),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;oc(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xo||t.mapping===yo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;oc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ql)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bf[(i-r-1)%bf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new di(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*dr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):dr;p>dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const m=[];let y=0;for(let E=0;E<dr;++E){const L=E/g,x=Math.exp(-L*L/2);m.push(x),E===0?y+=x:E<p&&(y+=2*x)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const S=this._sizeLods[i],w=3*S*(i>v-Qr?i-v+Qr:0),N=4*(this._cubeSize-S);oc(e,w,N,3*S,2*S),c.setRenderTarget(e),c.render(h,ql)}}function gT(s){const t=[],e=[],n=[];let i=s;const r=s-Qr+1+Nf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Qr?c=Nf[o-s+Qr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*f),v=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let N=0;N<f;N++){const E=N%3*2/3-1,L=N>2?0:-1,x=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(x,g*_*N),v.set(d,p*_*N);const M=[N,N,N,N,N,N];S.set(M,m*_*N)}const w=new vs;w.setAttribute("position",new gi(y,g)),w.setAttribute("uv",new gi(v,p)),w.setAttribute("faceIndex",new gi(S,m)),t.push(w),i>Qr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cf(s,t,e){const n=new Ar(s,t,e);return n.texture.mapping=jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _T(s,t,e){const n=new Float32Array(dr),i=new F(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Lf(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Pf(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function vT(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cu||c===Lu,u=c===xo||c===yo;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Rf(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Rf(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xT(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yT(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let v=0,S=y.length;v<S;v+=3){const w=y[v+0],N=y[v+1],E=y[v+2];d.push(w,N,N,E,E,w)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const w=v+0,N=v+1,E=v+2;d.push(w,N,N,E,E,w)}}else return;const p=new(gm(d)?Sm:Mm)(d,1);p.version=g;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function MT(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/o,f[p]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}}function h(d,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ST(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function TT(s,t,e){const n=new WeakMap,i=new oe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let w=a.attributes.position.count*S,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const E=new Float32Array(w*N*4*h),L=new Eh(E,w,N,h);L.type=hs,L.needsUpdate=!0;const x=S*4;for(let V=0;V<h;V++){const q=m[V],P=y[V],K=v[V],j=w*N*4*V;for(let it=0;it<q.count;it++){const st=it*x;_===!0&&(i.fromBufferAttribute(q,it),E[j+st+0]=i.x,E[j+st+1]=i.y,E[j+st+2]=i.z,E[j+st+3]=0),g===!0&&(i.fromBufferAttribute(P,it),E[j+st+4]=i.x,E[j+st+5]=i.y,E[j+st+6]=i.z,E[j+st+7]=0),p===!0&&(i.fromBufferAttribute(K,it),E[j+st+8]=i.x,E[j+st+9]=i.y,E[j+st+10]=i.z,E[j+st+11]=K.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new Ct(w,N)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ET(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ca extends Cn{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:ao,u!==ao&&u!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ao&&(n=Mo),n===void 0&&u===fa&&(n=ba),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wm=new Cn,bm=new Ca(1,1);bm.compareFunction=pm;const Rm=new Eh,Cm=new uy,Lm=new Am,If=[],Df=[],Of=new Float32Array(16),Uf=new Float32Array(9),Ff=new Float32Array(4);function Uo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=If[i];if(r===void 0&&(r=new Float32Array(i),If[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function tn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function en(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qc(s,t){let e=Df[t];e===void 0&&(e=new Int32Array(t),Df[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function AT(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function NT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2fv(this.addr,t),en(e,t)}}function wT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;s.uniform3fv(this.addr,t),en(e,t)}}function bT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4fv(this.addr,t),en(e,t)}}function RT(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ff.set(n),s.uniformMatrix2fv(this.addr,!1,Ff),en(e,n)}}function CT(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Uf.set(n),s.uniformMatrix3fv(this.addr,!1,Uf),en(e,n)}}function LT(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Of.set(n),s.uniformMatrix4fv(this.addr,!1,Of),en(e,n)}}function PT(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function IT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2iv(this.addr,t),en(e,t)}}function DT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3iv(this.addr,t),en(e,t)}}function OT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4iv(this.addr,t),en(e,t)}}function UT(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function FT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2uiv(this.addr,t),en(e,t)}}function VT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3uiv(this.addr,t),en(e,t)}}function zT(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4uiv(this.addr,t),en(e,t)}}function BT(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?bm:wm;e.setTexture2D(t||r,i)}function kT(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cm,i)}function HT(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lm,i)}function GT(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rm,i)}function WT(s){switch(s){case 5126:return AT;case 35664:return NT;case 35665:return wT;case 35666:return bT;case 35674:return RT;case 35675:return CT;case 35676:return LT;case 5124:case 35670:return PT;case 35667:case 35671:return IT;case 35668:case 35672:return DT;case 35669:case 35673:return OT;case 5125:return UT;case 36294:return FT;case 36295:return VT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function XT(s,t){s.uniform1fv(this.addr,t)}function qT(s,t){const e=Uo(t,this.size,2);s.uniform2fv(this.addr,e)}function YT(s,t){const e=Uo(t,this.size,3);s.uniform3fv(this.addr,e)}function $T(s,t){const e=Uo(t,this.size,4);s.uniform4fv(this.addr,e)}function jT(s,t){const e=Uo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ZT(s,t){const e=Uo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function KT(s,t){const e=Uo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function JT(s,t){s.uniform1iv(this.addr,t)}function QT(s,t){s.uniform2iv(this.addr,t)}function tE(s,t){s.uniform3iv(this.addr,t)}function eE(s,t){s.uniform4iv(this.addr,t)}function nE(s,t){s.uniform1uiv(this.addr,t)}function iE(s,t){s.uniform2uiv(this.addr,t)}function sE(s,t){s.uniform3uiv(this.addr,t)}function rE(s,t){s.uniform4uiv(this.addr,t)}function oE(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||wm,r[o])}function aE(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Cm,r[o])}function cE(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Lm,r[o])}function lE(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rm,r[o])}function uE(s){switch(s){case 5126:return XT;case 35664:return qT;case 35665:return YT;case 35666:return $T;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return JT;case 35667:case 35671:return QT;case 35668:case 35672:return tE;case 35669:case 35673:return eE;case 5125:return nE;case 36294:return iE;case 36295:return sE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return lE}}class hE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=WT(e.type)}}class dE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uE(e.type)}}class fE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Vf(s,t){s.seq.push(t),s.map[t.id]=t}function pE(s,t,e){const n=s.name,i=n.length;for(Kl.lastIndex=0;;){const r=Kl.exec(n),o=Kl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vf(e,l===void 0?new hE(a,s,t):new dE(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new fE(a),Vf(e,h)),e=h}}}class fc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);pE(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function zf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const mE=37297;let gE=0;function _E(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function vE(s){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(s);let n;switch(t===e?n="":t===Tc&&e===Sc?n="LinearDisplayP3ToLinearSRGB":t===Sc&&e===Tc&&(n="LinearSRGBToLinearDisplayP3"),s){case Oi:case Zc:return[n,"LinearTransferOETF"];case Ai:case Sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Bf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+_E(s.getShaderSource(t),o)}else return i}function xE(s,t){const e=vE(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function yE(s,t){let e;switch(t){case Qp:e="Linear";break;case tm:e="Reinhard";break;case em:e="OptimizedCineon";break;case nm:e="ACESFilmic";break;case im:e="AgX";break;case Tx:e="Neutral";break;case Sx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ME(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function SE(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function TE(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function na(s){return s!==""}function kf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(s){return s.replace(EE,NE)}const AE=new Map;function NE(s,t){let e=Wt[t];if(e===void 0){const n=AE.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(s){return s.replace(wE,bE)}function bE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$v?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===as&&(t="SHADOWMAP_TYPE_VSM"),t}function CE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xo:case yo:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function PE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case yx:t="ENVMAP_BLENDING_MIX";break;case Mx:t="ENVMAP_BLENDING_ADD";break}return t}function IE(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function DE(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=RE(e),l=CE(e),u=LE(e),h=PE(e),d=IE(e),f=ME(e),_=SE(r),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(na).join(`
`),m.length>0&&(m+=`
`)):(p=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==mi?yE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,xE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(na).join(`
`)),o=Ou(o),o=kf(o,e),o=Hf(o,e),a=Ou(a),a=kf(a,e),a=Hf(a,e),o=Gf(o),a=Gf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,S=y+m+a,w=zf(i,i.VERTEX_SHADER,v),N=zf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,w),i.attachShader(g,N),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(V){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(w).trim(),K=i.getShaderInfoLog(N).trim();let j=!0,it=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,N);else{const st=Bf(i,w,"vertex"),W=Bf(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+st+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||K==="")&&(it=!1);it&&(V.diagnostics={runnable:j,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:K,prefix:m}})}i.deleteShader(w),i.deleteShader(N),L=new fc(i,g),x=TE(i,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,mE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=N,this}let OE=0;class UE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new FE(t),e.set(t,n)),n}}class FE{constructor(t){this.id=OE++,this.code=t,this.usedTimes=0}}function VE(s,t,e,n,i,r,o){const a=new Nh,c=new UE,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,V,q,P){const K=q.fog,j=P.geometry,it=x.isMeshStandardMaterial?q.environment:null,st=(x.isMeshStandardMaterial?e:t).get(x.envMap||it),W=st&&st.mapping===jc?st.image.height:null,ut=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ct=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=ct!==void 0?ct.length:0;let Vt=0;j.morphAttributes.position!==void 0&&(Vt=1),j.morphAttributes.normal!==void 0&&(Vt=2),j.morphAttributes.color!==void 0&&(Vt=3);let he,Y,lt,Et;if(ut){const de=zi[ut];he=de.vertexShader,Y=de.fragmentShader}else he=x.vertexShader,Y=x.fragmentShader,c.update(x),lt=c.getVertexShaderID(x),Et=c.getFragmentShaderID(x);const mt=s.getRenderTarget(),Kt=P.isInstancedMesh===!0,Jt=P.isBatchedMesh===!0,B=!!x.map,Ee=!!x.matcap,Pt=!!st,Me=!!x.aoMap,Ft=!!x.lightMap,ne=!!x.bumpMap,$t=!!x.normalMap,ie=!!x.displacementMap,Ue=!!x.emissiveMap,R=!!x.metalnessMap,T=!!x.roughnessMap,$=x.anisotropy>0,nt=x.clearcoat>0,ot=x.dispersion>0,at=x.iridescence>0,Lt=x.sheen>0,xt=x.transmission>0,vt=$&&!!x.anisotropyMap,Xt=nt&&!!x.clearcoatMap,dt=nt&&!!x.clearcoatNormalMap,Rt=nt&&!!x.clearcoatRoughnessMap,se=at&&!!x.iridescenceMap,It=at&&!!x.iridescenceThicknessMap,Mt=Lt&&!!x.sheenColorMap,qt=Lt&&!!x.sheenRoughnessMap,Qt=!!x.specularMap,He=!!x.specularColorMap,Yt=!!x.specularIntensityMap,D=xt&&!!x.transmissionMap,rt=xt&&!!x.thicknessMap,tt=!!x.gradientMap,gt=!!x.alphaMap,yt=x.alphaTest>0,re=!!x.alphaHash,Ae=!!x.extensions;let Fe=mi;x.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const fn={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:Y,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Jt,instancing:Kt,instancingColor:Kt&&P.instanceColor!==null,instancingMorph:Kt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Oi,alphaToCoverage:!!x.alphaToCoverage,map:B,matcap:Ee,envMap:Pt,envMapMode:Pt&&st.mapping,envMapCubeUVHeight:W,aoMap:Me,lightMap:Ft,bumpMap:ne,normalMap:$t,displacementMap:d&&ie,emissiveMap:Ue,normalMapObjectSpace:$t&&x.normalMapType===dm,normalMapTangentSpace:$t&&x.normalMapType===Er,metalnessMap:R,roughnessMap:T,anisotropy:$,anisotropyMap:vt,clearcoat:nt,clearcoatMap:Xt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,dispersion:ot,iridescence:at,iridescenceMap:se,iridescenceThicknessMap:It,sheen:Lt,sheenColorMap:Mt,sheenRoughnessMap:qt,specularMap:Qt,specularColorMap:He,specularIntensityMap:Yt,transmission:xt,transmissionMap:D,thicknessMap:rt,gradientMap:tt,opaque:x.transparent===!1&&x.blending===oo&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:re,combine:x.combine,mapUv:B&&g(x.map.channel),aoMapUv:Me&&g(x.aoMap.channel),lightMapUv:Ft&&g(x.lightMap.channel),bumpMapUv:ne&&g(x.bumpMap.channel),normalMapUv:$t&&g(x.normalMap.channel),displacementMapUv:ie&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:R&&g(x.metalnessMap.channel),roughnessMapUv:T&&g(x.roughnessMap.channel),anisotropyMapUv:vt&&g(x.anisotropyMap.channel),clearcoatMapUv:Xt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:qt&&g(x.sheenRoughnessMap.channel),specularMapUv:Qt&&g(x.specularMap.channel),specularColorMapUv:He&&g(x.specularColorMap.channel),specularIntensityMapUv:Yt&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:rt&&g(x.thicknessMap.channel),alphaMapUv:gt&&g(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&($t||$),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!j.attributes.uv&&(B||gt),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:B&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===Ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fn.vertexUv1s=l.has(1),fn.vertexUv2s=l.has(2),fn.vertexUv3s=l.has(3),l.clear(),fn}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)M.push(V),M.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(y(M,x),v(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),x.push(a.mask)}function S(x){const M=_[x.type];let V;if(M){const q=zi[M];V=Sy.clone(q.uniforms)}else V=x.uniforms;return V}function w(x,M){let V;for(let q=0,P=u.length;q<P;q++){const K=u[q];if(K.cacheKey===M){V=K,++V.usedTimes;break}}return V===void 0&&(V=new DE(s,M,x,r),u.push(V)),V}function N(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function E(x){c.remove(x)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:w,releaseProgram:N,releaseShaderCache:E,programs:u,dispose:L}}function zE(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function BE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,p){let m=s[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||BE),n.length>1&&n.sort(d||Xf),i.length>1&&i.sort(d||Xf)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function kE(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new qf,s.set(n,[o])):i>=r.length?(o=new qf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function HE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ut};break;case"SpotLight":e={position:new F,direction:new F,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function GE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let WE=0;function XE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qE(s){const t=new HE,e=GE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,r=new we,o=new we;function a(l,u){let h=0,d=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let _=0,g=0,p=0,m=0,y=0,v=0,S=0,w=0,N=0,E=0,L=0;l.sort(XE);const x=u===!0?Math.PI:1;for(let V=0,q=l.length;V<q;V++){const P=l[V],K=P.color,j=P.intensity,it=P.distance,st=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=K.r*j*x,d+=K.g*j*x,f+=K.b*j*x;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],j);L++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const ut=P.shadow,ct=e.get(P);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,n.directionalShadow[_]=ct,n.directionalShadowMap[_]=st,n.directionalShadowMatrix[_]=P.shadow.matrix,v++}n.directional[_]=W,_++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(K).multiplyScalar(j*x),W.distance=it,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[p]=W;const ut=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,ut.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[p]=ut.matrix,P.castShadow){const ct=e.get(P);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,n.spotShadow[p]=ct,n.spotShadowMap[p]=st,w++}p++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(K).multiplyScalar(j),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*x),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ut=P.shadow,ct=e.get(P);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,ct.shadowCameraNear=ut.camera.near,ct.shadowCameraFar=ut.camera.far,n.pointShadow[g]=ct,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(j*x),W.groundColor.copy(P.groundColor).multiplyScalar(j*x),n.hemi[y]=W,y++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==_||M.pointLength!==g||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==y||M.numDirectionalShadows!==v||M.numPointShadows!==S||M.numSpotShadows!==w||M.numSpotMaps!==N||M.numLightProbes!==L)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+N-E,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,M.directionalLength=_,M.pointLength=g,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=y,M.numDirectionalShadows=v,M.numPointShadows=S,M.numSpotShadows=w,M.numSpotMaps=N,M.numLightProbes=L,n.version=WE++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const v=l[m];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Yf(s){const t=new qE(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function YE(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Yf(s),t.set(i,[a])):r>=o.length?(a=new Yf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $E extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jE extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KE=`uniform sampler2D shadow_pass;
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
}`;function JE(s,t,e){let n=new wh;const i=new Ct,r=new Ct,o=new oe,a=new $E({depthPacking:Ux}),c=new jE,l={},u=e.maxTextureSize,h={[zs]:Rn,[Rn]:zs,[Gi]:Gi},d=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:ZE,fragmentShader:KE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new vs;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new di(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let m=this.type;this.render=function(N,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||N.length===0)return;const x=s.getRenderTarget(),M=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Us),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const P=m!==as&&this.type===as,K=m===as&&this.type!==as;for(let j=0,it=N.length;j<it;j++){const st=N[j],W=st.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ut=W.getFrameExtents();if(i.multiply(ut),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ut.x),i.x=r.x*ut.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ut.y),i.y=r.y*ut.y,W.mapSize.y=r.y)),W.map===null||P===!0||K===!0){const St=this.type!==as?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new Ar(i.x,i.y,St),W.map.texture.name=st.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ct=W.getViewportCount();for(let St=0;St<ct;St++){const Vt=W.getViewport(St);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),q.viewport(o),W.updateMatrices(st,St),n=W.getFrustum(),S(E,L,W.camera,st,this.type)}W.isPointLightShadow!==!0&&this.type===as&&y(W,L),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(x,M,V)};function y(N,E){const L=t.update(g);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ar(i.x,i.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(E,null,L,d,g,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(E,null,L,f,g,null)}function v(N,E,L,x){let M=null;const V=L.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)M=V;else if(M=L.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const q=M.uuid,P=E.uuid;let K=l[q];K===void 0&&(K={},l[q]=K);let j=K[P];j===void 0&&(j=M.clone(),K[P]=j,E.addEventListener("dispose",w)),M=j}if(M.visible=E.visible,M.wireframe=E.wireframe,x===as?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=s.properties.get(M);q.light=L}return M}function S(N,E,L,x,M){if(N.visible===!1)return;if(N.layers.test(E.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&M===as)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,N.matrixWorld);const P=t.update(N),K=N.material;if(Array.isArray(K)){const j=P.groups;for(let it=0,st=j.length;it<st;it++){const W=j[it],ut=K[W.materialIndex];if(ut&&ut.visible){const ct=v(N,ut,x,M);N.onBeforeShadow(s,N,E,L,P,ct,W),s.renderBufferDirect(L,null,P,ct,N,W),N.onAfterShadow(s,N,E,L,P,ct,W)}}}else if(K.visible){const j=v(N,K,x,M);N.onBeforeShadow(s,N,E,L,P,j,null),s.renderBufferDirect(L,null,P,j,N,null),N.onAfterShadow(s,N,E,L,P,j,null)}}const q=N.children;for(let P=0,K=q.length;P<K;P++)S(q[P],E,L,x,M)}function w(N){N.target.removeEventListener("dispose",w);for(const L in l){const x=l[L],M=N.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function QE(s){function t(){let D=!1;const rt=new oe;let tt=null;const gt=new oe(0,0,0,0);return{setMask:function(yt){tt!==yt&&!D&&(s.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){D=yt},setClear:function(yt,re,Ae,Fe,fn){fn===!0&&(yt*=Fe,re*=Fe,Ae*=Fe),rt.set(yt,re,Ae,Fe),gt.equals(rt)===!1&&(s.clearColor(yt,re,Ae,Fe),gt.copy(rt))},reset:function(){D=!1,tt=null,gt.set(-1,0,0,0)}}}function e(){let D=!1,rt=null,tt=null,gt=null;return{setTest:function(yt){yt?Et(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(yt){rt!==yt&&!D&&(s.depthMask(yt),rt=yt)},setFunc:function(yt){if(tt!==yt){switch(yt){case fx:s.depthFunc(s.NEVER);break;case px:s.depthFunc(s.ALWAYS);break;case mx:s.depthFunc(s.LESS);break;case yc:s.depthFunc(s.LEQUAL);break;case gx:s.depthFunc(s.EQUAL);break;case _x:s.depthFunc(s.GEQUAL);break;case vx:s.depthFunc(s.GREATER);break;case xx:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=yt}},setLocked:function(yt){D=yt},setClear:function(yt){gt!==yt&&(s.clearDepth(yt),gt=yt)},reset:function(){D=!1,rt=null,tt=null,gt=null}}}function n(){let D=!1,rt=null,tt=null,gt=null,yt=null,re=null,Ae=null,Fe=null,fn=null;return{setTest:function(de){D||(de?Et(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(de){rt!==de&&!D&&(s.stencilMask(de),rt=de)},setFunc:function(de,Ui,An){(tt!==de||gt!==Ui||yt!==An)&&(s.stencilFunc(de,Ui,An),tt=de,gt=Ui,yt=An)},setOp:function(de,Ui,An){(re!==de||Ae!==Ui||Fe!==An)&&(s.stencilOp(de,Ui,An),re=de,Ae=Ui,Fe=An)},setLocked:function(de){D=de},setClear:function(de){fn!==de&&(s.clearStencil(de),fn=de)},reset:function(){D=!1,rt=null,tt=null,gt=null,yt=null,re=null,Ae=null,Fe=null,fn=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,v=null,S=null,w=null,N=new Ut(0,0,0),E=0,L=!1,x=null,M=null,V=null,q=null,P=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,it=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(st)[1]),j=it>=1):st.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),j=it>=2);let W=null,ut={};const ct=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Vt=new oe().fromArray(ct),he=new oe().fromArray(St);function Y(D,rt,tt,gt){const yt=new Uint8Array(4),re=s.createTexture();s.bindTexture(D,re),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<tt;Ae++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(rt+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return re}const lt={};lt[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Et(s.DEPTH_TEST),r.setFunc(yc),ne(!1),$t(wd),Et(s.CULL_FACE),Me(Us);function Et(D){l[D]!==!0&&(s.enable(D),l[D]=!0)}function mt(D){l[D]!==!1&&(s.disable(D),l[D]=!1)}function Kt(D,rt){return u[D]!==rt?(s.bindFramebuffer(D,rt),u[D]=rt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=rt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Jt(D,rt){let tt=d,gt=!1;if(D){tt=h.get(rt),tt===void 0&&(tt=[],h.set(rt,tt));const yt=D.textures;if(tt.length!==yt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Ae=yt.length;re<Ae;re++)tt[re]=s.COLOR_ATTACHMENT0+re;tt.length=yt.length,gt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(tt)}function B(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Ee={[hr]:s.FUNC_ADD,[Zv]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};Ee[Jv]=s.MIN,Ee[Qv]=s.MAX;const Pt={[tx]:s.ZERO,[ex]:s.ONE,[nx]:s.SRC_COLOR,[bu]:s.SRC_ALPHA,[cx]:s.SRC_ALPHA_SATURATE,[ox]:s.DST_COLOR,[sx]:s.DST_ALPHA,[ix]:s.ONE_MINUS_SRC_COLOR,[Ru]:s.ONE_MINUS_SRC_ALPHA,[ax]:s.ONE_MINUS_DST_COLOR,[rx]:s.ONE_MINUS_DST_ALPHA,[lx]:s.CONSTANT_COLOR,[ux]:s.ONE_MINUS_CONSTANT_COLOR,[hx]:s.CONSTANT_ALPHA,[dx]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(D,rt,tt,gt,yt,re,Ae,Fe,fn,de){if(D===Us){_===!0&&(mt(s.BLEND),_=!1);return}if(_===!1&&(Et(s.BLEND),_=!0),D!==jv){if(D!==g||de!==L){if((p!==hr||v!==hr)&&(s.blendEquation(s.FUNC_ADD),p=hr,v=hr),de)switch(D){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bd:s.blendFunc(s.ONE,s.ONE);break;case Rd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,S=null,w=null,N.set(0,0,0),E=0,g=D,L=de}return}yt=yt||rt,re=re||tt,Ae=Ae||gt,(rt!==p||yt!==v)&&(s.blendEquationSeparate(Ee[rt],Ee[yt]),p=rt,v=yt),(tt!==m||gt!==y||re!==S||Ae!==w)&&(s.blendFuncSeparate(Pt[tt],Pt[gt],Pt[re],Pt[Ae]),m=tt,y=gt,S=re,w=Ae),(Fe.equals(N)===!1||fn!==E)&&(s.blendColor(Fe.r,Fe.g,Fe.b,fn),N.copy(Fe),E=fn),g=D,L=!1}function Ft(D,rt){D.side===Gi?mt(s.CULL_FACE):Et(s.CULL_FACE);let tt=D.side===Rn;rt&&(tt=!tt),ne(tt),D.blending===oo&&D.transparent===!1?Me(Us):Me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function $t(D){D!==qv?(Et(s.CULL_FACE),D!==M&&(D===wd?s.cullFace(s.BACK):D===Yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),M=D}function ie(D){D!==V&&(j&&s.lineWidth(D),V=D)}function Ue(D,rt,tt){D?(Et(s.POLYGON_OFFSET_FILL),(q!==rt||P!==tt)&&(s.polygonOffset(rt,tt),q=rt,P=tt)):mt(s.POLYGON_OFFSET_FILL)}function R(D){D?Et(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+K-1),W!==D&&(s.activeTexture(D),W=D)}function $(D,rt,tt){tt===void 0&&(W===null?tt=s.TEXTURE0+K-1:tt=W);let gt=ut[tt];gt===void 0&&(gt={type:void 0,texture:void 0},ut[tt]=gt),(gt.type!==D||gt.texture!==rt)&&(W!==tt&&(s.activeTexture(tt),W=tt),s.bindTexture(D,rt||lt[D]),gt.type=D,gt.texture=rt)}function nt(){const D=ut[W];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(D){Vt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Vt.copy(D))}function qt(D){he.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Qt(D,rt){let tt=c.get(rt);tt===void 0&&(tt=new WeakMap,c.set(rt,tt));let gt=tt.get(D);gt===void 0&&(gt=s.getUniformBlockIndex(rt,D.name),tt.set(D,gt))}function He(D,rt){const gt=c.get(rt).get(D);a.get(rt)!==gt&&(s.uniformBlockBinding(rt,gt,D.__bindingPointIndex),a.set(rt,gt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,ut={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,v=null,S=null,w=null,N=new Ut(0,0,0),E=0,L=!1,x=null,M=null,V=null,q=null,P=null,Vt.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Et,disable:mt,bindFramebuffer:Kt,drawBuffers:Jt,useProgram:B,setBlending:Me,setMaterial:Ft,setFlipSided:ne,setCullFace:$t,setLineWidth:ie,setPolygonOffset:Ue,setScissorTest:R,activeTexture:T,bindTexture:$,unbindTexture:nt,compressedTexImage2D:ot,compressedTexImage3D:at,texImage2D:se,texImage3D:It,updateUBOMapping:Qt,uniformBlockBinding:He,texStorage2D:dt,texStorage3D:Rt,texSubImage2D:Lt,texSubImage3D:xt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Xt,scissor:Mt,viewport:qt,reset:Yt}}function tA(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return f?new OffscreenCanvas(R,T):Ac("canvas")}function g(R,T,$){let nt=1;const ot=Ue(R);if((ot.width>$||ot.height>$)&&(nt=$/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(nt*ot.width),Lt=Math.floor(nt*ot.height);h===void 0&&(h=_(at,Lt));const xt=T?_(at,Lt):h;return xt.width=at,xt.height=Lt,xt.getContext("2d").drawImage(R,0,0,at,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+at+"x"+Lt+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Mn&&R.minFilter!==wi}function m(R){s.generateMipmap(R)}function y(R,T,$,nt,ot=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=T;if(T===s.RED&&($===s.FLOAT&&(at=s.R32F),$===s.HALF_FLOAT&&(at=s.R16F),$===s.UNSIGNED_BYTE&&(at=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.R8UI),$===s.UNSIGNED_SHORT&&(at=s.R16UI),$===s.UNSIGNED_INT&&(at=s.R32UI),$===s.BYTE&&(at=s.R8I),$===s.SHORT&&(at=s.R16I),$===s.INT&&(at=s.R32I)),T===s.RG&&($===s.FLOAT&&(at=s.RG32F),$===s.HALF_FLOAT&&(at=s.RG16F),$===s.UNSIGNED_BYTE&&(at=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RG8UI),$===s.UNSIGNED_SHORT&&(at=s.RG16UI),$===s.UNSIGNED_INT&&(at=s.RG32UI),$===s.BYTE&&(at=s.RG8I),$===s.SHORT&&(at=s.RG16I),$===s.INT&&(at=s.RG32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),T===s.RGBA){const Lt=ot?Mc:me.getTransfer(nt);$===s.FLOAT&&(at=s.RGBA32F),$===s.HALF_FLOAT&&(at=s.RGBA16F),$===s.UNSIGNED_BYTE&&(at=Lt===Ne?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function S(R){const T=R.target;T.removeEventListener("dispose",S),N(T),T.isVideoTexture&&u.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),L(T)}function N(R){const T=n.get(R);if(T.__webglInit===void 0)return;const $=R.source,nt=d.get($);if(nt){const ot=nt[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(R),Object.keys(nt).length===0&&d.delete($)}n.remove(R)}function E(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const $=R.source,nt=d.get($);delete nt[T.__cacheKey],o.memory.textures--}function L(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ot=0;ot<T.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(T.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)s.deleteFramebuffer(T.__webglFramebuffer[nt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=R.textures;for(let nt=0,ot=$.length;nt<ot;nt++){const at=n.get($[nt]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove($[nt])}n.remove(R)}let x=0;function M(){x=0}function V(){const R=x;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),x+=1,R}function q(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function P(R,T){const $=n.get(R);if(R.isVideoTexture&&$t(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt($,R,T);return}}e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function K(R,T){const $=n.get(R);if(R.version>0&&$.__version!==R.version){Vt($,R,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function j(R,T){const $=n.get(R);if(R.version>0&&$.__version!==R.version){Vt($,R,T);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function it(R,T){const $=n.get(R);if(R.version>0&&$.__version!==R.version){he($,R,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const st={[Pu]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[Iu]:s.MIRRORED_REPEAT},W={[Mn]:s.NEAREST,[Ex]:s.NEAREST_MIPMAP_NEAREST,[za]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Sl]:s.LINEAR_MIPMAP_NEAREST,[Cs]:s.LINEAR_MIPMAP_LINEAR},ut={[Fx]:s.NEVER,[Hx]:s.ALWAYS,[fm]:s.LESS,[pm]:s.LEQUAL,[Vx]:s.EQUAL,[kx]:s.GEQUAL,[zx]:s.GREATER,[Bx]:s.NOTEQUAL};function ct(R,T){if(T.type===hs&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Sl||T.magFilter===za||T.magFilter===Cs||T.minFilter===wi||T.minFilter===Sl||T.minFilter===za||T.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,st[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,st[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,st[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,W[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mn||T.minFilter!==za&&T.minFilter!==Cs||T.type===hs&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function St(R,T){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",S));const nt=T.source;let ot=d.get(nt);ot===void 0&&(ot={},d.set(nt,ot));const at=q(T);if(at!==R.__cacheKey){ot[at]===void 0&&(ot[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ot[at].usedTimes++;const Lt=ot[R.__cacheKey];Lt!==void 0&&(ot[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(T)),R.__cacheKey=at,R.__webglTexture=ot[at].texture}return $}function Vt(R,T,$){let nt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=St(R,T),at=T.source;e.bindTexture(nt,R.__webglTexture,s.TEXTURE0+$);const Lt=n.get(at);if(at.version!==Lt.__version||ot===!0){e.activeTexture(s.TEXTURE0+$);const xt=me.getPrimaries(me.workingColorSpace),vt=T.colorSpace===Rs?null:me.getPrimaries(T.colorSpace),Xt=T.colorSpace===Rs||xt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let dt=g(T.image,!1,i.maxTextureSize);dt=ie(T,dt);const Rt=r.convert(T.format,T.colorSpace),se=r.convert(T.type);let It=y(T.internalFormat,Rt,se,T.colorSpace,T.isVideoTexture);ct(nt,T);let Mt;const qt=T.mipmaps,Qt=T.isVideoTexture!==!0,He=Lt.__version===void 0||ot===!0,Yt=at.dataReady,D=v(T,dt);if(T.isDepthTexture)It=s.DEPTH_COMPONENT16,T.type===hs?It=s.DEPTH_COMPONENT32F:T.type===Mo?It=s.DEPTH_COMPONENT24:T.type===ba&&(It=s.DEPTH24_STENCIL8),He&&(Qt?e.texStorage2D(s.TEXTURE_2D,1,It,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,It,dt.width,dt.height,0,Rt,se,null));else if(T.isDataTexture)if(qt.length>0){Qt&&He&&e.texStorage2D(s.TEXTURE_2D,D,It,qt[0].width,qt[0].height);for(let rt=0,tt=qt.length;rt<tt;rt++)Mt=qt[rt],Qt?Yt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Rt,se,Mt.data):e.texImage2D(s.TEXTURE_2D,rt,It,Mt.width,Mt.height,0,Rt,se,Mt.data);T.generateMipmaps=!1}else Qt?(He&&e.texStorage2D(s.TEXTURE_2D,D,It,dt.width,dt.height),Yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,Rt,se,dt.data)):e.texImage2D(s.TEXTURE_2D,0,It,dt.width,dt.height,0,Rt,se,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qt&&He&&e.texStorage3D(s.TEXTURE_2D_ARRAY,D,It,qt[0].width,qt[0].height,dt.depth);for(let rt=0,tt=qt.length;rt<tt;rt++)Mt=qt[rt],T.format!==qi?Rt!==null?Qt?Yt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,dt.depth,Rt,Mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,It,Mt.width,Mt.height,dt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,dt.depth,Rt,se,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,It,Mt.width,Mt.height,dt.depth,0,Rt,se,Mt.data)}else{Qt&&He&&e.texStorage2D(s.TEXTURE_2D,D,It,qt[0].width,qt[0].height);for(let rt=0,tt=qt.length;rt<tt;rt++)Mt=qt[rt],T.format!==qi?Rt!==null?Qt?Yt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Rt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Yt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Rt,se,Mt.data):e.texImage2D(s.TEXTURE_2D,rt,It,Mt.width,Mt.height,0,Rt,se,Mt.data)}else if(T.isDataArrayTexture)Qt?(He&&e.texStorage3D(s.TEXTURE_2D_ARRAY,D,It,dt.width,dt.height,dt.depth),Yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Rt,se,dt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,dt.width,dt.height,dt.depth,0,Rt,se,dt.data);else if(T.isData3DTexture)Qt?(He&&e.texStorage3D(s.TEXTURE_3D,D,It,dt.width,dt.height,dt.depth),Yt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Rt,se,dt.data)):e.texImage3D(s.TEXTURE_3D,0,It,dt.width,dt.height,dt.depth,0,Rt,se,dt.data);else if(T.isFramebufferTexture){if(He)if(Qt)e.texStorage2D(s.TEXTURE_2D,D,It,dt.width,dt.height);else{let rt=dt.width,tt=dt.height;for(let gt=0;gt<D;gt++)e.texImage2D(s.TEXTURE_2D,gt,It,rt,tt,0,Rt,se,null),rt>>=1,tt>>=1}}else if(qt.length>0){if(Qt&&He){const rt=Ue(qt[0]);e.texStorage2D(s.TEXTURE_2D,D,It,rt.width,rt.height)}for(let rt=0,tt=qt.length;rt<tt;rt++)Mt=qt[rt],Qt?Yt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Rt,se,Mt):e.texImage2D(s.TEXTURE_2D,rt,It,Rt,se,Mt);T.generateMipmaps=!1}else if(Qt){if(He){const rt=Ue(dt);e.texStorage2D(s.TEXTURE_2D,D,It,rt.width,rt.height)}Yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,se,dt)}else e.texImage2D(s.TEXTURE_2D,0,It,Rt,se,dt);p(T)&&m(nt),Lt.__version=at.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function he(R,T,$){if(T.image.length!==6)return;const nt=St(R,T),ot=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+$);const at=n.get(ot);if(ot.version!==at.__version||nt===!0){e.activeTexture(s.TEXTURE0+$);const Lt=me.getPrimaries(me.workingColorSpace),xt=T.colorSpace===Rs?null:me.getPrimaries(T.colorSpace),vt=T.colorSpace===Rs||Lt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,dt=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let tt=0;tt<6;tt++)!Xt&&!dt?Rt[tt]=g(T.image[tt],!0,i.maxCubemapSize):Rt[tt]=dt?T.image[tt].image:T.image[tt],Rt[tt]=ie(T,Rt[tt]);const se=Rt[0],It=r.convert(T.format,T.colorSpace),Mt=r.convert(T.type),qt=y(T.internalFormat,It,Mt,T.colorSpace),Qt=T.isVideoTexture!==!0,He=at.__version===void 0||nt===!0,Yt=ot.dataReady;let D=v(T,se);ct(s.TEXTURE_CUBE_MAP,T);let rt;if(Xt){Qt&&He&&e.texStorage2D(s.TEXTURE_CUBE_MAP,D,qt,se.width,se.height);for(let tt=0;tt<6;tt++){rt=Rt[tt].mipmaps;for(let gt=0;gt<rt.length;gt++){const yt=rt[gt];T.format!==qi?It!==null?Qt?Yt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,It,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,qt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?Yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,yt.width,yt.height,It,Mt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,qt,yt.width,yt.height,0,It,Mt,yt.data)}}}else{if(rt=T.mipmaps,Qt&&He){rt.length>0&&D++;const tt=Ue(Rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,D,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Qt?Yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt[tt].width,Rt[tt].height,It,Mt,Rt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Rt[tt].width,Rt[tt].height,0,It,Mt,Rt[tt].data);for(let gt=0;gt<rt.length;gt++){const re=rt[gt].image[tt].image;Qt?Yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,re.width,re.height,It,Mt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,qt,re.width,re.height,0,It,Mt,re.data)}}else{Qt?Yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,Mt,Rt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,It,Mt,Rt[tt]);for(let gt=0;gt<rt.length;gt++){const yt=rt[gt];Qt?Yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,It,Mt,yt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,qt,It,Mt,yt.image[tt])}}}p(T)&&m(s.TEXTURE_CUBE_MAP),at.__version=ot.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Y(R,T,$,nt,ot,at){const Lt=r.convert($.format,$.colorSpace),xt=r.convert($.type),vt=y($.internalFormat,Lt,xt,$.colorSpace);if(!n.get(T).__hasExternalTextures){const dt=Math.max(1,T.width>>at),Rt=Math.max(1,T.height>>at);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,at,vt,dt,Rt,T.depth,0,Lt,xt,null):e.texImage2D(ot,at,vt,dt,Rt,0,Lt,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ne(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,n.get($).__webglTexture,0,Ft(T)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,n.get($).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let nt=s.DEPTH_COMPONENT24;if($||ne(T)){const ot=T.depthTexture;ot&&ot.isDepthTexture&&(ot.type===hs?nt=s.DEPTH_COMPONENT32F:ot.type===Mo&&(nt=s.DEPTH_COMPONENT24));const at=Ft(T);ne(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,nt,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,nt,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const nt=Ft(T);$&&ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,T.width,T.height):ne(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const nt=T.textures;for(let ot=0;ot<nt.length;ot++){const at=nt[ot],Lt=r.convert(at.format,at.colorSpace),xt=r.convert(at.type),vt=y(at.internalFormat,Lt,xt,at.colorSpace),Xt=Ft(T);$&&ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,vt,T.width,T.height):ne(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,vt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,vt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);const nt=n.get(T.depthTexture).__webglTexture,ot=Ft(T);if(T.depthTexture.format===ao)ne(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(T.depthTexture.format===fa)ne(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function mt(R){const T=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Et(T.__webglFramebuffer,R)}else if($){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]=s.createRenderbuffer(),lt(T.__webglDepthbuffer[nt],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),lt(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(R,T,$){const nt=n.get(R);T!==void 0&&Y(nt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&mt(R)}function Jt(R){const T=R.texture,$=n.get(R),nt=n.get(T);R.addEventListener("dispose",w);const ot=R.textures,at=R.isWebGLCubeRenderTarget===!0,Lt=ot.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=T.version,o.memory.textures++),at){$.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[xt]=[];for(let vt=0;vt<T.mipmaps.length;vt++)$.__webglFramebuffer[xt][vt]=s.createFramebuffer()}else $.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let xt=0;xt<T.mipmaps.length;xt++)$.__webglFramebuffer[xt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let xt=0,vt=ot.length;xt<vt;xt++){const Xt=n.get(ot[xt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let xt=0;xt<ot.length;xt++){const vt=ot[xt];$.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[xt]);const Xt=r.convert(vt.format,vt.colorSpace),dt=r.convert(vt.type),Rt=y(vt.internalFormat,Xt,dt,vt.colorSpace,R.isXRRenderTarget===!0),se=Ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Rt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,$.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),lt($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),ct(s.TEXTURE_CUBE_MAP,T);for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Y($.__webglFramebuffer[xt][vt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,vt);else Y($.__webglFramebuffer[xt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(T)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let xt=0,vt=ot.length;xt<vt;xt++){const Xt=ot[xt],dt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),ct(s.TEXTURE_2D,Xt),Y($.__webglFramebuffer,R,Xt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),p(Xt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,nt.__webglTexture),ct(xt,T),T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Y($.__webglFramebuffer[vt],R,T,s.COLOR_ATTACHMENT0,xt,vt);else Y($.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,xt,0);p(T)&&m(xt),e.unbindTexture()}R.depthBuffer&&mt(R)}function B(R){const T=R.textures;for(let $=0,nt=T.length;$<nt;$++){const ot=T[$];if(p(ot)){const at=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Lt=n.get(ot).__webglTexture;e.bindTexture(at,Lt),m(at),e.unbindTexture()}}}const Ee=[],Pt=[];function Me(R){if(R.samples>0){if(ne(R)===!1){const T=R.textures,$=R.width,nt=R.height;let ot=s.COLOR_BUFFER_BIT;const at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(R),xt=T.length>1;if(xt)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const Xt=n.get(T[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,$,nt,0,0,$,nt,ot,s.NEAREST),c===!0&&(Ee.length=0,Pt.length=0,Ee.push(s.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ee.push(at),Pt.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const Xt=n.get(T[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ft(R){return Math.min(i.maxSamples,R.samples)}function ne(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function ie(R,T){const $=R.colorSpace,nt=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Oi&&$!==Rs&&(me.getTransfer($)===Ne?(nt!==qi||ot!==Bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=Kt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ne}function eA(s,t){function e(n,i=Rs){let r;const o=me.getTransfer(i);if(n===Bs)return s.UNSIGNED_BYTE;if(n===am)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cm)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wx)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ax)return s.BYTE;if(n===Nx)return s.SHORT;if(n===rm)return s.UNSIGNED_SHORT;if(n===om)return s.INT;if(n===Mo)return s.UNSIGNED_INT;if(n===hs)return s.FLOAT;if(n===wa)return s.HALF_FLOAT;if(n===bx)return s.ALPHA;if(n===Rx)return s.RGB;if(n===qi)return s.RGBA;if(n===Cx)return s.LUMINANCE;if(n===Lx)return s.LUMINANCE_ALPHA;if(n===ao)return s.DEPTH_COMPONENT;if(n===fa)return s.DEPTH_STENCIL;if(n===Px)return s.RED;if(n===lm)return s.RED_INTEGER;if(n===Ix)return s.RG;if(n===um)return s.RG_INTEGER;if(n===hm)return s.RGBA_INTEGER;if(n===Tl||n===El||n===Al||n===Nl)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ld||n===Pd||n===Id||n===Dd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ld)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Id)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Od||n===Ud||n===Fd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Od||n===Ud)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vd||n===zd||n===Bd||n===kd||n===Hd||n===Gd||n===Wd||n===Xd||n===qd||n===Yd||n===$d||n===jd||n===Zd||n===Kd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$d)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kd)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Jd||n===Qd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dx||n===tf||n===ef||n===nf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ef)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ba?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class nA extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ac extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iA={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iA)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ac;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ps({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Jc(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class aA extends Ys{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=new oA,p=e.getContextAttributes();let m=null,y=null;const v=[],S=[],w=new Ct;let N=null;const E=new On;E.layers.enable(1),E.viewport=new oe;const L=new On;L.layers.enable(2),L.viewport=new oe;const x=[E,L],M=new nA;M.layers.enable(1),M.layers.enable(2);let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let lt=v[Y];return lt===void 0&&(lt=new Jl,v[Y]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Y){let lt=v[Y];return lt===void 0&&(lt=new Jl,v[Y]=lt),lt.getGripSpace()},this.getHand=function(Y){let lt=v[Y];return lt===void 0&&(lt=new Jl,v[Y]=lt),lt.getHandSpace()};function P(Y){const lt=S.indexOf(Y.inputSource);if(lt===-1)return;const Et=v[lt];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,l||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<v.length;Y++){const lt=S[Y];lt!==null&&(S[Y]=null,v[Y].disconnect(lt))}V=null,q=null,g.reset(),t.setRenderTarget(m),f=null,d=null,h=null,i=null,y=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",K),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ar(f.framebufferWidth,f.framebufferHeight,{format:qi,type:Bs,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,Et=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?fa:ao,Et=p.stencil?ba:Mo);const Kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ar(d.textureWidth,d.textureHeight,{format:qi,type:Bs,depthTexture:new Ca(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function j(Y){for(let lt=0;lt<Y.removed.length;lt++){const Et=Y.removed[lt],mt=S.indexOf(Et);mt>=0&&(S[mt]=null,v[mt].disconnect(Et))}for(let lt=0;lt<Y.added.length;lt++){const Et=Y.added[lt];let mt=S.indexOf(Et);if(mt===-1){for(let Jt=0;Jt<v.length;Jt++)if(Jt>=S.length){S.push(Et),mt=Jt;break}else if(S[Jt]===null){S[Jt]=Et,mt=Jt;break}if(mt===-1)break}const Kt=v[mt];Kt&&Kt.connect(Et)}}const it=new F,st=new F;function W(Y,lt,Et){it.setFromMatrixPosition(lt.matrixWorld),st.setFromMatrixPosition(Et.matrixWorld);const mt=it.distanceTo(st),Kt=lt.projectionMatrix.elements,Jt=Et.projectionMatrix.elements,B=Kt[14]/(Kt[10]-1),Ee=Kt[14]/(Kt[10]+1),Pt=(Kt[9]+1)/Kt[5],Me=(Kt[9]-1)/Kt[5],Ft=(Kt[8]-1)/Kt[0],ne=(Jt[8]+1)/Jt[0],$t=B*Ft,ie=B*ne,Ue=mt/(-Ft+ne),R=Ue*-Ft;lt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(R),Y.translateZ(Ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=B+Ue,$=Ee+Ue,nt=$t-R,ot=ie+(mt-R),at=Pt*Ee/$*T,Lt=Me*Ee/$*T;Y.projectionMatrix.makePerspective(nt,ot,at,Lt,T,$),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ut(Y,lt){lt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(lt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),M.near=L.near=E.near=Y.near,M.far=L.far=E.far=Y.far,(V!==M.near||q!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),V=M.near,q=M.far,E.near=V,E.far=q,L.near=V,L.far=q,E.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());const lt=Y.parent,Et=M.cameras;ut(M,lt);for(let mt=0;mt<Et.length;mt++)ut(Et[mt],lt);Et.length===2?W(M,E,L):M.projectionMatrix.copy(E.projectionMatrix),ct(Y,M,lt)};function ct(Y,lt,Et){Et===null?Y.matrix.copy(lt.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(lt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(lt.projectionMatrix),Y.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=To*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let St=null;function Vt(Y,lt){if(u=lt.getViewerPose(l||o),_=lt,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let mt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Jt=0;Jt<Et.length;Jt++){const B=Et[Jt];let Ee=null;if(f!==null)Ee=f.getViewport(B);else{const Me=h.getViewSubImage(d,B);Ee=Me.viewport,Jt===0&&(t.setRenderTargetTextures(y,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(y))}let Pt=x[Jt];Pt===void 0&&(Pt=new On,Pt.layers.enable(Jt),Pt.viewport=new oe,x[Jt]=Pt),Pt.matrix.fromArray(B.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(B.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Jt===0&&(M.matrix.copy(Pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Pt)}const Kt=i.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")){const Jt=h.getDepthInformation(Et[0]);Jt&&Jt.isValid&&Jt.texture&&g.init(t,Jt,i.renderState)}}for(let Et=0;Et<v.length;Et++){const mt=S[Et],Kt=v[Et];mt!==null&&Kt!==void 0&&Kt.update(mt,lt,l||o)}g.render(t,M),St&&St(Y,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const he=new Nm;he.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const er=new vi,cA=new we;function lA(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Tm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,S=y.envMapRotation;if(v&&(p.envMap.value=v,er.copy(S),er.x*=-1,er.y*=-1,er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(er)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uA(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function l(y,v){let S=i[y.id];S===void 0&&(_(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(y,w);const N=t.render.frame;r[y.id]!==N&&(d(y),r[y.id]=N)}function u(y){const v=h();y.__bindingPointIndex=v;const S=s.createBuffer(),w=y.__size,N=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,w,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let N=0,E=S.length;N<E;N++){const L=Array.isArray(S[N])?S[N]:[S[N]];for(let x=0,M=L.length;x<M;x++){const V=L[x];if(f(V,N,x,w)===!0){const q=V.__offset,P=Array.isArray(V.value)?V.value:[V.value];let K=0;for(let j=0;j<P.length;j++){const it=P[j],st=g(it);typeof it=="number"||typeof it=="boolean"?(V.__data[0]=it,s.bufferSubData(s.UNIFORM_BUFFER,q+K,V.__data)):it.isMatrix3?(V.__data[0]=it.elements[0],V.__data[1]=it.elements[1],V.__data[2]=it.elements[2],V.__data[3]=0,V.__data[4]=it.elements[3],V.__data[5]=it.elements[4],V.__data[6]=it.elements[5],V.__data[7]=0,V.__data[8]=it.elements[6],V.__data[9]=it.elements[7],V.__data[10]=it.elements[8],V.__data[11]=0):(it.toArray(V.__data,K),K+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,S,w){const N=y.value,E=v+"_"+S;if(w[E]===void 0)return typeof N=="number"||typeof N=="boolean"?w[E]=N:w[E]=N.clone(),!0;{const L=w[E];if(typeof N=="number"||typeof N=="boolean"){if(L!==N)return w[E]=N,!0}else if(L.equals(N)===!1)return L.copy(N),!0}return!1}function _(y){const v=y.uniforms;let S=0;const w=16;for(let E=0,L=v.length;E<L;E++){const x=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,V=x.length;M<V;M++){const q=x[M],P=Array.isArray(q.value)?q.value:[q.value];for(let K=0,j=P.length;K<j;K++){const it=P[K],st=g(it),W=S%w;W!==0&&w-W<st.boundary&&(S+=w-W),q.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=st.storage}}}const N=S%w;return N>0&&(S+=w-N),y.__size=S,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class hA{constructor(t={}){const{canvas:e=ry(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let S=!1,w=0,N=0,E=null,L=-1,x=null;const M=new oe,V=new oe;let q=null;const P=new Ut(0);let K=0,j=e.width,it=e.height,st=1,W=null,ut=null;const ct=new oe(0,0,j,it),St=new oe(0,0,j,it);let Vt=!1;const he=new wh;let Y=!1,lt=!1;const Et=new we,mt=new F,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Jt(){return E===null?st:1}let B=n;function Ee(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mh}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),B===null){const z="webgl2";if(B=Ee(z,A),B===null)throw Ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Pt,Me,Ft,ne,$t,ie,Ue,R,T,$,nt,ot,at,Lt,xt,vt,Xt,dt,Rt,se,It,Mt,qt,Qt;function He(){Pt=new xT(B),Pt.init(),Mt=new eA(B,Pt),Me=new fT(B,Pt,t,Mt),Ft=new QE(B),ne=new ST(B),$t=new zE,ie=new tA(B,Pt,Ft,$t,Me,Mt,ne),Ue=new mT(v),R=new vT(v),T=new Ry(B),qt=new hT(B,T),$=new yT(B,T,ne,qt),nt=new ET(B,$,T,ne),Rt=new TT(B,Me,ie),vt=new pT($t),ot=new VE(v,Ue,R,Pt,Me,qt,vt),at=new lA(v,$t),Lt=new kE,xt=new YE(Pt),dt=new uT(v,Ue,R,Ft,nt,d,c),Xt=new JE(v,nt,Me),Qt=new uA(B,ne,Me,Ft),se=new dT(B,Pt,ne),It=new MT(B,Pt,ne),ne.programs=ot.programs,v.capabilities=Me,v.extensions=Pt,v.properties=$t,v.renderLists=Lt,v.shadowMap=Xt,v.state=Ft,v.info=ne}He();const Yt=new aA(v,B);this.xr=Yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(A){A!==void 0&&(st=A,this.setSize(j,it,!1))},this.getSize=function(A){return A.set(j,it)},this.setSize=function(A,z,X=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,it=z,e.width=Math.floor(A*st),e.height=Math.floor(z*st),X===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(j*st,it*st).floor()},this.setDrawingBufferSize=function(A,z,X){j=A,it=z,st=X,e.width=Math.floor(A*X),e.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,z,X,H){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,z,X,H),Ft.viewport(M.copy(ct).multiplyScalar(st).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,z,X,H){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,z,X,H),Ft.scissor(V.copy(St).multiplyScalar(st).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(A){Ft.setScissorTest(Vt=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(A=!0,z=!0,X=!0){let H=0;if(A){let G=!1;if(E!==null){const _t=E.texture.format;G=_t===hm||_t===um||_t===lm}if(G){const _t=E.texture.type,Nt=_t===Bs||_t===Mo||_t===rm||_t===ba||_t===am||_t===cm,wt=dt.getClearColor(),Dt=dt.getClearAlpha(),zt=wt.r,Gt=wt.g,jt=wt.b;Nt?(f[0]=zt,f[1]=Gt,f[2]=jt,f[3]=Dt,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=zt,_[1]=Gt,_[2]=jt,_[3]=Dt,B.clearBufferiv(B.COLOR,0,_))}else H|=B.COLOR_BUFFER_BIT}z&&(H|=B.DEPTH_BUFFER_BIT),X&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Lt.dispose(),xt.dispose(),$t.dispose(),Ue.dispose(),R.dispose(),nt.dispose(),qt.dispose(),Qt.dispose(),ot.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",de),Yt.removeEventListener("sessionend",Ui),An.stop()};function D(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ne.autoReset,z=Xt.enabled,X=Xt.autoUpdate,H=Xt.needsUpdate,G=Xt.type;He(),ne.autoReset=A,Xt.enabled=z,Xt.autoUpdate=X,Xt.needsUpdate=H,Xt.type=G}function tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const z=A.target;z.removeEventListener("dispose",gt),yt(z)}function yt(A){re(A),$t.remove(A)}function re(A){const z=$t.get(A).programs;z!==void 0&&(z.forEach(function(X){ot.releaseProgram(X)}),A.isShaderMaterial&&ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,H,G,_t){z===null&&(z=Kt);const Nt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Hv(A,z,X,H,G);Ft.setMaterial(H,Nt);let Dt=X.index,zt=1;if(H.wireframe===!0){if(Dt=$.getWireframeAttribute(X),Dt===void 0)return;zt=2}const Gt=X.drawRange,jt=X.attributes.position;let qe=Gt.start*zt,pn=(Gt.start+Gt.count)*zt;_t!==null&&(qe=Math.max(qe,_t.start*zt),pn=Math.min(pn,(_t.start+_t.count)*zt)),Dt!==null?(qe=Math.max(qe,0),pn=Math.min(pn,Dt.count)):jt!=null&&(qe=Math.max(qe,0),pn=Math.min(pn,jt.count));const Xn=pn-qe;if(Xn<0||Xn===1/0)return;qt.setup(G,H,wt,X,Dt);let ts,ce=se;if(Dt!==null&&(ts=T.get(Dt),ce=It,ce.setIndex(ts)),G.isMesh)H.wireframe===!0?(Ft.setLineWidth(H.wireframeLinewidth*Jt()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(G.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),Ft.setLineWidth(Bt*Jt()),G.isLineSegments?ce.setMode(B.LINES):G.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else G.isPoints?ce.setMode(B.POINTS):G.isSprite&&ce.setMode(B.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?ce.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ce.renderInstances(qe,Xn,G.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xo=Math.min(X.instanceCount,Bt);ce.renderInstances(qe,Xn,Xo)}else ce.render(qe,Xn)};function Ae(A,z,X){A.transparent===!0&&A.side===Gi&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,Va(A,z,X),A.side=zs,A.needsUpdate=!0,Va(A,z,X),A.side=Gi):Va(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),p=xt.get(X),p.init(z),y.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==X&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const H=new Set;return A.traverse(function(G){const _t=G.material;if(_t)if(Array.isArray(_t))for(let Nt=0;Nt<_t.length;Nt++){const wt=_t[Nt];Ae(wt,X,G),H.add(wt)}else Ae(_t,X,G),H.add(_t)}),y.pop(),p=null,H},this.compileAsync=function(A,z,X=null){const H=this.compile(A,z,X);return new Promise(G=>{function _t(){if(H.forEach(function(Nt){$t.get(Nt).currentProgram.isReady()&&H.delete(Nt)}),H.size===0){G(A);return}setTimeout(_t,10)}Pt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Fe=null;function fn(A){Fe&&Fe(A)}function de(){An.stop()}function Ui(){An.start()}const An=new Nm;An.setAnimationLoop(fn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(A){Fe=A,Yt.setAnimationLoop(A),A===null?An.stop():An.start()},Yt.addEventListener("sessionstart",de),Yt.addEventListener("sessionend",Ui),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(z),z=Yt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,E),p=xt.get(A,y.length),p.init(z),y.push(p),Et.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),he.setFromProjectionMatrix(Et),lt=this.localClippingEnabled,Y=vt.init(this.clippingPlanes,lt),g=Lt.get(A,m.length),g.init(),m.push(g),xd(A,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,ut);const X=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1;X&&dt.addToRenderList(g,A),this.info.render.frame++,Y===!0&&vt.beginShadows();const H=p.state.shadowsArray;Xt.render(H,A,z),Y===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,_t=g.transmissive;if(p.setupLights(v._useLegacyLights),z.isArrayCamera){const Nt=z.cameras;if(_t.length>0)for(let wt=0,Dt=Nt.length;wt<Dt;wt++){const zt=Nt[wt];Md(G,_t,A,zt)}X&&dt.render(A);for(let wt=0,Dt=Nt.length;wt<Dt;wt++){const zt=Nt[wt];yd(g,A,zt,zt.viewport)}}else _t.length>0&&Md(G,_t,A,z),X&&dt.render(A),yd(g,A,z);E!==null&&(ie.updateMultisampleRenderTarget(E),ie.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,z),qt.resetDefaultState(),L=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&vt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function xd(A,z,X,H){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){H&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Et);const Nt=nt.update(A),wt=A.material;wt.visible&&g.push(A,Nt,wt,X,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Nt=nt.update(A),wt=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),mt.copy(Nt.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(Et)),Array.isArray(wt)){const Dt=Nt.groups;for(let zt=0,Gt=Dt.length;zt<Gt;zt++){const jt=Dt[zt],qe=wt[jt.materialIndex];qe&&qe.visible&&g.push(A,Nt,qe,X,mt.z,jt)}}else wt.visible&&g.push(A,Nt,wt,X,mt.z,null)}}const _t=A.children;for(let Nt=0,wt=_t.length;Nt<wt;Nt++)xd(_t[Nt],z,X,H)}function yd(A,z,X,H){const G=A.opaque,_t=A.transmissive,Nt=A.transparent;p.setupLightsView(X),Y===!0&&vt.setGlobalState(v.clippingPlanes,X),H&&Ft.viewport(M.copy(H)),G.length>0&&Fa(G,z,X),_t.length>0&&Fa(_t,z,X),Nt.length>0&&Fa(Nt,z,X),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Md(A,z,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ar(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?wa:Bs,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _t=p.state.transmissionRenderTarget[H.id],Nt=H.viewport||M;_t.setSize(Nt.z,Nt.w);const wt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(P),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=mi;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Y===!0&&vt.setGlobalState(v.clippingPlanes,H),Fa(A,X,H),ie.updateMultisampleRenderTarget(_t),ie.updateRenderTargetMipmap(_t),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let jt=0,qe=z.length;jt<qe;jt++){const pn=z[jt],Xn=pn.object,ts=pn.geometry,ce=pn.material,Bt=pn.group;if(ce.side===Gi&&Xn.layers.test(H.layers)){const Xo=ce.side;ce.side=Rn,ce.needsUpdate=!0,Sd(Xn,X,H,ts,ce,Bt),ce.side=Xo,ce.needsUpdate=!0,Gt=!0}}Gt===!0&&(ie.updateMultisampleRenderTarget(_t),ie.updateRenderTargetMipmap(_t))}v.setRenderTarget(wt),v.setClearColor(P,K),zt!==void 0&&(H.viewport=zt),v.toneMapping=Dt}function Fa(A,z,X){const H=z.isScene===!0?z.overrideMaterial:null;for(let G=0,_t=A.length;G<_t;G++){const Nt=A[G],wt=Nt.object,Dt=Nt.geometry,zt=H===null?Nt.material:H,Gt=Nt.group;wt.layers.test(X.layers)&&Sd(wt,z,X,Dt,zt,Gt)}}function Sd(A,z,X,H,G,_t){A.onBeforeRender(v,z,X,H,G,_t),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,z,X,H,A,_t),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,v.renderBufferDirect(X,z,H,G,A,_t),G.side=zs,G.needsUpdate=!0,v.renderBufferDirect(X,z,H,G,A,_t),G.side=Gi):v.renderBufferDirect(X,z,H,G,A,_t),A.onAfterRender(v,z,X,H,G,_t)}function Va(A,z,X){z.isScene!==!0&&(z=Kt);const H=$t.get(A),G=p.state.lights,_t=p.state.shadowsArray,Nt=G.state.version,wt=ot.getParameters(A,G.state,_t,z,X),Dt=ot.getProgramCacheKey(wt);let zt=H.programs;H.environment=A.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(A.isMeshStandardMaterial?R:Ue).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",gt),zt=new Map,H.programs=zt);let Gt=zt.get(Dt);if(Gt!==void 0){if(H.currentProgram===Gt&&H.lightsStateVersion===Nt)return Ed(A,wt),Gt}else wt.uniforms=ot.getUniforms(A),A.onBuild(X,wt,v),A.onBeforeCompile(wt,v),Gt=ot.acquireProgram(wt,Dt),zt.set(Dt,Gt),H.uniforms=wt.uniforms;const jt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=vt.uniform),Ed(A,wt),H.needsLights=Wv(A),H.lightsStateVersion=Nt,H.needsLights&&(jt.ambientLightColor.value=G.state.ambient,jt.lightProbe.value=G.state.probe,jt.directionalLights.value=G.state.directional,jt.directionalLightShadows.value=G.state.directionalShadow,jt.spotLights.value=G.state.spot,jt.spotLightShadows.value=G.state.spotShadow,jt.rectAreaLights.value=G.state.rectArea,jt.ltc_1.value=G.state.rectAreaLTC1,jt.ltc_2.value=G.state.rectAreaLTC2,jt.pointLights.value=G.state.point,jt.pointLightShadows.value=G.state.pointShadow,jt.hemisphereLights.value=G.state.hemi,jt.directionalShadowMap.value=G.state.directionalShadowMap,jt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,jt.spotShadowMap.value=G.state.spotShadowMap,jt.spotLightMatrix.value=G.state.spotLightMatrix,jt.spotLightMap.value=G.state.spotLightMap,jt.pointShadowMap.value=G.state.pointShadowMap,jt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Gt,H.uniformsList=null,Gt}function Td(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=fc.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ed(A,z){const X=$t.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Hv(A,z,X,H,G){z.isScene!==!0&&(z=Kt),ie.resetTextureUnits();const _t=z.fog,Nt=H.isMeshStandardMaterial?z.environment:null,wt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oi,Dt=(H.isMeshStandardMaterial?R:Ue).get(H.envMap||Nt),zt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),jt=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,pn=!!X.morphAttributes.color;let Xn=mi;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Xn=v.toneMapping);const ts=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=ts!==void 0?ts.length:0,Bt=$t.get(H),Xo=p.state.lights;if(Y===!0&&(lt===!0||A!==x)){const ai=A===x&&H.id===L;vt.setState(H,A,ai)}let Re=!1;H.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Xo.state.version||Bt.outputColorSpace!==wt||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==Dt||H.fog===!0&&Bt.fog!==_t||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==vt.numPlanes||Bt.numIntersection!==vt.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==Gt||Bt.morphTargets!==jt||Bt.morphNormals!==qe||Bt.morphColors!==pn||Bt.toneMapping!==Xn||Bt.morphTargetsCount!==ce)&&(Re=!0):(Re=!0,Bt.__version=H.version);let js=Bt.currentProgram;Re===!0&&(js=Va(H,z,G));let Ad=!1,qo=!1,xl=!1;const mn=js.getUniforms(),ys=Bt.uniforms;if(Ft.useProgram(js.program)&&(Ad=!0,qo=!0,xl=!0),H.id!==L&&(L=H.id,qo=!0),Ad||x!==A){mn.setValue(B,"projectionMatrix",A.projectionMatrix),mn.setValue(B,"viewMatrix",A.matrixWorldInverse);const ai=mn.map.cameraPosition;ai!==void 0&&ai.setValue(B,mt.setFromMatrixPosition(A.matrixWorld)),Me.logarithmicDepthBuffer&&mn.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mn.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,qo=!0,xl=!0)}if(G.isSkinnedMesh){mn.setOptional(B,G,"bindMatrix"),mn.setOptional(B,G,"bindMatrixInverse");const ai=G.skeleton;ai&&(ai.boneTexture===null&&ai.computeBoneTexture(),mn.setValue(B,"boneTexture",ai.boneTexture,ie))}G.isBatchedMesh&&(mn.setOptional(B,G,"batchingTexture"),mn.setValue(B,"batchingTexture",G._matricesTexture,ie));const yl=X.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0)&&Rt.update(G,X,js),(qo||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,mn.setValue(B,"receiveShadow",G.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ys.envMap.value=Dt,ys.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&z.environment!==null&&(ys.envMapIntensity.value=z.environmentIntensity),qo&&(mn.setValue(B,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Gv(ys,xl),_t&&H.fog===!0&&at.refreshFogUniforms(ys,_t),at.refreshMaterialUniforms(ys,H,st,it,p.state.transmissionRenderTarget[A.id]),fc.upload(B,Td(Bt),ys,ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fc.upload(B,Td(Bt),ys,ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mn.setValue(B,"center",G.center),mn.setValue(B,"modelViewMatrix",G.modelViewMatrix),mn.setValue(B,"normalMatrix",G.normalMatrix),mn.setValue(B,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ai=H.uniformsGroups;for(let Ml=0,Xv=ai.length;Ml<Xv;Ml++){const Nd=ai[Ml];Qt.update(Nd,js),Qt.bind(Nd,js)}}return js}function Gv(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Wv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,z,X){$t.get(A.texture).__webglTexture=z,$t.get(A.depthTexture).__webglTexture=X;const H=$t.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const X=$t.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){E=A,w=z,N=X;let H=!0,G=null,_t=!1,Nt=!1;if(A){const Dt=$t.get(A);Dt.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(B.FRAMEBUFFER,null),H=!1):Dt.__webglFramebuffer===void 0?ie.setupRenderTarget(A):Dt.__hasExternalTextures&&ie.rebindTextures(A,$t.get(A.texture).__webglTexture,$t.get(A.depthTexture).__webglTexture);const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Nt=!0);const Gt=$t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?G=Gt[z][X]:G=Gt[z],_t=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?G=$t.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[X]:G=Gt,M.copy(A.viewport),V.copy(A.scissor),q=A.scissorTest}else M.copy(ct).multiplyScalar(st).floor(),V.copy(St).multiplyScalar(st).floor(),q=Vt;if(Ft.bindFramebuffer(B.FRAMEBUFFER,G)&&H&&Ft.drawBuffers(A,G),Ft.viewport(M),Ft.scissor(V),Ft.setScissorTest(q),_t){const Dt=$t.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,X)}else if(Nt){const Dt=$t.get(A.texture),zt=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,zt)}L=-1},this.readRenderTargetPixels=function(A,z,X,H,G,_t,Nt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(wt=wt[Nt]),wt){Ft.bindFramebuffer(B.FRAMEBUFFER,wt);try{const Dt=A.texture,zt=Dt.format,Gt=Dt.type;if(!Me.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-H&&X>=0&&X<=A.height-G&&B.readPixels(z,X,H,G,Mt.convert(zt),Mt.convert(Gt),_t)}finally{const Dt=E!==null?$t.get(E).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,z,X=0){const H=Math.pow(2,-X),G=Math.floor(z.image.width*H),_t=Math.floor(z.image.height*H);ie.setTexture2D(z,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,A.x,A.y,G,_t),Ft.unbindTexture()},this.copyTextureToTexture=function(A,z,X,H=0){const G=z.image.width,_t=z.image.height,Nt=Mt.convert(X.format),wt=Mt.convert(X.type);ie.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,A.x,A.y,G,_t,Nt,wt,z.image.data):z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Nt,z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,H,A.x,A.y,Nt,wt,z.image),H===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X,H,G=0){const _t=A.max.x-A.min.x,Nt=A.max.y-A.min.y,wt=A.max.z-A.min.z,Dt=Mt.convert(H.format),zt=Mt.convert(H.type);let Gt;if(H.isData3DTexture)ie.setTexture3D(H,0),Gt=B.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ie.setTexture2DArray(H,0),Gt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const jt=B.getParameter(B.UNPACK_ROW_LENGTH),qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Xn=B.getParameter(B.UNPACK_SKIP_ROWS),ts=B.getParameter(B.UNPACK_SKIP_IMAGES),ce=X.isCompressedTexture?X.mipmaps[G]:X.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Gt,G,z.x,z.y,z.z,_t,Nt,wt,Dt,zt,ce.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Gt,G,z.x,z.y,z.z,_t,Nt,wt,Dt,ce.data):B.texSubImage3D(Gt,G,z.x,z.y,z.z,_t,Nt,wt,Dt,zt,ce),B.pixelStorei(B.UNPACK_ROW_LENGTH,jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ts),G===0&&H.generateMipmaps&&B.generateMipmap(Gt),Ft.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){w=0,N=0,E=null,Ft.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sh?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Zc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class dA extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return _m("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new F;class Ch{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new gi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ch(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fA extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class pA extends gi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class Im extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}class Dm extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class Om extends Cn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Mn,this.minFilter=Mn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Lh extends vs{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new F,u=new Ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _i(o,3)),this.setAttribute("normal",new _i(a,3)),this.setAttribute("uv",new _i(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mA extends ri{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ut(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ph extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gA extends Ph{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _A extends ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vA extends ri{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class xA extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Um extends Im{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const $f={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yA{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const MA=new yA;class Ih{constructor(t){this.manager=t!==void 0?t:MA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const os={};class SA extends Error{constructor(t,e){super(t),this.response=e}}class TA extends Ih{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=$f.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(os[t]!==void 0){os[t].push({onLoad:e,onProgress:n,onError:i});return}os[t]=[],os[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=os[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let N=0,E=u.length;N<E;N++){const L=u[N];L.onProgress&&L.onProgress(w)}m.enqueue(S),y()}})}}});return new Response(p)}else throw new SA(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{$f.add(t,l);const u=os[t];delete os[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=os[t];if(u===void 0)throw this.manager.itemError(t),l;delete os[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class La extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class EA extends La{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ql=new we,jf=new F,Zf=new F;class Dh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jf.setFromMatrixPosition(t.matrixWorld),e.position.copy(jf),Zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zf),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class AA extends Dh{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=To*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Fm extends La{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new AA}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Kf=new we,Ko=new F,tu=new F;class NA extends Dh{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ko),tu.copy(n.position),tu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tu),n.updateMatrixWorld(),i.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}}class wA extends La{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new NA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bA extends Dh{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vm extends La{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new bA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zm extends La{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let cc;class Bm{static getContext(){return cc===void 0&&(cc=new(window.AudioContext||window.webkitAudioContext)),cc}static setContext(t){cc=t}}class RA extends Ih{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new TA(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const l=c.slice(0);Bm.getContext().decodeAudioData(l,function(h){e(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(t)}}}class CA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jf(){return(typeof performance>"u"?Date:performance).now()}const nr=new F,Qf=new Do,LA=new F,ir=new F;class PA extends Xe{constructor(){super(),this.type="AudioListener",this.context=Bm.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new CA}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(nr,Qf,LA),ir.set(0,0,-1).applyQuaternion(Qf),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(nr.x,i),e.positionY.linearRampToValueAtTime(nr.y,i),e.positionZ.linearRampToValueAtTime(nr.z,i),e.forwardX.linearRampToValueAtTime(ir.x,i),e.forwardY.linearRampToValueAtTime(ir.y,i),e.forwardZ.linearRampToValueAtTime(ir.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(nr.x,nr.y,nr.z),e.setOrientation(ir.x,ir.y,ir.z,n.x,n.y,n.z)}}class IA extends Xe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class DA extends Pm{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const tp=new we;class OA{constructor(t,e,n=0,i=1/0){this.ray=new xm(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tp),this}intersectObject(t,e=!0,n=[]){return Uu(t,this,n,e),n.sort(ep),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Uu(t[i],this,n,e);return n.sort(ep),n}}function ep(s,t){return s.distance-t.distance}function Uu(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Uu(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function cs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function km(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},Oh,Sn,Ce,fi=1e8,Se=1/fi,Fu=Math.PI*2,UA=Fu/4,FA=0,Hm=Math.sqrt,VA=Math.cos,zA=Math.sin,an=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},ms=function(t){return typeof t=="number"},Uh=function(t){return typeof t>"u"},Zi=function(t){return typeof t=="object"},Vn=function(t){return t!==!1},Fh=function(){return typeof window<"u"},lc=function(t){return Be(t)||an(t)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,Vu=/(?:-?\.?\d|\.)+/gi,Wm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,to=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xm=/[+-]=-?[.\d]+/,qm=/[^,'"\[\]\s]+/gi,BA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,Vi,zu,Vh,ni={},Nc={},Ym,$m=function(t){return(Nc=Nr(t,ni))&&Gn},zh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},pa=function(t,e){return!e&&console.warn(t)},jm=function(t,e){return t&&(ni[t]=e)&&Nc&&(Nc[t]=e)||ni},ma=function(){return 0},kA={suppressEvents:!0,isStart:!0,kill:!1},pc={suppressEvents:!0,kill:!1},HA={suppressEvents:!0},Bh={},Fs=[],Bu={},Zm,jn={},nu={},np=30,mc=[],kh="",Hh=function(t){var e=t[0],n,i;if(Zi(e)||Be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=mc.length;i--&&!mc[i].targetTest(e););n=mc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yg(t[i],n)))||t.splice(i,1);return t},_r=function(t){return t._gsap||Hh(pi(t))[0]._gsap},Km=function(t,e,n){return(n=t[e])&&Be(n)?t[e]():Uh(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},rn=function(t){return Math.round(t*1e7)/1e7||0},lo=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},GA=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wc=function(){var t=Fs.length,e=Fs.slice(0),n,i;for(Bu={},Fs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jm=function(t,e,n,i){Fs.length&&!Sn&&wc(),t.render(e,n,Sn&&e<0&&(t._initted||t._startAt)),Fs.length&&!Sn&&wc()},Qm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qm).length<2?e:an(t)?t.trim():t},tg=function(t){return t},xi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},WA=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Nr=function(t,e){for(var n in e)t[n]=e[n];return t},ip=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},bc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},aa=function(t){var e=t.parent||Pe,n=t.keyframes?WA(Tn(t.keyframes)):xi;if(Vn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},XA=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},eg=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Hs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},qA=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ku=function(t,e,n,i){return t._startAt&&(Sn?t._startAt.revert(pc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},YA=function s(t){return!t||t._ts&&s(t.parent)},sp=function(t){return t._repeat?No(t._tTime,t=t.duration()+t._rDelay)*t:0},No=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Rc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},el=function(t){return t._end=rn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},nl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=rn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),el(t),n._dirty||vr(n,t)),t},ng=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Rc(t.rawTime(),e),(!e._dur||Pa(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Xi=function(t,e,n,i){return e.parent&&Hs(e),e._start=rn((ms(n)?n:n||t!==Pe?li(t,n,e):t._time)+e._delay),e._end=rn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),eg(t,e,"_first","_last",t._sort?"_start":0),Hu(e)||(t._recent=e),i||ng(t,e),t._ts<0&&nl(t,t._tTime),t},ig=function(t,e){return(ni.ScrollTrigger||zh("scrollTrigger",e))&&ni.ScrollTrigger.create(e,t)},sg=function(t,e,n,i,r){if(Wh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Sn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zm!==Zn.frame)return Fs.push(t),t._lazy=[r,i],1},$A=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Hu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},jA=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&$A(t)&&!(!t._initted&&Hu(t))||(t._ts<0||t._dp._ts<0)&&!Hu(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=Pa(0,t._tDur,e),u=No(c,a),t._yoyo&&u&1&&(o=1-o),u!==No(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Sn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&sg(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&ku(t,e,n,!0),t._onUpdate&&!n&&Kn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Hs(t,1),!n&&!Sn&&(Kn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ZA=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wo=function(t,e,n,i){var r=t._repeat,o=rn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:rn(o*(r+1)+t._rDelay*r):o,a>0&&!i&&nl(t,t._tTime=t._tDur*a),t.parent&&el(t),n||vr(t.parent,t),t},rp=function(t){return t instanceof bn?vr(t):wo(t,t._dur)},KA={_start:0,endTime:ma,totalDuration:ma},li=function s(t,e,n){var i=t.labels,r=t._recent||KA,o=t.duration()>=fi?r.endTime(!1):t._dur,a,c,l;return an(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Tn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},ca=function(t,e,n){var i=ms(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Vn(c.vars.inherit)&&c.parent;o.immediateRender=Vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new $e(e[0],o,e[r+1])},$s=function(t,e){return t||t===0?e(t):e},Pa=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!an(t)||!(e=BA.exec(t))?"":e[1]},JA=function(t,e,n){return $s(n,function(i){return Pa(t,e,i)})},Gu=[].slice,rg=function(t,e){return t&&Zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zi(t[0]))&&!t.nodeType&&t!==Vi},QA=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return an(i)&&!e||rg(i,1)?(r=n).push.apply(r,pi(i)):n.push(i)})||n},pi=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):an(t)&&!n&&(zu||!bo())?Gu.call((e||Vh).querySelectorAll(t),0):Tn(t)?QA(t,n):rg(t)?Gu.call(t,0):t?[t]:[]},Wu=function(t){return t=pi(t)[0]||pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pi(e,n.querySelectorAll?n:n===t?pa("Invalid scope")||Vh.createElement("div"):t)}},og=function(t){return t.sort(function(){return .5-Math.random()})},ag=function(t){if(Be(t))return t;var e=Zi(t)?t:{each:t},n=xr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,u=i,h=i;return an(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||e).length,p=o[g],m,y,v,S,w,N,E,L,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,fi])[1],!x){for(E=-fi;E<(E=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(p=o[g]=[],m=c?Math.min(x,g)*u-.5:i%x,y=x===fi?0:c?g*h/x-.5:i/x|0,E=0,L=fi,N=0;N<g;N++)v=N%x-m,S=y-(N/x|0),p[N]=w=l?Math.abs(l==="y"?S:v):Hm(v*v+S*S),w>E&&(E=w),w<L&&(L=w);i==="random"&&og(p),p.max=E-L,p.min=L,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=yn(e.amount||e.each)||0,n=n&&g<0?_g(n):n}return g=(p[d]-p.min)/p.max||0,rn(p.b+(n?n(g):g)*p.v)+p.u}},Xu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=rn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ms(n)?0:yn(n))}},cg=function(t,e){var n=Tn(t),i,r;return!n&&Zi(t)&&(i=n=t.radius||fi,t.values?(t=pi(t.values),(r=!ms(t[0]))&&(i*=i)):t=Xu(t.increment)),$s(e,n?Be(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=fi,u=0,h=t.length,d,f;h--;)r?(d=t[h].x-a,f=t[h].y-c,d=d*d+f*f):d=Math.abs(t[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?t[u]:o,r||u===o||ms(o)?u:u+yn(o)}:Xu(t))},lg=function(t,e,n,i){return $s(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},tN=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},eN=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},nN=function(t,e,n){return hg(t,e,0,1,n)},ug=function(t,e,n){return $s(n,function(i){return t[~~e(i)]})},iN=function s(t,e,n){var i=e-t;return Tn(t)?ug(t,s(0,t.length),e):$s(n,function(r){return(i+(r-t)%i)%i+t})},sN=function s(t,e,n){var i=e-t,r=i*2;return Tn(t)?ug(t,s(0,t.length-1),e):$s(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},ga=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?qm:Vu),n+=t.substr(e,i-e)+lg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},hg=function(t,e,n,i,r){var o=e-t,a=i-n;return $s(r,function(c){return n+((c-t)/o*a||0)})},rN=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=an(t),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(u=[],h=t.length,d=h-2,l=1;l<h;l++)u.push(s(t[l-1],t[l]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else i||(t=Nr(Tn(t)?[]:{},t));if(!u){for(c in e)Gh.call(a,t,c,"get",e[c]);r=function(_){return Yh(_,a)||(o?t.p:t)}}}return $s(n,r)},op=function(t,e,n){var i=t.labels,r=fi,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Kn=function(t,e,n){var i=t.vars,r=i[e],o=Ce,a=t._ctx,c,l,u;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Fs.length&&wc(),a&&(Ce=a),u=c?r.apply(l,c):r.call(l),Ce=o,u},ia=function(t){return Hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Sn),t.progress()<1&&Kn(t,"onInterrupt"),t},eo,dg=[],fg=function(t){if(t)if(t=!t.name&&t.default||t,Fh()||t.headless){var e=t.name,n=Be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ma,render:Yh,add:Gh,kill:MN,modifier:yN,rawVars:0},o={targetTest:0,get:0,getSetter:qh,aliases:{},register:0};if(bo(),t!==i){if(jn[e])return;xi(i,xi(bc(t,r),o)),Nr(i.prototype,Nr(r,bc(t,o))),jn[i.prop=e]=i,t.targetTest&&(mc.push(i),Bh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jm(e,i),t.register&&t.register(Gn,i,Bn)}else dg.push(t)},ge=255,sa={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},iu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ge+.5|0},pg=function(t,e,n){var i=t?ms(t)?[t>>16,t>>8&ge,t&ge]:0:sa.black,r,o,a,c,l,u,h,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),sa[t])i=sa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ge,i&ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ge,t&ge]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Vu),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=iu(c+1/3,r,o),i[1]=iu(c,r,o),i[2]=iu(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Wm),n&&i.length<4&&(i[3]=1),i}else i=t.match(Vu)||sa.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ge,o=i[1]/ge,a=i[2]/ge,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mg=function(t){var e=[],n=[],i=-1;return t.split(Vs).forEach(function(r){var o=r.match(to)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ap=function(t,e,n){var i="",r=(t+i).match(Vs),o=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return t;if(r=r.map(function(d){return(d=pg(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=mg(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(Vs,"1").split(to),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(Vs),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Vs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in sa)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),oN=/hsl[a]?\(/,gg=function(t){var e=t.join(" "),n;if(Vs.lastIndex=0,Vs.test(e))return n=oN.test(e),t[1]=ap(t[1],n),t[0]=ap(t[0],n,mg(t[1])),!0},_a,Zn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,f,_=function g(p){var m=s()-i,y=p===!0,v,S,w,N;if((m>t||m<0)&&(n+=m-e),i+=m,w=i-n,v=w-o,(v>0||y)&&(N=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=v+(v>=r?4:r-v),S=1),y||(c=l(g)),S)for(f=0;f<a.length;f++)a[f](w,d,N,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Ym&&(!zu&&Fh()&&(Vi=zu=window,Vh=Vi.document||{},ni.gsap=Gn,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(Gn.version),$m(Nc||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),dg.forEach(fg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},_a=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),_a=0,l=ma},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,y){var v=m?function(S,w,N,E){p(S,w,N,E),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),bo(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),bo=function(){return!_a&&Zn.wake()},ee={},aN=/^[\d.\-M][\d.\-,\s]/,cN=/["']/g,lN=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(cN,"").trim():+l,i=c.substr(a+1).trim();return e},uN=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hN=function(t){var e=(t+"").split("("),n=ee[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[lN(e[1])]:uN(t).split(",").map(Qm)):ee._CE&&aN.test(t)?ee._CE("",t):n},_g=function(t){return function(e){return 1-t(1-e)}},vg=function s(t,e){for(var n=t._first,i;n;)n instanceof bn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},xr=function(t,e){return t&&(Be(t)?t:ee[t]||hN(t))||e},Lr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return zn(t,function(a){ee[a]=ni[a]=r,ee[o=a.toLowerCase()]=n;for(var c in r)ee[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ee[a+"."+c]=r[c]}),r},xg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},su=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Fu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*zA((u-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:xg(a);return r=Fu/r,c.config=function(l,u){return s(t,l,u)},c},ru=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:xg(n);return i.config=function(r){return s(t,r)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Lr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ee.Linear.easeNone=ee.none=ee.Linear.easeIn;Lr("Elastic",su("in"),su("out"),su());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Lr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Lr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Lr("Circ",function(s){return-(Hm(1-s*s)-1)});Lr("Sine",function(s){return s===1?1:-VA(s*UA)+1});Lr("Back",ru("in"),ru("out"),ru());ee.SteppedEase=ee.steps=ni.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Se;return function(a){return((i*Pa(0,o,a)|0)+r)*n}}};Ao.ease=ee["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return kh+=s+","+s+"Params,"});var yg=function(t,e){this.id=FA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Km,this.set=e?e.getSetter:qh},va=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wo(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),_a||Zn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(bo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(nl(this,n),!r._dp||r.parent||ng(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?No(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Pa(-Math.abs(this._delay),this._tDur,r),i!==!1),el(this),qA(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=HA);var i=Sn;return Sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,rp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(li(this,n),Vn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Be(n)?n:tg,a=function(){var l=i.then;i.then=null,Be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ia(this)},s}();xi(va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var bn=function(s){km(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Vn(n.sortChildren),Pe&&Xi(n.parent||Pe,cs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ig(cs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ca(0,arguments,this),this},e.from=function(i,r,o){return ca(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ca(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,aa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $e(i,r,li(this,o),1),this},e.call=function(i,r,o){return Xi(this,$e.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new $e(i,o,li(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,aa(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},e.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,aa(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:rn(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,p,m,y,v,S,w,N,E;if(this!==Pe&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,v=this._ts,m=!v,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(N=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=rn(u%p),u===c?(g=this._repeat,d=l):(g=~~(u/p),g&&g===u/p&&(d=l,g--),d>l&&(d=l)),w=No(this._tTime,p),!a&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),N&&g&1&&(d=l-d,E=1),g!==w&&!this._lock){var L=N&&w&1,x=L===(N&&g&1);if(g<w&&(L=!L),a=L?0:u%l?l:u,this._lock=1,this.render(a||(E?0:rn(g*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=L?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vg(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ZA(this,rn(a),rn(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(Kn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-Se);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,o||Sn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=M?-Se:Se);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-Se)._zTime=d>=a?1:-1,this._ts))return this._start=S,el(this),this.render(i,r,o);this._onUpdate&&!r&&Kn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Hs(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(Kn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ms(r)||(r=li(this,r,i)),!(i instanceof va)){if(Tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(an(i))return this.addLabel(i,r);if(Be(i))i=$e.delayedCall(0,i);else return this}return this!==i?Xi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-fi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof $e?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return an(i)?this.removeLabel(i):Be(i)?this.killTweensOf(i):(tl(this,i),i===this._recent&&(this._recent=this._last),vr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=li(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=$e.delayedCall(0,r||ma,o);return a.data="isPause",this._hasPause=1,Xi(this,a,li(this,i))},e.removePause=function(i){var r=this._first;for(i=li(this,i);r;)r._start===i&&r.data==="isPause"&&Hs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Ls!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=pi(i),c=this._first,l=ms(r),u;c;)c instanceof $e?GA(c._targets,a)&&(l?(!Ls||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=li(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=$e.to(o,xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==p&&wo(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,xi({startAt:{time:li(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),op(this,li(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),op(this,li(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return vr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=fi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;wo(o,o===Pe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(Jm(Pe,Rc(i,Pe)),Zm=Zn.frame),Zn.frame>=np){np+=ti.autoSleep||120;var r=Pe._first;if((!r||!r._ts)&&ti.autoSleep&&Zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Zn.sleep()}}},t}(va);xi(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dN=function(t,e,n,i,r,o,a){var c=new Bn(this._pt,t,e,0,1,Ng,null,r),l=0,u=0,h,d,f,_,g,p,m,y;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ga(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),d=n.match(eu)||[];h=eu.exec(i);)_=h[0],g=i.substring(l,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?lo(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},l=eu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Xm.test(i)||m)&&(c.e=0),this._pt=c,c},Gh=function(t,e,n,i,r,o,a,c,l,u){Be(i)&&(i=i(r||0,t,o));var h=t[e],d=n!=="get"?n:Be(h)?l?t[e.indexOf("set")||!Be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,f=Be(h)?l?_N:Eg:Xh,_;if(an(i)&&(~i.indexOf("random(")&&(i=ga(i)),i.charAt(1)==="="&&(_=lo(d,i)+(yn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||qu)return!isNaN(d*i)&&i!==""?(_=new Bn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?xN:Ag,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&zh(e,i),dN.call(this,t,e,d,i,f,c||ti.stringFilter,l))},fN=function(t,e,n,i,r){if(Be(t)&&(t=la(t,r,e,n,i)),!Zi(t)||t.style&&t.nodeType||Tn(t)||Gm(t))return an(t)?la(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=la(t[a],r,e,n,i);return o},Mg=function(t,e,n,i,r,o){var a,c,l,u;if(jn[t]&&(a=new jn[t]).init(r,a.rawVars?e[t]:fN(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Bn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==eo))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Ls,qu,Wh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=t._overwrite==="auto"&&!Oh,S=t.timeline,w,N,E,L,x,M,V,q,P,K,j,it,st;if(S&&(!d||!r)&&(r="none"),t._ease=xr(r,Ao.ease),t._yEase=h?_g(xr(h===!0?r:h,Ao.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(q=p[0]?_r(p[0]).harness:0,it=q&&i[q.prop],w=bc(i,Bh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?pc:kA),g._lazy=0),o){if(Hs(t._startAt=$e.set(p,xi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Vn(c),startAt:null,delay:0,onUpdate:l&&function(){return Kn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Sn||!a&&!f)&&t._startAt.revert(pc),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),E=xi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Vn(c),immediateRender:a,stagger:0,parent:m},w),it&&(E[q.prop]=it),Hs(t._startAt=$e.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Sn?t._startAt.revert(pc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&Vn(c)||c&&!_,N=0;N<p.length;N++){if(x=p[N],V=x._gsap||Hh(p)[N]._gsap,t._ptLookup[N]=K={},Bu[V.id]&&Fs.length&&wc(),j=y===p?N:y.indexOf(x),q&&(P=new q).init(x,it||w,t,j,y)!==!1&&(t._pt=L=new Bn(t._pt,x,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(W){K[W]=L}),P.priority&&(M=1)),!q||it)for(E in w)jn[E]&&(P=Mg(E,w,t,j,x,y))?P.priority&&(M=1):K[E]=L=Gh.call(t,x,E,"get",w[E],j,y,0,i.stringFilter);t._op&&t._op[N]&&t.kill(x,t._op[N]),v&&t._pt&&(Ls=t,Pe.killTweensOf(x,K,t.globalTime(e)),st=!t.parent,Ls=0),t._pt&&c&&(Bu[V.id]=1)}M&&wg(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!st,d&&e<=0&&S.render(fi,!0,!0)},pN=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return qu=1,t.vars[e]="+=0",Wh(t,a),qu=0,c?pa(e+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ge(n)+yn(h.e)),h.b&&(h.b=u.s+yn(h.b))},mN=function(t,e){var n=t[0]?_r(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Nr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},gN=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Tn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},la=function(t,e,n,i,r){return Be(t)?t.call(e,n,i,r):an(t)&&~t.indexOf("random(")?ga(t):t},Sg=kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tg={};zn(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Tg[s]=1});var $e=function(s){km(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:aa(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,y=i.parent||Pe,v=(Tn(n)||Gm(n)?ms(n[0]):"length"in i)?[n]:pi(n),S,w,N,E,L,x,M,V;if(a._targets=v.length?Hh(v):pa("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||lc(l)||lc(u)){if(i=a.vars,S=a.timeline=new bn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=cs(a),S._start=0,d||lc(l)||lc(u)){if(E=v.length,M=d&&ag(d),Zi(d))for(L in d)~Sg.indexOf(L)&&(V||(V={}),V[L]=d[L]);for(w=0;w<E;w++)N=bc(i,Tg),N.stagger=0,m&&(N.yoyoEase=m),V&&Nr(N,V),x=v[w],N.duration=+la(l,cs(a),w,x,v),N.delay=(+la(u,cs(a),w,x,v)||0)-a._delay,!d&&E===1&&N.delay&&(a._delay=u=N.delay,a._start+=u,N.delay=0),S.to(x,N,M?M(w,x,v):0),S._ease=ee.none;S.duration()?l=u=0:a.timeline=0}else if(_){aa(xi(S.vars.defaults,{ease:"none"})),S._ease=xr(_.ease||i.ease||"none");var q=0,P,K,j;if(Tn(_))_.forEach(function(it){return S.to(v,it,">")}),S.duration();else{N={};for(L in _)L==="ease"||L==="easeEach"||gN(L,_[L],N,_.easeEach);for(L in N)for(P=N[L].sort(function(it,st){return it.t-st.t}),q=0,w=0;w<P.length;w++)K=P[w],j={ease:K.e,duration:(K.t-(w?P[w-1].t:0))/100*l},j[L]=K.v,S.to(v,j,q),q+=j.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return f===!0&&!Oh&&(Ls=cs(a),Pe.killTweensOf(v),Ls=0),Xi(y,cs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===rn(y._time)&&Vn(h)&&YA(cs(a))&&y.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-u)||0)),p&&ig(cs(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Se&&!u?c:i<Se?0:i,d,f,_,g,p,m,y,v,S;if(!l)jA(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(d=rn(h%g),h===c?(_=this._repeat,d=l):(_=~~(h/g),_&&_===rn(h/g)&&(d=l,_--),d>l&&(d=l)),m=this._yoyo&&_&1,m&&(S=this._yEase,d=l-d),p=No(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&vg(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(rn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(sg(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!_&&(Kn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ku(this,i,r,o),Kn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ku(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hs(this,1),!r&&!(u&&!a)&&(h||a||m)&&(Kn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){_a||Zn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wh(this,l),u=this._ease(l/this._dur),pN(this,i,r,o,a,u,l,c)?this.resetTo(i,r,o,a,1):(nl(this,0),this.parent||eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ls&&Ls.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?pi(i):a,l=this._ptLookup,u=this._pt,h,d,f,_,g,p,m;if((!r||r==="all")&&XA(a,c))return r==="all"&&(this._pt=0),ia(this);for(h=this._op=this._op||[],r!=="all"&&(an(r)&&(g={},zn(r,function(y){return g[y]=1}),r=g),r=mN(a,r)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],r==="all"?(h[m]=r,_=d,f={}):(f=h[m]=h[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&tl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ia(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ca(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ca(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Pe.killTweensOf(i,r,o)},t}(va);xi($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(s){$e[s]=function(){var t=new bn,e=Gu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Xh=function(t,e,n){return t[e]=n},Eg=function(t,e,n){return t[e](n)},_N=function(t,e,n,i){return t[e](i.fp,n)},vN=function(t,e,n){return t.setAttribute(e,n)},qh=function(t,e){return Be(t[e])?Eg:Uh(t[e])&&t.setAttribute?vN:Xh},Ag=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},xN=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ng=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Yh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},yN=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},MN=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},SN=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wg=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Bn=function(){function s(e,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ag,this.d=c||this,this.set=l||Xh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=SN,this.m=n,this.mt=r,this.tween=i},s}();zn(kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Bh[s]=1});ni.TweenMax=ni.TweenLite=$e;ni.TimelineLite=ni.TimelineMax=bn;Pe=new bn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=gg;var yr=[],gc={},TN=[],cp=0,EN=0,ou=function(t){return(gc[t]||TN).map(function(e){return e()})},Yu=function(){var t=Date.now(),e=[];t-cp>2&&(ou("matchMediaInit"),yr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Vi.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),ou("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),cp=t,ou("matchMedia"))},bg=function(){function s(e,n){this.selector=n&&Wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=EN++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Be(n)&&(r=i,i=n,n=Be);var o=this,a=function(){var l=Ce,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=Wu(r)),Ce=o,h=i.apply(o,arguments),Be(h)&&o._r.push(h),Ce=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Be?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof bn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof $e)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=yr.length;o--;)yr[o].id===this.id&&yr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),AN=function(){function s(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Zi(n)||(n={matches:n});var o=new bg(0,r||this.scope),a=o.conditions={},c,l,u;Ce&&!o.selector&&(o.selector=Ce.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Vi.matchMedia(n[l]),c&&(yr.indexOf(o)<0&&yr.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Yu):c.addEventListener("change",Yu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Cc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return fg(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=pi(t)[0]);var r=_r(t||{}).get,o=n?tg:Qm;return n==="native"&&(n=""),t&&(e?o((jn[e]&&jn[e].get||r)(t,e,n,i)):function(a,c,l){return o((jn[a]&&jn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=pi(t),t.length>1){var i=t.map(function(u){return Gn.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=jn[e],a=_r(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var h=new o;eo._pt=0,h.init(t,n?u+n:u,eo,0,[t]),h.render(1,h),eo._pt&&Yh(1,eo)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=Gn.to(t,Nr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(e,c,l,u)};return o.tween=r,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=xr(t.ease,Ao.ease)),ip(Ao,t||{})},config:function(t){return ip(ti,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!ni[a]&&pa(e+" effect requires "+a+" plugin.")}),nu[e]=function(a,c,l){return n(pi(a),xi(c||{},r),l)},o&&(bn.prototype[e]=function(a,c,l){return this.add(nu[e](a,Zi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){ee[t]=xr(e)},parseEase:function(t,e){return arguments.length?xr(t,e):ee},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,r;for(n.smoothChildTiming=Vn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof $e&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=r;return Xi(Pe,n,0),n},context:function(t,e){return t?new bg(t,e):Ce},matchMedia:function(t){return new AN(t)},matchMediaRefresh:function(){return yr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yu()},addEventListener:function(t,e){var n=gc[t]||(gc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=gc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:iN,wrapYoyo:sN,distribute:ag,random:lg,snap:cg,normalize:nN,getUnit:yn,clamp:JA,splitColor:pg,toArray:pi,selector:Wu,mapRange:hg,pipe:tN,unitize:eN,interpolate:rN,shuffle:og},install:$m,effects:nu,ticker:Zn,updateRoot:bn.updateRoot,plugins:jn,globalTimeline:Pe,core:{PropTween:Bn,globals:jm,Tween:$e,Timeline:bn,Animation:va,getCache:_r,_removeLinkedListItem:tl,reverting:function(){return Sn},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return Oh=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Cc[s]=$e[s]});Zn.add(bn.updateRoot);eo=Cc.to({},{duration:0});var NN=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wN=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=NN(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},au=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(an(r)&&(c={},zn(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}wN(a,r)}}}},Gn=Cc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},au("roundProps",Xu),au("modifiers"),au("snap",cg))||Cc;$e.version=bn.version=Gn.version="3.12.5";Ym=1;Fh()&&bo();ee.Power0;ee.Power1;ee.Power2;ee.Power3;ee.Power4;ee.Linear;ee.Quad;ee.Cubic;ee.Quart;ee.Quint;ee.Strong;ee.Elastic;ee.Back;ee.SteppedEase;ee.Bounce;ee.Sine;ee.Expo;ee.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lp,Ps,uo,$h,mr,up,jh,bN=function(){return typeof window<"u"},gs={},lr=180/Math.PI,ho=Math.PI/180,Jr=Math.atan2,hp=1e8,Zh=/([A-Z])/g,RN=/(left|right|width|margin|padding|x)/i,CN=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},LN=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PN=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},IN=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},DN=function(t,e,n){return t.style[e]=n},ON=function(t,e,n){return t.style.setProperty(e,n)},UN=function(t,e,n){return t._gsap[e]=n},FN=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},VN=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},zN=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Oe="transform",kn=Oe+"Origin",BN=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ls(i,a)}):this.tfm[t]=o.x?o[t]:ls(i,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Yi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Oe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Oe}(r||e)&&this.props.push(t,e,r[t])},Lg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kN=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Zh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=jh(),(!r||!r.isStart)&&!n[Oe]&&(Lg(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pg=function(t,e){var n={target:t,props:[],revert:kN,save:BN};return t._gsap||Gn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Ig,ju=function(t,e){var n=Ps.createElementNS?Ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ps.createElement(t);return n&&n.style?n:Ps.createElement(t)},ji=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Zh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Ro(e)||e,1)||""},dp="O,Moz,ms,Ms,Webkit".split(","),Ro=function(t,e,n){var i=e||mr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(dp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?dp[o]:"")+t},Zu=function(){bN()&&window.document&&(lp=window,Ps=lp.document,uo=Ps.documentElement,mr=ju("div")||{style:{}},ju("div"),Oe=Ro(Oe),kn=Oe+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ig=!!Ro("perspective"),jh=Gn.core.reverting,$h=1)},cu=function s(t){var e=ju("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(uo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),uo.removeChild(e),this.style.cssText=r,o},fp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Dg=function(t){var e;try{e=t.getBBox()}catch{e=cu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===cu||(e=cu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+fp(t,["x","cx","x1"])||0,y:+fp(t,["y","cy","y1"])||0,width:0,height:0}:e},Og=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Dg(t))},wr=function(t,e){if(e){var n=t.style,i;e in gs&&e!==kn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Zh,"-$1").toLowerCase())):n.removeAttribute(e)}},Is=function(t,e,n,i,r,o){var a=new Bn(t._pt,e,n,0,1,o?Cg:Rg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},pp={deg:1,rad:1,turn:1},HN={grid:1,flex:1},Gs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=mr.style,c=RN.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,p,m;if(i===o||!r||pp[i]||pp[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&Og(t),(f||o==="%")&&(gs[e]||~e.indexOf("adius")))return _=m?t.getBBox()[c?"width":"height"]:t[u],Ge(f?r/_*h:r/100*_);if(a[c?"width":"height"]=h+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ps||!g.appendChild)&&(g=Ps.body),p=g._gsap,p&&f&&p.width&&c&&p.time===Zn.time&&!p.uncache)return Ge(r/p.width*h);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,_=t[u],y?t.style[e]=y:wr(t,e)}else(f||o==="%")&&!HN[ji(g,"display")]&&(a.position=ji(t,"position")),g===t&&(a.position="static"),g.appendChild(mr),_=mr[u],g.removeChild(mr),a.position="absolute";return c&&f&&(p=_r(g),p.time=Zn.time,p.width=g[u]),Ge(d?_*r/h:_&&r?h/_*r:0)},ls=function(t,e,n,i){var r;return $h||Zu(),e in Yi&&e!=="transform"&&(e=Yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=ya(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Pc(ji(t,kn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Lc[e]&&Lc[e](t,e,n)||ji(t,e)||Km(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gs(t,e,r,n)+n:r},GN=function(t,e,n,i){if(!n||n==="none"){var r=Ro(e,t,1),o=r&&ji(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ji(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,Ng),c=0,l=0,u,h,d,f,_,g,p,m,y,v,S,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=ji(t,e)||i,g?t.style[e]=g:wr(t,e)),u=[n,i],gg(u),n=u[0],i=u[1],d=n.match(to)||[],w=i.match(to)||[],w.length){for(;h=to.exec(i);)p=h[0],y=i.substring(c,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[l++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=lo(f,p)+S),m=parseFloat(p),v=p.substr((m+"").length),c=to.lastIndex-v.length,v||(v=v||ti.units[e]||S,c===i.length&&(i+=v,a.e+=v)),S!==v&&(f=Gs(t,e,g,v)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Cg:Rg;return Xm.test(i)&&(a.e=0),this._pt=a,a},mp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WN=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=mp[n]||n,e[1]=mp[i]||i,e.join(" ")},XN=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],gs[a]&&(c=1,a=a==="transformOrigin"?kn:Oe),wr(n,a);c&&(wr(n,Oe),o&&(o.svg&&n.removeAttribute("transform"),ya(n,1),o.uncache=1,Lg(i)))}},Lc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,XN);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},xa=[1,0,0,1,0,0],Ug={},Fg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gp=function(t){var e=ji(t,Oe);return Fg(e)?xa:e.substr(7).match(Wm).map(Ge)},Kh=function(t,e){var n=t._gsap||_r(t),i=t.style,r=gp(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?xa:r):(r===xa&&!t.offsetParent&&t!==uo&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,uo.appendChild(t)),r=gp(t),c?i.display=c:wr(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):uo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ku=function(t,e,n,i,r,o){var a=t._gsap,c=r||Kh(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],p=c[3],m=c[4],y=c[5],v=e.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,N,E,L,x;n?c!==xa&&(E=f*p-_*g)&&(L=S*(p/E)+w*(-g/E)+(g*y-p*m)/E,x=S*(-_/E)+w*(f/E)-(f*y-_*m)/E,S=L,w=x):(N=Dg(t),S=N.x+(~v[0].indexOf("%")?S/100*N.width:S),w=N.y+(~(v[1]||v[0]).indexOf("%")?w/100*N.height:w)),i||i!==!1&&a.smooth?(m=S-l,y=w-u,a.xOffset=h+(m*f+y*g)-m,a.yOffset=d+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(Is(o,a,"xOrigin",l,S),Is(o,a,"yOrigin",u,w),Is(o,a,"xOffset",h,a.xOffset),Is(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+w)},ya=function(t,e){var n=t._gsap||new yg(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=ji(t,kn)||"0",u,h,d,f,_,g,p,m,y,v,S,w,N,E,L,x,M,V,q,P,K,j,it,st,W,ut,ct,St,Vt,he,Y,lt;return u=h=d=g=p=m=y=v=S=0,f=_=1,n.svg=!!(t.getCTM&&Og(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Oe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Oe]!=="none"?c[Oe]:"")),i.scale=i.rotate=i.translate="none"),E=Kh(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),l=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",st=""):st=!e&&t.getAttribute("data-svg-origin"),Ku(t,st||l,!!st||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,N=n.yOrigin||0,E!==xa&&(V=E[0],q=E[1],P=E[2],K=E[3],u=j=E[4],h=it=E[5],E.length===6?(f=Math.sqrt(V*V+q*q),_=Math.sqrt(K*K+P*P),g=V||q?Jr(q,V)*lr:0,y=P||K?Jr(P,K)*lr+g:0,y&&(_*=Math.abs(Math.cos(y*ho))),n.svg&&(u-=w-(w*V+N*P),h-=N-(w*q+N*K))):(lt=E[6],he=E[7],ct=E[8],St=E[9],Vt=E[10],Y=E[11],u=E[12],h=E[13],d=E[14],L=Jr(lt,Vt),p=L*lr,L&&(x=Math.cos(-L),M=Math.sin(-L),st=j*x+ct*M,W=it*x+St*M,ut=lt*x+Vt*M,ct=j*-M+ct*x,St=it*-M+St*x,Vt=lt*-M+Vt*x,Y=he*-M+Y*x,j=st,it=W,lt=ut),L=Jr(-P,Vt),m=L*lr,L&&(x=Math.cos(-L),M=Math.sin(-L),st=V*x-ct*M,W=q*x-St*M,ut=P*x-Vt*M,Y=K*M+Y*x,V=st,q=W,P=ut),L=Jr(q,V),g=L*lr,L&&(x=Math.cos(L),M=Math.sin(L),st=V*x+q*M,W=j*x+it*M,q=q*x-V*M,it=it*x-j*M,V=st,j=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Ge(Math.sqrt(V*V+q*q+P*P)),_=Ge(Math.sqrt(it*it+lt*lt)),L=Jr(j,it),y=Math.abs(L)>2e-4?L*lr:0,S=Y?1/(Y<0?-Y:Y):0),n.svg&&(st=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fg(ji(t,Oe)),st&&t.setAttribute("transform",st))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ge(f),n.scaleY=Ge(_),n.rotation=Ge(g)+a,n.rotationX=Ge(p)+a,n.rotationY=Ge(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[kn]=Pc(l)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?YN:Ig?Vg:qN,n.uncache=0,n},Pc=function(t){return(t=t.split(" "))[0]+" "+t[1]},lu=function(t,e,n){var i=yn(e);return Ge(parseFloat(e)+parseFloat(Gs(t,"x",n+"px",i)))+i},qN=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vg(t,e)},sr="0deg",Jo="0px",rr=") ",Vg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,S="",w=m==="auto"&&t&&t!==1||m===!0;if(v&&(h!==sr||u!==sr)){var N=parseFloat(u)*ho,E=Math.sin(N),L=Math.cos(N),x;N=parseFloat(h)*ho,x=Math.cos(N),o=lu(y,o,E*x*-v),a=lu(y,a,-Math.sin(N)*-v),c=lu(y,c,L*x*-v+v)}p!==Jo&&(S+="perspective("+p+rr),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(w||o!==Jo||a!==Jo||c!==Jo)&&(S+=c!==Jo||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+rr),l!==sr&&(S+="rotate("+l+rr),u!==sr&&(S+="rotateY("+u+rr),h!==sr&&(S+="rotateX("+h+rr),(d!==sr||f!==sr)&&(S+="skew("+d+", "+f+rr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+rr),y.style[Oe]=S||"translate(0, 0)"},YN=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),w,N,E,L,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ho,l*=ho,w=Math.cos(c)*h,N=Math.sin(c)*h,E=Math.sin(c-l)*-d,L=Math.cos(c-l)*d,l&&(u*=ho,x=Math.tan(l-u),x=Math.sqrt(1+x*x),E*=x,L*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,N*=x)),w=Ge(w),N=Ge(N),E=Ge(E),L=Ge(L)):(w=h,L=d,N=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Gs(f,"x",o,"px"),S=Gs(f,"y",a,"px")),(_||g||p||m)&&(v=Ge(v+_-(_*w+g*E)+p),S=Ge(S+g-(_*N+g*L)+m)),(i||r)&&(x=f.getBBox(),v=Ge(v+i/100*x.width),S=Ge(S+r/100*x.height)),x="matrix("+w+","+N+","+E+","+L+","+v+","+S+")",f.setAttribute("transform",x),y&&(f.style[Oe]=x)},$N=function(t,e,n,i,r){var o=360,a=an(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*hp)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*hp)%o-~~(l/o)*o)),t._pt=d=new Bn(t._pt,e,n,i,l,LN),d.e=u,d.u="deg",t._props.push(n),d},_p=function(t,e){for(var n in e)t[n]=e[n];return t},jN=function(t,e,n){var i=_p({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Oe]=e,a=ya(n,1),wr(n,Oe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Oe],o[Oe]=e,a=ya(n,1),o[Oe]=l);for(c in gs)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(f=yn(l),_=yn(u),h=f!==_?Gs(n,c,l,_):parseFloat(l),d=parseFloat(u),t._pt=new Bn(t._pt,a,c,h,d-h,$u),t._pt.u=_||0,t._props.push(c));_p(a,i)};zn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Lc[t>1?"border"+s:s]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return ls(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,h)}});var zg={name:"css",register:Zu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,u,h,d,f,_,g,p,m,y,v,S,w,N,E,L;$h||Zu(),this.styles=this.styles||Pg(t),L=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(jn[g]&&Mg(g,e,n,i,t,r)))){if(f=typeof u,_=Lc[g],f==="function"&&(u=u.call(n,i,t,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ga(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Vs.lastIndex=0,Vs.test(l)||(p=yn(l),m=yn(u)),m?p!==m&&(l=Gs(t,g,l,m)+m):p&&(u+=p),this.add(a,"setProperty",l,u,i,r,0,0,g),o.push(g),L.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],an(l)&&~l.indexOf("random(")&&(l=ga(l)),yn(l+"")||l==="auto"||(l+=ti.units[g]||yn(ls(t,g))||""),(l+"").charAt(1)==="="&&(l=ls(t,g))):l=ls(t,g),d=parseFloat(l),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Yi&&(g==="autoAlpha"&&(d===1&&ls(t,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),Is(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in gs,v){if(this.styles.save(g),S||(w=t._gsap,w.renderTransform&&!e.parseTransform||ya(t,e.parseTransform),N=e.smoothOrigin!==!1&&w.smooth,S=this._pt=new Bn(this._pt,a,Oe,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new Bn(this._pt,w,"scaleY",w.scaleY,(y?lo(w.scaleY,y+h):h)-w.scaleY||0,$u),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(kn,0,a[kn]),u=WN(u),w.svg?Ku(t,u,0,N,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Is(this,w,"zOrigin",w.zOrigin,m),Is(this,a,g,Pc(l),Pc(u)));continue}else if(g==="svgOrigin"){Ku(t,u,1,N,0,this);continue}else if(g in Ug){$N(this,w,g,d,y?lo(d,y+u):u);continue}else if(g==="smoothOrigin"){Is(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){jN(this,u,t);continue}}else g in a||(g=Ro(g)||g);if(v||(h||h===0)&&(d||d===0)&&!CN.test(u)&&g in a)p=(l+"").substr((d+"").length),h||(h=0),m=yn(u)||(g in ti.units?ti.units[g]:p),p!==m&&(d=Gs(t,g,l,m)),this._pt=new Bn(this._pt,v?w:a,g,d,(y?lo(d,y+h):h)-d,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?IN:$u),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=PN);else if(g in a)GN.call(this,t,g,l,y?y+u:u);else if(g in t)this.add(t,g,l||t[g],y?y+u:u,i,r);else if(g!=="parseTransform"){zh(g,u);continue}v||(g in a?L.push(g,0,a[g]):L.push(g,1,l||t[g])),o.push(g)}}E&&wg(this)},render:function(t,e){if(e.tween._time||!jh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ls,aliases:Yi,getSetter:function(t,e,n){var i=Yi[e];return i&&i.indexOf(",")<0&&(e=i),e in gs&&e!==kn&&(t._gsap.x||ls(t,"x"))?n&&up===n?e==="scale"?FN:UN:(up=n||{})&&(e==="scale"?VN:zN):t.style&&!Uh(t.style[e])?DN:~e.indexOf("-")?ON:qh(t,e)},core:{_removeProperty:wr,_getMatrix:Kh}};Gn.utils.checkPrefix=Ro;Gn.core.getStyleSaver=Pg;(function(s,t,e,n){var i=zn(s+","+t+","+e,function(r){gs[r]=1});zn(t,function(r){ti.units[r]="deg",Ug[r]=1}),Yi[i[13]]=s+","+t,zn(n,function(r){var o=r.split(":");Yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ti.units[s]="px"});Gn.registerPlugin(zg);var Jh=Gn.registerPlugin(zg)||Gn;Jh.core.Tween;const vp={VERTEX:"vertex",FRAGMENT:"fragment"},ve={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},il=["x","y","z","w"];function Bg(s,t=!1){let e="{";s.isNode===!0&&(e+=s.id);for(const{property:n,childNode:i}of Ic(s))e+=","+n.slice(0,-4)+":"+i.getCacheKey(t);return e+="}",e}function*Ic(s,t=!1){for(const e in s){if(e.startsWith("_")===!0)continue;const n=s[e];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||t&&typeof r.toJSON=="function")&&(yield{property:e,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:e,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||t&&typeof r.toJSON=="function")&&(yield{property:e,index:i,childNode:r})}}}function Ds(s){if(s==null)return null;const t=typeof s;return s.isNode===!0?"node":t==="number"?"float":t==="boolean"?"bool":t==="string"?"string":t==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function kg(s,...t){const e=s?s.slice(-4):void 0;return t.length===1&&(e==="vec2"?t=[t[0],t[0]]:e==="vec3"?t=[t[0],t[0],t[0]]:e==="vec4"&&(t=[t[0],t[0],t[0],t[0]])),s==="color"?new Ut(...t):e==="vec2"?new Ct(...t):e==="vec3"?new F(...t):e==="vec4"?new oe(...t):e==="mat3"?new Ht(...t):e==="mat4"?new we(...t):s==="bool"?t[0]||!1:s==="float"||s==="int"||s==="uint"?t[0]||0:s==="string"?t[0]||"":s==="ArrayBuffer"?Gg(t[0]):null}function Hg(s){let t="";const e=new Uint8Array(s);for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function Gg(s){return Uint8Array.from(atob(s),t=>t.charCodeAt(0)).buffer}const xp=new Map;let ZN=0;class bt extends Ys{constructor(t=null){super(),this.nodeType=t,this.updateType=ve.NONE,this.updateBeforeType=ve.NONE,this.uuid=mm.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:ZN++})}set needsUpdate(t){t===!0&&this.version++}get type(){return this.constructor.type}onUpdate(t,e){return this.updateType=e,this.update=t.bind(this.getSelf()),this}onFrameUpdate(t){return this.onUpdate(t,ve.FRAME)}onRenderUpdate(t){return this.onUpdate(t,ve.RENDER)}onObjectUpdate(t){return this.onUpdate(t,ve.OBJECT)}onReference(t){return this.updateReference=t.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:t}of Ic(this))yield t}dispose(){this.dispatchEvent({type:"dispose"})}traverse(t){t(this);for(const e of this.getChildren())e.traverse(t)}getCacheKey(t=!1){return t=t||this.version!==this._cacheKeyVersion,(t===!0||this._cacheKey===null)&&(this._cacheKey=Bg(this,t),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(t){const e=t.getNodeProperties(this);return e.outputNode?e.outputNode.getNodeType(t):this.nodeType}getShared(t){const e=this.getHash(t);return t.getNodeFromHash(e)||this}setup(t){const e=t.getNodeProperties(this);for(const n of this.getChildren())e["_node"+n.id]=n;return null}construct(t){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(t)}increaseUsage(t){const e=t.getDataFromNode(this);return e.usageCount=e.usageCount===void 0?1:e.usageCount+1,e.usageCount}analyze(t){if(this.increaseUsage(t)===1){const n=t.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(t)}}generate(t,e){const{outputNode:n}=t.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(t,e)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(t,e=null){const n=this.getShared(t);if(this!==n)return n.build(t,e);t.addNode(this),t.addChain(this);let i=null;const r=t.getBuildStage();if(r==="setup"){this.updateReference(t);const o=t.getNodeProperties(this);if(o.initialized!==!0||t.context.tempRead===!1){const a=t.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(t),o.outputNode!==null&&t.stack.nodes.length!==a&&(o.outputNode=t.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(t)}}else if(r==="analyze")this.analyze(t);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(t),c=t.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(t)||"",c.snippet=i),i=t.format(i,a,e)}else i=this.generate(t,e)||"";return t.removeChain(this),i}getSerializeChildren(){return Ic(this)}serialize(t){const e=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of e)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(t.meta).uuid):n[i]=o.toJSON(t.meta).uuid;Object.keys(n).length>0&&(t.inputNodes=n)}deserialize(t){if(t.inputNodes!==void 0){const e=t.meta.nodes;for(const n in t.inputNodes)if(Array.isArray(t.inputNodes[n])){const i=[];for(const r of t.inputNodes[n])i.push(e[r]);this[n]=i}else if(typeof t.inputNodes[n]=="object"){const i={};for(const r in t.inputNodes[n]){const o=t.inputNodes[n][r];i[r]=e[o]}this[n]=i}else{const i=t.inputNodes[n];this[n]=e[i]}}}toJSON(t){const{uuid:e,type:n}=this,i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{},nodes:{}});let r=t.nodes[e];r===void 0&&(r={uuid:e,type:n,meta:t,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(t.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(t.textures),c=o(t.images),l=o(t.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function Q(s,t){if(typeof t!="function"||!s)throw new Error(`Node class ${s} is not a class`);if(xp.has(s)){console.warn(`Redefinition of node class ${s}`);return}xp.set(s,t),t.type=s}class ye extends bt{constructor(t){super(t),this.isTempNode=!0}hasDependencies(t){return t.getDataFromNode(this).usageCount>1}build(t,e){if(t.getBuildStage()==="generate"){const i=t.getVectorType(this.getNodeType(t,e)),r=t.getDataFromNode(this);if(t.context.tempRead!==!1&&r.propertyName!==void 0)return t.format(r.propertyName,i,e);if(t.context.tempWrite!==!1&&i!=="void"&&e!=="void"&&this.hasDependencies(t)){const o=super.build(t,i),a=t.getVarFromNode(this,null,i),c=t.getPropertyName(a);return t.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,t.format(r.propertyName,i,e)}}return super.build(t,e)}}Q("TempNode",ye);class Fo extends bt{constructor(t,e){super(),this.node=t,this.indexNode=e,this.isArrayElementNode=!0}getNodeType(t){return this.node.getNodeType(t)}generate(t){const e=this.node.build(t),n=this.indexNode.build(t,"uint");return`${e}[ ${n} ]`}}Q("ArrayElementNode",Fo);class Qh extends bt{constructor(t,e){super(),this.node=t,this.convertTo=e}getNodeType(t){const e=this.node.getNodeType(t);let n=null;for(const i of this.convertTo.split("|"))(n===null||t.getTypeLength(e)===t.getTypeLength(i))&&(n=i);return n}serialize(t){super.serialize(t),t.convertTo=this.convertTo}deserialize(t){super.deserialize(t),this.convertTo=t.convertTo}generate(t,e){const n=this.node,i=this.getNodeType(t),r=n.build(t,i);return t.format(r,i,e)}}Q("ConvertNode",Qh);class Wg extends ye{constructor(t=[],e=null){super(e),this.nodes=t}getNodeType(t){return this.nodeType!==null?t.getVectorType(this.nodeType):t.getTypeFromLength(this.nodes.reduce((e,n)=>e+t.getTypeLength(n.getNodeType(t)),0))}generate(t,e){const n=this.getNodeType(t),i=this.nodes,r=t.getComponentType(n),o=[];for(const c of i){let l=c.build(t);const u=t.getComponentType(c.getNodeType(t));u!==r&&(l=t.format(l,u,r)),o.push(l)}const a=`${t.getType(n)}( ${o.join(", ")} )`;return t.format(a,n,e)}}Q("JoinNode",Wg);const KN=il.join("");class Ju extends bt{constructor(t,e="x"){super(),this.node=t,this.components=e,this.isSplitNode=!0}getVectorLength(){let t=this.components.length;for(const e of this.components)t=Math.max(il.indexOf(e)+1,t);return t}getComponentType(t){return t.getComponentType(this.node.getNodeType(t))}getNodeType(t){return t.getTypeFromLength(this.components.length,this.getComponentType(t))}generate(t,e){const n=this.node,i=t.getTypeLength(n.getNodeType(t));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=t.getTypeFromLength(this.getVectorLength(),this.getComponentType(t)));const c=n.build(t,o);this.components.length===i&&this.components===KN.slice(0,this.components.length)?r=t.format(c,o,e):r=t.format(`${c}.${this.components}`,this.getNodeType(t),e)}else r=n.build(t,e);return r}serialize(t){super.serialize(t),t.components=this.components}deserialize(t){super.deserialize(t),this.components=t.components}}Q("SplitNode",Ju);class Xg extends ye{constructor(t,e,n){super(),this.sourceNode=t,this.components=e,this.targetNode=n}getNodeType(t){return this.sourceNode.getNodeType(t)}generate(t){const{sourceNode:e,components:n,targetNode:i}=this,r=this.getNodeType(t),o=t.getTypeFromLength(n.length),a=i.build(t,o),c=e.build(t,r),l=t.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=il[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${t.getType(r)}( ${u.join(", ")} )`}}Q("SetNode",Xg);class sl extends bt{constructor(t,e=null){super(e),this.isInputNode=!0,this.value=t,this.precision=null}getNodeType(){return this.nodeType===null?Ds(this.value):this.nodeType}getInputType(t){return this.getNodeType(t)}setPrecision(t){return this.precision=t,this}serialize(t){super.serialize(t),t.value=this.value,this.value&&this.value.toArray&&(t.value=this.value.toArray()),t.valueType=Ds(this.value),t.nodeType=this.nodeType,t.valueType==="ArrayBuffer"&&(t.value=Hg(t.value)),t.precision=this.precision}deserialize(t){super.deserialize(t),this.nodeType=t.nodeType,this.value=Array.isArray(t.value)?kg(t.valueType,...t.value):t.value,this.precision=t.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(t.value))}generate(){console.warn("Abstract function.")}}Q("InputNode",sl);class yi extends sl{constructor(t,e=null){super(t,e),this.isConstNode=!0}generateConst(t){return t.generateConst(this.getNodeType(t),this.value)}generate(t,e){const n=this.getNodeType(t);return t.format(this.generateConst(t),n,e)}}Q("ConstNode",yi);let Co=null;const no=new Map;function U(s,t){if(no.has(s)){console.warn(`Redefinition of node element ${s}`);return}if(typeof t!="function")throw new Error(`Node element ${s} is not a function`);no.set(s,t)}const yp=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),qg={setup(s,t){const e=t.shift();return s(al(e),...t)},get(s,t,e){if(typeof t=="string"&&s[t]===void 0){if(s.isStackNode!==!0&&t==="assign")return(...n)=>(Co.assign(e,...n),e);if(no.has(t)){const n=no.get(t);return s.isStackNode?(...i)=>e.add(n(...i)):(...i)=>n(e,...i)}else{if(t==="self")return s;if(t.endsWith("Assign")&&no.has(t.slice(0,t.length-6))){const n=no.get(t.slice(0,t.length-6));return s.isStackNode?(...i)=>e.assign(i[0],n(...i)):(...i)=>e.assign(n(e,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(t)===!0)return t=yp(t),ht(new Ju(e,t));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(t)===!0)return t=yp(t.slice(3).toLowerCase()),t=t.split("").sort().join(""),n=>ht(new Xg(s,t,n));if(t==="width"||t==="height"||t==="depth")return t==="width"?t="x":t==="height"?t="y":t==="depth"&&(t="z"),ht(new Ju(s,t));if(/^\d+$/.test(t)===!0)return ht(new Fo(e,new yi(Number(t),"uint")))}}}return Reflect.get(s,t,e)},set(s,t,e,n){return typeof t=="string"&&s[t]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(t)===!0||t==="width"||t==="height"||t==="depth"||/^\d+$/.test(t)===!0)?(n[t].assign(e),!0):Reflect.set(s,t,e,n)}},uu=new WeakMap,Mp=new WeakMap,JN=function(s,t=null){const e=Ds(s);if(e==="node"){let n=uu.get(s);return n===void 0&&(n=new Proxy(s,qg),uu.set(s,n),uu.set(n,n)),n}else{if(t===null&&(e==="float"||e==="boolean")||e&&e!=="shader"&&e!=="string")return ht(Qu(s,t));if(e==="shader")return Z(s)}return s},QN=function(s,t=null){for(const e in s)s[e]=ht(s[e],t);return s},tw=function(s,t=null){const e=s.length;for(let n=0;n<e;n++)s[n]=ht(s[n],t);return s},ew=function(s,t=null,e=null,n=null){const i=r=>ht(n!==null?Object.assign(r,n):r);return t===null?(...r)=>i(new s(...fo(r))):e!==null?(e=ht(e),(...r)=>i(new s(t,...fo(r),e))):(...r)=>i(new s(t,...fo(r)))},nw=function(s,...t){return ht(new s(...fo(t)))};class iw extends bt{constructor(t,e){super(),this.shaderNode=t,this.inputNodes=e}getNodeType(t){const{outputNode:e}=t.getNodeProperties(this);return e?e.getNodeType(t):super.getNodeType(t)}call(t){const{shaderNode:e,inputNodes:n}=this;if(e.layout){let o=Mp.get(t.constructor);o===void 0&&(o=new WeakMap,Mp.set(t.constructor,o));let a=o.get(e);return a===void 0&&(a=ht(t.buildFunctionNode(e)),o.set(e,a)),t.currentFunctionNode!==null&&t.currentFunctionNode.includes.push(a),ht(a.call(n))}const i=e.jsFunc,r=n!==null?i(n,t.stack,t):i(t.stack,t);return ht(r)}setup(t){return t.addStack(),t.stack.outputNode=this.call(t),t.removeStack()}generate(t,e){const{outputNode:n}=t.getNodeProperties(this);return n===null?this.call(t).build(t,e):super.generate(t,e)}}class sw extends bt{constructor(t){super(),this.jsFunc=t,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(t){return this.layout=t,this}call(t=null){return al(t),ht(new iw(this,t))}setup(){return this.call()}}const rw=[!1,!0],ow=[0,1,2,3],aw=[-1,-2],Yg=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],td=new Map;for(const s of rw)td.set(s,new yi(s));const ed=new Map;for(const s of ow)ed.set(s,new yi(s,"uint"));const nd=new Map([...ed].map(s=>new yi(s.value,"int")));for(const s of aw)nd.set(s,new yi(s,"int"));const rl=new Map([...nd].map(s=>new yi(s.value)));for(const s of Yg)rl.set(s,new yi(s));for(const s of Yg)rl.set(-s,new yi(-s));const ol={bool:td,uint:ed,ints:nd,float:rl},Sp=new Map([...td,...rl]),Qu=(s,t)=>Sp.has(s)?Sp.get(s):s.isNode===!0?s:new yi(s,t),cw=s=>{try{return s.getNodeType()}catch{return}},pe=function(s,t=null){return(...e)=>{if((e.length===0||!["bool","float","int","uint"].includes(s)&&e.every(i=>typeof i!="object"))&&(e=[kg(s,...e)]),e.length===1&&t!==null&&t.has(e[0]))return ht(t.get(e[0]));if(e.length===1){const i=Qu(e[0],s);return cw(i)===s?ht(i):ht(new Qh(i,s))}const n=e.map(i=>Qu(i));return ht(new Wg(n,s))}},Tp=s=>s&&s.value,lw=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function ua(s){return new Proxy(new sw(s),qg)}const ht=(s,t=null)=>JN(s,t),al=(s,t=null)=>new QN(s,t),fo=(s,t=null)=>new tw(s,t),k=(...s)=>new ew(...s),et=(...s)=>new nw(...s),Z=s=>{const t=new ua(s),e=(...n)=>{let i;return al(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],t.call(i)};return e.shaderNode=t,e.setLayout=n=>(t.setLayout(n),e),e};Q("ShaderNode",ua);const Ep=s=>{Co=s},uw=()=>Co,Zt=(...s)=>Co.if(...s);function hw(s){return Co&&Co.add(s),s}U("append",hw);const dw=new pe("color"),b=new pe("float",ol.float),C=new pe("int",ol.ints),ft=new pe("uint",ol.uint),br=new pe("bool",ol.bool),At=new pe("vec2"),gr=new pe("ivec2"),fw=new pe("uvec2"),pw=new pe("bvec2"),O=new pe("vec3"),mw=new pe("ivec3"),Ia=new pe("uvec3"),$g=new pe("bvec3"),Tt=new pe("vec4"),gw=new pe("ivec4"),_w=new pe("uvec4"),vw=new pe("bvec4"),id=new pe("mat2"),xw=new pe("imat2"),yw=new pe("umat2"),Mw=new pe("bmat2"),Pi=new pe("mat3"),Sw=new pe("imat3"),Tw=new pe("umat3"),Ew=new pe("bmat3"),po=new pe("mat4"),Aw=new pe("imat4"),Nw=new pe("umat4"),ww=new pe("bmat4"),bw=(s="")=>ht(new yi(s,"string")),Rw=s=>ht(new yi(s,"ArrayBuffer"));U("color",dw);U("float",b);U("int",C);U("uint",ft);U("bool",br);U("vec2",At);U("ivec2",gr);U("uvec2",fw);U("bvec2",pw);U("vec3",O);U("ivec3",mw);U("uvec3",Ia);U("bvec3",$g);U("vec4",Tt);U("ivec4",gw);U("uvec4",_w);U("bvec4",vw);U("mat2",id);U("imat2",xw);U("umat2",yw);U("bmat2",Mw);U("mat3",Pi);U("imat3",Sw);U("umat3",Tw);U("bmat3",Ew);U("mat4",po);U("imat4",Aw);U("umat4",Nw);U("bmat4",ww);U("string",bw);U("arrayBuffer",Rw);const Cw=k(Fo),Lw=(s,t)=>ht(new Qh(ht(s),t));U("element",Cw);U("convert",Lw);class jg extends ye{constructor(t,e){super(),this.targetNode=t,this.sourceNode=e}hasDependencies(){return!1}getNodeType(t,e){return e!=="void"?this.targetNode.getNodeType(t):"void"}needsSplitAssign(t){const{targetNode:e}=this;if(t.isAvailable("swizzleAssign")===!1&&e.isSplitNode&&e.components.length>1){const n=t.getTypeLength(e.node.getNodeType(t));return il.join("").slice(0,n)!==e.components}return!1}generate(t,e){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(t),o=n.getNodeType(t),a=n.context({assign:!0}).build(t),c=i.build(t,o),l=i.getNodeType(t),u=t.getDataFromNode(this);let h;if(u.initialized===!0)e!=="void"&&(h=a);else if(r){const d=t.getVarFromNode(this,null,o),f=t.getPropertyName(d);t.addLineFlowCode(`${f} = ${c}`);const _=n.node.context({assign:!0}).build(t);for(let g=0;g<n.components.length;g++){const p=n.components[g];t.addLineFlowCode(`${_}.${p} = ${f}[ ${g} ]`)}e!=="void"&&(h=a)}else h=`${a} = ${c}`,(e==="void"||l==="void")&&(t.addLineFlowCode(h),e!=="void"&&(h=a));return u.initialized=!0,t.format(h,o,e)}}const Pw=k(jg);Q("AssignNode",jg);U("assign",Pw);class Zg extends bt{constructor(t,e=null){super(),this.node=t,this.name=e,this.isVaryingNode=!0}isGlobal(){return!0}getHash(t){return this.name||super.getHash(t)}getNodeType(t){return this.node.getNodeType(t)}generate(t){const{name:e,node:n}=this,i=this.getNodeType(t),r=t.getVaryingFromNode(this,e,i);r.needsInterpolation||(r.needsInterpolation=t.shaderStage==="fragment");const o=t.getPropertyName(r,vp.VERTEX);return t.flowNodeFromShaderStage(vp.VERTEX,n,i,o),t.getPropertyName(r)}}const Ve=k(Zg);U("varying",Ve);Q("VaryingNode",Zg);class cl extends bt{constructor(t,e=null){super(e),this._attributeName=t}isGlobal(){return!0}getHash(t){return this.getAttributeName(t)}getNodeType(t){let e=super.getNodeType(t);if(e===null){const n=this.getAttributeName(t);if(t.hasGeometryAttribute(n)){const i=t.geometry.getAttribute(n);e=t.getTypeFromAttribute(i)}else e="float"}return e}setAttributeName(t){return this._attributeName=t,this}getAttributeName(){return this._attributeName}generate(t){const e=this.getAttributeName(t),n=this.getNodeType(t);if(t.hasGeometryAttribute(e)===!0){const r=t.geometry.getAttribute(e),o=t.getTypeFromAttribute(r),a=t.getAttribute(e,o);return t.shaderStage==="vertex"?t.format(a.name,o,n):Ve(this).build(t,n)}else return console.warn(`AttributeNode: Vertex attribute "${e}" not found on geometry.`),t.generateConst(n)}}const xn=(s,t)=>ht(new cl(s,t));Q("AttributeNode",cl);class Kg extends bt{constructor(t,e){super(),this.isBypassNode=!0,this.outputNode=t,this.callNode=e}getNodeType(t){return this.outputNode.getNodeType(t)}generate(t){const e=this.callNode.build(t,"void");return e!==""&&t.addLineFlowCode(e),this.outputNode.build(t)}}const Jg=k(Kg);U("bypass",Jg);Q("BypassNode",Kg);let Iw=0;class Dw{constructor(){this.id=Iw++,this.nodesData=new WeakMap}getNodeData(t){return this.nodesData.get(t)}setNodeData(t,e){this.nodesData.set(t,e)}}class Qg extends bt{constructor(t,e=new Dw){super(),this.isCacheNode=!0,this.node=t,this.cache=e}getNodeType(t){return this.node.getNodeType(t)}build(t,...e){const n=t.getCache(),i=this.cache||t.globalCache;t.setCache(i);const r=this.node.build(t,...e);return t.setCache(n),r}}const Dc=k(Qg),Ow=s=>Dc(s,null);U("cache",Dc);U("globalCache",Ow);Q("CacheNode",Qg);class sd extends bt{constructor(t,e={}){super(),this.isContextNode=!0,this.node=t,this.context=e}getNodeType(t){return this.node.getNodeType(t)}setup(t){const e=t.getContext();t.setContext({...t.context,...this.context});const n=this.node.build(t);return t.setContext(e),n}generate(t,e){const n=t.getContext();t.setContext({...t.context,...this.context});const i=this.node.build(t,e);return t.setContext(n),i}}const fs=k(sd),Uw=(s,t)=>fs(s,{label:t});U("context",fs);U("label",Uw);Q("ContextNode",sd);class Ki extends bt{constructor(t){super("uint"),this.scope=t,this.isInstanceIndexNode=!0}generate(t){const e=this.getNodeType(t),n=this.scope;let i;if(n===Ki.VERTEX)i=t.getVertexIndex();else if(n===Ki.INSTANCE)i=t.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return t.shaderStage==="vertex"||t.shaderStage==="compute"?r=i:r=Ve(this).build(t,e),r}}Ki.VERTEX="vertex";Ki.INSTANCE="instance";const Fw=et(Ki,Ki.VERTEX),t_=et(Ki,Ki.INSTANCE);Q("IndexNode",Ki);class rd{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class e_ extends bt{constructor(t,e=null){super(),this.node=t,this.name=e,this.isVarNode=!0}isGlobal(){return!0}getHash(t){return this.name||super.getHash(t)}getNodeType(t){return this.node.getNodeType(t)}generate(t){const{node:e,name:n}=this,i=t.getVarFromNode(this,n,t.getVectorType(this.getNodeType(t))),r=t.getPropertyName(i),o=e.build(t,i.type);return t.addLineFlowCode(`${r} = ${o}`),r}}const Ma=k(e_);U("temp",Ma);U("toVar",(...s)=>Ma(...s).append());Q("VarNode",e_);class ue extends bt{constructor(t,e=null,n=!1){super(t),this.name=e,this.varying=n,this.isPropertyNode=!0}getHash(t){return this.name||super.getHash(t)}isGlobal(){return!0}generate(t){let e;return this.varying===!0?(e=t.getVaryingFromNode(this,this.name),e.needsInterpolation=!0):e=t.getVarFromNode(this,this.name),t.getPropertyName(e)}}const cn=(s,t)=>ht(new ue(s,t)),Fi=(s,t)=>ht(new ue(s,t,!0)),Ie=et(ue,"vec4","DiffuseColor"),Os=et(ue,"float","Roughness"),Oc=et(ue,"float","Metalness"),th=et(ue,"float","Clearcoat"),Uc=et(ue,"float","ClearcoatRoughness"),io=et(ue,"vec3","Sheen"),od=et(ue,"float","SheenRoughness"),ad=et(ue,"float","Iridescence"),n_=et(ue,"float","IridescenceIOR"),i_=et(ue,"float","IridescenceThickness"),eh=et(ue,"float","AlphaT"),ur=et(ue,"float","Anisotropy"),_c=et(ue,"vec3","AnisotropyT"),mo=et(ue,"vec3","AnisotropyB"),Ni=et(ue,"color","SpecularColor"),Fc=et(ue,"float","SpecularF90"),nh=et(ue,"float","Shininess"),Vw=et(ue,"vec4","Output"),go=et(ue,"float","dashSize"),Vc=et(ue,"float","gapSize");et(ue,"float","pointWidth");const vc=et(ue,"float","IOR"),ih=et(ue,"float","Transmission"),s_=et(ue,"float","Thickness"),r_=et(ue,"float","AttenuationDistance"),o_=et(ue,"color","AttenuationColor");Q("PropertyNode",ue);class zw extends ue{constructor(t,e=null){super(t,e),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Q("ParameterNode",zw);class cd extends bt{constructor(t="",e=[],n=""){super("code"),this.isCodeNode=!0,this.code=t,this.language=n,this.includes=e}isGlobal(){return!0}setIncludes(t){return this.includes=t,this}getIncludes(){return this.includes}generate(t){const e=this.getIncludes(t);for(const i of e)i.build(t);const n=t.getCodeFromNode(this,this.getNodeType(t));return n.code=this.code,n.code}serialize(t){super.serialize(t),t.code=this.code,t.language=this.language}deserialize(t){super.deserialize(t),this.code=t.code,this.language=t.language}}k(cd);Q("CodeNode",cd);class Bw extends cd{constructor(t="",e=[],n=""){super(t,e,n),this.keywords={}}getNodeType(t){return this.getNodeFunction(t).type}getInputs(t){return this.getNodeFunction(t).inputs}getNodeFunction(t){const e=t.getDataFromNode(this);let n=e.nodeFunction;return n===void 0&&(n=t.parser.parseFunction(this.code),e.nodeFunction=n),n}generate(t,e){super.generate(t);const n=this.getNodeFunction(t),i=n.name,r=n.type,o=t.getCodeFromNode(this,r);i!==""&&(o.name=i);const a=t.getPropertyName(o);let c=this.getNodeFunction(t).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(t,"property");c=c.replace(d,f)}return o.code=c+`
`,e==="property"?a:t.format(`${a}()`,r,e)}}Q("FunctionNode",Bw);class ld extends bt{constructor(t,e=!1){super("string"),this.name=t,this.version=0,this.shared=e,this.isUniformGroup=!0}set needsUpdate(t){t===!0&&this.version++}}const kw=s=>new ld(s),a_=s=>new ld(s,!0);a_("frame");a_("render");const Hw=kw("object");Q("UniformGroupNode",ld);class Pr extends sl{constructor(t,e=null){super(t,e),this.isUniformNode=!0,this.groupNode=Hw}setGroup(t){return this.groupNode=t,this}getGroup(){return this.groupNode}getUniformHash(t){return this.getHash(t)}onUpdate(t,e){const n=this.getSelf();return t=t.bind(n),super.onUpdate(i=>{const r=t(i,n);r!==void 0&&(this.value=r)},e)}generate(t,e){const n=this.getNodeType(t),i=this.getUniformHash(t);let r=t.getNodeFromHash(i);r===void 0&&(t.setHashNode(this,i),r=this);const o=r.getInputType(t),a=t.getUniformFromNode(r,o,t.shaderStage,t.context.label),c=t.getPropertyName(a);return t.context.label!==void 0&&delete t.context.label,t.format(c,n,e)}}const xe=(s,t)=>{const e=lw(t||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return ht(new Pr(n,e))};Q("UniformNode",Pr);class c_ extends cl{constructor(t=0){super(null,"vec2"),this.isUVNode=!0,this.index=t}getAttributeName(){const t=this.index;return"uv"+(t>0?t:"")}serialize(t){super.serialize(t),t.index=this.index}deserialize(t){super.deserialize(t),this.index=t.index}}const Qi=(...s)=>ht(new c_(...s));Q("UVNode",c_);class l_ extends bt{constructor(t,e=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=t,this.levelNode=e}generate(t,e){const n=this.textureNode.build(t,"property"),i=this.levelNode.build(t,"int");return t.format(`${t.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(t),e)}}const ud=k(l_);U("textureSize",ud);Q("TextureSizeNode",l_);class Le extends ye{constructor(t,e,n,...i){if(super(),this.op=t,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new Le(t,r,i[o]);n=r}this.aNode=e,this.bNode=n}getNodeType(t,e){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(t),a=typeof r<"u"?r.getNodeType(t):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return t.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=e?t.getTypeLength(e):Math.max(t.getTypeLength(o),t.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&t.isMatrix(a)?a:t.isMatrix(o)&&t.isVector(a)?t.getVectorFromMatrix(o):t.isVector(o)&&t.isMatrix(a)?t.getVectorFromMatrix(a):t.getTypeLength(a)>t.getTypeLength(o)?a:o}generate(t,e){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(t,e);let a=null,c=null;o!=="void"?(a=i.getNodeType(t),c=typeof r<"u"?r.getNodeType(t):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?t.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=t.changeComponentType(c,"uint")):t.isMatrix(a)&&t.isVector(c)?c=t.getVectorFromMatrix(a):t.isVector(a)&&t.isMatrix(c)?a=t.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(t,a),u=typeof r<"u"?r.build(t,c):null,h=t.getTypeLength(e),d=t.getFunctionOperator(n);if(e!=="void")return n==="<"&&h>1?t.format(`${t.getMethod("lessThan")}( ${l}, ${u} )`,o,e):n==="<="&&h>1?t.format(`${t.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,e):n===">"&&h>1?t.format(`${t.getMethod("greaterThan")}( ${l}, ${u} )`,o,e):n===">="&&h>1?t.format(`${t.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,e):n==="!"||n==="~"?t.format(`(${n}${l})`,a,e):d?t.format(`${d}( ${l}, ${u} )`,o,e):t.format(`( ${l} ${n} ${u} )`,o,e);if(a!=="void")return d?t.format(`${d}( ${l}, ${u} )`,o,e):t.format(`${l} ${n} ${u}`,o,e)}serialize(t){super.serialize(t),t.op=this.op}deserialize(t){super.deserialize(t),this.op=t.op}}const ii=k(Le,"+"),We=k(Le,"-"),te=k(Le,"*"),Ws=k(Le,"/"),Gw=k(Le,"%"),Ww=k(Le,"=="),Xw=k(Le,"!="),qw=k(Le,"<"),u_=k(Le,">"),Yw=k(Le,"<="),$w=k(Le,">="),jw=k(Le,"&&"),Zw=k(Le,"||"),Kw=k(Le,"!"),Jw=k(Le,"^^"),Qw=k(Le,"&"),tb=k(Le,"~"),eb=k(Le,"|"),nb=k(Le,"^"),ib=k(Le,"<<"),sb=k(Le,">>");U("add",ii);U("sub",We);U("mul",te);U("div",Ws);U("remainder",Gw);U("equal",Ww);U("notEqual",Xw);U("lessThan",qw);U("greaterThan",u_);U("lessThanEqual",Yw);U("greaterThanEqual",$w);U("and",jw);U("or",Zw);U("not",Kw);U("xor",Jw);U("bitAnd",Qw);U("bitNot",tb);U("bitOr",eb);U("bitXor",nb);U("shiftLeft",ib);U("shiftRight",sb);Q("OperatorNode",Le);class I extends ye{constructor(t,e,n=null,i=null){super(),this.method=t,this.aNode=e,this.bNode=n,this.cNode=i}getInputType(t){const e=this.aNode.getNodeType(t),n=this.bNode?this.bNode.getNodeType(t):null,i=this.cNode?this.cNode.getNodeType(t):null,r=t.isMatrix(e)?0:t.getTypeLength(e),o=t.isMatrix(n)?0:t.getTypeLength(n),a=t.isMatrix(i)?0:t.getTypeLength(i);return r>o&&r>a?e:o>a?n:a>r?i:e}getNodeType(t){const e=this.method;return e===I.LENGTH||e===I.DISTANCE||e===I.DOT?"float":e===I.CROSS?"vec3":e===I.ALL?"bool":e===I.EQUALS?t.changeComponentType(this.aNode.getNodeType(t),"bool"):e===I.MOD?this.aNode.getNodeType(t):this.getInputType(t)}generate(t,e){const n=this.method,i=this.getNodeType(t),r=this.getInputType(t),o=this.aNode,a=this.bNode,c=this.cNode,l=t.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=o,h=a;t.isMatrix(u.getNodeType(t))?h=Tt(O(h),0):u=Tt(O(u),0);const d=te(u,h).xyz;return Ln(d).build(t,e)}else{if(n===I.NEGATE)return t.format("( - "+o.build(t,r)+" )",i,e);if(n===I.ONE_MINUS)return We(1,o).build(t,e);if(n===I.RECIPROCAL)return Ws(1,o).build(t,e);if(n===I.DIFFERENCE)return je(We(o,a)).build(t,e);{const u=[];return n===I.CROSS||n===I.MOD?u.push(o.build(t,i),a.build(t,i)):n===I.STEP?u.push(o.build(t,t.getTypeLength(o.getNodeType(t))===1?"float":r),a.build(t,r)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(o.build(t,r),a.build(t,t.getTypeLength(a.getNodeType(t))===1?"float":r)):n===I.REFRACT?u.push(o.build(t,r),a.build(t,r),c.build(t,"float")):n===I.MIX?u.push(o.build(t,r),a.build(t,r),c.build(t,t.getTypeLength(c.getNodeType(t))===1?"float":r)):(u.push(o.build(t,r)),a!==null&&u.push(a.build(t,r)),c!==null&&u.push(c.build(t,r))),t.format(`${t.getMethod(n,i)}( ${u.join(", ")} )`,i,e)}}}serialize(t){super.serialize(t),t.method=this.method}deserialize(t){super.deserialize(t),this.method=t.method}}I.ALL="all";I.ANY="any";I.EQUALS="equals";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.BITCAST="bitcast";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const h_=b(1e-6);b(1e6);const Ap=b(Math.PI);b(Math.PI*2);const d_=k(I,I.ALL),rb=k(I,I.ANY),ob=k(I,I.EQUALS),ab=k(I,I.RADIANS),cb=k(I,I.DEGREES),f_=k(I,I.EXP),sh=k(I,I.EXP2),p_=k(I,I.LOG),ll=k(I,I.LOG2),Ir=k(I,I.SQRT),lb=k(I,I.INVERSE_SQRT),Vo=k(I,I.FLOOR),m_=k(I,I.CEIL),Ln=k(I,I.NORMALIZE),ul=k(I,I.FRACT),us=k(I,I.SIN),bs=k(I,I.COS),ub=k(I,I.TAN),hb=k(I,I.ASIN),db=k(I,I.ACOS),fb=k(I,I.ATAN),je=k(I,I.ABS),hd=k(I,I.SIGN),ha=k(I,I.LENGTH),pb=k(I,I.NEGATE),mb=k(I,I.ONE_MINUS),gb=k(I,I.DFDX),_b=k(I,I.DFDY),vb=k(I,I.ROUND),xb=k(I,I.RECIPROCAL),g_=k(I,I.TRUNC),yb=k(I,I.FWIDTH);k(I,I.BITCAST);const Mb=k(I,I.ATAN2),Lo=k(I,I.MIN),si=k(I,I.MAX),Sb=k(I,I.MOD),Tb=k(I,I.STEP),Eb=k(I,I.REFLECT),Ab=k(I,I.DISTANCE),Nb=k(I,I.DIFFERENCE),zo=k(I,I.DOT),__=k(I,I.CROSS),$i=k(I,I.POW),v_=k(I,I.POW,2),wb=k(I,I.POW,3),bb=k(I,I.POW,4),Rb=k(I,I.TRANSFORM_DIRECTION),Cb=s=>te(hd(s),$i(je(s),1/3)),Lb=s=>zo(s,s),hn=k(I,I.MIX),Po=(s,t=0,e=1)=>ht(new I(I.CLAMP,ht(s),ht(t),ht(e))),Pb=s=>Po(s),x_=k(I,I.REFRACT),_s=k(I,I.SMOOTHSTEP),Ib=k(I,I.FACEFORWARD),Db=(s,t,e)=>hn(t,e,s),Ob=(s,t,e)=>_s(t,e,s);U("all",d_);U("any",rb);U("equals",ob);U("radians",ab);U("degrees",cb);U("exp",f_);U("exp2",sh);U("log",p_);U("log2",ll);U("sqrt",Ir);U("inverseSqrt",lb);U("floor",Vo);U("ceil",m_);U("normalize",Ln);U("fract",ul);U("sin",us);U("cos",bs);U("tan",ub);U("asin",hb);U("acos",db);U("atan",fb);U("abs",je);U("sign",hd);U("length",ha);U("lengthSq",Lb);U("negate",pb);U("oneMinus",mb);U("dFdx",gb);U("dFdy",_b);U("round",vb);U("reciprocal",xb);U("trunc",g_);U("fwidth",yb);U("atan2",Mb);U("min",Lo);U("max",si);U("mod",Sb);U("step",Tb);U("reflect",Eb);U("distance",Ab);U("dot",zo);U("cross",__);U("pow",$i);U("pow2",v_);U("pow3",wb);U("pow4",bb);U("transformDirection",Rb);U("mix",Db);U("clamp",Po);U("refract",x_);U("smoothstep",Ob);U("faceForward",Ib);U("difference",Nb);U("saturate",Pb);U("cbrt",Cb);Q("MathNode",I);const Ub=Z(s=>{const{value:t}=s,{rgb:e}=t,n=e.mul(.9478672986).add(.0521327014).pow(2.4),i=e.mul(.0773993808),r=e.lessThanEqual(.04045),o=hn(n,i,r);return Tt(o,t.a)}),Fb=Z(s=>{const{value:t}=s,{rgb:e}=t,n=e.pow(.41666).mul(1.055).sub(.055),i=e.mul(12.92),r=e.lessThanEqual(.0031308),o=hn(n,i,r);return Tt(o,t.a)}),Np=s=>{let t=null;return s===Oi?t="Linear":s===Ai&&(t="sRGB"),t},y_=(s,t)=>Np(s)+"To"+Np(t);class Wn extends ye{constructor(t,e){super("vec4"),this.method=t,this.node=e}setup(){const{method:t,node:e}=this;return t===Wn.LINEAR_TO_LINEAR?e:Vb[t]({value:e})}}Wn.LINEAR_TO_LINEAR="LinearToLinear";Wn.LINEAR_TO_sRGB="LinearTosRGB";Wn.sRGB_TO_LINEAR="sRGBToLinear";const Vb={[Wn.LINEAR_TO_sRGB]:Fb,[Wn.sRGB_TO_LINEAR]:Ub},zb=(s,t)=>ht(new Wn(y_(Oi,t),ht(s))),M_=(s,t)=>ht(new Wn(y_(t,Oi),ht(s))),Bb=k(Wn,Wn.LINEAR_TO_sRGB),kb=k(Wn,Wn.sRGB_TO_LINEAR);U("linearTosRGB",Bb);U("sRGBToLinear",kb);U("linearToColorSpace",zb);U("colorSpaceToLinear",M_);Q("ColorSpaceNode",Wn);class S_ extends bt{constructor(t="",e="void"){super(e),this.snippet=t}generate(t,e){const n=this.getNodeType(t),i=this.snippet;if(n==="void")t.addLineFlowCode(i);else return t.format(`( ${i} )`,n,e)}}const hl=k(S_);Q("ExpressionNode",S_);class T_ extends Pr{constructor(t){super(0),this.textureNode=t,this.updateType=ve.FRAME}get texture(){return this.textureNode.value}update(){const t=this.texture,e=t.images,n=e&&e.length>0?e[0]&&e[0].image||e[0]:t.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const Hb=k(T_);Q("MaxMipLevelNode",T_);class Bo extends Pr{constructor(t,e=null,n=null){super(t),this.isTextureNode=!0,this.uvNode=e,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=ve.NONE,this.referenceNode=null,this._value=t,this.setUpdateMatrix(e===null)}set value(t){this.referenceNode?this.referenceNode.value=t:this._value=t}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Qi(this.value.channel)}updateReference(){return this.value}getTransformedUV(t){const e=this.value;return xe(e.matrix).mul(O(t,1)).xy}setUpdateMatrix(t){return this.updateMatrix=t,this.updateType=t?ve.FRAME:ve.NONE,this}setupUV(t,e){const n=this.value;return t.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(e=e.setY(e.y.oneMinus())),e}setup(t){const e=t.getNodeProperties(this);let n=this.uvNode;(n===null||t.context.forceUVContext===!0)&&t.context.getUV&&(n=t.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(t,n);let i=this.levelNode;i===null&&t.context.getTextureLevel&&(i=t.context.getTextureLevel(this)),e.uvNode=n,e.levelNode=i,e.compareNode=this.compareNode,e.gradNode=this.gradNode,e.depthNode=this.depthNode}generateUV(t,e){return e.build(t,this.sampler===!0?"vec2":"ivec2")}generateSnippet(t,e,n,i,r,o,a){const c=this.value;let l;return i?l=t.generateTextureLevel(c,e,n,i,r):a?l=t.generateTextureGrad(c,e,n,a,r):o?l=t.generateTextureCompare(c,e,n,o,r):this.sampler===!1?l=t.generateTextureLoad(c,e,n,r):l=t.generateTexture(c,e,n,r),l}generate(t,e){const n=t.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(t,"property");if(e==="sampler")return r+"_sampler";if(t.isReference(e))return r;{const o=t.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f,gradNode:_}=n,g=this.generateUV(t,u),p=h?h.build(t,"float"):null,m=f?f.build(t,"int"):null,y=d?d.build(t,"float"):null,v=_?[_[0].build(t,"vec2"),_[1].build(t,"vec2")]:null,S=t.getVarFromNode(this);a=t.getPropertyName(S);const w=this.generateSnippet(t,r,g,p,m,y,v);t.addLineFlowCode(`${a} = ${w}`),t.context.tempWrite!==!1&&(o.snippet=w,o.propertyName=a)}let c=a;const l=this.getNodeType(t);return t.needsColorSpaceToLinear(i)&&(c=M_(hl(c,l),i.colorSpace).setup(t).build(t,l)),t.format(c,l,e)}}setSampler(t){return this.sampler=t,this}getSampler(){return this.sampler}uv(t){const e=this.clone();return e.uvNode=t,e.referenceNode=this,ht(e)}blur(t){const e=this.clone();return e.levelNode=t.mul(Hb(e)),e.referenceNode=this,ht(e)}level(t){const e=this.clone();return e.levelNode=t,e.referenceNode=this,e}size(t){return ud(this,t)}compare(t){const e=this.clone();return e.compareNode=ht(t),e.referenceNode=this,ht(e)}grad(t,e){const n=this.clone();return n.gradNode=[ht(t),ht(e)],n.referenceNode=this,ht(n)}depth(t){const e=this.clone();return e.depthNode=ht(t),e.referenceNode=this,ht(e)}serialize(t){super.serialize(t),t.value=this.value.toJSON(t.meta).uuid}deserialize(t){super.deserialize(t),this.value=t.meta.textures[t.value]}update(){const t=this.value;t.matrixAutoUpdate===!0&&t.updateMatrix()}clone(){const t=new this.constructor(this.value,this.uvNode,this.levelNode);return t.sampler=this.sampler,t}}const ei=k(Bo),fr=(...s)=>ei(...s).setSampler(!1);U("texture",ei);Q("TextureNode",Bo);class dl extends Pr{constructor(t,e,n=0){super(t,e),this.isBufferNode=!0,this.bufferType=e,this.bufferCount=n}getInputType(){return"buffer"}}const dd=(s,t,e)=>ht(new dl(s,t,e));Q("BufferNode",dl);class Gb extends Fo{constructor(t,e){super(t,e),this.isArrayBufferElementNode=!0}getNodeType(t){return this.node.getElementType(t)}generate(t){const e=super.generate(t),n=this.getNodeType();return t.format(e,"vec4",n)}}class E_ extends dl{constructor(t,e=null){super(null,"vec4"),this.array=t,this.elementType=e,this._elementType=null,this._elementLength=0,this.updateType=ve.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:t,value:e}=this,n=this.getElementLength(),i=this.getElementType();if(n===1)for(let r=0;r<t.length;r++){const o=r*4;e[o]=t[r]}else if(i==="color")for(let r=0;r<t.length;r++){const o=r*4,a=t[r];e[o]=a.r,e[o+1]=a.g,e[o+2]=a.b||0}else for(let r=0;r<t.length;r++){const o=r*4,a=t[r];e[o]=a.x,e[o+1]=a.y,e[o+2]=a.z||0,e[o+3]=a.w||0}}setup(t){const e=this.array.length;return this._elementType=this.elementType===null?Ds(this.array[0]):this.elementType,this._elementLength=t.getTypeLength(this._elementType),this.value=new Float32Array(e*4),this.bufferCount=e,super.setup(t)}element(t){return ht(new Gb(this,ht(t)))}}const rh=(s,t)=>ht(new E_(s,t));Q("UniformsNode",E_);class Wb extends Fo{constructor(t,e){super(t,e),this.referenceNode=t,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(t){const e=super.generate(t),n=this.referenceNode.getNodeType(),i=this.getNodeType();return t.format(e,n,i)}}class ko extends bt{constructor(t,e,n=null,i=null){super(),this.property=t,this.uniformType=e,this.object=n,this.count=i,this.properties=t.split("."),this.reference=null,this.node=null,this.updateType=ve.OBJECT}element(t){return ht(new Wb(this,ht(t)))}setNodeType(t){let e=null;this.count!==null?e=dd(null,t,this.count):Array.isArray(this.getValueFromReference())?e=rh(null,t):t==="texture"?e=ei(null):e=xe(null,t),this.node=e}getNodeType(t){return this.node.getNodeType(t)}getValueFromReference(t=this.reference){const{properties:e}=this;let n=t[e[0]];for(let i=1;i<e.length;i++)n=n[e[i]];return n}updateReference(t){return this.reference=this.object!==null?this.object:t.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const t=this.getValueFromReference();Array.isArray(t)?this.node.array=t:this.node.value=t}}const Ii=(s,t,e)=>ht(new ko(s,t,e)),Xb=(s,t,e,n)=>ht(new ko(s,t,n,e));Q("ReferenceNode",ko);class A_ extends ko{constructor(t,e,n=null){super(t,e,n),this.material=n}updateReference(t){return this.reference=this.material!==null?this.material:t.material,this.reference}}const N_=(s,t,e)=>ht(new A_(s,t,e));Q("MaterialReferenceNode",A_);class Ot extends bt{constructor(t=Ot.VIEW_MATRIX,e=null){super(),this.scope=t,this.object3d=e,this.updateType=ve.OBJECT,this._uniformNode=new Pr(null)}getNodeType(){const t=this.scope;if(t===Ot.WORLD_MATRIX||t===Ot.VIEW_MATRIX)return"mat4";if(t===Ot.NORMAL_MATRIX)return"mat3";if(t===Ot.POSITION||t===Ot.VIEW_POSITION||t===Ot.DIRECTION||t===Ot.SCALE)return"vec3"}update(t){const e=this.object3d,n=this._uniformNode,i=this.scope;if(i===Ot.VIEW_MATRIX)n.value=e.modelViewMatrix;else if(i===Ot.NORMAL_MATRIX)n.value=e.normalMatrix;else if(i===Ot.WORLD_MATRIX)n.value=e.matrixWorld;else if(i===Ot.POSITION)n.value=n.value||new F,n.value.setFromMatrixPosition(e.matrixWorld);else if(i===Ot.SCALE)n.value=n.value||new F,n.value.setFromMatrixScale(e.matrixWorld);else if(i===Ot.DIRECTION)n.value=n.value||new F,e.getWorldDirection(n.value);else if(i===Ot.VIEW_POSITION){const r=t.camera;n.value=n.value||new F,n.value.setFromMatrixPosition(e.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(t){const e=this.scope;return e===Ot.WORLD_MATRIX||e===Ot.VIEW_MATRIX?this._uniformNode.nodeType="mat4":e===Ot.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(e===Ot.POSITION||e===Ot.VIEW_POSITION||e===Ot.DIRECTION||e===Ot.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(t)}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Ot.VIEW_MATRIX="viewMatrix";Ot.NORMAL_MATRIX="normalMatrix";Ot.WORLD_MATRIX="worldMatrix";Ot.POSITION="position";Ot.SCALE="scale";Ot.VIEW_POSITION="viewPosition";Ot.DIRECTION="direction";k(Ot,Ot.DIRECTION);k(Ot,Ot.VIEW_MATRIX);k(Ot,Ot.NORMAL_MATRIX);k(Ot,Ot.WORLD_MATRIX);const oh=k(Ot,Ot.POSITION);k(Ot,Ot.SCALE);const w_=k(Ot,Ot.VIEW_POSITION);Q("Object3DNode",Ot);class kt extends Ot{constructor(t=kt.POSITION){super(t),this.updateType=ve.RENDER}getNodeType(t){const e=this.scope;return e===kt.PROJECTION_MATRIX||e===kt.PROJECTION_MATRIX_INVERSE?"mat4":e===kt.NEAR||e===kt.FAR||e===kt.LOG_DEPTH?"float":super.getNodeType(t)}update(t){const e=t.camera,n=this._uniformNode,i=this.scope;i===kt.VIEW_MATRIX?n.value=e.matrixWorldInverse:i===kt.PROJECTION_MATRIX?n.value=e.projectionMatrix:i===kt.PROJECTION_MATRIX_INVERSE?n.value=e.projectionMatrixInverse:i===kt.NEAR?n.value=e.near:i===kt.FAR?n.value=e.far:i===kt.LOG_DEPTH?n.value=2/(Math.log(e.far+1)/Math.LN2):(this.object3d=e,super.update(t))}generate(t){const e=this.scope;return e===kt.PROJECTION_MATRIX||e===kt.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(e===kt.NEAR||e===kt.FAR||e===kt.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(t)}}kt.PROJECTION_MATRIX="projectionMatrix";kt.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";kt.NEAR="near";kt.FAR="far";kt.LOG_DEPTH="logDepth";const Bi=et(kt,kt.PROJECTION_MATRIX);et(kt,kt.PROJECTION_MATRIX_INVERSE);const hu=et(kt,kt.NEAR),du=et(kt,kt.FAR),qb=et(kt,kt.LOG_DEPTH),xs=et(kt,kt.VIEW_MATRIX);et(kt,kt.NORMAL_MATRIX);et(kt,kt.WORLD_MATRIX);const Yb=et(kt,kt.POSITION);Q("CameraNode",kt);class dn extends Ot{constructor(t=dn.VIEW_MATRIX){super(t)}update(t){this.object3d=t.object,super.update(t)}}et(dn,dn.DIRECTION);const Rr=et(dn,dn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),b_=et(dn,dn.NORMAL_MATRIX),Sa=et(dn,dn.WORLD_MATRIX);et(dn,dn.POSITION);et(dn,dn.SCALE);et(dn,dn.VIEW_POSITION);Q("ModelNode",dn);class Ke extends bt{constructor(t=Ke.LOCAL){super("vec3"),this.scope=t}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(t){const e=this.scope;let n=null;if(e===Ke.GEOMETRY)t.hasGeometryAttribute("normal")===!1?n=O(0,1,0):n=xn("normal","vec3");else if(e===Ke.LOCAL)n=Ve(zc);else if(e===Ke.VIEW){const i=b_.mul(Di);n=Ln(Ve(i))}else if(e===Ke.WORLD){const i=Xs.transformDirection(xs);n=Ln(Ve(i))}return n.build(t,this.getNodeType(t))}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Ke.GEOMETRY="geometry";Ke.LOCAL="local";Ke.VIEW="view";Ke.WORLD="world";const zc=et(Ke,Ke.GEOMETRY),Di=et(Ke,Ke.LOCAL).temp("Normal"),Xs=et(Ke,Ke.VIEW),R_=et(Ke,Ke.WORLD),ze=cn("vec3","TransformedNormalView"),C_=ze.transformDirection(xs).normalize(),so=cn("vec3","TransformedClearcoatNormalView");Q("NormalNode",Ke);const wp=new Map;class J extends bt{constructor(t){super(),this.scope=t}getCache(t,e){let n=wp.get(t);return n===void 0&&(n=N_(t,e),wp.set(t,n)),n}getFloat(t){return this.getCache(t,"float")}getColor(t){return this.getCache(t,"color")}getTexture(t){return this.getCache(t==="map"?"map":t+"Map","texture")}setup(t){const e=t.context.material,n=this.scope;let i=null;if(n===J.COLOR){const r=this.getColor(n);e.map&&e.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===J.OPACITY){const r=this.getFloat(n);e.alphaMap&&e.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===J.SPECULAR_STRENGTH)e.specularMap&&e.specularMap.isTexture===!0?i=this.getTexture("specular").r:i=b(1);else if(n===J.SPECULAR_INTENSITY){const r=this.getFloat(n);e.specularMap?i=r.mul(this.getTexture(n).a):i=r}else if(n===J.SPECULAR_COLOR){const r=this.getColor(n);e.specularColorMap&&e.specularColorMap.isTexture===!0?i=r.mul(this.getTexture(n).rgb):i=r}else if(n===J.ROUGHNESS){const r=this.getFloat(n);e.roughnessMap&&e.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===J.METALNESS){const r=this.getFloat(n);e.metalnessMap&&e.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===J.EMISSIVE){const r=this.getColor(n);e.emissiveMap&&e.emissiveMap.isTexture===!0?i=r.mul(this.getTexture(n)):i=r}else if(n===J.NORMAL)e.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):e.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=Xs;else if(n===J.CLEARCOAT){const r=this.getFloat(n);e.clearcoatMap&&e.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===J.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);e.clearcoatRoughnessMap&&e.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===J.CLEARCOAT_NORMAL)e.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=Xs;else if(n===J.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));e.sheenColorMap&&e.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===J.SHEEN_ROUGHNESS){const r=this.getFloat(n);e.sheenRoughnessMap&&e.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===J.ANISOTROPY)if(e.anisotropyMap&&e.anisotropyMap.isTexture===!0){const r=this.getTexture(n);i=id(Qo.x,Qo.y,Qo.y.negate(),Qo.x).mul(r.rg.mul(2).sub(At(1)).normalize().mul(r.b))}else i=Qo;else if(n===J.IRIDESCENCE_THICKNESS){const r=Ii("1","float",e.iridescenceThicknessRange);if(e.iridescenceThicknessMap){const o=Ii("0","float",e.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else if(n===J.TRANSMISSION){const r=this.getFloat(n);e.transmissionMap?i=r.mul(this.getTexture(n).r):i=r}else if(n===J.THICKNESS){const r=this.getFloat(n);e.thicknessMap?i=r.mul(this.getTexture(n).g):i=r}else if(n===J.IOR)i=this.getFloat(n);else{const r=this.getNodeType(t);i=this.getCache(n,r)}return i}}J.ALPHA_TEST="alphaTest";J.COLOR="color";J.OPACITY="opacity";J.SHININESS="shininess";J.SPECULAR="specular";J.SPECULAR_STRENGTH="specularStrength";J.SPECULAR_INTENSITY="specularIntensity";J.SPECULAR_COLOR="specularColor";J.REFLECTIVITY="reflectivity";J.ROUGHNESS="roughness";J.METALNESS="metalness";J.NORMAL="normal";J.CLEARCOAT="clearcoat";J.CLEARCOAT_ROUGHNESS="clearcoatRoughness";J.CLEARCOAT_NORMAL="clearcoatNormal";J.EMISSIVE="emissive";J.ROTATION="rotation";J.SHEEN="sheen";J.SHEEN_ROUGHNESS="sheenRoughness";J.ANISOTROPY="anisotropy";J.IRIDESCENCE="iridescence";J.IRIDESCENCE_IOR="iridescenceIOR";J.IRIDESCENCE_THICKNESS="iridescenceThickness";J.IOR="ior";J.TRANSMISSION="transmission";J.THICKNESS="thickness";J.ATTENUATION_DISTANCE="attenuationDistance";J.ATTENUATION_COLOR="attenuationColor";J.LINE_SCALE="scale";J.LINE_DASH_SIZE="dashSize";J.LINE_GAP_SIZE="gapSize";J.LINE_WIDTH="linewidth";J.LINE_DASH_OFFSET="dashOffset";J.POINT_WIDTH="pointWidth";const $b=et(J,J.ALPHA_TEST),Ta=et(J,J.COLOR),jb=et(J,J.SHININESS),Zb=et(J,J.EMISSIVE),L_=et(J,J.OPACITY),Kb=et(J,J.SPECULAR),bp=et(J,J.SPECULAR_INTENSITY),Jb=et(J,J.SPECULAR_COLOR),Qb=et(J,J.SPECULAR_STRENGTH);et(J,J.REFLECTIVITY);const t1=et(J,J.ROUGHNESS),e1=et(J,J.METALNESS),n1=et(J,J.NORMAL),i1=et(J,J.CLEARCOAT),s1=et(J,J.CLEARCOAT_ROUGHNESS),r1=et(J,J.CLEARCOAT_NORMAL),o1=et(J,J.ROTATION),a1=et(J,J.SHEEN),c1=et(J,J.SHEEN_ROUGHNESS),l1=et(J,J.ANISOTROPY),u1=et(J,J.IRIDESCENCE),h1=et(J,J.IRIDESCENCE_IOR),d1=et(J,J.IRIDESCENCE_THICKNESS),f1=et(J,J.TRANSMISSION),p1=et(J,J.THICKNESS),m1=et(J,J.IOR),g1=et(J,J.ATTENUATION_DISTANCE),_1=et(J,J.ATTENUATION_COLOR),ah=et(J,J.LINE_SCALE),P_=et(J,J.LINE_DASH_SIZE),I_=et(J,J.LINE_GAP_SIZE),fu=et(J,J.LINE_WIDTH),Rp=et(J,J.LINE_DASH_OFFSET),v1=et(J,J.POINT_WIDTH),Qo=xe(new Ct).onReference(function(s){return s.material}).onRenderUpdate(function({material:s}){this.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation))});Q("MaterialNode",J);class _e extends bt{constructor(t=_e.LOCAL){super("vec3"),this.scope=t}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(t){const e=this.scope;let n=null;if(e===_e.GEOMETRY)n=xn("position","vec3");else if(e===_e.LOCAL)n=Ve(In);else if(e===_e.WORLD){const i=Sa.mul(En);n=Ve(i)}else if(e===_e.VIEW){const i=Rr.mul(En);n=Ve(i)}else if(e===_e.VIEW_DIRECTION){const i=Jn.negate();n=Ln(Ve(i))}else if(e===_e.WORLD_DIRECTION){const i=En.transformDirection(Sa);n=Ln(Ve(i))}return n.build(t,this.getNodeType(t))}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}_e.GEOMETRY="geometry";_e.LOCAL="local";_e.WORLD="world";_e.WORLD_DIRECTION="worldDirection";_e.VIEW="view";_e.VIEW_DIRECTION="viewDirection";const In=et(_e,_e.GEOMETRY),En=et(_e,_e.LOCAL).temp("Position"),ch=et(_e,_e.WORLD),x1=et(_e,_e.WORLD_DIRECTION),Jn=et(_e,_e.VIEW),De=et(_e,_e.VIEW_DIRECTION);Q("PositionNode",_e);class D_ extends ye{constructor(t=null){super("vec4"),this.positionNode=t}setup(t){if(t.shaderStage==="fragment")return Ve(t.context.mvp);const e=this.positionNode||En;return Bi.mul(Rr).mul(e)}}const Cp=k(D_);Q("ModelViewProjectionNode",D_);class O_ extends sl{constructor(t,e=null,n=0,i=0){super(t,e),this.isBufferNode=!0,this.bufferType=e,this.bufferStride=n,this.bufferOffset=i,this.usage=Ec,this.instanced=!1,this.attribute=null,t&&t.isBufferAttribute===!0&&(this.attribute=t,this.usage=t.usage,this.instanced=t.isInstancedBufferAttribute)}getNodeType(t){return this.bufferType===null&&(this.bufferType=t.getTypeFromAttribute(this.attribute)),this.bufferType}setup(t){if(this.attribute!==null)return;const e=this.getNodeType(t),n=this.value,i=t.getTypeLength(e),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Pm(n,r),c=new Ch(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(t){const e=this.getNodeType(t),n=t.getBufferAttributeFromNode(this,e),i=t.getPropertyName(n);let r=null;return t.shaderStage==="vertex"||t.shaderStage==="compute"?(this.name=i,r=i):r=Ve(this).build(t,e),r}getInputType(){return"bufferAttribute"}setUsage(t){return this.usage=t,this}setInstanced(t){return this.instanced=t,this}}const fl=(s,t,e,n)=>ht(new O_(s,t,e,n)),y1=(s,t,e,n)=>fl(s,t,e,n).setUsage(Du),Lp=(s,t,e,n)=>fl(s,t,e,n).setInstanced(!0),Pp=(s,t,e,n)=>y1(s,t,e,n).setInstanced(!0);U("toAttribute",s=>fl(s.value));Q("BufferAttributeNode",O_);class U_ extends bt{constructor(t){super("void"),this.instanceMesh=t,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let t=this.instanceMatrixNode;const e=this.instanceMesh;if(t===null){const c=e.instanceMatrix,l=new DA(c.array,16,1),u=c.usage===Du?Pp:Lp,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];t=po(...h),this.instanceMatrixNode=t}const n=e.instanceColor;if(n&&this.instanceColorNode===null){const c=new pA(n.array,3),l=n.usage===Du?Pp:Lp;this.instanceColorNode=O(l(c,"vec3",3,0))}const i=t.mul(En).xyz,r=Pi(t[0].xyz,t[1].xyz,t[2].xyz),o=Di.div(O(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;En.assign(i),Di.assign(a),this.instanceColorNode!==null&&Fi("vec3","vInstanceColor").assign(this.instanceColorNode)}}const M1=k(U_);Q("InstanceNode",U_);class Ze extends bt{constructor(t=Ze.LOCAL){super(),this.scope=t}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Ze.GEOMETRY?"vec4":"vec3"}generate(t){const e=this.scope;let n=null;if(e===Ze.GEOMETRY)n=xn("tangent","vec4"),t.geometry.hasAttribute("tangent")===!1&&t.geometry.computeTangents();else if(e===Ze.LOCAL)n=Ve(Bc.xyz);else if(e===Ze.VIEW){const i=Rr.mul(Tt(pl,0)).xyz;n=Ln(Ve(i))}else if(e===Ze.WORLD){const i=ml.transformDirection(xs);n=Ln(Ve(i))}return n.build(t,this.getNodeType(t))}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Ze.GEOMETRY="geometry";Ze.LOCAL="local";Ze.VIEW="view";Ze.WORLD="world";const Bc=et(Ze,Ze.GEOMETRY),pl=et(Ze,Ze.LOCAL),ml=et(Ze,Ze.VIEW),S1=et(Ze,Ze.WORLD),F_=Ma(ml,"TransformedTangentView");Ln(F_.transformDirection(xs));Q("TangentNode",Ze);class V_ extends bt{constructor(t){super("void"),this.batchMesh=t,this.instanceColorNode=null,this.batchingIdNode=null}setup(t){this.batchingIdNode===null&&(this.batchingIdNode=xn("batchId"));const e=this.batchMesh._matricesTexture,n=ud(fr(e),0),i=b(C(this.batchingIdNode)).mul(4).toVar(),r=C(i.mod(n)),o=C(i).div(C(n)),a=po(fr(e,gr(r,o)),fr(e,gr(r.add(1),o)),fr(e,gr(r.add(2),o)),fr(e,gr(r.add(3),o))),c=Pi(a[0].xyz,a[1].xyz,a[2].xyz);En.assign(a.mul(En));const l=Di.div(O(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;Di.assign(u),t.hasGeometryAttribute("tangent")&&pl.mulAssign(c)}}const T1=k(V_);Q("batch",V_);class z_ extends bt{constructor(t,e=!1){super("void"),this.skinnedMesh=t,this.useReference=e,this.updateType=ve.OBJECT,this.skinIndexNode=xn("skinIndex","uvec4"),this.skinWeightNode=xn("skinWeight","vec4");let n,i,r;e?(n=Ii("bindMatrix","mat4"),i=Ii("bindMatrixInverse","mat4"),r=Xb("skeleton.boneMatrices","mat4",t.skeleton.bones.length)):(n=xe(t.bindMatrix,"mat4"),i=xe(t.bindMatrixInverse,"mat4"),r=dd(t.skeleton.boneMatrices,"mat4",t.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=i,this.boneMatricesNode=r}setup(t){const{skinIndexNode:e,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(e.x),c=o.element(e.y),l=o.element(e.z),u=o.element(e.w),h=i.mul(En),d=ii(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=r.mul(d).xyz;let _=ii(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));_=r.mul(_).mul(i);const g=_.transformDirection(Di).xyz;En.assign(f),Di.assign(g),t.hasGeometryAttribute("tangent")&&pl.assign(g)}generate(t,e){if(e!=="void")return En.build(t,e)}update(t){(this.useReference?t.object:this.skinnedMesh).skeleton.update()}}const E1=s=>ht(new z_(s,!0));Q("SkinningNode",z_);class B_ extends bt{constructor(t=[]){super(),this.params=t}getVarName(t){return String.fromCharCode(105+t)}getProperties(t){const e=t.getNodeProperties(this);if(e.stackNode!==void 0)return e;const n={};for(let i=0,r=this.params.length-1;i<r;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=hl(a,c)}return e.returnsNode=this.params[this.params.length-1](n,t.addStack(),t),e.stackNode=t.removeStack(),e}getNodeType(t){const{returnsNode:e}=this.getProperties(t);return e?e.getNodeType(t):"void"}setup(t){this.getProperties(t)}generate(t){const e=this.getProperties(t),n={tempWrite:!1},i=this.params,r=e.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,f=null,_=null,g=null,p=null;u.isNode?(_="int",f=this.getVarName(c),h="0",d=u.build(t,_),g="<"):(_=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,g=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(t,_)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(t,_)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",g=">="):d!==void 0&&h===void 0&&(h="0",g="<"),g===void 0&&(Number(h)>Number(d)?g=">=":g="<"));const m={start:h,end:d,condition:g},y=m.start,v=m.end;let S="",w="",N="";p||(_==="int"||_==="uint"?g.includes("<")?p="++":p="--":g.includes("<")?p="+= 1.":p="-= 1."),S+=t.getVar(_,f)+" = "+y,w+=f+" "+g+" "+v,N+=f+" "+p;const E=`for ( ${S}; ${w}; ${N} )`;t.addFlowCode((c===0?`
`:"")+t.tab+E+` {

`).addFlowTab()}const o=fs(r,n).build(t,"void"),a=e.returnsNode?e.returnsNode.build(t):"";t.removeFlowTab().addFlowCode(`
`+t.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)t.addFlowCode((c===0?"":t.tab)+`}

`).removeFlowTab();return t.addFlowTab(),a}}const Te=(...s)=>ht(new B_(fo(s,"int"))).append(),A1=()=>hl("break").append();U("loop",(s,...t)=>Jg(s,Te(...t)));Q("LoopNode",B_);const pu=new WeakMap,$n=new oe,Ip=Z(({bufferMap:s,influence:t,stride:e,width:n,depth:i,offset:r})=>{const o=C(Fw).mul(e).add(r),a=o.div(n),c=o.sub(a.mul(n));return fr(s,gr(c,a)).depth(i).mul(t)});function N1(s){const t=s.morphAttributes.position!==void 0,e=s.morphAttributes.normal!==void 0,n=s.morphAttributes.color!==void 0,i=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,r=i!==void 0?i.length:0;let o=pu.get(s);if(o===void 0||o.count!==r){let y=function(){p.dispose(),pu.delete(s),s.removeEventListener("dispose",y)};var a=y;o!==void 0&&o.texture.dispose();const c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[];let h=0;t===!0&&(h=1),e===!0&&(h=2),n===!0&&(h=3);let d=s.attributes.position.count*h,f=1;const _=4096;d>_&&(f=Math.ceil(d/_),d=_);const g=new Float32Array(d*f*4*r),p=new Eh(g,d,f,r);p.type=hs,p.needsUpdate=!0;const m=h*4;for(let v=0;v<r;v++){const S=c[v],w=l[v],N=u[v],E=d*f*4*v;for(let L=0;L<S.count;L++){const x=L*m;t===!0&&($n.fromBufferAttribute(S,L),g[E+x+0]=$n.x,g[E+x+1]=$n.y,g[E+x+2]=$n.z,g[E+x+3]=0),e===!0&&($n.fromBufferAttribute(w,L),g[E+x+4]=$n.x,g[E+x+5]=$n.y,g[E+x+6]=$n.z,g[E+x+7]=0),n===!0&&($n.fromBufferAttribute(N,L),g[E+x+8]=$n.x,g[E+x+9]=$n.y,g[E+x+10]=$n.z,g[E+x+11]=N.itemSize===4?$n.w:1)}}o={count:r,texture:p,stride:h,size:new Ct(d,f)},pu.set(s,o),s.addEventListener("dispose",y)}return o}class k_ extends bt{constructor(t){super("void"),this.mesh=t,this.morphBaseInfluence=xe(1),this.updateType=ve.OBJECT}setup(t){const{geometry:e}=t,n=e.morphAttributes.position!==void 0,i=e.morphAttributes.normal!==void 0,r=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=N1(e);n===!0&&En.mulAssign(this.morphBaseInfluence),i===!0&&Di.mulAssign(this.morphBaseInfluence);const u=C(l.width);Te(o,({i:h})=>{const d=b(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(fr(this.mesh.morphTexture,gr(C(h).add(1),C(t_))).r):d.assign(Ii("morphTargetInfluences","float").element(h).toVar()),n===!0&&En.addAssign(Ip({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),i===!0&&Di.addAssign(Ip({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const t=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?t.value=1:t.value=1-this.mesh.morphTargetInfluences.reduce((e,n)=>e+n,0)}}const w1=k(k_);Q("MorphNode",k_);class H_ extends bt{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return De.negate().reflect(ze).transformDirection(xs)}}const b1=et(H_);Q("ReflectVectorNode",H_);class G_ extends Bo{constructor(t,e=null,n=null){super(t,e,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return b1}setUpdateMatrix(){}setupUV(t,e){const n=this.value;return t.renderer.coordinateSystem===So||!n.isRenderTargetTexture?O(e.x.negate(),e.yz):e}generateUV(t,e){return e.build(t,"vec3")}}const W_=k(G_);U("cubeTexture",W_);Q("CubeTextureNode",G_);class Da extends bt{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Q("LightingNode",Da);let ta=null;class Dr extends Da{constructor(t=null){super(),this.updateType=ve.FRAME,this.light=t,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Ut,this._defaultColorNode=xe(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(t){const{object:e}=t;if(e.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){ta===null&&(ta=t.createNodeMaterial(),ta.fragmentNode=Tt(0,0,0,1),ta.isShadowNodeMaterial=!0);const i=this.light.shadow,r=t.createRenderTarget(i.mapSize.width,i.mapSize.height),o=new Ca;o.minFilter=Mn,o.magFilter=Mn,o.image.width=i.mapSize.width,o.image.height=i.mapSize.height,o.compareFunction=fm,r.depthTexture=o,i.camera.updateProjectionMatrix();const a=Ii("bias","float",i),c=Ii("normalBias","float",i),l=e.material.shadowPositionNode||ch;let u=xe(i.matrix).mul(l.add(R_.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);t.renderer.coordinateSystem===So&&(d=d.mul(2).sub(1)),u=O(u.x,u.y.oneMinus(),d),n=((p,m,y)=>ei(p,m).compare(y))(o,u.xy,u.z);const _=ei(r.texture,u),g=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(g),this.shadowNode=n,this.shadowMaskNode=g,this.updateBeforeType=ve.RENDER}}setup(t){this.light.castShadow?this.setupShadow(t):this.shadowNode!==null&&this.disposeShadow()}updateShadow(t){const{rtt:e,light:n}=this,{renderer:i,scene:r}=t,o=r.overrideMaterial;r.overrideMaterial=ta,e.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=i.toneMapping,c=i.getRenderTarget(),l=i.getRenderObjectFunction();i.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&i.renderObject(u,...h)}),i.setRenderTarget(e),i.toneMapping=mi,i.render(r,n.shadow.camera),i.setRenderTarget(c),i.setRenderObjectFunction(l),i.toneMapping=a,r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(t){const{light:e}=this;e.castShadow&&this.updateShadow(t)}update(){const{light:t}=this;this.color.copy(t.color).multiplyScalar(t.intensity)}}Q("AnalyticLightNode",Dr);const kc=new WeakMap,R1=s=>s.sort((t,e)=>t.id-e.id);class C1 extends bt{constructor(t=[]){super("vec3"),this.totalDiffuseNode=O().temp("totalDiffuse"),this.totalSpecularNode=O().temp("totalSpecular"),this.outgoingLightNode=O().temp("outgoingLight"),this.lightNodes=t,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const t=[];for(const e of this.lightNodes)t.push(e.getHash());this._hash="lights-"+t.join(",")}return this._hash}setup(t){const e=t.context,n=e.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;e.outgoingLight=i;const c=t.addStack();n.start(e,c,t);for(const p of r)p.build(t);n.indirectDiffuse(e,c,t),n.indirectSpecular(e,c,t),n.ambientOcclusion(e,c,t);const{backdrop:l,backdropAlpha:u}=e,{directDiffuse:h,directSpecular:d,indirectDiffuse:f,indirectSpecular:_}=e.reflectedLight;let g=h.add(f);l!==null&&(u!==null?g=O(u.mix(g,l)):g=O(l),e.material.transparent=!0),o.assign(g),a.assign(d.add(_)),i.assign(o.add(a)),n.finish(e,c,t),i=i.bypass(t.removeStack())}return i}_getLightNodeById(t){for(const e of this.lightNodes)if(e.isAnalyticLightNode&&e.light.id===t)return e;return null}fromLights(t=[]){const e=[];t=R1(t);for(const n of t){let i=this._getLightNodeById(n.id);if(i===null){const r=n.constructor,o=kc.has(r)?kc.get(r):Dr;i=ht(new o(n))}e.push(i)}return this.lightNodes=e,this._hash=null,this}}const L1=k(C1);function Ho(s,t){if(kc.has(s)){console.warn(`Redefinition of light node ${t.type}`);return}if(typeof s!="function")throw new Error(`Light ${s.name} is not a class`);if(typeof t!="function"||!t.type)throw new Error(`Light node ${t.type} is not a class`);kc.set(s,t)}class X_ extends Da{constructor(t=null){super(),this.aoNode=t}setup(t){const n=this.aoNode.x.sub(1).mul(1).add(1);t.context.ambientOcclusion.mulAssign(n)}}Q("AONode",X_);class q_ extends sd{constructor(t,e=null,n=null,i=null){super(t),this.lightingModel=e,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:t,backdropAlphaNode:e}=this,n=O().temp("directDiffuse"),i=O().temp("directSpecular"),r=O().temp("indirectDiffuse"),o=O().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:r,indirectSpecular:o};return{radiance:O().temp("radiance"),irradiance:O().temp("irradiance"),iblIrradiance:O().temp("iblIrradiance"),ambientOcclusion:b(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:t,backdropAlpha:e}}setup(t){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||t.context.lightingModel,super.setup(t)}}const Y_=k(q_);U("lightingContext",Y_);Q("LightingContextNode",q_);class Je extends bt{constructor(t=Je.LOCAL){super("vec3"),this.scope=t}getHash(){return`bitangent-${this.scope}`}generate(t){const e=this.scope;let n;e===Je.GEOMETRY?n=zc.cross(Bc):e===Je.LOCAL?n=Di.cross(pl):e===Je.VIEW?n=Xs.cross(ml):e===Je.WORLD&&(n=R_.cross(S1));const i=n.mul(Bc.w).xyz;return Ln(Ve(i)).build(t,this.getNodeType(t))}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Je.GEOMETRY="geometry";Je.LOCAL="local";Je.VIEW="view";Je.WORLD="world";et(Je,Je.GEOMETRY);et(Je,Je.LOCAL);const P1=et(Je,Je.VIEW);et(Je,Je.WORLD);const I1=Ln(ze.cross(F_).mul(Bc.w));Ln(I1.transformDirection(xs));Q("BitangentNode",Je);const ro=Pi(ml,P1,Xs);De.mul(ro);const D1=(()=>{let s=mo.cross(De);return s=s.cross(mo).normalize(),s=hn(s,ze,ur.mul(Os.oneMinus()).oneMinus().pow2().pow2()).normalize(),s})();class fd extends bt{constructor(t,e,n=null){super(),this.condNode=t,this.ifNode=e,this.elseNode=n}getNodeType(t){const e=this.ifNode.getNodeType(t);if(this.elseNode!==null){const n=this.elseNode.getNodeType(t);if(t.getTypeLength(n)>t.getTypeLength(e))return n}return e}generate(t,e){const n=this.getNodeType(t),i={tempWrite:!1},r=t.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=e!=="void",l=c?cn(n).build(t):"";r.nodeProperty=l;const u=fs(this.condNode).build(t,"bool");t.addFlowCode(`
${t.tab}if ( ${u} ) {

`).addFlowTab();let h=fs(o,i).build(t,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),t.removeFlowTab().addFlowCode(t.tab+"	"+h+`

`+t.tab+"}"),a!==null){t.addFlowCode(` else {

`).addFlowTab();let d=fs(a,i).build(t,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),t.removeFlowTab().addFlowCode(t.tab+"	"+d+`

`+t.tab+`}

`)}else t.addFlowCode(`

`);return t.format(l,n,e)}}const Qn=k(fd);U("cond",Qn);Q("CondNode",fd);const Dp=b(1),lh=b(-2),uc=b(.8),mu=b(-1),hc=b(.4),gu=b(2),dc=b(.305),_u=b(3),Op=b(.21),O1=b(4),Up=b(4),U1=b(16),F1=Z(([s])=>{const t=O(je(s)).toVar(),e=b(-1).toVar();return Zt(t.x.greaterThan(t.z),()=>{Zt(t.x.greaterThan(t.y),()=>{e.assign(Qn(s.x.greaterThan(0),0,3))}).else(()=>{e.assign(Qn(s.y.greaterThan(0),1,4))})}).else(()=>{Zt(t.z.greaterThan(t.y),()=>{e.assign(Qn(s.z.greaterThan(0),2,5))}).else(()=>{e.assign(Qn(s.y.greaterThan(0),1,4))})}),e}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),V1=Z(([s,t])=>{const e=At().toVar();return Zt(t.equal(0),()=>{e.assign(At(s.z,s.y).div(je(s.x)))}).elseif(t.equal(1),()=>{e.assign(At(s.x.negate(),s.z.negate()).div(je(s.y)))}).elseif(t.equal(2),()=>{e.assign(At(s.x.negate(),s.y).div(je(s.z)))}).elseif(t.equal(3),()=>{e.assign(At(s.z.negate(),s.y).div(je(s.x)))}).elseif(t.equal(4),()=>{e.assign(At(s.x.negate(),s.z).div(je(s.y)))}).else(()=>{e.assign(At(s.x,s.y).div(je(s.z)))}),te(.5,e.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),z1=Z(([s])=>{const t=b(0).toVar();return Zt(s.greaterThanEqual(uc),()=>{t.assign(Dp.sub(s).mul(mu.sub(lh)).div(Dp.sub(uc)).add(lh))}).elseif(s.greaterThanEqual(hc),()=>{t.assign(uc.sub(s).mul(gu.sub(mu)).div(uc.sub(hc)).add(mu))}).elseif(s.greaterThanEqual(dc),()=>{t.assign(hc.sub(s).mul(_u.sub(gu)).div(hc.sub(dc)).add(gu))}).elseif(s.greaterThanEqual(Op),()=>{t.assign(dc.sub(s).mul(O1.sub(_u)).div(dc.sub(Op)).add(_u))}).else(()=>{t.assign(b(-2).mul(ll(te(1.16,s))))}),t}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});Z(([s,t])=>{const e=s.toVar();e.assign(te(2,e).sub(1));const n=O(e,1).toVar();return Zt(t.equal(0),()=>{n.assign(n.zyx)}).elseif(t.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(t.equal(2),()=>{n.x.mulAssign(-1)}).elseif(t.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(t.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(t.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const B1=Z(([s,t,e,n,i,r])=>{const o=b(e),a=O(t),c=Po(z1(o),lh,r),l=ul(c),u=Vo(c),h=O(uh(s,a,u,n,i,r)).toVar();return Zt(l.notEqual(0),()=>{const d=O(uh(s,a,u.add(1),n,i,r)).toVar();h.assign(hn(h,d,l))}),h}),uh=Z(([s,t,e,n,i,r])=>{const o=b(e).toVar(),a=O(t),c=b(F1(a)).toVar(),l=b(si(Up.sub(o),0)).toVar();o.assign(si(o,Up));const u=b(sh(o)).toVar(),h=At(V1(a,c).mul(u.sub(2)).add(1)).toVar();return Zt(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(te(3,U1))),h.y.addAssign(te(4,sh(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(i),s.uv(h).grad(At(),At())}),vu=Z(({envMap:s,mipInt:t,outputDirection:e,theta:n,axis:i,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=bs(n),l=e.mul(c).add(i.cross(e).mul(us(n))).add(i.mul(i.dot(e).mul(c.oneMinus())));return uh(s,l,t,r,o,a)});Z(({n:s,latitudinal:t,poleAxis:e,outputDirection:n,weights:i,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=O(Qn(t,e,__(e,n))).toVar();Zt(d_(d.equals(O(0))),()=>{d.assign(O(n.z,0,n.x.negate()))}),d.assign(Ln(d));const f=O().toVar();return f.addAssign(i.element(C(0)).mul(vu({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Te({start:C(1),end:s},({i:_})=>{Zt(_.greaterThanEqual(r),()=>{A1()});const g=b(o.mul(b(_))).toVar();f.addAssign(i.element(_).mul(vu({theta:g.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),f.addAssign(i.element(_).mul(vu({theta:g,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Tt(f,1)});let Hc=null;const Fp=new WeakMap;function k1(s){const t=Math.log2(s)-2,e=1/s;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:e,maxMip:t}}function H1(s){let t=Fp.get(s);if((t!==void 0?t.pmremVersion:-1)!==s.pmremVersion){if(s.isCubeTexture){if(s.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");t=Hc.fromCubemap(s,t)}else{if(s.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");t=Hc.fromEquirectangular(s,t)}t.pmremVersion=s.pmremVersion,Fp.set(s,t)}return t.texture}class $_ extends ye{constructor(t,e=null,n=null){super("vec3"),this._value=t,this._pmrem=null,this.uvNode=e,this.levelNode=n,this._generator=null,this._texture=ei(null),this._width=xe(0),this._height=xe(0),this._maxMip=xe(0),this.updateBeforeType=ve.RENDER}set value(t){this._value=t,this._pmrem=null}get value(){return this._value}updateFromTexture(t){const e=k1(t.image.height);this._texture.value=t,this._width.value=e.texelWidth,this._height.value=e.texelHeight,this._maxMip.value=e.maxMip}updateBefore(){let t=this._pmrem;const e=t?t.pmremVersion:-1,n=this._value;e!==n.pmremVersion&&(n.isPMREMTexture===!0?t=n:t=H1(n),this._pmrem=t,this.updateFromTexture(t))}setup(t){Hc===null&&(Hc=t.createPMREMGenerator()),this.updateBefore(t);let e=this.uvNode;e===null&&t.context.getUV&&(e=t.context.getUV(this));const n=this.value;t.renderer.coordinateSystem===Ri&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(e=O(e.x.negate(),e.yz));let i=this.levelNode;return i===null&&t.context.getTextureLevel&&(i=t.context.getTextureLevel(this)),B1(this._texture,e,i,this._width,this._height,this._maxMip)}}const G1=k($_);Q("PMREMNode",$_);const Vp=new WeakMap;class j_ extends Da{constructor(t=null){super(),this.envNode=t}setup(t){let e=this.envNode;if(e.isTextureNode){let d=Vp.get(e.value);d===void 0&&(d=G1(e.value),Vp.set(e.value,d)),e=d}const{material:n}=t,r=n.envMap?Ii("envMapIntensity","float",t.material):Ii("environmentIntensity","float",t.scene),a=n.useAnisotropy===!0||n.anisotropy>0?D1:ze,c=fs(e,zp(Os,a)).mul(r),l=fs(e,W1(C_)).mul(Math.PI).mul(r),u=Dc(c);t.context.radiance.addAssign(u),t.context.iblIrradiance.addAssign(l);const h=t.context.lightingModel.clearcoatRadiance;if(h){const d=fs(e,zp(Uc,so)).mul(r),f=Dc(d);h.addAssign(f)}}}const zp=(s,t)=>{let e=null;return{getUV:()=>(e===null&&(e=De.negate().reflect(t),e=s.mul(s).mix(e,t).normalize(),e=e.transformDirection(xs)),e),getTextureLevel:()=>s}},W1=s=>({getUV:()=>s,getTextureLevel:()=>b(1)});Q("EnvironmentNode",j_);class Z_ extends Da{constructor(t){super(),this.node=t}setup(t){t.context.irradiance.addAssign(this.node)}}Q("IrradianceNode",Z_);let xu,yu;class ae extends bt{constructor(t){super(),this.scope=t,this.isViewportNode=!0}getNodeType(){return this.scope===ae.VIEWPORT?"vec4":this.scope===ae.COORDINATE?"vec3":"vec2"}getUpdateType(){let t=ve.NONE;return(this.scope===ae.RESOLUTION||this.scope===ae.VIEWPORT)&&(t=ve.FRAME),this.updateType=t,t}update({renderer:t}){this.scope===ae.VIEWPORT?t.getViewport(yu):t.getDrawingBufferSize(xu)}setup(){const t=this.scope;let e=null;if(t===ae.RESOLUTION)e=xe(xu||(xu=new Ct));else if(t===ae.VIEWPORT)e=xe(yu||(yu=new oe));else{e=X1.div(hh);let n=e.x,i=e.y;/bottom/i.test(t)&&(i=i.oneMinus()),/right/i.test(t)&&(n=n.oneMinus()),e=At(n,i)}return e}generate(t){if(this.scope===ae.COORDINATE){let e=t.getFragCoord();if(t.isFlipY()){const n=t.getNodeProperties(hh).outputNode.build(t);e=`${t.getType("vec3")}( ${e}.x, ${n}.y - ${e}.y, ${e}.z )`}return e}return super.generate(t)}}ae.COORDINATE="coordinate";ae.RESOLUTION="resolution";ae.VIEWPORT="viewport";ae.TOP_LEFT="topLeft";ae.BOTTOM_LEFT="bottomLeft";ae.TOP_RIGHT="topRight";ae.BOTTOM_RIGHT="bottomRight";const X1=et(ae,ae.COORDINATE),hh=et(ae,ae.RESOLUTION),_o=et(ae,ae.VIEWPORT),Ea=et(ae,ae.TOP_LEFT);et(ae,ae.BOTTOM_LEFT);et(ae,ae.TOP_RIGHT);et(ae,ae.BOTTOM_RIGHT);Q("ViewportNode",ae);const ea=new Ct;class Oa extends Bo{constructor(t=Ea,e=null,n=null){n===null&&(n=new Om,n.minFilter=Cs),super(n,t,e),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=ve.FRAME}updateBefore(t){const e=t.renderer;e.getDrawingBufferSize(ea);const n=this.value;(n.image.width!==ea.width||n.image.height!==ea.height)&&(n.image.width=ea.width,n.image.height=ea.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,e.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){const t=new this.constructor(this.uvNode,this.levelNode,this.value);return t.generateMipmaps=this.generateMipmaps,t}}const q1=k(Oa),K_=k(Oa,null,null,{generateMipmaps:!0});U("viewportTexture",q1);U("viewportMipTexture",K_);Q("ViewportTextureNode",Oa);let Mu=null;class J_ extends Oa{constructor(t=Ea,e=null){Mu===null&&(Mu=new Ca),super(t,e,Mu)}}const Q_=k(J_);U("viewportDepthTexture",Q_);Q("ViewportDepthTextureNode",J_);class ln extends bt{constructor(t,e=null){super("float"),this.scope=t,this.valueNode=e,this.isViewportDepthNode=!0}generate(t){const{scope:e}=this;return e===ln.DEPTH_PIXEL?t.getFragDepth():super.generate(t)}setup(){const{scope:t}=this;let e=null;if(t===ln.DEPTH)e=dh(Jn.z,hu,du);else if(t===ln.DEPTH_TEXTURE){const n=this.valueNode||Q_(),i=t0(n,hu,du);e=dh(i,hu,du)}else t===ln.DEPTH_PIXEL&&this.valueNode!==null&&(e=e0().assign(this.valueNode));return e}}const dh=(s,t,e)=>s.add(t).div(t.sub(e)),t0=(s,t,e)=>t.mul(e).div(e.sub(t).mul(s).sub(e));ln.DEPTH="depth";ln.DEPTH_TEXTURE="depthTexture";ln.DEPTH_PIXEL="depthPixel";const e0=k(ln,ln.DEPTH_PIXEL);et(ln,ln.DEPTH);k(ln,ln.DEPTH_TEXTURE);const n0=et(ln,ln.DEPTH_PIXEL);n0.assign=s=>e0(s);Q("ViewportDepthNode",ln);class qs extends bt{constructor(t=qs.DEFAULT){super(),this.scope=t}setup(t){super.setup(t);const e=t.clippingContext,{localClipIntersection:n,localClippingCount:i,globalClippingCount:r}=e,o=r+i,a=n?o-i:o;return this.scope===qs.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(e.planes,o,a):this.setupDefault(e.planes,o,a)}setupAlphaToCoverage(t,e,n){return Z(()=>{const i=rh(t),r=cn("float","distanceToPlane"),o=cn("float","distanceToGradient"),a=cn("float","clipOpacity");a.assign(1);let c;if(Te(n,({i:l})=>{c=i.element(l),r.assign(Jn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(_s(o.negate(),o,r)),a.equal(0).discard()}),n<e){const l=cn("float","unionclipOpacity");l.assign(1),Te({start:n,end:e},({i:u})=>{c=i.element(u),r.assign(Jn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(_s(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Ie.a.mulAssign(a),Ie.a.equal(0).discard()})()}setupDefault(t,e,n){return Z(()=>{const i=rh(t);let r;if(Te(n,({i:o})=>{r=i.element(o),Jn.dot(r.xyz).greaterThan(r.w).discard()}),n<e){const o=cn("bool","clipped");o.assign(!0),Te({start:n,end:e},({i:a})=>{r=i.element(a),o.assign(Jn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}qs.ALPHA_TO_COVERAGE="alphaToCoverage";qs.DEFAULT="default";const Y1=()=>ht(new qs),$1=()=>ht(new qs(qs.ALPHA_TO_COVERAGE));class i0 extends bt{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(t){const{renderer:e,material:n}=t;return e.coordinateSystem===Ri&&n.side===Rn?"false":t.getFrontFacing()}}const j1=et(i0),Gc=b(j1).mul(2).sub(1);Q("FrontFacingNode",i0);const fh=new Map;class oi extends ps{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Bg(this)}build(t){this.setup(t)}setup(t){t.addStack(),t.stack.outputNode=this.vertexNode||this.setupPosition(t),t.addFlow("vertex",t.removeStack()),t.addStack();let e;const n=this.setupClipping(t);if(this.depthWrite===!0&&this.setupDepth(t),this.fragmentNode===null){this.normals===!0&&this.setupNormal(t),this.setupDiffuseColor(t),this.setupVariants(t);const i=this.setupLighting(t);n!==null&&t.stack.add(n);const r=Tt(i,Ie.a).max(0);e=this.setupOutput(t,r),Vw.assign(e),this.outputNode!==null&&(e=this.outputNode)}else{let i=this.fragmentNode;i.isOutputStructNode!==!0&&(i=Tt(i)),e=this.setupOutput(t,i)}t.stack.outputNode=e,t.addFlow("fragment",t.removeStack())}setupClipping(t){if(t.clippingContext===null)return null;const{globalClippingCount:e,localClippingCount:n}=t.clippingContext;let i=null;return(e||n)&&(this.alphaToCoverage?i=$1():t.stack.add(Y1())),i}setupDepth(t){const{renderer:e}=t;let n=this.depthNode;n===null&&e.logarithmicDepthBuffer===!0&&(n=Cp().w.add(1).log2().mul(qb).mul(.5)),n!==null&&n0.assign(n).append()}setupPosition(t){const{object:e}=t,n=e.geometry;t.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&w1(e).append(),e.isSkinnedMesh===!0&&E1(e).append(),e.isBatchedMesh&&T1(e).append(),e.instanceMatrix&&e.instanceMatrix.isInstancedBufferAttribute===!0&&t.isAvailable("instance")===!0&&M1(e).append(),this.positionNode!==null&&En.assign(this.positionNode);const i=Cp();return t.context.vertex=t.removeStack(),t.context.mvp=i,i}setupDiffuseColor({object:t,geometry:e}){let n=this.colorNode?Tt(this.colorNode):Ta;this.vertexColors===!0&&e.hasAttribute("color")&&(n=Tt(n.xyz.mul(xn("color","vec3")),n.a)),t.instanceColor&&(n=Fi("vec3","vInstanceColor").mul(n)),Ie.assign(n);const i=this.opacityNode?b(this.opacityNode):L_;if(Ie.a.assign(Ie.a.mul(i)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?b(this.alphaTestNode):$b;Ie.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const t=Jn.dFdx().cross(Jn.dFdy()).normalize();ze.assign(t.mul(Gc))}else{const t=this.normalNode?O(this.normalNode):n1;ze.assign(t.mul(Gc))}}getEnvNode(t){let e=null;return this.envNode?e=this.envNode:this.envMap?e=this.envMap.isCubeTexture?W_(this.envMap):ei(this.envMap):t.environmentNode&&(e=t.environmentNode),e}setupLights(t){const e=this.getEnvNode(t),n=[];if(e&&n.push(new j_(e)),t.material.lightMap&&n.push(new Z_(N_("lightMap","texture"))),this.aoNode!==null||t.material.aoMap){const r=this.aoNode!==null?this.aoNode:ei(t.material.aoMap);n.push(new X_(r))}let i=this.lightsNode||t.lightsNode;return n.length>0&&(i=L1([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(t){const{material:e}=t,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(t):null;let c=Ie.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(t);c=Y_(a,l,n,i)}else n!==null&&(c=O(i!==null?hn(c,n,i):n));return(r&&r.isNode===!0||e.emissive&&e.emissive.isColor===!0)&&(c=c.add(O(r||Zb))),c}setupOutput(t,e){const n=t.fogNode;return n&&(e=Tt(n.mix(e.rgb,n.colorNode),e.a)),e}setDefaultValues(t){for(const n in t){const i=t[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,t.defines);const e=Object.getOwnPropertyDescriptors(t.constructor.prototype);for(const n in e)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&e[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,e[n])}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{},nodes:{}});const n=ri.prototype.toJSON.call(this,t),i=Ic(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(t).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(e){const o=r(t.textures),a=r(t.images),c=r(t.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(t){return this.lightsNode=t.lightsNode,this.envNode=t.envNode,this.colorNode=t.colorNode,this.normalNode=t.normalNode,this.opacityNode=t.opacityNode,this.backdropNode=t.backdropNode,this.backdropAlphaNode=t.backdropAlphaNode,this.alphaTestNode=t.alphaTestNode,this.positionNode=t.positionNode,this.depthNode=t.depthNode,this.shadowNode=t.shadowNode,this.shadowPositionNode=t.shadowPositionNode,this.outputNode=t.outputNode,this.fragmentNode=t.fragmentNode,this.vertexNode=t.vertexNode,super.copy(t)}static fromMaterial(t){if(t.isNodeMaterial===!0)return t;const e=t.type.replace("Material","NodeMaterial"),n=Z1(e);if(n===void 0)throw new Error(`NodeMaterial: Material "${t.type}" is not compatible.`);for(const i in t)n[i]=t[i];return n}}function Pn(s,t){if(typeof t!="function"||!s)throw new Error(`Node material ${s} is not a class`);if(fh.has(s)){console.warn(`Redefinition of node material ${s}`);return}fh.set(s,t),t.type=s}function Z1(s){const t=fh.get(s);if(t!==void 0)return new t}Pn("NodeMaterial",oi);class s0 extends bt{constructor(t=null){super(),this.nodes=[],this.outputNode=null,this.parent=t,this._currentCond=null,this.isStackNode=!0}getNodeType(t){return this.outputNode?this.outputNode.getNodeType(t):"void"}add(t){return this.nodes.push(t),this}if(t,e){const n=new ua(e);return this._currentCond=Qn(t,n),this.add(this._currentCond)}elseif(t,e){const n=new ua(e),i=Qn(t,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(t){return this._currentCond.elseNode=new ua(t),this}build(t,...e){const n=uw();Ep(this);for(const i of this.nodes)i.build(t,"void");return Ep(n),this.outputNode?this.outputNode.build(t,...e):super.build(t,...e)}}k(s0);Q("StackNode",s0);class r0 extends ye{constructor(t=x1){super("vec2"),this.dirNode=t}setup(){const t=this.dirNode,e=t.z.atan2(t.x).mul(1/(Math.PI*2)).add(.5),n=t.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return At(e,n)}}k(r0);Q("EquirectUVNode",r0);class o0 extends bt{constructor(t){super(),this.types=t,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Q("StructTypeNode",o0);class a0 extends bt{constructor(...t){super(),this.members=t,this.isOutputStructNode=!0}setup(t){super.setup(t);const e=this.members,n=[];for(let i=0;i<e.length;i++)n.push(e[i].getNodeType(t));this.nodeType=t.getStructTypeFromNode(new o0(n)).name}generate(t,e){const n=t.getVarFromNode(this);n.isOutputStructVar=!0;const i=t.getPropertyName(n),r=this.members,o=i!==""?i+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(t,e);t.addLineFlowCode(`${o}m${a} = ${c}`)}return i}}k(a0);Q("OutputStructNode",a0);class c0 extends bt{constructor(t){super(),this.seedNode=t}setup(){const t=this.seedNode.uint().mul(747796405).add(2891336453),e=t.shiftRight(t.shiftRight(28).add(4)).bitXor(t).mul(277803737);return e.shiftRight(22).bitXor(e).float().mul(1/2**32)}}const K1=k(c0);U("hash",K1);Q("HashNode",c0);const ph=(s,t)=>$i(te(4,s.mul(We(1,s))),t),J1=(s,t)=>s.lessThan(.5)?ph(s.mul(2),t).div(2):We(1,ph(te(We(1,s),2),t).div(2)),Q1=(s,t,e)=>$i(Ws($i(s,t),ii($i(s,t),$i(We(1,s),e))),1/t),tR=(s,t)=>us(Ap.mul(t.mul(s).sub(1))).div(Ap.mul(t.mul(s).sub(1)));U("parabola",ph);U("gain",J1);U("pcurve",Q1);U("sinc",tR);const ki=Z(([s])=>s.fract().sub(.5).abs()),l0=Z(([s])=>O(ki(s.z.add(ki(s.y.mul(1)))),ki(s.z.add(ki(s.x.mul(1)))),ki(s.y.add(ki(s.x.mul(1)))))),eR=Z(([s,t,e])=>{const n=O(s).toVar(),i=b(1.4).toVar(),r=b(0).toVar(),o=O(n).toVar();return Te({start:b(0),end:b(3),type:"float",condition:"<="},()=>{const a=O(l0(o.mul(2))).toVar();n.addAssign(a.add(e.mul(b(.1).mul(t)))),o.mulAssign(1.8),i.mulAssign(1.5),n.mulAssign(1.2);const c=b(ki(n.z.add(ki(n.x.add(ki(n.y)))))).toVar();r.addAssign(c.div(i)),o.addAssign(.14)}),r});ki.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});l0.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});eR.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Su;class u0 extends fd{constructor(t){Su=Su||hl("discard"),super(t,Su)}}const nR=k(u0),iR=s=>nR(s).append();U("discard",iR);Q("DiscardNode",u0);class h0 extends bt{constructor(t=[],...e){super(),this.functionNodes=t,this.parametersNodes=e,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(t){const e=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(e.length===l.length){let u=0;for(let h=0;h<e.length;h++){const d=e[h],f=l[h];d.getNodeType(t)===f.type?u++:u=0}u>r&&(i=o,r=u)}}this._candidateFnCall=n=i(...e)}return n}}const sR=k(h0),Mi=s=>(...t)=>sR(s,...t);Q("FunctionOverloadingNode",h0);class d0 extends ye{constructor(){super("vec2")}setup(){const t=O(De.z,0,De.x.negate()).normalize(),e=De.cross(t);return At(t.dot(ze),e.dot(ze)).mul(.495).add(.5)}}et(d0);Q("MatcapUVNode",d0);class Un extends Pr{constructor(t=Un.LOCAL,e=1,n=0){super(n),this.scope=t,this.scale=e,this.updateType=ve.FRAME}update(t){const e=this.scope,n=this.scale;e===Un.LOCAL?this.value+=t.deltaTime*n:e===Un.DELTA?this.value=t.deltaTime*n:e===Un.FRAME?this.value=t.frameId:this.value=t.time*n}serialize(t){super.serialize(t),t.scope=this.scope,t.scale=this.scale}deserialize(t){super.deserialize(t),this.scope=t.scope,this.scale=t.scale}}Un.LOCAL="local";Un.GLOBAL="global";Un.DELTA="delta";Un.FRAME="frame";const rR=(s,t=0)=>ht(new Un(Un.LOCAL,s,t));et(Un,Un.FRAME).uint();Q("TimerNode",Un);class Qe extends bt{constructor(t=Qe.SINE,e=rR()){super(),this.method=t,this.timeNode=e}getNodeType(t){return this.timeNode.getNodeType(t)}setup(){const t=this.method,e=ht(this.timeNode);let n=null;return t===Qe.SINE?n=e.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):t===Qe.SQUARE?n=e.fract().round():t===Qe.TRIANGLE?n=e.add(.5).fract().mul(2).sub(1).abs():t===Qe.SAWTOOTH&&(n=e.fract()),n}serialize(t){super.serialize(t),t.method=this.method}deserialize(t){super.deserialize(t),this.method=t.method}}Qe.SINE="sine";Qe.SQUARE="square";Qe.TRIANGLE="triangle";Qe.SAWTOOTH="sawtooth";k(Qe,Qe.SINE);k(Qe,Qe.SQUARE);k(Qe,Qe.TRIANGLE);k(Qe,Qe.SAWTOOTH);Q("OscNode",Qe);class Ji extends ye{constructor(t,e){super(),this.scope=t,this.node=e}getNodeType(t){return this.node.getNodeType(t)}setup(){const{scope:t,node:e}=this;let n=null;return t===Ji.DIRECTION_TO_COLOR?n=e.mul(.5).add(.5):t===Ji.COLOR_TO_DIRECTION&&(n=e.mul(2).sub(1)),n}}Ji.DIRECTION_TO_COLOR="directionToColor";Ji.COLOR_TO_DIRECTION="colorToDirection";const f0=k(Ji,Ji.DIRECTION_TO_COLOR),oR=k(Ji,Ji.COLOR_TO_DIRECTION);U("directionToColor",f0);U("colorToDirection",oR);Q("PackingNode",Ji);class pd extends bt{constructor(t,e,n,i=b(0),r=b(1)){super(),this.node=t,this.inLowNode=e,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:t,inLowNode:e,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=t.sub(e).div(n.sub(e));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const aR=k(pd,null,null,{doClamp:!1}),cR=k(pd);U("remap",aR);U("remapClamp",cR);Q("RemapNode",pd);class p0 extends ye{constructor(t,e,n=At(.5)){super("vec2"),this.uvNode=t,this.rotationNode=e,this.centerNode=n}setup(){const{uvNode:t,rotationNode:e,centerNode:n}=this;return t.sub(n).rotate(e).add(n)}}const lR=k(p0);U("rotateUV",lR);Q("RotateUVNode",p0);class m0 extends ye{constructor(t,e){super(),this.positionNode=t,this.rotationNode=e}getNodeType(t){return this.positionNode.getNodeType(t)}setup(t){const{rotationNode:e,positionNode:n}=this;if(this.getNodeType(t)==="vec2"){const r=e.cos(),o=e.sin();return id(r,o,o.negate(),r).mul(n)}else{const r=e,o=po(Tt(1,0,0,0),Tt(0,bs(r.x),us(r.x).negate(),0),Tt(0,us(r.x),bs(r.x),0),Tt(0,0,0,1)),a=po(Tt(bs(r.y),0,us(r.y),0),Tt(0,1,0,0),Tt(us(r.y).negate(),0,bs(r.y),0),Tt(0,0,0,1)),c=po(Tt(bs(r.z),us(r.z).negate(),0,0),Tt(us(r.z),bs(r.z),0,0),Tt(0,0,1,0),Tt(0,0,0,1));return o.mul(a).mul(c).mul(Tt(n,1)).xyz}}}const uR=k(m0);U("rotate",uR);Q("RotateNode",m0);class g0 extends bt{constructor(t,e=Qi(),n=b(0)){super("vec2"),this.countNode=t,this.uvNode=e,this.frameNode=n}setup(){const{frameNode:t,uvNode:e,countNode:n}=this,{width:i,height:r}=n,o=t.mod(i.mul(r)).floor(),a=o.mod(i),c=r.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=At(a,c);return e.add(u).mul(l)}}k(g0);Q("SpriteSheetUVNode",g0);class _0 extends Fo{constructor(t,e){super(t,e),this.isStorageArrayElementNode=!0}set storageBufferNode(t){this.node=t}get storageBufferNode(){return this.node}setup(t){return t.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&t.setupPBO(this.node),super.setup(t)}generate(t,e){let n;const i=t.context.assign;if(t.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&i!==!0?n=t.generatePBO(this):n=r.build(t)}else n=super.generate(t);if(i!==!0){const r=this.getNodeType(t);n=t.format(n,r,e)}return n}}const v0=k(_0);U("storageElement",v0);Q("StorageArrayElementNode",_0);class x0 extends bt{constructor(t,e=null,n=null,i=b(1),r=En,o=Di){super("vec4"),this.textureXNode=t,this.textureYNode=e,this.textureZNode=n,this.scaleNode=i,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:t,textureYNode:e,textureZNode:n,scaleNode:i,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(O(1)));const c=r.yz.mul(i),l=r.zx.mul(i),u=r.xy.mul(i),h=t.value,d=e!==null?e.value:h,f=n!==null?n.value:h,_=ei(h,c).mul(a.x),g=ei(d,l).mul(a.y),p=ei(f,u).mul(a.z);return ii(_,g,p)}}const hR=k(x0),dR=(...s)=>hR(...s);U("triplanarTexture",dR);Q("TriplanarTexturesNode",x0);new ws;new F;new F;new F;new we;new F(0,0,-1);new oe;new F;new F;new oe;new Ct;new ks;At(Ea.x.oneMinus(),Ea.y);class fR extends cl{constructor(t=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=t}getAttributeName(){const t=this.index;return"color"+(t>0?t:"")}generate(t){const e=this.getAttributeName(t),n=t.hasGeometryAttribute(e);let i;return n===!0?i=super.generate(t):i=t.generateConst(this.nodeType,new oe(1,1,1,1)),i}serialize(t){super.serialize(t),t.index=this.index}deserialize(t){super.deserialize(t),this.index=t.index}}Q("VertexColorNode",fR);class y0 extends ko{constructor(t,e,n=null){super(t,e,n),this.renderer=n}updateReference(t){return this.reference=this.renderer!==null?this.renderer:t.renderer,this.reference}}const pR=(s,t,e)=>ht(new y0(s,t,e));Q("RendererReferenceNode",y0);const gl=1/6,M0=s=>te(gl,te(s,te(s,s.negate().add(3)).sub(3)).add(1)),mh=s=>te(gl,te(s,te(s,te(3,s).sub(6))).add(4)),S0=s=>te(gl,te(s,te(s,te(-3,s).add(3)).add(3)).add(1)),gh=s=>te(gl,$i(s,3)),Bp=s=>M0(s).add(mh(s)),kp=s=>S0(s).add(gh(s)),Hp=s=>ii(-1,mh(s).div(M0(s).add(mh(s)))),Gp=s=>ii(1,gh(s).div(S0(s).add(gh(s)))),Wp=(s,t,e)=>{const n=s.uvNode,i=te(n,t.zw).add(.5),r=Vo(i),o=ul(i),a=Bp(o.x),c=kp(o.x),l=Hp(o.x),u=Gp(o.x),h=Hp(o.y),d=Gp(o.y),f=At(r.x.add(l),r.y.add(h)).sub(.5).mul(t.xy),_=At(r.x.add(u),r.y.add(h)).sub(.5).mul(t.xy),g=At(r.x.add(l),r.y.add(d)).sub(.5).mul(t.xy),p=At(r.x.add(u),r.y.add(d)).sub(.5).mul(t.xy),m=Bp(o.y).mul(ii(a.mul(s.uv(f).level(e)),c.mul(s.uv(_).level(e)))),y=kp(o.y).mul(ii(a.mul(s.uv(g).level(e)),c.mul(s.uv(p).level(e))));return m.add(y)},mR=(s,t)=>{const e=At(s.size(C(t))),n=At(s.size(C(t.add(1)))),i=Ws(1,e),r=Ws(1,n),o=Wp(s,Tt(i,e),Vo(t)),a=Wp(s,Tt(r,n),m_(t));return ul(t).mix(o,a)};class T0 extends ye{constructor(t,e=b(3)){super("vec4"),this.textureNode=t,this.blurNode=e}setup(){return mR(this.textureNode,this.blurNode)}}const gR=k(T0);U("bicubic",gR);Q("TextureBicubicNode",T0);class E0 extends bt{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}et(E0);Q("PointUVNode",E0);class Ci extends bt{constructor(t=Ci.BACKGROUND_BLURRINESS,e=null){super(),this.scope=t,this.scene=e}setup(t){const e=this.scope,n=this.scene!==null?this.scene:t.scene;let i;return e===Ci.BACKGROUND_BLURRINESS?i=Ii("backgroundBlurriness","float",n):e===Ci.BACKGROUND_INTENSITY?i=Ii("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",e),i}}Ci.BACKGROUND_BLURRINESS="backgroundBlurriness";Ci.BACKGROUND_INTENSITY="backgroundIntensity";et(Ci,Ci.BACKGROUND_BLURRINESS);et(Ci,Ci.BACKGROUND_INTENSITY);Q("SceneNode",Ci);class _R extends dl{constructor(t,e,n=0){super(t,e,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,t.isStorageBufferAttribute!==!0&&t.isStorageInstancedBufferAttribute!==!0&&(t.isInstancedBufferAttribute?t.isStorageInstancedBufferAttribute=!0:t.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(t){return v0(this,t)}setBufferObject(t){return this.bufferObject=t,this}generate(t){if(t.isAvailable("storageBuffer"))return super.generate(t);const e=this.getNodeType(t);this._attribute===null&&(this._attribute=fl(this.value),this._varying=Ve(this._attribute));const n=this._varying.build(t,e);return t.registerTransform(n,this._attribute),n}}Q("StorageBufferNode",_R);class A0 extends Bo{constructor(t,e,n=null){super(t,e),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(t){super.setup(t);const e=t.getNodeProperties(this);e.storeNode=this.storeNode}generate(t,e){let n;return this.storeNode!==null?n=this.generateStore(t):n=super.generate(t,e),n}generateStore(t){const e=t.getNodeProperties(this),{uvNode:n,storeNode:i}=e,r=super.generate(t,"property"),o=n.build(t,"uvec2"),a=i.build(t,"vec4"),c=t.generateTextureStore(t,r,o,a);t.addLineFlowCode(c)}}k(A0);Q("TextureStoreNode",A0);class vR extends ko{constructor(t,e,n=null){super(t,e,n),this.userData=n}update(t){this.reference=this.userData!==null?this.userData:t.object.userData,super.update(t)}}Q("UserDataNode",vR);const xR=Z(({base:s,blend:t})=>{const e=n=>t[n].lessThan(h_).cond(t[n],s[n].oneMinus().div(t[n]).oneMinus().max(0));return O(e("x"),e("y"),e("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),yR=Z(({base:s,blend:t})=>{const e=n=>t[n].equal(1).cond(t[n],s[n].div(t[n].oneMinus()).max(0));return O(e("x"),e("y"),e("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),MR=Z(({base:s,blend:t})=>{const e=n=>s[n].oneMinus().mul(t[n].oneMinus()).oneMinus();return O(e("x"),e("y"),e("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),SR=Z(({base:s,blend:t})=>{const e=n=>s[n].lessThan(.5).cond(s[n].mul(t[n],2),s[n].oneMinus().mul(t[n].oneMinus()).oneMinus());return O(e("x"),e("y"),e("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class on extends ye{constructor(t,e,n){super(),this.blendMode=t,this.baseNode=e,this.blendNode=n}setup(){const{blendMode:t,baseNode:e,blendNode:n}=this,i={base:e,blend:n};let r=null;return t===on.BURN?r=xR(i):t===on.DODGE?r=yR(i):t===on.SCREEN?r=MR(i):t===on.OVERLAY&&(r=SR(i)),r}}on.BURN="burn";on.DODGE="dodge";on.SCREEN="screen";on.OVERLAY="overlay";const TR=k(on,on.BURN),ER=k(on,on.DODGE),AR=k(on,on.OVERLAY),NR=k(on,on.SCREEN);U("burn",TR);U("dodge",ER);U("overlay",AR);U("screen",NR);Q("BlendModeNode",on);const wR=Z(({textureNode:s,bumpScale:t})=>{const e=i=>s.cache().context({getUV:r=>i(r.uvNode||Qi()),forceUVContext:!0}),n=b(e(i=>i));return At(b(e(i=>i.add(i.dFdx()))).sub(n),b(e(i=>i.add(i.dFdy()))).sub(n)).mul(t)}),bR=Z(s=>{const{surf_pos:t,surf_norm:e,dHdxy:n}=s,i=t.dFdx().normalize(),r=t.dFdy().normalize(),o=e,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(Gc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(e).sub(u).normalize()});class N0 extends ye{constructor(t,e=null){super("vec3"),this.textureNode=t,this.scaleNode=e}setup(){const t=this.scaleNode!==null?this.scaleNode:1,e=wR({textureNode:this.textureNode,bumpScale:t});return bR({surf_pos:Jn,surf_norm:Xs,dHdxy:e})}}const RR=k(N0);U("bumpMap",RR);Q("BumpMapNode",N0);const CR=Z(({color:s,adjustment:t})=>t.mix(w0(s.rgb),s.rgb)),LR=Z(({color:s,adjustment:t})=>{const e=ii(s.r,s.g,s.b).div(3),n=s.r.max(s.g.max(s.b)),i=n.sub(e).mul(t).mul(-3);return hn(s.rgb,n,i)}),PR=Z(({color:s,adjustment:t})=>{const e=O(.57735,.57735,.57735),n=t.cos();return O(s.rgb.mul(n).add(e.cross(s.rgb).mul(t.sin()).add(e.mul(zo(e,s.rgb).mul(n.oneMinus())))))});class Hn extends ye{constructor(t,e,n=b(1)){super("vec3"),this.method=t,this.colorNode=e,this.adjustmentNode=n}setup(){const{method:t,colorNode:e,adjustmentNode:n}=this,i={color:e,adjustment:n};let r=null;return t===Hn.SATURATION?r=CR(i):t===Hn.VIBRANCE?r=LR(i):t===Hn.HUE?r=PR(i):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Hn.SATURATION="saturation";Hn.VIBRANCE="vibrance";Hn.HUE="hue";const IR=k(Hn,Hn.SATURATION),DR=k(Hn,Hn.VIBRANCE),OR=k(Hn,Hn.HUE),UR=O(.2125,.7154,.0721),w0=(s,t=UR)=>zo(s,t),b0=(s,t)=>hn(O(0),s,w0(s).sub(t).max(0));U("saturation",IR);U("vibrance",DR);U("hue",OR);U("threshold",b0);Q("ColorAdjustmentNode",Hn);const FR=Z(s=>{const{eye_pos:t,surf_norm:e,mapN:n,uv:i}=s,r=t.dFdx(),o=t.dFdy(),a=i.dFdx(),c=i.dFdy(),l=e,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(f.dot(f)),g=Gc.mul(_.inverseSqrt());return ii(d.mul(n.x,g),f.mul(n.y,g),l.mul(n.z)).normalize()});class R0 extends ye{constructor(t,e=null){super("vec3"),this.node=t,this.scaleNode=e,this.normalMapType=Er}setup(t){const{normalMapType:e,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=O(i.xy.mul(n),i.z));let r=null;return e===dm?r=b_.mul(i).normalize():e===Er&&(t.hasGeometryAttribute("tangent")===!0?r=ro.mul(i).normalize():r=FR({eye_pos:Jn,surf_norm:Xs,mapN:i,uv:Qi()})),r}}const VR=k(R0);U("normalMap",VR);Q("NormalMapNode",R0);class C0 extends ye{constructor(t,e){super(),this.sourceNode=t,this.stepsNode=e}setup(){const{sourceNode:t,stepsNode:e}=this;return t.mul(e).floor().div(e)}}const zR=k(C0);U("posterize",zR);Q("PosterizeNode",C0);const BR=Z(({color:s,exposure:t})=>s.mul(t).clamp()),kR=Z(({color:s,exposure:t})=>(s=s.mul(t),s.div(s.add(1)).clamp())),HR=Z(({color:s,exposure:t})=>{s=s.mul(t),s=s.sub(.004).max(0);const e=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return e.div(n).pow(2.2)}),GR=Z(({color:s})=>{const t=s.mul(s.add(.0245786)).sub(90537e-9),e=s.mul(s.add(.432951).mul(.983729)).add(.238081);return t.div(e)}),WR=Z(({color:s,exposure:t})=>{const e=Pi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=Pi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return s=s.mul(t).div(.6),s=e.mul(s),s=GR({color:s}),s=n.mul(s),s.clamp()}),XR=Pi(O(1.6605,-.1246,-.0182),O(-.5876,1.1329,-.1006),O(-.0728,-.0083,1.1187)),qR=Pi(O(.6274,.0691,.0164),O(.3293,.9195,.088),O(.0433,.0113,.8956)),YR=Z(([s])=>{const t=O(s).toVar(),e=O(t.mul(t)).toVar(),n=O(e.mul(e)).toVar();return b(15.5).mul(n.mul(e)).sub(te(40.14,n.mul(t))).add(te(31.96,n).sub(te(6.868,e.mul(t))).add(te(.4298,e).add(te(.1191,t).sub(.00232))))}),$R=Z(({color:s,exposure:t})=>{const e=O(s).toVar(),n=Pi(O(.856627153315983,.137318972929847,.11189821299995),O(.0951212405381588,.761241990602591,.0767994186031903),O(.0482516061458583,.101439036467562,.811302368396859)),i=Pi(O(1.1271005818144368,-.1413297634984383,-.14132976349843826),O(-.11060664309660323,1.157823702216272,-.11060664309660294),O(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=b(-12.47393),o=b(4.026069);return e.mulAssign(t),e.assign(qR.mul(e)),e.assign(n.mul(e)),e.assign(si(e,1e-10)),e.assign(ll(e)),e.assign(e.sub(r).div(o.sub(r))),e.assign(Po(e,0,1)),e.assign(YR(e)),e.assign(i.mul(e)),e.assign($i(si(O(0),e),O(2.2))),e.assign(XR.mul(e)),e.assign(Po(e,0,1)),e}),jR={[Qp]:BR,[tm]:kR,[em]:HR,[nm]:WR,[im]:$R};class L0 extends ye{constructor(t=mi,e=KR,n=null){super("vec3"),this.toneMapping=t,this.exposureNode=e,this.colorNode=n}getCacheKey(){let t=super.getCacheKey();return t="{toneMapping:"+this.toneMapping+",nodes:"+t+"}",t}setup(t){const e=this.colorNode||t.context.color,n=this.toneMapping;if(n===mi)return e;const i={exposure:this.exposureNode,color:e},r=jR[n];let o=null;return r?o=r(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=e),o}}const ZR=(s,t,e)=>ht(new L0(s,ht(t),ht(e))),KR=pR("toneMappingExposure","float");U("toneMapping",(s,t,e)=>ZR(t,e,s));Q("ToneMappingNode",L0);let Tu=null;class P0 extends Oa{constructor(t=Ea,e=null){Tu===null&&(Tu=new Om),super(t,e,Tu)}updateReference(){return this}}const JR=k(P0);U("viewportSharedTexture",JR);Q("ViewportSharedTextureNode",P0);class _h extends Bo{constructor(t,e){super(e),this.passNode=t,this.setUpdateMatrix(!1)}setup(t){return this.passNode.build(t),super.setup(t)}clone(){return new this.constructor(this.passNode,this.value)}}class Ua extends ye{constructor(t,e,n){super("vec4"),this.scope=t,this.scene=e,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new Ca;i.isRenderTargetTexture=!0,i.name="PostProcessingDepth";const r=new ks(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wa});r.texture.name="PostProcessing",r.depthTexture=i,this.renderTarget=r,this.updateBeforeType=ve.FRAME,this._textureNode=ht(new _h(this,r.texture)),this._depthTextureNode=ht(new _h(this,i)),this._depthNode=null,this._viewZNode=null,this._cameraNear=xe(0),this._cameraFar=xe(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const t=this._cameraNear,e=this._cameraFar;this._viewZNode=t0(this._depthTextureNode,t,e)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const t=this._cameraNear,e=this._cameraFar;this._depthNode=dh(this.getViewZNode(),t,e)}return this._depthNode}setup(){return this.scope===Ua.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(t){const{renderer:e}=t,{scene:n,camera:i}=this;this._pixelRatio=e.getPixelRatio();const r=e.getSize(new Ct);this.setSize(r.width,r.height);const o=e.toneMapping,a=e.toneMappingNode,c=e.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,e.toneMapping=mi,e.toneMappingNode=null,e.setRenderTarget(this.renderTarget),e.render(n,i),e.toneMapping=o,e.toneMappingNode=a,e.setRenderTarget(c)}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Ua.COLOR="color";Ua.DEPTH="depth";const md=(s,t)=>ht(new _h(s,t));Q("PassNode",Ua);const Eu=new bh(-1,1,1,-1,0,1);class QR extends vs{constructor(t=!1){super();const e=t===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _i(e,2))}}const tC=new QR;class _l extends di{constructor(t=null){super(tC,t),this.camera=Eu}renderAsync(t){return t.renderAsync(this,Eu)}render(t){t.render(this,Eu)}}const Xp=new _l,qp=new _l;class eC extends ye{constructor(t,e=2){super("vec4"),this.textureNode=t,this.sigma=e,this.directionNode=At(1),this._invSize=xe(new Ct),this._passDirection=xe(new Ct),this._horizontalRT=new ks,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new ks,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=md(this,this._verticalRT.texture),this.updateBeforeType=ve.RENDER,this.resolution=new Ct(1,1)}setSize(t,e){t=Math.max(Math.round(t*this.resolution.x),1),e=Math.max(Math.round(e*this.resolution.y),1),this._invSize.value.set(1/t,1/e),this._horizontalRT.setSize(t,e),this._verticalRT.setSize(t,e)}updateBefore(t){const{renderer:e}=t,n=this.textureNode,i=n.value,r=e.getRenderTarget(),o=n.value;Xp.material=this._material,qp.material=this._material,this.setSize(i.image.width,i.image.height);const a=i.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,e.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Xp.render(e),n.value=this._horizontalRT.texture,e.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),qp.render(e),e.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(t){const e=this.textureNode;if(e.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Tt();const n=e.uvNode||Qi(),i=c=>e.cache().context({getUV:()=>c,forceUVContext:!0}),r=Z(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=At(this.directionNode).mul(this._passDirection),d=b(l[0]).toVar(),f=Tt(i(n).mul(d)).toVar();for(let _=1;_<c;_++){const g=b(_),p=b(l[_]),m=At(h.mul(u.mul(g))).toVar(),y=Tt(i(n.add(m))),v=Tt(i(n.sub(m)));f.addAssign(y.add(v).mul(p)),d.addAssign(te(2,p))}return f.div(d)}),o=this._material||(this._material=t.createNodeMaterial());o.fragmentNode=r();const a=t.getNodeProperties(this);return a.textureNode=e,this._textureNode}_getCoefficients(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return e}}const nC=(s,t)=>ht(new eC(ht(s),t));U("gaussianBlur",nC);const Yp=new _l;class iC extends ye{constructor(t,e=.96){super(t),this.textureNode=t,this.textureNodeOld=ei(),this.damp=xe(e),this._compRT=new ks,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new ks,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=md(this,this._compRT.texture),this.updateBeforeType=ve.RENDER}getTextureNode(){return this._textureNode}setSize(t,e){this._compRT.setSize(t,e),this._oldRT.setSize(t,e)}updateBefore(t){const{renderer:e}=t,n=this.textureNode,i=n.value,r=i.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=e.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,e.setRenderTarget(this._compRT),Yp.render(e);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(i.image.width,i.image.height),e.setRenderTarget(o),n.value=a}setup(t){const e=this.textureNode,n=this.textureNodeOld;if(e.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Tt();const i=e.uvNode||Qi();n.uvNode=i;const r=u=>e.cache().context({getUV:()=>u,forceUVContext:!0}),o=Z(([u,h])=>{const d=b(h).toVar(),f=Tt(u).toVar();return si(hd(f.sub(d)),0)}),a=Z(()=>{const u=Tt(n),h=Tt(r(i));return u.mulAssign(this.damp.mul(o(u,.1))),si(h,u)}),c=this._materialComposed||(this._materialComposed=t.createNodeMaterial());c.fragmentNode=a(),Yp.material=c;const l=t.getNodeProperties(this);return l.textureNode=e,this._textureNode}}const sC=(s,t)=>ht(new iC(ht(s),t));U("afterImage",sC);const $p=new _l;class rC extends ye{constructor(t,e,n,i){super("vec4"),this.textureNode=t,this.tresholdNode=e,this.scaleNode=n,this.colorNode=O(.1,0,1),this.samples=i,this.resolution=new Ct(1,1),this._renderTarget=new ks,this._renderTarget.texture.name="anamorphic",this._invSize=xe(new Ct),this._textureNode=md(this,this._renderTarget.texture),this.updateBeforeType=ve.RENDER}getTextureNode(){return this._textureNode}setSize(t,e){this._invSize.value.set(1/t,1/e),t=Math.max(Math.round(t*this.resolution.x),1),e=Math.max(Math.round(e*this.resolution.y),1),this._renderTarget.setSize(t,e)}updateBefore(t){const{renderer:e}=t,n=this.textureNode,i=n.value;this._renderTarget.texture.type=i.type;const r=e.getRenderTarget(),o=n.value;$p.material=this._material,this.setSize(i.image.width,i.image.height),e.setRenderTarget(this._renderTarget),$p.render(e),e.setRenderTarget(r),n.value=o}setup(t){const e=this.textureNode;if(e.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Tt();const n=e.uvNode||Qi(),i=c=>e.cache().context({getUV:()=>c,forceUVContext:!0}),r=Z(()=>{const c=this.samples,l=Math.floor(c/2),u=O(0).toVar();return Te({start:-l,end:l},({i:h})=>{const d=b(h).abs().div(l).oneMinus(),f=At(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),_=i(f),g=b0(_,this.tresholdNode).mul(d);u.addAssign(g)}),u.mul(this.colorNode)}),o=this._material||(this._material=t.createNodeMaterial());o.fragmentNode=r();const a=t.getNodeProperties(this);return a.textureNode=e,this._textureNode}}const oC=(s,t=.9,e=3,n=32)=>ht(new rC(ht(s),ht(t),ht(e),n));U("anamorphic",oC);class I0 extends ye{constructor(t=null,e={}){super(),this.functionNode=t,this.parameters=e}setParameters(t){return this.parameters=t,this}getParameters(){return this.parameters}getNodeType(t){return this.functionNode.getNodeType(t)}generate(t){const e=[],n=this.functionNode,i=n.getInputs(t),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=i[a],l=r[a];e.push(l.build(t,c.type))}else for(const a of i){const c=r[a.name];if(c!==void 0)e.push(c.build(t,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(t,"property")}( ${e.join(", ")} )`}}const aC=(s,...t)=>(t=t.length>1||t[0]&&t[0].isNode===!0?fo(t):al(t[0]),ht(new I0(ht(s),t)));U("call",aC);Q("FunctionCallNode",I0);class D0 extends bt{constructor(t=null){super(),this._value=t,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Ys,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(t){this._value!==t&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=t,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const t=this.value;if(t&&this._cache===null&&this.inputType==="URL"&&t.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([t.value]));else if(t&&t.value!==null&&t.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof t.value=="string"||this.inputType==="Number"&&typeof t.value=="number"||this.inputType==="Vector2"&&t.value.isVector2||this.inputType==="Vector3"&&t.value.isVector3||this.inputType==="Vector4"&&t.value.isVector4||this.inputType==="Color"&&t.value.isColor||this.inputType==="Matrix3"&&t.value.isMatrix3||this.inputType==="Matrix4"&&t.value.isMatrix4))return t.value;return this._cache||t}getNodeType(t){return this.value&&this.value.isNode?this.value.getNodeType(t):"float"}setup(){return this.value&&this.value.isNode?this.value:b()}serialize(t){super.serialize(t),this.value!==null?this.inputType==="ArrayBuffer"?t.value=Hg(this.value):t.value=this.value?this.value.toJSON(t.meta).uuid:null:t.value=null,t.inputType=this.inputType,t.outputType=this.outputType}deserialize(t){super.deserialize(t);let e=null;t.value!==null&&(t.inputType==="ArrayBuffer"?e=Gg(t.value):t.inputType==="Texture"?e=t.meta.textures[t.value]:e=t.meta.nodes[t.value]||null),this.value=e,this.inputType=t.inputType,this.outputType=t.outputType}}const xc=k(D0);U("scriptableValue",xc);Q("ScriptableValueNode",D0);class O0 extends Map{get(t,e=null,...n){if(this.has(t))return super.get(t);if(e!==null){const i=e(...n);return this.set(t,i),i}}}class cC{constructor(t){this.scriptableNode=t}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(t){return this.scriptableNode.getInputLayout(t)}get(t){const e=this.parameters[t];return e?e.getValue():null}}const Au=new O0;class U0 extends bt{constructor(t=null,e={}){super(),this.codeNode=t,this.parameters=e,this._local=new O0,this._output=xc(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(t,e){return this._local.set(t,e)}getLocal(t){return this._local.get(t)}onRefresh(){this._refresh()}getInputLayout(t){for(const e of this.getLayout())if(e.inputType&&(e.id===t||e.name===t))return e}getOutputLayout(t){for(const e of this.getLayout())if(e.outputType&&(e.id===t||e.name===t))return e}setOutput(t,e){const n=this._outputs;return n[t]===void 0?n[t]=xc(e):n[t].value=e,this}getOutput(t){return this._outputs[t]}getParameter(t){return this.parameters[t]}setParameter(t,e){const n=this.parameters;return e&&e.isScriptableNode?(this.deleteParameter(t),n[t]=e,n[t].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):e&&e.isScriptableValueNode?(this.deleteParameter(t),n[t]=e,n[t].events.addEventListener("refresh",this.onRefresh)):n[t]===void 0?(n[t]=xc(e),n[t].events.addEventListener("refresh",this.onRefresh)):n[t].value=e,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(t){let e=this.parameters[t];return e&&(e.isScriptableNode&&(e=e.getDefaultOutput()),e.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const t of Object.keys(this.parameters))this.deleteParameter(t);return this.needsUpdate=!0,this}call(t,...e){const i=this.getObject()[t];if(typeof i=="function")return i(...e)}async callAsync(t,...e){const i=this.getObject()[t];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...e):i(...e)}getNodeType(t){return this.getDefaultOutputNode().getNodeType(t)}refresh(t=null){t!==null?this.getOutput(t).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const t=()=>this.refresh(),e=(l,u)=>this.setOutput(l,u),n=new cC(this),i=Au.get("THREE"),r=Au.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Au,t,e,i,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(t){super.deserialize(t);for(const e in this.parameters){let n=this.parameters[e];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const t=this.getDefaultOutput().value;return t&&t.isNode?t:b()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const t=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=i+this.codeNode.code+r;return this._method=new Function(...t,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(t){t===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const lC=k(U0);U("scriptable",lC);Q("ScriptableNode",U0);class vl extends bt{constructor(t,e){super("float"),this.isFogNode=!0,this.colorNode=t,this.factorNode=e}getViewZNode(t){let e;const n=t.context.getViewZ;return n!==void 0&&(e=n(this)),(e||Jn.z).negate()}setup(){return this.factorNode}}const uC=k(vl);U("fog",uC);Q("FogNode",vl);class F0 extends vl{constructor(t,e,n){super(t),this.isFogRangeNode=!0,this.nearNode=e,this.farNode=n}setup(t){const e=this.getViewZNode(t);return _s(this.nearNode,this.farNode,e)}}const hC=k(F0);U("rangeFog",hC);Q("FogRangeNode",F0);class V0 extends vl{constructor(t,e){super(t),this.isFogExp2Node=!0,this.densityNode=e}setup(t){const e=this.getViewZNode(t),n=this.densityNode;return n.mul(n,e,e).negate().exp().oneMinus()}}const dC=k(V0);U("densityFog",dC);Q("FogExp2Node",V0);let or=null,ar=null;class z0 extends bt{constructor(t=b(),e=b()){super(),this.minNode=t,this.maxNode=e}getVectorLength(t){const e=t.getTypeLength(Ds(this.minNode.value)),n=t.getTypeLength(Ds(this.maxNode.value));return e>n?e:n}getNodeType(t){return t.object.isInstancedMesh===!0?t.getTypeFromLength(this.getVectorLength(t)):"float"}setup(t){const e=t.object;let n=null;if(e.isInstancedMesh===!0){const i=this.minNode.value,r=this.maxNode.value,o=t.getTypeLength(Ds(i)),a=t.getTypeLength(Ds(r));or=or||new oe,ar=ar||new oe,or.setScalar(0),ar.setScalar(0),o===1?or.setScalar(i):i.isColor?or.set(i.r,i.g,i.b):or.set(i.x,i.y,i.z||0,i.w||0),a===1?ar.setScalar(r):r.isColor?ar.set(r.r,r.g,r.b):ar.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*e.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,_=or.getComponent(f),g=ar.getComponent(f);u[d]=mm.lerp(_,g,Math.random())}const h=this.getNodeType(t);n=dd(u,"vec4",e.count).element(t_).convert(h)}else n=b(0);return n}}k(z0);Q("RangeNode",z0);class B0 extends bt{constructor(t,e,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=t,this.count=e,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=ve.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}updateDispatchCount(){const{count:t,workgroupSize:e}=this;let n=e[0];for(let i=1;i<e.length;i++)n*=e[i];this.dispatchCount=Math.ceil(t/n)}onInit(){}updateBefore({renderer:t}){t.compute(this)}generate(t){const{shaderStage:e}=t;if(e==="compute"){const n=this.computeNode.build(t,"void");n!==""&&t.addLineFlowCode(n)}}}const fC=(s,t,e)=>ht(new B0(ht(s),t,e));U("compute",fC);Q("ComputeNode",B0);class Cr extends bt{constructor(t=Cr.TARGET_DIRECTION,e=null){super(),this.scope=t,this.light=e}setup(){const{scope:t,light:e}=this;let n=null;return t===Cr.TARGET_DIRECTION&&(n=xs.transformDirection(oh(e).sub(oh(e.target)))),n}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Cr.TARGET_DIRECTION="targetDirection";const k0=k(Cr,Cr.TARGET_DIRECTION);Q("LightNode",Cr);const H0=Z(s=>{const{lightDistance:t,cutoffDistance:e,decayExponent:n}=s,i=t.pow(n).max(.01).reciprocal();return e.greaterThan(0).cond(i.mul(t.div(e).pow4().oneMinus().clamp().pow2()),i)});class G0 extends Dr{constructor(t=null){super(t),this.cutoffDistanceNode=xe(0),this.decayExponentNode=xe(0)}update(t){const{light:e}=this;super.update(t),this.cutoffDistanceNode.value=e.distance,this.decayExponentNode.value=e.decay}setup(t){const{colorNode:e,cutoffDistanceNode:n,decayExponentNode:i,light:r}=this,o=t.context.lightingModel,a=w_(r).sub(Jn),c=a.normalize(),l=a.length(),u=H0({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=e.mul(u),d=t.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},t.stack,t)}}Q("PointLightNode",G0);Ho(wA,G0);class W0 extends Dr{constructor(t=null){super(t)}setup(t){super.setup(t);const e=t.context.lightingModel,n=this.colorNode,i=k0(this.light),r=t.context.reflectedLight;e.direct({lightDirection:i,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},t.stack,t)}}Q("DirectionalLightNode",W0);Ho(Vm,W0);class gd extends Dr{constructor(t=null){super(t),this.coneCosNode=xe(0),this.penumbraCosNode=xe(0),this.cutoffDistanceNode=xe(0),this.decayExponentNode=xe(0)}update(t){super.update(t);const{light:e}=this;this.coneCosNode.value=Math.cos(e.angle),this.penumbraCosNode.value=Math.cos(e.angle*(1-e.penumbra)),this.cutoffDistanceNode.value=e.distance,this.decayExponentNode.value=e.decay}getSpotAttenuation(t){const{coneCosNode:e,penumbraCosNode:n}=this;return _s(e,n,t)}setup(t){super.setup(t);const e=t.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:r,light:o}=this,a=w_(o).sub(Jn),c=a.normalize(),l=c.dot(k0(o)),u=this.getSpotAttenuation(l),h=a.length(),d=H0({lightDistance:h,cutoffDistance:i,decayExponent:r}),f=n.mul(u).mul(d),_=t.context.reflectedLight;e.direct({lightDirection:c,lightColor:f,reflectedLight:_,shadowMask:this.shadowMaskNode},t.stack,t)}}Q("SpotLightNode",gd);Ho(Fm,gd);class pC extends Fm{constructor(t,e,n,i,r,o){super(t,e,n,i,r,o),this.iesMap=null}copy(t,e){return super.copy(t,e),this.iesMap=t.iesMap,this}}class X0 extends gd{getSpotAttenuation(t){const e=this.light.iesMap;let n=null;if(e&&e.isTexture===!0){const i=t.acos().mul(1/Math.PI);n=ei(e,At(i,0),0).r}else n=super.getSpotAttenuation(t);return n}}Q("IESSpotLightNode",X0);Ho(pC,X0);class q0 extends Dr{constructor(t=null){super(t)}setup({context:t}){t.irradiance.addAssign(this.colorNode)}}Q("AmbientLightNode",q0);Ho(zm,q0);class Y0 extends Dr{constructor(t=null){super(t),this.lightPositionNode=oh(t),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=xe(new Ut)}update(t){const{light:e}=this;super.update(t),this.lightPositionNode.object3d=e,this.groundColorNode.value.copy(e.groundColor).multiplyScalar(e.intensity)}setup(t){const{colorNode:e,groundColorNode:n,lightDirectionNode:i}=this,o=Xs.dot(i).mul(.5).add(.5),a=hn(n,e,o);t.context.irradiance.addAssign(a)}}Q("HemisphereLightNode",Y0);Ho(EA,Y0);const mC=Z(s=>{const t=s.uv.mul(2),e=t.x.floor(),n=t.y.floor();return e.add(n).mod(2).sign()});class $0 extends ye{constructor(t=Qi()){super("float"),this.uvNode=t}setup(){return mC({uv:this.uvNode})}}const gC=k($0);U("checker",gC);Q("CheckerNode",$0);const _C=new Dm;class vC extends oi{constructor(t={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=t.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(_C),this.setupShaders(),this.setValues(t)}setupShaders(){const t=this.alphaToCoverage,e=this.useColor;this.vertexNode=Z(()=>{Ve(At(),"vUv").assign(Qi());const n=xn("instancePosition"),i=cn("vec4","mvPos");i.assign(Rr.mul(Tt(n,1)));const r=_o.z.div(_o.w),o=Bi.mul(i),a=cn("vec2","offset");return a.assign(In.xy),a.assign(a.mul(v1)),a.assign(a.div(_o.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Tt(a,0,0))),o})(),this.fragmentNode=Z(()=>{const n=Ve(At(),"vUv"),i=cn("float","alpha");i.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(t){const l=cn("float","dlen");l.assign(a.fwidth()),i.assign(_s(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:e?c=xn("instanceColor").mul(Ta):c=Ta,Tt(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(t){this.useAlphaToCoverage!==t&&(this.useAlphaToCoverage=t,this.setupShaders())}}Pn("InstancedPointsNodeMaterial",vC);const xC=new Im;class yC extends oi{constructor(t){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(xC),this.setValues(t)}}Pn("LineBasicNodeMaterial",yC);const MC=new Um;class SC extends oi{constructor(t){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(MC),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(t)}setupVariants(){const t=this.offsetNode,e=this.dashScaleNode?b(this.dashScaleNode):ah,n=this.dashSizeNode?b(this.dashSizeNode):P_,i=this.dashSizeNode?b(this.dashGapNode):I_;go.assign(n),Vc.assign(i);const r=Ve(xn("lineDistance").mul(e));(t?r.add(t):r).mod(go.add(Vc)).greaterThan(go).discard()}}Pn("LineDashedNodeMaterial",SC);const TC=new Um;class EC extends oi{constructor(t={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(TC),this.useAlphaToCoverage=!0,this.useColor=t.vertexColors,this.useDash=t.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(t)}setup(t){this.setupShaders(),super.setup(t)}setupShaders(){const t=this.alphaToCoverage,e=this.useColor,n=this.dashed,i=this.worldUnits,r=Z(({start:a,end:c})=>{const l=Bi.element(2).element(2),d=Bi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Tt(hn(a.xyz,c.xyz,d),c.w)});this.vertexNode=Z(()=>{Fi("vec2","vUv").assign(Qi());const a=xn("instanceStart"),c=xn("instanceEnd"),l=cn("vec4","start"),u=cn("vec4","end");l.assign(Rr.mul(Tt(a,1))),u.assign(Rr.mul(Tt(c,1))),i&&(Fi("vec3","worldStart").assign(l.xyz),Fi("vec3","worldEnd").assign(u.xyz));const h=_o.z.div(_o.w),d=Bi.element(2).element(3).equal(-1);Zt(d,()=>{Zt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=Bi.mul(l),_=Bi.mul(u),g=f.xyz.div(f.w),p=_.xyz.div(_.w),m=p.xy.sub(g.xy).temp();m.x.assign(m.x.mul(h)),m.assign(m.normalize());const y=Ma(Tt());if(i){const v=u.xyz.sub(l.xyz).normalize(),S=hn(l.xyz,u.xyz,.5).normalize(),w=v.cross(S).normalize(),N=v.cross(w),E=Fi("vec4","worldPos");E.assign(In.y.lessThan(.5).cond(l,u));const L=fu.mul(.5);E.addAssign(Tt(In.x.lessThan(0).cond(w.mul(L),w.mul(L).negate()),0)),n||(E.addAssign(Tt(In.y.lessThan(.5).cond(v.mul(L).negate(),v.mul(L)),0)),E.addAssign(Tt(N.mul(L),0)),Zt(In.y.greaterThan(1).or(In.y.lessThan(0)),()=>{E.subAssign(Tt(N.mul(2).mul(L),0))})),y.assign(Bi.mul(E));const x=Ma(O());x.assign(In.y.lessThan(.5).cond(g,p)),y.z.assign(x.z.mul(y.w))}else{const v=cn("vec2","offset");v.assign(At(m.y,m.x.negate())),m.x.assign(m.x.div(h)),v.x.assign(v.x.div(h)),v.assign(In.x.lessThan(0).cond(v.negate(),v)),Zt(In.y.lessThan(0),()=>{v.assign(v.sub(m))}).elseif(In.y.greaterThan(1),()=>{v.assign(v.add(m))}),v.assign(v.mul(fu)),v.assign(v.div(_o.w)),y.assign(In.y.lessThan(.5).cond(f,_)),v.assign(v.mul(y.w)),y.assign(y.add(Tt(v,0,0)))}return y})();const o=Z(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),_=h.dot(d),g=d.dot(f),p=h.dot(f),m=d.dot(d),v=f.dot(f).mul(m).sub(g.mul(g)),w=_.mul(g).sub(p.mul(m)).div(v).clamp(),N=_.add(g.mul(w)).div(m).clamp();return At(w,N)});this.fragmentNode=Z(()=>{const a=Fi("vec2","vUv");if(n){const u=this.offsetNode?b(this.offsetNodeNode):Rp,h=this.dashScaleNode?b(this.dashScaleNode):ah,d=this.dashSizeNode?b(this.dashSizeNode):P_,f=this.dashSizeNode?b(this.dashGapNode):I_;go.assign(d),Vc.assign(f);const _=xn("instanceDistanceStart"),g=xn("instanceDistanceEnd"),p=In.y.lessThan(.5).cond(h.mul(_),ah.mul(g)),m=Ve(p.add(Rp)),y=u?m.add(u):m;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),y.mod(go.add(Vc)).greaterThan(go).discard()}const c=cn("float","alpha");if(c.assign(1),i){const u=Fi("vec3","worldStart"),h=Fi("vec3","worldEnd"),d=Fi("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),_=o({p1:u,p2:h,p3:O(0,0,0),p4:d}),g=u.add(f.mul(_.x)),p=d.mul(_.y),v=g.sub(p).length().div(fu);if(!n)if(t){const S=v.fwidth();c.assign(_s(S.negate().add(.5),S.add(.5),v).oneMinus())}else v.greaterThan(.5).discard()}else if(t){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=cn("float","dlen");f.assign(d.fwidth()),Zt(a.y.abs().greaterThan(1),()=>{c.assign(_s(f.oneMinus(),f.add(1),d).oneMinus())})}else Zt(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(e){const u=xn("instanceColorStart"),h=xn("instanceColorEnd");l=In.y.lessThan(.5).cond(u,h).mul(Ta)}else l=Ta;return Tt(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(t){this.useWorldUnits!==t&&(this.useWorldUnits=t,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(t){this.useDash!==t&&(this.useDash=t,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(t){this.useAlphaToCoverage!==t&&(this.useAlphaToCoverage=t,this.needsUpdate=!0)}}Pn("Line2NodeMaterial",EC);const AC=new vA;class NC extends oi{constructor(t){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(AC),this.setValues(t)}setupDiffuseColor(){const t=this.opacityNode?b(this.opacityNode):L_;Ie.assign(Tt(f0(ze),t))}}Pn("MeshNormalNodeMaterial",NC);const wC=new Kc;class bC extends oi{constructor(t){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(wC),this.setValues(t)}}Pn("MeshBasicNodeMaterial",bC);const Aa=Z(({f0:s,f90:t,dotVH:e})=>{const n=e.mul(-5.55473).sub(6.98316).mul(e).exp2();return s.mul(n.oneMinus()).add(t.mul(n))}),Wc=Z(s=>s.diffuseColor.mul(1/Math.PI)),RC=()=>b(.25),CC=Z(({dotNH:s})=>nh.mul(b(.5)).add(1).mul(b(1/Math.PI)).mul(s.pow(nh))),LC=Z(({lightDirection:s})=>{const t=s.add(De).normalize(),e=ze.dot(t).clamp(),n=De.dot(t).clamp(),i=Aa({f0:Ni,f90:1,dotVH:n}),r=RC(),o=CC({dotNH:e});return i.mul(r).mul(o)});class j0 extends rd{constructor(t=!0){super(),this.specular=t}direct({lightDirection:t,lightColor:e,reflectedLight:n}){const r=ze.dot(t).clamp().mul(e);n.directDiffuse.addAssign(r.mul(Wc({diffuseColor:Ie.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(LC({lightDirection:t})).mul(Qb))}indirectDiffuse({irradiance:t,reflectedLight:e}){e.indirectDiffuse.addAssign(t.mul(Wc({diffuseColor:Ie})))}}const PC=new xA;class IC extends oi{constructor(t){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(PC),this.setValues(t)}setupLightingModel(){return new j0(!1)}}Pn("MeshLambertNodeMaterial",IC);const DC=new _A;class OC extends oi{constructor(t){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(DC),this.setValues(t)}setupLightingModel(){return new j0}setupVariants(){const t=(this.shininessNode?b(this.shininessNode):jb).max(1e-4);nh.assign(t);const e=this.specularNode||Kb;Ni.assign(e)}copy(t){return this.shininessNode=t.shininessNode,this.specularNode=t.specularNode,super.copy(t)}}Pn("MeshPhongNodeMaterial",OC);const UC=Z(()=>{const s=zc.dFdx().abs().max(zc.dFdy().abs());return s.x.max(s.y).max(s.z)}),FC=Z(s=>{const{roughness:t}=s,e=UC();let n=t.max(.0525);return n=n.add(e),n=n.min(1),n}),VC=Z(({alpha:s,dotNL:t,dotNV:e})=>{const n=s.pow2(),i=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt()),r=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt());return Ws(.5,i.add(r).max(h_))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),zC=Z(({alphaT:s,alphaB:t,dotTV:e,dotBV:n,dotTL:i,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(O(s.mul(e),t.mul(n),o).length()),l=o.mul(O(s.mul(i),t.mul(r),a).length());return Ws(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),BC=Z(({alpha:s,dotNH:t})=>{const e=s.pow2(),n=t.pow2().mul(e.oneMinus()).oneMinus();return e.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),kC=b(1/Math.PI),HC=Z(({alphaT:s,alphaB:t,dotNH:e,dotTH:n,dotBH:i})=>{const r=s.mul(t),o=O(t.mul(n),s.mul(i),r.mul(e)),a=o.dot(o),c=r.div(a);return kC.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),jp=Z(s=>{const{lightDirection:t,f0:e,f90:n,roughness:i,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=s,c=s.normalView||ze,l=i.pow2(),u=t.add(De).normalize(),h=c.dot(t).clamp(),d=c.dot(De).clamp(),f=c.dot(u).clamp(),_=De.dot(u).clamp();let g=Aa({f0:e,f90:n,dotVH:_}),p,m;if(Tp(o)&&(g=ad.mix(g,r)),Tp(a)){const y=_c.dot(t),v=_c.dot(De),S=_c.dot(u),w=mo.dot(t),N=mo.dot(De),E=mo.dot(u);p=zC({alphaT:eh,alphaB:l,dotTV:v,dotBV:N,dotTL:y,dotBL:w,dotNV:d,dotNL:h}),m=HC({alphaT:eh,alphaB:l,dotNH:f,dotTH:S,dotBH:E})}else p=VC({alpha:l,dotNL:h,dotNV:d}),m=BC({alpha:l,dotNH:f});return g.mul(p).mul(m)}),Z0=Z(({roughness:s,dotNV:t})=>{const e=Tt(-1,-.0275,-.572,.022),n=Tt(1,.0425,1.04,-.04),i=s.mul(e).add(n),r=i.x.mul(i.x).min(t.mul(-9.28).exp2()).mul(i.x).add(i.y);return At(-1.04,1.04).mul(r).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),K0=Z(s=>{const{dotNV:t,specularColor:e,specularF90:n,roughness:i}=s,r=Z0({dotNV:t,roughness:i});return e.mul(r.x).add(n.mul(r.y))}),GC=Z(({f:s,f90:t,dotVH:e})=>{const n=e.oneMinus().saturate(),i=n.mul(n),r=n.mul(i,i).clamp(0,.9999);return s.sub(O(t).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),WC=Z(({roughness:s,dotNH:t})=>{const e=s.pow2(),n=b(1).div(e),r=t.pow2().oneMinus().max(.0078125);return b(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),XC=Z(({dotNV:s,dotNL:t})=>b(1).div(b(4).mul(t.add(s).sub(t.mul(s))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),qC=Z(({lightDirection:s})=>{const t=s.add(De).normalize(),e=ze.dot(s).clamp(),n=ze.dot(De).clamp(),i=ze.dot(t).clamp(),r=WC({roughness:od,dotNH:i}),o=XC({dotNV:n,dotNL:e});return io.mul(r).mul(o)}),YC=Z(([s,t,e,n,i])=>{const r=O(x_(t.negate(),Ln(s),Ws(1,n))),o=O(ha(i[0].xyz),ha(i[1].xyz),ha(i[2].xyz));return Ln(r).mul(e.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),$C=Z(([s,t])=>s.mul(Po(t.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),jC=K_(),ZC=Z(([s,t,e])=>{const n=jC.uv(s),i=ll(b(hh.x)).mul($C(t,e));return n.bicubic(i)}),KC=Z(([s,t,e])=>(Zt(e.notEqual(0),()=>{const n=p_(t).negate().div(e);return f_(n.negate().mul(s))}),O(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),JC=Z(([s,t,e,n,i,r,o,a,c,l,u,h,d,f])=>{const _=YC(s,t,h,u,a),g=o.add(_),p=l.mul(c.mul(Tt(g,1))),m=At(p.xy.div(p.w)).toVar();m.addAssign(1),m.divAssign(2),m.assign(At(m.x,m.y.oneMinus()));const y=ZC(m,e,u),v=n.mul(KC(ha(_),d,f)),S=v.rgb.mul(y.rgb),w=s.dot(t).clamp(),N=O(K0({dotNV:w,specularColor:i,specularF90:r,roughness:e})),E=v.r.add(v.g,v.b).div(3);return Tt(N.oneMinus().mul(S),y.a.oneMinus().mul(E).oneMinus())}),QC=Pi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),tL=s=>{const t=s.sqrt();return O(1).add(t).div(O(1).sub(t))},Zp=(s,t)=>s.sub(t).div(s.add(t)).pow2(),eL=(s,t)=>{const e=s.mul(2*Math.PI*1e-9),n=O(54856e-17,44201e-17,52481e-17),i=O(1681e3,1795300,2208400),r=O(43278e5,93046e5,66121e5),o=b(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(e.mul(2239900).add(t.x).cos()).mul(e.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(i.mul(e).add(t).cos()).mul(e.pow2().negate().mul(r).exp());return a=O(a.x.add(o),a.y,a.z).div(10685e-11),QC.mul(a)},nL=Z(({outsideIOR:s,eta2:t,cosTheta1:e,thinFilmThickness:n,baseF0:i})=>{const r=hn(s,t,_s(0,.03,n)),o=s.div(r).pow2().mul(b(1).sub(e.pow2())),c=b(1).sub(o).sqrt(),l=Zp(r,s),u=Aa({f0:l,f90:1,dotVH:e}),h=u.oneMinus(),d=r.lessThan(s).cond(Math.PI,0),f=b(Math.PI).sub(d),_=tL(i.clamp(0,.9999)),g=Zp(_,r.vec3()),p=Aa({f0:g,f90:1,dotVH:c}),m=O(_.x.lessThan(r).cond(Math.PI,0),_.y.lessThan(r).cond(Math.PI,0),_.z.lessThan(r).cond(Math.PI,0)),y=r.mul(n,c,2),v=O(f).add(m),S=u.mul(p).clamp(1e-5,.9999),w=S.sqrt(),N=h.pow2().mul(p).div(O(1).sub(S));let L=u.add(N),x=N.sub(h);for(let M=1;M<=2;++M){x=x.mul(w);const V=eL(b(M).mul(y),b(M).mul(v)).mul(2);L=L.add(x.mul(V))}return L.max(O(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),iL=Z(({normal:s,viewDir:t,roughness:e})=>{const n=s.dot(t).saturate(),i=e.pow2(),r=Qn(e.lessThan(.25),b(-339.2).mul(i).add(b(161.4).mul(e)).sub(25.9),b(-8.48).mul(i).add(b(14.3).mul(e)).sub(9.95)),o=Qn(e.lessThan(.25),b(44).mul(i).sub(b(23.7).mul(e)).add(3.26),b(1.97).mul(i).sub(b(3.27).mul(e)).add(.72));return Qn(e.lessThan(.25),0,b(.1).mul(e).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Nu=O(.04),wu=O(1);class _d extends rd{constructor(t=!1,e=!1,n=!1,i=!1,r=!1){super(),this.clearcoat=t,this.sheen=e,this.iridescence=n,this.anisotropy=i,this.transmission=r,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(t){if(this.clearcoat===!0&&(this.clearcoatRadiance=O().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=O().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=O().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=O().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=O().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=ze.dot(De).clamp();this.iridescenceFresnel=nL({outsideIOR:b(1),eta2:n_,cosTheta1:e,thinFilmThickness:i_,baseF0:Ni}),this.iridescenceF0=GC({f:this.iridescenceFresnel,f90:1,dotVH:e})}if(this.transmission===!0){const e=ch,n=Yb.sub(ch).normalize(),i=C_;t.backdrop=JC(i,n,Os,Ie,Ni,Fc,e,Sa,xs,Bi,vc,s_,o_,r_),t.backdropAlpha=ih,Ie.a.mulAssign(hn(1,t.backdrop.a,ih))}}computeMultiscattering(t,e,n){const i=ze.dot(De).clamp(),r=Z0({roughness:Os,dotNV:i}),a=(this.iridescenceF0?ad.mix(Ni,this.iridescenceF0):Ni).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ni.add(Ni.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());t.addAssign(a),e.addAssign(h.mul(l))}direct({lightDirection:t,lightColor:e,reflectedLight:n}){const r=ze.dot(t).clamp().mul(e);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(qC({lightDirection:t}))),this.clearcoat===!0){const a=so.dot(t).clamp().mul(e);this.clearcoatSpecularDirect.addAssign(a.mul(jp({lightDirection:t,f0:Nu,f90:wu,roughness:Uc,normalView:so})))}n.directDiffuse.addAssign(r.mul(Wc({diffuseColor:Ie.rgb}))),n.directSpecular.addAssign(r.mul(jp({lightDirection:t,f0:Ni,f90:1,roughness:Os,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:t,reflectedLight:e}){e.indirectDiffuse.addAssign(t.mul(Wc({diffuseColor:Ie})))}indirectSpecular({radiance:t,iblIrradiance:e,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(e.mul(io,iL({normal:ze,viewDir:De,roughness:od}))),this.clearcoat===!0){const l=so.dot(De).clamp(),u=K0({dotNV:l,specularColor:Nu,specularF90:wu,roughness:Uc});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=O().temp("singleScattering"),r=O().temp("multiScattering"),o=e.mul(1/Math.PI);this.computeMultiscattering(i,r,Fc);const a=i.add(r),c=Ie.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(t.mul(i)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:t,reflectedLight:e}){const i=ze.dot(De).clamp().add(t),r=Os.mul(-16).oneMinus().negate().exp2(),o=t.sub(i.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(t),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(t),e.indirectDiffuse.mulAssign(t),e.indirectSpecular.mulAssign(o)}finish(t){const{outgoingLight:e}=t;if(this.clearcoat===!0){const n=so.dot(De).clamp(),i=Aa({dotVH:n,f0:Nu,f90:wu}),r=e.mul(th.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(th));e.assign(r)}if(this.sheen===!0){const n=io.r.max(io.g).max(io.b).mul(.157).oneMinus(),i=e.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);e.assign(i)}}}const sL=new Ph;class J0 extends oi{constructor(t){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(sL),this.setValues(t)}setupLightingModel(){return new _d}setupSpecular(){const t=hn(O(.04),Ie.rgb,Oc);Ni.assign(t),Fc.assign(1)}setupVariants(){const t=this.metalnessNode?b(this.metalnessNode):e1;Oc.assign(t);let e=this.roughnessNode?b(this.roughnessNode):t1;e=FC({roughness:e}),Os.assign(e),this.setupSpecular(),Ie.assign(Tt(Ie.rgb.mul(t.oneMinus()),Ie.a))}copy(t){return this.emissiveNode=t.emissiveNode,this.metalnessNode=t.metalnessNode,this.roughnessNode=t.roughnessNode,super.copy(t)}}Pn("MeshStandardNodeMaterial",J0);const rL=new gA;class Q0 extends J0{constructor(t){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(rL),this.setValues(t)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const t=this.iorNode?b(this.iorNode):m1;vc.assign(t),Ni.assign(hn(Lo(v_(vc.sub(1).div(vc.add(1))).mul(Jb),O(1)).mul(bp),Ie.rgb,Oc)),Fc.assign(hn(bp,1,Oc))}setupLightingModel(){return new _d(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(t){if(super.setupVariants(t),this.useClearcoat){const e=this.clearcoatNode?b(this.clearcoatNode):i1,n=this.clearcoatRoughnessNode?b(this.clearcoatRoughnessNode):s1;th.assign(e),Uc.assign(n)}if(this.useSheen){const e=this.sheenNode?O(this.sheenNode):a1,n=this.sheenRoughnessNode?b(this.sheenRoughnessNode):c1;io.assign(e),od.assign(n)}if(this.useIridescence){const e=this.iridescenceNode?b(this.iridescenceNode):u1,n=this.iridescenceIORNode?b(this.iridescenceIORNode):h1,i=this.iridescenceThicknessNode?b(this.iridescenceThicknessNode):d1;ad.assign(e),n_.assign(n),i_.assign(i)}if(this.useAnisotropy){const e=(this.anisotropyNode?At(this.anisotropyNode):l1).toVar();ur.assign(e.length()),Zt(ur.equal(0),()=>{e.assign(At(1,0))}).else(()=>{e.divAssign(ur),ur.assign(ur.saturate())}),eh.assign(ur.pow2().mix(Os.pow2(),1)),_c.assign(ro[0].mul(e.x).add(ro[1].mul(e.y))),mo.assign(ro[1].mul(e.x).sub(ro[0].mul(e.y)))}if(this.useTransmission){const e=this.transmissionNode?b(this.transmissionNode):f1,n=this.thicknessNode?b(this.thicknessNode):p1,i=this.attenuationDistanceNode?b(this.attenuationDistanceNode):g1,r=this.attenuationColorNode?O(this.attenuationColorNode):_1;ih.assign(e),s_.assign(n),r_.assign(i),o_.assign(r)}}setupNormal(t){super.setupNormal(t);const e=this.clearcoatNormalNode?O(this.clearcoatNormalNode):r1;so.assign(e)}copy(t){return this.clearcoatNode=t.clearcoatNode,this.clearcoatRoughnessNode=t.clearcoatRoughnessNode,this.clearcoatNormalNode=t.clearcoatNormalNode,this.sheenNode=t.sheenNode,this.sheenRoughnessNode=t.sheenRoughnessNode,this.iridescenceNode=t.iridescenceNode,this.iridescenceIORNode=t.iridescenceIORNode,this.iridescenceThicknessNode=t.iridescenceThicknessNode,this.specularIntensityNode=t.specularIntensityNode,this.specularColorNode=t.specularColorNode,this.transmissionNode=t.transmissionNode,this.thicknessNode=t.thicknessNode,this.attenuationDistanceNode=t.attenuationDistanceNode,this.attenuationColorNode=t.attenuationColorNode,this.anisotropyNode=t.anisotropyNode,super.copy(t)}}Pn("MeshPhysicalNodeMaterial",Q0);class oL extends _d{constructor(t,e,n,i){super(t,e,n),this.useSSS=i}direct({lightDirection:t,lightColor:e,reflectedLight:n},i,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,f=t.add(ze.mul(c)).normalize(),_=b(De.dot(f.negate()).saturate().pow(h).mul(d)),g=O(_.add(l).mul(a));n.directDiffuse.addAssign(g.mul(u.mul(e)))}super.direct({lightDirection:t,lightColor:e,reflectedLight:n},i,r)}}class aL extends Q0{constructor(t){super(t),this.thicknessColorNode=null,this.thicknessDistortionNode=b(.1),this.thicknessAmbientNode=b(0),this.thicknessAttenuationNode=b(.1),this.thicknessPowerNode=b(2),this.thicknessScaleNode=b(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new oL(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(t){return this.thicknessColorNode=t.thicknessColorNode,this.thicknessDistortionNode=t.thicknessDistortionNode,this.thicknessAmbientNode=t.thicknessAmbientNode,this.thicknessAttenuationNode=t.thicknessAttenuationNode,this.thicknessPowerNode=t.thicknessPowerNode,this.thicknessScaleNode=t.thicknessScaleNode,super.copy(t)}}Pn("MeshSSSNodeMaterial",aL);const cL=new Dm;class lL extends oi{constructor(t){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(cL),this.setValues(t)}copy(t){return this.sizeNode=t.sizeNode,super.copy(t)}}Pn("PointsNodeMaterial",lL);const uL=new fA;class hL extends oi{constructor(t){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(uL),this.setValues(t)}setupPosition({object:t,context:e}){const{positionNode:n,rotationNode:i,scaleNode:r}=this,o=En;let a=Rr.mul(O(n||0)),c=At(Sa[0].xyz.length(),Sa[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;t.center&&t.center.isVector2===!0&&(l=l.sub(xe(t.center).sub(.5))),l=l.mul(c);const u=b(i||o1),h=l.rotate(u);a=Tt(a.xy.add(h),a.zw);const d=Bi.mul(a);return e.vertex=o,d}copy(t){return this.positionNode=t.positionNode,this.rotationNode=t.rotationNode,this.scaleNode=t.scaleNode,super.copy(t)}}Pn("SpriteNodeMaterial",hL);class dL extends rd{constructor(){super(),this.shadowNode=b(1).toVar("shadowMask")}direct({shadowMask:t}){this.shadowNode.mulAssign(t)}finish(t){Ie.a.mulAssign(this.shadowNode.oneMinus()),t.outgoingLight.rgb.assign(Ie.rgb)}}const fL=new mA;class pL extends oi{constructor(t){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(fL),this.setValues(t)}setupLightingModel(){return new dL}}Pn("ShadowNodeMaterial",pL);const vo=Z(([s,t,e])=>{const n=b(e).toVar(),i=b(t).toVar(),r=br(s).toVar();return Qn(r,i,n)}),Na=Z(([s,t])=>{const e=br(t).toVar(),n=b(s).toVar();return Qn(e,n.negate(),n)}),ke=Z(([s])=>{const t=b(s).toVar();return C(Vo(t))}),be=Z(([s,t])=>{const e=b(s).toVar();return t.assign(ke(e)),e.sub(b(t))}),tv=Z(([s,t,e,n,i,r])=>{const o=b(r).toVar(),a=b(i).toVar(),c=b(n).toVar(),l=b(e).toVar(),u=b(t).toVar(),h=b(s).toVar(),d=b(We(1,a)).toVar();return We(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),ev=Z(([s,t,e,n,i,r])=>{const o=b(r).toVar(),a=b(i).toVar(),c=O(n).toVar(),l=O(e).toVar(),u=O(t).toVar(),h=O(s).toVar(),d=b(We(1,a)).toVar();return We(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),nv=Mi([tv,ev]),iv=Z(([s,t,e,n,i,r,o,a,c,l,u])=>{const h=b(u).toVar(),d=b(l).toVar(),f=b(c).toVar(),_=b(a).toVar(),g=b(o).toVar(),p=b(r).toVar(),m=b(i).toVar(),y=b(n).toVar(),v=b(e).toVar(),S=b(t).toVar(),w=b(s).toVar(),N=b(We(1,f)).toVar(),E=b(We(1,d)).toVar();return b(We(1,h)).toVar().mul(E.mul(w.mul(N).add(S.mul(f))).add(d.mul(v.mul(N).add(y.mul(f))))).add(h.mul(E.mul(m.mul(N).add(p.mul(f))).add(d.mul(g.mul(N).add(_.mul(f))))))}),sv=Z(([s,t,e,n,i,r,o,a,c,l,u])=>{const h=b(u).toVar(),d=b(l).toVar(),f=b(c).toVar(),_=O(a).toVar(),g=O(o).toVar(),p=O(r).toVar(),m=O(i).toVar(),y=O(n).toVar(),v=O(e).toVar(),S=O(t).toVar(),w=O(s).toVar(),N=b(We(1,f)).toVar(),E=b(We(1,d)).toVar();return b(We(1,h)).toVar().mul(E.mul(w.mul(N).add(S.mul(f))).add(d.mul(v.mul(N).add(y.mul(f))))).add(h.mul(E.mul(m.mul(N).add(p.mul(f))).add(d.mul(g.mul(N).add(_.mul(f))))))}),rv=Mi([iv,sv]),ov=Z(([s,t,e])=>{const n=b(e).toVar(),i=b(t).toVar(),r=ft(s).toVar(),o=ft(r.bitAnd(ft(7))).toVar(),a=b(vo(o.lessThan(ft(4)),i,n)).toVar(),c=b(te(2,vo(o.lessThan(ft(4)),n,i))).toVar();return Na(a,br(o.bitAnd(ft(1)))).add(Na(c,br(o.bitAnd(ft(2)))))}),av=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=b(t).toVar(),a=ft(s).toVar(),c=ft(a.bitAnd(ft(15))).toVar(),l=b(vo(c.lessThan(ft(8)),o,r)).toVar(),u=b(vo(c.lessThan(ft(4)),r,vo(c.equal(ft(12)).or(c.equal(ft(14))),o,i))).toVar();return Na(l,br(c.bitAnd(ft(1)))).add(Na(u,br(c.bitAnd(ft(2)))))}),sn=Mi([ov,av]),cv=Z(([s,t,e])=>{const n=b(e).toVar(),i=b(t).toVar(),r=Ia(s).toVar();return O(sn(r.x,i,n),sn(r.y,i,n),sn(r.z,i,n))}),lv=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=b(t).toVar(),a=Ia(s).toVar();return O(sn(a.x,o,r,i),sn(a.y,o,r,i),sn(a.z,o,r,i))}),ui=Mi([cv,lv]),uv=Z(([s])=>{const t=b(s).toVar();return te(.6616,t)}),hv=Z(([s])=>{const t=b(s).toVar();return te(.982,t)}),dv=Z(([s])=>{const t=O(s).toVar();return te(.6616,t)}),fv=Mi([uv,dv]),pv=Z(([s])=>{const t=O(s).toVar();return te(.982,t)}),mv=Mi([hv,pv]),Dn=Z(([s,t])=>{const e=C(t).toVar(),n=ft(s).toVar();return n.shiftLeft(e).bitOr(n.shiftRight(C(32).sub(e)))}),gv=Z(([s,t,e])=>{s.subAssign(e),s.bitXorAssign(Dn(e,C(4))),e.addAssign(t),t.subAssign(s),t.bitXorAssign(Dn(s,C(6))),s.addAssign(e),e.subAssign(t),e.bitXorAssign(Dn(t,C(8))),t.addAssign(s),s.subAssign(e),s.bitXorAssign(Dn(e,C(16))),e.addAssign(t),t.subAssign(s),t.bitXorAssign(Dn(s,C(19))),s.addAssign(e),e.subAssign(t),e.bitXorAssign(Dn(t,C(4))),t.addAssign(s)}),Go=Z(([s,t,e])=>{const n=ft(e).toVar(),i=ft(t).toVar(),r=ft(s).toVar();return n.bitXorAssign(i),n.subAssign(Dn(i,C(14))),r.bitXorAssign(n),r.subAssign(Dn(n,C(11))),i.bitXorAssign(r),i.subAssign(Dn(r,C(25))),n.bitXorAssign(i),n.subAssign(Dn(i,C(16))),r.bitXorAssign(n),r.subAssign(Dn(n,C(4))),i.bitXorAssign(r),i.subAssign(Dn(r,C(14))),n.bitXorAssign(i),n.subAssign(Dn(i,C(24))),n}),un=Z(([s])=>{const t=ft(s).toVar();return b(t).div(b(ft(C(4294967295))))}),Li=Z(([s])=>{const t=b(s).toVar();return t.mul(t.mul(t.mul(t.mul(t.mul(6).sub(15)).add(10))))}),_v=Z(([s])=>{const t=C(s).toVar(),e=ft(ft(1)).toVar(),n=ft(ft(C(3735928559)).add(e.shiftLeft(ft(2)).add(ft(13)))).toVar();return Go(n.add(ft(t)),n,n)}),vv=Z(([s,t])=>{const e=C(t).toVar(),n=C(s).toVar(),i=ft(ft(2)).toVar(),r=ft().toVar(),o=ft().toVar(),a=ft().toVar();return r.assign(o.assign(a.assign(ft(C(3735928559)).add(i.shiftLeft(ft(2)).add(ft(13)))))),r.addAssign(ft(n)),o.addAssign(ft(e)),Go(r,o,a)}),xv=Z(([s,t,e])=>{const n=C(e).toVar(),i=C(t).toVar(),r=C(s).toVar(),o=ft(ft(3)).toVar(),a=ft().toVar(),c=ft().toVar(),l=ft().toVar();return a.assign(c.assign(l.assign(ft(C(3735928559)).add(o.shiftLeft(ft(2)).add(ft(13)))))),a.addAssign(ft(r)),c.addAssign(ft(i)),l.addAssign(ft(n)),Go(a,c,l)}),yv=Z(([s,t,e,n])=>{const i=C(n).toVar(),r=C(e).toVar(),o=C(t).toVar(),a=C(s).toVar(),c=ft(ft(4)).toVar(),l=ft().toVar(),u=ft().toVar(),h=ft().toVar();return l.assign(u.assign(h.assign(ft(C(3735928559)).add(c.shiftLeft(ft(2)).add(ft(13)))))),l.addAssign(ft(a)),u.addAssign(ft(o)),h.addAssign(ft(r)),gv(l,u,h),l.addAssign(ft(i)),Go(l,u,h)}),Mv=Z(([s,t,e,n,i])=>{const r=C(i).toVar(),o=C(n).toVar(),a=C(e).toVar(),c=C(t).toVar(),l=C(s).toVar(),u=ft(ft(5)).toVar(),h=ft().toVar(),d=ft().toVar(),f=ft().toVar();return h.assign(d.assign(f.assign(ft(C(3735928559)).add(u.shiftLeft(ft(2)).add(ft(13)))))),h.addAssign(ft(l)),d.addAssign(ft(c)),f.addAssign(ft(a)),gv(h,d,f),h.addAssign(ft(o)),d.addAssign(ft(r)),Go(h,d,f)}),le=Mi([_v,vv,xv,yv,Mv]),Sv=Z(([s,t])=>{const e=C(t).toVar(),n=C(s).toVar(),i=ft(le(n,e)).toVar(),r=Ia().toVar();return r.x.assign(i.bitAnd(C(255))),r.y.assign(i.shiftRight(C(8)).bitAnd(C(255))),r.z.assign(i.shiftRight(C(16)).bitAnd(C(255))),r}),Tv=Z(([s,t,e])=>{const n=C(e).toVar(),i=C(t).toVar(),r=C(s).toVar(),o=ft(le(r,i,n)).toVar(),a=Ia().toVar();return a.x.assign(o.bitAnd(C(255))),a.y.assign(o.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(o.shiftRight(C(16)).bitAnd(C(255))),a}),hi=Mi([Sv,Tv]),Ev=Z(([s])=>{const t=At(s).toVar(),e=C().toVar(),n=C().toVar(),i=b(be(t.x,e)).toVar(),r=b(be(t.y,n)).toVar(),o=b(Li(i)).toVar(),a=b(Li(r)).toVar(),c=b(nv(sn(le(e,n),i,r),sn(le(e.add(C(1)),n),i.sub(1),r),sn(le(e,n.add(C(1))),i,r.sub(1)),sn(le(e.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return fv(c)}),Av=Z(([s])=>{const t=O(s).toVar(),e=C().toVar(),n=C().toVar(),i=C().toVar(),r=b(be(t.x,e)).toVar(),o=b(be(t.y,n)).toVar(),a=b(be(t.z,i)).toVar(),c=b(Li(r)).toVar(),l=b(Li(o)).toVar(),u=b(Li(a)).toVar(),h=b(rv(sn(le(e,n,i),r,o,a),sn(le(e.add(C(1)),n,i),r.sub(1),o,a),sn(le(e,n.add(C(1)),i),r,o.sub(1),a),sn(le(e.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),sn(le(e,n,i.add(C(1))),r,o,a.sub(1)),sn(le(e.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),sn(le(e,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),sn(le(e.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return mv(h)}),mL=Mi([Ev,Av]),Nv=Z(([s])=>{const t=At(s).toVar(),e=C().toVar(),n=C().toVar(),i=b(be(t.x,e)).toVar(),r=b(be(t.y,n)).toVar(),o=b(Li(i)).toVar(),a=b(Li(r)).toVar(),c=O(nv(ui(hi(e,n),i,r),ui(hi(e.add(C(1)),n),i.sub(1),r),ui(hi(e,n.add(C(1))),i,r.sub(1)),ui(hi(e.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return fv(c)}),wv=Z(([s])=>{const t=O(s).toVar(),e=C().toVar(),n=C().toVar(),i=C().toVar(),r=b(be(t.x,e)).toVar(),o=b(be(t.y,n)).toVar(),a=b(be(t.z,i)).toVar(),c=b(Li(r)).toVar(),l=b(Li(o)).toVar(),u=b(Li(a)).toVar(),h=O(rv(ui(hi(e,n,i),r,o,a),ui(hi(e.add(C(1)),n,i),r.sub(1),o,a),ui(hi(e,n.add(C(1)),i),r,o.sub(1),a),ui(hi(e.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),ui(hi(e,n,i.add(C(1))),r,o,a.sub(1)),ui(hi(e.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),ui(hi(e,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),ui(hi(e.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return mv(h)}),gL=Mi([Nv,wv]),_L=Z(([s])=>{const t=b(s).toVar(),e=C(ke(t)).toVar();return un(le(e))}),vL=Z(([s])=>{const t=At(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar();return un(le(e,n))}),xL=Z(([s])=>{const t=O(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar(),i=C(ke(t.z)).toVar();return un(le(e,n,i))}),yL=Z(([s])=>{const t=Tt(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar(),i=C(ke(t.z)).toVar(),r=C(ke(t.w)).toVar();return un(le(e,n,i,r))}),bv=Z(([s])=>{const t=b(s).toVar(),e=C(ke(t)).toVar();return O(un(le(e,C(0))),un(le(e,C(1))),un(le(e,C(2))))}),Rv=Z(([s])=>{const t=At(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar();return O(un(le(e,n,C(0))),un(le(e,n,C(1))),un(le(e,n,C(2))))}),Cv=Z(([s])=>{const t=O(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar(),i=C(ke(t.z)).toVar();return O(un(le(e,n,i,C(0))),un(le(e,n,i,C(1))),un(le(e,n,i,C(2))))}),Lv=Z(([s])=>{const t=Tt(s).toVar(),e=C(ke(t.x)).toVar(),n=C(ke(t.y)).toVar(),i=C(ke(t.z)).toVar(),r=C(ke(t.w)).toVar();return O(un(le(e,n,i,r,C(0))),un(le(e,n,i,r,C(1))),un(le(e,n,i,r,C(2))))}),Pv=Mi([bv,Rv,Cv,Lv]),Xc=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=C(t).toVar(),a=O(s).toVar(),c=b(0).toVar(),l=b(1).toVar();return Te({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(mL(a))),l.mulAssign(i),a.mulAssign(r)}),c}),Iv=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=C(t).toVar(),a=O(s).toVar(),c=O(0).toVar(),l=b(1).toVar();return Te({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(gL(a))),l.mulAssign(i),a.mulAssign(r)}),c}),ML=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=C(t).toVar(),a=O(s).toVar();return At(Xc(a,o,r,i),Xc(a.add(O(C(19),C(193),C(17))),o,r,i))}),SL=Z(([s,t,e,n])=>{const i=b(n).toVar(),r=b(e).toVar(),o=C(t).toVar(),a=O(s).toVar(),c=O(Iv(a,o,r,i)).toVar(),l=b(Xc(a.add(O(C(19),C(193),C(17))),o,r,i)).toVar();return Tt(c,l)}),Dv=Z(([s,t,e,n,i,r,o])=>{const a=C(o).toVar(),c=b(r).toVar(),l=C(i).toVar(),u=C(n).toVar(),h=C(e).toVar(),d=C(t).toVar(),f=At(s).toVar(),_=O(Pv(At(d.add(u),h.add(l)))).toVar(),g=At(_.x,_.y).toVar();g.subAssign(.5),g.mulAssign(c),g.addAssign(.5);const p=At(At(b(d),b(h)).add(g)).toVar(),m=At(p.sub(f)).toVar();return Zt(a.equal(C(2)),()=>je(m.x).add(je(m.y))),Zt(a.equal(C(3)),()=>si(je(m.x),je(m.y))),zo(m,m)}),Ov=Z(([s,t,e,n,i,r,o,a,c])=>{const l=C(c).toVar(),u=b(a).toVar(),h=C(o).toVar(),d=C(r).toVar(),f=C(i).toVar(),_=C(n).toVar(),g=C(e).toVar(),p=C(t).toVar(),m=O(s).toVar(),y=O(Pv(O(p.add(f),g.add(d),_.add(h)))).toVar();y.subAssign(.5),y.mulAssign(u),y.addAssign(.5);const v=O(O(b(p),b(g),b(_)).add(y)).toVar(),S=O(v.sub(m)).toVar();return Zt(l.equal(C(2)),()=>je(S.x).add(je(S.y).add(je(S.z)))),Zt(l.equal(C(3)),()=>si(si(je(S.x),je(S.y)),je(S.z))),zo(S,S)}),Wo=Mi([Dv,Ov]),TL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=At(s).toVar(),o=C().toVar(),a=C().toVar(),c=At(be(r.x,o),be(r.y,a)).toVar(),l=b(1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=b(Wo(c,u,h,o,a,i,n)).toVar();l.assign(Lo(l,d))})}),Zt(n.equal(C(0)),()=>{l.assign(Ir(l))}),l}),EL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=At(s).toVar(),o=C().toVar(),a=C().toVar(),c=At(be(r.x,o),be(r.y,a)).toVar(),l=At(1e6,1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=b(Wo(c,u,h,o,a,i,n)).toVar();Zt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Zt(n.equal(C(0)),()=>{l.assign(Ir(l))}),l}),AL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=At(s).toVar(),o=C().toVar(),a=C().toVar(),c=At(be(r.x,o),be(r.y,a)).toVar(),l=O(1e6,1e6,1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=b(Wo(c,u,h,o,a,i,n)).toVar();Zt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Zt(n.equal(C(0)),()=>{l.assign(Ir(l))}),l}),NL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(be(r.x,o),be(r.y,a),be(r.z,c)).toVar(),u=b(1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Te({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const _=b(Wo(l,h,d,f,o,a,c,i,n)).toVar();u.assign(Lo(u,_))})})}),Zt(n.equal(C(0)),()=>{u.assign(Ir(u))}),u}),wL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(be(r.x,o),be(r.y,a),be(r.z,c)).toVar(),u=At(1e6,1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Te({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const _=b(Wo(l,h,d,f,o,a,c,i,n)).toVar();Zt(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),Zt(n.equal(C(0)),()=>{u.assign(Ir(u))}),u}),bL=Z(([s,t,e])=>{const n=C(e).toVar(),i=b(t).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(be(r.x,o),be(r.y,a),be(r.z,c)).toVar(),u=O(1e6,1e6,1e6).toVar();return Te({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Te({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Te({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const _=b(Wo(l,h,d,f,o,a,c,i,n)).toVar();Zt(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).elseif(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),Zt(n.equal(C(0)),()=>{u.assign(Ir(u))}),u});vo.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Na.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});ke.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});tv.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});ev.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});iv.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});sv.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});ov.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});av.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});cv.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});lv.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});uv.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});hv.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});dv.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});pv.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Dn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Go.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});un.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});Li.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});_v.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});vv.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});xv.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});yv.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});Mv.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Sv.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Tv.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Ev.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Av.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Nv.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});wv.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});_L.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});vL.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});xL.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});yL.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});bv.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});Rv.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Cv.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Lv.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Xc.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Iv.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});ML.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});SL.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Dv.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Ov.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});TL.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});EL.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});AL.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});NL.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});wL.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});bL.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const RL=Z(([s])=>{const t=O(s).toVar(),e=b(t.x).toVar(),n=b(t.y).toVar(),i=b(t.z).toVar();Zt(n.lessThan(1e-4),()=>O(i,i,i)).else(()=>{e.assign(te(6,e.sub(Vo(e))));const r=C(g_(e)).toVar(),o=b(e.sub(b(r))).toVar(),a=b(i.mul(We(1,n))).toVar(),c=b(i.mul(We(1,n.mul(o)))).toVar(),l=b(i.mul(We(1,n.mul(We(1,o))))).toVar();return Zt(r.equal(C(0)),()=>O(i,l,a)).elseif(r.equal(C(1)),()=>O(c,i,a)).elseif(r.equal(C(2)),()=>O(a,i,l)).elseif(r.equal(C(3)),()=>O(a,c,i)).elseif(r.equal(C(4)),()=>O(l,a,i)),O(i,a,c)})}),CL=Z(([s])=>{const t=O(s).toVar(),e=b(t.x).toVar(),n=b(t.y).toVar(),i=b(t.z).toVar(),r=b(Lo(e,Lo(n,i))).toVar(),o=b(si(e,si(n,i))).toVar(),a=b(o.sub(r)).toVar(),c=b().toVar(),l=b().toVar(),u=b().toVar();return u.assign(o),Zt(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),Zt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Zt(e.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(ii(2,i.sub(e).div(a)))}).else(()=>{c.assign(ii(4,e.sub(n).div(a)))}),c.mulAssign(1/6),Zt(c.lessThan(0),()=>{c.addAssign(1)})}),O(c,l,u)});RL.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});CL.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const LL=Z(([s])=>{const t=O(s).toVar(),e=$g(u_(t,O(.04045))).toVar(),n=O(t.div(12.92)).toVar(),i=O($i(si(t.add(O(.055)),O(0)).div(1.055),O(2.4))).toVar();return hn(n,i,e)});LL.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const qc=[{front:9055202,back:8388352},{front:16404630,back:5241432},{front:16406583,back:3734192},{front:5532858,back:16434226}],PL=document.querySelector("canvas.webgl"),Mr=new dA,Hi={width:window.innerWidth,height:window.innerHeight};let Sr=0,Tr=0,vh=!1;window.addEventListener("resize",()=>{Hi.width=window.innerWidth,Hi.height=window.innerHeight,Fn.aspect=Hi.width/Hi.height,Fn.updateProjectionMatrix(),Io.setSize(Hi.width,Hi.height),Io.setPixelRatio(Math.min(window.devicePixelRatio,2)),Sr=vd(0,Fn),Tr=Fv(0,Fn),console.log(Sr,Tr),vh=!0});const IL=new zm(16777215,.5);Mr.add(IL);const Uv=new Vm(16777215,1);Uv.position.set(-5,10,5);Mr.add(Uv);const Fn=new On(75,Hi.width/Hi.height,.1,100);Fn.position.x=0;Fn.position.y=0;Fn.position.z=5;Mr.add(Fn);const Io=new hA({canvas:PL});Io.setSize(Hi.width,Hi.height);Io.setPixelRatio(Math.min(window.devicePixelRatio,2));const vd=(s,t)=>{const e=t.position.z;s<e?s-=e:s+=e;const n=t.fov*Math.PI/180;return 2*Math.tan(n/2)*Math.abs(s)},Fv=(s,t)=>vd(s,t)*t.aspect;Sr=vd(0,Fn);Tr=Fv(0,Fn);console.log(Sr,Tr);const DL=new Oo(1,1,1),OL=new Ph({color:65280});new di(DL,OL);let xh;document.getElementById("startButton").addEventListener("click",s=>{document.getElementById("startScreen").remove(),xh=new PA,Fn.add(xh),Vv()});let da=[],Yc=qc[Math.floor(Math.random()*qc.length)];function Vv(){da.forEach(h=>{Mr.remove(h),h.geometry.dispose(),h.material.dispose()}),da=[];const s=.19,t=s*2,e=Math.floor(Tr/t),n=Math.floor(Sr/t),i=e*t,o=(Tr-i)/(e+1),a=n*t,l=(Sr-a)/(n+1);new RA().load("sounds/page-flip.mp3",function(h){for(let d=0;d<e;d++)for(let f=0;f<n;f++){const _=new Lh(s,32),g=Yc.front,p=new Kc({color:g,side:Gi}),m=new di(_,p);m.position.x=d*(t+o)+o+s-Tr/2,m.position.y=f*(t+l)+l+s-Sr/2;const y=new IA(xh);y.setBuffer(h),y.setVolume(.5),m.add(y),Mr.add(m),da.push(m)}}),Io.render(Mr,Fn),kv()}const Kp=new OA,yh=new Ct;function UL(){Kp.setFromCamera(yh,Fn);const s=Kp.intersectObjects(da);for(let t=0;t<s.length;t++){s[t].object.userData.flipped||(s[t].object.material.color.set(Yc.back),s[t].object.userData.flipped=!0,Jh.to(s[t].object.rotation,{y:Math.PI,duration:.1,overwrite:!0}));const e=s[t].object.children[0];e&&e.play()}}function zv(){Yc=qc[Math.floor(Math.random()*qc.length)],da.forEach(s=>{Jh.to(s.rotation,{y:0,duration:1.2,overwrite:!0}),s.material.color.set(Yc.front),s.userData.flipped=!1})}window.addEventListener("dblclick",()=>{zv()});function FL(){let s=0,t;return function(n){const i=new Date().getTime(),r=i-s;r<500&&r>0?(console.log("Double tapped!"),zv(),n.preventDefault()):t=setTimeout(()=>{clearTimeout(t)},500),s=i}}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&document.body.addEventListener("touchend",FL(),{passive:!1});function Bv(s){let t,e;if(s.type==="mousemove")t=s.clientX/window.innerWidth*2-1,e=-(s.clientY/window.innerHeight)*2+1;else if(s.type==="touchmove"){const n=s.touches[0];t=n.clientX/window.innerWidth*2-1,e=-(n.clientY/window.innerHeight)*2+1}yh.x=t,yh.y=e,UL()}window.addEventListener("mousemove",Bv);window.addEventListener("touchmove",Bv);function kv(){const s=requestAnimationFrame(kv);Io.render(Mr,Fn),vh&&(vh=!1,cancelAnimationFrame(s),Vv())}
//# sourceMappingURL=index-D9cdAQlC.js.map
