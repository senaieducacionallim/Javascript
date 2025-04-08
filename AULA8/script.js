const elevator = document.querySelector('.elevator');
const floorButtons = document.querySelectorAll('.floor-button');
const floorHeight = 45; // Altura de cada andar

let currentFloor = 0;
let isMoving = false; // Adicionamos uma variável para controlar se o elevador está em movimento

floorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetFloor = parseInt(button.dataset.floor);
    if (!isMoving) {
      moveElevator(targetFloor);
    }
  });
});

function moveElevator(targetFloor) {
  if (targetFloor === currentFloor) {
    return; // Não faz nada se o elevador já estiver no andar desejado
  }

  isMoving = true;
  const distance = (targetFloor - currentFloor) * floorHeight;
  elevator.style.bottom = `${distance}px`;

  // Aguarda a animação terminar antes de permitir novos movimentos
  setTimeout(() => {
    currentFloor = targetFloor;
    isMoving = false;
  }, 1000); // 1000ms = 1 segundo (duração da animação)
}