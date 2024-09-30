
// Function to toggle color scheme of the dark mode icon (runs in the darkMode function)
function toggleLogoColorScheme() {

    // Color schemes
    const lightScheme = "primary:#b4b4b4,secondary:#f7cd8f,tertiary:#000000";
    const darkScheme = "primary:#545454,secondary:#373737,tertiary:#ffffff";

    // Get the icon
    const icon = document.getElementById('dark-mode-icon');
    // Set the current color scheme
    const currentScheme = icon.getAttribute('colors');

    // Toggle the color scheme
    if (currentScheme === lightScheme) {
        // Set the color scheme to dark
        icon.setAttribute('colors', darkScheme);
    } else {
        // Set the color scheme to light
        icon.setAttribute('colors', lightScheme);
    }
}


// Function to toggle dark mode (runs when the dark mode icon is clicked)
function darkMode() {
    // Toggle the dark mode class for the body
    let isDarkMode = document.body.classList.toggle("dark-mode");
    // Save the dark mode preference to local storage
    localStorage.setItem('dark-mode', isDarkMode);

    // Get all elements with the whiteBG class
    const whiteBG = document.querySelectorAll('.whiteBG');
    whiteBG.forEach(element => {
        // Toggle the color scheme for non black items
        element.classList.toggle('darkBG');
    });
    const links = document.querySelectorAll('a');
    links.forEach(element => {
        element.classList.toggle('dark-mode-link');
    });
    // Toggle the color scheme for the dark mode icon
    toggleLogoColorScheme();
}

// Function to set the dark mode preference on page load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the dark mode preference from local storage
    let isDarkMode = localStorage.getItem('dark-mode') === 'true';
    // Toggle the dark mode class for the body
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        const whiteBG = document.querySelectorAll('.whiteBG');
        // I cry myself to sleep every night
        whiteBG.forEach(element => {
            element.classList.add('darkBG');
        });
        const links = document.querySelectorAll('a');
        links.forEach(element => {
            element.classList.add('dark-mode-link');
        });
        toggleLogoColorScheme();
    }
});

// check if the user prefers dark mode
//  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//  if(userPrefersDark){
//      darkMode();
//  }