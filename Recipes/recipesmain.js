// Example data: Replace this with your actual recipe data
const recipesData = [
    {
        name: "Chicken Curry",
        protein: "chicken",
        ingredients: [
            "500g chicken thighs, boneless and skinless",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tablespoon curry powder",
            "1 teaspoon ground turmeric",
            "1 can (400ml) coconut milk",
            "Salt and pepper to taste",
            "Fresh coriander for garnish"
        ],
        instructions: [
            "In a large pan, sauté the chopped onion and garlic until softened.",
            "Add chicken thighs and cook until browned on all sides.",
            "Stir in curry powder and ground turmeric.",
            "Pour in coconut milk and season with salt and pepper.",
            "Simmer for 20-25 minutes until the chicken is cooked through.",
            "Garnish with fresh coriander before serving."
        ],
        macros: {
            calories: 350,
            protein: 25,
            carbs: 10,
            fat: 22
        },
        image: "chicken_curry_image.jpg" // Add the actual image filename or URL
    },
    // Add more recipes with similar structure
];

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
