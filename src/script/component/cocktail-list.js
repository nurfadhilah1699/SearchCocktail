import './cocktail-item';

class CocktailList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set cocktails(cocktails) {
    this._cocktails = cocktails;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                text-align: center;
                font-size: 30px;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._cocktails.forEach((cocktail) => {
      const cocktailItemElement = document.createElement('cocktail-item');
      cocktailItemElement.cocktail = cocktail;
      this.shadowDOM.appendChild(cocktailItemElement);
    });
  }
}

customElements.define('cocktail-list', CocktailList);
