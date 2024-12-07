// Example ingredient
let ingredient = 'Vodka';
// Fetch data from API with ingredient
let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingredient);
let json = await response.json();
// Catch error if ingredient is not found
if (json.drinks == 'no data found'){
    console.log('Ingredient not found');
} else {
    // Get first drink ID
    let drink_id = json.drinks[0].idDrink;
    // Fetch data from API for drink
    let drink_response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+drink_id);
    let drinks_json = await drink_response.json();
    let drink_json = drinks_json.drinks[0];
    console.log(drink_json.strDrink);
    // Iterate over possible ingredients
    for (let i = 1; i < 16; i++){
        // If the ith ingredient is not null
        if (drink_json['strIngredient'+i] != null){
            // Format string with measurement (if not null) and ingredient
            let ingredient_str = (drink_json['strMeasure'+i].trim() || '') + ' ' + drink_json['strIngredient'+i];
            console.log(ingredient_str);
        } else {
            // Break from the loop
            break;
        }
    }
}
