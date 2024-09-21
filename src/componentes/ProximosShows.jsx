import { NewArticle } from "./NewArticle";
import ImagenSouthAmerica from "../assets/images/Flyers/SouthAmerica.jpg";
import ImagenJael from "../assets/images/Flyers/Jael.jpeg";
import ImagenRaqShine from "../assets/images/Flyers/RaqShine.jpeg";

export const ProximosShows = () => {
  return (
    <section className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] col-span-12 md:col-span-3 md:h-auto">
      <h1 className="text-SoftOrange text-4xl text-center sm:mb-2">Próximos Shows que Estaremos Cubriendo</h1>
      
      <div className="space-y-6 sm:space-y-8">
        <NewArticle
          title='Show de Danza Árabe en Buenos Aires'
          text='Ven a disfrutar del mejor espectáculo de danza árabe.'
          image={ImagenSouthAmerica}  // Aquí pasas la imagen importada
        />
        <NewArticle
          title='Noche de Bellydance en Córdoba'
          text='Un evento lleno de magia y ritmo.'
          image={ImagenJael}  // Puedes agregar más imágenes si tienes otras
        />
        <NewArticle
          title='Festival de Danzas Orientales'
          text='Un festival que reúne a los mejores bailarines del país.'
          image={ImagenRaqShine}
        />
      </div>
    </section>
  );
};


