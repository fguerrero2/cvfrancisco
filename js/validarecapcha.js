
// Agregar el evento de escucha para el envío del formulario
document.querySelector("form").addEventListener("submit", validarFormulario);



// Función para validar el formulario y verificar reCAPCHA
function validarFormulario(event) {
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