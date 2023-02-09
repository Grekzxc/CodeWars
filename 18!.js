// Beginner - Reduce but Grow
// Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку.



function grow(x){
    return x.reduce((a, b)=> a * b,1);
   }