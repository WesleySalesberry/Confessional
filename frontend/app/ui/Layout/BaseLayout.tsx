import SideNav from "../Navs/SideNav"

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
  )
}

export default BaseLayout;