// Function to handle click outcomes
function selectOption(option) {
    // Check which option was clicked
    if (option === 'YESSSSS<3333') {
        clearInterval(heartInterval);
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // remove the question
            displayYay(); // Display the yay gif
        });
    } else if (option === 'NAURRRRRR:(((') {
        // Change text on the "No" button to "Nahuh!"
        document.getElementById('no-button').innerText = 'Nahuh!'; 
        // Increase font size of yes button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // Alert message
        alert('PICK, BITCH!');
    }
}

// flash rainbow colors 
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
        document.body.style.backgroundColor = originalColor; // Reset background 
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

    const resultContainer = document.createElement('div');
    resultContainer.style.display = 'flex';
    resultContainer.style.flexDirection = 'column';  
    resultContainer.style.alignItems = 'center';     
    resultContainer.style.gap = '10px';
    
    const result = document.createElement('h2');
    result.innerText = `You're Done! Your score: ${score} tsk tsk`;
    result.style.fontSize = '28px';
    result.style.color = '#6f2ea8';
    result.style.margin = '0';
    

    const playAgain = document.createElement('button');
    playAgain.innerText = "Don't Worry I Still Think You're Awesome Sauce! Try Again?";
    playAgain.style.padding = '10px 20px';
    playAgain.style.backgroundColor = '#c2f2d0';
    playAgain.style.color = 'black';
    playAgain.style.border = 'none';
    playAgain.style.borderRadius = '10px';
    playAgain.style.cursor = 'pointer';
    playAgain.onclick = function() {
        startMiniGame();
    };
    const openLetter = document.createElement('button');
    openLetter.innerText = "I Have Something For You! 🧸";
    openLetter.style.padding = '10px 20px';
    openLetter.style.backgroundColor = '#ffc0cb';
    openLetter.style.color = 'black';
    openLetter.style.border = 'none';
    openLetter.style.borderRadius = '10px';
    openLetter.style.cursor = 'pointer';

    // letter content and display
    const letter = document.createElement('div');
    letter.innerText = "YOU ARE THE MOST AMAZING, AWESOMEST, COOLEST, PRETTIEST, FUNNIEST PERSON EVER AND I LOOOOOOOVE YOU FOR THAT! NEVER CHANGE, MY POOKIE WOOKIE SCHMOOKIE<3";
    letter.style.display = 'none'; // Hidden by default
    letter.style.backgroundColor = '#fff5f8';
    letter.style.padding = '15px';
    letter.style.border = '2px solid ##ba005d';
    letter.style.borderRadius = '10px';
    letter.style.maxWidth = '300px';
    letter.style.textAlign = 'center';
    letter.style.fontStyle = 'italic';

    openLetter.onclick = function () {
        letter.style.display = letter.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
        setTimeout(function() {
    window.location.href = 'newpage.html'; // Redirects to a new page after 5 seconds
}, 5000);
    };

    // Add everything to the container
    resultContainer.appendChild(result);
    resultContainer.appendChild(playAgain);
    resultContainer.appendChild(openLetter);
    resultContainer.appendChild(letter); // Hidden letter

    container.appendChild(resultContainer);
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        displayPop();
    } catch (error) {
        console.error('Error occurred:', error);
    }
});
const heartsContainer = document.createElement('div');
heartsContainer.classList.add('hearts-container');
document.body.appendChild(heartsContainer);

let heartInterval = setInterval(createHeart, 300);

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 20 + 10; 
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = `${Math.random() * 100}vw`; 
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; 
    heart.style.animationDelay = `${Math.random()}s`;

    heartsContainer.appendChild(heart);

    // DOM cleanup
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
