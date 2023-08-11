"use client"

import Form from "@/app/component/Form"
import React from "react"
import { useState } from "react"

const DisplayForm = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='container my-3'>
      <button
        className="bg-indigo-500 hover:bg-indigo-300 hover:text-black dark:bg-indigo-600 dark:hover:bg-indigo-300 dark:hover:text-black text-white w-full font-bold py-2 px-4 rounded"
        onClick={() => setShow(!show)}
      >
        Post A Confession
      </button>
      {
        show ?
          <Form />
          :
          null
      }
    </div>
  )
}

export default DisplayForm;