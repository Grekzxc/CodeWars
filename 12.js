// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r'){ //lower- делаем все буквы маленькие, возвращаем символ по заданному индексу внутри строки и приравниваем к р
        name = name + ' plays banjo';
      }else{
        name = name + ' does not play banjo';
      }
      return name;
    }