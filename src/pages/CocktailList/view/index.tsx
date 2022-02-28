import React from 'react';
import { Link } from 'react-router-dom';

import type { Cocktail } from '../../../types';

type Props = {
  cocktails: Array<Cocktail> | null;
  loading: boolean;
  error: string | null;
}

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
              No Cocktails found! Please try again
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
        </>
      )}
    </div>
  );
};

export default View;
