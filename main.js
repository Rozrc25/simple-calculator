function calc(form) {

    let D = 0;
    var A = document.getElementById("num1").value;
    var B = document.getElementById("op").value;
    var C = document.getElementById("num2").value;

    if (B === "+") {
        D = parseInt(A) + parseInt(C);
    }
    else if (B === "-") {
        D = A - C;
    }
    else if (B === "*") {
        D = A * C;
    }
    else if (B === "/") {
        D = A / C;
    }
    document.getElementById("result").innerHTML = "Answer = " + D;
    return false;
}