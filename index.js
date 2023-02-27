//Sayıların ekrana yazılması
$(".number").click(function () {
    $this = $(this);
    let number = $this.attr("data-number");
    $(".result").append(number);
});

//İşlemlerin ekrana yazılması ve işlemin tanımlanması
let process;
$(".process").click(function () {
    $this = $(this);
    process = $this.attr("data-process");
    $(".result").append(process);
});

//Hesaplama işlemi
$(".calculator-button").click(function () {
    var calculatorString = $(".result").text();
    var calculatorArray = calculatorString.split(process);

    var numberOne = calculatorArray[0];
    var numberTwo = calculatorArray[1];

    var result = 0;
    switch (process) {
        case "+":
            var result = parseFloat(numberOne) + parseFloat(numberTwo);
            break;
        case "-":
            var result = parseFloat(numberOne) - parseFloat(numberTwo);
            break;
        case "x":
            var result = parseFloat(numberOne) * parseFloat(numberTwo);
            result.toFixed(10);
            break;
        case "/":
            var result = parseFloat(numberOne) / parseFloat(numberTwo);
            break;
        default:
    }
    $(".result").empty().append(result);
});

//Toplu Silme (C) işlemi
$(".all-remove-button").click(function () {
    $(".result").empty();
    process = "";
});

//Sondakini Silme (X) işlemi
$(".delete-button").click(function () {
    var calculatorString = $(".result").text();
    var newString = calculatorString.slice(0, -1);

    $(".result").empty().append(newString);
});



$(document).on('keypress', function (e) {

    // "/" işareti
    if (e.keyCode === 13) {
        $(".calculator-button").trigger("click");
    }

    // "+" işareti
    if (e.keyCode === 43) {
        var text1 = "+";
        process = text1;
        $(".result").append(text1);
    }

    // "-" işareti
    if (e.keyCode === 45) {
        var text2 = "-";
        process = text2;
        $(".result").append(text2);
    }

    // "*" işareti
    if (e.keyCode === 42) {
        var text3 = "x";
        process = text3;
        $(".result").append(text3);
    }

    // "/" işareti
    if (e.keyCode === 47) {
        var text4 = "/";
        process = text4;
        $(".result").append(text4);
    }


    //sayılar
    var textNumber = 0;
    for (let index = 48; index <= 57; index++) {
        if (e.keyCode === index) {
            var text = textNumber;
            $(".result").append(text);
        }
        textNumber++;

    }


});