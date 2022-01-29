import GameService from './services/GameService';
const gameService = new GameService();

import { format } from 'timeago.js';

class UI {

    async renderGames() {
        const games = await gameService.getGames();
        const gamesCardContainer = document.getElementById('games-cards');
        gamesCardContainer.innerHTML = '';
        games.forEach(game => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${game.imagePath}" alt="" class="img-fluid"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="card-title">${game.title}</h4>
                                <p class="card-text">Developer: ${game.developer}</p>
                                <p class="card-text">Category: ${game.category}</p>
                                <p class="card-text">Year released: ${game.year}</p>
                                <button class="btn btn-danger delete" _id="${game._id}">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(game.created_at)}
                    </div>
                    </div>
                </div>
            `;
            gamesCardContainer.appendChild(div);
        });
    }

    async addNewGame(game) {
        await gameService.postGame(game);
        this.clearGameForm();
        this.renderGames();
    }

    clearGameForm() {
        document.getElementById('game-form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-5');
        const gameForm = document.querySelector('#game-form');

        container.insertBefore(div, gameForm);
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);
    }

    async deleteGame(gameId) {
        await gameService.deleteGame(gameId);
        this.renderGames();
    }

}

export default UI;