// String ends with?

function solution(str, ending){
    return str.slice(-ending.length) == ending ? true: false;
  }
// метод slice() не изменяет исходный массив, а возвращает новую поверхностную копию, 
// содержащую копии элементов, вырезанных из исходного массива.

function solution(str, ending){
    return str.endsWith(ending);
   }

   