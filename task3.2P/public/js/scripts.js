// Fetch data from API
const fetchRecipes = () => {
  fetch("/api/recipes")
    .then(response => response.json())
    .then(result => {
      console.log("Fetched Data:", result);
      renderRecipeCards(result.data);
    });
};

// Render cards with reveal functionality
const renderRecipeCards = (items) => {
  items.forEach(item => {

    const cardTemplate = `
      <div class="col s4">
        <div class="card">

          <!-- Image Section (clickable) -->
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}">
          </div>

          <!-- Card Title -->
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
          </div>

          <!-- Reveal Section -->
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p>${item.description}</p>
          </div>

        </div>
      </div>
    `;

    $("#recipe-section").append(cardTemplate);
  });
};

// Run when page loads
$(document).ready(() => {
  fetchRecipes();
});