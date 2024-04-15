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










function fitnessGym2 (gym) {
    const span = document.createElement('li');
    span.innerHTML = `
    <img src="${gym.image}" width="850px">
      <p>${gym.name}</p><br>
      <p>${gym.type}</p><br>
      <p>${gym.muscle}</p><br>
      <p>${gym.equipment}</p><br>
      <p>${gym.difficulty}</p><br>
      <p>${gym.instructions}</p>
      <button onclick="start(event, ${JSON.stringify(gym)})">start</button>
      <button onclick="train(event, ${JSON.stringify(gym)})">train</button>
    `;
    document.getElementById('yassin').appendChild(span);
  }
  
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