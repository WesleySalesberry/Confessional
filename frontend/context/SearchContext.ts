import { createContext, useContext } from 'react';

interface ISearchContext {
  value: string;
  addValue: (value: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  value: '',
  addValue(value) { }
});;

export const useSearchContext = () => useContext(SearchContext)
