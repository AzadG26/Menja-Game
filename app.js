// Game Variables
let score = 0;
let currentLevel = 1;
const totalLevels = 5;

// DOM Elements
const scoreDisplay = document.querySelector('.hud__score');
const currentLevelDisplay = document.querySelector('.cube-count-lbl');
const nextLevelBtn = document.getElementById('nextLevelBtn');
const menus = document.getElementById('menus');
const levelMenu = document.getElementById('levelMenu');
const aboutSection = document.getElementById('aboutSection');
const experienceSection = document.getElementById('experienceSection');
const projectsSection = document.getElementById('projectsSection');
const contactSection = document.getElementById('contactSection');

// Function to handle level completion
function completeLevel() {
    score += 10;
    scoreDisplay.textContent = score;
    
    currentLevel++;
    
    if (currentLevel > totalLevels) {
        alert("Congratulations! You've unlocked all sections of the portfolio!");
        resetGame();
        return;
    }
    
    // Update the displayed current level
    currentLevelDisplay.textContent = currentLevel;

    // Show the correct section based on the level
    switch (currentLevel) {
        case 2:
            showSection(aboutSection);
            break;
        case 3:
            showSection(experienceSection);
            break;
        case 4:
            showSection(projectsSection);
            break;
        case 5:
            showSection(contactSection);
            break;
        default:
            showLevelMenu();
            break;
    }
}

// Function to show the level menu
function showLevelMenu() {
    levelMenu.classList.add('active');
    menus.classList.add('has-active');
}

// Function to show a specific section
function showSection(section) {
    levelMenu.classList.remove('active');
    section.classList.add('active');
    menus.classList.add('has-active');
}

// Function to reset the game
function resetGame() {
    score = 0;
    currentLevel = 1;
    scoreDisplay.textContent = score;
    currentLevelDisplay.textContent = currentLevel;

    // Hide all sections and show level menu
    aboutSection.classList.remove('active');
    experienceSection.classList.remove('active');
    projectsSection.classList.remove('active');
    contactSection.classList.remove('active');
    showLevelMenu();
}

// Event listener for the Next Level button
nextLevelBtn.addEventListener('click', () => {
    if (currentLevel <= totalLevels) {
        completeLevel();
    }
});

// Start with the level menu
showLevelMenu();
