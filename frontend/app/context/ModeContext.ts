import { createContext, useContext } from "react";

interface IModeContext {
  isDark: boolean
  changeMode: (value: boolean) => void
}

export const ModeContext = createContext<IModeContext>({
  isDark: false,
  changeMode(value) { console.log(value) }
});

export const useModeContext = () => useContext(ModeContext)