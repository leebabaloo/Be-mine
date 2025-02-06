document.addEventListener('DOMContentLoaded', function() {
    // Test if the script runs
    console.log("Script loaded!");

    // Display the PNG
    var imageContainer = document.getElementById('image-container');
    var popImage = new Image();
    popImage.src = 'pop.png'; 
    popImage.alt = 'Pop';
    popImage.style.maxWidth = '100%';
    imageContainer.appendChild(popImage);

    // Add click functionality to buttons
    document.getElementById('yes-button').addEventListener('click', function() {
        alert("You clicked YES!");
    });
    document.getElementById('no-button').addEventListener('click', function() {
        alert("You clicked NO!");
    });
});
