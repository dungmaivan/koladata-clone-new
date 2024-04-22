"use client";
import { useState } from "react";
import TopCreater from "./top-creater";
import TopProducts from "./top-products";
import classNames from "classnames";
import Followings from "./followings";
const MostProminent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };
  return (
    <>
      <div className="rounded-md p-6 bg-white py-3 my-4 flex justify-center">
        <div className="inline-flex flex-row items-center justify-center p-1 rounded bg-gray-200 border border-gray-300 h-9 mb-4">
          <div
            className={classNames({
              "h-full flex items-center cursor-pointer text-lg  px-3": true,
              "bg-primary text-white rounded-md": tabIndex === 0,
              "text-gray-666 hover:text-primary": tabIndex !== 0,
            })}
            onClick={() => handleTabChange(0)}
          >
            Danh sách bán chạy nhất
          </div>
          <div
            className={classNames({
              "h-full flex items-center cursor-pointer text-lg text-gray-666 px-3 ":
                true,
              "bg-primary text-white rounded-md": tabIndex === 1,
              "text-gray-666 hover:text-primary": tabIndex !== 1,
            })}
            onClick={() => handleTabChange(1)}
          >
            Đang theo dõi
          </div>
        </div>
      </div>
      {tabIndex === 0 && (
        <div className="flex flex-col gap-[16px]">
          <TopProducts />
          <div className="grid grid-cols-2 gap-4">
            <TopCreater />
            <TopCreater />
            <TopCreater />
            <TopCreater />
          </div>
        </div>
      )}
      {tabIndex === 1 && <Followings />}
    </>
  );
};
export default MostProminent;
