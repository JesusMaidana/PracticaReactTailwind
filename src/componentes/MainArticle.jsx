import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/image-web-3-desktop.jpg';

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>
      <h2>The Bright Future of Web 3.0?</h2>
      <p>
        We dive into the next evolution of the web that claims to put the power of the platforms
        back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <button>Read more</button>
    </section>
  );
};
