"use client"
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

type HeaderContextType = {
  isMenuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  menuItems: Array<string>
}

const HeaderContext = createContext<HeaderContextType | null>(null)

export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const menuItems = [
    "HOME",
    "VISIT",
    "EXHIBITIONS",
    "PROGRAMS & EVENTS",
    "STORE",
  ]
  return (
    <HeaderContext.Provider value={{ isMenuOpen, setMenuOpen, menuItems }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)
  if (!context)
    throw new Error("useHeaderContext is used outside of HeaderContextProvider")
  return context
}
