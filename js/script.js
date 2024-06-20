document.addEventListener('DOMContentLoaded', function() {
    // Dynamic content loading
    const loadContentButton = document.getElementById('load-content');
    const dynamicContent = document.getElementById('dynamic-content');

    if (loadContentButton) {
        loadContentButton.addEventListener('click', function() {
            dynamicContent.innerHTML = '<p>Conteúdo carregado dinamicamente!</p>';
        });
    }

    // Drag and drop functionality
    const dragItem = document.getElementById('drag-item');
    const dragContainer = document.getElementById('drag-container');

    if (dragItem && dragContainer) {
        dragItem.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', null);
        });

        dragContainer.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        dragContainer.addEventListener('drop', function(e) {
            e.preventDefault();
            dragContainer.appendChild(dragItem);
        });
    }

    // Login form submission
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login realizado com sucesso!');
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            alert('Logout realizado com sucesso!');
        });
    }
});
