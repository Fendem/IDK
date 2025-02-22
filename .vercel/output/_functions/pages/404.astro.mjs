/* empty css                                  */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_BS_EwGH5.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/Layout_B3RWORvn.mjs";
import { M as MyChart } from "../chunks/chart_D0rbO_wc.mjs";
import { renderers } from "../renderers.mjs";
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SchreibRecht - Verbessere dein Schreiben und Lesen schneller denn je!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="border-x border-primary "> <header> <!-- Hero Container --> <div class="py-16 md:py-20"> <div class="relative flex justify-center items-center"> <div id="word-display" class="select-none mx-auto text-center absolute text-[#FFCA16]/30 main -top-20 -z-20 inline-block text-[10vw] sm:text-[8vw] md:text-[15vw] lg:text-[15vw] xl:text-[15vw] 2xl:text-[14vw]"> <!-- Hier wird der Text angezeigt --> </div> </div> <!-- Background Animation --> <div class="absolute inset-0 -z-10 overflow-hidden max-w-7xl mx-auto"> <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/50 [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]" aria-hidden="true"> <defs> <pattern id="pattern-id" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"> <path d="M100 200V.5M.5 .5H200" fill="none"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#pattern-id)"></rect> </svg> </div> <!-- Hero Title --> <div class=" mt-32 mx-auto text-center"> <p class="mb-4 text-5xl text-dark font-bold tracking-wider funn">Ups 404!</p> <p class="text-center mx-auto max-w-2xl mb-5 text-sm text-dark/50 sm:text-2xl md:mb-6 lg:mb-12"></p> </div> <!-- Hero Button --> <div class="flex items-stretch my-10 justify-center"> <a href="/" class="mr-5 border-2 border-dark group flex flex-row items-center bg-white text-black  px-10 py-4 font-bold tracking-wider transition [box-shadow:rgb(000,_000,000)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"><p class="mr-5 font-bold">Home</p><svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-none rotate-180 group-hover:rotate-[-90deg] transition-all"><title>Arrow Right</title> <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg> </a> <a href="#" class="border-2 border-dark group flex flex-row items-center bg-primary text-black  px-10 py-4 font-bold tracking-wider transition [box-shadow:rgb(000,_000,000)8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"><svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-none group-hover:rotate-[270deg] transition-all"><title>Arrow Right</title> <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg><p class="ml-5 font-bold">Übungen</p> </a> </div> <div class="fixed bottom-0 left-0 w-full"> ${renderComponent($$result2, "MyChart", MyChart, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/chart", "client:component-export": "MyChart" })} </div> </div> </header></div> ` })}`;
}, "/home/ferdi/vorrect/src/pages/404.astro", void 0);
const $$file = "/home/ferdi/vorrect/src/pages/404.astro";
const $$url = "/404";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
