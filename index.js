var button = document.getElementById('btn');
var result = document.getElementById('result');

button.addEventListener('click', function(e) {
  e.preventDefault();

  var weight = document.getElementById('cw').value;
  var bodyFat = document.getElementById('bf').value;
  var minBodyFat = document.getElementById('mbf').value;


  var weight = weight-(bodyFat-minBodyFat)*weight/100;

  result.innerText = weight +' lbs';
})
