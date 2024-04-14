






function fitnessGym2 (gym) {
    const span = document.createElement('li');
    span.innerHTML = `
      <h4>${gym.name}</h4>
      <p>${gym.type}</p>
      <p>${gym.muscle}</p>
      <img src="${gym.image}" width="350px">
      <p>${gym.equipment}</p>
      <p>${gym.difficulty}</p>
      <p>${gym.instruction}</p>
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