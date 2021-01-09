let popup = document.querySelector('.popup');//
let editButton = document.querySelector('.profile__button-edit');//
let closeProfileButton = popup.querySelector('.popup__close');//
let noScroll = document.querySelector('.body'); //
let popupForm = popup.querySelector('.popup_container');
let nameInput = popupForm.querySelector('.popup__name');//
let descInput = popupForm.querySelector('.popup__description');//
let profileName = document.querySelector('.profile__name');//
let profileDesc = document.querySelector('.profile__description');//

let togglePopup = () => {
  popup.classList.toggle('popup_opened')
  noScroll.classList.toggle('body_noscroll')
  console.log('popup')
}

let profileInfoInput = () => {
  nameInput.value = profileName.textContent
  descInput.value = profileDesc.textContent
  console.log('copy in input')
}

let handleSumbitForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileDesc.textContent = descInput.value
  togglePopup();
}

editButton.addEventListener('click', togglePopup)
editButton.addEventListener('click', profileInfoInput)
closeProfileButton.addEventListener('click', togglePopup)
popupForm.addEventListener('submit', handleSumbitForm)

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
})

