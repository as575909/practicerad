// Define the type for the password regex key-value pairs
export type PasswordRegexType = {
  [key: string]: RegExp;
};

// Define various regex patterns for different password types
export const passwordRegexTypes: PasswordRegexType = {
  numeric: /^[0-9]+$/, // Password must contain only numeric characters
  alphanumeric: /^[a-zA-Z0-9]+$/, // Password must contain only alphanumeric characters
  letters: /^[a-zA-Z]+$/, // Password must contain only letters (no numbers or special characters)
  // Add more regex patterns as needed
};
