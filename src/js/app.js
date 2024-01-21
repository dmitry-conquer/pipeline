import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import MicroModal from "micromodal";
import "./modules/sliders.js";
import "./modules/tabs.js";

function app() {
  useDynamicAdapt("max");

  /**
   *
   * Burger menu
   *
   */
  const burgToggleBtn = document.getElementById("burg-toggle");
  const headerBody = document.getElementById("header-body");
  if (burgToggleBtn) {
    burgToggleBtn.addEventListener("click", () => {
      burgToggleBtn.classList.toggle("active");
      headerBody.classList.toggle("active");
    });
  }

  /**
   *
   * Toggle pricing
   *
   */
  const priceButtons = document.querySelectorAll(".pricing__button");
  function togglePricingPlan() {
    // toggle active button
    const priceLabel = document.getElementById("pricing-label");
    priceButtons.forEach(button => button.classList.remove("active-button"));
    this.classList.add("active-button");
    priceLabel.style.transform = `translateX(${this.dataset.planIndex * 100}%)`;

    // toggle pricing plan
    const pricePlans = document.querySelectorAll("[data-price-index]");
    pricePlans.forEach(el => {
      el.style.display = "none";
    });
    const currentPricePlan = document.querySelectorAll(`[data-price-index="${this.dataset.planIndex}"]`);
    currentPricePlan.forEach(el => {
      el.style.display = "block";
    });
  }

  priceButtons.forEach(button => {
    if (button) {
      button.addEventListener("click", togglePricingPlan);
    }
  });

  /**
   *
   * Spoilers (FAQ section)
   *
   */
  const spoilerTriggers = document.querySelectorAll(".spoiler-trigger");
  function showSpoiler() {
    this.classList.toggle("active-spoiler");
    const spoilerContent = this.nextElementSibling;
    spoilerContent.classList.toggle("active-spoiler-content");
    const isExpanded = spoilerContent.classList.contains("active-spoiler-content");
    spoilerContent.style.maxHeight = isExpanded ? `${spoilerContent.scrollHeight}px` : "0px";
  }

  spoilerTriggers.forEach(trigger => {
    if (trigger) {
      const spoilerContent = trigger.nextElementSibling;
      if (spoilerContent.classList.contains("active-spoiler-content")) {
        spoilerContent.style.maxHeight = `${trigger.nextElementSibling.scrollHeight}px`;
      }
      trigger.addEventListener("click", showSpoiler);
    }
  });

  /**
   *
   * Tabs
   *
   */
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

  /**
   *
   * Popup
   *
   */
  const formPopup = document.getElementById("form-popup");
  if (formPopup) {
    const formPopupDelay = 1;
    setTimeout(() => {
      MicroModal.show("form-popup", {
        disableScroll: true,
        disableFocus: true,
      });
    }, formPopupDelay * 1000);
  }

  /**
   *
   * AOS lib
   *
   */
  AOS.init({
    once: true, 
  });
}
document.addEventListener("DOMContentLoaded", app);
