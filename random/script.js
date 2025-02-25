// List of coding challenges
const challenges = [
    "Write a function to reverse a string.",
    "Implement a Fibonacci sequence generator.",
    "Create a function to check if a number is prime.",
    "Build a to-do list app using JavaScript.",
    "Write a sorting algorithm (e.g., Bubble Sort).",
    "Solve a 'two-sum' problem in an array.",
    "Create a Python calculator app.",
    "Find the largest prime number less than 100.",
    "Check if a word is a palindrome.",
    "Write a function to find the GCD of two numbers."
];

// Get elements from the DOM
const wheelCanvas = document.getElementById('wheelCanvas');
const ctx = wheelCanvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const challengeText = document.getElementById('challengeText');

// Set up the wheel parameters
const wheelSize = 300; // Radius of the wheel
const numSegments = challenges.length; // Number of challenges
const segmentAngle = (2 * Math.PI) / numSegments; // Angle per segment
const spinSpeed = 0.05; // Spin speed

// Draw the wheel with challenges
function drawWheel() {
    const angleOffset = -Math.PI / 2; // Start at the top of the wheel
    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
    ctx.translate(wheelCanvas.width / 2, wheelCanvas.height / 2); // Center the wheel

    // Draw each segment
    for (let i = 0; i < numSegments; i++) {
        const startAngle = angleOffset + i * segmentAngle;
        const endAngle = angleOffset + (i + 1) * segmentAngle;

        // Set the color for each segment (we'll use rainbow colors)
        ctx.fillStyle = `hsl(${(i * 360) / numSegments}, 70%, 60%)`;

        // Draw the segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, wheelSize, startAngle, endAngle);
        ctx.lineTo(0, 0);
        ctx.fill();

        // Add the challenge text in the middle of each segment
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.save();
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.fillText(challenges[i], wheelSize / 2 - 20, 0);
        ctx.restore();
    }

    ctx.resetTransform(); // Reset canvas transformations
}

// Set up spin animation
let currentAngle = 0; // Initial angle
let spinning = false;

function spinWheel() {
    if (spinning) return; // Prevent multiple spins at once
    spinning = true;
    const targetAngle = Math.random() * 2 * Math.PI + 5 * Math.PI; // Random target angle for spin

    function animateSpin() {
        if (currentAngle < targetAngle) {
            currentAngle += spinSpeed;
            drawWheel(); // Redraw wheel with new angle
            requestAnimationFrame(animateSpin); // Keep animating
        } else {
            spinning = false;
            showChallenge(); // Show the result after the spin
        }
    }

    animateSpin();
}

// Show the selected coding challenge
function showChallenge() {
    const selectedIndex = Math.floor((currentAngle % (2 * Math.PI)) / segmentAngle);
    challengeText.innerHTML = `Your challenge: <strong>${challenges[selectedIndex]}</strong>`;
}

// Add event listener to the spin button
spinButton.addEventListener('click', spinWheel);

// Initial wheel drawing
drawWheel();
