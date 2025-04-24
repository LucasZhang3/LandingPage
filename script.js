document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Welcome to my portfolio!",
        "欢迎来到我的投资组合!",
    ];
    const typingElement = document.querySelector('.text');
    const projectsButton = document.querySelector('.buttons .btn:nth-child(2)');
    const contactButton = document.querySelector('.buttons .btn:nth-child(1)');

    let phraseIndex = 0;
    let charIndex = 0;
    let phase = "typing";
    let cycleCompleted = false;

    projectsButton.addEventListener('click', () => {
        window.open("https://github.com/LucasZhang3", "_blank");
    });

    contactButton.addEventListener('click', () => {
        window.open("", "_blank");
    });

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (phase === "typing") {
            if (charIndex < currentPhrase.length) {
                typingElement.textContent = currentPhrase.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(typeEffect, 80);
            } else {
                if (cycleCompleted && phraseIndex === 0) {
                    return;
                }
                phase = "pausing";
                setTimeout(typeEffect, 800);
            }
        } else if (phase === "pausing") {
            if (cycleCompleted && phraseIndex === 0) {
                return;
            }
            phase = "deleting";
            setTimeout(typeEffect, 300);
        } else if (phase === "deleting") {
            if (charIndex > 0) {
                typingElement.textContent = currentPhrase.slice(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, 25);
            } else {
                if (!cycleCompleted) {
                    phraseIndex++;
                    if (phraseIndex === phrases.length) {
                        cycleCompleted = true;
                        phraseIndex = 0;
                    }
                }
                phase = "typing";
                setTimeout(typeEffect, 500);
            }
        }
    }

    typeEffect();
});
