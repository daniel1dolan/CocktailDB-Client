import { useParams, useLocation } from 'react-router-dom';

import type { SearchSelected } from '../../types';

import useModelForCocktailList from '../../models/useModelForCocktailList';

import View from './view';

interface Params {
  searchSelected: SearchSelected;
  cocktailName?: string;
  ingredient?: string;
  category?: string;
  glass?: string;
}

const isValidSearchSelected = (selected: string | undefined): selected is SearchSelected => selected === 'name' || selected === 'advanced' || selected === 'random';

const useQuery = () => new URLSearchParams(useLocation().search);

/** This page will be responsible for parsing the url parameters
 * and searching the API for the appropriate results.
 */
const CocktailList = () => {
  // Hooks
  const query = useQuery();
  // console.log(searchSelected);
  // TODO: handle case when no proper searchSelected.
  // This should either send the user to the home or set a default search.
  // if (!searchSelected) throw new Error('Please specify search type.');

  // searchSelected, cocktailName, ingredient, category, glass,

  const searchSelected = query.get('searchSelected') ?? undefined;
  const cocktailName = query.get('cocktailName') ?? undefined;
  const ingredient = query.get('ingredient') ?? undefined;
  const category = query.get('category') ?? undefined;
  const glass = query.get('glass') ?? undefined;

  if (!isValidSearchSelected(searchSelected)) throw new Error('Please specify valid search type.');

  const { cocktails, loading, error } = useModelForCocktailList({
    searchSelected, cocktailName, ingredient, category, glass,
  });

  // Handlers

  return (
    <View cocktails={cocktails} loading={loading} error={error} />
  );
};

export default CocktailList;
