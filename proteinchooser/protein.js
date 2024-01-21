function generateUserProtein() {
    var inputElement = document.getElementById("proteinOptions");
    var resultElement = document.getElementById("result");
    var infoElement = document.getElementById("info");

    // Get the user input and split it into an array of options
    var userOptions = inputElement.value.split(",");

    // If the user provided options, choose a random one; otherwise, display an error
    var randomProtein = userOptions.length > 0
        ? userOptions[Math.floor(Math.random() * userOptions.length)]
        : "Please enter options for us to choose from.";

    // Display the result
    resultElement.textContent = "Generated Protein: " + randomProtein;

    // Display information and link for the selected protein
    displayProteinInfo(randomProtein);
}

function generateRandomPredefinedProtein() {
    var resultElement = document.getElementById("result");
    var infoElement = document.getElementById("info");

    // Get a random protein from the predefined options
    var randomProtein = getRandomPredefinedProtein();

    // Display the result
    resultElement.textContent = "Generated Protein: " + randomProtein;

    // Display information and link for the selected protein
    displayProteinInfo(randomProtein);
}

function getRandomPredefinedProtein() {
    // Predefined protein options
    var predefinedOptions = ["Chicken", "Beef", "Fish", "Tofu", "Eggs", "Lamb", "Pork", "Turkey", "Kangaroo"];
    // Choose a random protein from the predefined options
    return predefinedOptions[Math.floor(Math.random() * predefinedOptions.length)];
}

function displayProteinInfo(protein) {
    var infoElement = document.getElementById("info");

    // Display information about the selected protein
    switch (protein.toLowerCase()) {
        case "chicken":
            infoElement.innerHTML = "<p>Chicken meat is incredibly nutritious and one of the most popular protein sources worldwide. When included in a balanced diet, chicken may help improve muscle mass and support weight maintenance, among other health benefits.</p><p>Check out some <a href='#'>chicken recipes</a>.</p>";
            break;
        case "beef":
            infoElement.innerHTML = "<p>Beef is a good source of protein and other nutrients, but is also high in cholesterol and saturated fats that can cause fatty deposits to build up in the blood. Beef can be a healthy part of your diet, but should be eaten in moderation.</p><p>Find delicious <a href='#'>beef recipes</a> to try.</p>";
            break;
        case "fish":
            infoElement.innerHTML = "<p>The vitamins, minerals, and fatty acids in fish can provide significant health benefits. The vitamin B12 found in fish is crucial for the growth of healthy red blood cells, DNA reproduction, and nerve function. Consuming enough vitamin B12 is linked to a lower risk of dementia and heart disease. A lack of vitamin B12 is also connected to problems like chronic fatigue and anemia.</p><p>Check out some <a href='#'>fish recipes</a>.</p>";
            break;
        case "tofu":
            infoElement.innerHTML = "<p>Tofu -- or bean curd -- is made by pressing curdling soy milk into a solid block. Some tofu is firm while others are more soft and smooth. It can be sliced into different shapes and cooked in lots of ways.</p><p>Find delicious <a href='#'>tofu recipes</a> to try.</p>";
            break;
        case "eggs":
            infoElement.innerHTML = "<p>Egg protein has been shown to decrease malnutrition, improve muscle health, increase satiety, and therefore contribute to weight loss. It has other additional benefits including protection against infection and decreases in blood pressure.</p><p>Check out some <a href='#'>egg recipes</a>.</p>";
            break;
        case "lamb":
            infoElement.innerHTML = "<p>Not only is it a rich source of high-quality protein, but it is also an outstanding source of many vitamins and minerals, including iron, zinc, and vitamin B12. Because of this, regular consumption of lamb may promote muscle growth, maintenance, and performance. In addition, it helps prevent anemia.</p><p>Find delicious <a href='#'>lamb recipes</a> to try.</p>";
            break;
        case "pork":
            infoElement.innerHTML = "<p>itamins B6 and B12, also found abundantly in pork, are essential for blood cell formation and brain function. Pork is also an excellent source of iron — the heme-iron found in red meats is absorbed very easily by the human digestive system. The selenium in pork is essential for proper thyroid function.</p><p>Check out some <a href='#'>pork recipes</a>.</p>";
            break;
        case "turkey":
            infoElement.innerHTML = "<p>It contains vitamin B12, which helps support red blood cell formation, as well as zinc and iron, which help boost immunity. Turkey also provides a good dose of selenium, which has powerful antioxidant properties that help protect against disease.</p><p>Find delicious <a href='#'>turkey recipes</a> to try.</p>";
            break;
        case "kangaroo":
            infoElement.innerHTML = "<p>Kangaroo is a lean meat with less than 2% fat, making it a healthier red meat option. It is also high in protein, essential B vitamins, minerals such as zinc, iron and omega 3 fats and omega 6 fatty acids. Compared to beef, kangaroo contains double the amount of iron and triple that of chicken and pork.</p><p>Check out some <a href='#'>kangaroo recipes</a>.</p>";
            break;
        // Add more cases for other proteins as needed
        default:
            infoElement.innerHTML = "<p>Information for " + protein + " is not available at the moment.</p>";
            break;
    }
}