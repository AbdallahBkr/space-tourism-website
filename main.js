// menu
let close_button = document.querySelector(".close-button");
let menu_button = document.querySelector(".menu-button");

const menu = document.getElementById("menu");
const header = document.getElementById("header");

function openeed(){
    menu.style.cssText = `
        right: 0 ;
    `
}
function closed(){
    menu.style.cssText = `
        right: -100% ;
    `
}

close_button.addEventListener("click", closed);
menu_button.addEventListener("click", openeed);


// start working on tabs of planets

const tabs_planets = document.querySelectorAll(".tab-button-plants");
const tabs_planets_array = Array.from(tabs_planets);

const img_planets = document.querySelectorAll(".img_planets");
const img_planets_array = Array.from(img_planets);

const info_planets = document.querySelectorAll(".plants-tab .infos");
const info_planets_array = Array.from(info_planets);

tabs_planets_array.forEach(li =>{
    li.addEventListener("click", target =>{
        tabs_planets_array.forEach(e => {
            //remove active from all tabs
            e.classList.remove("active-tab");

            //remove all images and make them unactive
            img_planets_array.forEach(img =>{
                img.classList.remove("active-img-planet");
            })

            //remove all active info
            info_planets_array.forEach(info =>{
                info.classList.remove("info-plant-active")
            })
        })
        li.classList.add("active-tab");
        let info_plant = document.querySelector(target.currentTarget.dataset.tab);
        let img_plant = document.querySelector(target.currentTarget.dataset.img_plant);
        info_plant.classList.add("info-plant-active");
        img_plant.classList.add("active-img-planet");
    }
)
}
)




// crew
const imgs_crew = document.querySelectorAll(".img-crew");
const imgs_crew_array = Array.from(imgs_crew);

const infos_crew = document.querySelectorAll(".info-crew");
const infos_crew_array = Array.from(infos_crew);

const indiactes_crew = document.querySelectorAll(".indicates span");
const indiactes_crew_array = Array.from(indiactes_crew);

indiactes_crew_array.forEach(span =>{
    span.addEventListener("click", target =>{

        indiactes_crew_array.forEach( e=>{
            e.classList.remove("active-indiacte")
        })

        infos_crew_array.forEach(e=>{
            e.classList.remove("active-info-crew");
        })

        imgs_crew_array.forEach(e=>{
            e.classList.remove("active-img-crew");
        })

        span.classList.add("active-indiacte");

        const info_crew = document.querySelector(target.currentTarget.dataset.crewinfo); 
        const img_crew = document.querySelector(target.currentTarget.dataset.crewimg);

        info_crew.classList.add("active-info-crew")
        img_crew.classList.add("active-img-crew")
    })
})

// start working on technology
const indiactes_tech = document.querySelectorAll(".indiactes-tech");
const indiactes_tech_array = Array.from(indiactes_tech);

const infos_tech  = document.querySelectorAll(".info-tech");
const infos_tech_array = Array.from(infos_tech);

const img_tech = document.querySelectorAll(".img-tech");
const img_tech_array = Array.from(img_tech);

const img_landscape_tech = document.querySelectorAll(".img-tech-landscape");
const img_landscape_tech_array = Array.from(img_landscape_tech);

console.log(indiactes_tech_array);
console.log(infos_tech_array);
console.log(img_tech_array);
console.log(img_landscape_tech_array);


indiactes_tech_array.forEach( li => {
    li.addEventListener("click", target => {
        // تجريد الأمور من صفة الفعالة
        // Remove active class from these elements
        indiactes_tech_array.forEach( element =>{
            element.classList.remove("active-tech-tab");
        })
        infos_tech_array.forEach(element => {
            element.classList.remove("active-info-tech");
        })
        img_tech_array.forEach(element => {
            element.classList.remove("active-img-tech");
        })
        img_landscape_tech_array.forEach(element => {
            element.classList.remove("active-img-tech-landscape");
        })

        const targetInfo = document.querySelector(target.currentTarget.dataset.techinfo);
        const targetImg = document.querySelector(target.currentTarget.dataset.techimg);
        const targetImgLandscape = document.querySelector(target.currentTarget.dataset.techimglandscape);

        targetInfo.classList.add("active-info-tech");
        targetImg.classList.add("active-img-tech");
        targetImgLandscape.classList.add("active-img-tech-landscape");
        li.classList.add("active-tech-tab");
    })
})