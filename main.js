(function() {
    const button = document.getElementById('mockifyButton');
    const inputTextEl = document.getElementById('inputText');
    const outputTextEl = document.getElementById('outputText');

    button.addEventListener('click', () => {
        const plainString = inputTextEl.value.toLowerCase();
        let isCap = Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
        let mockString = '';
        const letters = /^[A-Za-z]+$/;
        for (let i = 0; i < plainString.length; i++) {
            const currentChar = plainString.charAt(i);
            if (!currentChar.match(letters)) {
                mockString += currentChar;
            } else if (isCap) {
                mockString += currentChar.toUpperCase();
            } else {
                mockString += currentChar;
            }
            isCap = !isCap;
        }
        outputTextEl.innerText = mockString;
    });
})();