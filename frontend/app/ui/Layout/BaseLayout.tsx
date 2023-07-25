import React from "react"
import { SideNav, TopNav } from "..";
import { useModeContext } from "@/app/context/ModeContext";

export interface IBaseLayout {
  children: React.ReactNode
}

const BaseLayout = (props: IBaseLayout) => {
  return (
    <div className="flex bg-gray-200">
      <SideNav />
      <div className="container m-3">
        {props.children}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;
