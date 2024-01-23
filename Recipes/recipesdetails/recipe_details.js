document.addEventListener("DOMContentLoaded", function () {
    const selectedProtein = sessionStorage.getItem("selectedProtein");

    if (selectedProtein) {
        // Assuming recipesData is available globally due to direct inclusion in HTML
        const selectedRecipe = recipesData.find(recipe => recipe.protein === selectedProtein);

        if (selectedRecipe) {
            // Set page title to the recipe name
            document.title = selectedRecipe.name;

            // Display recipe details
            document.getElementById("recipeName").textContent = selectedRecipe.name;
            document.getElementById("recipeImage").src = selectedRecipe.image;

            const macrosElement = document.getElementById("macros");
            macrosElement.innerHTML = `<em>Calories: ${selectedRecipe.macros.calories} | Protein: ${selectedRecipe.macros.protein}g | Carbs: ${selectedRecipe.macros.carbs}g | Fat: ${selectedRecipe.macros.fat}g</em>`;

            const ingredientsList = document.getElementById("ingredientsList");
            selectedRecipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement("li");
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });

            const instructionsList = document.getElementById("instructionsList");
            selectedRecipe.instructions.forEach(instruction => {
                const listItem = document.createElement("li");
                listItem.textContent = instruction;
                instructionsList.appendChild(listItem);
            });

            // Add any additional details you want to display
        } else {
            // Handle case when the selected recipe is not found
            alert("Recipe not found!");
        }
    } else {
        // Handle case when selectedProtein is not found in sessionStorage
        alert("Selected protein not found!");
    }
});
