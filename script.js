// Encrypt function for Caesar Cipher
function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-zA-Z]/)) {  // Check if it's a letter (either upper or lower case)
        let base = (char === char.toUpperCase()) ? 65 : 97; // ASCII values for uppercase & lowercase letters
        // Encrypt character: shift it and wrap around using modulo 26
        result += String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
      } else {
        result += char;  // Non-alphabetic characters (spaces, punctuation) are added unchanged
      }
    }
    return result;
  }
  
  // Decrypt function for Caesar Cipher
  function decrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-zA-Z]/)) {  // Check if it's a letter (either upper or lower case)
        let base = (char === char.toUpperCase()) ? 65 : 97; // ASCII values for uppercase & lowercase letters
        // Decrypt character: shift it in the opposite direction
        result += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);  // Correct handling for negative shift
      } else {
        result += char;  // Non-alphabetic characters are kept as they are
      }
    }
    return result;
  }
  
  
  
  // Function to handle both encryption and decryption
  function cipher(action) {
    const message = document.getElementById('message').value;  // Get input message
    const shift = parseInt(document.getElementById('shift').value, 10);  // Get shift value
    let resultText;
  
    if (action === 'encrypt') {
      resultText = encrypt(message, shift);
      document.getElementById('result').textContent = 'Encrypted: ' + resultText;  // Show encrypted result below input
    } else if (action === 'decrypt') {
      resultText = decrypt(message, shift);  // Decrypt and store result
      document.getElementById('result').textContent = 'Decrypted: ' + message;  // Show decrypted result below input
    }
  }
  