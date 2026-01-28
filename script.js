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