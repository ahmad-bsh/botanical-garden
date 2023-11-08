export const NewsAndUpdates: React.FC = () => {
  return (
    <div className="min-h-[calc((100vh-5rem))] lg:min-h-[calc((100vh-6rem))] flex flex-col">
      <div className="flex-1 h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="bg-teal-600 text-white">Primary News Item</div>
        <div className="flex flex-col divide-y-2">
          <div className="bg-orange-700 flex-1 text-white">
            Secondary News Item 1
          </div>
          <div className="bg-orange-700 flex-1 text-white">
            Secondary News Item 2
          </div>
          <div className="bg-orange-700 flex-1 text-white">
            Secondary News Item 3
          </div>
        </div>
      </div>
    </div>
  )
}
