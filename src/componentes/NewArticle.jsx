export const NewArticle = ({ title, text, image }) => {
  return (
    <article className="border-GrayishBlue py-7 last:border-none lg:py-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover mb-4 mx-auto"
        />
      )}
      
      <div>
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[25px] xl:text-[30px]">
          {title}
        </h2>
        <p className="text-[15px]">
          {text}
        </p>
      </div>

      
    </article>
  );
};
