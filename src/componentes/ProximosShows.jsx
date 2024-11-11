import { NewArticle } from "./NewArticle";
import ImagenSouthAmerica from "../assets/images/Flyers/SouthAmerica.jpg";
import ImagenJael from "../assets/images/Flyers/Jael.jpeg";
import ImagenRaqShine from "../assets/images/Flyers/RaqShine.jpeg";

export const ProximosShows = () => {
  return (
    <section className="bg-VeryDarkBlue text-OffWhite py-8 px-5">
      <h1 className="text-SoftOrange text-4xl text-center mb-6">Próximos Shows que Estaremos Cubriendo</h1>
      
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <NewArticle
          title="Show de Danza Árabe en Buenos Aires"
          text="Ven a disfrutar del mejor espectáculo de danza árabe."
          image={ImagenSouthAmerica}
        />
        <NewArticle
          title="Noche de Bellydance en Córdoba"
          text="Un evento lleno de magia y ritmo."
          image={ImagenJael}
        />
        <NewArticle
          title="Festival de Danzas Orientales"
          text="Un festival que reúne a los mejores bailarines del país."
          image={ImagenRaqShine}
        />
         <NewArticle
          title="Festival de Danzas Orientales"
          text="Un festival que reúne a los mejores bailarines del país."
          image={ImagenRaqShine}
        />
         <NewArticle
          title="Festival de Danzas Orientales"
          text="Un festival que reúne a los mejores bailarines del país."
          image={ImagenRaqShine}
        />
         <NewArticle
          title="Festival de Danzas Orientales"
          text="Un festival que reúne a los mejores bailarines del país."
          image={ImagenRaqShine}
        />
      </div>
    </section>
  );
};


