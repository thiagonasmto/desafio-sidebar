const activedNav = document.querySelector('.actived');

activedNav.addEventListener('click', () => {
    const menu = document.querySelector('nav');
    const logoVet = document.querySelector('.logo-vet');
    const menuPerfil = document.querySelector('.menu--perfil');
    const menuFooter = document.querySelector('.menu--footer');
    const menuPesquisar = document.querySelector('.menu--pesquisar');
    const menuHeader = document.querySelector('.menu--header');

    document.querySelectorAll('.text-topics').forEach(function(element){
        element.classList.toggle('visibility');
    });

    document.querySelectorAll('.menu--default').forEach(function(element){
        element.classList.toggle('menu--default-open');
    });
    
    menu.classList.toggle('open-menu');
    logoVet.classList.toggle('visibility');
    menuPerfil.classList.toggle('visibility-flex');
    menuFooter.classList.toggle('visibility-flex-footer');
    menuPesquisar.classList.toggle('visibility-flex-footer');
    menuHeader.classList.toggle('menu--header-open');
    console.log(activedNav);
});