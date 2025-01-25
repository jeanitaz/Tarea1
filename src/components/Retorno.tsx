function sumarElementos(numeros: number[]): number {
    let suma = 0;
  
    for (const numero of numeros) {
      suma += numero;
    }
  
    return suma;
  }
    
    function Componente() {
      const numeros = [15, 30, 45, 60, 75];
      const resultado = sumarElementos(numeros);
    
      return (
        <div>
          <p>La suma de los elementos es: {resultado}</p>
        </div>
      );
    }
    
    export default Componente;