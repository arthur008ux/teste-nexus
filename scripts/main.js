document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("bodyTema");
    const switchTema = document.getElementById("tema");

    // Ativa o modo escuro por padrão (trabalho do cão)
    body.classList.add("dark");
    switchTema.checked = true;

    // Toggle entre claro e escuro
    switchTema.addEventListener("change", () => {
        body.classList.toggle("dark");
    });
});


// Alterna menu mobile
function toggleMenu(element) {
    element.classList.toggle("active");
    document.getElementById("menuItens").classList.toggle("active");
}
