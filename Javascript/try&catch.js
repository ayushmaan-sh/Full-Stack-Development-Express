const ErrText = document.querySelector("p");

const Err = () => {
  let a = prompt("Enter the first number");
  let b = prompt("Enter the second number");

  try {
    if (isNaN(a) || isNaN(b)) {
      throw new SyntaxError("Please enter a number");
    }

    let sum = parseInt(a) + parseInt(b);
    console.log("Sum is: " + sum);
    return "No errors";
  } catch (error) {
    console.error("Error:", error.message);
    return error.message;
  }
};

ErrText.innerText = Err();
