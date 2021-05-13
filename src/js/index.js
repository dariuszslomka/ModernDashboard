import "../scss/main.scss";
import {
  sortTableByColumnAscending,
  sortTableByColumnDescending,
} from "./tablesort.js";

document.cookie = "promo_shown=1; Max-Age=2600000; Secure"

addHandlerToMenuToggleButton();
addHandlersOnClickToLanguages();
addHandlersOnClientDropdownClick();
addTableSortableHandlers();
addCalendarHandler();
addSalesRegionHandlers();
addButtonsFavoriteHandlers();

function addHandlersOnClickToLanguages() {
  let languagesList = document.querySelector(".languages__list--selection");
  let languages = languagesList.querySelectorAll(".language");

  languages.forEach((element) => {
    addHandleOnClick(element);
  });
}

function addHandleOnClick(item) {
  item.addEventListener("click", () => {
    console.log(`Wybrałeś ${item.innerHTML}`);
    setLanguage(item.innerHTML);
  });
}

function addHandlerToMenuToggleButton() {
  let hamburgerButton = document.querySelector(".sidebar__toggler--js");
  hamburgerButton.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar--js");
    sidebar.classList.toggle("sidebar--collapsed");
  });
}

function setLanguage(languageHtml) {
  let languageDefaultList = document.querySelector(".languages__list--default");
  let languageDefault = languageDefaultList.querySelector(".language");

  languageDefault.innerHTML = languageHtml;
}

function addHandlersOnClientDropdownClick() {
  let dropdowns = document.querySelectorAll(".client__dropdown--js");
  dropdowns.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("client__dropdown--collapsed");
    });
  });
}

function addCalendarHandler() {
  let calendarButton = document.querySelector(".date-selection__button--js");
  calendarButton.addEventListener("click", () => {
    let calendar = document.querySelector(".calendar--js");
    calendar.classList.toggle("calendar--collapsed");
  });
}

function addTableSortableHandlers() {
  let tableHeaders = document.querySelectorAll(".table__th--sortable");
  tableHeaders.forEach((element) => {
    element.addEventListener("click", () => {
      let tableElement = element.parentElement.parentElement.parentElement;
      let columnIndex = Array.prototype.indexOf.call(
        element.parentElement.children,
        element
      );
      let sortType = element.dataset.type;

      if (element.classList.contains("th-sort-asc")) {
        sortTableByColumnDescending(tableElement, columnIndex, sortType);
      } else {
        sortTableByColumnAscending(tableElement, columnIndex, sortType);
      }
    });
  });
}

function addSalesRegionHandlers() {
  let languages = document.querySelectorAll(".region");

  languages.forEach((element) => {
    addRegionActionOnClick(element);
  });
}

function addRegionActionOnClick(item) {
  item.addEventListener("click", () => {
    let country = item.innerHTML;
    let primaryChartValue = 0;
    let secondaryChartValue = 0;

    switch (country) {
      case "Europe":
        primaryChartValue = 80;
        secondaryChartValue = 63;
        break;
      case "Asia":
        primaryChartValue = 76;
        secondaryChartValue = 70;
        break;
      case "North America":
        primaryChartValue = 50;
        secondaryChartValue = 73;
        break;
      case "South America":
        primaryChartValue = 31;
        secondaryChartValue = 60;
        break;
      case "Oceania":
        primaryChartValue = 21;
        secondaryChartValue = 30;
        break;
      case "Africa":
        primaryChartValue = 10;
        secondaryChartValue = 70;
        break;
      default:
        break;
    }

    let pieCharPrimary = document.querySelector(".pie-chart--primary");
    pieCharPrimary.style.setProperty("--percent", primaryChartValue);

    let pieCharSecondary = document.querySelector(".pie-chart--secondary");
    pieCharSecondary.style.setProperty("--percent", secondaryChartValue);
  });
}

function addButtonsFavoriteHandlers() {
  let languages = document.querySelectorAll(".candidate__button-star");

  languages.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("candidate__button--checked");
    });
  });
}