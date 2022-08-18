export function fetchCountries(name) {
	const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
	return fetch(url)
		.then(d => {
			if (!d.ok) {
				throw new Error(d.status);
			}
			return d.json()
		})
		;
}
