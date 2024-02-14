// create an array of 3 images
let images = ['../media/images/rok.PNG', '../media/images/cat1.jpg', '../media/images/aztec-circle.png'];

// create an event listener for the button
document.getElementById('randomNumber').addEventListener('click', displayImage);

// create a function that will display an image based on user input
function displayImage(){
    let image = document.getElementById('cat');
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random]; 
} 
