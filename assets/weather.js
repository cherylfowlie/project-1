var today = moment().format("MMM Do YY");

var day1 = moment().add(1, "days").format("DD MMM YYYY");
var day2 = moment().add(2, "days").format("DD MMM YYYY");
var day3 = moment().add(3, "days").format("DD MMM YYYY");
var day4 = moment().add(4, "days").format("DD MMM YYYY");
var day5 = moment().add(5, "days").format("DD MMM YYYY");

$("#day1Button").text(day1 + "(tomorrow!)");
$("#day2Button").text(day2);
$("#day3Button").text(day3);
$("#day4Button").text(day4);
$("#day5Button").text(day5);

$("#submitButton").on("click", function (e) {
  var city = $("#citySelect").children("option:selected").val();
  var APIkey = "406718fbed1888cdf91f422159a0c803";
  var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();

  // validate if the date or the city values are empty

  if (!dayChoice || !city) {
    return;
  }

  $("#resultsDivId").removeClass("resultsDiv");
  e.preventDefault();

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //$("#weatherEl").text(JSON.stringify(response));

    if (dayChoice === "day1") {
      var day1Text = moment().add(1, "days").format("YYYY-MM-DD") + " 09:00:00";
      var day1Weather = response.list.find(function (item) {
        return item.dt_txt === day1Text;
      });
      var weatherId = day1Weather.weather[0].id;
      var icon_id = day1Weather.weather[0].icon
      var icon_url = "http://openweathermap.org/img/wn/" + icon_id + ".png";
      var img = $("<img>");
      img.attr("src", icon_url);
      $("#weatherEl").text(
        "The weather on " + day1 + " is: " + day1Weather.weather[0].description
      );
      $("#weatherEl").append(img);
    } else if (dayChoice === "day2") {
      var day2Text = moment().add(2, "days").format("YYYY-MM-DD") + " 09:00:00";
      var day2Weather = response.list.find(function (item) {
        return item.dt_txt === day2Text;
      });

      var weatherId = day2Weather.weather[0].id;
      var icon_id = day2Weather.weather[0].icon
      var icon_url = "http://openweathermap.org/img/wn/" + icon_id + ".png";
      var img = $("<img>");
      img.attr("src", icon_url);
      $("#weatherEl").text(
        "The weather on " + day2 + " is: " + day2Weather.weather[0].description
      );
      $("#weatherEl").append(img);
    } else if (dayChoice === "day3") {
      var day3Text = moment().add(3, "days").format("YYYY-MM-DD") + " 09:00:00";
      var day3Weather = response.list.find(function (item) {
        return item.dt_txt === day3Text;
      });
      var weatherId = day3Weather.weather[0].id;
      var icon_id = day3Weather.weather[0].icon
      var icon_url = "http://openweathermap.org/img/wn/" + icon_id + ".png";
      var img = $("<img>");
      img.attr("src", icon_url);
      $("#weatherEl").text(
        "The weather on " + day3 + " is: " + day3Weather.weather[0].description
      );
      $("#weatherEl").append(img);
    } else if (dayChoice === "day4") {
      var day4Text = moment().add(4, "days").format("YYYY-MM-DD") + " 09:00:00";
      var day4Weather = response.list.find(function (item) {
        return item.dt_txt === day4Text;
      });
      var weatherId = day4Weather.weather[0].id;
      var icon_id = day4Weather.weather[0].icon
      var icon_url = "http://openweathermap.org/img/wn/" + icon_id + ".png";
      var img = $("<img>");
      img.attr("src", icon_url);
      $("#weatherEl").text(
        "The weather on " + day4 + " is: " + day4Weather.weather[0].description
      );
    } else if (dayChoice === "day5") {
      var day5Text = moment().add(5, "days").format("YYYY-MM-DD") + " 09:00:00";
      var day5Weather = response.list.find(function (item) {
        return item.dt_txt === day5Text;
      });
      var weatherId = day5Weather.weather[0].id;
      var icon_id = day51Weather.weather[0].icon
      var icon_url = "http://openweathermap.org/img/wn/" + icon_id + ".png";
      var img = $("<img>");
      img.attr("src", icon_url);
      $("#weatherEl").text(
        "The weather on " + day5 + " is: " + day5Weather.weather[0].description
      );
      $("#weatherEl").append(img);
    }
  });
});
