'use client'

import { Calendar, Home, Inbox, Search, Book, Settings, Briefcase, Award, Bell, Users, Compass, BarChart } from "lucide-react"
import "@/styles/global.css"
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useStore } from '@nanostores/react'
import { $userStore } from '@clerk/astro/client'
import { $clerkStore } from '@clerk/astro/client'
import { ClerkProvider } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  
} from "@/components/ui/sidebar"

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

// Menu items.
const uebungen = [
  {
    title: "Lesen",
    url: "#",
    icon: Book,
  },
  {
    title: "Schreiben",
    url: "#",
    icon: Inbox,
  },
]

// Menu items.
const schubfach = [
  {
    title: "Efolge",
    url: "#",
    icon: Award,
  },
  {
    title: "Verlauf",
    url: "#",
    icon: Compass,
  },
]

// Menu items.
const items = [
  {
    title: "Rangliste",
    url: "#",
    icon: BarChart,
  },
  {
    title: "Freunde",
    url: "#",
    icon: Users,
  },
  {
    title: "Notificationen",
    url: "Bell",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const user = useStore($userStore);

  if (user === undefined) {
    // Handle loading state
    return null
  }

  if (user === null) {
    return <div>Not signed in</div>
  }

  return (
    
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dein Schubfach</SidebarGroupLabel>
          <Collapsible defaultOpen className="group/collapsible">
              <TooltipProvider delayDuration={100}> {/* Nur einmal um die gesamte Liste */}
                  <SidebarMenu>
                        <Tooltip> {/* Hier gehört der Key hin */}
                          <TooltipTrigger className="">
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton  asChild>
                              <a href="#" className="mx-auto group">
                                <Briefcase className="hover:text-blue-600" />
                                <span className="text-lg text-black hover:text-blue-600">Übung</span>
                                <ChevronDown className="size-5 mb-1 inline-block ml-auto transition-transform group-data-[state=open]/collapsible:mb-1 group-data-[state=open]/collapsible:rotate-180" />
                              </a>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          </TooltipTrigger>
                          <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                            <span className="text-lg funn">Übugen <ChevronDown className="size-5 mb-1 inline-block ml-auto transition-transform group-data-[state=open]/collapsible:mb-1 group-data-[state=open]/collapsible:rotate-180" /></span>
                          </TooltipContent>
                        </Tooltip>
                  </SidebarMenu>
                </TooltipProvider>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarGroup>
                <TooltipProvider delayDuration={100}> {/* Nur einmal um die gesamte Liste */}
                  <SidebarMenu>
                      {uebungen.map((item) => (
                        <Tooltip key={item.title}> {/* Hier gehört der Key hin */}
                          <TooltipTrigger className="">
                            <SidebarMenuItem className="">
                              <SidebarMenuButton asChild className="pl-4">
                                <a href={item.url} className="mx-auto">
                                  <item.icon/>
                                  <span className="text-lg">{item.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </TooltipTrigger>
                          <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                            <span className="text-lg">{item.title}</span>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                  </SidebarMenu>
                </TooltipProvider>
                </SidebarGroup>
              </SidebarGroupContent>
            </CollapsibleContent>
        </Collapsible>
          <SidebarGroupContent>
          <TooltipProvider delayDuration={100}> {/* Nur einmal um die gesamte Liste */}
            <SidebarMenu>
                {schubfach.map((item) => (
                  <Tooltip key={item.title}> {/* Hier gehört der Key hin */}
                    <TooltipTrigger className="">
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="mx-auto">
                            <item.icon/>
                            <span className="text-lg">{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                      <span className="text-lg">{item.title}</span>
                    </TooltipContent>
                  </Tooltip>
                ))}
            </SidebarMenu>
          </TooltipProvider>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Allgemines</SidebarGroupLabel>
          <SidebarGroupContent>
          <TooltipProvider delayDuration={100}>
            <SidebarMenu>
              {items.map((item) => (
                <Tooltip key={item.title}>
                  <TooltipTrigger> 
                    {/* Tooltip nur anzeigen, wenn Sidebar collapsed ist */}
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="mx-auto ">
                          <item.icon/>
                          <span>
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center">
                    <span className="text-lg">{item.title}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </SidebarMenu>
          </TooltipProvider>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                  <SidebarMenuButton size="lg">
                    <ClerkProvider publishableKey={"pk_test_Zml0LXNraW5rLTk2LmNsZXJrLmFjY291bnRzLmRldiQ"} afterSignOutUrl="/">
                        <SignedIn>
                          <UserButton />
                        </SignedIn>
                        
                      </ClerkProvider>
                      <span className="font-bold group-hover:text-blue-600">{user?.username}</span>
                      <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>

                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] mb-1"
                >
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
