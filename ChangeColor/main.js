const button = document.querySelector('#btn');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  const colors = ['red', 'green', 'purple', 'salmon'];
  const index = Math.floor(Math.random() * colors.length);
  container.style.backgroundColor = colors[index];
});
