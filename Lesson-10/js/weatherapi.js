const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=1b683f6f487cd75ad1c49c3fbeeb5689";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });