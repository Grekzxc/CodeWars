// Завершите решение так, чтобы оно перевернуло переданную в него строку.
function solution(str){
    let splitString = str.split(""); //позволяет разбить строки на массив подстрок
    let reverseArray = splitString.reverse(); //размещает элементы объекта в обратном порядке
    let joinArray = reverseArray.join(""); //позволяет преобразовать и объединить все элементы массива в одно строковое значение
    return joinArray
    }