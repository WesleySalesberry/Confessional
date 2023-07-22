"use client"

import Form from "@/component/Form"
import React from "react"
import { useState } from "react"

const DisplayForm = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='container my-3'>
      <button
        className="bg-red-500 hover:bg-red-600 text-white w-full font-bold py-2 px-4 rounded"
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