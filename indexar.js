let linkBase = "https://www.tokyvideo.com/es/video/zeynep-buscando-a-su-padre-capitulo-1";
let novoLink;
let corpoTabela = document.querySelector(".corpo-tabela")


for (let i = 6; i <=147; i++) {
    novoLink = linkBase.replace("capitulo-1", `capitulo-${i}`);

    //Criando linhas e céculas para adicionar na tabela
    let adicionarLinhaTabela = document.createElement("tr");
    let celulaTitulo = document.createElement("td")
    let linkEpisodio = document.createElement("a");


    let titulo = document.createTextNode(`Capítulo ${i}`); // descrição que ficará dentro da tag A
    linkEpisodio.setAttribute("href", novoLink); // anexando o novo link na tag a
    linkEpisodio.appendChild(titulo); //anexando a descrição
    celulaTitulo.appendChild(linkEpisodio); //tr recebe tag a
    adicionarLinhaTabela.appendChild(celulaTitulo); //linha da tabela recebe o tr
    corpoTabela.appendChild(adicionarLinhaTabela); //tbody recebe o tr
}