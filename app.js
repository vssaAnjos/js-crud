// console.log('funcionando');
// Variaveis Globais
const formularioUI = document.querySelector('#formulario'); // seleciona tambem classes
const listaTarefas = document.getElementById('listaTarefas'); // seleciona só ids
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

