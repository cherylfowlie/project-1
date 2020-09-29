function getEvents() {
  $("#event1").empty();
  $("#event2").empty();
  $("#event3").empty();
  $("#event4").empty();
  var city = $("#citySelect").children("option:selected").val();
  var keyword = $("#keywordInput").val();
  var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();

  if (!dayChoice || !city) {
    return;
  }

  // turn the user choice to the variable

  if (dayChoice === "day1") {
    var date = moment().add(1, "days").format("YYYY-MM-D");
  } else if (dayChoice === "day2") {
    var date = moment().add(2, "days").format("YYYY-MM-D");
  } else if (dayChoice === "day3") {
    var date = moment().add(3, "days").format("YYYY-MM-D");
  } else if (dayChoice === "day4") {
    var date = moment().add(4, "days").format("YYYY-MM-D");
  } else if (dayChoice === "day5") {
    var date = moment().add(5, "days").format("YYYY-MM-D");
  }

  // Create a function for ticket master API
  // + city + "startDateTime=" + date
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events.json?&dma=701" +
    "keyword=" +
    keyword +
    "&apikey=Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT" +
    "&city=" +
    city;
  // var event = $(this).attr("data-event");

  console.log(queryURL);

  $.ajax({
    type: "GET",
    url: queryURL,
  }).then(function (response) {
    for (i = 0; i < 5; i++);
    {
      console.log(date);
      console.log(response._embedded.events[i].dates.start.localDate);

      if (response._embedded.events[i].dates.start.localDate === date) {
        var eventName = response._embedded.events[i].name;
        console.log(eventName);
        $("#eventEl").html(
          '<a href="' +
            response._embedded.events[i].url +
            ' ">' +
            eventName +
            "</a>"
        );
        $("#upcomingEvent").hide();
        if (weatherId < 800) {
          $("#eventEl").append(
            "<p class='warning'>If your event is going to be outdoors, please be aware that it maybe subject to disruptions due to weather conditions</p>"
          );
        }
      } else {
        $("#eventEl").text("No event found on the day");
        $("#eventsHeading").text("Upcoming Events");

        $("#event1").append(
          '<a href=" ' +
            response._embedded.events[0].url +
            ' ">' +
            response._embedded.events[0].name +
            "</a>" +
            " Date: " +
            response._embedded.events[0].dates.start.localDate
        );
        $("#event2").append(
          '<a href=" ' +
            response._embedded.events[1].url +
            ' ">' +
            response._embedded.events[1].name +
            "</a>" +
            " Date: " +
            response._embedded.events[1].dates.start.localDate
        );
        $("#event3").append(
          '<a href=" ' +
            response._embedded.events[2].url +
            ' ">' +
            response._embedded.events[2].name +
            "</a>" +
            " Date: " +
            response._embedded.events[2].dates.start.localDate
        );
        $("#event4").append(
          '<a href=" ' +
            response._embedded.events[3].url +
            ' ">' +
            response._embedded.events[3].name +
            "</a>" +
            " Date: " +
            response._embedded.events[3].dates.start.localDate
        );
      }
    }
  });
}

$("#clearButton").on("click", function (event) {
  //Empty form on button click
  event.preventDefault();
  $("#resultsDivId").addClass("resultsDiv");
});
