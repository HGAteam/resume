// var full_name = document.querySelector('span ["class="full_name"]');
// var age = document.querySelector('span ["class="age"]');
// var address = document.querySelector('span ["class="address"]');
// var email = document.querySelector('span ["class="email"]');
$(document).ready(function () {
  var img = document.querySelector("img");
  var age = document.getElementById("age");

  calcularEdad()

  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      let results = data.results;
      results.forEach((result) => {
        img.src = result.picture.large;
        console.log(result.dob.date);
      });
    },
  });

  function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = new Date('06/05/1989');
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return age.innerText = edad;
  }

  function changeInfo(){
    
  }
});
