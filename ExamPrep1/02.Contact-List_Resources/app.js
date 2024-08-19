window.addEventListener("load", solve);

function solve() {
  const buttonEl = document.getElementById("add-btn");
  const checkList = document.getElementById("check-list");
  const contactList = document.getElementById("contact-list");

  const nameInput = document.getElementById("name");
  const numberInput = document.getElementById("phone");
  const categoryInput = document.getElementById("category");

  buttonEl.addEventListener('click', onClick);

  function onClick(){
    const name = nameInput.value;
    const number = numberInput.value;
    const category = categoryInput.value;

    if (!name || !number || !category) {
      return;
    }

    const liElement = createCheckListElement(name, number, category);

    checkList.appendChild(liElement);

    clearInputs();
  }

  function clearInputs(){
    nameInput.value = "";
    numberInput.value = "";
    categoryInput.value = "";
  }

  function createCheckListElement(name, number, category){
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;  
    const pNumberElement = document.createElement('p');
    pNumberElement.textContent = `phone:${number}`;  
    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;  

    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pNumberElement);
    articleElement.appendChild(pCategoryElement);

    
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    
    const divElement = document.createElement('div');
    divElement.classList.add('buttons');
    divElement.appendChild(editButton);
    divElement.appendChild(saveButton);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);

    editButton.addEventListener('click', () => {
      nameInput.value = name;
      numberInput.value = number;
      categoryInput.value = category;

      liElement.remove();
    });

    saveButton.addEventListener('click', () => {
      divElement.remove();
      
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');
      
      liElement.appendChild(deleteButton);

      contactList.appendChild(liElement);

      deleteButton.addEventListener('click', () => {
        liElement.remove();
      });
    });
    
    
    return liElement;
  }
}
  