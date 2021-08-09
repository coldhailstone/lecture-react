import { qs, on } from '../helpers.js';
import View from "./View.js";

export default class SearchFormView extends View {
    constructor() {
        super(qs('#search-form-view'));

        this.inputEelement = qs('[type=text]', this.element);
        this.resetElement = qs('[type=reset]', this.element);

        this.showResetButton(false);
        this.bindEvents();
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? 'block' : 'none';
    }

    bindEvents() {
        on(this.inputEelement, 'keyup', () => this.handleKeyup());
        on(this.resetElement, 'click', () => this.handleReset());
        this.on('submit', (e) => this.handleSubmit(e));
    }

    handleKeyup() {
        const { value } = this.inputEelement;
        this.showResetButton(value.length > 0);

        if (value.length <= 0) {
            this.handleReset();
        }
    }

    handleReset() {
        this.emit('@reset');
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const { value } = this.inputEelement;
        this.emit('@submit', { value });
    }

    show(value = "") {
        this.inputEelement.value = value;
        this.showResetButton(this.inputEelement.value.length > 0);

        super.show();
    }
}