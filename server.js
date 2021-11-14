const express = require("express");



const app = express();
// const router = app.Router;

const port = 4000;


app.listen(port, () => {
    console.log("Listening to port " + port)
})

function StreetState() {
    var day_information = {};
    var cars_in_the_street = Math.random() * 50;
    for (let i = 0; i < cars_in_the_street; i++) {
        var dt = new Date();

        final_date = (`${
            (dt.getMonth()+1).toString().padStart(2, '0')}-${
            dt.getDate().toString().padStart(2, '0')}-${
            dt.getFullYear().toString().padStart(4, '0')}T${
            dt.getHours().toString().padStart(2, '0')}:${
            dt.getMinutes().toString().padStart(2, '0')}:${
            dt.getSeconds().toString().padStart(2, '0')}`
        );
        day_information[i] = {"start_date": final_date};
    }
    return day_information;
}

app.get('/api/v1/streets/:street', function (req, res) {
    
    street = req.params.street;
    console.log("Calculando estacionamientos disponibles en la calle " + street);

    res.send(StreetState());
  })

  var dob;

  //set a range of years
  var min = 1900;
  var max = 2004;
  
  // Math.ceil prevents the value from being 0;
  var month = Math.ceil(Math.random() * 12);
  var day = Math.ceil(Math.random() * 28);
  var year = Math.floor(Math.random() * (max - min) + min);
  
  //this ensures that the format will stay mm/dd/yyyy;
  if(month < 10) {
      month = "0" + month;
  }
  if(day < 10) {
      day = "0" + day;
  }
  //concatenates random dob in mm/dd/yyyy format;
  dob = month + "/" + day + "/" + year;
  
  return dob;