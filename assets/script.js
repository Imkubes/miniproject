//attach an event listener to the button
//link button to another page
//capture search term and send it in url
//capture user input/select input and send that to another file
//fetch the api with input

var submitBtn = $("#submit");
var searchTerm = $("#search-term");
var format = $("#format");

submitBtn.on("click", function (event) {
    event.preventDefault();
    // alert("hello");
    // console.log(searchTerm.val());
    var userSearchTerm = searchTerm.val();
    var userFormat = format.val();
    document.location.href = "./results.html?search=" + userSearchTerm + "&format=" + userFormat;
});