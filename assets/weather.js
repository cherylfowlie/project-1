var today = moment().format("MMM Do YY");

var day1 = moment().add(1, "days").format("YYYY-MM-D");
var day2 = moment().add(2, "days").format("YYYY-MM-D");
var day3 = moment().add(3, "days").format("YYYY-MM-D");
var day4 = moment().add(4, "days").format("YYYY-MM-D");
var day5 = moment().add(5, "days").format("YYYY-MM-D");

$("#day1Button").text(day1 + "(tomorrow!)");
$("#day2Button").text(day2);
$("#day3Button").text(day3);
$("#day4Button").text(day4);
$("#day5Button").text(day5);

$("#submitButton").on("click", function (e) {
  e.preventDefault();
  $("#resultsDivId").removeClass("resultsDiv");

  var city = $("#citySelect").children("option:selected").val();
  var APIkey = "406718fbed1888cdf91f422159a0c803";

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //$("#weatherEl").text(JSON.stringify(response));

    var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();

    if (dayChoice === "day1") {
      var weatherId = response.list[7].weather[0].id;
      $("#weatherEl").text(
        "The weather on " +
          day1 +
          " is: " +
          response.list[7].weather[0].description
      );
    } else if (dayChoice === "day2") {
      var weatherId = response.list[16].weather[0].id;
      $("#weatherEl").text(
        "The weather on " +
          day2 +
          " is: " +
          response.list[16].weather[0].description
      );
    } else if (dayChoice === "day3") {
      var weatherId = response.list[24].weather[0].id;
      $("#weatherEl").text(
        "The weather on " +
          day3 +
          " is: " +
          response.list[24].weather[0].description
      );
    } else if (dayChoice === "day4") {
      var weatherId = response.list[32].weather[0].id;
      $("#weatherEl").text(
        "The weather on " +
          day4 +
          " is: " +
          response.list[32].weather[0].description
      );
    } else if (dayChoice === "day5") {
      var weatherId = response.list[40].weather[0].id;
      $("#weatherEl").text(
        "The weather on " +
          day5 +
          " is: " +
          response.list[40].weather[0].description
      );
    }
  });
});
