import { createContext, ReactNode, useContext, useState } from 'react';

export const SearchContext = createContext<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
};



const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};