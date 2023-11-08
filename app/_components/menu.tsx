"use client"
import Image from "next/image"
import { useHeaderContext } from "../_hooks/header-context"
import { useRouter } from "next/navigation"

export const Menu: React.FC = () => {
  const router = useRouter()
  const { isMenuOpen, setMenuOpen, menuItems } = useHeaderContext()
  return isMenuOpen ? (
    <div className="lg:hidden absolute inset-0 bg-green-900 z-10 h-screen">
      <div className="relative h-screen">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-900 opacity-10 z-0">
          <div className="absolute inset-0">
            <Image src={"/menu-logo.svg"} alt="" fill />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="pt-16 md:pt-20 text-4xl md:text-4xl text-center text-green-100">
            Menu
          </div>
          <div className="mt-10 flex flex-col space-y-5 md:text-xl items-center">
            {menuItems.map((item) => (
              <div
                onClick={() => {
                  router.push('/')
                  setMenuOpen(false)
                }}
                key={item}
                className="cursor-pointer text-green-200 hover:text-white">
                {item}
              </div>
            ))}
            <div className="border-2 border-green-200 text-green-200 hover:text-white px-5 py-2.5 cursor-pointer hover:border-white">
              MEMBERSHIP
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
