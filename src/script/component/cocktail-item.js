class CocktailItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set cocktail(cocktail) {
    this._cocktail = cocktail;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .img-cocktail {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .cocktail-info {
                padding: 24px;
            }
            
            .cocktail-info > h2 {
                font-weight: lighter;
                text-align: center;
            }
            
            .cocktail-info > p {
                margin-top: 10px;
                text-align: justify;
                text-indent: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 13; /* number of lines to show */
            }
       </style>
       <img class="img-cocktail" src="${this._cocktail.strDrinkThumb}" alt="Cocktail Image">
       <div class="cocktail-info">
           <h2>${this._cocktail.strDrink}</h2>
           <p>${this._cocktail.strInstructions}</p> 
       </div>`;
  }
}

customElements.define('cocktail-item', CocktailItem);
