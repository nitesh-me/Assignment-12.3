

function map(array, callback){
    var newArray =[];
    for(var i=0;i<array.length;i++){
        var newA = callback(array[i], i,array)
        newArray.push(newA);
    }
    return newArray;
}

var array = [1,2,3,4,5,6];



var newArray = map(array,function (a){
     return a*4;
 });

 console.log(array);
 console.log(newArray);
