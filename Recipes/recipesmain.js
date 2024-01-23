import recipesData from 'recipesdetails/recipesData.js';

function displayRecipeDetails(recipe) {
 document.getElementById('recipeName').innerText = recipe.name;
 document.getElementById('recipeImage').src = recipe.image;
 document.getElementById('macros').innerText = `Calories: 500, Protein: 35g, Carbs: 40g, Fat: 20g`;
 document.getElementById('ingredientsList').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
 document.getElementById('instructionsList').innerHTML = recipe.instructions.map((instruction, index) => `<li>${index + 1}. ${instruction}</li>`).join('');
}

window.onload = function() {
 displayRecipeDetails(recipesData[0]);
};
