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
 * Updates based on local time
 */
const hour = new Date().getHours();
const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    let greetingText;
    if (hour < 12) greetingText = "Good Morning";
    else if (hour < 18) greetingText = "Good Afternoon";
    else greetingText = "Good Evening";

    // Restored your name exactly as requested
    greetingElement.innerHTML = `${greetingText}, I'm Dankwah Obed Asante`;
}
