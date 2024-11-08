/**
 *
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  // Early return if the email is invalid based on the following check
  if (
    !email || // email is falsy (null, undefined, empty string)
    typeof email !== 'string' || // email is not a string
    !email.trim() || // email is empty or just whitespace
    email.length < 6 || // email is too short (minimum length is 6 characters)
    email.length > 256 || // email exceeds maximum length of 256 characters
    email[0] === '@' || // email starts with "@"
    email[email.length - 1] === '@' // email ends with "@"
  ) {
    return false
  }

  let foundAtSign = false // Flag to ensure only one "@" exists
  let domainStart = -1 // Index where the domain part starts
  let dotCount = 0 // Counter for dots in the domain part, it used to avoid double dots
  let prevCharWasDot = false // Flag to track if the previous character was a dot

  // Traverse through the email to validate "@" and "."
  for (let i = 0; i < email.length; i++) {
    const char = email[i]
    if (char == ' ') return false // space is not allowed and we can check the special chars

    // Check for multiple "@" signs
    if (char === '@') {
      if (foundAtSign) return false // More than one "@" is not allowed
      foundAtSign = true
      atSignIndex = i

      // "@" should not be preceded or followed by "."
      if (email[i - 1] === '.' || email[i + 1] === '.') {
        return false
      }

      // The domain part starts immediately after "@"
      domainStart = i + 1
    }

    // After the "@" symbol, check for "." in the domain part
    // The prev part passed and the "@" found once
    if (foundAtSign && char === '.') {
      dotCount++

      // Check for double dots in the domain part
      if (prevCharWasDot) {
        return false // double dots found
      }
      prevCharWasDot = true // mark that the previous character was a dot
    }
    prevCharWasDot = false // reset the flag if the current char is not a dot
  }

  // If there's no "@" or no "." after "@", it's invalid
  if (!foundAtSign || dotCount === 0 || dotCount > 1) {
    return false
  }

  // Ensure the rest after "." is at least 2 characters
  let domainLength = 0
  for (let i = domainStart; i < email.length; i++) {
    const char = email[i]
    if (char === '.') {
      // Start counting the characters after the last dot to validate TLD length
      domainLength = 0
    } else {
      domainLength++
    }

    // Check if we're at the last part of the domain (after the final dot)
    if (i === email.length - 1 || (email[i + 1] === '.' && domainLength >= 2)) {
      if (domainLength < 2) {
        return false // TLD should have at least 2 characters
      }
    }
  }

  return true
}
console.log(validateEmail('a.doe@any.com')) // true
console.log(validateEmail('a@a.aa')) // true
console.log(validateEmail('a.doe@.any.com')) // false domain start with a dot
console.log(validateEmail('a.doe@any..com')) // false double dot in domain
console.log(validateEmail('a.doe@any')) // false no dot after "@"
console.log(validateEmail('a@a.a')) // false after "." must be at least 2 characters
console.log(validateEmail('a doe@any.com')) // false space is not allowed
console.log(validateEmail('@any.com')) // false email cannot start with "@"
console.log(validateEmail('any.com@')) // false email cannot end with "@"
