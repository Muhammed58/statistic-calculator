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
    let getMean = () =>{
        //calculate mean
        var sum = numbers().reduce((a,b) => {
            return (a+b);
        });
        var mean1 = sum / numbers().length;
        return mean1;
    }
    //calculate mean of numbers
    let mean = () => {
        //calculate mean of numbers and display in h1 tag
        var result = "Mean Of Numbers : " + getMean();
        h1Tag.innerHTML = result;
        return result;
    }
    
    //calculate variance of numbers
    let variance = () => {
    
        //calculate variance
        var total = 0;
        for (var number of numbers()) {
            total += Math.pow (number - getMean(), 2);
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