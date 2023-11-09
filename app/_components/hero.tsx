import Image from "next/image"

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[calc((100vh-5rem))] lg:min-h-[calc((100vh-6rem))] flex flex-col">
      <div className="flex-1 h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-5 xl:gap-0">
        <div className="flex flex-col justify-center items-center lg:items-start text-green-800 lg:px-5 xl:px-0 space-y-2 lg:space-y-3.5 xl:space-y-5 pt-5 xl:pt-0">
          <div className="text-4xl sm:text-5xl xl:text-6xl text-center lg:text-left max-w-[33rem]">
            A beautiful adventure awaits
          </div>
          <div className="sm:text-2xl xl:text-3xl text-center lg:text-left max-w-[33rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            minima impedit quibusdam, eveniet perspiciatis id repudiandae
            laboriosam laborum hic.
          </div>

          <div className="flex space-x-3 items-center">
            <div className="uppercase bg-green-900 text-white px-5 py-2.5 tracking-wider text-sm font-medium text-center">
              Buy Tickets
            </div>
            <div className="uppercase text-green-900 bg-white px-5 py-2 tracking-wider text-sm font-medium text-center border-2 border-green-900">
              Learn More
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative aspect-[239/330] w-10/12 max-w-[calc(394px)] lg:max-w-none">
            <div className="absolute inset-0 border-4 border-gray-400 rounded-t-full"></div>
            <div className="absolute rounded-t-full inset-2">
              <Image
                src={"/hero.png"}
                alt=""
                fill
                className="absolute rounded-t-full inset-5  border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
