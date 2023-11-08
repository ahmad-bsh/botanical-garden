"use client"
import Image from "next/image"
import { useHeaderContext } from "../_hooks/header-context"

export const Header: React.FC = () => {
  const { isMenuOpen, setMenuOpen, menuItems } = useHeaderContext()

  return (
    <header className="h-20 lg:h-24 w-full z-0 sticky bg-white top-0">
      <div className="h-full w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="ml-3 flex space-x-2 lg:space-x-2.5 ">
          <div className="w-12 lg:w-16 aspect-square relative">
            <div className="absolute aspect-square w-full">
              <Image src={"/logo.png"} alt="" fill className="rounded-full" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              <div className="lg:text-xl font-medium">Mist Gardens</div>
              <div className="text-sm lg:text-base italic">
                Museum & Botanical Garden
              </div>
            </div>
          </div>
        </div>
        <div className="mr-5">
          <div className="absolute right-5 z-20">
            <div
              className={`${
                isMenuOpen
                  ? "relative"
                  : "space-y-1.5 flex flex-col justify-center"
              } w-6 h-6 cursor-pointer lg:hidden z-20`}
              onClick={() => {
                setMenuOpen((open) => !open)
              }}>
              <div
                className={`${
                  isMenuOpen
                    ? "rotate-45 absolute top-1/2 right-0 bottom-0 left-0 bg-white"
                    : "bg-green-800"
                } h-0.5 rounded-full transition ease-in-out`}></div>

              <div
                className={`${
                  isMenuOpen ? "hidden bg-white" : "bg-green-800"
                } h-0.5 rounded-full`}></div>

              <div
                className={`${
                  isMenuOpen
                    ? "-rotate-45 absolute top-1/2 right-0 bottom-0 left-0 bg-white"
                    : "bg-green-800"
                } h-0.5 rounded-full transition ease-in-out`}></div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <div className="flex space-x-10 text-green-800 font-medium items-center">
              {menuItems.map((item) => (
                <div key={item} className="cursor-pointer hover:text-green-700">
                  {item}
                </div>
              ))}

              <div className="border-2 border-green-900 px-5 py-2.5 cursor-pointer hover:text-green-700 hover:border-green-700">
                MEMBERSHIP
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
