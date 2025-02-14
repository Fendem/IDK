import { c as createComponent, b as createAstro, r as renderTemplate, a as renderComponent, f as renderScript, h as renderSlot, n as defineScriptVars, u as unescapeHTML, F as Fragment, m as maybeRenderHead, e as addAttribute, g as renderHead } from "./astro/server_CQ7_pCDq.mjs";
import "kleur/colors";
import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "./utils_H80jjgLf.mjs";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
/* empty css                         */
import "clsx";
import { g as generateSafeId } from "./chunk-DIHBIVJQ_2T0VBfgX.mjs";
/* empty css                            */
import * as RechartsPrimitive from "recharts";
import { AreaChart, Area } from "recharts";
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];
function ExtraNav() {
  return /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Getting started" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ jsx("li", { className: "row-span-3", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
            href: "/",
            children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: " size-9 inline-block", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsx("path", { fill: "#3B9EFF", d: "M246 18.844c-2.157.02-4.292.068-6.406.156c-73.28 3.064-120.385 46.286-139.406 94.094c-11.706 29.42-12.328 60.463-1.813 84.78c10.515 24.32 31.522 42.552 66.906 47.845c18.85 2.818 37.402 5.89 55.314 9.5c59.88-25.15 71.217-72.16 86.625-115.19c7.735-21.602 16.277-42.437 33.874-56.655c12.758-10.31 29.792-16.212 52.47-16.563c-28.51-20.475-62.022-35.544-99.095-43.093c-17.22-3.507-33.372-5.024-48.47-4.876zm147.47 66.53c-19.04.243-31.413 5.12-40.626 12.564c-12.818 10.356-20.528 27.42-28.03 48.374c-13.216 36.904-26.567 85.154-75.752 115.282c42.035 10.47 78.926 24.997 105.188 47.5c21.364 18.306 35.342 42.586 37.406 72.75c1.54 22.492-3.3 47.973-15.25 77.187C477.462 385.23 506.27 291.847 488.844 209.75c-9.833-46.322-34.647-89.155-70.344-122.5c-9.447-1.382-17.738-1.968-25.03-1.875zm-308.376 15.44c-20.48 6.425-42.002 17.384-64.28 33.655l-.002 359.155h230.875c11.166-23.298 19.82-46.743 26.188-69.97c-34.545-1.148-67.374-12.59-94.563-31.06c-48.912-33.232-80.487-89.767-72.25-149.22c-13.442-10.208-23.455-23.32-29.843-38.094c-12.89-29.806-11.65-65.73 1.624-99.093c.717-1.802 1.46-3.587 2.25-5.374zm144.656 27.124c23.412 0 42.406 18.968 42.406 42.374s-18.994 42.375-42.406 42.375s-42.375-18.968-42.375-42.375c0-23.406 18.963-42.375 42.375-42.375zM128.78 254.125c-3.5 48.926 23.382 94.734 65.032 123.03c44.693 30.365 105.29 39.94 162.657 9.658a146 146 0 0 1-17.376-3.907c-13.214-17.616-20.057-42.566-18.688-63.187a70 70 0 0 1 1.5-10.533c-5.35-3.108-11.05-6.05-17.094-8.812c-1.66 5.77-2.648 11.858-3.062 18.094c-1.14 17.168 2.01 35.7 9.188 52.592c-35.888-20.445-55.414-55.432-58.22-88.875c-27.608-7.465-58.322-13.202-90.187-17.968c-12.5-1.87-23.76-5.332-33.75-10.095z" }) }),
              /* @__PURE__ */ jsx("div", { className: "mb-2 mt-4 text-lg font-medium", children: "shadcn/ui" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs", title: "Introduction", children: "Re-usable components built using Radix UI and Tailwind CSS." }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/installation", title: "Installation", children: "How to install dependencies and structure your app." }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/primitives/typography", title: "Typography", children: "Styles for headings, paragraphs, lists...etc" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Components" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ", children: components.map((component) => /* @__PURE__ */ jsx(
        ListItem,
        {
          title: component.title,
          href: component.href,
          children: component.description
        },
        component.title
      )) }) })
    ] }),
    /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx("a", { href: "/uebungen", children: /* @__PURE__ */ jsx(NavigationMenuLink, { className: navigationMenuTriggerStyle(), children: "Documentation" }) }) })
  ] }) });
}
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      ref,
      className: cn(
        "block select-none space-y-1 p-3 leading-none no-underline outline-none hover:border-2 border-2 border-transparent [box-shadow:rgb(000,_000,000)0px_0px] hover:[box-shadow:rgb(000,_000,_000)_-3px_3px] hover:border-black rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-all duration-150",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-none", children: title }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children })
      ]
    }
  ) }) });
});
ListItem.displayName = "ListItem";
const $$Astro$f = createAstro();
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$e = createAstro();
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$d = createAstro();
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$c = createAstro();
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$b = createAstro();
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro$a = createAstro();
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
function addUnstyledAttributeToFirstTag(html, attributeValue) {
  return html.replace(/(<[^>]+)>/, `$1 data-clerk-unstyled-id="${attributeValue}">`);
}
var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$9 = createAstro();
const $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SignInButton;
  const safeId = generateSafeId();
  if ("as" in Astro2.props) ;
  const {
    as: Tag = "button",
    asChild,
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl,
    mode,
    ...elementProps
  } = Astro2.props;
  const signInOptions = {
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", "<script>(function(){", '\n  const btn = document.querySelector(`[data-clerk-unstyled-id="${safeId}"]`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'], ["", "<script>(function(){", '\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id="\\${safeId}"]\\`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${renderComponent($$result, "Tag", Tag, { ...elementProps, "data-clerk-unstyled-id": safeId }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<span class="rounded-md  group flex flex-row items-center border-2 border-black bg-white px-6 py-2 font-bold tracking-wider hover:scale-105 duration-300 transition"><p class="font-bold text-lg">${renderSlot($$result2, $$slots["default"], renderTemplate`Sign In`)}</p></span>` })}`, defineScriptVars({ signInOptions, mode, safeId }));
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$8 = createAstro();
const $$SignUpButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SignUpButton;
  const safeId = generateSafeId();
  if ("as" in Astro2.props) ;
  const {
    as: Tag = "button",
    asChild,
    fallbackRedirectUrl,
    forceRedirectUrl,
    signInFallbackRedirectUrl,
    signInForceRedirectUrl,
    mode,
    unsafeMetadata,
    ...elementProps
  } = Astro2.props;
  const signUpOptions = {
    fallbackRedirectUrl,
    forceRedirectUrl,
    signInFallbackRedirectUrl,
    signInForceRedirectUrl,
    unsafeMetadata
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<script>(function(){", '\n  const btn = document.querySelector(`[data-clerk-unstyled-id="${safeId}"]`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignUp(signUpOptions);\n    }\n\n    return clerk.redirectToSignUp({\n      ...signUpOptions,\n      signUpFallbackRedirectUrl: signUpOptions.fallbackRedirectUrl,\n      signUpForceRedirectUrl: signUpOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'], ["", "<script>(function(){", '\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id="\\${safeId}"]\\`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignUp(signUpOptions);\n    }\n\n    return clerk.redirectToSignUp({\n      ...signUpOptions,\n      signUpFallbackRedirectUrl: signUpOptions.fallbackRedirectUrl,\n      signUpForceRedirectUrl: signUpOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${renderComponent($$result, "Tag", Tag, { ...elementProps, "data-clerk-unstyled-id": safeId }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<span class="rounded-md  group flex flex-row items-center border-2 border-black bg-primary px-6 py-2 font-bold tracking-wider hover:[box-shadow:rgb(000,_000,000)0px_5px_5px] duration-300 transition"><p class="font-bold text-lg">${renderSlot($$result2, $$slots["default"], renderTemplate`Sign Up`)}</p></span>` })}`, defineScriptVars({ signUpOptions, mode, safeId }));
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/unstyled/SignUpButton.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro();
const $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InternalUIComponentRenderer;
  const { component, id, ...props } = Astro2.props;
  const safeId = id || generateSafeId();
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by `mountAllClerkAstroJSComponents`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: `clerk-${component}-${safeId}`,\n    props,\n  });\n})();<\/script>"], ["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by \\`mountAllClerkAstroJSComponents\\`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: \\`clerk-\\${component}-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id"), defineScriptVars({ props, component, safeId }));
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
const $$Astro$6 = createAstro();
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the `<UserButton.MenuItems>` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"], ["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the \\`<UserButton.MenuItems>\\` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$Astro$4 = createAstro();
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$Astro$3 = createAstro();
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"], ["<script>(function(){", "\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "/home/ferdi/vorrect/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=""> <header class="bg-primary"> <nav aria-label="Top" class=" bg-white mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50"> <div class=""> <div class="flex h-16 items-center"> <button type="button" class="bg-white p-2 text-dark lg:hidden"> <span class=""></span> <span class="sr-only">Open menu</span> </button> <div class=" ml-4 flex lg:ml-0 mt-4"> <a href="/"> <span class="text-5xl text-dark funn rounded-md">SchreibRecht</span> <svg xmlns="http://www.w3.org/2000/svg" class=" size-16 inline-block mb-5" width="72" height="72" viewBox="0 0 72 72"><path fill="#1E90FF" d="M31.698 20.781a7.31 7.31 0 0 1-3.046-5.895a7.563 7.563 0 0 1 7.695-7.425a7.733 7.733 0 0 1 7.689 7.114c.176 3.133.005 6.318.005 9.455v1.706c1.5 1.79 4.019 5.406 5.92 15.99c.4 2.226 4.429 12.2 4.735 15.99c-.79.38-1.579 1.903-2.368 2.284c-.412-1.702-4.869-12.125-7.103-13.706a8.5 8.5 0 0 0-2.367-1.142c-2.108-.71-3.903-1.317-5.43-1.89a6.05 6.05 0 0 1-2.857.748c-4.577 0-8.287-5.37-8.287-11.993c0-5.158 2.256-9.543 5.414-11.236"></path><path fill="#f1b31c" d="m27.824 16.864l-.003-.014l1.736 2.218a3.47 3.47 0 0 1-5.338-.749Z"></path><path fill="#1E90FF" d="M29.802 32.588c-.011-3.585 1.62-7.117 5.183-8.583a7.2 7.2 0 0 1 5.507-.004c2.973 1.276 4.603 4.463 5.713 7.502a67 67 0 0 1 2.61 9.38c.264 1.276.436 2.577.645 3.863c.16.982 1.122 3.675.745 4.595c-.55 1.342-5.791-.475-6.967-.941a25.5 25.5 0 0 1-6.906-4.2a19.45 19.45 0 0 1-5.6-7.05a11.8 11.8 0 0 1-.93-4.562"></path><path fill="#1E90FF" d="M30.962 27.695c-.003.109-.018.216-.018.325a11.8 11.8 0 0 0 .931 4.56a19.45 19.45 0 0 0 5.599 7.052a25.5 25.5 0 0 0 6.906 4.199a23.8 23.8 0 0 0 5.183 1.393c.29 1.193.969 3.32.642 4.116c-.55 1.342-5.791-.475-6.967-.94a25.5 25.5 0 0 1-6.906-4.2a19.45 19.45 0 0 1-5.6-7.05a11.8 11.8 0 0 1-.93-4.562a10.4 10.4 0 0 1 1.16-4.893"></path><path fill="#fcea2b" d="M28.725 10.919a7.3 7.3 0 0 0-.877 5.945l-4.768 1.915a7.5 7.5 0 0 1-.08-1.038a6.646 6.646 0 0 1 5.725-6.822"></path><path fill="#fff" d="M31 10c-.125-.018-.273-.02-.408-.031a7.216 7.216 0 0 0 1.105 10.812c-.087.047-.171.103-.257.154A8.13 8.13 0 0 0 37 18a6.6 6.6 0 0 0 1-2c-.376-.783-2.664-5.37-7-6"></path><g fill="none" stroke="#000" stroke-width="2"><path stroke-miterlimit="10" d="M29.802 32.588c-.011-3.585 1.62-7.117 5.183-8.583a7.2 7.2 0 0 1 5.507-.004c2.973 1.276 4.603 4.463 5.713 7.502a67 67 0 0 1 2.61 9.38c.264 1.276.436 2.577.645 3.863c.16.982 1.122 3.675.745 4.595c-.55 1.342-5.791-.475-6.967-.941a25.5 25.5 0 0 1-6.906-4.2a19.45 19.45 0 0 1-5.6-7.05a11.8 11.8 0 0 1-.93-4.562Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="m27.848 16.864l-4.768 1.915a7.5 7.5 0 0 1-.08-1.038a6.646 6.646 0 0 1 5.725-6.822m24.044 42.502a25 25 0 0 1 .927 4.295c-.762.38-1.523 1.903-2.285 2.284a50 50 0 0 0-2.282-5.829c-.723-1.623-1.649-2.755-2.433-4.171"></path><path stroke-linecap="round" stroke-linejoin="round" d="M29.558 19.068a3.47 3.47 0 0 1-5.34-.749M34.696 45v7m22.391 0H61m-48 .172h29.989"></path><path stroke-linecap="round" stroke-linejoin="round" d="M34.28 44.01c-4.416 0-7.996-5.37-7.996-11.992c0-5.16 2.176-9.544 5.223-11.237a7.41 7.41 0 0 1 4.485-13.32a7.577 7.577 0 0 1 7.419 7.114c.12 2.217.073 4.46.035 6.695c-.015.922-.03 1.843-.03 2.76v1.706"></path><path stroke-linecap="round" stroke-linejoin="round" d="M31.697 20.781c-.087.047-.171.103-.257.154A8.13 8.13 0 0 0 37 18a6.6 6.6 0 0 0 1-2c-.376-.783-2.664-5.37-7-6c-.125-.018-.273-.02-.408-.031M40.696 48v4"></path></g></svg> </a> </div> <div class="mx-auto"> ${renderComponent($$result, "ExtraNav", ExtraNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ferdi/vorrect/src/components/ExtraNav.tsx", "client:component-export": "ExtraNav" })} </div> <div class="ml-auto flex justify-between"> ${renderComponent($$result, "SignedOut", $$SignedOut, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignUpButton", $$SignUpButton, { "mode": "modal" })} ` })} ${renderComponent($$result, "SignedIn", $$SignedIn, {}, { "default": ($$result2) => renderTemplate` <span></span> ` })} </div> <div class="flow-root"> <div class="ml-5"> ${renderComponent($$result, "SignedOut", $$SignedOut, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignInButton", $$SignInButton, { "mode": "modal" })} ` })} ${renderComponent($$result, "SignedIn", $$SignedIn, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserButton", UserButton, {})} ` })} </div> </div> </div> </div> </nav> </header> </div>`;
}, "/home/ferdi/vorrect/src/components/Nav.astro", void 0);
const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/ferdi/vorrect/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ferdi/vorrect/node_modules/astro/components/ClientRouter.astro", void 0);
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-sckkx6r4": true })} <div class="" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/home/ferdi/vorrect/src/layouts/Layout.astro", void 0);
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-black",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 border-1", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight text-black",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-black/80", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-video justify-center text-xs bottom-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltipContent = React.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 px-2.5 py-1.5 text-xs bg-white rounded-md border border-black",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex w-full flex-wrap items-stretch gap-2",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "font-mono font-medium", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegendContent = React.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        ),
        children: payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1.5"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0",
                    style: {
                      backgroundColor: item.color
                    }
                  }
                ),
                itemConfig?.label
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const initialChartData = [
  { date: "2024-04-16", Lesen: 138, Schreiben: 190 },
  { date: "2024-04-17", Lesen: 446, Schreiben: 360 },
  { date: "2024-04-18", Lesen: 364, Schreiben: 410 },
  { date: "2024-04-19", Lesen: 243, Schreiben: 180 },
  { date: "2024-04-20", Lesen: 89, Schreiben: 150 },
  { date: "2024-04-18", Lesen: 364, Schreiben: 410 }
];
const chartConfig = {
  visitors: {
    label: "Visitors"
  },
  Lesen: {
    label: "Lesen",
    color: "hsl(var(--chart-1))"
  },
  Schreiben: {
    label: "Schreiben",
    color: "hsl(var(--chart-4))"
  }
};
function MyChart() {
  const [chartData, setChartData] = React.useState(initialChartData);
  const [timeRange, setTimeRange] = React.useState("90d");
  React.useEffect(() => {
    const interval = setInterval(() => {
      setChartData(
        (prevData) => prevData.map((item) => ({
          ...item,
          Lesen: item.Lesen = Math.random() * 500 + 100 + 10,
          Schreiben: item.Schreiben = Math.random() * 500 + 100 + 10
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = /* @__PURE__ */ new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return /* @__PURE__ */ jsx(
    ChartContainer,
    {
      config: chartConfig,
      className: "aspect-auto h-[400px] w-full p-0 m-0",
      children: /* @__PURE__ */ jsxs(AreaChart, { data: filteredData, children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "fillLesen", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "5%",
                stopColor: "var(--color-Lesen)",
                stopOpacity: 1
              }
            ),
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Lesen)",
                stopOpacity: 1
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: "fillSchreiben", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Schreiben)",
                stopOpacity: 1
              }
            ),
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Schreiben)",
                stopOpacity: 1
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Area,
          {
            dataKey: "Schreiben",
            type: "natural",
            fill: "url(#fillSchreiben)",
            stroke: "var(--color-Schreiben)",
            stackId: "a"
          }
        ),
        /* @__PURE__ */ jsx(
          Area,
          {
            dataKey: "Lesen",
            type: "natural",
            fill: "url(#fillLesen)",
            stroke: "var(--color-Lesen)",
            stackId: "a"
          }
        )
      ] })
    }
  );
}
export {
  $$Layout as $,
  MyChart as M
};
