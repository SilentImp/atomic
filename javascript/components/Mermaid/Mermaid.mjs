import Slide from '../Slide/Slide.mjs';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const CSS_URL = new URL('./Mermaid.css', import.meta.url).href;
const templateHTML = (id) => ({dataset} = {}) => {
  return `<style>@import "${CSS_URL}";</style>
<pre class="mermaid" id="${id}"><slot></slot></pre>`;
};

class Mermaid extends Slide {
  constructor() {
    const id = self.crypto.randomUUID();
    super({
      slot: templateHTML(id)
    });
    this.id = id;
  }

  connectedCallback() {
    // super.connectedCallback();
    setTimeout(() => {  
      console.log('connectedCallback');
      mermaid.initialize({
        logLevel: 3,
        securityLevel: 'loose',
      });
    }, 1000);
  }
}
      
customElements.define('ex-mermaid', Mermaid);

export default Mermaid;