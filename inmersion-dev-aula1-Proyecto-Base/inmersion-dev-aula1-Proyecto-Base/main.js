let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*+-!#$%&/()=?¡¿';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return; 
    }
    
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarFuerzaContrasena(password);
}

function limpiarCampos() {
    cantidad.value = '';
    contrasena.value = '';

    alert("Los campos se han limpiado correctamente.");
}


function validarFuerzaContrasena(password) {
    let mensaje = '';
    
 
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneSimbolo = /[@*+\-!#$%&/()=?¡¿]/.test(password);

    if (password.length < 8) {
        mensaje = "La contraseña es débil.";
    } else if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo) {
        mensaje = "La contraseña es fuerte.";
    } else {
        mensaje = "La contraseña es moderada.";
    }

    alert(mensaje);
}

boton.addEventListener('click', generar);
limpiar.addEventListener('click', limpiarCampos);
