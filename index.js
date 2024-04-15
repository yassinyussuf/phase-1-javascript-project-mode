// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle navigation link clicks
function handleNavLinkClick(event) {
    event.preventDefault();
    const page = this.getAttribute('data-page');
    alert(`You clicked on ${page}`);
    // You can add more specific logic here based on the page clicked
}

// Add event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});









  
//   function buy (event, gym) {
//     event.preventDefault();
//     // Perform buy action here
//     console.log(Bought gym: ${gym.name});
//   }
  
//   function order (event, gym) {
//     event.preventDefault();
//     // Perform order action here
//     console.log(Ordered gym: ${gym.name});
//   }
  
  function fitnessGym () {
    fetch('http://localhost:3000/excersise')
      .then(response => response.json())
      .then(data => data.forEach(gym => fitnessGym2(gym)))
      .catch(error => console.error(error));
  }
  
  function initialize () {
    fitnessGym();
  }
  
  initialize();