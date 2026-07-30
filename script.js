// ==============================
// JS ROPEN WEBSITE
// script.js
// ==============================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Menu Mobile
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.onclick = () => {
    nav.classList.toggle("active");
};

// Tutup menu saat klik menu
document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active");
    };
});

// Efek Scroll Header
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.background = "#071b38";
        header.style.boxShadow = "0 0 20px #00c3ff55";

    } else {

        header.style.background = "rgba(10,25,50,.7)";
        header.style.boxShadow = "none";

    }

});

// Animasi Scroll
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.produk-card,.dash-card,.box,.cta").forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

// Counter Dashboard
const counter=document.querySelectorAll(".dash-card span");

counter.forEach(item=>{

const update=()=>{

const target=item.innerText.replace("+","");

if(isNaN(target)) return;

let value=+item.getAttribute("data-value")||0;

const speed=Math.ceil(target/80);

if(value<target){

value+=speed;

item.setAttribute("data-value",value);

item.innerHTML=value+"+";

setTimeout(update,25);

}else{

item.innerHTML=target+"+";

}

}

update();

});

// Tombol Detail
document.querySelectorAll(".produk-card button").forEach(btn=>{

btn.onclick=()=>{

alert(
"Silakan hubungi WhatsApp\n\n083182386351\n\nUntuk memesan website ini."
);

};

});

// Efek Klik
document.querySelectorAll("button,a").forEach(el=>{

el.addEventListener("click",function(){

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="";

},150);

});

});

// Tahun Footer Otomatis
const tahun=new Date().getFullYear();

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+tahun+" JS ROPEN. All Rights Reserved.";

}

console.log("JS ROPEN Website Loaded Successfully.");