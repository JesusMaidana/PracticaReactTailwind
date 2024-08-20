import { NewArticle } from "./NewArticle";


export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] col-span-12 md:col-span-3 border-2 border-green-500 md:h-auto">
        <h1 className="text-SoftOrange text-4xl">Próximos Shows</h1>
        
       <div className="space-y-6 sm:space-y-8">
        <NewArticle
          title='Hydrogen VS Electric Cars'
          text='Will hydrogen-fueled cars ever catch up to EVs?'
        />
        <NewArticle
          title='The Downsides of AI Artistry'
          text='What are the possible adverse effects of on-demand AI image generation?'
        />
        <NewArticle
          title='Is VC Funding Drying Up?'
          text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        />
      </div>
    </aside>
  )
}









