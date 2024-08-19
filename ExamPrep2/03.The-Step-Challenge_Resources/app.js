const loadRecordsButtonEl = document.getElementById("load-records");
const recordsListElement = document.getElementById("list");

const baseListItemRecord = document.querySelector("#list .record:nth-child(1)");


const baseUrl = `http://localhost:3030/jsonstore/records`;

const base_fetch_options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}

//can be reused
async function fetchData(url, options){
    return fetch(url, options).then((response) => {
        if(!response.ok){
            throw new Error(response.text);
        }

        return response.json();
    }).then((data) => {
        return {data, error: null};
    })
    .catch((error) => {
        console.error(error);
        return {data: null, error};
    })
}

const changeButtonEl = document.getElementById('change-btn');
const deleteButtonEl = document.getElementById('delete-btn');

const addRecordButtonEl = document.querySelector('add-record');
const editRecordButtonEl = document.querySelector('edit-record');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');


function loadButtonHandler(){
    fetchData(baseUrl, base_fetch_options).then(({data, error}) => {
        if(error){
            return;
        }
        const records = Object.values(data);

        recordsListElement.innerHTML = '';

        records.forEach((record) => {
            const {name,steps,calories,_id} = record;
        
            const clone = baseListItemRecord.cloneNode(true);

            clone.querySelector(".record p:nth-child(1)").textContent = name;
            clone.querySelector(".record p:nth-child(2)").textContent = steps;
            clone.querySelector(".record p:nth-child(3)").textContent = calories;

            recordsListElement.appendChild(clone);
        })
    });
}

function createRecordHandler(){
    console.log("geheehe");
}

loadRecordsButtonEl.addEventListener("click", loadButtonHandler);
addRecordButtonEl.addEventListener("click", createRecordHandler)