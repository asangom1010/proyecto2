document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Mostrar u ocultar el botón según el scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Mostrar cuando scroll > 300px
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Volver al principio del sitio al hacer clic
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Desplazamiento suave
        });
    });
});

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    document.addEventListener("DOMContentLoaded", function () {
        const darkmode = document.querySelector(".dark-mode");
        const body = document.body;
      
        // Al cargar la página, revisa si existe una preferencia guardada
        const darkModePreference = localStorage.getItem("darkMode");
        if (darkModePreference === "true") {
          body.classList.add("active");
        }
      
        // Al hacer clic en el botón de modo oscuro/claro
        darkmode.addEventListener("click", () => {
          body.classList.toggle("active");
          // Guarda la preferencia en localStorage: "true" si el body tiene la clase "active"
          localStorage.setItem("darkMode", body.classList.contains("active"));
        });
      });
      
