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

function saveOutfit() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var images = document.querySelectorAll('.base, .clothing');
  var loadedImages = 0;
  
  // Set canvas size
  var base = document.getElementById('base');
  canvas.width = base.naturalWidth;
  canvas.height = base.naturalHeight;

  images.forEach(function(img) {
    if (img.style.display !== 'none') {
      var image = new Image();
      image.src = img.src;
      image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        loadedImages++;
        if (loadedImages === images.length) {
          var dataURL = canvas.toDataURL();
          saveToLocalStorage(dataURL);
        }
      }
    } else {
      loadedImages++;
    }
  });
}

function saveToLocalStorage(dataURL) {
  var gallery = JSON.parse(localStorage.getItem('gallery')) || [];
  gallery.push(dataURL);
  localStorage.setItem('gallery', JSON.stringify(gallery));
  alert('Outfit saved!');
}

function showGallery() {
  var gallery = JSON.parse(localStorage.getItem('gallery')) || [];
  var galleryContent = document.getElementById('galleryContent');
  galleryContent.innerHTML = '';
  gallery.forEach(function(dataURL, index) {
    var img = document.createElement('img');
    img.src = dataURL;
    img.className = 'galleryImage';
    galleryContent.appendChild(img);
  });
  document.getElementById('gallery').style.display = 'block';
}

function closeGallery() {
  document.getElementById('gallery').style.display = 'none';
}
