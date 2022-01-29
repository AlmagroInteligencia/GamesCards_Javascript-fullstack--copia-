class GameService {

    constructor() {
        this.URI = '/api/games';
    }

    async getGames() {
        const response = await fetch(this.URI);
        const games = await response.json();
        return games;
    }

    async postGame(game) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: game
        });
        const data = await response.json();
        console.log(data);
    }

    async deleteGame(gameId) {
        const response = await fetch(`${this.URI}/${gameId}`, {
            headers: {
                'Content-Type': 'application/json'    
            },
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    }

}

export default GameService;