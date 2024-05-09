const mainWorld = document.querySelector(".main.world1");
const svgContainer = mainWorld.querySelector("svg");
const pathElements = svgContainer.querySelectorAll("path");
const allPaths = {};

pathElements.forEach((path, index) => {
  const svgRect = svgContainer.getBoundingClientRect();
  const pathRect = path.getBoundingClientRect();

  // Рассчитываем координаты центра элемента path относительно "main world1"
  const centerX = Math.round(pathRect.left - svgRect.left + pathRect.width / 2);
  const centerY = Math.round(pathRect.top - svgRect.top + pathRect.height / 2);

  allPaths[`path${index + 1}`] = {
    top: centerY,
    left: centerX,
  };
});

const jsonString = JSON.stringify(allPaths);
const blob = new Blob([jsonString], { type: "application/json" });
const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "coordinates.json";

document.body.appendChild(a);
a.click();
document.body.removeChild(a);
