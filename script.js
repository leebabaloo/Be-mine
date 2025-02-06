// Function to handle click outcomes
function selectOption(option) {
    // Check which option was clicked
    if (option === 'YESSSSS<3333') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide  question
            displayYay(); // Display the yay gif
        });
    } else if (option === 'NAURRRRRR:(((') {
        // Change text on the "No" button to "Nahuh!"
        document.getElementById('no-button').innerText = 'Nahuh!'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var maxFontSize = 72;
        var newSize = Math.min(parseFloat(currentFontSize)*2, maxFontSize);
        yesButton.style.fontSize = newSize + 'px';
    } else {
        //  alert message
        alert('PICK, BITCH!');
    }
}

// Function to flash rainbow colors 
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
    
    var imageContainer = document.getElementById('image-container');

    var popImage = new Image();
    
    popImage.src = 'pop.png'; 
    // Set alternative text 
    popImage.alt = 'Pop';
    //  add it to the image container
    popImage.onload = function() {
        imageContainer.appendChild(popImage);
    };
}

// Function to display the yay gif
function displayYay() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
   
    var imageContainer = document.getElementById('image-container');
    
    var yayVideo = document.createElement('video');
    
    yayVideo.src = 'yay.mp4'; 
    // Set alternative text 
    yayVideo.alt = 'Yippee';
    yayVideo.autoplay= true;
    yayVideo.loop= true;
    yayVideo.muted= true;
    yayVideo.playsInline = true;
    //  add it to the image container
    yayVideo.onload = function() {
        imageContainer.appendChild(yayVideo);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
    
}

// Display the pop initially
displayPop();
