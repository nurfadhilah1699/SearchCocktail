import '../component/cocktail-list';
import '../component/search-bar';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cocktailListElement = document.querySelector('cocktail-list');

  const onButtonSearchClicked = () => {
    DataSource.searchCocktail(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    cocktailListElement.cocktails = results;
  };

  const fallbackResult = (message) => {
    cocktailListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
