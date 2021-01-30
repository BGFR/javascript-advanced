function lockedProfile() {

    document.querySelector('main').addEventListener('click', onClick)

    function onClick(e) {
        if(e.target.nodeName === 'BUTTON'){
            const parent = e.target.parentNode;
        
        const lock = parent.querySelector('input[type="radio"][value="lock"]')
        if(lock.checked){
            return;
        }


        const hiddenFields = [...parent.querySelectorAll('div')]
            .filter(d => d.id.includes('HiddenFields'))[0]
        if (hiddenFields.style.display !== 'block') {
            hiddenFields.style.display = 'block'
            e.target.textContent = 'Hide it'
        } else {
            hiddenFields.style.display = ''
            e.target.textContent = 'Show more'
        }}


    }

}


//s.o's pastebin.com/rNi8y94j

function lockedProfile() {
    const mainDiv = document.querySelector('main');
    mainDiv.addEventListener('click', (e) => {
 
        if (e.target.localName == 'button') {
            let user = e.target.previousElementSibling;
            let inputName = user.id.substring(0, user.id.indexOf('H')) + 'Locked';
            const [lockButton, unlockButton] =Array.from(document.getElementsByName(inputName));
 
            if (unlockButton.checked && e.target.textContent == 'Show more') {
                user.style.display = 'block';
                e.target.textContent = 'Hide it';
                e.removeEventListener();
            }
            if (unlockButton.checked && e.target.textContent == 'Hide it') {
                user.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    })
 
}

//s.o's

function lockedProfile (){
    document.querySelector('main').addEventListener('click', (event =>{
        if(event.target.tagName === 'BUTTON') return mainFunc(event)
    }));

    function mainFunc(event){
        const isLocked = event.target.parentNode.children[2].checked
        const hiddenDiv = event.target.parentNode.children[9];
        if(!isLocked){
            hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block'
            // hiddenDiv.style.display === 'block'?
            // hiddenDiv.style.display === 'none':
            // hiddenDiv.style.display === 'block';

            event.target.textContent = changeButtonText(event.target.textContent)
        }
    }

    function changeButtonText(currentText){
        return currentText === 'Show More' ? currentText = 'Hide it' : currentText = "Show more"
    }
}