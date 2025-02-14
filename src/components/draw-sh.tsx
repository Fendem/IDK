"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { MyCharteu } from "./chart-ue"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function MyDrawersh() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
      <a className="motion-delay-100 motion-translate-y-in-25 motion-preset-fade-lg group mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-solid border-white hover:border-gray-300 hover:shadow-lg bg-primary/30 px-6 py-5 text-black transition-all" href="#w-tabs-0-data-w-pane-0">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary group-hover:rotate-[360deg] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#000" fill-rule="evenodd" d="M14.1 2.391a3.896 3.896 0 0 1 5.509 5.51l-7.594 7.594c-.428.428-.69.69-.98.917a6 6 0 0 1-1.108.684c-.334.159-.685.276-1.259.467l-2.672.891l-.642.214a1.598 1.598 0 0 1-2.022-2.022l1.105-3.314c.191-.574.308-.925.467-1.259a6 6 0 0 1 .685-1.107c.227-.291.488-.553.916-.98zM5.96 16.885l-.844-.846l.728-2.185c.212-.636.3-.895.414-1.135q.212-.443.513-.83c.164-.21.356-.404.83-.879l5.891-5.89a6.05 6.05 0 0 0 1.349 2.04a6.05 6.05 0 0 0 2.04 1.348l-5.891 5.89c-.475.475-.668.667-.878.83q-.388.302-.83.514c-.24.114-.5.202-1.136.414zm12.116-9.573a4 4 0 0 1-.455-.129a4.5 4.5 0 0 1-1.72-1.084a4.54 4.54 0 0 1-1.084-1.72a4 4 0 0 1-.13-.455l.473-.472a2.396 2.396 0 0 1 3.388 3.388zM3.25 22a.75.75 0 0 1 .75-.75h16v1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
</svg>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold funn">Schreiben</h5>
              <p className="text-sm text-gray-500">Hier kannst du dein Schreiben verbesseren und trenieren kosteloss</p>
            </div>
          </a>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <div className="grid grid-cols-4 border-t">
  {/* Linke Seite - 1 Spalte */}
  <section className="col-span-1 border-r">
    <div className="w-full py-16 md:py-5">
      <div className="grid px-10 gap-6">
        {/* Items */}
        <div className="flex items-center justify-left rounded-sm bg-gray-100 px-6 py-4">
          <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
            <p className="text-sm font-bold sm:text-xl">1</p>
          </div>
          <p className="text-sm sm:text-base">
            1
          </p>
        </div>
        <div className="flex items-center justify-left rounded-sm bg-gray-100 px-6 py-4">
          <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
            <p className="text-sm font-bold sm:text-xl">2</p>
          </div>
          <p className="text-sm sm:text-base">
            1
          </p>
        </div>
        <div className="flex items-center justify-left rounded-sm bg-gray-100 px-6 py-4">
          <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
            <p className="text-sm font-bold sm:text-xl">3</p>
          </div>
          <p className="text-sm sm:text-base">
            1
          </p>
        </div>
        <div className="flex items-center justify-left rounded-sm bg-gray-100 px-6 py-4">
          <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
            <p className="text-sm font-bold sm:text-xl">4</p>
          </div>
          <p className="text-sm sm:text-base">
            1
          </p>
        </div>
        <div className="flex items-center justify-left rounded-sm bg-gray-100 px-6 py-4">
          <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
            <p className="text-sm font-bold sm:text-xl">5</p>
          </div>
          <p className="text-sm sm:text-base">
            1
          </p>
        </div>
        {/* Weitere Items */}
        <Button>Alle…</Button>
      </div>
    </div>
  </section>

  {/* Rechte Seite - 3 Spalten */}
  <div className="col-span-3 grid grid-rows-1">
    <div>
    <form className="w-full h-full">
      <input className="p-3 text-primary active:outline-none focus:outline-dashed w-full h-full text-7xl" type="text" id="textInput" name="textInput" placeholder="Hier eingeben..." />
    </form>

    </div>
    <MyCharteu />
  </div>
</div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
