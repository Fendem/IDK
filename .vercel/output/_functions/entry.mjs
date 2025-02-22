import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_DZGPyBE3.mjs";
import { manifest } from "./manifest_CgNapUaL.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/404.astro.mjs");
const _page2 = () => import("./pages/auth/signin.astro.mjs");
const _page3 = () => import("./pages/auth/signup.astro.mjs");
const _page4 = () => import("./pages/uebungen.astro.mjs");
const _page5 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/404.astro", _page1],
  ["src/pages/auth/signin.astro", _page2],
  ["src/pages/auth/signup.astro", _page3],
  ["src/pages/uebungen.astro", _page4],
  ["src/pages/index.astro", _page5]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "701b76d6-df37-4d91-86bc-01f0c8729d37",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
