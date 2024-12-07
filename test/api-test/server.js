let ingredient = 'Vodka';

let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingredient);
let json = await response.json();
let drink_id = 15675;
let response2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+drink_id);
let drinks_json = await response2.json();
let drink_json = drinks_json.drinks[0]
for (let i = 1; i < 16; i++){
    if (drink_json['strIngredient'+i] != null){
        let ingredient_str = (drink_json['strMeasure'+i] || '') + drink_json['strIngredient'+i];
        console.log(ingredient_str);
    } else {
        break;
    }
}