
import Weather from './request';

const searchbtn = document.querySelector('#change-btn');


const weather = new Weather(document.querySelector('#city').value);

const populateUi = () => {
  const getReport = () => {
    weather.getWeather()
      .then(result => {
        document.querySelector('#location').textContent = `${result[1].country}`;
        document.querySelector('#description').textContent = `The weather will be ${result[0][0].description}`;
        document.querySelector('#temp').textContent = `Temperature is ${result[2].temp}`;
      })
      .catch(() => {
        const errorMessage = document.querySelector('#error');
        errorMessage.setAttribute('class', 'alert alert-warning');
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = 'PLEASE SEARCH FOR A VALID CITY AND COUNTRY';
      });
  };


  document.addEventListener('DOMContentLoaded', getReport);
  searchbtn.addEventListener('click', () => {
    const cityInput = document.querySelector('#city').value;


    weather.changeLocation(cityInput);
    getReport();

    $('#locmodal').modal('hide');
  });
};

export default populateUi;
