var today = moment().format("MMM Do YY");
console.log(today);

var day1 = moment().add(1, "days").format("MMM Do YY");
var day2 = moment().add(2, "days").format("MMM Do YY");
var day3 = moment().add(3, "days").format("MMM Do YY");
var day4 = moment().add(4, "days").format("MMM Do YY");
var day5 = moment().add(5, "days").format("MMM Do YY");

$("#day1Button").text(day1 + "(tomorrow!)");
$("#day2Button").text(day2);
$("#day3Button").text(day3);
$("#day4Button").text(day4);
$("#day5Button").text(day5);

console.log(day1);
console.log(day5);

$("#submitButton").on("click", function (e) {
  e.preventDefault();
  console.log("button clicked");
  var city = $("#citySelect").children("option:selected").val();
  var APIkey = "406718fbed1888cdf91f422159a0c803";

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //$("#weatherEl").text(JSON.stringify(response));

    console.log(queryURL);
    console.log(response.list[7].main.temp);
    var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();
    console.log(dayChoice);

    if (dayChoice === "day1") {
      $("#weatherEl").text(
        "The weather on " +
          day1 +
          " is: " +
          response.list[7].weather[0].description
      );
    } else if (dayChoice === "day2") {
      $("#weatherEl").text(
        "The weather on " +
          day2 +
          " is: " +
          response.list[16].weather[0].description
      );
    } else if (dayChoice === "day3") {
      $("#weatherEl").text(
        "The weather on " +
          day3 +
          " is: " +
          response.list[14].weather[0].description
      );
    } else if (dayChoice === "day4") {
      $("#weatherEl").text(
        "The weather on " +
          day4 +
          " is: " +
          response.list[22].weather[0].description
      );
    } else if (dayChoice === "day5") {
      $("#weatherEl").text(
        "The weather on " +
          day5 +
          " is: " +
          response.list[30].weather[0].description
      );
    }
  });
});
