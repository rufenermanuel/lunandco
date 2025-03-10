import React from "react";
import Botella from "./Botella";

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
    </div>
  );
};
export default Work;
