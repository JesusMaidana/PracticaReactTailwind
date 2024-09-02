import React from 'react';

const escuelas = [
  { id: 1, nombre: 'Escuela de Danza A' },
  { id: 2, nombre: 'Academia de Danza B' },
  { id: 3, nombre: 'Estudio de Danza C' },
  // Agrega más escuelas aquí
];

export const Escuelas = () => {
    return (
      <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Quienes confían en nosotros</h2>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6">
          {escuelas.map((escuela) => (
            <div key={escuela.id} className="flex-none w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0">
              <img src={escuela.logo} alt={escuela.nombre} className="max-w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </section>
    );
  };