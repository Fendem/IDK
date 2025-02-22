/* empty css                                     */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../../chunks/astro/server_BS_EwGH5.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_B3RWORvn.mjs";
import { $ as $$InternalUIComponentRenderer } from "../../chunks/InternalUIComponentRenderer_B9Ebwm2q.mjs";
import { renderers } from "../../renderers.mjs";
const $$Astro = createAstro();
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-up" })}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/SignUp.astro", void 0);
const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen flex justify-center items-center "> <!-- Background Animation --> <div class="absolute inset-0 -z-10 overflow-hidden max-w-7xl mx-auto"> <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/50 [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]" aria-hidden="true"> <defs> <pattern id="pattern-id" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"> <path d="M100 200V.5M.5 .5H200" fill="none"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#pattern-id)"></rect> </svg> </div> <div class=" max-w-7xl gap-x-10 rounded-md scale-125"> ${renderComponent($$result2, "SignUp", $$SignUp, {})} </div> </div> ` })}`;
}, "/home/ferdi/vorrect/src/pages/auth/signup.astro", void 0);
const $$file = "/home/ferdi/vorrect/src/pages/auth/signup.astro";
const $$url = "/auth/signup";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
