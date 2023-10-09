function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
}
const templateMain = document.querySelector("#root > main");
// Функция для загрузки сохраненной темы
function loadThemePreference() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        templateMain.classList.add("dark-theme");
        document.getElementById("theme-toggle").classList.add("on");
    }
}
// Обработчик изменения состояния кнопки-переключателя
document.getElementById("theme-toggle").addEventListener("click", function () {
    // Переключение класса для body
    templateMain.classList.toggle("dark-theme");
    // Переключение класса для кнопки-переключателя
    document.getElementById("theme-toggle").classList.toggle("on");
    // Сохранение выбранной темы
    const theme = templateMain.classList.contains("dark-theme")
        ? "dark"
        : "light";
    saveThemePreference(theme);
});
// Загрузка сохраненной темы при загрузке страницы
loadThemePreference();
