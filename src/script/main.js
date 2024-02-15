//btn mode

const btn = document.querySelector('.btn-mode');
const header = document.querySelector('.header');
const aboutTitle = document.querySelector('.about-title');
const main = document.querySelector('.main');

btn.onclick = function () {
    this.classList.toggle('active')
    header.classList.toggle('active')
    aboutTitle.classList.toggle('active')
    main.classList.toggle('active')
}

// Icon transparent ao scrollar a pagina 
/*
    window.addEventListener("scroll", function() {
        const icon = document.querySelector('.icon');

        icon.classList.toggle('transparent', window.scrollY > 0);
    });
*/
