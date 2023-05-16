function validateForm() {
    // Retrieve form elements
    var cardNumberInput = document.getElementById("card-number");
    var cardNameInput = document.getElementById("card-name");
    var expiryMonthInput = document.getElementById("expiry-month");
    var expiryYearInput = document.getElementById("expiry-year");
    var cvvInput = document.getElementById("cvv");
    var billingAddressInput = document.getElementById("billing-address");
    var postCodeInput = document.getElementById("post-code");
  
    // Perform validation checks
    var isValid = true;
    var errorMessage = "";
  
    // Check if card number is valid
    var cardNumberPattern = /^\d{4}([ -]?\d{4}){3}$/;
    if (!cardNumberPattern.test(cardNumberInput.value)) {
      errorMessage += "Please enter a valid 16-digit credit card number.\n";
      isValid = false;
    }
  
    // Check if other required fields are empty
    if (
      cardNameInput.value === "" ||
      expiryMonthInput.value === "" ||
      expiryYearInput.value === "" ||
      cvvInput.value === "" ||
      billingAddressInput.value === "" ||
      postCodeInput.value === ""
    ) {
      errorMessage += "Please fill in all the required fields.\n";
      isValid = false;
    }
  
    // Add any other necessary validation checks here
  
    // Display error message or submit form
    if (!isValid) {
      alert(errorMessage);
      return false; // Prevent form submission
    } else
    alert("Checkout successful!");
    return true; // Allow form submission
    }
    