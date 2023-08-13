// import { active } from 'browser-sync';
import {getRandomInteger, getRandomPositiveFloat} from './util.js';

const ACCOMMODATION_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_OPTIONS = ['12:00', '13:00', '14:00'];
const CHECKOUT_OPTIONS = ['12:00', '13:00', '14:00'];
const ALL_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// const generateRandomArray = (arr) => {
//   const newArr = [];
//   const newLength = getRandomInteger(1, arr.length);
//   for (let i = 0; i <= newLength.length; i++) {
//     const newElement = arr[getRandomInteger(1, arr.length - 1)];
//     if(!newArr.includes(newElement)) {
//       newArr.push(newElement);
//     }
//   }
//   return newArr;
// };

const generateFeatures = () => {
  const features = [];
  const newLength = getRandomInteger(1, ALL_FEATURES.length);
  for (let i = 0; i <= newLength; i++) {
    const newFeture = ALL_FEATURES[getRandomInteger(1, ALL_FEATURES.length - 1)];
    if(!features.includes(newFeture)) {
      features.push(newFeture);
    }
  }
  return features;
};

const generatePhotos = () => {
  const photos = [];
  const newLength = getRandomInteger(1, ALL_PHOTOS.length);
  for (let i = 0; i <= newLength; i++){
    const newPhoto = ALL_PHOTOS[getRandomInteger(1, ALL_PHOTOS.length - 1)];
    if(!photos.includes(newPhoto)){
      photos.push(newPhoto);
    }
  }
  return photos;
};

const getAuthorUrl = (id) => {
  const userId = String(id).padStart(2, 0);
  return `img/avatars/user${userId}.png`;
};

const createAnnouncement = (userId) => {
  const announcement = {};
  announcement.author = {
    avatar: getAuthorUrl(userId)
  };

  const location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  };

  announcement.location = location;

  announcement.offer = {
    title: 'аренда жилья',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomInteger(0, 10000),
    type: ACCOMMODATION_TYPES[getRandomInteger(0, ACCOMMODATION_TYPES.length - 1)],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 10),
    checkin: CHECKIN_OPTIONS[getRandomInteger(0, CHECKIN_OPTIONS.length - 1)],
    checkout: CHECKOUT_OPTIONS[getRandomInteger(0, CHECKOUT_OPTIONS.length - 1)],
    features: generateFeatures(),
    description: 'Большое светлое помещение',
    photos: generatePhotos(),
  };
  return announcement;
};

export {createAnnouncement};

// // 4.6 больше деталей
// const OFFERS_TITLES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон','Верон','Мирабелла'];
// const OFFERS_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
// const CHEK_IN_OUT_TIME = ['12:00', '13:00', '14:00'];
// const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const OFFERS_DESCRIPTION = ['nice', 'beautiful', 'luxury', 'cool', 'sexy'];
// const OFFERS_PHOTOS = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
// ];
// const minLat = 35.65000;
// const maxLat = 35.70000;
// const minLng = 139.70000;
// const maxLng = 139.80000;
// const SIMILAR_OFFERS_COUNT = 10;

// export {
//   OFFERS_TITLES,
//   OFFERS_TYPES,
//   CHEK_IN_OUT_TIME,
//   FEATURES,
//   OFFERS_DESCRIPTION,
//   OFFERS_PHOTOS,
//   minLat,
//   maxLat,
//   minLng,
//   maxLng,
//   SIMILAR_OFFERS_COUNT
// };

