import React from "react";
import ImagenJanet from '../assets/images/ImagenesTestimonios/janet.jpg'


const testimonios = [
  {
    id: 1,
    nombre: "Janet",
    comentario:
      "Lograron escuchar mi pedido, cuidar de mi imagen eligiendo lugares apropiados para lo que quería mostrar, estuvieron en cada detalle previo durante y posterior a la producción! Su trabajo fue mucho más de lo imaginado y mejor aún es que son un equipo de calidad humana hermosa! Estoy feliz con ver el resultado y lo impactante que fue para mí ❤️❤️🙌🫂",
    foto: ImagenJanet, // Usar la variable aquí
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    comentario:
      "Profesionalismo y creatividad en cada toma. Estamos muy satisfechos con el resultado final.",
    foto: "url-foto-ana",
  },
  {
    id: 3,
    nombre: "Carlos Martínez",
    comentario:
      "Recomendamos ampliamente su servicio. El equipo fue puntual y muy atento a nuestras necesidades.",
    foto: "url-foto-carlos",
  },
  // Agrega más testimonios aquí
];

export const Testimonios = () => {
  return (
    <section className="p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Lo que dicen nuestros clientes
      </h2>
      <div className="space-y-6">
        {testimonios.map((testimonio) => (
          <div
            key={testimonio.id}
            className="flex items-start p-4 border rounded-lg shadow-sm"
          >
            <img
              src={testimonio.foto}
              alt={testimonio.nombre}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-lg italic">"{testimonio.comentario}"</p>
              <p className="mt-2 font-semibold">{testimonio.nombre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
