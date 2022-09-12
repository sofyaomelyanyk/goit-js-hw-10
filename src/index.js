import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { createMarkupCountryInfo, createMarkupCountryList } from './js/markup';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  const valueStr = e.target.value.trim();
  if (!valueStr) {
    return;
  }

  fetchCountries(valueStr).then(onSuccessResult).catch(onErrorResult);
}

function onSuccessResult(response) {
  if (response.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (response.length > 1) {
    countryList.insertAdjacentHTML(
      'beforeend',
      createMarkupCountryList(response)
    );
    return;
  }

  if (response.length === 1) {
    countryInfo.insertAdjacentHTML(
      'beforeend',
      createMarkupCountryInfo(response)
    );
    return;
  }
}

function onErrorResult() {
  Notify.failure('Oops, there is no country with that name');
}
