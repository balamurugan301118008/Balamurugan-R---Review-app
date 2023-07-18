// local reviews data
// const btn = document.querySelector('.random-btn')
// const perName = document.querySelectorAll(".author")
// const perJob = document.querySelectorAll('.job')
// const bioEl = document.querySelectorAll('.info')
// const perImg = document.querySelectorAll('.person-img')

const reviews = [
  {
    // id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    // id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    // id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    // id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// <------target to the all element ------>
const imgEL = document.querySelector('.person-img')
// console.log(imgEL);
const person = document.querySelector('.author')
const jobEl = document.querySelector('.job')
const content = document.querySelector('.info')


// // <---------target to the all buttons---->
// const preBtn = document.querySelector('.prev-btn')
// const nextBtn = document.querySelector('.next-btn')
// const randomBtn = document.querySelector('.random-btn')
const btns = document.querySelectorAll("button")
let num = 0
let num1 = reviews.length
for(let i=0; i<btns.length; i++){
  // console.log(btns[i]);
  btns[i].addEventListener("click",(e)=>{
// console.dir(e.target);
// <-----------------------decrement Element -------------------------->

    if(e.target.className == "fas fa-chevron-left"){
      // console.log("praksh");
      num1--
      if(num1 === -1){
        num1 = 3
      }
      console.log(num1);
      imgEL.src = reviews[num1].img
      person.innerText = reviews[num1].name
      jobEl.innerText = reviews[num1].job
      content.innerText = reviews[num1].text
    }
    // <---------------increment -------------------> 
    
  else if(e.target.className == "fas fa-chevron-right"){
    num++
    console.log(num);
    if(num ===reviews.length){
      num = 0
    }
    imgEL.src = reviews[num].img
    person.innerText = reviews[num].name
    jobEl.innerText = reviews[num].job
    content.innerText = reviews[num].text
  }
  // <---------------------random Element---------------->

  else if(e.target.className == "random-btn"){
    // console.log(num);
    let random = Math.floor(Math.random() * reviews.length)
    console.log(random);
    imgEL.src = reviews[random].img
    person.innerText = reviews[random].name
    jobEl.innerText = reviews[random].job
    content.innerText = reviews[random].text
  }

  })
}


































// // <---------this is random button actions-------->

// randomBtn.addEventListener('click', function () {
//   let random = Math.floor(Math.random() * reviews.length)
//   // console.log(random)
//   imgEL.src = reviews[random].img
//   person.innerHTML = reviews[random].name
//   jobEl.innerHTML = reviews[random].job
//   content.innerHTML = reviews[random].text
//   console.log(random);
// })


// // <----------this is next button actions --------->
// let plus = -1
// nextBtn.addEventListener('click', increment)
// function increment() {
//   plus++
//   if (plus === 4) {
//     plus = 0
//   }
//   console.log(plus);
//   person.innerHTML = reviews[plus].name
//   jobEl.innerHTML = reviews[plus].job
//   content.innerHTML = reviews[plus].text
//   imgEL.src = reviews[plus].img
// }


// // <-------this is previous button actions------>
// let minus = 4
// preBtn.addEventListener('click', decrement)
// function decrement() {
//   minus--
//   if (minus === -1) {
//     minus = 3
//   }
//   console.log(minus);
//   imgEL.src = reviews[minus].img
//     person.innerHTML = reviews[minus].name
//   jobEl.innerHTML = reviews[minus].job
//   content.innerHTML = reviews[minus].text
// }
