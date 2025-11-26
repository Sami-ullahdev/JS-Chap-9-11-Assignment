// Question 01
function showBtn1() {
    var city = prompt("Enter Your City")
    if (city == "Karachi" || city == "karachi") {
        document.write("Welcome To City Of Lights")
    } else if (city == "Islamabad" || city == "isl") {
        document.write("WelCome to cleanest city of Pakistan ")
    } else {
        document.write("There is no Data about this country in my database")
    };
};

// Question 02
function showBtn2() {
    var gender = prompt("Enter YOur Gender")
    if (gender == "Male" || gender == "male") {
        document.write("Good Morning Sir")
    } else if (gender == "Female" || gender == "female") {
        document.write("Good Morning Ma'am")
    } else {
        document.write("Tell Us Your correct Gender")
    }
};

// Question 03
function showBtn3() {
    var trafficSignal = prompt("Enter The Traffic Light Color")
    if (trafficSignal == "Red" || trafficSignal == "red") {
        document.write("Must stopped")
    } else if (trafficSignal == "Yellow" || trafficSignal == "yellow") {
        document.write("Ready to Move")
    } else if (trafficSignal == "Green" || trafficSignal == "green") {
        document.write("Move Now")
    } else {
        document.write("plz fill the Correct color")
    }
};

// Question 04  
function showBtn4() {
    var remainingFuel = prompt("How Much Fuel left (tell us in Liters) ")
    if (remainingFuel <= 0.25) {
        document.write("Please refill the fuel in your car")
    } else if (remainingFuel >= 0.50) {
        document.write("Now the fuel capacity is good")
    } else if (remainingFuel >= 100) {
        document.write("Now your car petrol on good condition")
    }
};

// Question 05
function showBtn5() {
    var a = 4;
    if (++a === 5) {
        document.write("given condition for variable a is true");
    }
    var b = 82;
    if (b === 83) {
        document.write("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        document.write("condition 1 is true");
    } if (c === 13) {
        document.write("condition 2 is true");
    }
    if (++c < 14) {
        document.write("condition 3 is true");
    }
    if (c === 14) {
        document.write("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        document.write("The cost equals");
    }
    if (true) {
        document.write("True");
    }
    if (false) {
        document.write("False");
    }
    if ("car" < "cat") {
        document.write("car is smaller than cat");
    }
};

// Question 06
function showBtn6() {
    var marksOfThreeSubjects = +prompt("Enter The Marks Of Three Subjects");
    var totalMarks = 300;
    var Percentage = marksOfThreeSubjects / totalMarks * 100;

    document.write("<h1>Mark Sheet</h1>")
    document.write("<h3>" + "Total Marks: " + totalMarks + "</h3>")
    document.write("<h3>" + "Obtained Marks: " + marksOfThreeSubjects + "</h3>")
    document.write("<h3>" + "Percentage: " + Percentage.toFixed(2) + "%", "</h3>")
    if (Percentage >= 80) {
        document.write("<h3>" + "Grade: " + "A-One" + "<h3>");
        document.write("<h3>" + "Rmarks: " + "Excellent" + "<h3>");
    }
    else if (Percentage >= 70) {
        document.write("<h3>" + "Grade: " + "A" + "<h3>");
        document.write("<h3>" + "Rmarks: " + "Good" + "<h3>");
    }
    else if (Percentage >= 60) {
        document.write("<h3>" + "Grade: " + "B" + "<h3>");
        document.write("<h3>" + "Rmarks: " + "You Need To Improve" + "<h3>");
    }
    else if (Percentage < 60) {
        document.write("<h3>" + "Grade: " + "Fail" + "<h3>");
        document.write("<h3>" + "Rmarks: " + "Soory" + "<h3>");
    }
};

// Question 07
function showBtn7() {
    var secretNumber = 7;
    var findSecretNumber = +prompt("Find the Number From 1 to 10")
    if (findSecretNumber === secretNumber) {
        document.write("Bingo! Correct Answer")
    } else if (findSecretNumber < secretNumber) {
        document.write("Close enough to the correct answer")
    } else if (findSecretNumber > secretNumber) {
        document.write("-1 to see the correct answer")
    };
};

// Question 08
function showBtn8() {
    var num = +prompt("Enter a Num to see is the Number Divisible By 3")
    if (num % 3 === 0) {
        document.write(num + " The number is divisible by 3")
    } else {
        document.write(num + " The number is NOT divisible by 3")
    }
};

// Question 09
function showBtn9() {
    var num = +prompt("Enter a Num to see is the Number Divisible By 3")
    if (num % 2 === 0) {
        document.write(num + " This is A Even Number")
    } else {
        document.write(num + " This is A Odd Number")
    }
};

// Question 10
function showBtn10() {
    var Temperature = +prompt("Enter The Today Temperature")
    if (Temperature >= 40) {
        document.write("It is too hot outside.")
    } else if (Temperature >= 30) {
        document.write("The Weather today is Normal.")
    } else if (Temperature >= 20) {
        document.write("Today’s Weather is cool.")
    } else if (Temperature >= 10) {
        document.write("OMG! Today’s weather is so Cool.")
    } else {
        document.write("This Wheather not explaned in my Data.")
    }
};

// Question 11
function showBtn11() {
    alert("IN THIS EQUATION YOU CAN DO SOME MATHAMETICAL OPREATION LIKE:")
    var num1 = +prompt("Enter First Number");
    var num2 = +prompt("Enter Secound Number");
    var op = prompt("Enter operation (+, -, *, /, %)");

    if (op === "+") {
        document.write("Result: " + (num1 + num2))
    }

    if (op === "-") {
        document.write("Result: " + (num1 - num2))
    }

    if (op === "*") {
        document.write("Result: " + (num1 * num2))
    }

    if (op === "/") {
        document.write("Result: " + (num1 / num2))
    }

    if (op === "%") {
        document.write("Result: " + (num1 % num2))
    }
}