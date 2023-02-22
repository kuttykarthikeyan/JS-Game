const section=document.querySelector('section');
let  playerLivesCount=document.querySelector('span');
let playerlives=6; 

//link text
 playerLivesCount.innerText=playerlives;
//data of the images
 const getData=()=>[{imgSrc:"/images/blackpanther.jpeg",name:"panther"},
 {imgSrc:"./images/blackpanther.jpeg",name:"panther"},
 {imgSrc:"./images/ironman.jpeg",name:"ironman"},
 {imgSrc:"./images/ironman.jpeg",name:"ironman"},
 {imgSrc:"./images/spidey.jpeg",name:"spiedy"},
 {imgSrc:"./images/spidey.jpeg",name:"spiedy"},
 {imgSrc:"./images/deadpool.jpeg",name:"deadpool"},
 {imgSrc:"./images/deadpool.jpeg",name:"deadpool"},
 {imgSrc:"./images/shelby.jpg",name:"shelby"},
 {imgSrc:"./images/shelby.jpg",name:"shelby"},
 {imgSrc:"./images/cap.jpeg",name:"cap"},
 {imgSrc:"./images/cap.jpeg",name:"cap"}
]


//shuffling cards
 const randomize=()=>{
    const cardData=getData();
    cardData.sort(()=>Math.random()-0.5);
    return cardData;
}


//card generator
const cardGenerator= ()=>{
    const cardData=randomize();
 //generate html ele
 cardData.forEach((item,index) => {
 const card=document.createElement("div")
 const face=document.createElement("img")
 const back=document.createElement("img")
  card.classList="card";
 face.classList="face";
 back.classList="back";
face.src=item.imgSrc;
card.setAttribute("name",item.name)
 
 section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

card.addEventListener('click',(e)=>{
    card.classList.toggle('togglecard')
    checkCards(e);
    
})
});
}
const checkCards=(e)=>{
    const clicked=e.target;
    clicked.classList.add("flipped")
    const flipped=document.querySelectorAll(".flipped")

   if(flipped.length===2){
    if(flipped[0].getAttribute("name")===flipped[1].getAttribute("name")){
   console.log("match")
   flipped.forEach((card)=>{
    card.classList.remove("flipped");
    card.style.pointerEvents="none";
   })
      
    }
    else{
      flipped.forEach(card=>{
        card.classList.remove("flipped")
        setTimeout(()=>card.classList.remove("togglecard"),1000);
        
      });
      playerlives=playerlives-1;
      if(playerlives===0)
      {
        setTimeout(() => {

          restart();
        },1000)
      return;
    }
      playerLivesCount.textContent=playerlives;
        
      
      
    
    
   }
};

};
//restart
const restart=()=>{
  cardData=randomize();
  let faces=document.querySelectorAll(".face")
  let cards=document.querySelectorAll(".card")
  cardData.forEach((item,index)=>{
  cards[index].classList.remove("togglecard")
  });

  playerlives=6;
  playerLivesCount.textContent=playerlives;

}



cardGenerator();