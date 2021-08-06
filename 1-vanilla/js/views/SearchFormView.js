import { qs, on } from '../helpers.js';
import View from "./View.js";

export default class SearchFormView extends View {
    constructor() {
        super(qs('#search-form-view'));

        this.inputEelement = qs('[type=text]', this.element);
        this.resetElement = qs('[type=reset]', this.element);

        this.showResetButton(false);
        this.bindEvent();
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? 'block' : 'none';
    }

    bindEvent() {
        on(this.inputEelement, 'keyup', () => this.handleKeyup());
        on(this.element, 'submit', (e) => this.handleSubmit(e));
    }

    handleKeyup() {
        const { value } = this.inputEelement;
        this.showResetButton(value.length > 0);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const { value } = this.inputEelement;
        this.emit('@submit', { value });
    }
}