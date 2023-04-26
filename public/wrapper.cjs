"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("react"),l=require("@paciolan/remote-component");function a(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const t=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,t.get?t:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const _=a(p);var c={},m={get exports(){return c},set exports(e){c=e}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=p,y=Symbol.for("react.element"),O=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,b=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,o){var t,n={},u=null,i=null;o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)j.call(r,t)&&!v.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:y,type:e,key:u,ref:i,props:n,_owner:b.current}}s.Fragment=O;s.jsx=f;s.jsxs=f;(function(e){e.exports=s})(m);const x=c.jsx,R=l.createRequires({react:_}),g=l.createRemoteComponent({requires:R}),S=({children:e})=>x(g,{url:"wrapper.cjs",children:e});exports.default=S;
