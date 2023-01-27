let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);
  console.log(json);

  let object = JSON.parse(json);
  console.log(object);

const random = (max = 15, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
console.log('random - ' + random());