/* eslint-disable @next/next/no-img-element */
"use client";
import { Tooltip } from "react-tooltip";
import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
interface BestSeller {
  product_id: string;
  image: string;
  price: number;
  description: string;
}
interface ContentCreator {
  name: string;
  shopName: string;
  avatar: string;
  id: string;
}
interface DataType {
  key: string;
  contentcreator: ContentCreator;
  bestSeller: BestSeller[];
  revenue: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Thông tin nhà sáng tạo",
    dataIndex: "contentcreator",
    key: "contentcreator",
    render: (_, { contentcreator }) => (
      <div className="flex space-x-3 cursor-pointer">
        <img
          src={contentcreator.avatar}
          className="w-14 h-14 rounded-full object-cover"
          data-tooltip-id={contentcreator.avatar}
          alt=""
        />
        <Tooltip
          id={contentcreator.avatar}
          style={{
            backgroundColor: "transparent",
            borderRadius: "9999px",
            color: "#222",
            padding: 0,
            border: "1px solid #000",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={contentcreator.avatar}
            className="w-40 h-40 rounded-full object-cover "
            alt=""
          />
        </Tooltip>
        <div>
          <p className="text-blue-400">@{contentcreator.shopName}</p>
          <p className="text-sm">{contentcreator.name}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Top seller",
    dataIndex: "bestSeller",
    key: "bestSeller",
    render: (_, { bestSeller }) => (
      <div className="flex space-x-2">
        {bestSeller.map((bestSeller, index) => {
          return (
            <div key={bestSeller.product_id} className="cursor-pointer">
              <img
                src={bestSeller.image}
                className="w-14 h-14 rounded-lg"
                data-tooltip-id={bestSeller.product_id}
                alt=""
              />
              <Tooltip
                id={bestSeller.product_id}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#222",
                  padding: 12,
                  border: "1px solid #000",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
                clickable
              >
                <div>
                  <img
                    src={bestSeller.image}
                    className="w-36 h-36 rounded-lg"
                    alt=""
                  />
                  <p className="text-sm">{bestSeller.description}</p>
                  <p className="font-bold">{bestSeller.price} vnđ</p>
                </div>
              </Tooltip>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "Doanh thu",
    dataIndex: "revenue",
    key: "revenue",
  },
];

const data: DataType[] = [
  {
    key: "1",
    contentcreator: {
      name: "John Brown",
      shopName: "onlyfans",
      avatar: "/images/content-creater-1.jpg",
      id: "1",
    },
    bestSeller: [
      {
        product_id: "1",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729965033743878595/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        product_id: "2",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729763850358328066/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        product_id: "3",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1730085657725799128/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    revenue: "1000  tỷ",
  },
  {
    key: "2",
    contentcreator: {
      name: "John Brown",
      shopName: "vlxx",
      avatar: "/images/content-creater-2.jpg",
      id: "2",
    },
    bestSeller: [
      {
        product_id: "4",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729965033743878595/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    revenue: "1000  tỷ",
  },
  {
    key: "3",
    contentcreator: {
      name: "John Brown",
      avatar: "/images/content-creater-3.jpg",
      shopName: "pornhub",
      id: "1",
    },
    bestSeller: [
      {
        product_id: "5",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729965033743878595/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    revenue: "1000  tỷ",
  },
  {
    key: "4",
    contentcreator: {
      name: "John Brown",
      avatar: "/images/content-creatr-4.jpg",
      id: "4",
      shopName: "xvideos",
    },
    bestSeller: [
      {
        product_id: "5",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729965033743878595/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    revenue: "1000  tỷ",
  },
  {
    key: "5",
    contentcreator: {
      name: "John Brown",
      avatar: "/images/content-creater-5.png",
      id: "1",
      shopName: "xhamster",
    },
    bestSeller: [
      {
        product_id: "5",
        image:
          "https://d3uucz7wx6jq40.cloudfront.net/tiktok.product/1729965033743878595/cover.png",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    revenue: "1000  tỷ",
  },
];

const TopCreater: React.FC = () => (
  <div className="p-3 bg-white">
    <div className="flex justify-between pb-4">
      <p className="text-lg font-bold">Top nhà sáng tạo</p>
      <a href="#" className="text-blue-300 ">
        Nhiều hơn &gt;{" "}
      </a>
    </div>
    <Table columns={columns} dataSource={data} pagination={false} />
  </div>
);

export default TopCreater;
