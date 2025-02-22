import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate, a as createAstro, b as addAttribute, g as renderScript, h as renderHead, i as renderSlot } from "./astro/server_BS_EwGH5.mjs";
import "kleur/colors";
import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { c as cn, b as blue_parrot } from "./blue-parrot-logo_lrnY5FNr.mjs";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
/* empty css                          */
import { $ as $$Image } from "./_astro_assets_4kGxcgds.mjs";
/* empty css                            */
import "clsx";
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
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=""> <header class="bg-primary"> <nav aria-label="Top" class=" bg-white mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50"> <div class=""> <div class="flex h-16 items-center"> <button type="button" class="bg-white p-2 text-dark lg:hidden"> <span class=""></span> <span class="sr-only">Open menu</span> </button> <div class=" ml-4 flex lg:ml-0 mt-6"> <a href="/"> <span class="text-5xl text-dark funn rounded-md">SchreibRecht</span> ${renderComponent($$result, "Image", $$Image, { "src": blue_parrot, "alt": "parrot", "class": "size-16 inline-block mb-5" })} </a> </div> <div class="mx-auto mt-4"> ${renderComponent($$result, "ExtraNav", ExtraNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ferdi/vorrect/src/components/ExtraNav.tsx", "client:component-export": "ExtraNav" })} </div> <div class="ml-auto flex justify-between"> <a href="/auth/signup" class="px-4 py-2 bg-primary border border-black rounded-md font-bold hover:shadow-md transition-all">SignUp</a> </div> <div class="flow-root"> <div class="ml-5"> <a href="/auth/signin" class="px-4 py-2 bg-white border border-black rounded-md font-bold hover:shadow-md transition-all">SignIn</a> </div> </div> </div> </div> </nav> </header> </div>`;
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
export {
  $$Layout as $
};
