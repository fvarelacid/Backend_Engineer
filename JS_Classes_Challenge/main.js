// Create class

class wordEncrypt {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(sentence) {
        const to_Encrypt = sentence.toUpperCase();
        let encrypted = '';
        for (const s of to_Encrypt) {
            let s_unicode = s.charToCode(0);
            console.log(s_unicode);
        }
        
    }

    decrypt(sentence) {
        return sentence
    }
}



// Create instance

const sentece_Encrypt = new wordEncrypt(2);
sentece_Encrypt.encrypt('Hello');