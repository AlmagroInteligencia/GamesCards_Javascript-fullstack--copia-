import './styles/styles.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderGames();
});

document.getElementById('game-form')
    .addEventListener('submit', e => {
        e.preventDefault();
        
        const title = document.getElementById('game-title').value;
        const developer = document.getElementById('game-developer').value;
        const category = document.getElementById('game-category').value;
        const year = document.getElementById('game-year').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('developer', developer);
        formData.append('category', category);
        formData.append('year', year);
        formData.append('image', image[0]);

        const ui = new UI();
        ui.addNewGame(formData);
        ui.renderMessage('New Game Added', 'success', 3000);

    });

    document.getElementById('games-cards')
        .addEventListener('click', e => {
            if(e.target.classList.contains('delete')) {
                const ui = new UI();
                ui.deleteGame(e.target.getAttribute('_id'));
                ui.renderMessage('Game Removed', 'danger', 3000);
            }
            e.preventDefault;
        });