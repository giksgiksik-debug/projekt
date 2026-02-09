console.log("Script loaded successfully.");
const btnWhy = document.getElementById("btnWhy");
const btnHobbies = document.getElementById("btnHobbies");

btnWhy.addEventListener("click", () => {
    console.log("Navigating to 'Why I learn frontend' section.");
});

btnHobbies.addEventListener("click", () => {
    console.log("Navigating to 'My hobbies' section.");
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const counterBtn = document.getElementById("counterBtn");
const counterText = document.getElementById("counterText");
let count = 0;

counterBtn.addEventListener("click", () =>{
    count++;
    counterText.textContent = "Clicks: " + count;
});

const toggleBtn = document.getElementById("toggleBtn");
const infoText = document.getElementById("infoText");

function toggleInfo() {
    if (infoText.style.display === "none") {
        infoText.style.display = "block";
        toggleBtn.textContent = "Hide info";
    } else {
        infoText.style.display = "none";
        toggleBtn.textContent = "Show info";
    }
}

toggleBtn.addEventListener("click", toggleInfo);

const hobbies = ["Coding", "Music", "Sport", "Travel"];
const hobbyList = document.getElementById("hobbyList");

hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

const cards = [
  {
    title: "Why I learn frontend",
    text: "I want to create modern websites and apps"
  },
  {
    title: "My hobbies",
    text: "Coding, Music, Sport, Travel"
  }
];


const cardsContainer = document.getElementById("cards");

cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = card.title;

    const p = document.createElement("p");
    p.textContent = card.text;

    div.appendChild(h3);
    div.appendChild(p);
    cardsContainer.appendChild(div);
});

const cardsData = [
  {
    title: "Why I learn frontend",
    text: "I want to create modern websites and apps"
  }
];
