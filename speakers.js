const speakerArr = [
  {
    id: 0,
    image: 'images/speaker1.png',
    name: 'Yochai Benkler',
    subtitle: 'Web Developer and Software Engineer',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 1,
    image: 'images/speaker2.png',
    name: 'Kilnam Chon',
    subtitle: 'Programmer and Audio-Visual Engineer',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 2,
    image: 'images/speaker3.png',
    name: 'SohYeong Noh',
    subtitle: 'Web Developer and Network Engineer',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
];
const speakers = document.querySelector('.speaker-ul');
let html1 = '';
speakerArr.forEach((speaker) => {
  html1 += `
  <li class="speakers-li">
  <div><img class="image" src="${speaker.image}" alt=""></div>
  <div class="speaker-content">
      <h5 class="speaker-name">${speaker.name}</h5>
      <p>${speaker.subtitle}</p>
      <p>${speaker.description}</p>
  </div>
</li> `;
});
speakers.innerHTML = html1;

const addSpeakerArr = [
  {
    id: 3,
    image: 'images/speaker4.png',
    name: 'Yochai Benkler',
    subtitle: 'Mathematical Scientist and Statistician',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    image: 'images/speaker5.png',
    name: 'Kilnam Chon',
    subtitle: 'Mathematical Scientist and Statistician',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 5,
    image: 'images/speaker6.png',
    name: 'SohYeong Noh',
    subtitle: 'Programmer and Audio-Visual Engineer',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
];
const speakerAdd = document.querySelector('.speaker-add');
let html2 = '';
addSpeakerArr.forEach((speakerAdd) => {
  html2 += `
  <li class="speakers-li">
  <div><img class="image" src="${speakerAdd.image}" alt=""></div>
  <div class="speaker-content">
      <h5 class="speaker-name">${speakerAdd.name}</h5>
      <p>${speakerAdd.subtitle}</p>
      <p>${speakerAdd.description}</p>
  </div>
</li> `;
});
speakerAdd.innerHTML = html2;