/**
 * Created by magna on 2017-08-18.
 */

//https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation
//Let's look at a simple implementation of linear search:
var doLinearSearch = function(array) {
    for (var guess = 0; guess < array.length; guess++) {
        if (array[guess] === targetValue) {
            return guess;  // found it!
        }
    }
    return -1;  // didn't find it
};