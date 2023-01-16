const random = (max = 15, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
console.log('random - ' + random());