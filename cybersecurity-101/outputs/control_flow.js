var age = prompt("What is your age?");
if (age >= 18) {
    document.getElementById("message").innerHTML = "You are an adult.";
} else {
    document.getElementById("message").innerHTML = "You are a minor.";
}