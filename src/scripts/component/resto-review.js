class RestoReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h3>Reviews</h3>
      <div id="resto-review"></div>
      `;
  }
}

customElements.define('resto-review', RestoReview);
