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


export function MyDrawerkomp() {
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
      <a className="motion-delay-200 motion-translate-y-in-25 motion-preset-fade-lg group mb-8 flex max-w-lg justify-left gap-4 px-6 py-5 text-black border border-solid bg-gray-200 hover:bg-white border-white hover:border-gray-300 hover:shadow-lg rounded-xl transition-all" href="#w-tabs-0-data-w-pane-1">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-black group-hover:rotate-[360deg] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="#fff" stroke-width="1.5">
		<path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" />
		<path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" />
		<path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4" />
	</g>
</svg>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold funn">Komplet</h5>
              <p className="text-sm text-gray-500">Sehe einen kompleten Überblig</p>
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