var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");


input1.addEventListener("keypress",function(e){
    if(e.keyCode === 13)
    {
        e.preventDefault();
         input2.style.display = "block";
    }
});
  