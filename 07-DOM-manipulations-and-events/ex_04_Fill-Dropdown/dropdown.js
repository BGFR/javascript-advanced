//mine
function addItem() {
    const inputText = document.getElementById('newItemText')
    const inputValue = document.getElementById('newItemValue')


        const outputOption =  document.createElement('option')
        outputOption.textContent = inputText.value;
        outputOption.value = inputValue.value;
        let menu = document.getElementById('menu')
        menu.appendChild(outputOption)

        inputText.value = ''
        inputValue.value = ''

}

//hristomir asenov

function addItem() {
 
    const $elements = {
        inputText: document.getElementById('newItemText'),
        inputValue: document.getElementById('newItemValue'),
        selectMenu: document.getElementById('menu')
    }

    const $option = document.createElement('option')

    $option.textContent = $elements.inputText.value;
    $option.value = $elements.inputValue.value;

    $elements.selectMenu.appendChild($option)

    $elements.inputText.value = '';
    $elements.inputValue.value = '';
}