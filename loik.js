const translations = {
    ru: { title: "Привет!" },
    en: { title: "Hello!" }
};
function setLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
}
