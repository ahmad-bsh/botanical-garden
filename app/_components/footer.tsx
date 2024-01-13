"use client";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="bg-green-900 flex flex-col  text-white">
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-5 xl:px-0 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-5 sm:grid-cols-3">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex space-x-2 lg:space-x-2.5">
              <div className="w-12 lg:w-16 aspect-square relative">
                <div className="absolute aspect-square w-full">
                  <Image
                    src={"/logo-footer.png"}
                    alt=""
                    fill
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div>
                  <div className="lg:text-xl font-medium">Mist Gardens</div>
                  <div className="text-sm lg:text-base italic">
                    Museum & Botanical Garden
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center px-2 sm:text-left sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-5 text-lg">Sitemap</div>
            {[
              "Home",
              "Visit",
              "Exhibitions",
              "Programs & Events",
              "Store",
              "Membership",
            ].map((item) => (
              <div className="cursor-pointer" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-5 text-lg">Connect</div>

            <div className="flex h-8 space-x-5">
              <div className="w-8 h-full relative cursor-pointer">
                <div className="absolute h-full w-full">
                  <Image src={"/twitter.svg"} alt="" fill className="" />
                </div>
              </div>
              <div className="w-8 h-full relative cursor-pointer">
                <div className="absolute h-full w-full">
                  <Image src={"/facebook.svg"} alt="" fill className="" />
                </div>
              </div>

              <div className="w-8 h-full relative cursor-pointer">
                <div className="absolute h-full w-full">
                  <Image src={"/linkedin.svg"} alt="" fill className="" />
                </div>
              </div>

              <div className="w-8 h-full relative cursor-pointer">
                <div className="absolute h-full w-full">
                  <Image src={"/email.svg"} alt="" fill className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-950 p-6 text-center">
        © 2021 Mist Gardens. All rights reserved.
      </div>
    </div>
  );
};
