const ad = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const controls = document.querySelectorAll('.ad-form-header, .ad-form__element, .map__filter');

const switchState = (boolean) => {
  ad.classList.toggle('ad-form--disabled', boolean);
  mapFilters.classList.toggle('ad-form--disabled', boolean);
  controls.forEach((fieldset) => {
    fieldset.disabled = boolean;
  });
};

const MIN_TITLE_LENGTH = 30;
const title = document.querySelector('#title');

title.addEventListener('input', () => {
  const titleLength = title.ariaValueMax.length;

  if (titleLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

const roomNumber = document.querySelector('#room_number');
const guestsNumber = document.querySelector('#capacity');

const validateRoomCapacity = () => {
  if ((roomNumber.value !== '100' && Number(guestsNumber.value) > Number(roomNumber.value) || guestsNumber.value === '0') ||
    (roomNumber.value = '100' && guestsNumber.value !== '0')) {
    guestsNumber.setCustomValidity('Неверное значение');
  } else {
    guestsNumber.setCustomValidity('');
  }
  guestsNumber.reportValidity();
};

guestsNumber.addEventListener('change', () => {
  validateRoomCapacity();
});

roomNumber.addEventListener('change', () => {
  validateRoomCapacity();
});

validateRoomCapacity();

export {switchState};
