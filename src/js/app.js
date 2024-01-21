import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import "./modules/tabs.js";
import "./modules/spoilers.js";

function app() {
  useDynamicAdapt("max");

  /**
   * Burger menu
   */
  const burgToggleBtn = document.getElementById("burg-toggle");
  const headerBody = document.getElementById("header-body");
  if (burgToggleBtn) {
    burgToggleBtn.addEventListener("click", () => {
      burgToggleBtn.classList.toggle("active");
      headerBody.classList.toggle("active");
    });
  }
}
document.addEventListener("DOMContentLoaded", app);
