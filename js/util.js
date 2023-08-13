const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, digits) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

export {getRandomInteger, getRandomPositiveFloat};


// function randomInteger(min, max) {
//   if(max <= min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   // console.log(Math.floor(rand));
//   return Math.floor(rand);
// }

// //Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// function getRandomFloat(min, max) {
//   if(min < 0 || max < 0) {
//     throw new Error('Числа не могут быть отрицательными');
//   }
//   if(max === min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   if(max <= min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   return Math.random() * (max - min) + min;
// }
// // getRandomFloat(11, 101);
// // > 75.31898734299466

// function getRandomFloatLocation(min, max) {
//   if(min < 0 || max < 0) {
//     throw new Error('Числа не могут быть отрицательными');
//   }
//   if(max === min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   if(max <= min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   const location = Math.random() * (max - min) + min;
//   return parseFloat(location.toFixed(5));
// }

// function getRandomImageNumber(min, max) {
//   if(max <= min) {
//     throw new Error('Максимальное число должно быть меньше минимального');
//   }
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   rand = Math.floor(rand).toString();

//   return rand.length < 2 ? '0' + rand : rand;
// }

// function getRandomArrayElement(arr) {
//   const maxLength = arr.length;
//   const lengthOfArr = randomInteger(1, maxLength);
//   const newArr = [];

//   for (let i = 0; i < lengthOfArr; i++) {
//     const indexOfEl = randomInteger(0, 5);
//     const el = arr[indexOfEl];

//     if(arr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

// function getRandomIndex(arr) {
//   return arr[randomInteger(0, arr.length - 1)];
// }

// //TODO refactor https://up.htmlacademy.ru/profession/fullstack/1/javascript/24/demos/5971#13
// function createRandomIdGenerator(min, max) {
//   const previosValues = [];

//   return function() {
//     let currenValue = randomInteger(min, max);
//     while(previosValues.includes(currenValue)) {
//       currenValue = createRandomIdGenerator(min, max);
//     }
//     previosValues.push(currenValue);
//     return currenValue;
//   };
// }

// export {randomInteger, getRandomFloat, getRandomFloatLocation, getRandomImageNumber, getRandomArrayElement, getRandomIndex, createRandomIdGenerator};
