// Select the monkey element
const monkey = document.getElementById("monkey");
const treeContainer = document.querySelector(".tree-container");
const climbHeight = treeContainer
  ? `${treeContainer.offsetHeight - 50}px`
  : "350px"; // Adjust for monkey height
const climbDuration = 2000; // Duration of the climb in milliseconds
let isClimbing = false; // Prevent multiple clicks during animation

if (!monkey) {
  console.warn("Monkey element not found!");
} else {
  console.log("Monkey element found:", monkey);
}

if (!treeContainer) {
  console.error("Tree container not found! Using default climb height.");
}

console.log("Climb height:", climbHeight);

if (monkey) {
  // Add a click event listener to the monkey
  monkey.addEventListener("click", () => {
    console.log("Monkey clicked!");
    if (isClimbing) return;

    isClimbing = true;
    monkey.style.transition = `bottom ${climbDuration / 1000}s ease-in-out`;
    monkey.style.bottom = climbHeight;

    setTimeout(() => {
      monkey.style.bottom = "10px";
      setTimeout(() => {
        isClimbing = false;
      }, climbDuration);
    }, climbDuration);
  });
}
