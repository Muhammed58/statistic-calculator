    //Variables
    var btnMean = document.querySelector(".mean");
    var btnVariance = document.querySelector(".variance");
    var btnDeviation = document.querySelector(".deviation");
    var h1Tag = document.querySelector(".numbers");
    
    //get objects from input => split => convert number
     let numbers = () => {
        var inputNumbers =  document.querySelector(".input").value;
        var splitValue = inputNumbers.split(" ");
        //convert objects from text to number
        const textToNumber = splitValue.map((i) => Number(i));
        return textToNumber;
    }
    
    //calculate mean of numbers
    let mean = () => {
        //calculate mean
        var sum = numbers().reduce((a,b) => {
            return (a+b);
        });
        var mean1 = sum / numbers().length;
        //calculate mean of numbers and display in h1 tag
        var result = "Mean Of Numbers : " + mean1;
        h1Tag.innerHTML = result;
        return result;
    }
    
    //calculate variance of numbers
    let variance = () => {
        //calculate mean
        var sum = numbers().reduce((a,b) => {
            return (a+b);
        });
        var mean1 = sum / numbers().length;
        //calculate variance
        var total = 0;
        for (var number of numbers()) {
            total += Math.pow (number - mean1, 2);
        }
        var result2 = total / numbers().length
        h1Tag.innerHTML = "Variance of Numbers : " +  result2;
        return result2;
    }
    //calculate Standart Deviation of numbers
    let stdDeviation = () => {
        var devNumber = Math.sqrt(variance());
        h1Tag.innerHTML = "Deviation of Numbers : " + devNumber;
    }
































/* // An array that store input value
var arr = [];

//Calculate mean of numbers
btnMean.addEventListener("click", () =>{
    var inputSplitValue = parseFloat(input.split("").sort());
    arr.push(inputSplitValue);
    var totalSum = 5;
    for (i = 0; i < arr.length; i++) {
        var totalSum = totalSum + arr[i]; 
        h1Tag.innerHTML = totalSum;
    }
});



//Calculate varience of numbers
btnVarience.addEventListener("click", ()=> {
    arr = [];
    var input = document.querySelector(".input").value;
    var inputSplitValue = input.split("");
    arr = arr + arr.push(inputSplitValue);
    var text ="";

    for(i = 0; i < arr.length; i++) {
        text = text + arr[i] + "<br>";
    }
    h1Tag.innerHTML = text + "<br>";
}) ;


//Calculate deviation of numbers
btnDeviation.addEventListener("click", () =>{
    var input =  document.querySelector(".input").value;
    var inputSplitValue = parseInt(input.split(" ").sort());

}); */