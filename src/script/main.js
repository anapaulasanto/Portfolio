//btn mode

const btn = document.querySelector('.btn-mode');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const aboutTitle = document.querySelector('.about-title');
const titleAboutMe = document.querySelector('.title-about-me');
const btnMode = document.querySelector('.btn-mode');
const btnCv = document.querySelector('#btn-cv');
const downTitleAboutMe = document.querySelector('.down-title');
const subtitleAboutMe = document.querySelector('.subtitle-about-me');
const titleProjects = document.querySelector('.title-projects');
const downTitleProjects = document.querySelector('.down-title-projects');
const subtitleProjects = document.querySelector('.subtitle-projects');
const titleContato = document.querySelector('.title-contato');
const downContato = document.querySelector('.down-contato');
const subtitleContato = document.querySelector('.subtitle-contato');
const bgHeader = document.querySelector('.bg-header');

btn.onclick = function () {
    this.classList.toggle('active')
    header.classList.toggle('active')
    main.classList.toggle('active')
    aboutTitle.classList.toggle('light-mode')
    titleAboutMe.classList.toggle('title-about-me-light')
    btnMode.classList.toggle('btn-light-mode')
    btnCv.classList.toggle('btn-cv-light')
    downTitleAboutMe.classList.toggle('down-title-light')
    downTitleProjects.classList.toggle('down-title-light')
    titleProjects.classList.toggle('title-about-me-light')
    subtitleProjects.classList.toggle('subtitle-light')
    subtitleAboutMe.classList.toggle('subtitle-light')
    titleContato.classList.toggle('title-about-me-light')
    downContato.classList.toggle('down-title-light')
    subtitleContato.classList.toggle('subtitle-light')
    bgHeader.classList.toggle('bg-header-light')

}

