document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function() {
        const userText = input.value.trim();
        if (userText === "") {
          alert("Please type something first!");
          return;
        }

        alert("Brandon Colombo: " + userText);

        output.textContent = userText;

        input.value = "";
    });



});






