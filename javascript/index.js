setInterval(function () {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");

  londonTimeElement.innerHTML = londonTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkTime = moment().tz("America/New_York");

  newyorkDateElement.innerHTML = newyorkTime.format("dddd, Do MMMM YYYY");

  newyorkTimeElement.innerHTML = newyorkTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiTime = moment().tz("US/Hawaii");

  hawaiiDateElement.innerHTML = hawaiiTime.format("dddd, Do MMMM YYYY");

  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}, 1000);
