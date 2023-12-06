function updateTime() {
  let budapestElement = document.querySelector("#budapest");
  if (budapestElement) {
    let budapestDateElement = budapestElement.querySelector(".date");
    let budapestTimeElement = budapestElement.querySelector(".time");
    let budapestCurrentTime = moment().tz("Europe/Budapest");

    budapestDateElement.innerHTML = budapestCurrentTime.format("MMMM Do YYYY");
    budapestTimeElement.innerHTML = budapestCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let acoresElement = document.querySelector("#acores");
    if (acoresElement) {
      let acoresDateElement = acoresElement.querySelector(".date");
      let acoresTimeElement = acoresElement.querySelector(".time");
      let acoresTime = moment().tz("Atlantic/Azores");

      acoresDateElement.innerHTML = acoresTime.format("MMMM Do YYYY");
      acoresTimeElement.innerHTML = acoresTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
