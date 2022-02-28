import { useEffect, useState } from 'react';

import type { CategoryFiltersData, IngredientFiltersData, GlassFiltersData } from '../types';

import API from '../util/API';

/** This model is used for the home page.
 * It is used to get the filter values from the CocktailDP API.
*/
const useModelForHome = () => {
  const [ingredientOptions, setIngredientOptions] = useState<IngredientFiltersData['drinks']>([]);
  const [glassOptions, setGlassOptions] = useState<GlassFiltersData['drinks']>([]);
  const [categoryOptions, setCategoryOptions] = useState<CategoryFiltersData['drinks']>([]);

  // TODO: Add a loading state and handle errors.
  const getIngredients = async () => {
    const { data } = await API.get<IngredientFiltersData>('/list.php?i=list');
    setIngredientOptions(data.drinks);
  };

  const getGlasses = async () => {
    const { data } = await API.get<GlassFiltersData>('/list.php?g=list');
    setGlassOptions(data.drinks);
  };

  const getCategories = async () => {
    const { data } = await API.get<CategoryFiltersData>('/list.php?c=list');
    setCategoryOptions(data.drinks);
  };

  useEffect(() => {
    getIngredients();
    getGlasses();
    getCategories();
  }, []);

  return {
    ingredientOptions,
    glassOptions,
    categoryOptions,
  };
};

export default useModelForHome;
