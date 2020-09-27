$("#submitButton").on("click", function (event) {
  event.preventDefault();

  var city = $("#citySelect").children("option:selected").val();
  var keyword = $("#keywordInput").val();
  var dayChoice = $("input[name=datePicker]:checked", ".form-group").val();

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

  console.log(date);

  // Create a function for ticket master API
  // + city + "startDateTime=" + date
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events.json?" +
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
    async: true,
    dataType: "json",
  }).then(function (json) {
    //Add console Log for JSON Dump
    console.log(json);
    //$("#eventEl").text(JSON.stringify(json));
    // Parse the response.
    // Do other things.

    // Storing the rating data
    //Grab responce event name
    var eventName = json.name;
    // Create Div to display event names on the chosen date
    var EventDiv = $("<div class='movie'>");
    var pEvent = $("<p>").text("Event Name: " + eventName);

    // Display List of Event Names
    EventDiv.append(pEvent);
  });
});

$("#clearButton").on("click", function (event) {
  //Empty form on button click
  event.preventDefault();
  $("form").empty();
});
