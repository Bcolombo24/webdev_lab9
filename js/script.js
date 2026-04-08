document.addEventListener("DOMContentLoaded", function() {
    var input = document.createElement("input");
    var button = document.createElement("button");
    var output = document.createElement("h2");

    input.placeholder = "Type Something...";
    button.textContent = "Submit";
    output.textContent = "Your text will appear here";

    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(output);

    button.onclick = function() {
        var text = input.value;
        if (text === "") {
            alert("Please type something first!");
            return;
        }
    
    alert("Brandon Colombo: " + text);
    output.textContent = text;
    input.value = "";
    };
});






