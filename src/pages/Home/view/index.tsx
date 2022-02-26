import React from 'react';

import type { SearchSelected } from '../index';

interface Props {
  searchSelected: SearchSelected;
  handleSearchSelectorChange: (value: SearchSelected) => void;
  cocktailName: string;
  handleCocktailNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClear: () => void;
  handleRandom: () => void;
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
      <>
        Advanced Filter
      </>
    )}

  </div>
);

export default View;
