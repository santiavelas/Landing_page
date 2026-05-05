/**
 * Navegación entre secciones
 */
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * BOTÓN VOLVER ARRIBA
 */
const scrollBtn = document.getElementById("scrollTopBtn");

// Mostrar botón al hacer scroll
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Acción del botón
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
