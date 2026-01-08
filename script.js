function myFunction() {
    alert("One team in Ayrshire!");
}

function changeFormTitle() {
    if (document.getElementById("form-title").innerText === "LET ME TELL YOUR DIGITAL STORIES") {
        document.getElementById("form-title").innerText = "GET IN TOUCH!";
    } else {
        document.getElementById("form-title").innerText = "LET ME TELL YOUR DIGITAL STORIES";
    }
}

function changeTag() {
    // Get the existing heading element

    var paragraph = document.getElementById("form-title");

    // Create a new h1 element
    var newHeading = document.createElement("h1");

    // Set the text content of the new h1 element
    newHeading.textContent = "This is a new heading created dynamically.";

    // Replace the heading with the new h1 element
    paragraph.parentNode.replaceChild(newHeading, paragraph);

}

