# icketmaster API

https://developer.ticketmaster.com/products-and-docs/tutorials/events-search/search_events_in_location.html

Consumer API Key Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT

## JavaScript API Key URL

https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT

## Example Script:

```javascript
$.ajax({
  type: "GET",
  url:
    "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Gc8utzxGO1i0GSfZTsAAGFEf3xb5CDJT",
  async: true,
  dataType: "json",
  success: function (json) {
    console.log(json);
    // Parse the response.
    // Do other things.
  },
  error: function (xhr, status, err) {
    // This time, we do not end up here!
  },
});
```

## API Documenntation

[TicketMaster API Docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)

## API
