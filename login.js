function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="benjamin" && password=="12345")
    {
        location.href="homepage.html";
        alert("login succesfully");
        
    }
    else{
        alert("invalid Username or Password");
        return;
    }
}
//----------------------------------------------- Contact me -------------------------------//




//-----------------------------------------------blog--------------------------------------//