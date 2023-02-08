
// Возьмите массив и удалите каждый второй элемент из массива. 
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    let result = [];
     for (let i = 0; i < arr.length; i+=2) {
       result.push(arr[i]);
     }
     return result;
   }