$("#submitButton").on("click", function (event) {
    event.preventDefault();

    var city = $(this).attr("#citySelect");
    var date = $(this).attr("#dateInput");
    var keyword = $(this).attr("#keywordInput");

    // Create a function for ticket master API
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "startDateTime=" + date + "keywordInput=" + keyword + "&apikey=Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT";
    // var event = $(this).attr("data-event");

    $.ajax({
        type: "GET",
        url: queryURL,
        async: true,
        dataType: "json"
    }).then(function (json) {
        //Add console Log for JSON Dump
        console.log(json);
        $("#eventEl").text(JSON.stringify(response));
        // Parse the response.
        // Do other things.
    });

});