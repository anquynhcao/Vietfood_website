document.getElementById('add-ingredient').addEventListener('click', function() {
    const ingredientContainer = document.createElement('div');
    ingredientContainer.classList.add('ingredient');

    ingredientContainer.innerHTML = `
        <input type="text" name="ingredient[]" placeholder="Ingredient">
        <input type="text" name="unit[]" placeholder="Unit">
        <input type="number" name="amount[]" placeholder="Amount">
        <button type="button" class="delete-ingredient">Delete Ingredient</button>
    `;

    document.getElementById('ingredients').insertBefore(ingredientContainer, this);

    ingredientContainer.querySelector('.delete-ingredient').addEventListener('click', function() {
        ingredientContainer.remove();
    });
});

document.querySelectorAll('.delete-ingredient').forEach(button => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
    });
});