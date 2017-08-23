/**
 * Created by magna on 2017-08-23.
 */

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minimumIndex;

    for(var i=0; i < array.length; i++){
        minimumIndex = indexOfMinimum(array, i);
        swap(array, i, minimumIndex);

    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
var array2 = [-22, 11, 99, 88, 9, 7, 42];
var array3 = [0, 11, 99, 88, 9, 7, 42];

selectionSort(array);
selectionSort(array2);
selectionSort(array3);

println("Array after sorting:  " + array);
println("Array after sorting:  " + array2);
println("Array after sorting:  " + array3);

