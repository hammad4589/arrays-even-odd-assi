var arraysNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


var evenArray =[];
var oddArray =[];


for (var i = 0; i < arraysNumber.length;  i++){
    if(arraysNumber[i] % 2 ===0){
        evenArray.push(arraysNumber[i])
    } else{
        oddArray.push(arraysNumber[i])
    }
}


document.write("<h3>Even Numbers:</h3>");
    document.write("<p>" + evenArray.join(", ") + "</p>");

    document.write("<h3>Odd Numbers:</h3>");
    document.write("<p>" + oddArray.join(", ") + "</p>");