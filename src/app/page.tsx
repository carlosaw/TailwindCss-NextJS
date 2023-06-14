const Page = () => (

  <div className="container mx-auto">
    
    <table className="w-full mx-2">
      <thead>
        <tr className="border-b text-left text-sm border-gray-500">
          <th className="py-2">Nome</th>
          <th className="hidden md:table-cell">Título</th>
          <th className="hidden md:table-cell">Email</th>
          <th>Função</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b text-left text-sm border-gray-500">
          <td className="py-2">
            <p className="font-bold text-cyan-300">Maria da Silva</p>
            <p className="block md:hidden text-gray-300">Cafezeira</p>
            <p className="block md:hidden text-gray-300">mariadocafe@gmail.com</p>
          </td>
          <td className="hidden md:table-cell text-gray-300">Cafezeira</td>
          <td className="hidden md:table-cell text-gray-300">mariadocafe@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">Editar</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm border-gray-500">
          <td className="py-2">
            <p className="font-bold text-cyan-300">Gregório da Silva</p>
            <p className="block md:hidden text-gray-300">Vigilante</p>
            <p className="block md:hidden text-gray-300">vigia@gmail.com</p>
          </td>
          <td className="hidden md:table-cell text-gray-300">Vigilante</td>
          <td className="hidden md:table-cell text-gray-300">vigia@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">Editar</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm border-gray-500">
          <td className="py-2">
            <p className="font-bold text-cyan-300">Carlos da Silva</p>
            <p className="block md:hidden text-gray-300">Gerente</p>
            <p className="block md:hidden text-gray-300">carlos@gmail.com</p>
          </td>
          <td className="hidden md:table-cell text-gray-300">Gerente</td>
          <td className="hidden md:table-cell text-gray-300">carlos@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">Editar</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm border-gray-500">
          <td className="py-2">
            <p className="font-bold text-cyan-300">Fernando da Silva</p>
            <p className="block md:hidden text-gray-300">Vendedor</p>
            <p className="block md:hidden text-gray-300">fernando@gmail.com</p>
          </td>
          <td className="hidden md:table-cell text-gray-300">Vendedor</td>
          <td className="hidden md:table-cell text-gray-300">fernando@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">Editar</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

);

export default Page;