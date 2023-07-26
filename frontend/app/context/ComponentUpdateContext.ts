import { createContext, useContext } from "react";

interface IUpdateContext {
  isUpdated: boolean
  updateState: (value: boolean) => void;
}

export const UpdateContext = createContext<IUpdateContext>({
  isUpdated: false,
  updateState(value) { console.log(value) }
});

export const useUpdateContext = () => useContext(UpdateContext);