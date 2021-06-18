//Function decleration

function squared1(number1, number2) {
    let sum = number1 * number1 + number2 * number2;
    let result = sum * sum;
    console.log(result);
    return result;

}
squared1(2, 4);


//Function expression
const squared2 = function (x, y) {
    let sum = x * x + y * y;
    let result = sum * sum;
    console.log(result);
    return result;
};

squared2(2, 4);


//Arrow function (also a function expression)
const squared3 = (a, b) => {
    let sum = a * a + b * b;
    let result = sum * sum;
    console.log(result);
    return result;
};
squared3(2, 4);