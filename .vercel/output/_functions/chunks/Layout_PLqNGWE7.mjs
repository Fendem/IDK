import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate, a as createAstro, b as addAttribute, g as renderHead, h as renderSlot } from "./astro/server_BargQSUU.mjs";
import "kleur/colors";
import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, Bell, Search, BarChart, Book, Compass } from "lucide-react";
import { c as cn } from "./utils_H80jjgLf.mjs";
/* empty css                            */
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
/* empty css                          */
const funFacts = [
  "Schreiben gibt den Gedanken Struktur.",
  "Der erste Computer entwickelte sich aus Schreibmaschinen.",
  "Papier wurde ursprünglich aus Pflanzenfasern hergestellt.",
  "Kalligrafie ist die Kunst des schönen Schreibens.",
  "Handschrift verändert sich im Laufe des Lebens.",
  "Lesen stärkt das Gedächtnis und erweitert den Wortschatz.",
  "Bücher bieten den Schlüssel zu anderen Welten.",
  "Lesen steigert die Konzentration und Empathie.",
  "Lesen vor dem Schlafen hilft, den Geist zu beruhigen.",
  "Wer liest, verbessert seine analytischen Fähigkeiten."
];
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 100) + 100;
  const g = Math.floor(Math.random() * 100) + 150;
  const b = Math.floor(Math.random() * 100) + 240;
  return `rgb(${r}, ${g}, ${b})`;
};
const FunFact = ({ align = "left" }) => {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * funFacts.length));
  const [prevIndex, setPrevIndex] = useState(null);
  const [color, setColor] = useState(getRandomColor());
  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % funFacts.length);
      setTimeout(() => {
        setPrevIndex(null);
      }, 300);
    }, 4e3);
    setColor(getRandomColor());
    return () => clearTimeout(timer);
  }, [index]);
  const containerClasses = align === "center" ? "flex justify-center" : "";
  return /* @__PURE__ */ jsxs("div", { className: `relative h-10 text-lg font-medium  ${containerClasses}`, children: [
    prevIndex !== null && /* @__PURE__ */ jsx(FunFactItem, { text: funFacts[prevIndex], type: "exit", backgroundColor: color }, `exit-${prevIndex}`),
    /* @__PURE__ */ jsx(FunFactItem, { text: funFacts[index], type: "enter", backgroundColor: color }, `enter-${index}`)
  ] });
};
const FunFactItem = ({ text, type, backgroundColor, onAnimationEnd }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAnimate(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const baseClasses = "absolute transition-all duration-300 ease-in-out";
  let classes = "";
  if (type === "enter") {
    classes = animate ? `translate-y-0 opacity-100 rotate-0 px-2 mt-1 rounded-full shadow-sm` : `translate-y-full opacity-0 scale-50 rotate-0 mt-1 rounded-full shadow-sm`;
  } else {
    classes = animate ? `-translate-y-full opacity-0 scale-50 rotate-0 px-2 mt-1 rounded-full shadow-sm` : `translate-y-0 opacity-100 rotate-0 mt-1 rounded-full shadow-sm`;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${baseClasses} ${classes}`,
      style: { backgroundColor },
      onTransitionEnd: onAnimationEnd,
      children: text
    }
  );
};
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
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium hover:bg-gray-100 hover:shadow-md focus:bg-gray-100 focus:shadow-md duration-200 transition"
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
          className: "relative top-[1px] ml-1 h-3 w-3 group-data-[state=open]:rotate-180 transition",
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
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icons: Bell
    // Example icon
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
    icons: Search
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
    icons: BarChart
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content displayed one at a time.",
    icons: Book
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when hovered.",
    icons: Compass
  }
];
const small = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icons: Bell
    // Example icon
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
    icons: Search
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
    icons: BarChart
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
            className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-5px_5px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-6px_6px_0px] focus:-translate-y-1 active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 border border-transparent hover:border-black duration-200 transition",
            href: "/",
            children: [
              /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: " size-9 inline-block", viewBox: "0 0 512 512", children: [
                "hover:border-primary hover:shadow-md hover:shadow-primary",
                /* @__PURE__ */ jsx("path", { fill: "#3B9EFF", d: "M246 18.844c-2.157.02-4.292.068-6.406.156c-73.28 3.064-120.385 46.286-139.406 94.094c-11.706 29.42-12.328 60.463-1.813 84.78c10.515 24.32 31.522 42.552 66.906 47.845c18.85 2.818 37.402 5.89 55.314 9.5c59.88-25.15 71.217-72.16 86.625-115.19c7.735-21.602 16.277-42.437 33.874-56.655c12.758-10.31 29.792-16.212 52.47-16.563c-28.51-20.475-62.022-35.544-99.095-43.093c-17.22-3.507-33.372-5.024-48.47-4.876zm147.47 66.53c-19.04.243-31.413 5.12-40.626 12.564c-12.818 10.356-20.528 27.42-28.03 48.374c-13.216 36.904-26.567 85.154-75.752 115.282c42.035 10.47 78.926 24.997 105.188 47.5c21.364 18.306 35.342 42.586 37.406 72.75c1.54 22.492-3.3 47.973-15.25 77.187C477.462 385.23 506.27 291.847 488.844 209.75c-9.833-46.322-34.647-89.155-70.344-122.5c-9.447-1.382-17.738-1.968-25.03-1.875zm-308.376 15.44c-20.48 6.425-42.002 17.384-64.28 33.655l-.002 359.155h230.875c11.166-23.298 19.82-46.743 26.188-69.97c-34.545-1.148-67.374-12.59-94.563-31.06c-48.912-33.232-80.487-89.767-72.25-149.22c-13.442-10.208-23.455-23.32-29.843-38.094c-12.89-29.806-11.65-65.73 1.624-99.093c.717-1.802 1.46-3.587 2.25-5.374zm144.656 27.124c23.412 0 42.406 18.968 42.406 42.374s-18.994 42.375-42.406 42.375s-42.375-18.968-42.375-42.375c0-23.406 18.963-42.375 42.375-42.375zM128.78 254.125c-3.5 48.926 23.382 94.734 65.032 123.03c44.693 30.365 105.29 39.94 162.657 9.658a146 146 0 0 1-17.376-3.907c-13.214-17.616-20.057-42.566-18.688-63.187a70 70 0 0 1 1.5-10.533c-5.35-3.108-11.05-6.05-17.094-8.812c-1.66 5.77-2.648 11.858-3.062 18.094c-1.14 17.168 2.01 35.7 9.188 52.592c-35.888-20.445-55.414-55.432-58.22-88.875c-27.608-7.465-58.322-13.202-90.187-17.968c-12.5-1.87-23.76-5.332-33.75-10.095z" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mb-2 mt-4 text-lg font-medium", children: "shadcn/ui" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." })
            ]
          }
        ) }) }),
        small.map((small2) => /* @__PURE__ */ jsx(
          ListItem,
          {
            title: small2.title,
            href: small2.href,
            Icon: small2.icons,
            children: small2.description
          },
          small2.title
        ))
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Components" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-3 p-4 md:w-[70%] md:grid-cols-4 md:grid-rows-3 lg:w-[900px] ", children: [
        /* @__PURE__ */ jsx("li", { className: "row-span-2 col-span-2", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-5px_5px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-6px_6px_0px] focus:-translate-y-1 active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 border border-transparent hover:border-black duration-200 transition",
            href: "/",
            children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: " size-9 inline-block", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsx("path", { fill: "#3B9EFF", d: "M246 18.844c-2.157.02-4.292.068-6.406.156c-73.28 3.064-120.385 46.286-139.406 94.094c-11.706 29.42-12.328 60.463-1.813 84.78c10.515 24.32 31.522 42.552 66.906 47.845c18.85 2.818 37.402 5.89 55.314 9.5c59.88-25.15 71.217-72.16 86.625-115.19c7.735-21.602 16.277-42.437 33.874-56.655c12.758-10.31 29.792-16.212 52.47-16.563c-28.51-20.475-62.022-35.544-99.095-43.093c-17.22-3.507-33.372-5.024-48.47-4.876zm147.47 66.53c-19.04.243-31.413 5.12-40.626 12.564c-12.818 10.356-20.528 27.42-28.03 48.374c-13.216 36.904-26.567 85.154-75.752 115.282c42.035 10.47 78.926 24.997 105.188 47.5c21.364 18.306 35.342 42.586 37.406 72.75c1.54 22.492-3.3 47.973-15.25 77.187C477.462 385.23 506.27 291.847 488.844 209.75c-9.833-46.322-34.647-89.155-70.344-122.5c-9.447-1.382-17.738-1.968-25.03-1.875zm-308.376 15.44c-20.48 6.425-42.002 17.384-64.28 33.655l-.002 359.155h230.875c11.166-23.298 19.82-46.743 26.188-69.97c-34.545-1.148-67.374-12.59-94.563-31.06c-48.912-33.232-80.487-89.767-72.25-149.22c-13.442-10.208-23.455-23.32-29.843-38.094c-12.89-29.806-11.65-65.73 1.624-99.093c.717-1.802 1.46-3.587 2.25-5.374zm144.656 27.124c23.412 0 42.406 18.968 42.406 42.374s-18.994 42.375-42.406 42.375s-42.375-18.968-42.375-42.375c0-23.406 18.963-42.375 42.375-42.375zM128.78 254.125c-3.5 48.926 23.382 94.734 65.032 123.03c44.693 30.365 105.29 39.94 162.657 9.658a146 146 0 0 1-17.376-3.907c-13.214-17.616-20.057-42.566-18.688-63.187a70 70 0 0 1 1.5-10.533c-5.35-3.108-11.05-6.05-17.094-8.812c-1.66 5.77-2.648 11.858-3.062 18.094c-1.14 17.168 2.01 35.7 9.188 52.592c-35.888-20.445-55.414-55.432-58.22-88.875c-27.608-7.465-58.322-13.202-90.187-17.968c-12.5-1.87-23.76-5.332-33.75-10.095z" }) }),
              /* @__PURE__ */ jsx("div", { className: "mb-2 mt-4 text-lg font-medium", children: "shadcn/ui" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsx("li", { className: "row-span-2 col-span-2", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-5px_5px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-6px_6px_0px] focus:-translate-y-1 active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 border border-transparent hover:border-black duration-200 transition",
            href: "/",
            children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: " size-9 inline-block", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsx("path", { fill: "#3B9EFF", d: "M246 18.844c-2.157.02-4.292.068-6.406.156c-73.28 3.064-120.385 46.286-139.406 94.094c-11.706 29.42-12.328 60.463-1.813 84.78c10.515 24.32 31.522 42.552 66.906 47.845c18.85 2.818 37.402 5.89 55.314 9.5c59.88-25.15 71.217-72.16 86.625-115.19c7.735-21.602 16.277-42.437 33.874-56.655c12.758-10.31 29.792-16.212 52.47-16.563c-28.51-20.475-62.022-35.544-99.095-43.093c-17.22-3.507-33.372-5.024-48.47-4.876zm147.47 66.53c-19.04.243-31.413 5.12-40.626 12.564c-12.818 10.356-20.528 27.42-28.03 48.374c-13.216 36.904-26.567 85.154-75.752 115.282c42.035 10.47 78.926 24.997 105.188 47.5c21.364 18.306 35.342 42.586 37.406 72.75c1.54 22.492-3.3 47.973-15.25 77.187C477.462 385.23 506.27 291.847 488.844 209.75c-9.833-46.322-34.647-89.155-70.344-122.5c-9.447-1.382-17.738-1.968-25.03-1.875zm-308.376 15.44c-20.48 6.425-42.002 17.384-64.28 33.655l-.002 359.155h230.875c11.166-23.298 19.82-46.743 26.188-69.97c-34.545-1.148-67.374-12.59-94.563-31.06c-48.912-33.232-80.487-89.767-72.25-149.22c-13.442-10.208-23.455-23.32-29.843-38.094c-12.89-29.806-11.65-65.73 1.624-99.093c.717-1.802 1.46-3.587 2.25-5.374zm144.656 27.124c23.412 0 42.406 18.968 42.406 42.374s-18.994 42.375-42.406 42.375s-42.375-18.968-42.375-42.375c0-23.406 18.963-42.375 42.375-42.375zM128.78 254.125c-3.5 48.926 23.382 94.734 65.032 123.03c44.693 30.365 105.29 39.94 162.657 9.658a146 146 0 0 1-17.376-3.907c-13.214-17.616-20.057-42.566-18.688-63.187a70 70 0 0 1 1.5-10.533c-5.35-3.108-11.05-6.05-17.094-8.812c-1.66 5.77-2.648 11.858-3.062 18.094c-1.14 17.168 2.01 35.7 9.188 52.592c-35.888-20.445-55.414-55.432-58.22-88.875c-27.608-7.465-58.322-13.202-90.187-17.968c-12.5-1.87-23.76-5.332-33.75-10.095z" }) }),
              /* @__PURE__ */ jsx("div", { className: "mb-2 mt-4 text-lg font-medium", children: "shadcn/ui" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." })
            ]
          }
        ) }) }),
        components.map((component) => /* @__PURE__ */ jsx(
          ListItem,
          {
            title: component.title,
            href: component.href,
            Icon: component.icons,
            children: component.description
          },
          component.title
        )),
        /* @__PURE__ */ jsx("li", { className: "col-span-3 w-full", children: /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(FunFact, { align: "left" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx("a", { href: "/uebungen", children: /* @__PURE__ */ jsx(NavigationMenuLink, { className: navigationMenuTriggerStyle(), children: "Documentation" }) }) })
  ] }) });
}
const ListItem = React.forwardRef(({ className, title, Icon, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      ref,
      className: cn(
        "block select-none space-y-1 p-3 leading-none no-underline outline-none border border-transparent hover:border-black [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-5px_5px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-6px_6px_0px] focus:-translate-y-1 focus:border-black active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 rounded-md   transition duration-200",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium leading-none", children: [
          /* @__PURE__ */ jsx(Icon, { className: "size-4 inline-block mr-1" }),
          " ",
          title
        ] }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children })
      ]
    }
  ) }) });
});
ListItem.displayName = "ListItem";
function NavSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "text-4xl text-dark mb-1 hover:bg-gray-200 rounded-md px-1",
        children: "☰"
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 h-screen z-40",
        onClick: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-5 transform transition-transform duration-300 ease-in-out z-50 h-screen ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(false),
              className: "absolute top-4 right-4 text-white",
              children: "✖"
            }
          ),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mt-10", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "block p-2 text-lg hover:bg-gray-700 rounded", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", className: "block p-2 text-lg hover:bg-gray-700 rounded", children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services", className: "block p-2 text-lg hover:bg-gray-700 rounded", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "block p-2 text-lg hover:bg-gray-700 rounded", children: "Contact" }) })
          ] }) })
        ]
      }
    )
  ] });
}
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Top" class=" bg-white mx-auto px-4 sm:px-4  lg:px-8 top-0 left-1/2 transform fixed -translate-x-1/2 w-full z-50"> <div class=""> <div class="flex h-16 items-center"> <div class="ml-2 md:ml-4 flex lg:ml-0 mt-6"> <a href="/"> <span class="text-5xl text-dark funn rounded-md hidden md:inline-block">SchreibRecht</span> <svg xmlns="http://www.w3.org/2000/svg" class="inline-block size-10 text-primary brightness-90 mb-8 md:mb-6 md:ml-2" viewBox="0 0 512 512"> <path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96M233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05c43.66 2.29 131.99 10.68 193.04 41.43c9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46m248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05c-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9c61.04-30.72 149.32-39.11 192.97-41.4c14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09"></path> </svg> </a> </div> <div class="mx-auto mt-4 hidden xl:flex"> ${renderComponent($$result, "ExtraNav", ExtraNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ferdi/vorrect/src/components/ExtraNav.tsx", "client:component-export": "ExtraNav" })} </div> <div class="ml-auto flex justify-between"> <a href="/auth/signup" class="px-4 py-2 bg-primary border border-black rounded-md font-bold [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-3px_3px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-3px_3px_0px] focus:-translate-y-1 active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 duration-200 transition">Sign Up</a> </div> <div class="ml-5 flex justify-between"> <a href="/auth/signin" class="px-4 py-2 bg-white border border-black rounded-md font-bold [box-shadow:rgb(000,_000,000)0px_0px_0px] hover:[box-shadow:rgb(000,_000,000)-3px_3px_0px] hover:-translate-y-1 focus:[box-shadow:rgb(000,_000,000)-3px_3px_0px] focus:-translate-y-1 active:[box-shadow:rgb(000,_000,000)0px_0px_0px] active:translate-y-0 duration-200 transition">Sign In</a> </div> <div class="ml-5 flex xl:hidden"> ${renderComponent($$result, "NavSidebar", NavSidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/nav-sidebar.tsx", "client:component-export": "NavSidebar" })} </div> </div> </div> </nav>`;
}, "/home/ferdi/vorrect/src/components/Nav.astro", void 0);
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-sckkx6r4": true })} <div class="" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/home/ferdi/vorrect/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $,
  FunFact as F
};
