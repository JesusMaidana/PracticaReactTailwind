import React from 'react';

const testimonios = [
  { id: 1, nombre: 'Juan Pérez', comentario: 'El servicio de foto y video para nuestro show de danza fue excelente. Las imágenes y los videos capturaron cada momento a la perfección.' },
  { id: 2, nombre: 'Ana Gómez', comentario: 'Profesionalismo y creatividad en cada toma. Estamos muy satisfechos con el resultado final.' },
  { id: 3, nombre: 'Carlos Martínez', comentario: 'Recomendamos ampliamente su servicio. El equipo fue puntual y muy atento a nuestras necesidades.' },
  // Agrega más testimonios aquí
];

export const Testimonios = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Lo que dicen nuestros clientes</h2>
      <div className="space-y-6">
        {testimonios.map((testimonio) => (
          <div key={testimonio.id} className="p-4 border rounded-lg shadow-sm">
            <p className="text-lg italic">"{testimonio.comentario}"</p>
            <p className="mt-2 font-semibold text-right">- {testimonio.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
