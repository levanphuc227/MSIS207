

var btnlogin = document.getElementById("login")
btnlogin.addEventListener("click", function (event) {
    event.preventDefault();
    var usename = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    console.log(usename,password);
});

