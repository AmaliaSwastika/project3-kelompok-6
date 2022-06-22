function validate()
{
var fullname=document.getElementById("FULLNAME").value;
var email=document.getElementById("EMAIL").value;
var numberphone=document.getElementById("NUMBERPHONE").value;

    if (fullname !="" && numberphone.length >=12 && numberphone > 0 && email!="") {
            alert('You Reservation is Success!');
            return false;
        }
        else{
            alert('You Must Complete The Data First!');
        }

  }