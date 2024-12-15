import {
	showBabyBlankets,
	showBlankets,
	showPlushies,
	babyBlanketImages 
} from './crafts.mjs';
  
document.getElementById('baby-blankets-btn').addEventListener('click', showBabyBlankets);
document.getElementById('blankets-btn').addEventListener('click', showBlankets);
document.getElementById('plushies-btn').addEventListener('click', showPlushies);
  
document.addEventListener('DOMContentLoaded', () => {
	if (typeof displayCrafts === "function") {
	  displayCrafts(crafts);
	}
  
const babyBlanketImageElement = document.getElementById("baby-blanket-image");
const prevImageButton = document.getElementById("prev-image");
const nextImageButton = document.getElementById("next-image");
  
if (babyBlanketImageElement && prevImageButton && nextImageButton) {
	let currentImageIndex = 0;
  
	const updateImage = () => {
		babyBlanketImageElement.src = babyBlanketImages[currentImageIndex];
	};
  
	prevImageButton.addEventListener("click", () => {
		currentImageIndex = (currentImageIndex - 1 + babyBlanketImages.length) % babyBlanketImages.length;
		updateImage();
	});
  
	nextImageButton.addEventListener("click", () => {
		currentImageIndex = (currentImageIndex + 1) % babyBlanketImages.length;
		updateImage();
	});
  
	updateImage();
  } else {
	console.error("Image gallery elements not found.");
	}
});
  