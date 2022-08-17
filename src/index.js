import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');




inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch() {
	listEl.innerHTML = '';
	if (inputEl.value !== '') {

		trimInput = (inputEl.value).trim();
		fetchCountries(trimInput)
			.then(d => {
				if (d.length > 10) {
					Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
				}
				if (d.length >= 2 && d.length <= 10) {

					listEl.insertAdjacentHTML('beforeend', createListItems(d));
					function createListItems(d) {
						return d.map((elementItem) => {
							return `<li class="flags"><img class="img-flag" src="${elementItem.flags.svg}"/>${elementItem.name.official}</li>`;
						}).join('');

					}

				}
				if (d.length === 1) {
					listEl.insertAdjacentHTML('beforeend', createListItems(d));
					function createListItems(d) {
						return d.map((elementItem) => {

							return `<div class="flags"><img class="img-flag" src="${elementItem.flags.svg}"/>${elementItem.name.official}</div>
							<div class="info"><span class="title-info">Capita:</span> ${elementItem.capital}</div>
							<div class="info"><span class="title-info">Population:</span> ${elementItem.population}</div>
							<div class="info"><span class="title-info">Languages:</span> ${Object.values(elementItem.languages)}</div>`
						}).join('');

					}
				}
			}
			)
			.catch(error => {
				Notiflix.Notify.failure(`Oops, there is no country with that name`);
			})
			;

	}
}