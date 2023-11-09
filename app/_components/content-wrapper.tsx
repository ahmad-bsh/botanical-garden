"use client"

import { useHeaderContext } from "../_hooks"

export const ContentWrapper: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { isMenuOpen } = useHeaderContext()
  return !isMenuOpen ? <div className="mt-20 lg:mt-24">{children}</div> : <></>
}
