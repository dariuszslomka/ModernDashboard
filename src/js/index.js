import '../scss/main.scss';

let hamburgerButton = document.querySelector('.sidebar__toggler--js');
hamburgerButton.addEventListener('click', () => {
    let sidebar = document.querySelector('.sidebar--js');
    sidebar.classList.toggle("sidebar--collapsed");
})