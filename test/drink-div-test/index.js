class DrinkDiv extends HTMLDivElement {
    constructor(){
        super();
        // Add header and image to div
        this.setAttribute("class", "drink");
        
        // Create parent div
        let parent_div = document.createElement("div");
        this.parent_div = parent_div;
        this.parent_div.setAttribute("class", "col-md-3");
        this.parent_div.appendChild(this);
    };

    /**
     * Adds the children nodes to the div
     * @param {*} param0 
     */
    addChildren({name, url}){
        console.log(name)
        let name_header = document.createElement("h4");
        name_header.innerHTML = name;
        let img = document.createElement("img");
        img.setAttribute("src", url);
        this.appendChild(name_header);
        this.appendChild(img);
        this.appendChild(document.createElement("br"));
        this.appendChild(document.createElement("br"));
    };
};
customElements.define("drink-div", DrinkDiv, {extends: "div"});

let example_drinks = [
    {name: "A Gilligan's Island", url: "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg"},
    {name: "A midsummernight dream", url: "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg"}
];

for (let drink of example_drinks){
    let drink_div = document.createElement("div", {is: "drink-div"});
    drink_div.addChildren(drink);
    document.getElementById("all_drinks").appendChild(drink_div.parent_div);
};