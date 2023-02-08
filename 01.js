// Преобразовать число в перевернутый массив цифр

function digitize(n) {
    return n.toString(10).split('').map(Number).reverse();
}
 
// .toString(преобразовывает в строку) 
// .split(возвращает массив содержащий один элемент, состоящий из всей строки)
// .map(позволяет вызвать переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции.)
// reverse(переварачивает массив)