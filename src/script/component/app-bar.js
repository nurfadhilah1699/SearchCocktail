class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
        .app-bar {
            padding: 16px;
            width: 100%;
            background-color: #F9B208;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        .app-bar span {
            font-size: 28px;
            align-self: center;
            font-weight: bold;
        }
       </style>
       <div id="appBar" class="app-bar">
            <img src="https://cdn-icons.flaticon.com/png/512/3085/premium/3085958.png?token=exp=1635529856~hmac=c72f41e289a5dbbbbbae32d00feac4d8" alt="Logo" style="width:40px;">
            <span>The Cocktails</span>
       </div>`;
  }
}

customElements.define('app-bar', AppBar);
