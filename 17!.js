// Shortest Word
// Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}