// var button = document.getElementById('next');
// console.log(button.innerHTML);
// button.innerHTML = 'Наступне фото';
// console.log(button.innerHTML);

var currentPhotoIndex = 1;
var photosCount = 5;

function nextPhoto() {
    currentPhotoIndex++;  //currentPhotoIndex = currentPhotoIndex + 1; currentPhotoIndex += 1;
    if (currentPhotoIndex > photosCount) currentPhotoIndex = 1;

    var img = document.getElementById('currentPhoto');
    img.src = "images/photo" + currentPhotoIndex + ".jpg";
    console.log(img.src);
}

function addPhoto() {
    var newImage = document.createElement("img");
    currentPhotoIndex++;
    if (currentPhotoIndex > photosCount) currentPhotoIndex = 1;

    newImage.src = "images/photo" + currentPhotoIndex + ".jpg";
    var gallery = document.getElementById('gallery');
    gallery.appendChild(newImage);
}

