const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

 nameInput.addEventListener("input", (event) => {

    const currentTrimmedValue = nameInput.value.trim();

    if(currentTrimmedValue === "") {
        nameOutput.textContent = "Anonymous";
    }else {
        nameOutput.textContent = currentTrimmedValue;
    }
})