

export const Calificaciones = () => {
    const alumnos = [
    {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];
const calcularPromedio = (alumnos) => {
    const sum = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return (sum / alumnos.length).toFixed(2);
};

const promedio = calcularPromedio(alumnos);
console.log(`El promedio de las calificaciones es: ${promedio}`);

  return (
    <div>Calificaciones</div>
  )
}

