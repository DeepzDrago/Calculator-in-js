function getHistoryValue() {
  return document.getElementById("histry-value").innerText;
}
function printHistory(num) {
  document.getElementById("histry-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText =
      getFormattedNumbers(num);
  }
}
// To get comma between numbers
function getFormattedNumbers(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  console.log(num,n);
  var value = n.toLocaleString("en");
  return value;
}
// To set back the numbers without comma
function reveseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    // alert("the op clicked:"+this.id);
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reveseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistoryValue();
      if (output != "") {
        output = reveseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          alert(history);
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          // alert(history);
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    // alert("the nm clicked:"+this.id);
    var output = reveseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
