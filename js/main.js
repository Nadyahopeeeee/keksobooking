import {createAnnouncement} from './data.js';
import {render} from './announcement.js';
import {switchState} from './form.js';

const cardsList = document.querySelector('.map__canvas');
cardsList.appendChild(render(createAnnouncement(1)));
switchState(false);
// render();

// const getAnnouncementsList = () => {
//   const announcements = [];
//   for(let i = 1; i <= 10; i++) {
//     announcements.push(createAnnouncement(i));
//   }
//   return announcements;
// };

// console.log(getAnnouncementsList());


// import { SIMILAR_OFFERS_COUNT } from './data.js';
// import { createOffer } from './create-offer.js';

// const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);

// console.log(similarOffers);

// const templateFragment = document.querySelector('#card').content;

// const template = templateFragment.querySelector('article');
// const fragment = document.createDocumentFragment();
