document.querySelector('.btn').addEventListener('click', getWeather);

const info = document.querySelector('.input').value;
const weather = new Temp(info);

function getWeather(){
    weather.findWeather()
    .then(response => console.log(response))
    .catch(err => console.log(err));
}