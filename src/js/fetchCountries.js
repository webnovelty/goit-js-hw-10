export function fetchCountries(name) {
	const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
	return fetch(url)
		.then(r => {
			if (!r.ok) {
				throw new Error(r.status);
			}
			return r.json()
		})
		.then(d => {
			return d;
		});
}
