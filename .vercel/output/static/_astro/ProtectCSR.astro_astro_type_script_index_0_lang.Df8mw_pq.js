import{a}from"./chunk-BWZJPRGU.BC2rkRlB.js";import{B as i}from"./BaseClerkControlElement.B4mDCkdf.js";class r extends i{constructor(){super(...arguments),this.defaultSlot=null,this.fallbackSlot=null}onAuthStateChange(o){this.defaultSlot=this.querySelector("[data-clerk-control-slot-default]"),this.fallbackSlot=this.querySelector("[data-clerk-control-slot-fallback]");const s=a.get()?.checkAuthorization,t=this.dataset.role,e=this.dataset.permission,l=!o.userId||(t||e)&&!s?.({role:t,permission:e});this.defaultSlot&&(l?this.defaultSlot.setAttribute("hidden",""):this.defaultSlot.removeAttribute("hidden")),this.fallbackSlot&&(l?this.fallbackSlot.removeAttribute("hidden"):this.fallbackSlot.setAttribute("hidden",""))}}customElements.define("clerk-protect",r);
