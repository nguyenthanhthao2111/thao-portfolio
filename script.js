// Get references to the two image elements
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

// Add click event listeners to each image
image1.addEventListener("click", () => {
    image1.style.display = "none";
    image2.style.display = "block";
});

image2.addEventListener("click", () => {
    image2.style.display = "none";
    image1.style.display = "block";
});
