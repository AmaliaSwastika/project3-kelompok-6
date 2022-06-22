function validate()
{
var username=document.getElementById("USERNAME").value;
var password=document.getElementById("PASSWORD").value;
var fullname=document.getElementById("FULLNAME").value;
var numberphone=document.getElementById("NUMBERPHONE").value;
var email=document.getElementById("EMAIL").value;

if (username != "" && password!="" && fullname !="" && numberphone.length >=12 && numberphone > 0 && email!="") {
            alert("Register Succesfully!");
    location.assign("Reservation.html")
            return false;
            }else{
    alert('You Must Complete The Data First!');
        }
    }