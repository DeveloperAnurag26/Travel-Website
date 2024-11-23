fetch('https://api.example.com/travel-destinations')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('data-container');
  data.destinations.forEach(destination => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${destination.name}</h3><p>${destination.description}</p>`;
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));