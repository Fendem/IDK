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

const randomWords = ["Apfel", "Banane", "Kirsche", "Dattel", "Holunderbeere", "Feige", "Traube", "Honigmelone"]


export function MyDrawerle() {
  const [goal, setGoal] = React.useState(350)
  const [randomWord, setRandomWord] = React.useState("")

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * randomWords.length)
    setRandomWord(randomWords[randomIndex])
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
      <a className="motion-delay-200 motion-translate-y-in-25 motion-preset-fade-lg group mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black border border-solid bg-secondary/30 border-white hover:bg-secondary/40 hover:border-gray-300 hover:shadow-lg rounded-xl transition-all" href="#w-tabs-0-data-w-pane-1">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-secondary group-hover:rotate-[360deg] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 256 256">
	<path fill="#000" d="m210.43 41.22l-130.25-23A14 14 0 0 0 64 29.58l-29.75 169a14 14 0 0 0 11.36 16.22l130.25 23a13.6 13.6 0 0 0 2.46.22a14 14 0 0 0 13.68-11.6l29.75-169a14 14 0 0 0-11.32-16.2M210 55.36l-29.75 169a2 2 0 0 1-.82 1.3a2 2 0 0 1-1.49.33L47.65 203a2 2 0 0 1-1.65-2.36l29.75-169a2 2 0 0 1 .82-1.3A2.06 2.06 0 0 1 78.1 30l130.25 23a2 2 0 0 1 1.65 2.36m-23.89 20.15a6 6 0 0 1-5.9 5a6 6 0 0 1-1.05-.09l-83-14.66a6 6 0 1 1 2.09-11.81l83 14.65a6 6 0 0 1 4.86 6.91M180.56 107a6 6 0 0 1-5.9 5a5.5 5.5 0 0 1-1-.1l-83-14.65a6 6 0 0 1 2.09-11.82l83 14.66a6 6 0 0 1 4.81 6.91m-47 24.19a6 6 0 0 1-5.91 4.95a6.4 6.4 0 0 1-1.05-.09l-41.49-7.33a6 6 0 1 1 2.09-11.81l41.49 7.32a6 6 0 0 1 4.84 6.99Z" />
</svg>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold funn">Lesen</h5>
              <p className="text-sm text-gray-500 ">Hier kannst du dein Lesen verbesseren und Trenieren kosteloss </p>
            </div>
          </a>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="grid grid-cols-4 border-t">
  {/* Linke Seite - 1 Spalte */}
  <section className="col-span-1 border-r">
    <div className="w-full py-16 md:py-5">
      <div className="grid px-5 gap-6">
        <div className="grid space-y-5 grid-rows-5">
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
        </div>
        {/* Weitere Items */}
        <div className="grid grid-cols-2 space-x-2">
          <Button className="font-bold hover:bg-primary/80 hover:shadow-lg transition-all">Verlauf<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#000" fill-rule="evenodd" d="M4.929 17.657a1 1 0 0 0 0 1.414c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0A9.96 9.96 0 0 0 2.049 11H1a1 1 0 0 0-.707 1.707l2 2l.002.002a.997.997 0 0 0 1.413-.003l2-1.999A1 1 0 0 0 5 11h-.938a8 8 0 1 1 2.28 6.657a1 1 0 0 0-1.413 0M10 8a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1z" clip-rule="evenodd" />
</svg></Button>
          <Button className="font-bold bg-secondary hover:bg-secondary/80 hover:shadow-lg transition-all">Neue<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 17h2.397a5 5 0 0 0 4.096-2.133l.177-.253m3.66-5.227l.177-.254A5 5 0 0 1 17.603 7H21" />
		<path d="m18 4l3 3l-3 3M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 17H21" />
		<path d="m18 20l3-3l-3-3" />
	</g>
</svg></Button>
        </div>
      </div>
    </div>
  </section>

  {/* Rechte Seite - 3 Spalten */}
  <div className="col-span-3 grid grid-rows-1">
  <div id="random" className="text-center uppercase">{randomWord}</div>
<Button onClick={getRandomWord}>Get Random Word</Button>
<MyCharteu />
  </div>
</div>

          
        </div>
      </DrawerContent>
    </Drawer>
  )
}