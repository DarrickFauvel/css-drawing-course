const template = document.createElement("template")
template.innerHTML = /*html*/ `
<style>
  .diamond {
    --color-green1: #1fb67c;
    --color-green2: #20bc7d;
    --color-green3: #26c893;
    --color-green4: #55ddb9;

    --facet-color1: var(--color-green1);
    --facet-color2: var(--color-green2);
    --facet-color3: var(--color-green3);
    --facet-color4: var(--color-green4);

    position: relative;
    width: 100%;
    height: 100%;
    //transform: rotate(45deg);

    .facet {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-top: 3.125em solid var(--facet-color1);
      border-right: 3.125em solid var(--facet-color2);
      border-bottom: 3.125em solid var(--facet-color3);
      border-left: 3.125em solid var(--facet-color4);

      &:nth-child(1) {
        top: 0;
        left: 0;
        border-top: 3.125em solid transparent;
        border-left: 3.125em solid transparent;
      }

      &:nth-child(2) {
        top: 0;
        left: 6.25em;
      }

      &:nth-child(3) {
        top: 6.25em;
        left: 0;
      }

      &:nth-child(4) {
        top: 6.25em;
        left: 6.25em;
      }
    }
  }
</style>

<div class="diamond">
  <span class="facet"></span>
  <span class="facet"></span>
  <span class="facet"></span>
  <span class="facet"></span>
</div>
`

class DiamondComponent extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define("diamond-component", DiamondComponent)
