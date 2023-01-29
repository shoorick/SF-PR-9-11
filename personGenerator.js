// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// personGenerator - объект
const personGenerator = {
    // поля
    gender: "",
    firstname: "",
    surname: "",

    // Константы в верхнем регистре - псевдоним для константы
    // используются только как псевдонимы для «жёстко закодированных» значений
    GENDER_MALE: "Мужчина",
    GENDER_FEMALE: "Женщина",

    // фамилии
    surnames: [
        "Иванов",
        "Смирнов",
        "Кузнецов",
        "Васильев",
        "Петров",
        "Михайлов",
        "Новиков",
        "Федоров",
        "Кравцов",
        "Николаев",
        "Семёнов",
        "Славин",
        "Степанов",
        "Павлов",
        "Александров",
        "Морозов",
    ],
    // мужские имена
    maleFirstNames: [
        "Александр",
        "Максим",
        "Иван",
        "Артем",
        "Дмитрий",
        "Никита",
        "Михаил",
        "Даниил",
        "Егор",
        "Андрей",
    ],
    // строка с женскими именами
    femaleFirstNames: [
        "Татьяна",
        "Елена",
        "Анна",
        "Светлана",
        "Яна",
        "Оксана",
        "Ирина",
        "Алёна",
        "Екатерина",
        "Мария",
    ],

    // методы
    // randomIntNumber - свойство объекта со значением стрелочной функции (return  не нужен т.к. есть только вычисления)
    // метод отвечающий за случайную генерацию
    randomIntNumber: (max = 1, min = 0) =>
        Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function () {
        let genderLet = this.randomIntNumber()
            ? this.GENDER_MALE
            : this.GENDER_FEMALE;
        return genderLet;
    },

    // метод randomValue преобразующий строки JSON в объект JS благодаря свойству parse
    randomValue: function (json) {
        // строка JSON помещается в объект obj
        const obj = JSON.parse(json);
        // производим выборку для аргумента max из значений свойства count
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },
    //  рандомное назначение пола

    randomFirstName: function () {
        if (this.randomGender() === "Женщина") {
            return this.randomValue(this.femaleFirstNames);
        }

        return this.randomValue(this.maleFirstNames);
    },

    randomSurname: function () {
        // surnameJson - фамилия
        // происходит возврат объекта
        let surnameLet = this.randomValue(this.surnameJson);
        if (this.randomGender() == "Женщина") {
            return surnameLet + "a";
        }
        return surnameLet;
    },

    // метод getPerson продолжает выполнение в файле init.js
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.randomIntNumber(1974, 1999);

        return this.person;
    },
};

console.log();
console.log("randomIntNumber - " + personGenerator.randomIntNumber());
console.log("randomGender - " + personGenerator.randomGender());
console.log(" this.randomGender() " + personGenerator.randomGender());
