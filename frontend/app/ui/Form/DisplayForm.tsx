import { useState } from "react"
import FormComponent from "../../../component/Form"

const DisplayForm = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='my-3'>
      <button
        className="bg-red-500 hover:bg-red-600 text-white w-full font-bold py-2 px-4 rounded"
        onClick={() => setShow(!show)}
      >
        Post A Confession
      </button>
      {
        show ?
          <FormComponent />
          :
          null
      }
    </div>
  )
}

export default DisplayForm;