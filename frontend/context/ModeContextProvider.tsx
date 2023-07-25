"use client"

import { ReactNode, useState } from "react";
import { ModeContext } from "./ModeContext";

interface IProviderProps {
  children: ReactNode;
}

const ModeContextProvider = ({ children }: IProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const changeMode = (hasChanged: boolean) => setIsDark(hasChanged)

  return (
    <ModeContext.Provider
      value={{ isDark, changeMode }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContextProvider;