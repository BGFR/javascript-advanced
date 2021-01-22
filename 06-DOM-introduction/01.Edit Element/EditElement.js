function editElement(ref,match,replacer) {
    const matcher = new RegExp(match, 'g')
    const result = ref.textContent.replace(matcher, replacer)
    ref.textContent = result;

}

editElement(temp5, '%insert name here%', 'DOM')
