//takes the input of the names
document.getElementById("btnRandomNames").addEventListener("click", btnClick);
document.getElementById("btnAllNicknames").addEventListener("click", generateMultiple);

let Nicknames = ["The Man", "The Bomb", "Awesome", "Smartest", "Master At Coding", "Individual"];

function btnClick(){

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    return document.getElementById("Nickname").innerHTML = generateAName(firstName, lastName);
}

function generateAName(firstName, lastName){

    let randomNum = Math.floor(Math.random() * Nicknames.length);

    return firstName + " '" + Nicknames[randomNum] + "' " + lastName;
}

function generateMultiple(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    text = "";
    for(i = 0; i < Nicknames.length; i++){
        text +=  firstName + " '" + Nicknames[i] + "' " + lastName + "<br>";
    }

    document.getElementById("Nickname").innerHTML = text;
}
