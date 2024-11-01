// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function s(r,i,o,a,d,m,l,f){var p,u,j,v,b;if(r<=0)return m;if(p=d,u=f,r<=n){for(j=0,b=0;b<r;b++)j=e(j+o[p]),m[u]=e(i+j),p+=a,u+=l;return m}return s(v=t(r/2),i,o,a,p,m,l,u),s(r-v,m[u+=(v-1)*l],o,a,p+v*a,m,l,u+l),m}function i(r,e,t,n,i,o){return r<=0?i:s(r,e,t,n,n<0?(1-r)*n:0,i,o,o<0?(1-r)*o:0)}r(i,"ndarray",s);export{i as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
