const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codeArray = [];
    for (let i = 0; i < expr.length; i++) {
        if ((i + 1) % 10 === 0) {
            codeArray.push(expr.substring(i - 9, i + 1));
        }
    }

    let dotSlash = codeArray.map(item => {
        if (item === `**********`) {
            return ` `;
        }
        let numbersToMorse = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item[i] !== '0') {
                numbersToMorse = (item.substring(i, i + 2) === '10')? `${numbersToMorse}.` : `${numbersToMorse}-`;
            }
        }
        return numbersToMorse;
    })
    let result = dotSlash.map(item => {
        if (item === ' ') {
            return item;
        }

        for (prop in MORSE_TABLE) {
            if (prop === item) {
                return MORSE_TABLE[prop];
            }
        }
    });
return result.join('');
}

module.exports = {
    decode
}