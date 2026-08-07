const themeToggle = document.getElementById("themeToggle");


// ======================================================
// Aplicar tema
// ======================================================

function applyTheme(theme) {

    if (theme === "light") {
        document.body.classList.add("light-theme");
        themeToggle.checked = true;
    } else {
        document.body.classList.remove("light-theme");
        themeToggle.checked = false;
    }
}


// ======================================================
// Cargar tema guardado
// ======================================================

const savedTheme = localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);


// ======================================================
// Cambiar tema
// ======================================================

themeToggle.addEventListener("change", () => {

    const newTheme = themeToggle.checked
        ? "light"
        : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);
});