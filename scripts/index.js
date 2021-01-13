let popup = document.querySelector('.popup');//
let editButton = document.querySelector('.profile__button-edit');//
let closeProfileButton = popup.querySelector('.popup__close');//
let popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_type_name');//
let descInput = popupForm.querySelector('.popup__input_type_description');//
let profileName = document.querySelector('.profile__name');//
let profileDesc = document.querySelector('.profile__description');//

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

