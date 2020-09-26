var arr = [25,56,51,1,52,2,35,79,85,9885,3];
var num = prompt('Введите число:')*1;
var zt = 0;
for (k=0;k<=arr.length;k++){
if (num === arr[k]){
alert('Номер вашего числа в массиве:'+(k+1));
//alert(k);
zt++;
break;
}
if (zt=0) {
alert('Вашего числа в массиве нет');
}
}
/*попытка 
arr.sort(function wth(a,b,c) {
    return a-b
});
console.log(arr);
*/
/*по возрастанию
arr.sort(function(a, b){return a - b});
console.log(arr);

по убываню
arr.sort(function(a, b){return b - a});
console.log(arr);

*/
/*var l1,long=arr.length/2;
for (k=0;k<long;k++){
l1=arr[k];
arr[k]=arr[long-k];
arr[long-k]=l1;
console.log(arr);
};
const even = long => !(long % 2);
if ((long % 2) =0){
    for (k=0;k<long;k++){
        l1=arr[k];
        arr[k]=arr[long-k];
        arr[long-k]=l1;
        };
        console.log(arr);  
}
*/
//console.log(arr);
