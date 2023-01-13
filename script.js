const moreBtn= document.querySelector(".botom-btn");

const speaker= document.getElementById("speaker-ul2");
var speakerTogle=0;
moreBtn.addEventListener("click",() => {
if (speakerTogle==0){
    speakerTogle=1
    loadPages();
} else{loadEmpty();
speakerTogle=0;
}
});

function loadEmpty(){
    speaker.innerHTML=``;
}

function loadPages(){
speaker.innerHTML=
   ` <li class="speakers-li">
            <div class="image speaker3"></div>
            <div class="speaker-content">
                <h5 class="speaker-name">SohYeong Noh</h5>
                <p>As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p>
                <p></p>
            </div>
        </li>

        <li class="speakers-li">
            <div class="image speaker4"></div>
            <div class="speaker-content">
                <h5 class="speaker-name">Julia Leda</h5>
                <p>European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July</p>
                <p></p>
            </div>
        </li> `

}

const hamburgerPage=document.querySelector(".hamburger-page");
const hamburgeBtn =document.querySelector(".hamburger");

hamburgeBtn.addEventListener("click",()=>{
hamburgerPage.classList.add("display");
} )
const xBtn=document.querySelector(".x-btn");
xBtn.addEventListener("click", () =>{
    hamburgerPage.classList.remove("display");
})

