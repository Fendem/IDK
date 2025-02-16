import "kleur/colors";
import { d as decodeKey } from "./chunks/astro/server_CQ7_pCDq.mjs";
import "clsx";
import "cookie";
import "./chunks/astro-designed-error-pages_5RevLuGB.mjs";
import "es-module-lexer";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_C9GQsOyW.mjs";
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
const manifest = deserializeManifest({"hrefRoot":"file:///home/ferdi/vorrect/","cacheDir":"file:///home/ferdi/vorrect/node_modules/.astro/","outDir":"file:///home/ferdi/vorrect/dist/","srcDir":"file:///home/ferdi/vorrect/src/","publicDir":"file:///home/ferdi/vorrect/public/","buildClientDir":"file:///home/ferdi/vorrect/dist/client/","buildServerDir":"file:///home/ferdi/vorrect/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.Rjq26VyU.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.Rjq26VyU.js"}],"styles":[{"type":"external","src":"/_astro/index.BBqqSg_q.css"},{"type":"external","src":"/_astro/uebungen.D0bHlEE9.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html,body{margin:0;width:100%;height:100%}.pre[data-astro-cid-sckkx6r4]{font-family:ui-monospace,Cascadia Code,Source Code Pro,Menlo,Consolas,DejaVu Sans Mono,monospace;font-weight:400;background:linear-gradient(14deg,#d83333,#f041ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0}.code[data-astro-cid-sckkx6r4]{display:inline-block;background:linear-gradient(66.77deg,#f3cddd,#f5cee7) padding-box,linear-gradient(155deg,#d83333,#f041ff 18%,#f5cee7 45%) border-box;border-radius:8px;border:1px solid transparent;padding:6px 8px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.Rjq26VyU.js"}],"styles":[{"type":"external","src":"/_astro/index.BBqqSg_q.css"},{"type":"external","src":"/_astro/uebungen.D0bHlEE9.css"}],"routeData":{"route":"/uebungen","isIndex":false,"type":"page","pattern":"^\\/uebungen\\/?$","segments":[[{"content":"uebungen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uebungen.astro","pathname":"/uebungen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.Rjq26VyU.js"}],"styles":[{"type":"external","src":"/_astro/index.BBqqSg_q.css"},{"type":"external","src":"/_astro/uebungen.D0bHlEE9.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html,body{margin:0;width:100%;height:100%}.pre[data-astro-cid-sckkx6r4]{font-family:ui-monospace,Cascadia Code,Source Code Pro,Menlo,Consolas,DejaVu Sans Mono,monospace;font-weight:400;background:linear-gradient(14deg,#d83333,#f041ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0}.code[data-astro-cid-sckkx6r4]{display:inline-block;background:linear-gradient(66.77deg,#f3cddd,#f5cee7) padding-box,linear-gradient(155deg,#d83333,#f041ff 18%,#f5cee7 45%) border-box;border-radius:8px;border:1px solid transparent;padding:6px 8px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ferdi/vorrect/src/pages/uebungen.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/uebungen@_@astro":"pages/uebungen.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/ferdi/vorrect/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C6RN7fAo.mjs","\u0000@astrojs-manifest":"manifest_BB9XCCFz.mjs","/home/ferdi/vorrect/src/layouts/CreateLayout.astro?astro&type=script&index=0&lang.ts":"_astro/CreateLayout.astro_astro_type_script_index_0_lang.DK9vdMS-.js","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.DdaeK5ia.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts":"_astro/UserButtonMenuItems.astro_astro_type_script_index_0_lang.DjJJDhXb.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedInCSR.astro_astro_type_script_index_0_lang.De7q6qiy.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/ProtectCSR.astro?astro&type=script&index=0&lang.ts":"_astro/ProtectCSR.astro_astro_type_script_index_0_lang.DvxQfSR4.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DH0AWjmS.js","/home/ferdi/vorrect/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DyVqhgWA.js","astro:scripts/page.js":"_astro/page.Rjq26VyU.js","/home/ferdi/vorrect/src/components/ExtraNav.tsx":"_astro/ExtraNav.B76-KBNv.js","@astrojs/react/client.js":"_astro/client.BRABE5LV.js","@/app/layout":"_astro/layout.Bw1Fq-45.js","@/components/chart":"_astro/chart.Dyr_fmGO.js","\u0000astro:transitions/client":"_astro/client.CHLTc0Tl.js"},"inlinedScripts":[["/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}}customElements.define(\"clerk-user-button-menu-items\",e);"]],"assets":["/_astro/index.BBqqSg_q.css","/_astro/uebungen.D0bHlEE9.css","/favicon.svg","/learn-1.jpg","/_astro/BaseClerkControlElement.C8tIaxfh.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DyVqhgWA.js","/_astro/CreateLayout.astro_astro_type_script_index_0_lang.DK9vdMS-.js","/_astro/ExtraNav.B76-KBNv.js","/_astro/ProtectCSR.astro_astro_type_script_index_0_lang.DvxQfSR4.js","/_astro/SignedInCSR.astro_astro_type_script_index_0_lang.De7q6qiy.js","/_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DH0AWjmS.js","/_astro/chart.Dyr_fmGO.js","/_astro/chunk-34IJLL6L.CFEclbM_.js","/_astro/chunk-BWZJPRGU.B86UttwQ.js","/_astro/chunk-DIHBIVJQ.C09auQGr.js","/_astro/client.BRABE5LV.js","/_astro/client.CHLTc0Tl.js","/_astro/index.C1sL86ns.js","/_astro/index.DnQl-8DU.js","/_astro/index.FkReswY5.js","/_astro/layout.Bw1Fq-45.js","/_astro/page.Rjq26VyU.js","/_astro/utils.JnRaa0S_.js","/_astro/astro_scripts/before-hydration.js.DdaeK5ia.js","/_astro/page.Rjq26VyU.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zYhBgU5vNFs2Q7LxuYS9Ob0glkWKDidWDXlffgxFRxk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
