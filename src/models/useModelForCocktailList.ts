import { useState, useEffect } from 'react';
import axios from 'axios';

import type { Cocktail } from '../types';

import API from '../util/API';

interface Props {
    searchSelected: 'name' | 'advanced' | 'random';
    cocktailName?: string;
    ingredient?: string;
    glass?: string;
    category?: string;
}

interface UseModelForCocktailListInterface {
    cocktails: Array<Cocktail> | null;
    loading: boolean;
    error: string;
}

const useModelForCocktailList = ({
  searchSelected,
  cocktailName,
  ingredient,
  glass,
  category,
} : Props): UseModelForCocktailListInterface => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCocktailsByName = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await API.get('/search.php', {
        params: {
          s: cocktailName,
        },
      });
      setCocktails(data.drinks);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.message);
      }
    }
    setLoading(false);
  };

  const getCocktailsByRandom = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await API.get('/random.php');
      setCocktails(data.drinks);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.message);
      }
    }
    setLoading(false);
  };

  const getCocktailsByAdvanced = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await API.get('/filter.php', {
        params: {
          i: ingredient,
          g: glass,
          c: category,
        },
      });
      setCocktails(data.drinks);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searchSelected) {
      switch (searchSelected) {
        case 'name':
          getCocktailsByName();
          break;
        case 'random':
          getCocktailsByRandom();
          break;
        case 'advanced':
          getCocktailsByAdvanced();
          break;
        default:
          break;
      }
    }
  }, [searchSelected]);

  console.log(cocktails);

  return {
    cocktails,
    loading,
    error,
  };
};

export default useModelForCocktailList;
