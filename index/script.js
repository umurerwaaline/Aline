const overlay = document.getElementById('overlay');

let popup = document.getElementById('popup')

function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}

overlay.addEventListener('click' ,() => {
  closePopup();
});
