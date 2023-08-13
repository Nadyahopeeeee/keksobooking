import {
  OFFERS_TITLES,
  OFFERS_TYPES,
  CHEK_IN_OUT_TIME,
  FEATURES,
  OFFERS_DESCRIPTION,
  OFFERS_PHOTOS,
  minLat,
  maxLat,
  minLng,
  maxLng
} from './data.js';

import { randomInteger, getRandomFloat, getRandomFloatLocation, getRandomImageNumber, getRandomArrayElement, getRandomIndex, createRandomIdGenerator } from './util.js';

const createOffer = () => {
  const generatedId = createRandomIdGenerator();

  return {
    id: generatedId(),
    author: {
      avatar: `img/avatars/user${getRandomImageNumber(1, 99)}.png`
    },
    offer: {
      title: getRandomIndex(OFFERS_TITLES),
      address: {
        locationLat: `${getRandomFloat(1, 9999)}`,
        locationLng: `${getRandomFloat(1, 9999)}`,
      },
      price: randomInteger(1, 999),
      type: getRandomIndex(OFFERS_TYPES),
      rooms: randomInteger(1, 9),
      guests: randomInteger(1, 5),
      checkin: getRandomIndex(CHEK_IN_OUT_TIME),
      checkout: getRandomIndex(CHEK_IN_OUT_TIME),
      features: getRandomArrayElement(FEATURES),
      description: getRandomIndex(OFFERS_DESCRIPTION),
      photos: getRandomArrayElement(OFFERS_PHOTOS),
    },
    location: {
      lat: getRandomFloatLocation(minLat, maxLat),
      lng: getRandomFloatLocation(minLng, maxLng)
    }
  };
};

export { createOffer };

