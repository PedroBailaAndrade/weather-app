const searchElement = document.querySelector('[data-city-search]');
const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener('places_changed', () => {
  const place = searchBox.getPlaces()[0]
  if (place == null) return
  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepted': 'application/json'
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  }).then(res => res.json()).then(data => {
    setWeatherData(data, place.formatted_address)
  })
})








// window.addEventListener("load", () => {
//   let long;
//   let lat;
//   let locationName = document.querySelector(".location-name")
//   let temperatureDescription = document.querySelector(".temperature-discription")
//   let temperatureDegree = document.querySelector(".temperature-degree")
//   let icon = document.querySelector(".icon")
//   let temperatureSection = document.querySelector(".temperature")
//   const temperatureSpan = document.querySelector(".temperature span")

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       const key = `522eb3708f95c8b0b1700def0755b23a`;
//       const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
//       fetch(url)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           console.log(data);
//           const name = data.name;
//           const {temp, humidity} = data.main;
//           const {main, description} = data.weather["0"];

//           temperatureDegree.textContent = temp;
//           temperatureDescription.textContent = description;
//           locationName.textContent = name;
//           icon.src = `https://openweathermap.org/img/w/${data.weather["0"].icon}.png`;

//           let fahrenheit = (temp * 9/5) + 32;

//           temperatureSection.addEventListener("click", () => {
//             if(temperatureSpan.textContent === "Cº") {
//               temperatureSpan.textContent = "Fº"
//               temperatureDegree.textContent = Math.floor(fahrenheit);
//             } else{
//               temperatureSpan.textContent = "Cº"
//               temperatureDegree.textContent = temp;
//             }
//           });
//         });
//     });
//   }
// });
