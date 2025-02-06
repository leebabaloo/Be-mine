// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'YESSSSS<3333') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayYay(); // Display the cat-heart.gif
        });
    } else if (option === 'NAURRRRRR:(((') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'Nahuh!'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('PICK, BITCH!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#f8ddd6', '#e89bba', '#bff0d6', '#dadef5', '#cdf1f0', '#bae89b'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 400); // Change color every 400 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); 
}

// Function to display the pop.image initially
function displayPop() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var popImage = new Image();
    // Set the source (file path) for the cat image
    popImage.src = 'pop.png'; 
    // Set alternative text for the image (for accessibility)
    popImage.alt = 'Pop';
    // When the cat image is fully loaded, add it to the image container
    popImage.onload = function() {
        imageContainer.appendChild(popImage);
    };
}

// Function to display the cat-heart.gif
function displayYay() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var yayImage = new Image();
    // Set the source (file path) for the cat-heart image
    yayImage.src = 'yay.mp4'; 
    // Set alternative text for the image (for accessibility)
    yayImage.alt = 'Yippee';
    // When the cat-heart image is fully loaded, add it to the image container
    yayImage.onload = function() {
        imageContainer.appendChild(yayImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the pop initially
displayPop();
