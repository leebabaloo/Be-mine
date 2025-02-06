// Function to handle click outcomes
function selectOption(option) {
    // Check which option was clicked
    if (option === 'YESSSSS<3333') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            displayYay(); // Display the yay gif
        });
    } else if (option === 'NAURRRRRR:(((') {
        // Change text on the "No" button to "Nahuh!"
        document.getElementById('no-button').innerText = 'Nahuh!'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // Alert message
        alert('PICK, BITCH!');
    }
}

// Function to flash rainbow colors 
function flashRainbowColors(callback) {
    var originalColor = document.body.style.backgroundColor;
    var colors = ['#f8ddd6', '#e89bba', '#bff0d6', '#dadef5', '#cdf1f0', '#bae89b'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 400); // Change color every 400 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = originalColor; // Reset background color
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
    popImage.alt = 'Pop';
    popImage.onload = function() {
        imageContainer.appendChild(popImage);
    };
}

// Function to display the yay gif
function displayYay() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var yayVideo = document.createElement('video');
    yayVideo.src = 'yay.mp4';
    yayVideo.autoplay = true;
    yayVideo.muted = true;
    yayVideo.playsInline = true;
    imageContainer.appendChild(yayVideo);
    document.getElementById('options').style.display = 'none';
    yayVideo.onplay = function() {
    setTimeout(function() {
        startMiniGame(); 
    }, 2000); 
};
}

function startMiniGame() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    container.style.position = 'relative'; 

    let score = 0;
    let timeLeft = 10; // 10 seconds timer

    const scoreDisplay = document.createElement('div');
    scoreDisplay.innerText = `Score: ${score}`;
    scoreDisplay.style.fontSize = '24px';
    scoreDisplay.style.marginBottom = '10px';
    container.appendChild(scoreDisplay);

    const catchButton = document.createElement('button');
    catchButton.innerText = 'Catch Me, Cutie!😼';
    catchButton.style.position = 'absolute';
    catchButton.style.padding = '10px 20px';
    catchButton.style.backgroundColor = '#ff66b2';
    catchButton.style.color = 'white';
    catchButton.style.border = 'none';
    catchButton.style.borderRadius = '10px';
    catchButton.style.cursor = 'pointer';
    container.appendChild(catchButton);

    function moveButton() {
        const maxX = container.offsetWidth - catchButton.offsetWidth;
        const maxY = container.offsetHeight - catchButton.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        catchButton.style.left = `${randomX}px`;
        catchButton.style.top = `${randomY}px`;
    }

    catchButton.onclick = function() {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
        moveButton();
    };

    const moveInterval = setInterval(moveButton, 1000);

    const countdown = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            clearInterval(moveInterval);
            endMiniGame(score);
        }
    }, 1000);
}

function endMiniGame(score) {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    const result = document.createElement('h2');
    result.innerText = `You're Done! Your score: ${score} tsk tsk`;
    result.style.fontSize = '28px';
    result.style.color = '#6f2ea8';
    container.appendChild(result);

    const playAgain = document.createElement('button');
    playAgain.innerText = "Don't Worry I Still Think You're Awesome Sauce! Try Again?";
    playAgain.style.padding = '10px 20px';
    playAgain.style.backgroundColor = '#c2f2d0';
    playAgain.style.color = 'black';
    playAgain.style.border = 'none';
    playAgain.style.borderRadius = '10px';
    playAgain.style.cursor = 'pointer';
    playAgain.onclick = function() {
        location.reload();
    };
    container.appendChild(playAgain);
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        displayPop();
    } catch (error) {
        console.error('Error occurred:', error);
    }
});
