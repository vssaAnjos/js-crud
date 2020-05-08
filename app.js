// console.log('funcionando');
// Variaveis Globais
const formularioUI = document.querySelector('#formulario'); // seleciona tambem classes
const listaTarefasUI = document.getElementById('listaTarefas'); // seleciona só ids
let arrayAtividades = [];


// Funcoes
const CriarItem = (atividade) => {
    let item = {
        atividade : atividade,
        estado : false
    }
    arrayAtividades.push(item);
    return item;
} 

const GuardarDB = () => {
    localStorage.setItem('rotina',JSON.stringify(arrayAtividades));
    ExibirDB();
}

const ExibirDB = () => {
    listaTarefasUI.innerHTML = '';
    arrayAtividades = JSON.parse(localStorage.getItem('rotina'));
    console.log(arrayAtividades);
    if(arrayAtividades === null) {
        arrayAtividades=[];
    } else{
        arrayAtividades.forEach(element => {
            console.log(element);
            listaTarefasUI.innerHTML += `  <div class="alert alert-primary" role="alert">
                <span class="material-icons float-left mr-3">accessibility</span>
            <b> ${element.atividade}</b> - ${element.estado}
                <span class="float-right">
              <span class="material-icons">
                  check_circle_outline
              </span> 
              <span class="material-icons">
                  remove_circle_outline
                  </span>
            </span>
          </div>`
        });
    }
}

// EventListener
// para capturar o botão do tipo submit
formularioUI.addEventListener('submit',(e)=>{
    e.preventDefault();
    // capturar o input no textbox com id=atividade
    let atividadeUI = document.querySelector('#atividade').value;
    CriarItem(atividadeUI);
    GuardarDB();
    formularioUI.reset(); // reiniciar o formulario
});
// Evento do DOM
// Primeiro a executar quando carrega o HTML
document.addEventListener('DOMContentLoaded',ExibirDB);
