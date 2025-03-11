import React from "react";
import Botella from "./Botella";
import AllWork from "./AllWork";

const Work = ({ productos }) => {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="work">
      {productos.map((producto, index) => (
        <Botella
          key={index}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          imageUrls={producto.imageUrls}
          productUrl={producto.productUrl}
        />
      ))}
      {/* Incorporamos AllWork al final */}
      <AllWork />
    </div>
  );
};

export default Work;
