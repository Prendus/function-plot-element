import {html} from '../lit-html/lit-html';
import {render} from '../lit-html/lib/lit-extended';

declare var functionPlot: any;

export class FunctionPlotElement extends HTMLElement {
    _data: any;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case 'data': {
                this.data = JSON.parse(newVal);
                return;
            }
        }
    }

    set data(val) {
        this._data = val;
        this.render();
    }

    get data() {
        return this._data;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        render(html`
            <div id="graph"></div>
        `, this.shadowRoot);

        functionPlot({
            target: this.shadowRoot.querySelector('#graph'),
            data: this.data
        });
    }
}

window.customElements.define('function-plot', FunctionPlotElement);
