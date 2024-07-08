console.log('hello');
//<% post.image.forEach(imag => { %> <% }) %>
// Get the button element
const addButton = document.getElementById('addButton');
// Get the div element where we want to add the image input
const addImgDiv = document.querySelector('.add_img');

// Function to create and append the image input
function addImageInput() {
  const imageInput = document.createElement('input');
  imageInput.type = 'url';
  imageInput.name = 'image';
  imageInput.id = 'image';
  addImgDiv.appendChild(imageInput);
}

// Add event listener to the button
addButton.addEventListener('click', addImageInput);
