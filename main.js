const canvas = document.getElementById("myCanvas");
canvas.width = 500;
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  canvas.height = window.innerHeight;

  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}
