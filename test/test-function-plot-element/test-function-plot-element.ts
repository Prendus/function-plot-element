import {FunctionPlotElement} from '../../node_modules/function-plot-element/function-plot-element';
import {html} from '../../node_modules/lit-html/lit-html';
import {render} from '../../node_modules/lit-html/lib/lit-extended';

FunctionPlotElement;

class TestFunctionPlotElement extends HTMLElement {
    data: any;

    connectedCallback() {
        this.data = [{
            fn: 'x^4'
        }];
        this.render();
    }

    render() {
        render(html`
            <function-plot data='[{"fn": "x^4"}, {"fn": "x^2"}]'></function-plot>
        `, this);
    }
}

window.customElements.define('test-function-plot-element', TestFunctionPlotElement);
