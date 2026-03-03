// Array central de links
const LINKS = [
    { id: "btn1", link: "https://docs.google.com/spreadsheets/d/1CeRwx7rge749MRhPrsKJOmMl95k9_NPMMTtuVDI0LWM/edit?pli=1&gid=1486964420#gid=1486964420" },
    { id: "btn2", link: "https://ifpr.edu.br/colombo/wp-content/uploads/sites/9/2026/01/Calendario_Academico_de_Referencia_PROENS__2026____Campus_Colombo___Calendario_2026__1.pdf" },
    { id: "btn3", link: "https://ifpr.edu.br/colombo/wp-content/uploads/sites/9/2022/12/PPC-DO-TADS-APROVADO-PELO-CONSEPE-52-2022.pdf" },
    { id: "btn4", link: "https://chat.whatsapp.com/BajOLa9f8Wt16GkUrXjx6Y?mode=gi_t" },
    { id: "btn5", link: "" }
];

// Função que aplica os links
LINKS.forEach(item => {
    const element = document.getElementById(item.id);

    if (element) {
        element.addEventListener("click", async function (event) {
            event.preventDefault();

            if (item.id === "btn5") {
                try {
                    await navigator.clipboard.writeText("4wtnzemk");
                    alert("Código copiado para a área de transferência!");
                } catch (err) {
                    alert("Não foi possível copiar automaticamente.");
                    console.error(err);
                }
            } else {
                window.open(item.link, "_blank");
            }
        });
    }
});
