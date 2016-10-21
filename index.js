var form = document.getElementById('form');
var result = document.getElementById('result');

form.onsubmit =  function(e) {
  e.preventDefault();

  result.classList.remove('fadeIn');
  setTimeout(function(){
    result.classList.add('fadeIn');
    var weight = document.getElementById('cw').value;
    var bodyFat = document.getElementById('bf').value;
    var minBodyFat = document.getElementById('mbf').value;


    var weight = weight-(bodyFat-minBodyFat)*weight/100;

    result.innerText = weight +' lbs';
  }, 10);
}
