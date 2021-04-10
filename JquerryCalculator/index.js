var firstNumber = 0;
var secondNumber = 0;
var operator = "z";
$(document).ready(function () {

    $(".digit").click(function () {
        if (operator == "z") {

            firstNumber = $(this).html();
            $(".text").val(firstNumber);
        }

        else {
            secondNumber = $(this).html();
            $(".text").val(secondNumber);
        }

    });
    $(".op").click(function () {
        operator = $(this).html();
        $(".text").val(operator);
    });
    $(".equal").click(function () {
        if (operator == "" || firstNumber == "" || secondNumber == "") {
            $(".text").val("Please enter all values");
            $(".text").css("background-color", "yellow");
            $(".text").css("color", "red");
        }
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(operator);
        //$(".text").val(parseInt(firstNumber) this parseInt(secondNumber));
        debugger;
        if (operator == "+")
            $(".text").val(parseInt(firstNumber) + parseInt(secondNumber));
        else if (operator == "-")
            $(".text").val(parseInt(firstNumber) - parseInt(secondNumber));
        else if (operator == "X")
            $(".text").val(parseInt(firstNumber) * parseInt(secondNumber));
        else if (operator == "/" && secondNumber == 0)
            $(".text").val("Cant divide");
        else if (operator == "/" && secondNumber != 0)
            $(".text").val((parseInt(firstNumber) / parseInt(secondNumber)));
    });
    $(".clear").click(function () {

        $(".text").val("");
        firstNumber = 0;
        secondNumber = 0;
        operator = "z";

    });

});