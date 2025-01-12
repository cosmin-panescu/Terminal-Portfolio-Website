export function activateHackerEffect() {
  // Activează modul fullscreen
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error trying to enable full-screen mode: ${err.message}`);
    });
  }

  // Creăm elementul canvas
  const canvas = document.createElement("canvas");
  canvas.id = "matrixCanvas";
  document.body.appendChild(canvas);

  // Stiluri pentru canvas
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = 9999;

  // Funcție pentru actualizarea dimensiunilor canvas-ului
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Setăm dimensiunile inițiale și le actualizăm la redimensionare
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Inițializează contextul
  const context = canvas.getContext("2d");
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(0);
  const str = "JavaScript Hacking Effect";

  function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "700 " + fontSize + "px monospace";
    context.fillStyle = "#00cc33";

    drops.forEach((y, index) => {
      const text = str[Math.floor(Math.random() * str.length)];
      const x = index * fontSize;

      context.fillText(text, x, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[index] = 0;
      } else {
        drops[index]++;
      }
    });
  }

  const interval = setInterval(draw, 35);

  // Creăm un buton pentru a opri efectul
  const stopButton = document.createElement("button");
  stopButton.id = "stopHackerEffect";
  stopButton.textContent = "Stop Hacker Effect";
  stopButton.style.position = "fixed";
  stopButton.style.top = "10px";
  stopButton.style.right = "10px";
  stopButton.style.zIndex = 10000;
  stopButton.style.padding = "10px";
  stopButton.style.fontSize = "16px";
  stopButton.style.backgroundColor = "#00cc33";
  stopButton.style.color = "#fff";
  stopButton.style.border = "none";
  stopButton.style.cursor = "pointer";

  document.body.appendChild(stopButton);

  stopButton.addEventListener("click", () => {
    clearInterval(interval); // Oprim efectul
    document.body.removeChild(canvas); // Ștergem elementul canvas
    document.body.removeChild(stopButton); // Ștergem butonul
    window.removeEventListener("resize", resizeCanvas); // Eliminăm listener-ul pentru redimensionare

    // Iesim din modul fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error exiting full-screen mode: ${err.message}`);
      });
    }
  });
}
