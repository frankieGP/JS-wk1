var Doctor = require('./../js/aliment.js').doctorModule;

$(document).ready(function() {
  $('#aliment-form').submit(function(event) {
    event.preventDefault();
    var userAliment = $('#user-aliment').val();
    var doctors = new Doctor("hot pink");
    // var output = doctors.pingPong(user-aliment);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

exports.doctorModule = Doctor;
