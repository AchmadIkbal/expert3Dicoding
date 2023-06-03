class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        h2 .title-content2 {
            text-align: center;
            font-size: 40px;
            font-family: "Roboto", sans-serif;
        }
        </style>
      <h2>
        <center><span class="title-content2">Detail Restaurant</span></center>
      </h2>
  
      <div id="resto-detail" class="row"></div>
      <div id="favoriteButtonContainer"></div>
      `;
  }
}

customElements.define('resto-detail', RestoDetail);
