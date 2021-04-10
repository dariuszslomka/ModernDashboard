import '../scss/main.scss';
import {sortTableByColumnAscending, sortTableByColumnDescending} from './tablesort.js';

addHandlerToMenuToggleButton();
addHandlersOnClickToLanguages();
addHandlersOnClientDropdownClick();
addTableSortableHandlers();
addCalendarHandler();

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

function addCalendarHandler() {
    let calendarButton = document.querySelector('.date-selection__button--js');
    calendarButton.addEventListener('click', () => {
        let calendar = document.querySelector('.calendar--js');
        calendar.classList.toggle("calendar--collapsed");
    })
}

function addTableSortableHandlers() {
    let tableHeaders = document.querySelectorAll('.table__th--sortable'); 
    tableHeaders.forEach(element => {
        element.addEventListener('click', () => {
            let tableElement = element.parentElement.parentElement.parentElement;
            let columnIndex = Array.prototype.indexOf.call(element.parentElement.children, element);
            let sortType = element.dataset.type;

            if (element.classList.contains("th-sort-asc"))
            {
                sortTableByColumnDescending(tableElement, columnIndex, sortType);
            }
            else
            {
                sortTableByColumnAscending(tableElement, columnIndex, sortType);
            }
        })
    })
}