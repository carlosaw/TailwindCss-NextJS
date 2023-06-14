const Page = () => (

  <div className="container mx-auto">

  <div className="grid w-full bg-gray-800 p-4 gap-4 md:grid-cols-2">
    <div className="
      w-full 
      h-60 
      bg-cover 
      bg-center
      rounded-md
      md:w-4/4
      bg-[url(https://www.smalldesignideas.com/wp-content/uploads/2015/02/stone-house-facade-design.jpg)]">
    </div>

    <div className="grid grid-cols-2 w-full h-60 gap-4 md:grid-cols-1">
      <div className="
        w-full 
        bg-cover 
        bg-center
        rounded-md
        bg-[url(https://images.adsttc.com/media/images/58f9/7c3c/e58e/cea0/5200/04e5/large_jpg/feature_image.jpg?1492745271)]">
      </div>

      <div className="
        bg-cover 
        bg-center
        rounded-md
        bg-[url(https://s-media-cache-ak0.pinimg.com/originals/04/52/26/045226de010415e7db45df48848abfd7.jpg)]">
      </div>
    </div>

  </div>

  <div className="text-2xl font-bold mt-3">Título da casa</div>
  <div className="flex gap-2 mt-3">
    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
  </div>

    {/* <div className="p-3 rounded-md bg-gray-400">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="
        w-full 
        h-40 
        bg-cover 
        bg-center
        rounded-md
        md:col-span-2
        md:row-span-2
        md:h-full
        bg-[url(https://www.smalldesignideas.com/wp-content/uploads/2015/02/stone-house-facade-design.jpg)]"></div>


        <div className="
        w-full 
        h-40 
        bg-cover 
        bg-center
        rounded-md 
        bg-[url(https://images.adsttc.com/media/images/58f9/7c3c/e58e/cea0/5200/04e5/large_jpg/feature_image.jpg?1492745271)]"></div>

        <div className="
        w-full 
        h-40 
        bg-cover 
        bg-center
        rounded-md
        bg-[url(https://s-media-cache-ak0.pinimg.com/originals/04/52/26/045226de010415e7db45df48848abfd7.jpg)]"></div>
      </div>
      <div className="text-2xl font-bold mt-3">Título da casa</div>
      <div className="flex gap-2 mt-3">
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
      </div>
    </div> */}
  </div>

);

export default Page;