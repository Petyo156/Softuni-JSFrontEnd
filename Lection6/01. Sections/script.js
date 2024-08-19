function create(words) {
   const contentDivEl = document.getElementById("content");

   function createWordStructure(word){
      const pEl = document.createElement("p");
      const divEl = document.createElement("div");

      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);

      return divEl;
   }

   words.forEach(element => {
      const divEl = createWordStructure(element);

      divEl.addEventListener('click', (event) => {
         event.target.children[0].style = 'block';
      });

      contentDivEl.appendChild(divEl);

   });
}