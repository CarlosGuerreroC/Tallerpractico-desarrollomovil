//Funciones tradicionales en JavaScript
function Hello(name) {
    return `Hello, ${name}! welcome this class`;
};

function CalAverage(grades) {
    const sum = grades.reduce((acc, rec) => acc + rec, 0);
    return sum / grades.length;
}

//Funciones tipo flecha en JavaScript
const Obtenerestado = (promedio) => {
    if (promedio <= 3) return "Reprobado";
    else if ((promedio >= 3.1) && (promedio < 4)) return "Aceptable";
    else return "Excelente";
};

const Mostrarreporte = (estudiante) => {
    const prom = CalAverage(estudiante.calificaciones);
    const estado = Obtenerestado(prom);
    console.log(`Estudiante: ${estudiante.nombre}, Promedio: ${prom}, Estado: ${estado}`);
}

//Objeto de estudiantes
const objEstudiante = [
    { nombre: "Juan", Asignatura: "Matemáticas", calificaciones: [3, 1, 2, 4, 5] },
    { nombre: "Maria", Asignatura: "Matemáticas", calificaciones: [4, 4, 5, 5, 5] },
    { nombre: "Pedro", Asignatura: "Matemáticas", calificaciones: [2, 3, 4, 5, 5] },
]

objEstudiante.forEach(Mostrarreporte);