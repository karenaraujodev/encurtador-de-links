const input = document.querySelector("#link");
const res = document.querySelector("#resultado");
const botao = document.querySelector("#botao");

botao.addEventListener('click', function(){
    const linkOriginal = input.value;
    const codigo = Math.random().toString(36).substring(2, 8);
    const linkCurto = `https://encurta.me/${codigo}`
    res.innerHTML = `<a href="${linkCurto}" target="_blank">${linkCurto}</a>`;

})