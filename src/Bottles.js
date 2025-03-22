import assets from "./assets";

const Bottles = [
  {
    nombre: assets.bottleSpecial1.nombre,
    descripcion: assets.bottleSpecial1.description,
    imageUrls: {
      large: assets.bottleSpecial1.imageURL,
    },
    productUrl: "/detalle-producto1",
  },
  {
    nombre: assets.bottleSpecial2.nombre,
    descripcion: assets.bottleSpecial2.description,
    imageUrls: {
      large: assets.bottleSpecial2.imageURL,
    },
    productUrl: "/detalle-producto2",
  },
  {
    nombre: assets.bottleSpecial3.nombre,
    descripcion: assets.bottleSpecial3.description,
    imageUrls: {
      large: assets.bottleSpecial3.imageURL,
    },
    productUrl: "/detalle-producto3",
  },
  {
    nombre: "Project 4",
    descripcion: "Elegant branding solutions.",
    imageUrls: {
      // opciones para múltiples tamaños
      // small: assets.bottle3, // Ruta para la imagen pequeña
      large: assets.bottleSpecial,
    },
    productUrl: "/detalle-producto3",
  },
];

export default Bottles;
