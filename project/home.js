document.getElementById('genre').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSubmenu('genre-submenu');
});

document.getElementById('top3').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSubmenu('top3-submenu');
});

document.getElementById('mytheater').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSubmenu('mytheater-submenu');
});

function toggleSubmenu(submenuId) {
    var submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
        if (submenu.id === submenuId) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
}


window.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-item')) {
        var submenus = document.querySelectorAll('.submenu');
        submenus.forEach(function(submenu) {
            submenu.style.display = 'none';
        });
    }
});