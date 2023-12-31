const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getOffertype = (announcement) => {
  switch(announcement.offer.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'place':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const getPopupPhotos = (announcement) => announcement.offer.photos.reduce((previous, current) =>
  `${previous}<img src="${current}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`, '');

const render = (announcement) => {
  const cardElement = cardTemplate.cloneNode(true);
  const offer = announcement.offer;

  cardElement.querySelector('.popup__title').textContent = offer.title;

  if(!offer.address || !offer.address.length) {
    cardElement.querySelector('.popup__text--address').classList.add('hidden');
  } else {
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
  }

  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getOffertype(announcement);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  if(!offer.features || !offer.features.length) {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  } else {
    const featuresList = cardElement.querySelectorAll('.popup__feature');
    let isNecessary = false;

    featuresList.forEach((feature) => {
      isNecessary = offer.features.some((offerFeature) => {
        feature.classList.contains(`popup__feature--${offerFeature}`);

        if(!isNecessary) {
          feature.remove();
        }
      });
    });
  }

  if(!offer.description || !offer.description.length) {
    cardElement.querySelector('.popup__description').classList.add('hidden');
  } else {
    cardElement.querySelector('.popup__description').textContent = offer.description;
  }

  if(!offer.photos || !offer.photos.length) {
    cardElement.querySelector('.popup__photos').classList.add('.hidden');
  } else {
    cardElement.querySelector('.popup__photos').innerHTML = getPopupPhotos(announcement);
  }

  if(!announcement.author.avatar || !announcement.author.avatar.length) {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  } else {
    cardElement.querySelector('.popup__avatar').src = announcement.author.avatar;
  }

  // console.log(cardElement);
  return cardElement;
};

export {render};
