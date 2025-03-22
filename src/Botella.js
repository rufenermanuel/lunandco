import React from 'react';

const Botella = ({ nombre, descripcion, imageUrls, productUrl, rotation }) => {
    return (
        <article 
            className="botella" 
            onClick={() => window.location.href = productUrl}
        >
            <div className="botella-imagen-container">
                <img 
                    src={imageUrls?.large || '/ruta-a-imagen-por-defecto-large.jpg'} 
                    alt={descripcion || 'Imagen del producto'} 
                    className="botella-imagen" 
                />
                <div className="botella-descripcion">
                    <div className="botella-titulo">
                        <h3>{nombre}</h3>
                    </div>
                    <div className="botella-detalles">
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Botella;



// Dejo comentadas las opciones de `srcSet` para múltiples tamaños
// sizes="100vw"
// srcSet={`
//     ${imageUrls?.small || '/ruta-a-imagen-por-defecto-small.jpg'} 480w,
//     ${imageUrls?.large || '/ruta-a-imagen-por-defecto-large.jpg'} 1000w
// `}
