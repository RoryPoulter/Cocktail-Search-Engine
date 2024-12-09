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
    addChildren({strDrink, strDrinkThumb}){
        let name_header = document.createElement("h4");
        name_header.innerHTML = strDrink;
        let img = document.createElement("img");
        img.setAttribute("src", strDrinkThumb);
        this.appendChild(name_header);
        this.appendChild(img);
        this.appendChild(document.createElement("br"));
        this.appendChild(document.createElement("br"));
    };
};
customElements.define("drink-div", DrinkDiv, {extends: "div"});


async function createDivs(){
    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Blue%20Curacao");
    let json = await response.json();
    let example_drinks = await json.drinks;

    // let example_drinks = [
    //     {name: "A Gilligan's Island", url: "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg"},
    //     {name: "A midsummernight dream", url: "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg"}
    // ];
    let no_of_drinks = example_drinks.length;  // 94 drinks
    let no_of_rows = Math.ceil(no_of_drinks / 4);
    for (let i = 0; i < no_of_rows; i++){
        let row_div = document.createElement("div");
        row_div.setAttribute("class", "row");
        row_div.setAttribute("id", "row"+i);
        document.getElementById("all_drinks").appendChild(row_div);
        for (let j = 0; j < 4; j++){
            if (no_of_drinks - 1 < i * 4 + j){
                break
            }
            let drink = example_drinks[i * 4 + j];
            let drink_div = document.createElement("div", {is: "drink-div"});
            drink_div.addChildren(drink);
            document.getElementById("row"+i).appendChild(drink_div.parent_div);
        };
    document.getElementById("all_drinks").appendChild(document.createElement("br"))
    }
};

createDivs();