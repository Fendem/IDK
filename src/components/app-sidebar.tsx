'use client'

import { Calendar, Home, Inbox, Search, Book, Settings, Briefcase, Award, Bell, Users, Compass, BarChart, Pen, Edit } from "lucide-react"
import "@/styles/global.css"
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useStore } from '@nanostores/react'
import { $userStore } from '@clerk/astro/client'
import { $clerkStore } from '@clerk/astro/client'
import { ClerkProvider, UserButton } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from '@clerk/clerk-react'
import { SubBadge } from "@/components/Badge"

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
import UserProfile from "node_modules/@clerk/astro/components/interactive/UserProfile/UserProfile.astro";
import { SignedIn } from "@clerk/clerk-react";

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
    icon: Pen,
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

export function AppSidebar() {
  const currentUser = useStore($userStore)

  if (currentUser === undefined) {
    // Handle loading state
    return <div className="flex h-screen justify-center items-center">Its Loading <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="2" r="0" fill="#000">
      <animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(45 12 12)">
      <animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(90 12 12)">
      <animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(135 12 12)">
      <animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(180 12 12)">
      <animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(225 12 12)">
      <animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(270 12 12)">
      <animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
    <circle cx="12" cy="2" r="0" fill="#000" transform="rotate(315 12 12)">
      <animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
    </circle>
  </svg></div>
  }

  if (currentUser === null) {
    return <div>Not signed in</div>
  }

  console.log(<UserProfile />)

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
                              <a href="#" className="mx-auto hover:text-primary">
                                <Briefcase className=""/>
                                <span className="text-md">Übung</span>
                                <ChevronDown className=" ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              </a>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          </TooltipTrigger>
                          <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                            <span className="text-md funn">Übugen <ChevronDown className="size-4 mb-1 inline-block ml-auto transition-transform group-data-[state=open]/collapsible:mt-1 group-data-[state=open]/collapsible:rotate-180" /></span>
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
                                  <item.icon className="text-black"/>
                                  <span className="text-md">{item.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </TooltipTrigger>
                          <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                            <span className="text-md">{item.title}</span>
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
                            <item.icon className=""/>
                            <span className="text-md">{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center"> {/* Tooltip rechts anzeigen */}
                      <span className="text-md">{item.title}</span>
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
                        <a href={item.url} className="mx-auto">
                          <item.icon className=""/>
                          <span className="text-md">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  <TooltipContent className="group-data-[collapsible=icon]:flex hidden" side="right" align="center">
                    <span className="text-md">{item.title}</span>
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
              <SidebarMenuButton size="lg" className="relative flex items-center overflow-visible mx-auto">
              <SubBadge /> 
                <ClerkProvider publishableKey="pk_test_Zml0LXNraW5rLTk2LmNsZXJrLmFjY291bnRzLmRldiQ" afterSignOutUrl="/">
                  <UserButton />
                </ClerkProvider>
                <div className="font-bold group-hover:text-blue-600 transition-all flex justify-between w-full">
                  <div className="text-center group-data-[collapsible=icon]:hidden">{currentUser?.username}</div>
                </div>
                
                {/* Das Badge bleibt immer sichtbar */}
                <div className="group-data-[collapsible=icon]:relative group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:block">
                  <SubBadge />
                </div>
              </SidebarMenuButton>
                
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] mb-1"
                >
                  <DropdownMenuItem>
                    <span>   
                          
                    </span>
                  </DropdownMenuItem>
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