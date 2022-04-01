//capture the data from the url
//display data on the page

var urlData = document.location.search;
var mainEl = $("#main");
// console.log(urlData);

var searchTerm = urlData.split("&")[0].split("=")[1];
var format = urlData.split("&")[1].split("=")[1];

var apiUrl = "https://www.loc.gov/collections/?fo=json&title=" + searchTerm + "&original_format=" + format;
console.log(apiUrl);

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results[0]);
        for (let i = 0; i < data.results.length; i++) {


            var articleEl = $("<article class='p-10'>");
            var titleEl = $("<h2>");
            var pEl = $("<p>");
            var descriptionEl = $("<p>");
            var moreBtn = $("<button>");

            titleEl.text(data.results[i].title);
            articleEl.append(titleEl);

            descriptionEl.text(data.results[i].description[0]);
            articleEl.append(descriptionEl);

            mainEl.append(articleEl);
        }
    });