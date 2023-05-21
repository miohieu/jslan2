function ex1() {
    //bai 1: tinh diem thi
    var mathPoint = +document.getElementById("subject1").value;
    var literaturePoint = +document.getElementById("subject2").value;
    var englishPoint = +document.getElementById("subject3").value;
    var pointTotal = mathPoint + literaturePoint + englishPoint;
    var resultPoint;
    var areaPoint;
    var objectPoint;
    var standard = +document.getElementById("standard").value;

    var area = document.getElementById("area").value;
    var object = document.getElementById("object").value;
    function calAreaPoint() {
        if (area == "A") {
            areaPoint = 2;
        } else if (area == "B") {
            areaPoint = 1;
        } else if (area == "C") {
            areaPoint = 0.5;
        } else {
            areaPoint = 0;
        }
        return areaPoint;
    }
    function calObjectPoint() {
        if (object == "1") {
            objectPoint = 2.5;
        } else if (object == "2") {
            objectPoint = 1.5;
        } else if (object == "3") {
            objectPoint = 1;
        } else {
            objectPoint = 0;
        }
        return objectPoint;
    }
    var objectPoint = calObjectPoint();
    var areaPoint = calAreaPoint();
    var resultPoint = objectPoint + areaPoint + pointTotal;
    console.log(resultPoint);
    if (
        mathPoint * literaturePoint * englishPoint != 0 &&
        resultPoint >= standard
    ) {
        alert("Passed");
    } else {
        alert("Failed");
    }
    var render = document.getElementById("resultDiv");
    render.innerHTML = `tong diem: ${resultPoint}`;
}
var btn1 = document.getElementById("submit");
btn1.onclick = ex1;

//bai 2 Tinh tien dien
function ex2() {
    var used = +document.getElementById("usedAmount").value;
    var customerName = document.getElementById("customerInfo").value;
    var rate;
    var totalSpend;

    if (used <= 50) {
        rate = 500;
        totalSpend = used * rate;
    } else if (used > 50 && used <= 100) {
        rate = 650;
        totalSpend = (used - 50) * rate + 50 * 500;
    } else if (used > 100 && used <= 200) {
        rate = 850;
        totalSpend = (used - 100) * rate + 50 * 500 + 50 * 650;
    } else if (used > 200 && used < 350) {
        rate = 1100;
        totalSpend = (used - 200) * rate + 50 * 500 + 50 * 650 + 100 * 850;
    } else {
        rate = 1300;
        totalSpend =
            (used - 350) * rate + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100;
    }
    var result2 = document.getElementById("resultDiv2");
    result2.innerHTML = `Khach hang ${customerName}: ${totalSpend}dong`;
}
var btn2 = document.getElementById("submit2");
btn2.onclick = ex2;

//bai 3
function ex3() {
    let yearIncome = +document.getElementById("income").value;
    let customerInfo = document.getElementById("customerName").value;
    let numberOfPeople = +document.getElementById("numOfPeople").value;
    let incomeUnderTax = yearIncome - 4000000 - numberOfPeople * 1600000;
    let tax;
    if (incomeUnderTax <= 60000000) {
        tax = 0.05 * incomeUnderTax;
    } else if (incomeUnderTax > 60000000) {
        tax = 0.1 * incomeUnderTax;
    } else if (incomeUnderTax > 120000000) {
        tax = 0.15 * incomeUnderTax;
    } else if (incomeUnderTax > 210000000) {
        tax = 0.2 * incomeUnderTax;
    } else if (incomeUnderTax > 384000000) {
        tax = 0.25 * incomeUnderTax;
    } else if (incomeUnderTax > 624000000 && incomeUnderTax <= 960000000) {
        tax = 0.3 * incomeUnderTax;
    } else {
        tax = 0.35 * incomeUnderTax;
    }
    document.getElementById("result3").innerHTML = `Khach hang: ${customerInfo}
    So thue phai tra ${tax}`;
}

const btn3 = document.getElementById("submit3");
btn3.addEventListener("click", ex3);

//bai 4
const selection = document.getElementById("typeOfCustomer");
const numOfConnects = document.getElementById("connectionsInput");
window.addEventListener("load", () => {
    if (selection.value !== "org") {
        numOfConnects.style.display = "none";
    }
});
selection.addEventListener("change", () => {
    if (selection.value !== "org") {
        numOfConnects.style.display = "none";
        selection.value = "personal";
    } else {
        numOfConnects.style.display = "block";
        selection.value = "org";
    }
});

function ex4() {
    let highQualityChannel = +document.getElementById("highQuality").value;
    let cableFee;
    let connections = +document.getElementById("connections").value;
    if (connections >= 10) {
        var connectionsFee = 75 + (connections - 10) * 5;
    } else {
        connectionsFee = 75;
    }
    if (selection.value === "personal") {
        cableFee = 4.5 + 20.5 + 7.5 * highQualityChannel;
    } else {
        cableFee = 15 + connectionsFee + 50 * highQualityChannel;
    }
    document.getElementById("result4").innerHTML = `Khach hang ${document.getElementById("customerCode").value
        }
    Tien phi: $${cableFee}`;
}
btn4 = document.getElementById("submit4");
btn4.addEventListener("click", ex4);
