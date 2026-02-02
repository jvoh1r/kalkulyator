let disp = document.getElementById("display");

function inputVal(val) {
    if (disp.innerHTML === "0") {
        disp.innerHTML = val;
    } else {
        disp.innerHTML += val;
    }
}

function clearDisplay() {
    disp.innerHTML = "0";
}

function calc() {
    let exp = disp.innerHTML;

    if (exp.includes("^")) {
        let parts = exp.split("^");
        disp.innerHTML = Math.pow(Number(parts[0]), Number(parts[1]));
        return;
    }

    try {
        disp.innerHTML = eval(exp);
    } catch {
        disp.innerHTML = "Xato!";
    }
}