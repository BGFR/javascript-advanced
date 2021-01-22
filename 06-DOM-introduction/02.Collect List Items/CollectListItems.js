function extractText() {
    // const liElements = document.querySelectorAll('li')
    // const elementText = [...liElements].map(e=> e.textContent)
    const liElements = [...document.getElementsByTagName('li')]
    const elementText = liElements.map(e=> e.textContent)
    // const textarea = document.getElementById('result')
    // textarea.value = elementText.join('\n')
    document.getElementById('result').value = elementText.join('\n')
}