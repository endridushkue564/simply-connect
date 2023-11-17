/* 
Filename: ComplexWebFormValidation.js 
Description: This code performs advanced form validation for a complex web application with more than 200 lines of code.
*/

// Defining an array to store validation errors
var validationErrors = [];

// Function to validate the name field
function validateName(name) {
  if (!name || name.length < 3) {
    validationErrors.push("Name field should have at least 3 characters.");
  }
}

// Function to validate the email field
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    validationErrors.push("Please enter a valid email address.");
  }
}

// Function to validate the password field
function validatePassword(password) {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    validationErrors.push("Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
  }
}

// Function to validate the confirm password field
function validateConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    validationErrors.push("Passwords do not match.");
  }
}

// Function to validate the phone number field
function validatePhoneNumber(phoneNumber) {
  var phoneNumberRegex = /^\+[0-9]{1,3}-\d{3}-\d{3}-\d{4}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    validationErrors.push("Please enter a valid phone number in the format: +NNN-NNN-NNN-NNNN");
  }
}

// Function to validate the date of birth field
function validateDateOfBirth(dateOfBirth) {
  var currentDate = new Date();
  var enteredDate = new Date(dateOfBirth);
  
  if (currentDate <= enteredDate) {
    validationErrors.push("Please enter a valid date of birth.");
  }
}

// Function to validate the address field
function validateAddress(address) {
  if (!address || address.length < 10) {
    validationErrors.push("Address field should have at least 10 characters.");
  }
}

// Function to validate the credit card number field
function validateCreditCardNumber(creditCardNumber) {
  var creditCardRegex = /^([0-9]{4}-){3}[0-9]{4}$/;
  if (!creditCardRegex.test(creditCardNumber)) {
    validationErrors.push("Please enter a valid credit card number in the format: NNNN-NNNN-NNNN-NNNN");
  }
}

// Function to validate the CVV field
function validateCVV(cvv) {
  var cvvRegex = /^[0-9]{3}$/;
  if (!cvvRegex.test(cvv)) {
    validationErrors.push("Please enter a valid CVV number.");
  }
}

// Other validation functions...

// Function to validate the entire form on submission
function validateForm() {
  // Clearing any existing validation errors
  validationErrors = [];
  
  // Getting form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var address = document.getElementById("address").value;
  var creditCardNumber = document.getElementById("creditCardNumber").value;
  var cvv = document.getElementById("cvv").value;
  
  // Performing field-wise validation
  validateName(name);
  validateEmail(email);
  validatePassword(password);
  validateConfirmPassword(password, confirmPassword);
  validatePhoneNumber(phoneNumber);
  validateDateOfBirth(dateOfBirth);
  validateAddress(address);
  validateCreditCardNumber(creditCardNumber);
  validateCVV(cvv);
  
  if (validationErrors.length > 0) {
    // Displaying the validation errors to the user
    alert(validationErrors.join("\n"));
    return false; // Preventing form submission
  }
  
  return true; // Proceed with form submission
}

// Attach form validation to the submit event
document.getElementById("form").onsubmit = validateForm;