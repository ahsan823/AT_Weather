console.log('Hello World');
let wDate = document.getElementById('wDate');
let City = document.getElementById('City');
let Region = document.getElementById('Region');
let Country = document.getElementById('Country');
let cTemp = document.getElementById('cTemp');
let fLike = document.getElementById('fLike');
let wCondition = document.getElementById('wCondition');
let wSpeed = document.getElementById('wSpeed');
let Humidity = document.getElementById('Humidity');
let wSearch = document.getElementById('wSearch');
let localTime = document.getElementById('localTime');
let cityInput = document.getElementById('cityInput');
wSearch.addEventListener('click', () => {
    let city = cityInput.value;
    let p = fetch(`https://api.weatherapi.com/v1/current.json?key=f6440c42f7d347aca2e75200231107&q=${city}`);
    p.then((response) => {
        return response.json();
    }).then((data) => {
        localTime.innerHTML = `<b>Local Time : ${data.location.localtime}</b>`;
        wDate.innerHTML = `<b>Last Updated : ${data.current.last_updated}</b>`;
        City.innerHTML = `<b>City : ${data.location.name}</b>`;
        Region.innerHTML = `<b>Region : ${data.location.region}</b>`;
        Country.innerHTML = `<b>Country : ${data.location.country}</b>`;
        cTemp.innerHTML = `<b>Temprature : ${data.current.temp_c}<sup>o</sup>C</b>`;
        fLike.innerHTML = `<b>Feels Like : ${data.current.feelslike_c}<sup>o</sup>C</b>`;
        wCondition.innerHTML = `<b>Weather Condition : ${data.current.condition.text}<img src="${data.current.condition.icon}"</b>`;
        wSpeed.innerHTML = `<b>Wind Speed(kph) : ${data.current.wind_kph}kph</b>`;
        Humidity.innerHTML = `<b>Humidity : ${data.current.humidity}</b>`;
    }).catch((err) => {
        console.log(err);
    })
})