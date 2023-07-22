import { useSearchContext } from '@/context/SearchContext';
import React from 'react';
import { RiEyeLine, RiChat3Line } from 'react-icons/ri';

export interface CardProps {
  id?: string,
  confession_id?: string,
  category: string;
  title: string;
  body: string;
  views: number;
  comments: number;
}

const NoteCard = ({ id, category, title, body, views, comments }: CardProps) => {
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
      key={id}
      className="flex flex-col bg-white shadow-lg rounded-lg p-4 mx-2 my-4 md:w-96">
      <div className="hidden md:flex md:justify-between mb-2">
        <h2 className="text-lg font-semibold mr-2">{title}</h2>
        <div
          className="bg-blue-500 text-white px-2 py-1 rounded-full cursor-pointer"
          onClick={() => addValue(category)}
        >
          {category}
        </div>
      </div>
      <div className="md:hidden mb-2">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <div
          className="bg-blue-500 text-white text-center px-2 py-1 rounded-full mt-1 w-24 cursor-pointer"
          onClick={() => addValue(category)}
        >
          {category}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{limitedBody}</p>
      <div className="flex justify-between items-center text-gray-500">
        <div className="flex items-center">
          <RiEyeLine className="mr-1" />
          <span>{views}</span>
        </div>
        <div className="flex items-center">
          <RiChat3Line className="mr-1" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;