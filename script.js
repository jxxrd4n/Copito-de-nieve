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
