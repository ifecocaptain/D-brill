function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
    if (x.className === "navlist"){
        x.className === " responsive";
    } else{
        x.className = "navlist"
    }
}