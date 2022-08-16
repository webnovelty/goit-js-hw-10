import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');


inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch() {
	if (inputEl.value !== '') {
		fetchCountries(inputEl.value);
	}
}