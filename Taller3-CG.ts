//Punto1
//1.1
interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): void; 
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matematicas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogota',
    pais: 'Colombia'
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad} `;
  }
};

console.log(estudiante.mostrarInfo());


//1.2

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto:Producto = {
    id:1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle(){
        return`${this.nombre} cuesta $${this.precio} y hay ${this.stock}
        unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle());

//1.3

interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
    titulo:'Ävengers:Endgame',
    director: 'Antony y Joe Russo',
    duracion: 181,
    genero:'Accion',
    reproducir (){
        return `Reproduciendo: ${this.titulo} - Dirigida por 
        ${this.director}`;
    }

};

console.log(pelicula.reproducir());

//1.4

interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}


const vehiculo:Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corrolla',
    anio: 2022,
    encender(){
        return `${this.marca} ${this.modelo} esta encendido`;
    }
};

console.log(vehiculo.encender());

//1.5


interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}


const usuario: Usuario ={
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login(){
        return `Usuario ${this.username} ha iniciado sesion con roles:
        ${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());

//Punto2

// Se permite number o string
let myValue: number | string = 10;
console.log("myValue:", myValue);

// boolean en minúscula
let myBoolean: boolean = true;
console.log("myBoolean:", myBoolean);

// number (no string)
let healthPoints: number = 150;
console.log("healthPoints:", healthPoints);

// Literales de cadena bien definidos
let otherMultipleDataType: number | boolean | "myTag" | "otraEtiqueta" = "myTag";
console.log("otherMultipleDataType:", otherMultipleDataType);

// Evitar any: usar unknown si solo vamos a reasignar y loguear
let myVar: unknown;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

// const requiere inicialización
const myConstant: number = 123;
console.log("myConstant:", myConstant);

// Inferencia a string
let inferredDataType = "Texto inicial";
inferredDataType = "123";
console.log("inferredDataType:", inferredDataType);

// Boolean correcto
const isActive: boolean = true;
console.log("isActive:", isActive);

//Unión compatible; aquí usamos string
let mixed: number | string = "true";
console.log("mixed:", mixed);

// Evitar palabra reservada
let whileText: string = "Hola";
console.log("whileText:", whileText);

// number bien escrito
let myNumber: number = 10;
console.log("myNumber:", myNumber);

// Array de number
let numeros: number[] = [1, 2, 3];
console.log("numeros:", numeros);

// Tupla exacta [string, number]
let tupla: [string, number] = ["Hola", 123];
console.log("tupla:", tupla);

// Orden correcto en la tupla
let otraTupla: [boolean, string] = [true, "Hola"];
console.log("otraTupla:", otraTupla);

// Permitir null si se va a usar
let texto: string | null = "Hola mundo";
texto = null;
console.log("texto:", texto);

// NO ampliar el tipo literal: elegimos un valor permitido
let color: "rojo" | "verde" | "azul" = "azul";
console.log("color:", color);

// Para .toUpperCase() el valor debe ser string, no number/any
let valor: string = "10";
console.log("valor.toUpperCase():", valor.toUpperCase());

// Propiedad opcional declarada
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

// number debe tener un número (no undefined)
let edad: number = 19;
console.log("edad:", edad);

export {};
