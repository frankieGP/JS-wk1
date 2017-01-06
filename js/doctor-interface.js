var apiKey = "1bc1ec65881d0f1c0d0f1790b157ef2e";

$(document).ready(function() {
  $('#doctor-button').click(function() {
    var doctor = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The doctors are " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {

  });
});
