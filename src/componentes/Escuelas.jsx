import React, { useEffect, useRef } from "react";
import zahra from "../assets/images/Logos/LOGOSINLUZDEFONDO.png"; // Ajusta la ruta según sea necesario
import BDW from "../assets/images/Logos/LOGO-BWF2024.png"; // Ajusta la ruta según sea necesario
import Jazba from "../assets/images/Logos/Jazba.png"; // Ajusta la ruta según sea necesario
import Maial from "../assets/images/Logos/Maial.png";
import Janet from "../assets/images/Logos/Janet.png";

const escuelas = [
  { id: 1, nombre: "Logo Janet", logo: Janet },
  { id: 2, nombre: "Logo Jazba", logo: Jazba },
  { id: 3, nombre: "Logo BDW", logo: BDW },
  { id: 4, nombre: "Logo Zahra", logo: zahra }, // Cambiado a "Zahra"
  { id: 5, nombre: "Logo Maial", logo: Maial }, // Cambiado a "Zahra"
  // Agrega más escuelas aquí
];

export const Escuelas = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      const speed = window.innerWidth <= 640 ? 0.7 : 0.5; // Velocidad ajustada para pantallas grandes
      scrollAmount += speed;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia el desplazamiento
      }
      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(scroll);
    };
    
    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Quienes confían en nosotros
      </h2>
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap"
        style={{ width: "100%", maxWidth: "100vw" }} // Fijar ancho máximo
      >
        <div className="flex flex-row items-center">
          {escuelas.map((escuela) => (
            <div
              key={escuela.id}
              className="inline-block flex-none w-1/4 mx-2"
            >
              <img
                src={escuela.logo}
                alt={escuela.nombre}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
          {escuelas.map((escuela) => (
            <div
              key={escuela.id + "-duplicate"}
              className="inline-block flex-none w-1/4 mx-2"
            >
              <img
                src={escuela.logo}
                alt={escuela.nombre}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
