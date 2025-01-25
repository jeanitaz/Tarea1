

export const Retorno = (numeros: number[]) => {
  let suma = 0;
  
  for (const numero of numeros) {
    suma += numero;
  }

  return suma;
}
  
  export function Elementos() {
    const numeros = [26, 86, 50, 90, 5];
    const resultado = Retorno(numeros);
  
    return (
      <div>
        <p>La suma de los elementos es: {resultado}</p>
      </div>
    );
  }
