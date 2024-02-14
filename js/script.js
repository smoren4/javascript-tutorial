// let X = 'Spring';


// console.log('Hello world!');
// console.log(X + ' ' + 6);

// // alert("STOP WHAT YOU'RE DOING!");

// let userInfo = confirm("Are you sure?");
// console.log(userInfo);

// // write an if statement
// // if the user's response is true or "OK", then print "OK" to the console
// if(userInfo == true){
//     console.log("ok");
// }
// else if(userInfo == false){
//     console.log("cancel");
// }


// // let userInput;
// // userInput =  prompt("What is your name?");
// // console.log(userInput);

// let y = 10;
// if(y == 10){
//     console.log("equal!");
// }
// else{
//     console.log("not equal");
// }

// //create element
// let title = document.createElement('h1');
// //add content to the element
// title.textContent = 'Javascript is fun!';
// //add the element to the page
// document.body.appendChild(title);

// title.textContent += ' ...right?!';

// let valMessage = document.getElementById('val');
// valMessage.textContent += ' gurl!';

// //create element
// let image = document.createElement('img');
// image.className = 'myImage';
// //add image source
// image.src = '../media/images/rok.png';
// //add image to page
// document.body.appendChild(image);



let input = prompt("How is your day?");

let title = document.createElement('h1');
title.id = 'greeting';
title.textContent = input;
document.body.appendChild(title);

let image = document.createElement('img');
image.className = 'myImage';

let imageChoice = confirm("Are you sleepy?");

if(imageChoice == true){
    image.src = '../media/images/rok.png';
}
else{
    image.src = '../media/images/cat1.jpg'; 
}

document.body.appendChild(image);






  



