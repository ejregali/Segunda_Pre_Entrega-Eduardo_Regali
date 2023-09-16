/* Pequeña aplicacion para ingresar pacientes en un array y generar un ticket para imprimir como comprobante */

// Definición de la clase Paciente
class Paciente {
    constructor(nombre, apellido, documento, email, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.id = id;
    }

// Método para mostrar los datos del paciente
    mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Documento: ${this.documento}`);
    console.log(`Email: ${this.email}`);
    console.log(`ID: ${this.id}`);
    }

// Método para imprimir ticket de turno 

    ticket() {
        alert(
                `
                👤
                HC: ${this.id}
                Nombre: ${this.nombre}
                Apellido: ${this.apellido}
                Documento: ${this.documento}
                Email: ${this.email}

                🖨️ IMPRIMIR TICKET 🖨️
                `);
        }
}

// Array para almacenar los pacientes
const pacientes = [];

// Bucle para ingresar pacientes
while (true) {
    const nombre = prompt("Ingrese el nombre del paciente (o escriba 'salir' para terminar):");
    
// Verificar si el usuario quiere salir del bucle
if (nombre.toLowerCase() === "salir") {
    break;
}

const apellido = prompt("Ingrese el apellido del paciente:");
const documento = prompt("Ingrese el número de documento del paciente:");
const email = prompt("Ingrese el correo electrónico del paciente:");

// Generar un número aleatorio como ID
const id = Math.floor(Math.random() * 1000);

// Crear Paciente y agregarla al array
const paciente = new Paciente(nombre, apellido, documento, email, id);
pacientes.push(paciente);

alert(`Paciente con ID HC${id} agregado.`);

}
// Mostrar los datos de los pacientes ingresados en consola
console.log("Pacientes ingresados:");
pacientes.forEach((paciente) => {
paciente.mostrarDatos();
console.log("------------------------");
paciente.ticket();
});

