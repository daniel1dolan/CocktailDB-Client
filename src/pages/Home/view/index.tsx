import React from 'react';

import type {
  SearchSelected, CategoryFilter, IngredientFilter, GlassFilter, AdvancedFilters,
} from '../../../types';

interface Props {
  searchSelected: SearchSelected;
  handleSearchSelectorChange: (value: SearchSelected) => void;
  cocktailName: string;
  handleCocktailNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClear: () => void;
  handleRandom: () => void;
  advancedFilters: AdvancedFilters;
  filterOptions: {
    ingredientOptions: Array<IngredientFilter>;
    categoryOptions: Array<CategoryFilter>;
    glassOptions: Array<GlassFilter>;
  }
  handleAdvancedFiltersChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// TODO: Add jsx for advanced filter.
/** This component is used to display the home page. */
const View = ({
  searchSelected,
  handleSearchSelectorChange,
  cocktailName,
  handleCocktailNameChange,
  handleSearch,
  handleClear,
  handleRandom,
  advancedFilters,
  filterOptions,
  handleAdvancedFiltersChange,
}: Props): JSX.Element => (
  <div className="justify-content-center container text-center">
    <div className="row justify-content-center mt-2">
      <h1 className="column">
        Welcome to the Cocktail Search!
      </h1>
    </div>
    {searchSelected === 'name' ? (
      <>
        <div className="row justify-content-center mt-2">
          <h2 className="column">
            Please enter a cocktail name to search for.
          </h2>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <input
              type="text"
              className="form-control"
              placeholder="Cocktail Name"
              value={cocktailName}
              onChange={handleCocktailNameChange}
            />

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleRandom}
            >
              Random
            </button>

          </div>
        </div>

        {/* Switch to advanced filter */}
        <div className="row justify-content-center mt-2">
          <div className="column">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                handleSearchSelectorChange('advanced');
              }}
            >
              Advanced Filter
            </button>
          </div>
        </div>
      </>
    ) : (
      // Advanced filters will have autosuggest support for the filter options.
      <>
        <div className="row justify-content-center mt-2">
          <div className="column">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                handleSearchSelectorChange('name');
              }}
            >
              Back to Name Search
            </button>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <h2 className="column">
              Please enter the filters you would like to use.
            </h2>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <h3 className="column">
              Ingredient Filter
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <select
              className="form-control"
              value={advancedFilters.ingredient}
              onChange={handleAdvancedFiltersChange}
              name="ingredient"
            >
              <option value="">Select an Ingredient</option>
              {filterOptions.ingredientOptions.map((option) => (
                <option key={option.strIngredient1} value={option.strIngredient1}>
                  {option.strIngredient1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <h3 className="column">
              Category Filter
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <select
              className="form-control"
              value={advancedFilters.category}
              onChange={handleAdvancedFiltersChange}
              name="category"
            >
              <option value="">Select a Category</option>
              {filterOptions.categoryOptions.map((option) => (
                <option key={option.strCategory} value={option.strCategory}>
                  {option.strCategory}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <h3 className="column">
              Glass Filter
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <select
              className="form-control"
              value={advancedFilters.glass}
              onChange={handleAdvancedFiltersChange}
              name="glass"
            >
              <option value="">Select a Glass</option>
              {filterOptions.glassOptions.map((option) => (
                <option key={option.strGlass} value={option.strGlass}>
                  {option.strGlass}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="column">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </>
    )}

  </div>
);

export default View;
