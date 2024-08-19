window.addEventListener("load", solve);

function solve() {
  const nameInput = document.getElementById("name");
  const timeInput = document.getElementById("time");
  const descriptionInput = document.getElementById("description");
  
  const addButtonEl = document.getElementById("add-btn");

  const previewList = document.getElementById("preview-list");
  const archiveList = document.getElementById("archive-list");

  addButtonEl.addEventListener("click", onClick);

  function onClick(event){
    event.preventDefault();

    //get values
    const name = nameInput.value;
    const time = timeInput.value;
    const description = descriptionInput.value;
    
    //check if fields are inputed
    if (!name || !time || !description) {
      return;
    }

    clearInputs();

    const liElement = createPreviewListElement(name, time, description);

    previewList.appendChild(liElement);
  }

  function createPreviewListElement(name, time, description){
    //disable button
    addButtonEl.setAttribute("disabled", "disabled");
    
    //article part
    const pNameElement = document.createElement('p');
    pNameElement.textContent = name; 

    const pTimeElement = document.createElement('p');
    pTimeElement.textContent = time;

    const pDescriptionElement = document.createElement('p');
    pDescriptionElement.textContent = description;  

    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pTimeElement);
    articleElement.appendChild(pDescriptionElement);

    //buttons part
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = "Edit";

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = "Next";
    
    const divElement = document.createElement('div');
    divElement.classList.add('buttons');
    divElement.appendChild(editButton);
    divElement.appendChild(nextButton);

    //adding both to the li element
    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);

    //edit button functionality
    editButton.addEventListener('click', () => {
      addButtonEl.removeAttribute("disabled");
      
      nameInput.value = name;
      timeInput.value = time;
      descriptionInput.value = description;

      liElement.remove();
    });

    //save button functionality
    nextButton.addEventListener('click', () => {
      //removing the two other buttons
      divElement.remove();
      
      const archiveButton = document.createElement('button');
      archiveButton.classList.add('archive-btn');
      archiveButton.textContent = "Archive";

      liElement.appendChild(archiveButton);

      //when appending if already exists it just switches places
      archiveList.appendChild(liElement);

      archiveButton.addEventListener('click', () => {
        liElement.remove();

        addButtonEl.removeAttribute("disabled");
      });
    });

    return liElement;
  }

  function clearInputs(){
    nameInput.value = "";
    timeInput.value = "";
    descriptionInput.value = "";
  }

}