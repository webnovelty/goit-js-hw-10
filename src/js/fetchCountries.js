export function fetchCountries(name) {
	const url = `https://restcountries.com/v3.1/name/${name}`;
	return fetch(url)
		.then(r => r.json())
		.then(d => (console.log(d)));
}
