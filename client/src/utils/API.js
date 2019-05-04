// import axios from "axios";

// export default {
//   // Gets books from the Google API
//   getBooks: function(q) {
//     return axios.get("/api/google", { params: { q: "title:" + q } });
//   },
//   // Gets all saved books
//   getSavedBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves an book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };

var myUrl = "https://restcountries.eu/rest/v2/all?api_key=";
var myData = {
  firstName: 'Joe',
  lastName: 'Smith'
};
axios.post(myUrl, myData)
  .then(function (response) {
    alert('yeah!');
    console.log(response);
  })
  .catch(function (error) {
    alert('oops');
    console.log(error);
  })
;

axios.post({
  url: "https://restcountries.eu/rest/v2/all?api_key=" + APIKey,
  method: "GET"
})
.then(function(data) {
  console.log(data);
  countries = data;
    //console.log(countries);
    //console.log("Capital of " + countries[0].name + " is " + countries[0].capital);
    //console.log(`The capital of ${countries[0].name} is ${countries[0].capital}`)
  var options = "";
  for (var i = 0; i < countries.length; i++) {
      options += `<option value="${countries[i].capital}">${countries[i].name}</option>`

  }
  countriesList.innerHTML = options;

})

function displayCountryInfo(countryByCapital) {
  var countryData = countries.find(country => country.capital === countryByCapital);
  console.log(countryData);
  
  document.getElementById("language").innerHTML = countryData.languages[0].name;
  document.getElementById("currency").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name}  ${c.symbol}`).join(", ");
  document.getElementById("capital").innerHTML = countryData.capital;

  //Ajax call for weather
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + countryData.capital + "&units=imperial&appid=" + APIKey;
  axios.post({
    url: queryURL,
    method: "GET"
  }).then(function(data) {
    console.log("Weather", data);
    var uluru = {lat: countryData.latlng[0], lng: countryData.latlng[1]};
// The map, centered at Uluru
    map = new google.maps.Map(
    document.getElementById('map'), {zoom: 3, center: uluru});
// The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
// Weather Info
    $("#wind").empty();
    $("#wind").append("<div>" + data.wind.speed + "</div>")
    $("#temp").empty();
    $("#temp").append("<div>" + data.main.temp + "</div>")
    $("#humidity").empty();
    $("#humidity").append("<div>" + data.main.humidity + "</div>")
  })
};