// Code your solution in this file!
const returnFirstTwoDrivers = function(a){
    return a.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(1).slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(a){
    return function(v){
        return a * v
    }
// console.log(a, "CREATE FARE")
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(a,b){
    console.log(a,b)
    return b(a)
}