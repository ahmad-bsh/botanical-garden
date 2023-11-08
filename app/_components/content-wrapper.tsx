"use client"

import { useHeaderContext } from "../_hooks"

export const ContentWrapper: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { isMenuOpen } = useHeaderContext()
  return !isMenuOpen ? <div>{children}</div> : <></>
}
