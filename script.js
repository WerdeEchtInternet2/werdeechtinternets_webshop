const banner = document.getElementById("cookie-banner");
const button = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
  banner.hidden = false;
}

button.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  banner.hidden = true;
});
