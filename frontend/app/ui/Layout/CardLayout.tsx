import React from "react"
import { IBaseLayout } from "./BaseLayout";

interface ICardLayout extends IBaseLayout { }

const CardLayout = (props: ICardLayout) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1">
      {props.children}
    </div>
  )
}

export default CardLayout;