# TADS ’26 | Central de Links

Página estática desenvolvida para concentrar os principais documentos e recursos do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) – 2026, do Instituto Federal do Paraná – Campus Colombo.

A proposta é simples: acesso direto, rápido e organizado às informações mais utilizadas pelos estudantes.

---

## Visão Geral

O projeto funciona como uma central de links minimalista, com identidade visual marcante e estrutura enxuta.
Os botões são controlados via JavaScript por meio de um array central, facilitando manutenção e expansão.

---

## Funcionalidades

* Layout responsivo
* Estética inspirada em neobrutalismo
* Links gerenciados por array no JavaScript
* Abertura automática em nova aba
* Estrutura modular e fácil de manter

---

## Estrutura do Projeto

```
/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── ifpr-logo.png
│   └── scripts/
│       └── btns.js
```

---

## Organização dos Links

Os links são definidos no arquivo:

```
/assets/scripts/btns.js
```

Exemplo de estrutura:

```javascript
const LINKS = [
    { id: "btn1", link: "URL_AQUI" },
    { id: "btn2", link: "URL_AQUI" },
    { id: "btn3", link: "URL_AQUI" }
];
```

Cada botão no HTML possui apenas um `id`.
O script associa automaticamente cada botão ao link correspondente e realiza a abertura em nova aba.

Essa abordagem mantém o HTML limpo e centraliza a lógica de navegação em um único ponto.

---

## Personalização

Para alterar os links:

1. Abra `btns.js`
2. Substitua as URLs no array `LINKS`

Para alterar o visual:

* Edite `style.css`
* É possível adicionar imagem de fundo diretamente no `body` ou via `background-image`

---

## Objetivo do Projeto

Facilitar o acesso a:

* Horários de aula
* Calendário acadêmico
* Projeto pedagógico do curso

Mantendo uma interface direta, sem distrações e de carregamento rápido.

---

## Licença

Uso acadêmico e livre para adaptação.

---