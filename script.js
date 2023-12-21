let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.innerText == ".")
        {
          string = Pointfunc(string);
          input.value = string;
        } else if (e.target.innerText == "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerText == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerText == "c") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerText == "%") {
            string = Percentage(string);
            input.value = string;
        } else {
            string += e.target.innerText;
            input.value = string;
        }
    });
});

const Percentage = string => {
    if (string.includes("/")) {
        let parts = string.split("/");
        let result = (parseFloat(parts[0]) / parseFloat(parts[1])) * 100;
        string = result.toString();
    } else if (string.includes("-")) {
        let parts = string.split("-");
        let num1 = parseFloat(parts[0]);
        let percent = parseFloat(parts[1]) / 100;
        let result = num1 - num1 * percent;
        string = result.toString();
    } else if (string.includes("+")) {
        let parts = string.split("+");
        let num1 = parseFloat(parts[0]);
        let percent = parseFloat(parts[1]) / 100;
        let result = num1 + num1 * percent;
        string = result.toString();
    } else if (string.includes("*")) {
        let parts = string.split("*");
        let num1 = parseFloat(parts[0]);
        let percent = parseFloat(parts[1]) / 100;
        let result = num1 * (num1 * percent);
        string = result.toString();
    } else {
        let result = string / 100;
        string = result.toString();
    }

    return string;
};
const Pointfunc = string => {
  if (string.includes(".")) {
    console.log("Point already exsist");
  } else {
    string += ".";
  }
  return string;
}

