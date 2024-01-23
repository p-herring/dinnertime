function loadRecipeDetails(recipeIndex) {
    const recipe = recipesData[recipeIndex];

    document.getElementById("recipeName").textContent = recipe.name;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("macros").textContent = recipe.macroInformation;

    const ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    for (let i = 0; i < recipe.ingredients.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.ingredients[i];
        ingredientsList.appendChild(listItem);
    }

    const instructionsList = document.getElementById("instructionsList");
    instructionsList.innerHTML = "";
    for (let i = 0; i < recipe.instructions.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.instructions[i];
        instructionsList.appendChild(listItem);
    }
}

loadRecipeDetails(0);
