const moreBtn = document.querySelector('.botom-btn');
const speaker = document.getElementById('speaker-ul2');
let speakerTogle = 0;

function loadEmpty() {
  speaker.innerHTML = '';
}
function loadPages() {
  speaker.innerHTML = '';
}
moreBtn.addEventListener('click', () => {
  if (speakerTogle === 0) {
    speakerTogle = 1;
    loadPages();
  } else {
    loadEmpty();
    speakerTogle = 0;
  }
});
const hamburgerPage = document.querySelector('.hamburger-page');
const hamburgeBtn = document.querySelector('.hamburger');
hamburgeBtn.addEventListener('click', () => {
  hamburgerPage.classList.add('display');
});
const xBtn = document.querySelector('.x-btn');
xBtn.addEventListener('click', () => {
  hamburgerPage.classList.remove('display');
});