'use client'
import React, { ReactNode, useState } from 'react';
import { SearchContext } from './SearchContext';

interface IProviderProps {
  children: ReactNode;
}

const SearchContextProvider = ({ children }: IProviderProps) => {
  const [value, setValue] = useState<string>('');

  const addValue = (itm: string) => setValue(itm);

  return (
    <SearchContext.Provider
      value={{ value, addValue }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;