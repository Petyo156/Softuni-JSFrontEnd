window.addEventListener("load", solve);

function solve() {
  const typeInput = document.getElementById("type");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  
  const buttonAdoptEl = document.getElementById("adopt-btn");
  const adoptionInfoList = document.getElementById("adoption-info");
  const adoptedList = document.getElementById("adopted-list");

  buttonAdoptEl.addEventListener("click", onClick);

  function onClick(event){
    //because the button is in form
    event.preventDefault();

    //get values
    const type = typeInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    
    //check if fields are inputed
    if (!type || !age || !gender) {
      return;
    }

    clearInputs();

    const liElement = createAdoptListElement(type, age, gender);

    adoptionInfoList.appendChild(liElement);


  }

  function createAdoptListElement(type, age, gender){
    //article part
    const pTypeElement = document.createElement('p');
    pTypeElement.textContent = `Pet:${type}`;  
    const pGenderElement = document.createElement('p');
    pGenderElement.textContent = `Gender:${gender}`;
    const pAgeElement = document.createElement('p');
    pAgeElement.textContent = `Age:${age}`;  

    const articleElement = document.createElement('article');
    articleElement.appendChild(pTypeElement);
    articleElement.appendChild(pGenderElement);
    articleElement.appendChild(pAgeElement);

    //buttons part
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = "Edit";

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = "Done";
    
    const divElement = document.createElement('div');
    divElement.classList.add('buttons');
    divElement.appendChild(editButton);
    divElement.appendChild(doneButton);

    //adding both to the li element
    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);

    //edit button functionality
    editButton.addEventListener('click', () => {
      typeInput.value = type;
      ageInput.value = age;
      genderInput.value = gender;

      liElement.remove();
    });

    //save button functionality
    doneButton.addEventListener('click', () => {
      //removing the two other buttons
      divElement.remove();
      
      const clearButton = document.createElement('button');
      clearButton.classList.add('clear-btn');
      clearButton.textContent = "Clear";

      liElement.appendChild(clearButton);

      //when appending if already exists it just switches places
      adoptedList.appendChild(liElement);

      clearButton.addEventListener('click', () => {
        liElement.remove();
      });
    });

    return liElement;
  }

  function clearInputs(){
    typeInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
  }

}
