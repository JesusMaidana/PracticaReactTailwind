export const NewArticle = ({ title, text, image }) => {
  return (
    <article className="sm:flex sm:flex-row-reverse sm:items-center h-auto border-b-2 border-GrayishBlue py-7 last:border-none lg:h-auto lg:py-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-auto sm:w-1/2 sm:h-auto object-cover mb-4 mx-auto sm:mb-0 sm:ml-4"
        />
      )}
      
      <div className="sm:w-1/2">
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
