import Image from "next/image";

export const Discover: React.FC = () => {
  return (
    <div className="bg-green-800 flex flex-col relative py-10">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-900 opacity-10 z-0  xl:max-h-screen">
        <div className="absolute inset-0">
          <Image src={"/menu-logo.svg"} alt="" fill />
        </div>
      </div>
      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="aspect-[344/235] md:aspect-[534/354] bg-blue-500 text-white relative max-w-[calc(33rem)] lg:max-w-full mx-auto w-full">
          <Image
            src={"/plant.jpg"}
            alt=""
            fill
            className="absolute object-cover"
          />
        </div>

        <div className="aspect-[344/148] md:aspect-[534/211] lg:hidden bg-red-500 text-white relative max-w-[calc(33rem)] lg:max-w-full mx-auto w-full">
          <Image
            src={"/seating-area-small.png"}
            alt=""
            fill
            className="absolute inset-0 object-cover "
          />
        </div>
        <div className="text-white relative max-w-[calc(33rem)] lg:max-w-full mx-auto flex flex-col justify-center items-center md:items-start space-y-2 w-full py-8 xl:py-0">
          <div className="text-2xl sm:text-3xl text-center md:text-left max-w-[26rem]">
            Discover yourself with nature
          </div>
          <div className="sm:text-xl xl:text-2xl text-center md:text-left max-w-[26rem] px-1.5 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            minima impedit quibusdam, eveniet perspiciatis id repudiandae
            laboriosam laborum hic.
          </div>

          <div className="flex space-x-3 items-center">
            <div className="uppercase bg-transparent text-white px-5 py-2 tracking-wider text-sm font-medium text-center border-2 border-white">
              Learn More
            </div>
          </div>
        </div>

        <div className="hidden lg:block col-span-2 aspect-[1038/409] text-white relative max-w-[calc(33rem)] lg:max-w-full mx-auto w-full">
          <Image
            src={"/seating-area.jpg"}
            alt=""
            fill
            className="absolute inset-0 object-cover "
          />
        </div>
      </div>
    </div>
  );
};
