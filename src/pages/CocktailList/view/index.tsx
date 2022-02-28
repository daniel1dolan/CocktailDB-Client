import React from 'react';
import { Link } from 'react-router-dom';

import type { Cocktail } from '../../../types';

type Props = {
  cocktails: Array<Cocktail> | null;
  loading: boolean;
  error: string | null;
}

// Future considerations:
// 1. Add image optimization for large thumb images.
// 2. Add pagination.
// 3. Add sorting.
// 4. Add individual cocktail view.

/** This component is used to display the view of the CocktailList. */
const View = ({ cocktails, loading, error }: Props): JSX.Element => {
  if (error) {
    return (
      <div className="row justify-content-center mt-2">
        <div className="column">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="row justify-content-center mt-2">
        <div className="column">
          <div className="alert alert-info" role="alert">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="justify-content-center container text-center">
      <div className="row justify-content-center mt-2">
        <h1 className="column">
          Welcome to the Cocktail Search!
        </h1>
      </div>
      {cocktails && cocktails.length > 0 ? (
        <>
          <div className="row justify-content-center mt-2">
            <h2 className="column">
              Here are the results:
            </h2>

          </div>
          <div className="row justify-content-center mt-2">
            <div className="column">
              <Link
                className="btn btn-primary"
                to="/"
              >
                Search Again
              </Link>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="column align-items-center">
              <ul className="list-group align-items-center">
                {cocktails.map((cocktail) => (
                  <li className="list-group-item" key={cocktail.idDrink}>
                    <h3>{cocktail.strDrink}</h3>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img-fluid" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
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
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default View;
