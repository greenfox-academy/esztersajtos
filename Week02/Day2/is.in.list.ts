'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums(input:number[]) {
    for (let i = 0; i < input.length; i++){
        if (input[i] === 4 || input[i] === 8 || input[i] === 12 || input[i] === 16){
            return true
        }          
    }
    return false
}
console.log(checkNums(listOfNumbers));

