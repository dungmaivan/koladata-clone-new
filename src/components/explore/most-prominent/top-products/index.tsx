import Image from "next/image";
import Item from "./item";

const TopProducts = () => {
  const DATA = [
    {
      description: "Lắc tay 925 cực sang, cực xinh dành cho phái nữ",
      price: 100000,
      revenue: 1000000,
      sold: 100,
      rank: 1,
      image:
        "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729983284070025298/cover.png",
    },
    {
      description: "Lắc tay 925 cực sang, cực xinh dành cho phái nữ",
      price: 100000,
      revenue: 1000000,
      sold: 100,
      rank: 2,
      image:
        "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729983284070025298/cover.png",
    },
    {
      description: "Lắc tay 925 cực sang, cực xinh dành cho phái nữ",
      price: 100000,
      revenue: 1000000,
      sold: 100,
      rank: 3,
      image:
        "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729983284070025298/cover.png",
    },
    {
      description: "Lắc tay 925 cực sang, cực xinh dành cho phái nữ",
      price: 100000,
      revenue: 1000000,
      sold: 100,
      rank: 4,
      image:
        "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729983284070025298/cover.png",
    },
    {
      description: "Lắc tay 925 cực sang, cực xinh dành cho phái nữ",
      price: 100000,
      revenue: 1000000,
      sold: 100,
      rank: 5,
      image:
        "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729983284070025298/cover.png",
    },
  ];
  return (
    <div className="rounded-md p-[24px] bg-white min-h-[478px] flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-1">
          <div className="text-lg font-bold">Top sản phẩm</div>
          <div className="text-lg text-gray-900">
            ( <span>27/03 ~ 02/04</span> )
          </div>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="hover:text-blue-400 text-gray-400">Nhiều hơn</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.66669 13.1667L10.6667 8.16666L5.66669 3.16666"
              stroke="#BBBBBB"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <div className="mt-[16px] flex flex-row gap-[16px]">
          {DATA.map((item, index) => (
            <Item
              key={index}
              description={item.description}
              price={item.price}
              revenue={item.revenue}
              sold={item.sold}
              rank={item.rank}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
