document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mob-menu-data');
    const openButton = document.getElementById('mob-menu-open');
    const closeButton = document.getElementById('mob-menu-close');
    const menuLinks = document.querySelectorAll('.mobile__menu-link');

    const menuOpen = () => {
        menu.style.display = 'block';
    };

    const closeMenu = () => {
        menu.style.display = 'none';
    };

    openButton.addEventListener('click', menuOpen);
    closeButton.addEventListener('click', closeMenu);

    // Закрытие меню при клике на любую ссылку внутри этого меню
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});