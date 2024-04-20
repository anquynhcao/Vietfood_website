// Sample recipe data
const recipes = [
    { name: "Recipe 1", description: "Description for Recipe 1" },
    { name: "Recipe 2", description: "Description for Recipe 2" },
    { name: "Recipe 3", description: "Description for Recipe 3" },
    // Add more recipe objects as needed
];

function searchFood() {
    // Get the search input value
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm);
    });

    // Display search results
    displaySearchResults(filteredRecipes);
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results

    if (results.length === 0) {
        searchResultsContainer.innerHTML = "No matching recipes found.";
    } else {
        results.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.innerHTML = `<p><strong>${recipe.name}</strong>: ${recipe.description}</p>`;
            searchResultsContainer.appendChild(recipeElement);
        });
    }
}