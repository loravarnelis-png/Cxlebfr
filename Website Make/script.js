const signupForm = document.querySelector(".signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    const button = signupForm.querySelector("button");
    const input = signupForm.querySelector("input");

    if (!button || !input) {
      return;
    }

    if (!input.value.trim()) {
      event.preventDefault();
      return;
    }

    button.textContent = "Opening email...";
  });
}
