// Question 01
function showBtn1() {
    var city = prompt("Enter Your City")
    if (city == "Karachi" || city == "karachi") {
        alert("Welcome To City Of Lights")
    } else if (city == "Islamabad" || city == "isl") {
        alert("WelCome to cleanest city of Pakistan ")
    } else {
        alert("There is no Data about this country in my database")
    };
};

// Question 02
function showBtn2() {
    var gender = prompt("Enter YOur Gender")
    if (gender == "Male" || gender == "male") {
        alert("Good Morning Sir")
    } else if (gender == "Female" || gender == "female") {
        alert("Good Morning Ma'am")
    } else {
        alert("Tell Us Your correct Gender")
    }
};

// Question 03
function showBtn3() {
    var trafficSignal = prompt("Enter The Traffic Light Color")
    if (trafficSignal == "Red" || trafficSignal == "red") {
        alert("Must stopped")
    } else if (trafficSignal == "Yellow" || trafficSignal == "yellow") {
        alert("Ready to Move")
    } else if (trafficSignal == "Green" || trafficSignal == "green") {
        alert("Move Now")
    } else {
        alert("plz fill the empty cell")
    }
};

// Question 04  
function showBtn4() {
    var remainingFuel = prompt("How Much Fuel left (tell us in Liters) ")
    if (remainingFuel <= 0.25) {
        alert("Please refill the fuel in your car")
    } else if (remainingFuel >= 0.50) {
        alert("Now the fuel capacity is good")
    } else if (remainingFuel >= 100) {
        alert("Now your car petrol on good condition")
    }
};

// Question 05
function showBtn5() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    } if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
};

// Question 06
function showBtn6() {
    var marksOfThreeSubjects = +prompt("Enter The Marks Of Three Subjects");
    var totalMarks = 300;
    var Percentage = marksOfThreeSubjects / totalMarks * 100;
    var grade = "Grade:";
    
    document.write("<h1>Mark Sheet</h1>", "</br>")
    document.write("</br>")
    document.write("</br>")
    document.write("<h3>" + "Total Marks: " + totalMarks + "</h3>")
    document.write("<h3>" + "Obtained Marks: " + marksOfThreeSubjects + "</h3>")
    document.write("<h3>" + "Percentage: " + Percentage.toFixed(2) + "%", "</h3>")
    if (Percentage>= 80) {
        document.write("<h3>" +grade + "A-One" + "<h3>");
    }
    else if (Percentage>= 70) {
        document.write("<h3>" +grade + "A" + "<h3>");
    }
    else if (Percentage>= 60) {
        document.write("<h3>" +grade + "B" + "<h3>");
    }
    else if (Percentage < 60) {
        document.write("<h3>" +grade + "Fail" + "<h3>");
    }
}