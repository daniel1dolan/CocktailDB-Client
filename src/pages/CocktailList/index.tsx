import { useHistory, useLocation, Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';

import type { SearchSelected } from '../../types';

import useModelForCocktailList from '../../models/useModelForCocktailList';

import View from './view';

// Future considerations:
// 1. Add image optimization for large thumb images.
// 2. Add pagination.
// 3. Add sorting.
// 4. Add individual cocktail view.

const isValidSearchSelected = (selected: string | undefined): selected is SearchSelected => selected === 'name' || selected === 'advanced' || selected === 'random';

const useQuery = () => new URLSearchParams(useLocation().search);

/** This page will be responsible for parsing the url parameters
 * and searching the API for the appropriate results.
 */
const CocktailList = (): JSX.Element => {
  // Hooks
  const query = useQuery();

  const searchSelected = query.get('searchSelected') ?? undefined;
  const cocktailName = query.get('cocktailName') ?? undefined;
  const ingredient = query.get('ingredient') ?? undefined;
  const category = query.get('category') ?? undefined;
  const glass = query.get('glass') ?? undefined;

  if (!isValidSearchSelected(searchSelected)) {
    toast.error('Invalid search selected.', { id: 'invalid-search-selected' });
    return <Redirect to="/" />;
  }

  const { cocktails, loading, error } = useModelForCocktailList({
    searchSelected, cocktailName, ingredient, category, glass,
  });

  return (
    <View cocktails={cocktails} loading={loading} error={error} />
  );
};

export default CocktailList;
