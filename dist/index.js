"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var m=f(function(D,l){
var j=require('@stdlib/number-float64-base-to-float32/dist'),K=require('@stdlib/math-base-special-floor/dist'),L=128;function p(r,e,u,i,q,a,n,I){var s,v,o,t,c;if(r<=0)return a;if(s=q,v=I,r<=L){for(o=0,c=0;c<r;c++)o=j(o+u[s]),a[v]=j(e+o),s+=i,v+=n;return a}return t=K(r/2),p(t,e,u,i,s,a,n,v),v+=(t-1)*n,p(r-t,a[v],u,i,s+t*i,a,n,v+n),a}l.exports=p
});var O=f(function(F,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),S=m();function Z(r,e,u,i,q,a){return S(r,e,u,i,x(r,i),q,a,x(r,a))}E.exports=Z
});var B=f(function(G,_){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),g=m();b(R,"ndarray",g);_.exports=R
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),y=require('@stdlib/assert-is-error/dist'),z=B(),w,C=k(h(__dirname,"./native.js"));y(C)?w=z:w=C;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
