export const Discover: React.FC = () => {
  return (
    <div className="min-h-screen  bg-green-800 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-500 text-white">small image</div>
        <div className="lg:hidden bg-orange-500 text-white">large image</div>
        <div className=" bg-red-500 text-white">content</div>
        <div className="hidden lg:block bg-orange-500 text-white col-span-2">large image</div>     
      </div>
    </div>
  )
}
