export const NewArticle = ({ title, text, image }) => {
  return (
    <article className="h-auto border-b-2 border-GrayishBlue py-7 last:border-none lg:h-auto lg:py-4">
      {/* Imagen del flyer */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-50% h-50% sm:w-full sm:h-100% object-cover mb-4" // Ajustamos a una altura mayor
        />
      )}
      
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]">
        {title}
      </h2>
      <p className="text-[15px]">
        {text}
      </p>
    </article>
  );
};
