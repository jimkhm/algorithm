/**
 * Created by magna on 2017-08-25.
 */


var insert = function(array, rightIndex, value) {
    var index;

    for(index =rightIndex; index >=0 && array[index] > value ; index--){
        array[index+1]= array[index];
    }
    array[index+1]= value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log("Array after inserting 2:  " + array);//[2, 3, 5, 7, 11, 13, 9, 6]

insert(array, 5, 9);
console.log("Array after inserting 9:  " + array);//[2, 3, 5, 7, 9, 11, 13, 6]

insert(array, 6, 6);
console.log("Array after inserting 6:  " + array);// [2, 3, 5, 6, 7, 9, 11, 13]

//for 문의 조건을 사용해서 if 문을 사용할 필요가 없다는 점, 그리고 -index가 되지 않도록 미리 체크할 수 있다는 점을 배웠다.

