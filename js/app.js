// Ejemplo de JavaScript del lado del cliente (en tu archivo HTML)
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('validacionCedula');
  const resultadoValidacion = document.getElementById('resultadoValidacion');
  const inputCedula = document.getElementById('cedula');

  formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cedula = inputCedula.value;

    try {
      const response = await fetch('https://serviciocedula.onrender.com/validar-cedula', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cedula }),
      });

      const data = await response.json();

      if (response.ok) {
        resultadoValidacion.textContent = data.mensaje;
      } else {
        resultadoValidacion.textContent = data.error;
      }
    } catch (error) {
      console.error('Error al validar la cédula:', error);
      resultadoValidacion.textContent = 'Ocurrió un error al validar la cédula.';
    }
  });
});