(() => {
    const button = document.querySelector('#mockifyButton');
    const inputTextEl = document.querySelector('#inputText');
    const outputTextEl = document.querySelector('#outputText');
    const copyButton = document.querySelector('#copyButton');
    const hiddenInput = document.querySelector('#hiddenInput');

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
        hiddenInput.value = mockString;
        if (document.execCommand) {
            copyButton.setAttribute('style', 'display:block');
        }
    }

    const copyToClipboard = (e) => {
        e.preventDefault();
        hiddenInput.select();
        document.execCommand('copy');   
    }

    button.addEventListener('click', mockifyText);
    copyButton.addEventListener('click', copyToClipboard);
})();