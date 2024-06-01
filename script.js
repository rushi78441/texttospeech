document.getElementById('speak-button').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (text !== '') {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    } else {
        alert('Please enter some text.');
    }
});

