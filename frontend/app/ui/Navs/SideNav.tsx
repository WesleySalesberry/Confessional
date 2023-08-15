import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import NavData from "./NavData.json";
import { useSearchContext } from "@/app/context/SearchContext";
import OpenCloseButton from "../Toggle";

const SideNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { addValue } = useSearchContext();

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {
        pathname === '/' ?
          <OpenCloseButton
            onClick={toggleSideNav}
            isOpen={isOpen}
          />
          :
          ''
      }


      <aside
        className={`${isOpen ? "block" : "hidden"
          } md:block md:w-1/5 border-r-2 dark:text-sky-500 border-sky-500 dark:border-orange-800 bg-gray-300 dark:bg-sky-950   h-screen md:max-h-screen`}
      >
        <ul className="py-4">
          {NavData.map((itm) => (
            <li
              key={itm.value}
              className="px-4 py-2 font-bold cursor-pointer hover:text-black dark:text-white dark:hover:text-sky-500 hover:bg-sky-300 dark:hover:bg-zinc-700"
              onClick={() => {
                addValue(itm.value);
                setIsOpen(false);
              }}
            >
              {itm.title}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideNav;