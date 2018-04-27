//set profile variables
let info = "", email = "", birthday = "", address = "", phone = "", key = "", image = "";
//create xhr object
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api'); //setting url for api call
xhr.send(); //send request


xhr.onreadystatechange = function(){
    const DONE = 4; //ready state for DONE status
    const OK = 200; //http status for successful response
    if (xhr.readyState === DONE){
        if (xhr.status === OK) {
            let response = JSON.parse(xhr.responseText); //parse string into JSON
            let person = response.results[0];
            buildProfile(person); //set profile variables
        }
        else {
            console.log('Error: ' + xhr.status);
        }
    }
};

function buildProfile(person){
    info = person.name.first;
    email = person.email;
    birthday = person.dob;
    phone = person.phone;
    address = `${person.location.street} | ${person.location.city}`;
    image = person.picture.large;
    key = person.login.password;

    console.log(person);
    document.getElementById("profile-pic").style.background = `url("${image}") no-repeat center center/cover`;
};

function showEmail(){
    document.getElementById("text").innerHTML = email;
}

function showInfo(){
    document.getElementById("text").innerHTML = info;
}

function showBirthday(){
    document.getElementById("text").innerHTML = birthday;
}

function showPhone(){
    document.getElementById("text").innerHTML = phone;
}

function showAddress(){
    document.getElementById("text").innerHTML = address;
}

function showPassword(){
    document.getElementById("text").innerHTML = key;
}

function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("success-modal").style.display = "inherit";
});
