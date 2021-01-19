// Находим попапы
let popup = document.querySelector('.popup'); // попап изменение информация профиля
let popupAddPlace = document.querySelector('.add-place'); // попап добавления места

// Находим кнопки в профиле
let editButton = document.querySelector('.profile__button-edit'); // кнопка редактировать
const addPlaceButton = document.querySelector('.profile__button-add'); // кнопка добавить место

// Назодим кнопки закрытия попапов
let closeProfileButton = popup.querySelector('.popup__close'); // кнопка закрыть попап редактирования
const closeAddPlaceButton = popupAddPlace.querySelector('.popup__close'); // Кнопка закрыть попап добавления места

// Находим формы попапов
let popupFormSave = popup.querySelector('.popup__container'); // форма в попап редактирования профиля
const popupFormAdd = popupAddPlace.querySelector('.popup__container')

// Находим инпуты
let nameInput = popupFormSave.querySelector('.popup__input_type_name'); // Инпут имени
let descInput = popupFormSave.querySelector('.popup__input_type_description'); // Инпут описания профиля

const placeNameInput = popupFormAdd.querySelector('.popup__input_type_name'); // Инпут названия места
const placeLinkInput = popupFormAdd.querySelector('.popup__input_type_link'); // Инпут для ссылка на фотографию места

//Элементы для замены в профиле
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description');

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

const placesInit = () => {

  const cardTemp = document.querySelector('.card-template').content;
  const placesElement = document.querySelector('.places__items');

  initialCards.forEach((item) => {
    const cardElement = cardTemp.cloneNode(true);
    cardElement.querySelector('.places__image').src = item.link;
    cardElement.querySelector('.places__image').alt = item.name;
    cardElement.querySelector('.places__name').textContent = item.name;
    cardElement.querySelector('.places__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('places__like_color_black');
      console.log('click')
    });

    placesElement.append(cardElement);
  });

}

placesInit();

// Функция открытия попапа
let popupOpen = (elem) => {
  elem.classList.add('popup_opened');
  profileInfoInput();
  console.log('tyt');
}

// Функция закрытия попапа
let popupClose = (elem) => {
  elem.classList.remove('popup_opened');
}

// Функция добавлениия данных в попап редактирования профиля
let profileInfoInput = () => {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}

// Функция замены данных в профиле из инпутов попапа
let handleSumbitForm = (event) => {

  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  popupClose(popup);
}

const addPlace = (event) => {
  event.preventDefault();

  const cardTemp = document.querySelector('.card-template').content;
  const placesElement = document.querySelector('.places__items');
  const cardElement = cardTemp.cloneNode(true);

  cardElement.querySelector('.places__image').src = placeLinkInput.value;
  cardElement.querySelector('.places__image').alt = placeNameInput.value;
  cardElement.querySelector('.places__name').textContent = placeNameInput.value;
  cardElement.querySelector('.places__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('places__like_color_black');
    console.log('click')
  });

  placesElement.prepend(cardElement);
  popupClose(popupAddPlace);

  placeLinkInput.value = '';
  placeNameInput.value = '';
}

// Колбэки
editButton.addEventListener('click', () => popupOpen(popup));
closeProfileButton.addEventListener('click', () => popupClose(popup));

addPlaceButton.addEventListener('click', () => popupOpen(popupAddPlace));
closeAddPlaceButton.addEventListener('click', () => popupClose(popupAddPlace));

popupFormSave.addEventListener('submit', handleSumbitForm);
popupFormAdd.addEventListener('submit', addPlace);


popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupClose(popup);
  }
});
