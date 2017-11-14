import {html} from '../lit-html/lit-html';
import {render} from '../lit-html/lib/lit-extended';

declare var functionPlot: any;

export class FunctionPlotElement extends HTMLElement {
    _data: any;

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
        `, this);

        functionPlot({
            target: '#graph',
            data: this.data
        });
    }
}

window.customElements.define('function-plot', FunctionPlotElement);
