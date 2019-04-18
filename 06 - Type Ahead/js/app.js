const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const EMPTY_SUGGESTIONS_HTML = '<li>Filter for a city</li><li>or a state</li>';

const cities = [];
fetch(endpoint)
  .then((response) => response.json())
  .then((json) => cities.push(...json))
  .catch((err) => console.log(err));

const searchCities = (input) => {
  if (!input) return [];

  const regExp = new RegExp(`^${input}`, 'i');

  return cities.filter((city) => city.city.match(regExp) || city.state.match(regExp));
};

const getSuggestionsHtml = (cities) => {
  let html = EMPTY_SUGGESTIONS_HTML;

  if (cities.length) {
    html = cities.reduce((acc, cur) => acc + `<li>${cur.city}, ${cur.state} <span class="population">${cur.population}</span></li>`, '');
  }

  return html;
};

const handleInput = (e) => {
  const input = e.currentTarget.value;
  const cities = searchCities(input);
  const suggestions = getSuggestionsHtml(cities);
  const suggestionsContainer = document.querySelector('.suggestions');

  suggestionsContainer.innerHTML = suggestions;
};

document
  .querySelector('.search')
  .addEventListener('input', handleInput);
