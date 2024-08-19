const baseUrl = `http://localhost:3030/jsonstore/matches`;

// get load button element
const loadButton = document.getElementById('load-matches');
const addButton = document.getElementById('add-match');
const editButton = document.getElementById('edit-match');
const matchesList = document.getElementById('list');

const formElement = document.querySelector('#form form');

const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');

loadButton.addEventListener('click', loadMatches);
addButton.addEventListener('click', addMatch);
editButton.addEventListener('click', editMatch);

async function addMatch() {
    // get input data
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    // clear inputs
    clearInputs();

    // Create post request
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ host, score, guest }),
    });

    // fetch all games
    await loadMatches();
}

async function editMatch() {
    // Get id from form attribute
    const matchId = formElement.getAttribute('data-match-id');

    // Get info from inputs
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    // clear inputs
    clearInputs();

    // send put requests
    await fetch(`${baseUrl}/${matchId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ host, score, guest, _id: matchId }),
    });

    // load all games
    await loadMatches();

    // deactivate edit button
    editButton.setAttribute('disabled', 'disabled');

    // activate add button
    addButton.removeAttribute('disabled');

    // clear attribute ID
    formElement.removeAttribute('data-game-id');
}

async function loadMatches() {
    // Clear games list
    matchesList.innerHTML = '';

    // Get request
    const response = await fetch(baseUrl);
    const result = await response.json();
    const matches = Object.values(result);

    // create game element
    const matchesElements = matches.map(match => createMatchElement(match.host, match.score, match.guest, match._id));

    // add to game list
    matchesList.append(...matchesElements);
}



function createMatchElement(host, score, guest, matchId) {
    const pHostElement = document.createElement('p');
    pHostElement.textContent = host;

    const pScoreElement = document.createElement('p');
    pScoreElement.textContent = score;

    const pGuestElement = document.createElement('p');
    pGuestElement.textContent = guest;

    const divInfoElement = document.createElement('div');
    divInfoElement.classList.add('info');
    divInfoElement.appendChild(pHostElement);
    divInfoElement.appendChild(pScoreElement);
    divInfoElement.appendChild(pGuestElement);

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', () => {
        // Populate game info into input fields
        hostInput.value = host;
        scoreInput.value = score;
        guestInput.value = guest;

        // activate edit game button
        editButton.removeAttribute('disabled');

        // Add game should be deactivated
        addButton.setAttribute('disabled', 'disabled');

        // Set id attribute 
        formElement.setAttribute('data-match-id', matchId);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
        // Send delete request
        await fetch(`${baseUrl}/${matchId}`, {
            method: 'DELETE',
        });
        
        // fetch all games
        await loadGames();
    });

    const divButtons = document.createElement('div');
    divButtons.classList.add('btn-wrapper');
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    const matchLiElement = document.createElement('li');
    matchLiElement.classList.add('match');
    matchLiElement.appendChild(divInfoElement);
    matchLiElement.appendChild(divButtons);

    return matchLiElement;
}

function clearInputs() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}
