// New Feature: Birth Number Calculation

/**
 * Calculates the Birth Number from a given date
 * @param {string} birthDate - Birth date in YYYY-MM-DD format
 * @returns {number} - Birth Number (1-9 or Master Numbers 11, 22, 33)
 */
function calculateBirthNumber(birthDate) {
    // Sum all digits in the birth date
    const digits = [...birthDate.replace(/-/g, '')].map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);

    // Reduce to a single digit or master number
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = String(sum).split('').reduce((acc, digit) => acc + Number(digit), 0);
    }

    return sum;
}

// Example Usage:
const birthDate = "1990-05-16"; // Input provided once
const birthNumber = calculateBirthNumber(birthDate);
console.log(`The Birth Number for ${birthDate} is ${birthNumber}`);