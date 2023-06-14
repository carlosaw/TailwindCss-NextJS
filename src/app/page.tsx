const Page = () => (

  <div className="container mx-auto bg-white-500">

    <div className="p-3 rounded-md bg-gray-400 mt-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 md:row-span-2 md:h-full border-2 border-cyan-800 rounded-md w-full h-60 mb-3 bg-cover bg-center bg-[url(https://www.smalldesignideas.com/wp-content/uploads/2015/02/stone-house-facade-design.jpg)]"></div>
        <div className="md:ml-3 md:grid-cols-1 grid grid-cols-2 gap-3">
          <div className="border-2 border-cyan-800 rounded-md w-full h-60 bg-cover bg-center bg-[url(https://images.adsttc.com/media/images/58f9/7c3c/e58e/cea0/5200/04e5/large_jpg/feature_image.jpg?1492745271)]"></div>
          <div className="border-2 border-cyan-800 rounded-md w-full h-60 bg-cover bg-center bg-[url(https://s-media-cache-ak0.pinimg.com/originals/04/52/26/045226de010415e7db45df48848abfd7.jpg)]"></div>        
        </div>
      </div>
      
      <div className="text-2xl font-bold mt-3 text-cyan-800">Título da casa</div>
      <div className="flex gap-2 mt-3">
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
      </div>

    </div>

  </div>

);

export default Page;