const checkBtn = document.getElementById('checkTasks');
const messageBox = document.getElementById('messageBox');
const dateText = document.querySelector('.date');
const tasks = document.querySelectorAll('.task');


const today = new Date();
dateText.textContent = `Date: ${today.toDateString()}`;


const quotes = [
    "Success is the sum of small efforts repeated every day 🌱",
    "Don’t watch the clock — do what it does. Keep going ⏰",
    "Small steps every day lead to big results 💪",
    "Your discipline decides your destiny 🚀",
    "Dream big. Start small. Act now ✨"
];

checkBtn.addEventListener('click', () => {
    let allDone = true;

    tasks.forEach(task => {
        if (!task.checked) {
            allDone = false;
        }
    });

    if (allDone) {
        messageBox.style.color = "green";
        messageBox.textContent = "🎉 Great job! You completed all tasks today!";
    } else {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert("⚠️ You missed some tasks today. Stay consistent!");
        messageBox.style.color = "red";
        messageBox.textContent = randomQuote;
    }
});
