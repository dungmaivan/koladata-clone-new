/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Space, Table, Tag } from "antd";

import type { TableProps } from "antd";
import { Tooltip } from "react-tooltip";
import AreaChartComponent from "./chart";
import Filter from "./fillter";
interface Products {
  rank: number;
  image: string;
  product_id: string;
  description: string;
  min_price: number;
  max_price: number;
}
interface DataType {
  key: string;
  category: string;
  topProducts: Products[];
  totalRevenue: number;
  growthRate: number;
  revenueInFixedTime: number;
  totalShop: number;
  averageStoreRevenue: number;
  levelCategory: string;
  topThreeShopRevenue: number;
  topTenShopRevenue: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "",
    dataIndex: "key",
    key: "key",
    fixed: "left",
    width: 50,
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
    render: (text) => <a className="line-clamp-2">{text}</a>,
    fixed: "left",
    width: 200,
  },
  {
    title: "Sản phẩm bán chạy",
    dataIndex: "topProducts",
    key: "topProducts",
    render: (products: Products[]) => {
      return (
        <div className="flex space-x-2 ">
          {products.map((product) => (
            <div key={product.product_id} className="flex items-center ">
              <div>
                <img
                  src={product.image}
                  alt=""
                  className="w-12 h-12 rounded-md object-cover"
                  data-tooltip-id={product.image}
                />
                <Tooltip
                  id={product.image}
                  style={{
                    zIndex: "69",
                    backgroundColor: "#ffffff",
                    color: "#222",
                    padding: 12,
                    border: "1px solid #000",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    opacity: 1,
                  }}
                  clickable
                >
                  <div className="w-32 h-64 rounded-md">
                    <img src={product.image} alt="" />
                    <p className="line-clamp-2 mt-2">{product.description}</p>
                    <div className="flex justify-between mt-2">
                      <div>
                        <p className=" font-bold text-sm">
                          đ{product.min_price.toLocaleString("en")} -
                        </p>
                        <p className=" font-bold text-sm">
                          đ{product.max_price.toLocaleString("en")}
                        </p>
                      </div>
                      <div>
                        <a href="/product/id">Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      );
    },
    width: 250,
  },
  {
    title: "Doanh thu",
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    render: (revenue: number) => (
      <p className="text-primary font-bold">
        {revenue.toLocaleString("en")} tỷ
      </p>
    ),
    sorter: (a, b) => a.totalRevenue - b.totalRevenue,
  },
  {
    title: "Tỉ lệ tăng trưởng",
    dataIndex: "growthRate",
    key: "growthRate",
    render: (rate: number) => <p>{rate}%</p>,
    width: 150,
  },
  {
    title: "Doanh thu trong thời gian",
    dataIndex: "revenueInFixedTime",
    key: "revenueInFixedTime",
    render: (revenue: number) => (
      <>
        {" "}
        <AreaChartComponent />
      </>
    ),
    width: 250,
  },
  {
    title: "Tổng cửa hàng",
    dataIndex: "totalShop",
    key: "totalShop",
  },
  {
    title: "Doanh thu trung bình của cửa hàng",
    dataIndex: "averageStoreRevenue",
    key: "averageStoreRevenue",
    render: (revenue: number) => <p>đ{revenue.toLocaleString("en")}</p>,
    width: 200,
  },
  {
    title: "Cấp độ danh mục",
    dataIndex: "levelCategory",
    key: "levelCategory",
  },
  {
    title: "Doanh thu 3 cửa hàng hàng đầu",
    dataIndex: "topThreeShopRevenue",
    key: "topThreeShopRevenue",
    render: (revenue: number) => <p>đ{revenue.toLocaleString("en")}</p>,
    width: 200,
  },
  {
    title: "Doanh thu 10 cửa hàng hàng đầu",
    dataIndex: "topTenShopRevenue",
    key: "topTenShopRevenue",
    render: (revenue: number) => <p>đ{revenue.toLocaleString("en")}</p>,
    width: 200,
  },
];

const dataTable: DataType[] = [
  {
    key: "1",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 1000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "2",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 3000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "3",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 2000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "4",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 2000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "5",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 4000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "6",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 5000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "7",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 6000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "8",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 7000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
  {
    key: "9",
    category: "Hệ thống & Camera an ninh",
    topProducts: [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-1.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-2.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "/images/content-creater-4.jpg",
        product_id: "1",
        rank: 1,
        min_price: 100000,
        max_price: 200000,
      },
    ],
    totalRevenue: 8000,
    growthRate: 20,
    revenueInFixedTime: 1000000,
    totalShop: 100,
    averageStoreRevenue: 10000,
    levelCategory: "Yui Mikami",
    topThreeShopRevenue: 30000,
    topTenShopRevenue: 100000,
  },
];

const Category: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 mt-6 mx-5">
        <div className="bg-white rounded-md z-10">
          <Filter />
        </div>
        <div className="overflow-scroll">
          <Table
            columns={columns}
            dataSource={dataTable}
            rowKey={"key"}
            scroll={{ x: 1800 }}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
