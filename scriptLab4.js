let userName = "Andy"
let userAge = 45
let userPets = ["cat", "dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingForPet = 6
let daysSurvived = 0

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingForPet * userPets.length
    userBalance = userBalance - spending
    daysSurvived = daysSurvived + 1
}

console.log("Day survived " + daysSurvived)

function nameVertical(name) {
    // 3 erinevat võimalust esimesks ülesandeks
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
    for (const index in name) {
        console.log(name[index])
    }
    let index = 0
    while (index < name.length) {
        console.log(name[index++])
    }
}

nameVertical("Sarah")

// ül2
function code(number) {
    if (number >= 100 && number <= 199)
        return "Informational"
    else if (number <= 299)
        return "Successful"
    else if (number <= 399)
        return "Redirection"
    else if (number <= 499)
        return "Client error"
    else if (number <= 599)
        return "Server error"
    return "Not a valid code"
}

function code2(number) {
    // replace with ?
    return number >= 100 && number <= 199 ? "Informational" : number <= 299 ? "Successful" : number <= 399 ? "Redirection" : number <= 499 ? "Client error" : number <= 599 ? "Server error" : "Not a valid code";
}

console.log("Code 198: " + code(198))
console.log("Code 250: " + code(250))
console.log("Code 999: " + code(999))

//task 3
function compareVariables(var1, var2){
    console.log('var1: ${var1}, var2: ${var2}')
    if (var1 === var2) {
        console.log("Two variables are equal and have the same type")
    }
    else if (var1 !== var2) {
        console.log("Two variables are equal but don't have same type")
    }
    else {
        console.log("Variable names and types are different")
    }
}

compareVariables("1", 1)
compareVariables(1, 1)
compareVariables("22", 1)

//Task3

let number1 = 0, number2  = 1, nextNumber
let numbers = []

function fibonacci(number){
    let number1 = 0, number2  = 1, nextNumber
    let numbers = []
    for (let i = 0; i < number; i++) {
        numbers.push(number1)
        nextNumber = number1 + number2
        number1 = number2
        number2 = nextNumber
        if(nextNumber > number)
            break
    }
    return numbers
}

console.log(fibonacci(35))