let yesButtonSize = 1; 
let noButtonClicked = false; 
document.getElementById('yesButton').addEventListener('click', function() {

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d4d', '#ff9a9e', '#ffffff', '#d32f2f']
    });


    window.location.href = 'yes.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noButton.style.transition = 'all 0.5s ease';

    yesButtonSize *= 2;
    yesButton.style.transform = `scale(${yesButtonSize})`;

    
    const yesRect = yesButton.getBoundingClientRect();
    if (yesRect.width >= window.innerWidth && yesRect.height >= window.innerHeight) {
        noButton.textContent = "林诗菲小心我亲死你"; 
        noButton.style.transition = 'transform 0.5s ease';
        noButton.style.transform = 'scale(2.0)'; 
        noButtonClicked = true; 
    }
});