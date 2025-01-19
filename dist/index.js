"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(z,j){
var w=require('@stdlib/number-float64-base-to-float32/dist'),I=require('@stdlib/math-base-special-floor/dist'),K=128;function p(r,a,v,u,q,e,n,F){var s,i,o,t,c;if(r<=0)return e;if(s=q,i=F,r<=K){for(o=0,c=0;c<r;c++)o=w(o+v[s]),e[i]=w(a+o),s+=u,i+=n;return e}return t=I(r/2),p(t,a,v,u,s,e,n,i),i+=(t-1)*n,p(r-t,e[i],v,u,s+t*u,e,n,i+n),e}j.exports=p
});var O=f(function(A,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),L=m();function S(r,a,v,u,q,e){return L(r,a,v,u,x(r,u),q,e,x(r,e))}E.exports=S
});var B=f(function(D,_){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),Z=m();T(R,"ndarray",Z);_.exports=R
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=B(),l,C=g(b(__dirname,"./native.js"));h(C)?l=k:l=C;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
