// Array central de links
const LINKS = [
    { id: "btn1", link: "https://docs.google.com/spreadsheets/d/1CeRwx7rge749MRhPrsKJOmMl95k9_NPMMTtuVDI0LWM/edit?pli=1&gid=1486964420#gid=1486964420" },
    { id: "btn2", link: "https://ifpr.edu.br/colombo/wp-content/uploads/sites/9/2026/01/Calendario_Academico_de_Referencia_PROENS__2026____Campus_Colombo___Calendario_2026__1.pdf" },
    { id: "btn3", link: "https://ifpr.edu.br/colombo/wp-content/uploads/sites/9/2022/12/PPC-DO-TADS-APROVADO-PELO-CONSEPE-52-2022.pdf" }
];

// Função que aplica os links
LINKS.forEach(item => {
    const element = document.getElementById(item.id);

    if (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            window.open(item.link, "_blank");
        });
    }
});
