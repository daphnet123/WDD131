// Export an array of image paths for baby blankets
export const babyBlanketImages = [
    'images/baby-blanket-green.png',
    'images/baby-blanket-lilac.png'
];
  
// Updated showBabyBlankets function
export function showBabyBlankets() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <h3>Baby Blankets</h3>
      <p>Perfect for newborns and gifts, these blankets combine soft textures and adorable patterns!</p>
      
      <!-- Image gallery -->
      <div class="image-gallery">
        <button id="prev-image" aria-label="Previous image">⬅️</button>
        <img id="baby-blanket-image" src="${babyBlanketImages[0]}" alt="Baby Blanket Image" />
        <button id="next-image" aria-label="Next image">➡️</button>
      </div>
    `;
  
// Add event listeners for the buttons to switch images
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');
const babyBlanketImage = document.getElementById('baby-blanket-image');
let currentIndex = 0;
  
// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? babyBlanketImages.length - 1 : currentIndex - 1;
    babyBlanketImage.src = babyBlanketImages[currentIndex];
});
  
// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === babyBlanketImages.length - 1) ? 0 : currentIndex + 1;
    babyBlanketImage.src = babyBlanketImages[currentIndex];
    });
}
  
// No changes needed for the showBlankets and showPlushies functions
export function showBlankets() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <h3>Blankets</h3>
      <ul>
        <li>In progress Kansas City Chiefs Blanket</li>
      </ul>
      <p>Explore cozy and stylish crochet blanket patterns for every occasion.</p>
    `;
}
  
export function showPlushies() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <h3>Plushies</h3>
      <ul>
        <li>Amigurumi Bunny</li>
        <li>Little Crochet Bear</li>
      </ul>
      <p>Check out these adorable crochet plushies—great as toys or decorations!</p>
    `;
}
  