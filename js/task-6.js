function getRandomHexColor() {
       return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  
  
  function createBoxes(amount) {
      const boxes = document.getElementById("boxes");
      for(let i = 0; i < amount; i++) {
          
          const div = document.createElement("div");
          const sizeDiv = 30 + i * 10;
          
          div.style.width = `${sizeDiv}px`;
          div.style.height = `${sizeDiv}px`;
          
          const bgColor = getRandomHexColor();
          div.style.backgroundColor = bgColor;
          
          boxes.appendChild(div);
        }
    }
    
    function destroyBoxes() {
        const boxes = document.getElementById("boxes");
        boxes.innerHTML = "";
    }
    
    document.querySelector('[data-create]').addEventListener('click', ()  => {
        const input = document.querySelector(`#controls input`);
        const amount = parseInt(document.querySelector(`input`).value);  

        if (isNaN(amount) || amount < 1 || amount > 100) {
            alert("Please enter a number between 1 and 100.");
            return;
          
        }

        createBoxes(amount);
        input.value = "";
    });


    document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);