let colors = ["red","blue","green","purple"];
console.log(colors[1]);
console.log(colors.length);


colors.push("magenta");
console.log(colors);

//removes the last element of the array
colors.pop();
console.log(colors);

//to add   index, how many to delete, value
colors.splice(2,0,"yellow");
console.log(colors);

colors.splice(0,1);
console.log(colors);

//generate a random number between 0 and 2


document.getElementById("clickButton").addEventListener("click",generateNumber);


function generateNumber(){

    let randomInt = Math.floor(Math.random() * 3);
    document.getElementById("randomNumber").textContent = randomInt;
}


