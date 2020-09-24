$("#submitButton").on("click", function (e) {
    e.preventDefault();
    console.log("button clicked");
    var city = $("#citySelect").children("option:selected").val()
    var date = $("#dateInput").val()
    var keywords = $("#keywordInput").val()
    var APIkey = "406718fbed1888cdf91f422159a0c803";

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#weatherEl").text(JSON.stringify(response));
    });

})


