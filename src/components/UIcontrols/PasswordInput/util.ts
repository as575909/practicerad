// Define the type for the password regex key-value pairs
export type PasswordRegexType = {
  [key: string]: RegExp;
};

// Define various regex patterns for different password types
export const passwordRegexTypes: PasswordRegexType = {
  numeric: /^[0-9]+$/, // Password must contain only numeric characters
  alphanumeric: /^[a-zA-Z0-9]+$/, // Password must contain only alphanumeric characters
  letters: /^[a-zA-Z]+$/, // Password must contain only letters (no numbers or special characters)
  uppercaseLowercaseDigit: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,  // Password must contain at least one lowercase letter (a-z), one uppercase letter (A-Z), and one digit (\d).
  uppercaseLowercaseDigitSpecial: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,   // Password must contain at least one lowercase letter (a-z), one uppercase letter (A-Z), one digit (\d), and one special character (!@#$%^&*).
  minLengthWithSpaces: /^[\s\S]{6,}$/,   // Password must be at least 6 characters long, including spaces.
  allowedSpecialChars: /^[a-zA-Z0-9!@#$%^&*]+$/,  // Password can contain only alphanumeric characters (a-z, A-Z, 0-9), and the following special characters: !@#$%^&*.
  noSpacesOrSpecialChars: /^[a-zA-Z0-9]+$/,  // Password must contain only alphanumeric characters (a-z, A-Z, 0-9) and no spaces or special characters.

  
};
