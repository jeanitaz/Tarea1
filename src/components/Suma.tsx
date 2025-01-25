import { useState } from "react";


export const Suma = () => {

    const [sideLength, setSideLength] = useState(0);
    const [area, setArea] = useState(0);
  
    const Area = (side: number) => {
        setArea(side ** 2);
      };
  return (
   
    <div>
      <h1>Calculadora de Área de un Cuadrado</h1>
      <input
            type="number"
            placeholder="Ingresa la longitud del lado"
            value={sideLength}
            onChange={(e) => setSideLength(Number(e.target.value))}
/>

      <button onClick={() => Area(Number(sideLength))}>Calcular Área</button>
      <p>Área: {area}</p>
    </div>
  );
}
