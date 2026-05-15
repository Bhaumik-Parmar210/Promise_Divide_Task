// Arrow Function Using Promise

const divideNumbers = (a, b) => {

    return new Promise((resolve, reject) => {

        if(b === 0){

            reject("Error: Division by zero is not allowed.");

        }
        else{

            resolve(a / b);

        }

    });

};


// Function To Run 5 Test Cases

function runTests(){

    // Case 1
    divideNumbers(10, 2)
    .then((result)=>{
        console.log("10 / 2 =", result);
    })
    .catch((error)=>{
        console.log(error);
    });


    // Case 2
    divideNumbers(20, 4)
    .then((result)=>{
        console.log("20 / 4 =", result);
    })
    .catch((error)=>{
        console.log(error);
    });


    // Case 3
    divideNumbers(15, 3)
    .then((result)=>{
        console.log("15 / 3 =", result);
    })
    .catch((error)=>{
        console.log(error);
    });


    // Case 4
    divideNumbers(100, 5)
    .then((result)=>{
        console.log("100 / 5 =", result);
    })
    .catch((error)=>{
        console.log(error);
    });


    // Case 5 (Error Case)
    divideNumbers(10, 0)
    .then((result)=>{
        console.log("10 / 0 =", result);
    })
    .catch((error)=>{
        console.log(error);
    });

}