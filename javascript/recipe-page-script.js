const recipes = [
    { name: "Pho bo", link: "phobo.html", description: "Phở bò, a quintessential dish of Vietnamese cuisine, is a hearty and aromatic beef noodle soup that embodies the essence of Vietnamese flavors. Steeped in history and tradition, this beloved dish consists of tender slices of beef, rice noodles , and a fragrant broth infused with spices such as star anise, cinnamon, and cloves." },
    { name: "Banh mi", link: "banhmi.html", description: "Bánh mì, a delectable fusion of French and Vietnamese culinary influences, is a beloved street food staple that has captured the hearts and taste buds of food enthusiasts around the globe. Originating from the vibrant streets of Saigon, this iconic sandwich is a testament to Vietnam's rich cultural tapestry and its ability to adapt and innovate." },
    { name: "Nem cuon", link: "nemcuon.html", description: "Nem cuốn, also known as Vietnamese fresh spring rolls, offers a refreshing and flavorful twist to traditional spring rolls. Originating from the vibrant culinary landscape of Vietnam, nem cuốn embodies the essence of Vietnamese cuisine with its light, healthy, and vibrant ingredients." },
   
];


function handleSearch(event) {
    if (event.key === "Enter") {
        searchFood();
    }
}
function searchFood() {
    
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm);
    });

    
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
            recipeElement.innerHTML = `<p><a href="${recipe.link}"><strong>${recipe.name}</strong></a>: ${recipe.description}</p>`;
            searchResultsContainer.appendChild(recipeElement);
        });
    }
}