function focus() {
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
        console.log(ev.target.parentNode);

    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}