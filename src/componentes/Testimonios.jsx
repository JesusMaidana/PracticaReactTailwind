import React from "react";
import ImagenJanet from '../assets/images/ImagenesTestimonios/janet.jpg';
import ImagenEsmeralda from '../assets/images/ImagenesTestimonios/Esmeralda.jpg';
import ImagenMartina from '../assets/images/ImagenesTestimonios/martina.jpg';
import ImagenPaula from '../assets/images/ImagenesTestimonios/Paula.jpg';


const testimonios = [
  {
    id: 1,
    nombre: "@gabrielajanet.molina",
    comentario:
      "Lograron escuchar mi pedido, cuidar de mi imagen eligiendo lugares apropiados para lo que quería mostrar, estuvieron en cada detalle previo durante y posterior a la producción! Su trabajo fue mucho más de lo imaginado y mejor aún es que son un equipo de calidad humana hermosa! Estoy feliz con ver el resultado y lo impactante que fue para mí ❤️❤️🙌🫂",
    foto: ImagenJanet,
  },
  {
    id: 2,
    nombre: "@Esmeralda.bellydance",
    comentario:
      "Vengo a recomendarles que contraten a Shukran porque SON TODO LO QUE ESTÁ BIEN😍💜. El trabajo que hacen es INCREÍBLE. Si están buscando profesionales para hacer un audiovisual, llegaron a las personas indicadas. Mar y Jesu son lo más, súper organizados, profesionales, atentos, buena onda, te van guiando y ayudando para que durante la grabación estés suelta, te diviertas, lo disfrutes, te luzcas y el resultado de eso (más toda la edición hermosísima que hacen) sea un audiovisual original, elegante, único y súper súper lindo. SÚPER RECOMENDABLES💜",
    foto: ImagenEsmeralda,
  },
  {
    id: 3,
    nombre: "@kamra.bellydancer",
    comentario:
      "Hace poquito realice mi 1era Producción con ellos, y tengo que destacar su profesionalismo. Estuvieron en cada detalle, desde el día uno que comenté mi idea, hasta el día que ví la producción final! Un Espectáculo, lo juro!! Simplemente Maravillosos , un gran equipo sin ninguna duda!",
    foto: ImagenPaula,
  },
  {
    id: 4,
    nombre: "@martistringa",
    comentario:
      "Super recomendable su trabajo, la calidad de fotos y videos es buenísima y profesional. Su calidad humana para trabajar es excelente, te hacen sentir cómodx, disfrutas del proceso de crear y de hacer lo que te gusta, hice varios trabajos con ellos y siempre me fui feliz a casa ❤️ Son responsables con las fechas de entrega y cuando te dan el material no podes evitar mirarlo 1000 veces 🫶🏻 Son lo máximo",
    foto: ImagenMartina,
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
            className="flex flex-col items-center sm:flex-row sm:items-start p-4 border rounded-lg shadow-sm"
          >
            <img
              src={testimonio.foto}
              alt={testimonio.nombre}
              className="w-16 h-16 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4" // Espaciado ajustado
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg italic">"{testimonio.comentario}"</p>
              <p className="mt-2 font-semibold">{testimonio.nombre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
