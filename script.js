//Change between 2 pages
// Get references to the two image elements
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

// Add click event listeners to each image
// image1.addEventListener("click", () => {
//     image1.style.display = "none";
//     image2.style.display = "block";
// });

// image2.addEventListener("click", () => {
//     image2.style.display = "none";
//     image1.style.display = "block";
// });

//smooth scroll
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.background = 'transparent';
    }
});

//active navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
   let currentSection = "";

   sections.forEach(section => {
       const sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;

       if (window.scrollY >= sectionTop - sectionHeight / 3) {
           currentSection = section.getAttribute("id");
       }
   });

   // Remove the "active" class from all links
   navLinks.forEach(link => link.classList.remove("active"));

   // Add the "active" class to the currently viewed section's link
   const activeLink = document.querySelector(`.navbar a[href="#${currentSection}"]`);
   if (activeLink) {
       activeLink.classList.add("active");
   }
});


