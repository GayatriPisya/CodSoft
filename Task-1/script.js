document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.getElementById('dynamic-text');
    const phrases = ['web developer ', 'web designer'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenPhrases = 2000;

    function typePhrase() {
        const currentPhrase = phrases[phraseIndex];
        const currentLetters = currentPhrase.substring(0, letterIndex);
        
        dynamicText.textContent = " " + currentLetters;
        if (!isDeleting) {
            if (letterIndex < currentPhrase.length) {
                letterIndex++;
                setTimeout(typePhrase, typingSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(typePhrase, delayBetweenPhrases);
                }, delayBetweenPhrases);
            }
        } else {
            if (letterIndex > 0) {
                letterIndex--;
                setTimeout(typePhrase, erasingSpeed);
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                dynamicText.className = phrases[phraseIndex].replace(' ', '-');
                setTimeout(typePhrase, typingSpeed);
            }
        }
    }

    typePhrase();
});
