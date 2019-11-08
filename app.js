window.addEventListener("load", () => {
  let long;
  let lat;
  let locationName = document.querySelector(".location-name")
  let temperatureDescription = document.querySelector(".temperature-discription")
  let temperatureDegree = document.querySelector(".temperature-degree")

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const key = `522eb3708f95c8b0b1700def0755b23a`;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const name = data.name;
          const {temp, humidity} = data.main;
          const {main, description, icon} = data.weather["0"];

          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          locationName.textContent = name;
        });
    });
  }
});
