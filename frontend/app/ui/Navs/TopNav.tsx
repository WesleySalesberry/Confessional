import React from 'react';
import { usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react'
import { MdClose, MdMenu } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa6";
import Link from 'next/link';
import { useModeContext } from '@/app/context/ModeContext';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: true },
  { name: 'Privacy', href: '/privacy', current: true },
]

const TopNav = () => {
  const pathname = usePathname();
  const { isDark, changeMode } = useModeContext();

  return (
    <Disclosure as="nav" className="bg-sky-500 dark:bg-sky-950 rounded">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose className="block h-6 w-6 text-black dark:text-white" aria-hidden="true" />
                  ) : (
                    <MdMenu className="block h-6 w-6 text-black dark:text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href={`/`}
                  >
                    <h1
                      className="px-3 py-2 text-xlg font-large dark:text-white"
                    >
                      The Confessional
                    </h1>
                  </Link>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${item.href === pathname ? 'text-black bg-gray-300 dark:text-sky-500 dark:bg-zinc-700' : 'text-black dark:text-white hover:bg-gray-300 hover:text-black dark:hover:bg-zinc-700'}`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  isDark ?
                    <div
                      className="rounded-full p-1 text-orange-300 hover:text-orange-500"
                      onClick={() => changeMode(false)}
                    >
                      <span className="sr-only">Change light and dark mode</span>
                      <FaSun className="h-6 w-6" aria-hidden="true" />
                    </div>
                    :
                    <div
                      className="rounded-full p-1 text-slate-600 hover:text-slate-300"
                      onClick={() => changeMode(!isDark)}
                    >
                      <span className="sr-only">Change light and dark mode</span>
                      <FaMoon className="h-6 w-6" aria-hidden="true" />
                    </div>

                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((itm) => (
                <Link
                  key={itm.name}
                  href={itm.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium dark:text-sky-500 ${itm.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                  aria-current={itm.current ? 'page' : undefined}
                >
                  {itm.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default TopNav;