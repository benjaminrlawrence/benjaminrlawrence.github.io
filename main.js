(function() {
    const button = document.querySelector('#mockifyButton');
    const inputTextEl = document.querySelector('#inputText');
    const outputTextEl = document.querySelector('#outputText');

    const mockifyText = (e) => {
        e.preventDefault();
        const plainString = inputTextEl.value.toLowerCase();
        let isCap = Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
        let mockString = '';
        const letters = /^[A-Za-z]+$/;
        for (let i = 0; i < plainString.length; i++) {
            const currentChar = plainString.charAt(i);
            if (!currentChar.match(letters)) {
                mockString += currentChar;
                continue;
            } else if (isCap) {
                mockString += currentChar.toUpperCase();
            } else {
                mockString += currentChar;
            }
            isCap = !isCap;
        }
        outputTextEl.innerText = mockString;
    }

    button.addEventListener('click', mockifyText);
})();