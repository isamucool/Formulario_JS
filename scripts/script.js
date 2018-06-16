var inputNombre = document.getElementById('nombre');
var inputApellido = document.getElementById('apellido');
var inputPassword = document.getElementById('password');

var boton = document.getElementById('button');
boton.addEventListener('click', handle);
function handle(e){
    console.log(inputNombre.value)
}
