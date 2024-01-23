// recipesData.js

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
        image: "../assets/chickencurry.jpeg" // Add the actual image filename or URL
    },
    // Add more recipes with similar structure
];

export default recipesData;
