const tabs = document.querySelectorAll(".tabs");

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener("click", e => {
      const target = e.target.closest("[data-tab-button]");
      if (!target) return;
      const captionId = target.dataset.tabButton;
      const content = tab.querySelector(`[data-tab-content='${captionId}']`);
      if (!content) return;

      const buttons = tab.querySelectorAll("[data-tab-button]");
      buttons.forEach(button => button.classList.remove("active-tab-button"));

      const contents = tab.querySelectorAll("[data-tab-content]");
      contents.forEach(tabContent => tabContent.classList.remove("active-tab-content"));

      target.classList.add("active-tab-button");
      content.classList.add("active-tab-content");
    });
  }
});
