/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tooltip } from "react-tooltip";
interface Products {
  rank: number;
  image: string;
}
interface Props {
  product1: Products;
  product2: Products;
  product3: Products;
  thumbnail: string;
  shopName: string;
  revenue: string;
  growth: number;
  type: string;
}
const Item: React.FC<Props> = ({
  thumbnail,
  product1,
  product2,
  product3,
  shopName,
  revenue,
  growth,
  type,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-[300px]">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="p-2">
          <div className="flex mb-[24px] items-center cursor-pointer">
            <div className="Component-Image round w-14 h-14 mr-2 rounded-full overflow-hidden">
              {/* <img
                src="https://d3uucz7wx6jq40.cloudfront.net/tiktok.creator/6635902840690065410/avatar_medium.png"
                alt=""
              /> */}
              <img src={thumbnail} alt="" />
            </div>
            <div>
              <div className="font-bold truncate w-[152px]">{shopName}</div>
              <div className="mt-[4px] flex flex-row gap-[4px] overflow-hidden w-[160px]">
                <div className="inline-flex-center text-[12px] bg-[#F5F5F5] h-[21px] px-[4px] rounded-[3px] text-base-999  cursor-pointer hover:bg-[#56a1ed14]">
                  {type}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="font-bold">₫{revenue}tr</div>
            <div className="flex items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[4px]"
              >
                <g id="ä¸å 1">
                  <path
                    id="Vector"
                    d="M6.89487 13.8983L2.05711 8.45864C2.01873 8.41564 1.9938 8.36271 1.9853 8.30617C1.97679 8.24963 1.98507 8.19188 2.00914 8.13984C2.03321 8.0878 2.07206 8.04367 2.12103 8.01273C2.17 7.98179 2.22703 7.96536 2.28527 7.96539H4.66315C4.73622 7.96601 4.80701 7.94039 4.86216 7.89335C4.91732 7.84632 4.95305 7.78111 4.96262 7.71002C5.14087 6.44368 6.21751 0.843067 11.3155 0.0139952C11.3821 0.00138283 11.4511 0.0110512 11.5114 0.0414534C11.5717 0.0718565 11.6199 0.121235 11.6482 0.181689C11.6766 0.242143 11.6834 0.310178 11.6677 0.374907C11.652 0.439636 11.6146 0.497318 11.5615 0.538724C10.6881 1.21038 9.54726 2.51171 9.2264 4.82751C9.10322 5.76829 9.04367 6.71605 9.04815 7.66455C9.04813 7.74407 9.07983 7.82044 9.13646 7.87732C9.19309 7.93419 9.27016 7.96706 9.35118 7.96889H11.9644C12.0226 7.96885 12.0796 7.98529 12.1286 8.01623C12.1776 8.04717 12.2164 8.0913 12.2405 8.14334C12.2646 8.19538 12.2728 8.25313 12.2643 8.30967C12.2558 8.36621 12.2309 8.41914 12.1925 8.46214L7.35119 13.8983C7.32275 13.9303 7.28767 13.9559 7.24832 13.9734C7.20897 13.9909 7.16625 14 7.12303 14C7.07981 14 7.03709 13.9909 6.99774 13.9734C6.95838 13.9559 6.92331 13.9303 6.89487 13.8983Z"
                    fill="#E15D33"
                  ></path>
                </g>
              </svg>
              <span className="text-red-400 font-bold">- 71.69%</span>
            </div>
          </div>
          <div className="text-base-999 text-xs">
            Hôm qua doanh thu, chủ yếu từ
          </div>
        </div>
        {/* Revenue Section */}
        <div className="flex gap-1 mt-3">
          <div className="cursor-pointer w-[143px] h-full relative">
            <img
              // src={"/images/content-creater-1.jpg"}
              src={product1.image}
              className="object-contain rounded-lg"
              data-tooltip-id={"1"}
              alt=""
            />
            <div className="bg-[#06060F30] rounded-r-[2px] absolute left-0 top-[4px] flex justify-center items-center text-white text-xs w-[25px] h-[21px]">
              1
            </div>
            <Tooltip
              id={"1"}
              style={{
                backgroundColor: "#ffffff",
                color: "#222",
                padding: 12,
                border: "1px solid #000",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <video width={350} height={450} autoPlay>
                  <source src="/videos/quachuan.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-[4px] w-1/2">
            <div className="h-1/2 relative overflow-hidden rounded-lg">
              <img
                // src={"/images/content-creater-2.jpg"}
                src={product2.image}
                className="w-full h-[100px] rounded-lg object-cover absolute"
                data-tooltip-id={"1"}
                alt=""
              />
              <div className="bg-[#06060F30] rounded-r-[2px] absolute left-0 top-[4px] flex justify-center items-center text-white text-xs w-[15px] h-[18px]">
                2
              </div>
              <Tooltip
                id={"1"}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#222",
                  padding: 12,
                  border: "1px solid #000",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div>
                  <video width={350} height={450} autoPlay>
                    <source src="/videos/quachuan.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Tooltip>
            </div>
            <div className="h-1/2 relative overflow-hidden rounded-lg">
              <img
                // src={"/images/content-creater-4.jpg"}
                src={product3.image}
                className="w-full h-[100px] rounded-lg object-cover absolute"
                data-tooltip-id={"1"}
                alt=""
              />
              <div className="bg-[#06060F30] rounded-r-[2px] absolute left-0 top-[4px] flex justify-center items-center text-white text-xs w-[15px] h-[18px]">
                4
              </div>
              <Tooltip
                id={"1"}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#222",
                  padding: 12,
                  border: "1px solid #000",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div>
                  <video width={350} height={450} autoPlay>
                    <source src="/videos/quachuan.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
