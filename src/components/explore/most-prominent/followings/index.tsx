"use client";
import {
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import classNames from "classnames";
import ShopFollowings from "./shop";
import { Form, Input } from "antd";
const Followings = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };
  const [openInputSearch, setOpenInputSearch] = useState(false);
  const handleOpenInputSearch = () => {
    setOpenInputSearch(!openInputSearch);
  };
  const [
    openInputSearchNewContentCreator,
    setOpenInputSearchNewContentCreator,
  ] = useState(false);
  const handleOpenInputSearchNewContentCreator = () => {
    setOpenInputSearchNewContentCreator(!openInputSearchNewContentCreator);
  };
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-white mt-4 px-4 py-5">
      <div className="flex justify-between">
        <div className="flex space-x-4 ">
          <div>
            <p
              onClick={() => handleTabChange(0)}
              className={classNames({
                "cursor-pointer": true,
                "text-primary border-b border-primary pb-4": tabIndex === 0,
                "text-gray-666": tabIndex !== 0,
              })}
            >
              Nhà sáng tạo đang theo dõi
            </p>
          </div>
          <div>
            <p
              onClick={() => handleTabChange(1)}
              className={classNames({
                "cursor-pointer": true,
                "text-primary border-b border-primary pb-4": tabIndex === 1,
                "text-gray-666": tabIndex !== 1,
              })}
            >
              Cửa hàng đang theo dõi
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-4 h-14">
          <div>
            {!openInputSearch && (
              <button
                className="flex space-x-2 px-4 py-23 text-primary border border-primary rounded-md items-center hover:bg-primary/40 h-8"
                onClick={handleOpenInputSearch}
              >
                <PlusOutlined />
                <p className="ml-3">Thêm nhà sáng tạo</p>
              </button>
            )}
            {openInputSearch && (
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="search-content-creator"
                  rules={[{ required: true, message: "" }]}
                >
                  <Input
                    suffix={
                      <span
                        onClick={handleOpenInputSearch}
                        className="text-primary cursor-pointer"
                      >
                        {" "}
                        Hủy
                      </span>
                    }
                    placeholder="Tìm kiếm tên nhà sáng tạo"
                  />
                </Form.Item>
              </Form>
            )}
          </div>
          <div>
            {!openInputSearchNewContentCreator && (
              <div onClick={handleOpenInputSearchNewContentCreator}>
                <SearchOutlined
                  style={{
                    fontSize: "30px",
                    color: "#666666",
                    cursor: "pointer",
                  }}
                />
              </div>
            )}
            {openInputSearchNewContentCreator && (
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="search-new-content-creator"
                  rules={[{ required: true, message: "" }]}
                >
                  <Input
                    suffix={
                      <span
                        onClick={handleOpenInputSearchNewContentCreator}
                        className="text-primary cursor-pointer"
                      >
                        {" "}
                        Hủy
                      </span>
                    }
                    placeholder="Tìm kiếm tên nhà sáng tạo"
                  />
                </Form.Item>
              </Form>
            )}
          </div>
          <div onClick={handleOpenFilter}>
            <FilterOutlined
              style={{
                fontSize: "26px",
                cursor: "pointer",
                color: "#666666",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <ShopFollowings />
      </div>
    </div>
  );
};

export default Followings;
