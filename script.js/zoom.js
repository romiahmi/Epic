// zooming homebackground image

(function () {
    const mainSection = document.querySelector('.main-section');
    let scale = 1; // Scale variable
    let lastScrollYs = 0; // Last scroll position

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Calculate the difference in scroll position
        const scrollDifference = scrollY - lastScrollYs;

        // Update scale based on scroll direction
        if (scrollDifference > 0) {
            // Scrolling down
            scale += scrollDifference / 7000; // Gradual zoom in
        } else {
            // Scrolling up
            scale -= Math.abs(scrollDifference) / 3500; // Gradual zoom out
        }

        // Ensure the scale value stays within a sensible range
        scale = Math.max(1, Math.min(scale, 2)); // Limit zoom range (min: 1, max: 2)

        // Apply the scale to the background image
        mainSection.style.setProperty('--zoom-scale', scale);
        lastScrollYs = scrollY; // Update last scroll position
    });
})();