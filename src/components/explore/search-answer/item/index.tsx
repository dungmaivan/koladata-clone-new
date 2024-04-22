"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
interface IProps {
  img: string;
  title: string;
  content: string;
  id: string;
}
const Item: React.FC<IProps> = ({ content, img, title, id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/search-answer/${id}`);
  };
  return (
    <div
      className="flex flex-1 p-[12px] bg-[#F9FBFC] rounded cursor-pointer border-[1px] border-[#F9FBFC] hover:border-primary hover:border-[1px] hover:border-[#73b6e2] hover:shadow-md"
      onClick={handleClick}
    >
      <div className="flex flex-row gap-[8px] items-center">
        <img width={20} height={20} src={img} alt="" className="shrink-0" />
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row-center text-[16px] font-bold h-[20px]">
            {title}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M7.08331 16.4583L13.3333 10.2083L7.08331 3.95825"
                stroke="#222222"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="line-clamp-1 text-base-666">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
