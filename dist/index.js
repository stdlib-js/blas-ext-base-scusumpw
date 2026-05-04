"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(D,l){
var j=require('@stdlib/number-float64-base-to-float32/dist'),K=require('@stdlib/math-base-special-floor/dist'),L=128;function p(r,a,v,u,q,e,n,I){var s,i,o,t,c;if(r<=0)return e;if(s=q,i=I,r<=L){for(o=0,c=0;c<r;c++)o=j(o+v[s]),e[i]=j(a+o),s+=u,i+=n;return e}return t=K(r/2),p(t,a,v,u,s,e,n,i),i+=(t-1)*n,p(r-t,e[i],v,u,s+t*u,e,n,i+n),e}l.exports=p
});var O=f(function(F,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),S=m();function Z(r,a,v,u,q,e){return S(r,a,v,u,x(r,u),q,e,x(r,e))}E.exports=Z
});var B=f(function(G,_){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),g=m();b(R,"ndarray",g);_.exports=R
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),y=require('@stdlib/assert-is-error/dist'),z=B(),w,C=k(h(__dirname,"./native.js"));y(C)?w=z:w=C;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
