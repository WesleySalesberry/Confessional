import { useSearchContext } from '@/app/context/SearchContext';
import Link from 'next/link';
import React from 'react';
import { TfiThemifyFaviconAlt, TfiEye } from "react-icons/tfi";

export interface CardProps {
  _id: string,
  category: string;
  title: string;
  body: string;
  views: number;
  comments: number;
}

const NoteCard = ({ _id, category, title, body, views, comments }: CardProps) => {
  const { addValue } = useSearchContext();

  const limitTextToWords = (text: string, wordCount: number) => {
    const words = text.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return text;
  };

  const limitedBody = limitTextToWords(body, 10);

  return (
    <div
      key={_id}
      className="flex flex-col bg-white dark:bg-stone-700 dark:text-sky-300 shadow-lg rounded-lg p-4 mx-2 
      my-2 md:w-96">
      <div className="hidden md:flex md:justify-between mb-2">
        <Link
          href={`/post/${_id}`}>
          <h2 className="text-lg font-semibold mr-2">{title}</h2>
        </Link>

        <div
          className="bg-blue-500 dark:bg-blue-950 text-white dark:text-sky-300 px-2 py-1 rounded-full cursor-pointer"
          onClick={() => addValue(category)}
        >
          {category}
        </div>
      </div>
      <div className="md:hidden mb-2">
        <h2 className="text-lg text-center font-semibold mb-1">{title}</h2>
        <div
          className="bg-blue-500 text-white text-center px-2 py-1 rounded-full mt-1 w-24 cursor-pointer"
          onClick={() => addValue(category)}
        >
          {category}
        </div>
      </div>
      <p className="text-gray-700 dark:text-sky-300 mb-4">{limitedBody}</p>
      <div className="flex justify-between items-center text-gray-500">
        <div className="flex items-center">
          <TfiEye
            className="mr-1 dark:text-emerald-700"
          /> {views}
        </div>
        <div className="flex items-center">
          <TfiThemifyFaviconAlt
            className="mr-1 text-indigo-400 dark:text-indigo-700"
          />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;