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


export function MyDrawerlead() {
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
	<g fill="none" stroke="#fff" stroke-width="1.5">
		<path stroke-linecap="round" d="M12 16v3" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z" />
		<path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" />
		<path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068" />
	</g>
</svg>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold funn">Leaderboard</h5>
              <p className="text-sm text-gray-500">Hier kannst du dein Lesen verbesseren und Trenieren kosteloss </p>
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