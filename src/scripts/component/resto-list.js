class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        h2 .title-content3 {
          text-align: center;
          font-size: 40px;
          font-family: "Roboto", sans-serif;
        }
        </style>
      <h2>
        <center><span id="list" class="title-content3">Explore Restaurant</span></center>
      </h2>
      <div id="resto-list" class="row"></div>
      `;
  }
}

customElements.define('resto-list', RestoList);
