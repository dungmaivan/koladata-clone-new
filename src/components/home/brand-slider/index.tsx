import { LIST_BRANDS } from "@/constant";
import Image from "next/image";

const BrandSlider = () => {
  return (
    <div className="relative">
      <div className="h-[120px] bg-white flex items-center overflow-hidden">
        <div className="flex flex-nowrap gap-[40px]  h-[90px]  items-center animate-horizon-scroll" >

        
        <img
          src="https://d149xzut2sq6e3.cloudfront.net/upload/19a93e6c.png"
          alt=""
          className="flex-shrink-0 max-w-fit h-full"
          loading="lazy"
        />
        {LIST_BRANDS.map((brand, index) => {
            return (
                <img
                key={index}
                src={brand}
                alt=""
                className="flex-shrink-0 max-w-fit h-full"
                loading="lazy"
                />
            );
        })}
        </div>
      </div>
    </div>
  );
};
export default BrandSlider;
