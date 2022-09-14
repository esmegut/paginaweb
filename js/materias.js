(function(){
    const titleMaterias = [...document.querySelectorAll('.materias__title')];
    console.log(titleMaterias)

    titleMaterias.forEach(materias =>{
        materias.addEventListener('click', ()=>{
            let height = 0;
            let answer = materias.nextElementSibling;
            let addPadding = materias.parentElement.parentElement;

            addPadding.classList.toggle('materias__padding--add');
            materias.children[0].classList.toggle('materias__icono--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();