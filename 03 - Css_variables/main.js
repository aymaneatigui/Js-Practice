window.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelectorAll(".controls input");
  controls.forEach((input) => {
    input.addEventListener("change", () => {
      const suffix = input.dataset.sizing || "";
      document.documentElement.style.setProperty(
        `--${input.name}`,
        `${input.value}${suffix}`
      );
    });
  });
});
