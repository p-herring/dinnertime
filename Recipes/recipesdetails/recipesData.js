
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
        image: "../../assets/chickencurry.jpeg"
    },
    {
        name: "Beef Stir Fry",
        protein: "beef",
        ingredients: [
            "500g beef sirloin, thinly sliced",
            "1 bell pepper, thinly sliced",
            "1 broccoli crown, cut into florets",
            "1 carrot, julienned",
            "3 cloves garlic, minced",
            "1 tablespoon soy sauce",
            "1 tablespoon oyster sauce",
            "1 teaspoon sesame oil",
            "2 tablespoons vegetable oil",
            "Salt and pepper to taste",
            "Cooked rice for serving"
        ],
        instructions: [
            "In a wok or large skillet, heat vegetable oil over high heat.",
            "Add thinly sliced beef and stir-fry until browned. Remove from the wok and set aside.",
            "In the same wok, add more oil if needed. Stir-fry garlic until fragrant.",
            "Add bell pepper, broccoli, and carrot. Stir-fry until vegetables are crisp-tender.",
            "Return the cooked beef to the wok. Add soy sauce, oyster sauce, and sesame oil. Stir well to combine.",
            "Season with salt and pepper to taste. Stir-fry for an additional 2-3 minutes.",
            "Serve the beef stir fry over cooked rice.",
            "Garnish with sesame seeds or green onions if desired."
        ],
        macros: {
            calories: 400,
            protein: 30,
            carbs: 15,
            fat: 20
        },
        image: "" // Add the actual image filename or URL
    },
    // Add more recipes with similar structure
];

export default recipesData;
