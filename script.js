const startButton = document.getElementById("startButton");
const hero = document.getElementById("hero");
const story = document.getElementById("story");
const counter = document.getElementById("counter");

startButton.addEventListener("click", () => {
    hero.style.display = "none";
    story.classList.remove("hidden");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    updateCounter();
});

function updateCounter() {
    const startDate = new Date("2025-10-09T00:00:00");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let text = "";

    if (years > 0) {
        text += `${years} año${years > 1 ? "s" : ""}, `;
    }

    text += `${months} mes${months != 1 ? "es" : ""} y ${days} día${days != 1 ? "s" : ""}`;

    counter.textContent = text + " juntos ❤️";
}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"💖":"🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heart.style.fontSize=(18+Math.random()*20)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,700);

const photos = [
"IMG_9016.jpeg",
"IMG_4102.jpeg",
"IMG_4083.jpeg",
"IMG_4064.jpeg",
"IMG_4025.jpeg",
"IMG_3689.jpeg",
"IMG_3532.jpeg",
"IMG_3026.jpeg",
"IMG_2500.jpeg",
"IMG_2496.jpeg",
"IMG_0641.jpeg",
"IMG_0635.jpeg",
"IMG_0616.jpeg",
"IMG_0334.png",
"IMG_0171.jpeg"
];

const phrases = [
"Cada momento contigo se convirtió en un recuerdo inolvidable y uno de los mas hermoso porque siempre me ponen feliz 🥺💗",
"El echo de poder quererte, amarte y adorarte se volvieron cosas hermosas que hago por ti 🥰✨",
"Gracias por estar a mi lado. 💖",
"Cada salida contigo es una aventura que nunca quiero olvidar. 🌎",
"Aquel día quedó guardado para siempre en mi corazón. 💕",
"Contigo cualquier lugar se siente como hogar. 🏡",
"Eres mi lugar favorito y la razon mas hermosa de amar 💘🫂",
"Si de ser hermosa se tratara creeme que mujer mas preciosa que usted mi amor no exite 💖✨",
"Cada foto cuenta una pequeña parte de nuestra historia. 📸",
"Siempre consigues alegrar mis días. 🌸",
"Adoro cada instante que pasamos juntos. 💞",
"Quiero seguir creando recuerdos contigo. ✨",
"Tu amor ha cambiado mi vida para mejor. ❤️",
"Mi bello copito de nieve, gracias por existir. ❄️",
"Y esto... es solo el comienzo de nuestra historia. 💖"
];

let current = 0;

function showPhoto() {

const img = document.getElementById("photo");

img.classList.add("change");

setTimeout(()=>{

img.src = photos[current];

document.getElementById("photoText").textContent = phrases[current];

document.getElementById("photoNumber").textContent =
(current + 1) + " de " + photos.length + " ❤️";

img.classList.remove("change");

},200);

}

function nextPhoto() {
    current = (current + 1) % photos.length;
    showPhoto();
}

function previousPhoto() {
    current = (current - 1 + photos.length) % photos.length;
    showPhoto();
}

showPhoto();

const title = document.querySelector("h1");
const originalText = title.innerHTML;

title.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < originalText.length){

        title.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

window.onload = typeWriter;

function createSnow(){

const snow=document.createElement("div");

snow.className="snowflake";

snow.innerHTML="❄️";

snow.style.left=Math.random()*100+"vw";

snow.style.fontSize=(12+Math.random()*18)+"px";

snow.style.animationDuration=(6+Math.random()*6)+"s";

document.getElementById("snow").appendChild(snow);

setTimeout(()=>{
snow.remove();
},12000);

}

setInterval(createSnow,500);

setTimeout(()=>{

alert("💖 Espero que esta pequeña página te recuerde lo mucho que te amo. 💖");

},1200);
