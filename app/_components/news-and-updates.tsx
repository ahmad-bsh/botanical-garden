import Image from "next/image"

export const NewsAndUpdates: React.FC = () => {
  return (
    <div className="min-h-[calc((100vh-5rem))] lg:min-h-[calc((100vh-6rem))] flex flex-col py-12 relative overflow-hidden">
      <div className="absolute inset-0 -bottom-96 -right-96 -rotate-45 opacity-10 z-0">
        <div className="absolute inset-0 grayscale	">
          <Image src={"/design.svg"} alt="" fill className="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center sm:text-left">
        <div className="text-4xl">News & Updates</div>
        <div className="flex items-center space-x-5 mb-5 mt-2.5 justify-center sm:justify-start">
          <div className="border-t-2 w-full max-w-[calc(8.5em)]"></div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="align-middle ">View More</div>
            <div className="relative w-4 aspect-square">
              <Image src={"/arrow-right.png"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-5">
        <div className="flex flex-col md:flex-row lg:flex-col  space-y-2.5 md:space-y-0 lg:space-y-4">
          <div className="aspect-[520/330] w-full md:w-7/12 lg:w-full relative">
            <div className="absolute inset-0">
              <Image src={"/news-primary.png"} alt="" fill />
            </div>{" "}
          </div>
          <div className="space-y-2.5 text-green-800 w-full flex-1 px-0 md:px-5 lg:px-0">
            <div className="text-2xl md:text-3xl md:pt-3 lg:pt-0">
              Plants Around Us
            </div>
            <div className="md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit...
            </div>
            <div className="md:text-xl italic">December 23, 2021</div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="text-white flex flex-col sm:flex-row md:space-x-2.5">
            <div className="aspect-[236/150] w-full sm:w-1/3 relative bg-green-400">
              <div className="absolute inset-0 ">
                <Image src={"/news-secondary-1.jpg"} alt="" fill />
              </div>
            </div>
            <div className="py-0.5 space-y-2.5 text-green-800 w-full flex-1 px-0 md:px-5 lg:px-0">
              <div className="text-xl md:pt-3 lg:pt-0">Plants Around Us</div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit...
              </div>
              <div className="italic text-sm">December 23, 2021</div>
            </div>
          </div>
          <div className="border-t-2"></div>

          <div className="text-white flex flex-col sm:flex-row  md:space-x-2.5">
            <div className="aspect-[236/150]  w-full sm:w-1/3 relative bg-green-400">
              <div className="absolute inset-0 ">
                <Image src={"/news-secondary-2.png"} alt="" fill />
              </div>
            </div>
            <div className="py-0.5 space-y-2.5 text-green-800 w-full flex-1 px-0 md:px-5 lg:px-0">
              <div className="text-xl md:pt-3 lg:pt-0">Plants Around Us</div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit...
              </div>
              <div className="italic text-sm">December 23, 2021</div>
            </div>
          </div>
          <div className="border-t-2"></div>
          <div className="text-white flex flex-col sm:flex-row  md:space-x-2.5">
            <div className="aspect-[236/150] w-full sm:w-1/3 relative bg-green-400">
              <div className="absolute inset-0 ">
                <Image src={"/news-secondary-3.jpg"} alt="" fill />
              </div>
            </div>
            <div className="py-0.5 space-y-2.5 text-green-800 w-full flex-1 px-0 md:px-5 lg:px-0">
              <div className="text-xl md:pt-3 lg:pt-0">Plants Around Us</div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit...
              </div>
              <div className="italic text-sm">December 23, 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
