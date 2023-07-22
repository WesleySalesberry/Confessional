"use client"
import React, { useState } from "react"

import { useUpdateContext } from "@/context/ComponentUpdateContext";
import Data from '../app/ui/Form/Data.json';
import Message from "./Message";

const Form = () => {
  const { updateState } = useUpdateContext();

  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const data = {
    category: category,
    title: title,
    body: body
  }

  const postData = () => {
    fetch('http://localhost:3001/api/v1/confession/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.data);
        updateState(true);
      })
      .catch(error => {
        setError(`Error while adding your confession:  ${error}`)
        console.error('Error while making POST request:', error);
      });
  }

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    postData();
    setTitle('')
    setBody('')
    setCategory('')
  };
  return (
    <>
      {
        error ?
          <Message message={error} isError={true} />
          :
          null
      }
      {
        message ?
          <Message message={message} isError={false} />
          :
          null
      }
      <form onSubmit={handleSubmit} className="container bg-white py-2 px-2 rounded shadow-lg">
        <div className="my-3 bg-white">
          <select
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
            className="bg-white rounded border border-gray-500 py-2 px-4 focus:outline-none w-full"
          >
            <option>Categories</option>
            {Data.map((itm) => (
              <option
                key={itm.value}
                value={itm.value}
              >
                {capitalizeFirstLetter(itm.title)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="bg-white rounded border border-gray-500 py-2 px-4 focus:outline-none w-full"
          />
        </div>
        <div>
          <label htmlFor="confession" className="block border-b-2 ">Confession</label>
          <textarea
            id="confession"
            placeholder="Leave Your Confession here"
            value={body}
            onChange={(evt) => setBody(evt.target.value)}
            className="bg-white rounded border border-gray-500 w-full p-2"
          />
        </div>
        <div className="my-3">
          <button
            className={`font-bold py-3 px-3 rounded w-full border-2
          ${title !== '' && body !== '' && category !== '' ? 'bg-sky-500 hover:bg-sky-700 cursor-pointer' : 'bg-gray-500 cursor-not-allowed'}`}
            disabled={category !== '' && title !== '' && body !== '' ? false : true}
          >
            Confess
          </button>
        </div>
      </form>
    </>
  )
}

export default Form;