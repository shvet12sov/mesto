let popup = document.querySelector('.popup');//
let editButton = document.querySelector('.profile__button-edit');//
let closeProfileButton = popup.querySelector('.popup__close');//
let popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_type_name');//
let descInput = popupForm.querySelector('.popup__input_type_description');//
let profileName = document.querySelector('.profile__name');//
let profileDesc = document.querySelector('.profile__description');//

const initialCards = [
  {
    name: 'Лос-Анджелес',
    link: './images/places/losangeles.jpg'
  },
  {
    name: 'Бали',
    link: './images/places/bali_templ.jpg'
  },
  {
    name: 'Япония',
    link: './images/places/japan.jpg'
  },
  {
    name: 'Каньон',
    link: './images/places/canyon.jpg'
  },
  {
    name: 'Рио-де-Жанейро',
    link: './images/places/rio.jpg'
  },
  {
    name: 'Рим',
    link: './images/places/rome.jpg'
  }
];

let popupOpen = () => {
  popup.classList.add('popup_opened');
  profileInfoInput();
}

let popupClose = () => {
  popup.classList.remove('popup_opened')
}

let profileInfoInput = () => {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}

let handleSumbitForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeProfileButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', handleSumbitForm);

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupClose();
  }
})

const addPlaces = () => {

  const cardTemp = document.querySelector('.card-template').content;
  const placesElement = document.querySelector('.places__items');

  initialCards.forEach((item) => {
    const cardElement = cardTemp.cloneNode(true);
    cardElement.querySelector('.places__image').src = item.link;
    cardElement.querySelector('.places__image').alt = item.name;
    cardElement.querySelector('.places__name').textContent = item.name;

    placesElement.append(cardElement);
  });

}

addPlaces();
