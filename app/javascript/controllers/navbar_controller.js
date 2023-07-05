import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  scrollTo(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  redirectTo() {
    window.location.href = "/";
  }
}
