import {
	showBabyBlankets,
	showBlankets,
	showPlushies,
	babyBlanketImages // Import the new image gallery functionality
} from './crafts.mjs';
  
// Add event listeners to the buttons
document.getElementById('baby-blankets-btn').addEventListener('click', showBabyBlankets);
document.getElementById('blankets-btn').addEventListener('click', showBlankets);
document.getElementById('plushies-btn').addEventListener('click', showPlushies);
  
document.addEventListener('DOMContentLoaded', () => {
	// Ensure content is loaded
	if (typeof displayCrafts === "function") {
	  displayCrafts(crafts);
	}
  
// Image gallery setup - Ensuring these elements exist in the DOM
const babyBlanketImageElement = document.getElementById("baby-blanket-image");
const prevImageButton = document.getElementById("prev-image");
const nextImageButton = document.getElementById("next-image");
  
if (babyBlanketImageElement && prevImageButton && nextImageButton) {
	let currentImageIndex = 0;
  
	// Function to update the image source
	const updateImage = () => {
		babyBlanketImageElement.src = babyBlanketImages[currentImageIndex];
	};
  
	// Event listeners for image gallery buttons
	prevImageButton.addEventListener("click", () => {
		currentImageIndex = (currentImageIndex - 1 + babyBlanketImages.length) % babyBlanketImages.length;
		updateImage();
	});
  
	nextImageButton.addEventListener("click", () => {
		currentImageIndex = (currentImageIndex + 1) % babyBlanketImages.length;
		updateImage();
	});
  
	// Initialize the gallery with the first image
	updateImage();
  } else {
	console.error("Image gallery elements not found.");
	}
});
  