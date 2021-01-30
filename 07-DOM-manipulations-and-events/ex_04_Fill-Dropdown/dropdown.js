function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');


        const outputOption =  document.createElement('option');
        outputOption.textContent = inputText.value;;
        outputOption.value = inputValue.value;
        let menu = document.getElementById('menu');
        menu.appendChild(outputOption);

        inputText.value = '';
        inputValue.value = '';
;
}
