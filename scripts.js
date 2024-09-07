function toggleForm() {
    const formContainer = document.getElementById('form-container');
    const btnToggle = document.querySelector('.btn-toggle');
    
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        btnToggle.textContent = 'Cerrar Formulario';
    } else {
        formContainer.style.display = 'none';
        btnToggle.textContent = 'Publicar Oferta';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-jobs').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Obtén los valores de los campos del formulario
        let empresa = document.getElementById('empleador').value;
        let puestotrabajo = document.getElementById('jobTitle').value;
        let city = document.getElementById('City').value;
        let description = document.getElementById('description').value;

        // Muestra los datos en la página
        document.getElementById('Empresa-display').textContent = "Empresa: " + empresa;
        document.getElementById('Puesto-display').textContent = puestotrabajo;
        document.getElementById('ubicacion-display').textContent = "Ciudad: " + city;
        document.getElementById('Description-display').textContent = "Descripción/Requisitos: " + description;

        // Opcional: Limpia el formulario
        document.querySelector('#form-jobs').reset();
    });
});