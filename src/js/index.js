import '../scss/main.scss';

addHandlerToMenuToggleButton();
addHandlersOnClickToLanguages();
addHandlersOnClientDropdownClick();

function addHandlersOnClickToLanguages() {
    let languagesList = document.querySelector('.languages__list--selection'); 
    let languages = languagesList.querySelectorAll('.language');

    languages.forEach(element => {
        addHandleOnClick(element);
    });
}

function addHandleOnClick(item) {
    item.addEventListener('click', () => {
        console.log(`Wybrałeś ${item.innerHTML}`);
        setLanguage(item.innerHTML);
    })
}

function addHandlerToMenuToggleButton() {
    let hamburgerButton = document.querySelector('.sidebar__toggler--js');
    hamburgerButton.addEventListener('click', () => {
        let sidebar = document.querySelector('.sidebar--js');
        sidebar.classList.toggle("sidebar--collapsed");
    })
}

function setLanguage(languageHtml) {
    let languageDefaultList = document.querySelector('.languages__list--default');
    let languageDefault = languageDefaultList.querySelector('.language');

    languageDefault.innerHTML = languageHtml;
}

function addHandlersOnClientDropdownClick() {
    let dropdowns = document.querySelectorAll('.client__dropdown--js');
    dropdowns.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle("client__dropdown--collapsed");
        })
    });
}