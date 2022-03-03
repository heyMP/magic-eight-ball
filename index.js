import { html, LitElement } from 'https://unpkg.com/lit?module';

class SimpleDemo extends LitElement {
	static get properties() {
		return {
			value: {
				type: String
			}
		}
	}

	constructor() {
		super();
		this.value = ''
	}

	firstUpdated() {
		fetch('/api')
			.then(res => res.text())
			.then(res => this.value = res)
	}

	render() {
		return html`
			The 🎱 says:
			${!this.value ? html`🤔` : html`${this.value}`}
		`
	}
}

customElements.define('simple-demo', SimpleDemo);