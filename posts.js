/* =========================================
   AGROBRASIL
   POSTS.JS
========================================= */


/* =========================================
   BANCO DE POSTS
========================================= */

const posts = [

    {
        id: 1,

        title: "Tecnologia transforma o campo brasileiro",

        category: "Tecnologia",

        date: "20/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🚜",

        excerpt:
            "Novas tecnologias estão ajudando produtores a aumentar a produtividade e tomar decisões mais eficientes no campo."
    },


    {
        id: 2,

        title: "Boas práticas para melhorar o manejo do gado",

        category: "Pecuária",

        date: "18/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🐂",

        excerpt:
            "Conheça práticas de manejo que podem contribuir para o bem-estar animal e melhorar os resultados da produção."
    },


    {
        id: 3,

        title: "Agricultura brasileira ganha espaço com inovação",

        category: "Agricultura",

        date: "15/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🌱",

        excerpt:
            "A inovação vem ocupando um papel cada vez mais importante na produção agrícola brasileira."
    },


    {
        id: 4,

        title: "O papel da sustentabilidade no agronegócio",

        category: "Agricultura",

        date: "12/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🌾",

        excerpt:
            "Produzir mais e preservar os recursos naturais são desafios importantes para o futuro do agronegócio."
    },


    {
        id: 5,

        title: "Genética bovina e evolução da pecuária",

        category: "Pecuária",

        date: "10/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🐄",

        excerpt:
            "O melhoramento genético pode contribuir para rebanhos mais eficientes e produtivos."
    },


    {
        id: 6,

        title: "Agricultura de precisão: o campo mais inteligente",

        category: "Tecnologia",

        date: "08/08/2026",

        author: "Equipe AgroBrasil",

        emoji: "🛰️",

        excerpt:
            "Sensores, dados e equipamentos modernos estão mudando a maneira como diversas propriedades são administradas."
    }

];


/* =========================================
   ELEMENTOS
========================================= */

const postsContainer =
    document.getElementById("postsContainer");

const filters =
    document.querySelectorAll(".filter");

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.querySelector(".navigation");

const currentYear =
    document.getElementById("currentYear");


/* =========================================
   RENDERIZAR POSTS
========================================= */

function renderPosts(category = "Todos") {

    if (!postsContainer) {
        return;
    }

    const filteredPosts =
        category === "Todos"
            ? posts
            : posts.filter(
                post => post.category === category
            );


    if (filteredPosts.length === 0) {

        postsContainer.innerHTML = `
            <div class="no-posts">
                <h3>Nenhum conteúdo encontrado</h3>
                <p>
                    Ainda não existem artigos nessa categoria.
                </p>
            </div>
        `;

        return;
    }


    postsContainer.innerHTML =
        filteredPosts.map(post => {

            return `

                <article class="post-card">

                    <div class="post-image">
                        ${post.emoji}
                    </div>

                    <div class="post-content">

                        <span class="post-category">
                            ${post.category}
                        </span>

                        <h3>
                            ${post.title}
                        </h3>

                        <p>
                            ${post.excerpt}
                        </p>

                        <div class="post-meta">

                            <span>
                                ${post.author}
                            </span>

                            <span>
                                ${post.date}
                            </span>

                        </div>

                    </div>

                </article>

            `;

        }).join("");
}


/* =========================================
   FILTROS
========================================= */

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.category;

        renderPosts(category);

    });

});


/* =========================================
   MENU MOBILE
========================================= */

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}


/* Fechar menu ao clicar em um link */

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


/* =========================================
   ANO AUTOMÁTICO
========================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

renderPosts();

