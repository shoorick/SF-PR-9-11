// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// personGenerator - объект  
const personGenerator = {
    // строка с фамилиями
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    // строка с мужскими именами
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    // строка с женскими именами
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Елена",
            "id_3": "Анна",
            "id_4": "Светлана",
            "id_5": "Яна",
            "id_6": "Оксана",
            "id_7": "Ирина",
            "id_8": "Алёна",
            "id_9": "Екатерина",
            "id_10": "Мария"
        }
    }`,
    birthYearJson: `{
        "count": 20,
        "list": {     
            "id_1": "1974",
            "id_2": "1977",
            "id_3": "1978",
            "id_4": "1979",
            "id_5": "1980",
            "id_6": "1981",
            "id_7": "1982",
            "id_8": "1983",
            "id_9": "1984",
            "id_10": "1985",
            "id_11": "1986",
            "id_12": "1987",
            "id_13": "1988",
            "id_14": "1989",
            "id_15": "1990",
            "id_16": "1991",
            "id_17": "1992",
            "id_18": "1993",
            "id_19": "1994",
            "id_20": "1995"
        }
    }`,

    // Константы в верхнем регистре - псевдоним для константы используются только как псевдонимы для «жёстко закодированных» значений
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // randomIntNumber - свойство объекта со значением стрелочной функции (return  не нужен т.к. есть только вычисления)
    // метод отвечающий за случайную генерацию
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
     //  рандомный вывод пола
     randomGender: function() {
        
        return (`${this.randomIntNumber}` != 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    }, 
    
    // метод randomValue преобразующий строки JSON в объект JS благодаря свойству parse
        randomValue: function (json) {
        // строка JSON помещается в объект obj
        const obj = JSON.parse(json);
        // производим выборку для аргумента max из значений свойства count 
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

   

    randomFirstName: function() {
        // firstNameMaleJson - мужские имена
        return this.randomValue(this.firstNameMaleJson);

    },


     randomSurname: function() {
        // surnameJson - фамилия
        // происходит возврат объекта 
        return this.randomValue(this.surnameJson);

    },

    // год ррождения
    randomBirthYear: function() {
        return this.randomValue(this.birthYearJson);
    },

    // метод getPerson продолжает выполнение в файле init.js
    getPerson: function () {
        this.person = {};
        //
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.gender = this.randomGender();
        this.person.birthYear = this.randomBirthYear();

        return this.person;
    }
};

console.log('randomIntNumber - ' + personGenerator.randomIntNumber());
console.log('randomGender - ' + personGenerator.randomGender());