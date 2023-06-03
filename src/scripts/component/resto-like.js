class RestoFavorite extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        h2 .title-content {
            text-align: center;
            font-size: 40px;
            font-family: "Roboto", sans-serif;
        }
        </style>
      <h2>
        <center><span class="title-content">Favorite Restaurant</span></center>
        <center><p class="sub-heading">Your Favorite Restaurant</p></center>
      </h2>
  
      <div id="resto-list" class="row resto-list"></div>
      `;
    }
}

customElements.define('resto-favorite', RestoFavorite);