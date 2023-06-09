const Page = () => (
  
  
    <figure className="md:flex items-center bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-40 h-40 md:w-auto md:h-auto md:rounded-none rounded-full mx-auto" src="/bf.jpg" alt="" width="384" height="518" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
          “A preguiça anda tão devagar que a pobreza facilmente a alcança.”
          “Um irmão pode não ser um amigo, mas um amigo será sempre um irmão.”
          “Viver é enfrentar um problema atrás do outro.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Benjamin Franklin
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Político, EUA
          </div>
        </figcaption>
      </div>
    </figure>

 
)

export default Page;