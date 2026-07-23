function cerrarMenu(nav) {
  if (!nav) return;
  nav.classList.remove("abierto");
  document.body.classList.remove("menu-abierto");
  const boton = nav.querySelector(".nav-toggle");
  if (boton) boton.setAttribute("aria-expanded", "false");
}

document.querySelectorAll(".nav-toggle").forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.stopPropagation();
    const nav = boton.closest("nav.nav-princ");
    if (!nav) return;
    const abierto = nav.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    document.body.classList.toggle("menu-abierto", abierto);
  });
});

document.querySelectorAll("nav.nav-princ a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    cerrarMenu(enlace.closest("nav.nav-princ"));
  });
});

document.addEventListener("click", (e) => {
  const nav = document.querySelector("nav.nav-princ.abierto");
  if (!nav) return;
  if (!nav.contains(e.target)) cerrarMenu(nav);
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const nav = document.querySelector("nav.nav-princ.abierto");
  if (nav) cerrarMenu(nav);
});
