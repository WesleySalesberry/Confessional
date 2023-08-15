'use client'

import { BaseLayout } from "@/app/ui"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { TfiThemifyFaviconAlt, TfiEye } from "react-icons/tfi";

import { useParams } from 'next/navigation';
import { CardProps } from "@/app/ui/NoteCard";

export default function Page() {
  const route = useRouter();
  const [data, setData] = useState<CardProps>()
  const { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/confession/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        console.log(data)
      })
  }, [slug])

  return (
    <BaseLayout>
      <section className='container bg-white dark:bg-gray-800 dark:text-gray-300 rounded'>
        <div
          className="my-2 mx-2 py-2 px-2"
        >
          <p
            className="w-20 py-2 px-2 text-sky-500 bg-slate-600 dark:text-gray-300 hover:text-sky-300 dark:hover:text-sky-300 rounded cursor-pointer"
            onClick={() => route.back()}
          >
            Go Back
          </p>
        </div>
        <div className="w-1/2 p-4 mx-auto text-center border-b-2 border-sky-300">
          <h1
            className="font-bold text-2xl text-center text-black dark:text-gray-300"
          >
            {data?.title}
          </h1>
        </div>
        <div className="w-1/2 p-4 mx-auto text-center">
          <p className="text-base text-center text-black dark:text-gray-300">{data?.body}</p>
        </div>
        <div className="flex justify-between items-center my-5 mx-5 text-gray-500">
          <div className="flex items-center">
            <TfiEye
              className="mr-1 dark:text-emerald-700"
            /> {data?.views}
          </div>
          <div className="flex items-center">
            <TfiThemifyFaviconAlt
              className="mr-1 text-indigo-400 dark:text-indigo-700"
            />
            <span>{0}</span>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
