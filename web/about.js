
function handleSubmit(evt) {
	evt.preventDefault();

	alert ("Successfully Submitted")

}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


var e = document.getElementById('cartooncat');

e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}

e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}   
