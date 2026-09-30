document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".contact-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const original = button.textContent;

      button.textContent = "Request sent";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        form.reset();
      }, 1800);
    });
  });
});
