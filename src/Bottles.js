import assets from "./assets";

const Bottles = [
  {
    nombre: "Project 1",
    descripcion: "Premium wine label design.",
    imageUrls: {
      // opciones para múltiples tamaños
      // small: assets.bottle1, // Ruta para la imagen pequeña
      large: assets.bottle1,
    },
    productUrl: "/detalle-producto1",
    rotation: "-70deg",
  },
  {
    nombre: "Project 2",
    descripcion: "Bold spirits packaging.",
    imageUrls: {
      // opciones para múltiples tamaños
      // small: assets.bottle2, // Ruta para la imagen pequeña
      large: assets.bottle2,
    },
    productUrl: "/detalle-producto2",
    rotation: "-118deg",
  },
  {
    nombre: "Project 3",
    descripcion: "Elegant branding solutions.",
    imageUrls: {
      // opciones para múltiples tamaños
      // small: assets.bottle3, // Ruta para la imagen pequeña
      large: assets.bottle3,
    },
    productUrl: "/detalle-producto3",
    rotation: "-68deg",
  },
];

export default Bottles;
