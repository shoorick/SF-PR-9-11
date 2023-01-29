// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// window.onload - Событие load на объекте window наступает,
// когда загрузилась вся страница, включая стили, картинки и другие ресурсы
window.onload = function () {
    // personGenerator - объект со значениями мужских имён из файла personGenerator.js
    // константа person - присваивается метод getPerson из объекта personGenerator
    const person = personGenerator.getPerson();
    console.log(person);

    document.getElementById("firstNameOutput").innerText = person.firstname;
    document.getElementById("surNameOutput").innerText = person.surname;
    document.getElementById("birthYearOutput").innerText = person.birthYear;

    // вывод пола
    document.getElementById("genderOutput").innerText = person.gender;
};
