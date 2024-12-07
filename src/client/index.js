class DrinkDiv extends HTMLDivElement {
    constructor() {
        super()
    }
}


window.addEventListener('click', async function(event){
    try {
        let response = await fetch('http://127.0.0.1:8090/search');
        let result = await response;
    } catch(e) {
        this.alert(e)
    }
})