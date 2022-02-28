import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import type { SearchSelected, AdvancedFilters } from '../../types';

import useModelForHome from '../../models/useModelForHome';

import View from './view';

// TODO: Make the search submit go to the list page with proper query parameters.

// Considerations for further features:
// 1. Enable filtering and searching at the same time.
// Ex. - Filter endpoint does not allow search.
// Ex. - Search endpoint does not allow filtering.
// 2. Allow saving query parameters in the url when coming back from search.
// Then restore state from query parameters.
// 3. Add pagination. API does not support pagination.
// 4. Add sorting. API does not support sorting.

// -- May require some complex client logic or creating a server to handle this --
// -- as endpoints allow only some functionality. --

const defaultAdvancedFilters = {
  ingredient: '',
  category: '',
  glass: '',
};

/** This component is the View Controller of the Home page.
 * The view controller is responsible for bringing together the view and data model.
*/
const Home = () => {
  // Hooks
  const history = useHistory();
  const [cocktailName, setCocktailName] = useState('');
  const [searchSelected, setSearchSelected] = useState<SearchSelected>('name');
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>(defaultAdvancedFilters);

  const { ingredientOptions, categoryOptions, glassOptions } = useModelForHome();

  // Handlers
  const handleSearch = () => {
    const newRoute = queryString.stringify({
      searchSelected,
      cocktailName,
      ingredient: advancedFilters.ingredient,
      category: advancedFilters.category,
      glass: advancedFilters.glass,
    }, { skipEmptyString: true });
    history.push(`/search/?${newRoute}`);
  };

  const handleRandom = () => {
    history.push('/search?searchSelected=random');
  };

  const handleClear = () => {
    setAdvancedFilters(defaultAdvancedFilters);
    setCocktailName('');
  };

  const handleSearchSelectorChange = (value: SearchSelected) => {
    handleClear();
    setSearchSelected(value);
  };

  const handleCocktailNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCocktailName(event.target.value);
  };

  const handleAdvancedFiltersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setAdvancedFilters({ ...advancedFilters, [name]: value });
  };

  return (
    <View
      searchSelected={searchSelected}
      handleSearchSelectorChange={handleSearchSelectorChange}
      cocktailName={cocktailName}
      handleCocktailNameChange={handleCocktailNameChange}
      handleSearch={handleSearch}
      handleClear={handleClear}
      handleRandom={handleRandom}
      filterOptions={{
        ingredientOptions,
        categoryOptions,
        glassOptions,
      }}
      advancedFilters={advancedFilters}
      handleAdvancedFiltersChange={handleAdvancedFiltersChange}
    />
  );
};

export default Home;
