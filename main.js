const form= document.getElementById('form-tarefa');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');

    let linha = '<ul>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += `</ul>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

   

     $('li').on('click',function(){
        $(this).toggleClass('riscar');
     })
    

});
