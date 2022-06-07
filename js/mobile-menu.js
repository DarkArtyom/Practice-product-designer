(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-button"),
    closeMenuBtn: document.querySelector(".mobile-button"),
    menu: document.querySelector(".modal-mobile"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
