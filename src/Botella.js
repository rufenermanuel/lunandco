import React from "react";

const Botella = ({ nombre, descripcion, imageUrls, productUrl, rotation }) => {
    return (
        console.log(rotation),

    <div
      className="botella"
      onClick={() => (window.location.href = productUrl)}
      style={{ transform: `rotate(${rotation})` }}
    >
      <img
        // Dejamos comentadas las opciones de `srcSet` para múltiples tamaños
        // sizes="100vw"
        // srcSet={`
        //     ${imageUrls?.small || '/ruta-a-imagen-por-defecto-small.jpg'} 480w,
        //     ${imageUrls?.large || '/ruta-a-imagen-por-defecto-large.jpg'} 1000w
        // `}

        src={imageUrls?.large || "/ruta-a-imagen-por-defecto-large.jpg"}
        alt={descripcion || "Imagen del producto"}
        className="botella-imagen"
      />

      <div className="botella-zocalo">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Botella;
