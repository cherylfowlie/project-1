$("#submitButton").on("click", function (event) {
  var city = $("#citySelect").children("option:selected").val();
  var keyword = $("#keywordInput").val();
  var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();

  if (!dayChoice || !city) {
    return;
  }

  event.preventDefault();

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
        $("#eventEl").text(eventName);
        var outdoorInd =
          response._embedded.events[i].classifications.segment.id;
        console.log(outdoorInd);

        if (weatherId < 800 && outdoorInd === "Music") {
          $("#eventEl").append(
            "This event maybe taking place outdoors. Please be aware it maybe subject to disruptions due to weather conditions"
          );
        }
      } else {
        $("#eventEl").text("No event found on the day");
        $("#eventsHeading").text("Upcoming Events");
        $("#event1").text(
          response._embedded.events[0].name +
            "Event Link " +
            response._embedded.events[0].url
        );
        $("#event2").text(
          response._embedded.events[1].name +
            "Event Link " +
            response._embedded.events[1].url
        );
        $("#event3").text(
          response._embedded.events[2].name +
            "Event Link " +
            response._embedded.events[2].url
        );
        $("#event4").text(
          response._embedded.events[3].name +
            "Event Link " +
            response._embedded.events[3].url
        );
      }
    }
  });

  //Add console Log for JSON Dump
  //$("#eventEl").text(JSON.stringify(json));
  // Parse the response.
  // Do other things.

  // Storing the rating data
  //Grab responce event name
  // var eventName = json.name;
  // // Create Div to display event names on the chosen date
  // var EventDiv = $("<div class='movie'>");
  // var pEvent = $("<p>").text("Event Name: " + eventName);

  // // Display List of Event Names
  // EventDiv.append(pEvent);
});

$("#clearButton").on("click", function (event) {
  //Empty form on button click
  event.preventDefault();
  $("#resultsDivId").addClass("resultsDiv");
});

// randomly generate background - not working yet
// var images = ["image1.png", "image2.png", "image3.png"];
// $("html").css({
//   "background-image":
//     "url(../img/" + images[Math.floor(Math.random() * images.length)] + ")",
// });
