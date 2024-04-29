

import React, { useContext, useEffect, useState } from 'react';
import './Search.css';
import { ApiSearch } from '../common/ApiCalling';
import { Products } from '../DataTypes';
import { productContext } from '../../Context/ProductState';

const SearchBar = () => {
  type SearchData = {
    text?: string;
  };

  
  const [text, setText] = useState<SearchData>({ text: '' });
  const [data, setData] = useState<Products[]>([]);

  const searchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText({ text: e.target.value });
  };

  const context = useContext(productContext);
  const { res, setRes } = context ?? { res: data, setRes: () => {} };

  const getData = async (text: SearchData) => {
    try {
      const response = await ApiSearch(text);
      setData(response.products);
      setRes(response.products); 
    } catch {
      throw new Error('Could not fetch the products');
    }
  };

  // debouncing
  useEffect(() => {
    const debouncedSearch = setTimeout(() => getData(text), 500);
    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [text, setRes]);
  // console.log(res);

  return (
    <>
      <div className="search-items">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search for Products"
          id="search-input"
          onChange={searchText}
        />
      </div>

    </>
  );
};

export default SearchBar;
