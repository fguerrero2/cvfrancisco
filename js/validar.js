window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("enviodatos");
    boton.onclick = validarFormulario;

    // Agregar el evento de escucha para el envío del formulario
    document.querySelector("form").addEventListener("enviodatos", validarEnvioreCAPCHA);

};

// Función para validar el formulario.
function validarFormulario()
{
    var nombre = document.getElementById("nombre");
    if(nombre.value == "")
    {
      alert("Ingrese un dato en el campo 'Nombre'");
      return;
    }

    var apellido = document.getElementById("apellido");
    if(apellido.value == "")
    {
      alert("Ingrese un dato en el campo 'Apellido'");
      return;
    }

    var email = document.getElementById("email");
    if(email.value == "")
    {
      alert("Ingrese un dato en el campo 'E-mail'");
      return;
    }

    var telefono = document.getElementById("telefono");
    if(telefono.value == "")
    {
      alert("Ingrese un dato en el campo 'Telefono'");
      return;
    }

    var motivo = document.getElementById("Motivo");
    if(motivo.value == "")
    {
      alert("Ingrese un dato en el campo 'Motivo'");
      return;
    }

    
    var formulario = document.getElementById("respuesta");
    formulario.submit();
}








// Función para validar el formulario y verificar reCAPCHA
function validarEnvioreCAPCHA(event) {
    event.preventDefault();
    
    // Verificar si el captcha ha sido resuelto
    if (grecaptcha.getResponse().length === 0) {
      alert("Por favor, completa el captcha.");
    } else {
      // El captcha ha sido resuelto, puedes enviar el formulario
      // Aquí puedes agregar tu código para enviar el formulario al servidor
      // ...
    }
  }