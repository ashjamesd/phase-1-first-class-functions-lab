// Code your solution in this file!
const scuber = ['Antonia', 'Nuru','Amari','Mo'];
const returnFirstTwoDrivers = function(){
    let firstTwo = scuber.slice(0,2);
    return firstTwo;
}

const returnLastTwoDrivers = function(){
    let lastTwo = scuber.slice(2,4);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] //array containing functions 

function multiplier(fare){
    fare * a;
}

function createFareMultiplier(a){
    multiply = (b) => b*a
    return multiply;
}

const double = createFareMultiplier(2);
function fareDoubler(b){
    return double(b);
}

const triple = createFareMultiplier(3);
function fareTripler(c){
    return triple(c);
}

function selectDifferentDrivers(scuber, callback){
    let drivers = callback();
    return drivers;
}