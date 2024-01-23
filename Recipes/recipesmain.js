import recipesData from '../Recipes/recipesdetails/recipesData.js';


function renderSimplifiedRecipes(proteinFilter) {
    const recipesContainer = document.getElementById("recipesContainer");
    recipesContainer.innerHTML = ""; // Clear existing recipes

    const filteredRecipes = (proteinFilter === "all")
        ? recipesData
        : recipesData.filter(recipe => recipe.protein === proteinFilter);

    filteredRecipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.setAttribute("data-protein", recipe.protein);

        const recipeImage = document.createElement("img");
        recipeImage.alt = recipe.name; // Replace with actual alt text
        recipeImage.src = recipe.image;
        recipeElement.appendChild(recipeImage);

        const recipeName = document.createElement("h2");
        recipeName.textContent = recipe.name;
        recipeElement.appendChild(recipeName);

        const macrosElement = document.createElement("p");
        macrosElement.innerHTML = `<em>Calories: ${recipe.macros.calories} | Protein: ${recipe.macros.protein}g | Carbs: ${recipe.macros.carbs}g | Fat: ${recipe.macros.fat}g</em>`;
        recipeElement.appendChild(macrosElement);

        recipesContainer.appendChild(recipeElement);
    });
}

function navigateToRecipeDetails(selectedProtein) {
    sessionStorage.setItem("selectedProtein", selectedProtein);
    window.location.href = "recipesdetails/recipe_details.html";
}

function filterRecipes() {
    const proteinFilter = document.getElementById("proteinFilter").value;
    renderSimplifiedRecipes(proteinFilter);
}

// Add a single click event listener to the container element
document.getElementById("recipesContainer").addEventListener("click", (event) => {
    const recipeElement = event.target.closest(".recipe");
    if (recipeElement) {
        navigateToRecipeDetails(recipeElement.getAttribute("data-protein"));
    }
});

// Initial rendering of simplified recipes (show all initially)
renderSimplifiedRecipes("all");
