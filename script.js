var fullname = prompt ("Please input your fullname :>");
var Username = prompt ("Please input your username <3");
var Gender = confirm ("Press OKAY if you are a AMAB and Press CANCEL if you are a AFAB");
if (Gender){
Gender = "M";
alert ("Your gender has been set to Male");
}
else{
Gender ="F";
alert ("Your gender has been set to Female");
}
var Desc = prompt ("Please input a shoprt description of yourself ><");
var by = prompt ("Please input your birth year <3");

var profilepic = confirm ("Would you prefer to add a custom profile picture?");
if (profilepic) {
    profilepic = prompt ("Input the jpg or png file");
    alert ("Your profile picture has been set to" + profilepic);
} else {
    profilepic = "prof.png";
    alert ("Your profile picture was not change");
}

document.getElementById("fname").innerHTML = fullname;
document.getElementById("username").innerHTML = Username;
document.getElementById("gender").innerHTML = Gender;
document.getElementById("desc").innerHTML = Desc;
document.getElementById("year").innerHTML = by;
document.getElementById("age").innerHTML = 2023-by;
document.getElementById("ppic").setAttribute ("src", profilepic)

