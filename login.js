var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

input1.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        input2.style.display = "block";
    }
});

/*loginButton.addEventListener("click", function() {
    var password = passwordInput.value;
    if (password === "") {

    }
});*/
