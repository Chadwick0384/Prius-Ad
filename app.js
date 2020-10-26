//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Animate Items
const title = document.querySelector('.title');
const prius = document.querySelector('.prius img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const models = document.querySelector('.models');


//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In (animation begins when mouse enters container)
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //Item Popout
    title.style.transform = "translateZ(150px)";
    prius.style.transform = "translateZ(200px) rotateY(-200deg)";
    description.style.transform = "translateZ(125px)";
    models.style.transform = "translateZ(120px)";
    purchase.style.transform = "translateZ(2px)";
});


//Animate Out  (Reset card back to normal with mouse leaving container area)
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Item Popback
    title.style.transform = "translateZ(0px)";
    prius.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    models.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});