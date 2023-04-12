"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const f=require("react");var s={},c={get exports(){return s},set exports(e){s=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=f,d=Symbol.for("react.element"),x=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,m=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,u){var t,o={},l=null,i=null;u!==void 0&&(l=""+u),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)a.call(r,t)&&!y.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:d,type:e,key:l,ref:i,props:o,_owner:m.current}}n.Fragment=x;n.jsx=_;n.jsxs=_;(function(e){e.exports=n})(c);const v=s.jsx,j=s.jsxs,O=({children:e})=>v("h1",{className:"text-red",children:e}),R=({name:e="World"})=>j(O,{children:["Hello ",e,"!"]});exports.default=R;
