const image = document.getElementById('image1');
let rotation = 0;

window.addEventListener('wheel', (event) => {
    rotation += event.deltaY * 0.1; // Adjust ke liye multiplier use karein
    image.style.transform = `rotate(${rotation}deg)`;
});



// Show Element 
function showTabContent(tabName, element) {
    // Hide all tab contents
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.style.display = 'none';  // Hide all tab panes
        pane.classList.remove('active'); // Remove the active class
    });

    // Show the selected tab content
    const activePane = document.querySelector(`.${tabName}`);
    if (activePane) {
        activePane.style.display = 'block'; // Show the active tab pane
        activePane.classList.add('active'); // Add active class for CSS styling
    }
    console.log(activePane);

    // Remove the active-tab class from all menu items
    const tabs = document.querySelectorAll('.tab-menu a');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab'); // Remove active class
    });

    // Add active-tab class to the clicked menu item
    if (element) {
        element.classList.add('active-tab'); // Add active class to the clicked tab
    }
}

// Automatically trigger the initial tab to show (optional)
document.addEventListener('DOMContentLoaded', function () {
    // Optionally call the function to show the first tab by default
    showTabContent('hiking-tab', document.querySelector('.active-tab'));
});

function changeColor(element) {
    // Remove active class from all buttons (if needed)
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    element.classList.add('active');
}


// Rotate my image
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const image = document.getElementById('adventure-logo');
    const rotation = scrollY * 0.1; // Adjust this factor for speed
    image.style.transform = `rotate(${rotation}deg)`;
});





// hover 
const logo = document.getElementById('hoverLogo');
const hoverSection = document.querySelector('.hover-section');

hoverSection.addEventListener('mouseenter', () => {
    logo.style.opacity = '1'; // Show logo on hover
    logo.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale up logo
});

hoverSection.addEventListener('mousemove', (event) => {
    const rect = hoverSection.getBoundingClientRect();
    const x = event.clientX - rect.left; // Get x position relative to the section
    const y = event.clientY - rect.top;  // Get y position relative to the section
    logo.style.left = `${x}px`; // Move logo to cursor position
    logo.style.top = `${y}px`;
});

hoverSection.addEventListener('mouseleave', () => {
    logo.style.opacity = '0'; // Hide logo when mouse leaves
    logo.style.transform = 'translate(-50%, -50%) scale(0)'; // Scale down logo
});



// Zomming Image for About 3
const zommingImg = document.getElementById('mainImage');
let scale = 1;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
        // Scrolling down
        scale = 1 + scrollY / 30000; // Very gradual zoom in
    } else {
        // Scrolling up
        scale = Math.max(1, scale - 0.001); // Very gradual zoom out
    }

    zommingImg.style.transform = `scale(${scale})`;
    lastScrollY = scrollY; // Update last scroll position
});



(function () {
    // Your code here, ensuring no variable or function names overlap with zoom.js
})();



