let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');

let getWeather = () =>{
    let cityValue=cityRef.value;
    if(cityValue.length==0)
    {
        result.innerHTML=`<h3> Please Enter City Name </h3>`
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        //Clear the input field
        cityRef.value = "";
        fetch(url)
          .then((resp) => resp.json())
          //If city name is valid
          .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].description}</h4>
            <h5 class="weatherlite">${data.weather[0].main}</h5>
            <img class = "icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
            `})
      .catch(()=>{
        result.innerHTML=`<h3 class="error-msg"> City Not Found</h3>`
      })
      
    }
}
searchBtn.addEventListener("click",getWeather)
window.addEventListener("load",getWeather);
