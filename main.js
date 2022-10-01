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