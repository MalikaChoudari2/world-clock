setInterval(function () {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("ddd, Do MMMM YYYY");

    londonTimeElement.innerHTML = londonTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("ddd, Do MMMM YYYY");

    newyorkTimeElement.innerHTML = newyorkTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  let hawaiiElement = document.querySelector("#hawaii");
  if (hawaiiElement) {
    let hawaiiDateElement = hawaiiElement.querySelector(".date");
    let hawaiiTimeElement = hawaiiElement.querySelector(".time");
    let hawaiiTime = moment().tz("US/Hawaii");

    hawaiiDateElement.innerHTML = hawaiiTime.format("ddd, Do MMMM YYYY");

    hawaiiTimeElement.innerHTML = hawaiiTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("ddd, Do MMMM YYYY")}</div>
    </div>
      <div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
