document.getElementById('registro-form').addEventListener('submit', function(event) {
 
  const nombrePrograma = document.getElementById('nombre-programa').value;
  const codigoInstitucional = document.getElementById('codigo-institucional').value;
  const nivelFormacion = document.getElementById('nivel-formacion').value;
  const programaAcademico = document.getElementById('programa-academico').value;
  const coordinadorAcademico = document.getElementById('coordinador-academico').value;
  const estado = document.getElementById('estado').value;
  const duracion = document.getElementById('duracion').value;

  if (!nombrePrograma || !codigoInstitucional || !nivelFormacion || !programaAcademico || !coordinadorAcademico || !estado || !duracion) {
      alert('Por favor, complete todos los campos obligatorios.');
      event.preventDefault(); 
  }

  if (duracion <= 0) {
      alert('La duración debe ser un número positivo.');
      event.preventDefault();
      return;
  }

  alert('Formulario enviado correctamente!');
});
