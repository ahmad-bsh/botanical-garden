export const Hero: React.FC = () => {
  return (
    <div className="min-h-[calc((100vh-5rem))] lg:min-h-[calc((100vh-6rem))] flex flex-col">
      <div className="flex-1 h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="bg-green-300">content</div>
        <div className="bg-green-200">image</div>
      </div>
    </div>
  )
}
