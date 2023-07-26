import React from "react"
import { SideNav, TopNav } from "..";
import { useModeContext } from "@/app/context/ModeContext";

export interface IBaseLayout {
  children: React.ReactNode
}

const BaseLayout = (props: IBaseLayout) => {
  const { isDark } = useModeContext();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="flex bg-gray-200 dark:bg-stone-800">
        <SideNav />
        <div className="container m-3">
          <TopNav />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;
