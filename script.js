function fizzBuzz() {
    let num = parseInt(document.getElementById("number").value)
    
    if (typeof num == "number") {
        for (let i = 1; i <= num; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.getElementById("display").innerText = "Fizzbuzz"
                console.log("Fizzbuzz")
            } else if (i % 3 == 0) {
                document.getElementById("display").innerText = "Fizz"
                console.log("Fizz")
            } else if (i % 5 == 0) {
                document.getElementById("display").innerText = "Buzz"
                console.log("Buzz")
            } else {
                document.getElementById("display").innerText = num;
                console.log(i)
            } 
        }   
    } 
    document.getElementById("display").innerText = "Please enter a valid number";
}

// function reset() {
//     document.getElementById("number").value = " ";
//     document.getElementById("diplay").value = " ";
// }