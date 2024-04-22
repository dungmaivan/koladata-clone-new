import Image from "next/image";
import React from "react";

interface IProps {
  description: string;
  price: number;
  revenue: number;
  sold: number;
  rank: number;
  image: string;
}
const Item: React.FC<IProps> = ({
  description,
  price,
  revenue,
  sold,
  rank,
  image,
}) => {
  return (
    <div className="flex-1 rounded-lg border border-[#eee] group cursor-pointer relative">
      <div className="w-full h-[254px] border-0 rounded-lg overflow-hidden">
        <img src={image} className="object-cover" />
      </div>
      <div className="py-[8px] px-[12px] text-sm">
        <div className="h-[42px] line-clamp-2 group-hover:text-primary ">
          {description}
        </div>
        <div className="mt-[4px] mb-[8px] text-[14px] font-bold">
          ₫{price.toLocaleString("en")} tr
        </div>
        <div className="flex flex-row">
          <div className="flex-col gap-[4px] mr-[24px]">
            <div className="text-base text-[#666666]">Doanh thu</div>
            <div className="text-[14px] font-bold">
              ₫{revenue.toLocaleString("en")} tỉ
            </div>
          </div>
          <div>
            <div className="text-base text-[#666666]">Lượt bán</div>
            <div className="text-[14px] font-bold">{sold}</div>
          </div>
        </div>
      </div>
      <div className="top-0 rounded-br-lg p-2 left-0 absolute bg-yellow-400">
        <p className="text-sm pl-2 text-white font-bold">Top {rank}</p>
      </div>
    </div>
  );
};

export default Item;
