const baseUrl = "http://localhost:3030/jsonstore/games/";

const loadButton = document.getElementById("load-games");
const gameList = document.getElementById("games-list");

const addGameButton = document.getElementById("add-game");
const editGameButton = document.getElementById("edit-game");

const gameNameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

addGameButton.addEventListener("click", addGame);

async function addGame() {
    const gameName = gameNameInput.value;
    const type = typeInput.value;
    const maxPlayers = playersInput.value;

    clearInputs(); //before the post request

    //post request
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({gameName, type, maxPlayers}),
    });

    await loadGames();
}


loadButton.addEventListener("click", () => {
    loadGames();
});

async function loadGames(){
    gameList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const games = Object.values(result);

    const gameElements = games.map(game => createGameElement(game.name, game.type, game.players));

    gameList.append(...gameElements);
}

function createGameElement(name, type, players){
    const pNameElement = document.createElement('p');
    pNameElement.textContent = name;
    
    const pTypeElement = document.createElement('p');
    pTypeElement.textContent = type;
    
    const pMaxPlayersElement = document.createElement('p');
    pMaxPlayersElement.textContent = players;

    const divContentElement = document.createElement('div');
    
    divContentElement.classList.add('content');
    
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pTypeElement);
    divContentElement.appendChild(pMaxPlayersElement);
    
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener("click", () => {
        gameNameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        editGameButton.removeAttribute("disabled");
    });

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    const divButtonsElement = document.createElement('div');
    divButtonsElement.classList.add('buttons-container');
    divButtonsElement.appendChild(changeButtonElement);
    divButtonsElement.appendChild(deleteButtonElement);

    const divBoardGameElement = document.createElement('div');
    divBoardGameElement.classList.add('board-game');
    divBoardGameElement.appendChild(divContentElement);
    divBoardGameElement.appendChild(divButtonsElement);
    
    return divBoardGameElement;
}

function clearInputs(){
    gameNameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
}