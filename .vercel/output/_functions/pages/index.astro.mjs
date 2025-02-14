/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from "../chunks/astro/server_CQ7_pCDq.mjs";
import "kleur/colors";
import { $ as $$Layout, M as MyChart } from "../chunks/chart_BUpk4vAq.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SchreibRecht - Verbessere dein Schreiben und Lesen schneller denn je!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="border-x border-primary "> <header> <!-- Hero Container --> <div class="pt-16 md:pt-24"> <!-- Background Animation --> <div class="absolute inset-0 -z-10 overflow-hidden max-w-7xl mx-auto"> <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/50 [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]" aria-hidden="true"> <defs> <pattern id="pattern-id" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"> <path d="M100 200V.5M.5 .5H200" fill="none"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#pattern-id)"></rect> </svg> </div> <!-- Hero Title --> <div class="motion-translate-y-in-25 max-w-4xl mt-32 mx-auto text-center"> <h1 class="mb-4 text-5xl md:text-6xl text-black main font-bold">Verbessere dein <span class="underline font-sans decoration-primary">Schreiben</span> und <span class="underline font-sans decoration-secondary">Lesen</span> einfacher denn je.</h1> <p class="text-center mx-auto max-w-2xl mb-5 text-md text-black/60 sm:text-3xl md:mb-6 lg:mb-8 funn bg-white ">Verbessere dein Schreiben und dein Lesen so einfach und schnell wie noch nie</p> </div> <!-- Hero Button --> <div class="flex items-stretch my-10 mb-20 justify-center"> <a href="#" class="motion-delay-500 motion-translate-y-in-25 mr-5 rounded-md bg-primary border-2 border-black text-black group flex flex-row items-center    px-10 py-4 font-bold tracking-wider hover:[box-shadow:rgb(000,_000,000)0px_5px_12px] focus:[box-shadow:rgb(000,_000,000)0px_5px_1px] duration-300 transition"><p class="mr-5 font-bold text-xl">Lass Starten</p><svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-none rotate-180 group-hover:rotate-[-90deg] transition-all duration-300"><title>Arrow Right</title> <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg> </a> <a href="#" class="motion-delay-1000 motion-translate-y-in-25 rounded-md  group flex flex-row items-center border-2 border-black bg-white px-10 py-4 font-bold tracking-wider hover:[box-shadow:rgb(000,_000,000)0px_5px_12px] focus:[box-shadow:rgb(000,_000,000)0px_5px_1px] duration-300 transition"><svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-none group-hover:rotate-[270deg] transition-all duration-300"><title>Arrow Right</title> <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg><p class="ml-5 font-bold text-xl">Mehr Sehen</p> </a> </div> <div class="">${renderComponent($$result2, "MyChart", MyChart, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/chart", "client:component-export": "MyChart" })}</div> </div> </header></div> ` })}`;
}, "/home/ferdi/vorrect/src/pages/index.astro", void 0);
const $$file = "/home/ferdi/vorrect/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
