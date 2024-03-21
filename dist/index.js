"use strict";var p=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var m=p(function(z,j){
var x=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/math-base-special-floor/dist'),I=128;function l(r,u,n,i,c,e,a,s){var o,v,f,t,q;if(r<=0)return e;if(o=c,v=s,r<=I){for(f=0,q=0;q<r;q++)f=x(f+n[o]),e[v]=x(u+f),o+=i,v+=a;return e}return t=F(r/2),l(t,u,n,i,o,e,a,v),v+=(t-1)*a,l(r-t,e[v],n,i,o+t*i,e,a,v+a),e}j.exports=l
});var O=p(function(A,E){
var K=m();function L(r,u,n,i,c,e){var a,s;return r<=0?c:(i<0?a=(1-r)*i:a=0,e<0?s=(1-r)*e:s=0,K(r,u,n,i,a,c,e,s))}E.exports=L
});var B=p(function(D,_){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),T=m();S(R,"ndarray",T);_.exports=R
});var Z=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=B(),w,C=b(Z(__dirname,"./native.js"));g(C)?w=h:w=C;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
