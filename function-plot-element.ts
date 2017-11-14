import {html, render} from '../lit-html/lit-html';

class FunctionPlotElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(html`
            <div>Hello there world</div>
        `, this);
    }
}

window.customElements.define('function-plot', FunctionPlotElement);
