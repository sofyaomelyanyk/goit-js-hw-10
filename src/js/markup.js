export function createMarkupCountryInfo(arr) {
  return arr
    .map(
      ({ name, capital, population, flags, languages }) =>
        `<div class="country-name"><img src="${
          flags.svg
        }" alt="Flag" width="50" height="30"/><h1 class="country-title">${
          name.official
        }</h1></div><ul><li>Capital: ${capital}</li><li>Population: ${population}</li><li>Languages: ${Object.values(
          languages
        )}</li></ul>`
    )
    .join('');
}

export function createMarkupCountryList(arr) {
  return arr
    .map(
      ({ name, flags }) =>
        `<li class="country-item"><img src="${flags.svg}" alt="Flag" width="50" height="30"/><h1 class="country-title">${name.official}</h1></li>`
    )
    .join('');
}
