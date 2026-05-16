const toggleButton = document.getElementById("toggleButton");
const ideaPanel = document.getElementById("ideaPanel");

if (toggleButton && ideaPanel) {
  toggleButton.addEventListener("click", () => {
    ideaPanel.classList.toggle("hidden");
    toggleButton.textContent = ideaPanel.classList.contains("hidden")
      ? "Show Quick Ideas"
      : "Hide Quick Ideas";
  });
}
