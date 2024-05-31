
var clothing = document.querySelectorAll('.clothing')
clothing.forEach(function(element) {
  element.style.display = 'none';
});



function refresh(up) {
  location.reload();
}


function toggleImage(imageId, button) {
    var image = document.getElementById(imageId);
    button.classList.toggle('clicked');
    if (image.style.display === 'none' || image.style.display === '') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
}


function tieHair(up, down) {
  var hairup = document.getElementById(up);
  var hairdown = document.getElementById(down);
  if (hairup.style.display === 'none' || hairup.style.display === ''){
    hairup.style.display = 'block';
    hairdown.style.display = 'none';
  }
  else {
    hairup.style.display = 'none';
    hairdown.style.display = 'block';
  }

  }
