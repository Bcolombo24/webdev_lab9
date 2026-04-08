function start() {
    var button = document.getElementById("entrybutton");

    function showText() {
        var input = document.getElementById("entryinput");
        var output = document.getElementById("textoutput");
        
        if (input.value === "") {
            alert("Please type something first!");
            return;
        }
        alert("Brandon Colombo: " + input.value);
        output.innerHTML = input.value;
    }

    button.addEventListener("click", showText);
}
window.addEventListener("load", start);





