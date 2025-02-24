/* empty css                                  */
import { c as createComponent, a as createAstro, b as addAttribute, i as renderScript, g as renderHead, h as renderSlot, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from "../chunks/astro/server_BargQSUU.mjs";
import "kleur/colors";
import { jsx, jsxs } from "react/jsx-runtime";
/* empty css                                    */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { c as cn } from "../chunks/utils_H80jjgLf.mjs";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X, ChevronRight, Check, Circle, Briefcase, ChevronDown, Book, Pen, Award, Compass, BarChart, Users, Bell, Settings } from "lucide-react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useStore } from "@nanostores/react";
import { deriveState } from "@clerk/shared/deriveState";
import { eventMethodCalled } from "@clerk/shared/telemetry";
import { computed, batched, map, atom, onMount } from "nanostores";
import { ClerkProvider, UserButton } from "@clerk/clerk-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import "clsx";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { renderers } from "../renderers.mjs";
var $csrState = map({
  isLoaded: false,
  client: void 0,
  user: void 0,
  session: void 0,
  organization: void 0
});
var $initialState = map();
var $clerk = atom(null);
computed([$csrState], (state) => state.isLoaded);
var $authStore = batched([$csrState, $initialState], (state, initialState) => {
  return deriveState(
    state.isLoaded,
    {
      session: state.session,
      user: state.user,
      organization: state.organization,
      client: state.client
    },
    initialState
  );
});
var $userStore = computed([$authStore], (auth) => auth.user);
computed([$authStore], (auth) => auth.session);
var $organizationStore = computed([$authStore], (auth) => auth.organization);
var $clientStore = computed([$csrState], (csr) => csr.client);
computed([$clerk], (clerk) => clerk);
computed([$clientStore], (client) => client?.sessions);
var $signInStore = computed([$clientStore], (client) => client?.signIn);
var $signUpStore = computed([$clientStore], (client) => client?.signUp);
var recordTelemetryEvent = (store, method) => {
  onMount(store, () => {
    $clerk.get()?.telemetry?.record(eventMethodCalled(method));
  });
};
recordTelemetryEvent($signInStore, "$signInStore");
recordTelemetryEvent($signUpStore, "$signUpStore");
recordTelemetryEvent($organizationStore, "$organizationStore");
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none group-data-[collapsible=icon]:hover:rounded-full [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border",
        ghost: "text-black/60 hover:text-black",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = -5, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    side: "right",
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border border-black text-black bg-popover px-3 py-1.5 text-sm shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-left-1 data-[side=left]:slide-in-from-right-3 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-left-10",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "s";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = React.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar$1 = React.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-black ",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsx(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-[--sidebar-width] bg-sidebar p-0 text-black [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        }
      ) });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "group peer block text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                " relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                " fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+10px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-xl group-data-[variant=floating]:border group-data-[variant=floating]:border-black/30 group-data-[variant=floating]:",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar$1.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { open, toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "sm",
      className: cn("h-10 w-10", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: open ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", children: [
        /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M9 3v18m7-6l-3-3l3-3" })
      ] }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", children: [
        /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M9 3v18m5-12l3 3l-3 3" })
      ] }) })
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-3",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-3",
        className
      ),
      ...props
    }
  );
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden group-data-[collapsible=icon]:jusitfy-center",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        " flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium group-hover:text-blue-700 outline-none ring-sidebar-ring  focus-visible:ring-2 group-data-[collapsible=icon]:size-7 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-6 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1 text-center", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative text-black", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-white hover:text-sidebar-accent-foreground hover:text-blue-600 hover:bg-gray-100 hover:shadow-none hover:shadow-black/30 transition-all duration-150",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))] "
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = React.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-gray-500 hover:shadow-md focus:bg-gray-100 focus:shadow-md duration-200 transition [&>svg]:size-4 [&>svg]:shrink-0 ",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100  group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("rounded-md h-8 flex gap-2 px-2 items-center", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-8 w-8 shrink-0 overflow-hidden rounded-full aspect-square",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full rounded-full justify-center items-center bg-muted font-bold",
      // <-- Hier `items-center` hinzugefügt
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/60 text-primary-foreground hover:bg-primary/40 ring-2 ring-primary",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      " flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-10 [&_svg]:shrink-0",
      inset && "pl-9",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const uebungen = [
  {
    title: "Lesen",
    url: "#",
    icon: Book
  },
  {
    title: "Schreiben",
    url: "#",
    icon: Pen
  }
];
const schubfach = [
  {
    title: "Efolge",
    url: "#",
    icon: Award
  },
  {
    title: "Verlauf",
    url: "#",
    icon: Compass
  }
];
const items = [
  {
    title: "Rangliste",
    url: "#",
    icon: BarChart
  },
  {
    title: "Freunde",
    url: "#",
    icon: Users
  },
  {
    title: "Notificationen",
    url: "Bell",
    icon: Bell
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings
  }
];
function AppSidebar() {
  const currentUser = useStore($userStore);
  if (currentUser === void 0) {
    return /* @__PURE__ */ jsxs("div", { className: "flex h-screen justify-center items-center", children: [
      "Its Loading ",
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(45 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.125s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(90 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.25s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(135 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.375s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(180 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.5s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(225 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.625s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(270 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.75s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "0", fill: "#000", transform: "rotate(315 12 12)", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", begin: "0.875s", calcMode: "spline", dur: "1s", keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8", repeatCount: "indefinite", values: "0;2;0;0" }) })
      ] })
    ] });
  }
  if (currentUser === null) {
    return /* @__PURE__ */ jsx("div", { children: "Not signed in" });
  }
  return /* @__PURE__ */ jsxs(Sidebar$1, { variant: "floating", collapsible: "icon", children: [
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Dein Schubfach" }),
        /* @__PURE__ */ jsxs(Collapsible, { defaultOpen: true, className: "group/collapsible", children: [
          /* @__PURE__ */ jsxs(TooltipProvider, { delayDuration: 100, children: [
            " ",
            /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
              " ",
              /* @__PURE__ */ jsx(TooltipTrigger, { className: "", children: /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "#", className: "mx-auto hover:text-primary", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "" }),
                /* @__PURE__ */ jsx("span", { className: "text-md", children: "Übung" }),
                /* @__PURE__ */ jsx(ChevronDown, { className: " ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" })
              ] }) }) }) }),
              /* @__PURE__ */ jsxs(TooltipContent, { className: "group-data-[collapsible=icon]:flex hidden", side: "right", align: "center", children: [
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-md funn", children: [
                  "Übugen ",
                  /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 mb-1 inline-block ml-auto transition-transform group-data-[state=open]/collapsible:mt-1 group-data-[state=open]/collapsible:rotate-180" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsxs(TooltipProvider, { delayDuration: 100, children: [
            " ",
            /* @__PURE__ */ jsx(SidebarMenu, { children: uebungen.map((item) => /* @__PURE__ */ jsxs(Tooltip, { children: [
              " ",
              /* @__PURE__ */ jsx(TooltipTrigger, { className: "", children: /* @__PURE__ */ jsx(SidebarMenuItem, { className: "", children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, className: "pl-4", children: /* @__PURE__ */ jsxs("a", { href: item.url, className: "mx-auto", children: [
                /* @__PURE__ */ jsx(item.icon, { className: "text-black" }),
                /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title })
              ] }) }) }) }),
              /* @__PURE__ */ jsxs(TooltipContent, { className: "group-data-[collapsible=icon]:flex hidden", side: "right", align: "center", children: [
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title })
              ] })
            ] }, item.title)) })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxs(TooltipProvider, { delayDuration: 100, children: [
          " ",
          /* @__PURE__ */ jsx(SidebarMenu, { children: schubfach.map((item) => /* @__PURE__ */ jsxs(Tooltip, { children: [
            " ",
            /* @__PURE__ */ jsx(TooltipTrigger, { className: "", children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs("a", { href: item.url, className: "mx-auto", children: [
              /* @__PURE__ */ jsx(item.icon, { className: "" }),
              /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title })
            ] }) }) }) }),
            /* @__PURE__ */ jsxs(TooltipContent, { className: "group-data-[collapsible=icon]:flex hidden", side: "right", align: "center", children: [
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title })
            ] })
          ] }, item.title)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Allgemines" }),
        /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 100, children: /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs("a", { href: item.url, className: "mx-auto", children: [
            /* @__PURE__ */ jsx(item.icon, { className: "" }),
            /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title })
          ] }) }) }) }),
          /* @__PURE__ */ jsx(TooltipContent, { className: "group-data-[collapsible=icon]:flex hidden", side: "right", align: "center", children: /* @__PURE__ */ jsx("span", { className: "text-md", children: item.title }) })
        ] }, item.title)) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxs(SidebarMenuButton, { size: "lg", className: "relative flex items-center overflow-visible mx-auto", children: [
        /* @__PURE__ */ jsx(ClerkProvider, { publishableKey: "pk_test_Zml0LXNraW5rLTk2LmNsZXJrLmFjY291bnRzLmRldiQ", afterSignOutUrl: "/", children: /* @__PURE__ */ jsx(UserButton, {}) }),
        /* @__PURE__ */ jsx("div", { className: "font-bold group-hover:text-blue-600 transition-all flex justify-between w-full", children: /* @__PURE__ */ jsx("div", { className: "text-center group-data-[collapsible=icon]:hidden", children: currentUser?.username }) })
      ] }),
      /* @__PURE__ */ jsxs(
        DropdownMenuContent,
        {
          side: "top",
          className: "w-[--radix-popper-anchor-width] mb-1",
          children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx("span", {}) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx("span", { children: "Billing" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx("span", { children: "Sign out" }) })
          ]
        }
      )
    ] }) }) }) })
  ] });
}
function Sidebar({ children }) {
  const currentUser = useStore($userStore);
  if (currentUser === void 0) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-screen justify-center items-center text-4xl font-bold main", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "size-10 inline-block", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z", opacity: "0.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z", children: /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", dur: "1s", from: "0 12 12", repeatCount: "indefinite", to: "360 12 12", type: "rotate" }) })
    ] }) });
  }
  if (currentUser === null) {
    return /* @__PURE__ */ jsx("div", { children: "Not signed in" });
  }
  return /* @__PURE__ */ jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsx("main", { className: "p-1", children: /* @__PURE__ */ jsx("div", { className: "hover:bg-sidebar-border rounded-md fixed", children: /* @__PURE__ */ jsx(SidebarTrigger, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 mx-auto", children }),
    " "
  ] });
}
const $$Astro = createAstro();
const $$CreateLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreateLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderScript($$result, "/home/ferdi/vorrect/src/layouts/CreateLayout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class=""> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/ferdi/vorrect/src/layouts/CreateLayout.astro", void 0);
function Username() {
  const currentUser = useStore($userStore);
  const username = currentUser?.username ? currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1) : "";
  return /* @__PURE__ */ jsx("span", { className: "", children: username });
}
const $$Uebungen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CreateLayout", $$CreateLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sidebar", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/app/layout", "client:component-export": "Sidebar" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<header class="flex justify-center items-center h-screen"> <div class="mx-auto w-full max-w-7xl "> <div class="grid items-center gap-8 sm:gap-0 md:grid-cols-2"> <div class="flex flex-col text-center"> <h1 class="text-4xl font-bold md:text-6xl md:leading-tight">
Willkomen Zu <span class="main font-bold">SchreibRecht! ${renderComponent($$result3, "Username", Username, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/username", "client:component-export": "Username" })}</span> </h1> </div> <svg xmlns="http://www.w3.org/2000/svg" class="text-primary brightness-90 inline-block h-full w-[50%] max-w-sm" viewBox="0 0 512 512"> <path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96M233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05c43.66 2.29 131.99 10.68 193.04 41.43c9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46m248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05c-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9c61.04-30.72 149.32-39.11 192.97-41.4c14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09"></path> </svg> </div> </div> </header> ` })} ` })}`;
}, "/home/ferdi/vorrect/src/pages/uebungen.astro", void 0);
const $$file = "/home/ferdi/vorrect/src/pages/uebungen.astro";
const $$url = "/uebungen";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Uebungen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
