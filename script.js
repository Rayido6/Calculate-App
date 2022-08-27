function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

function display(value) {
    let displayBox = document.getElementById("result");
    displayBox.value += value;
}

function calculate() {
    let displayBox = document.getElementById("result");
    let answer = eval(displayBox);
    document.getElementById("result").value = answer;
}
// 1.clear
// 2.calculate
// 3.display