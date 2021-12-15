let citiesData = {
    tehran: {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    shiraz: {city: 'Shiraz', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
    tabriz: {city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
    mashhad: {city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
    esfahan: {city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
}
let $ = document
let searchBar = document.querySelector('.search-input')
let searchBtn = document.querySelector('.search')
let infoDisplay = document.querySelector('.info')
let loadingDisplay = document.querySelector('.loading')

searchBtn.addEventListener('click', function(){
    let searchBarValue = searchBar.value
    let mainCitesData = citiesData[searchBarValue]
     if (mainCitesData === undefined){
        infoDisplay.style.display = 'block'
     } else {
        loadingDisplay.style.display = 'block'
        $.querySelector('.city').innerHTML = "Weather in " + mainCitesData.city
        $.querySelector('.temp').innerHTML = mainCitesData.temp + '°C'
        $.querySelector('.description').innerHTML = mainCitesData.weather
        $.querySelector('.humidity').innerHTML = "Humidity: " +  mainCitesData.humidity
        $.querySelector('.wind').innerHTML = "Wind speed: " +  mainCitesData.windSpeed + 'km/h'
        $.querySelector('.weather').classList.remove('loading')
     }
})