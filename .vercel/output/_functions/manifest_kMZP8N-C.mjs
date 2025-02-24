import "kleur/colors";
import { f as decodeKey } from "./chunks/astro/server_BargQSUU.mjs";
import "clsx";
import "cookie";
import "./chunks/astro-designed-error-pages_D7PV1Hke.mjs";
import "es-module-lexer";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_BbYBxlGT.mjs";
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
const manifest = deserializeManifest({"hrefRoot":"file:///home/ferdi/vorrect/","cacheDir":"file:///home/ferdi/vorrect/node_modules/.astro/","outDir":"file:///home/ferdi/vorrect/dist/","srcDir":"file:///home/ferdi/vorrect/src/","publicDir":"file:///home/ferdi/vorrect/public/","buildClientDir":"file:///home/ferdi/vorrect/dist/client/","buildServerDir":"file:///home/ferdi/vorrect/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"auth/signin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/signin","isIndex":false,"type":"page","pattern":"^\\/auth\\/signin\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/signin.astro","pathname":"/auth/signin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"auth/signup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/signup","isIndex":false,"type":"page","pattern":"^\\/auth\\/signup\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/signup.astro","pathname":"/auth/signup","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BAlqGMZ-.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BAlqGMZ-.js"}],"styles":[{"type":"external","src":"/_astro/signin.YQB2iDeI.css"},{"type":"inline","content":"html,body{margin:0;padding:0;width:100%;height:100%}\n"},{"type":"external","src":"/_astro/uebungen.D2o9LvoN.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BAlqGMZ-.js"}],"styles":[{"type":"external","src":"/_astro/signin.YQB2iDeI.css"},{"type":"external","src":"/_astro/uebungen.D2o9LvoN.css"}],"routeData":{"route":"/uebungen","isIndex":false,"type":"page","pattern":"^\\/uebungen\\/?$","segments":[[{"content":"uebungen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uebungen.astro","pathname":"/uebungen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BAlqGMZ-.js"}],"styles":[{"type":"external","src":"/_astro/signin.YQB2iDeI.css"},{"type":"inline","content":"html,body{margin:0;padding:0;width:100%;height:100%}\n"},{"type":"external","src":"/_astro/uebungen.D2o9LvoN.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ferdi/vorrect/src/pages/uebungen.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/auth/signin.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/auth/signup.astro",{"propagation":"none","containsHead":true}],["/home/ferdi/vorrect/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/auth/signin@_@astro":"pages/auth/signin.astro.mjs","\u0000@astro-page:src/pages/auth/signup@_@astro":"pages/auth/signup.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/uebungen@_@astro":"pages/uebungen.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/ferdi/vorrect/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DyTjyRxl.mjs","\u0000@astrojs-manifest":"manifest_kMZP8N-C.mjs","/home/ferdi/vorrect/src/layouts/CreateLayout.astro?astro&type=script&index=0&lang.ts":"_astro/CreateLayout.astro_astro_type_script_index_0_lang.DK9vdMS-.js","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.UXbKxN6M.js","@/components/username":"_astro/username.DUyJ6_zC.js","@/components/nav-sidebar.tsx":"_astro/nav-sidebar.BT8a7Fn2.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts":"_astro/UserButtonMenuItems.astro_astro_type_script_index_0_lang.DjJJDhXb.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedInCSR.astro_astro_type_script_index_0_lang.7670pQel.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.Ba_n1HfH.js","/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/ProtectCSR.astro?astro&type=script&index=0&lang.ts":"_astro/ProtectCSR.astro_astro_type_script_index_0_lang.Df8mw_pq.js","astro:scripts/page.js":"_astro/page.BAlqGMZ-.js","\u0000astro:transitions/client":"_astro/client.CHLTc0Tl.js","/home/ferdi/vorrect/src/components/ExtraNav.tsx":"_astro/ExtraNav.BudBR2et.js","@astrojs/react/client.js":"_astro/client.BRABE5LV.js","@/app/layout":"_astro/layout.Bxb27tZe.js","@/components/chart":"_astro/chart.CHTPdwUT.js","@/components/funn-fact":"_astro/funn-fact.DRJ3R1vb.js"},"inlinedScripts":[["/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}}customElements.define(\"clerk-user-button-menu-items\",e);"]],"assets":["/_astro/signin.YQB2iDeI.css","/_astro/uebungen.D2o9LvoN.css","/favicon.svg","/learn-1.jpg","/ps-5.jpg","/silvester.jpg","/_astro/BaseClerkControlElement.B4mDCkdf.js","/_astro/CreateLayout.astro_astro_type_script_index_0_lang.DK9vdMS-.js","/_astro/ExtraNav.BudBR2et.js","/_astro/ProtectCSR.astro_astro_type_script_index_0_lang.Df8mw_pq.js","/_astro/SignedInCSR.astro_astro_type_script_index_0_lang.7670pQel.js","/_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.Ba_n1HfH.js","/_astro/chart.CHTPdwUT.js","/_astro/chunk-BWZJPRGU.BC2rkRlB.js","/_astro/chunk-DIHBIVJQ.C32ffZ6_.js","/_astro/client.BRABE5LV.js","/_astro/client.CHLTc0Tl.js","/_astro/funn-fact.DRJ3R1vb.js","/_astro/index.DVH-KiJ2.js","/_astro/index.DnQl-8DU.js","/_astro/index.FkReswY5.js","/_astro/index.RGxeCTNx.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/layout.Bxb27tZe.js","/_astro/nav-sidebar.BT8a7Fn2.js","/_astro/page.BAlqGMZ-.js","/_astro/username.DUyJ6_zC.js","/_astro/utils.BEHD0UYf.js","/_astro/astro_scripts/before-hydration.js.UXbKxN6M.js","/_astro/page.BAlqGMZ-.js","/auth/signin/index.html","/auth/signup/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"kPC89UMY2lnLgBrUxpCORnidApZt3Rt6uhpOk6jC6wA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
