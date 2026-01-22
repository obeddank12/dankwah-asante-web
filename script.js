/** * 1. THEME MANAGEMENT
 * Handles Dark/Light mode and remembers user preference
 */
const themeBtn = document.getElementById("theme-toggle");

// Function to apply theme
const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
};

// Check for saved user preference or system preference on load
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (systemPrefersDark) {
    applyTheme("dark");
}

// Toggle logic
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

/** * 2. DYNAMIC GREETING
 * Updates based on Ghana local time
 */
const hour = new Date().getHours();
const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    let greetingText;
    if (hour < 12) greetingText = "Good Morning";
    else if (hour < 18) greetingText = "Good Afternoon";
    else greetingText = "Good Evening";

    greetingElement.innerHTML = `${greetingText}, I'm Obed Asante`;
}

/** * 3. VISITOR COUNTER
 * Tracks unique browser sessions
 */
const counterElement = document.getElementById("visitor-count");
if (counterElement) {
    let visits = localStorage.getItem('page_view');
    visits = visits ? Number(visits) + 1 : 1;
    localStorage.setItem('page_view', visits);
    counterElement.innerHTML = `Page Visits: ${visits}`;
}