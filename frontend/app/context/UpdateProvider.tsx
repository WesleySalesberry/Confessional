'use client'
import React, { ReactNode, useState } from "react";
import { UpdateContext } from "./ComponentUpdateContext";

interface IProviderProps {
  children: ReactNode;
}

const UpdateContextProvider = ({ children }: IProviderProps) => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const updateState = (update: boolean) => setIsUpdated(update)

  return (
    <UpdateContext.Provider
      value={{ isUpdated, updateState }}
    >
      {children}
    </UpdateContext.Provider>
  )
}

export default UpdateContextProvider; 