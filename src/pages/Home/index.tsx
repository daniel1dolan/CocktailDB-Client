import { useState } from 'react';
import View from './view';

// TODO: move this type to a types folder.
export type SearchSelected = 'name' | 'advanced';

/** This component is the View Controller of the Home page.
 * The view controller is responsible for bringing together the view and data model.
*/
const Home = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [searchSelected, setSearchSelected] = useState<SearchSelected>('name');
  // TODO: create object for storing selected filter values.
  // This will be used to create the query string.
  // Example shape = { ingredient: 'vodka', category: 'cocktail', glass: 'highball' }

  // TODO: create model for getting filter values and add state for setting filter values.
  // Ex. - const { ingredientFilters, categoryFilters, glassFilter } = useModelForHome();

  const handleCocktailNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCocktailName(event.target.value);
  };

  const handleSearchSelectorChange = (value: SearchSelected) => {
    setSearchSelected(value);
  };

  // TODO: possible refactor these to a useReducer.
  const handleSearch = () => {
    console.log(`Searching for ${cocktailName}`);
  };

  const handleClear = () => {
    setCocktailName('');
  };

  const handleRandom = () => {
    console.log('Random cocktail');
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
    />
  );
};

export default Home;
