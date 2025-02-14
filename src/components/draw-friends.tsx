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


export function MyDrawerfren() {
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
      <a className="motion-delay-200 motion-translate-y-in-25 motion-preset-fade-lg group mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black border border-solid bg-gray-200 hover:bg-white border-white hover:border-gray-300 hover:shadow-lg rounded-xl transition-all" href="#w-tabs-0-data-w-pane-1">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-black group-hover:rotate-[360deg] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#fff" fill-rule="evenodd" d="M12 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m7.74 3.164a2.282 2.282 0 0 1 1.2 4.397l-2.176.725a8 8 0 0 0-.338.12a.25.25 0 0 0-.115.243l.018.06c.021.062.052.143.104.278l1.247 3.242a2.223 2.223 0 0 1-4.005 1.9L12 16.513l-.925 1.618A2.223 2.223 0 0 1 7.07 16.23l1.247-3.242a9 9 0 0 0 .104-.277l.018-.06a.25.25 0 0 0-.115-.244l-.058-.024a8 8 0 0 0-.28-.096L5.81 11.56a2.282 2.282 0 0 1 1.2-4.397l1.897.406l.206.044a14.25 14.25 0 0 0 5.772 0c.05-.01.1-.02.206-.044zm1.26 2.232c0-.499-.46-.87-.946-.765l-1.9.407l-.214.045a15.75 15.75 0 0 1-6.593-.045l-1.9-.407a.782.782 0 0 0-.412 1.507l2.175.725l.055.018c.205.068.42.139.595.248c.59.363.909 1.04.815 1.726c-.028.205-.11.415-.187.617l-.021.053l-1.247 3.242a.723.723 0 0 0 1.303.619l1.576-2.758a.75.75 0 0 1 1.302 0l1.576 2.758a.723.723 0 0 0 1.303-.619l-1.247-3.242l-.02-.053c-.079-.202-.16-.412-.188-.617a1.75 1.75 0 0 1 .815-1.726c.176-.11.39-.18.595-.248l.055-.018l2.175-.725a.78.78 0 0 0 .535-.742M5.216 14.163a.75.75 0 0 1-.333 1.007c-1.52.765-2.133 1.625-2.133 2.33c0 .764.724 1.705 2.487 2.498C6.929 20.76 9.32 21.25 12 21.25s5.071-.49 6.763-1.252c1.763-.793 2.487-1.734 2.487-2.498c0-.705-.612-1.565-2.133-2.33a.75.75 0 1 1 .674-1.34c1.646.828 2.959 2.07 2.959 3.67c0 1.722-1.515 3.03-3.371 3.866c-1.927.867-4.537 1.384-7.379 1.384s-5.452-.517-7.379-1.384C2.765 20.53 1.25 19.222 1.25 17.5c0-1.6 1.313-2.842 2.96-3.67a.75.75 0 0 1 1.006.333" clip-rule="evenodd" />
</svg>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold funn">Freunde</h5>
              <p className="text-sm text-gray-500">Schau was deine Freunde so machen und wie gut die sind!</p>
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