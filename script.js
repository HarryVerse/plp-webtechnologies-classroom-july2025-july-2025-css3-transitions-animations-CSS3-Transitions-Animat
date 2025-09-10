// Global variable
let heroCount = 3;
console.log("Total heroes: " + heroCount);

// Function to trigger animation on hero cards
function triggerAnimation(heroId) {
    let heroCard = document.getElementById(heroId);
    if (heroCard) {
        heroCard.classList.add('animate-bounce');
        setTimeout(() => {
            heroCard.classList.remove('animate-bounce');
        }, 1000);
    }
}

// Event listeners for animation triggers
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.animate-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let heroId = this.getAttribute('data-hero');
            triggerAnimation(heroId);
        });
    });

    let heroCards = document.querySelectorAll('.hero-card');
    heroCards.forEach(card => {
        card.classList.add('animate-fade');
    });
});
