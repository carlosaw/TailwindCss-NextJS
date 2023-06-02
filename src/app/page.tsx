const Page = () => (
  
    <div className="container mx-auto">

      <p className="flex justify-center mt-4">order-first</p>
      <div className="flex flex-col gap-3 mx-3 sm:flex-row">
        <div className="grow rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="order-first grow rounded-md bg-green-500 text-white p-4">02</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">order-last</p>
      <div className="flex gap-3 mx-3">
        <div className="grow rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="order-last grow rounded-md bg-green-500 text-white p-4">02</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">04</div>
      </div>
      
      <p className="flex justify-center mt-4">flex-1</p>
      <div className="flex">
        <div className="flex-1 rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">grow</p>
      <div className="flex gap-3 mx-3">
        <div className="grow rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="grow rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">justify-around</p>
      <div className="flex justify-around">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">justify-between</p>
      <div className="flex justify-between">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">justify-center</p>
      <div className="flex justify-center gap-4">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">items-center</p>
      <div className="flex items-center justify-center">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-8">02</div>
        <div className="rounded-md bg-blue-500 text-white p-11">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">items-start</p>
      <div className="flex items-start justify-center">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-8">02</div>
        <div className="rounded-md bg-blue-500 text-white p-11">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">items-end</p>
      <div className="flex items-end justify-center">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-8">02</div>
        <div className="rounded-md bg-blue-500 text-white p-11">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>

      <p className="flex justify-center mt-4">items-stretch</p>
      <div className="flex items-stretch justify-center">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-8">02</div>
        <div className="rounded-md bg-blue-500 text-white p-11">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>
   
    </div>
  
)

export default Page;