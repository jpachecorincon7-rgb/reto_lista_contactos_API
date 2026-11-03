// URL de la API pública solicitada
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Función para obtener y renderizar los datos
async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const users = await response.json();
        
        // Mensaje requerido en la consola del navegador
        console.log("Los datos fueron obtenidos correctamente.");
        
        // Renderizar los datos en el HTML
        renderTable(users);
        
    } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
    }
}

// Función para mapear e insertar filas en la tabla
function renderTable(users) {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = ''; // Limpiar contenido previo si existiera

    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${user.name}</strong></td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', fetchUsers);