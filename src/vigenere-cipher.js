const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct) {
        this.reversed = direct === false;
    }

    encrypt(message, key, decrypt) {
        if (arguments.length < 2) throw  new Error();
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            result = [];

        message = Array.from(message.toUpperCase());
        key = key.slice(0, message.length).toUpperCase();

        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                let messageIdx = alphabet.indexOf(message[i]);
                let keyIdx = alphabet.indexOf(key[i % key.length]);
                keyIdx = decrypt ? -keyIdx : keyIdx;
                let cipher = alphabet[(alphabet.length + messageIdx + keyIdx) % alphabet.length];
                result.push(cipher);
            } else {
                result.push(message.splice(i, 1));
                i--;
            }
        }
        return this.reversed ? result.reverse().join('') : result.join('');
    }

    decrypt(encryptedMessage, key) {
        return this.encrypt(encryptedMessage, key, true);
    }
}

module.exports = VigenereCipheringMachine;
