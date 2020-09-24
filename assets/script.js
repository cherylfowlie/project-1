
function displayEventsLocation() {
    // Create a function for ticket master API
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT";
    // var event = $(this).attr("data-event");

    $.ajax({
        type: "GET",
        url: queryURL,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            // Parse the response.
            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });
};

