$("#submitButton").on("click", function (e) {
    e.preventDefault();
    console.log("button clicked");
    var city = $("#citySelect").children("option:selected").val()
    var date = $("#dateInput").val()
    var keywords = $("#keywordInput").val()
    var apiKey = "406718fbed1888cdf91f422159a0c803";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={APIkey};"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#movie-view").text(JSON.stringify(response));
    });

})


