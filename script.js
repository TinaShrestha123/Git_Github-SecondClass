// Get the display element
let display = document.getElementById("display");

// Add a number or operator to the display
function appendValue(value) {
  display.value += value;
}

// Clear the calculator
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    // Check if display is empty
    if (display.value === "") {
      return;
    }

    // Calculate the expression
    display.value = eval(display.value);
  } catch (error) {
    // Show error for invalid calculation
    display.value = "Error";
  }
}
