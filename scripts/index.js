// Убираем скролл
const body = document.querySelector('.body');

// Находим попапы
const popupProfile = document.querySelector('.profile-popup'); // попап изменение информация профиля
const popupAddPlace = document.querySelector('.add-popup'); // попап добавления места
const popupImage = document.querySelector('.image-popup');

// Находим кнопки в профиле
const editButton = document.querySelector('.profile__button-edit'); // кнопка редактировать
const addPlaceButton = document.querySelector('.profile__button-add'); // кнопка добавить место

// Назодим кнопки закрытия попапов
const closeProfileButton = popupProfile.querySelector('.popup__close'); // кнопка закрыть попап редактирования
const closeAddPlaceButton = popupAddPlace.querySelector('.popup__close'); // Кнопка закрыть попап добавления места
const closePopupImage = popupImage.querySelector('.popup__close');

// Элементы попапов
const popupImgPic = popupImage.querySelector('.popup__pic');
const popupImgText = popupImage.querySelector('.popup__text');

// Находим формы попапов
const popupFormSave = popupProfile.querySelector('.popup__container'); // форма в попап редактирования профиля
const popupFormAdd = popupAddPlace.querySelector('.popup__container')

// Находим инпуты
const nameInput = popupFormSave.querySelector('.popup__input_type_name'); // Инпут имени
const descInput = popupFormSave.querySelector('.popup__input_type_description'); // Инпут описания профиля

const placeNameInput = popupFormAdd.querySelector('.popup__input_type_name'); // Инпут названия места
const placeLinkInput = popupFormAdd.querySelector('.popup__input_type_link'); // Инпут для ссылка на фотографию места

//Элементы для замены в профиле
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');

//Карточки мест
const cardTemp = document.querySelector('.card-template').content;
const placesElement = document.querySelector('.places__items');



// Массив с первоначальными местами
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

//Функция создания карты
const createCard = (title, imgLink, alt) => {
  const cardElement = cardTemp.cloneNode(true);
  const cardImage = cardElement.querySelector('.places__image');
  const cardSrc = cardImage.src = imgLink;
  const cardAlt = cardImage.alt = alt;
  const cardTitle = cardElement.querySelector('.places__name').textContent = title;
  cardElement.querySelector('.places__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('places__like_color_black');
  });
  cardElement.querySelector('.places__remove').addEventListener('click', (evt) => {
    evt.target.parentElement.remove();
  });
  cardImage.addEventListener('click', () => {
    popupImgPic.src = cardSrc;
    popupImgPic.alt = cardAlt;
    popupImgText.textContent = cardTitle;
    popupOpen(popupImage);
  });
  return cardElement;
}

//Добавление карты места по кнопке из профиля
const addCard = (evt) => {
  evt.preventDefault();
  placesElement.prepend(createCard(placeNameInput.value, placeLinkInput.value, placeNameInput.value));
  popupClose(popupAddPlace);
  placeLinkInput.value = '';
  placeNameInput.value = '';
}

//Загрузка карточек из массива
const initCards = () => {
  initialCards.forEach((item) => {
    placesElement.append(createCard(item.name, item.link, item.name));
  });
}

initCards();

// Функция открытия попапа
const popupOpen = (elem) => {
  elem.classList.add('popup_opened');
  elem.classList.remove('popup_closed');
  body.classList.add('body_noscroll');
  if(elem === popupProfile){
    profileInfoInput();
  }
}

// Функция закрытия попапа
const popupClose = (elem) => {
  elem.classList.remove('popup_opened');
  elem.classList.add('popup_closed');
  body.classList.remove('body_noscroll');

}

// Функция добавлениия данных в попап редактирования профиля
const profileInfoInput = () => {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}

// Функция замены данных в профиле из инпутов попапа
const handleSumbitForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  popupClose(popupProfile);
}

// Колбэки
editButton.addEventListener('click', () => popupOpen(popupProfile));
closeProfileButton.addEventListener('click', () => popupClose(popupProfile));

addPlaceButton.addEventListener('click', () => popupOpen(popupAddPlace));
closeAddPlaceButton.addEventListener('click', () => popupClose(popupAddPlace));

closePopupImage.addEventListener('click', () => popupClose(popupImage));

popupFormSave.addEventListener('submit', handleSumbitForm);
popupFormAdd.addEventListener('submit', addCard);


//Закрывать попапы по клику за границей блока
popupProfile.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    popupClose(popupProfile);
  }
});

popupAddPlace.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    popupClose(popupAddPlace);
  }
});

popupImage.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    popupClose(popupImage);
  }
});
