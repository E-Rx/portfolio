import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  connect() {
    console.log("Hello World!");
  }

  scrollTo(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    // console.log(targetId);
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  redirectTo(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");

    window.location.href = "/";
  }
}
