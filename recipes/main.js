import { recipes } from './recipes.mjs';

function displayRecipes(recipes) {
  const recipeSection = document.querySelector('.recipes');
  recipes.forEach(recipe => {
    const article = document.createElement('article');
    article.classList.add('recipe');
    article.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p class="description">${recipe.description}</p>
      <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
      </div>
    `;
    recipeSection.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', () => displayRecipes(recipes));
