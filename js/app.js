const btnAgregar = document.querySelector('.btnAgregar');
const listaTarea = document.querySelector('.lista-tarea');

const textoInput = document.querySelector('.textoInput')
const lista = document.querySelector('.lista');


let total = 0;

eventos();
function eventos(){
    btnAgregar.addEventListener('click', agregarTarea);
    
}

function agregarTarea(){
   
    const li = document.createElement('li');
    const btnEliminar = document.createElement('button');
    const btnTachar = document.createElement('button');
    const botones = document.createElement('div');
    const texto = textoInput.value;
    textoInput.value = '';
    
    if(texto == ''){
        return 0;
    }
    
    li.textContent = texto;

    botones.classList.add('botones-agregar-eliminar');

    btnEliminar.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnTachar.innerHTML = `<i class="fa-solid fa-check"></i>`;
    btnTachar.classList.add('check');
    listaTarea.append(li);
    li.appendChild(botones)
    botones.appendChild(btnEliminar);
    botones.appendChild(btnTachar);

    btnEliminar.addEventListener('click', () => {
        li.remove();
    });

    btnTachar.addEventListener('click',() => {
        // li.style.textDecoration = 'line-through';
        li.classList.toggle('text');
        
    })
      
}
