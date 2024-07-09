console.log('hello');
const addButton = document.getElementById('addButton');
const addImgDiv = document.querySelector('.add_img');

// Function to create and append the image input

addButton.addEventListener('click', function addImageInput() {
  const imageInput = document.createElement('input');
  imageInput.type = 'url';
  imageInput.name = 'image';
  imageInput.id = 'image';
  addImgDiv.appendChild(imageInput);
});
