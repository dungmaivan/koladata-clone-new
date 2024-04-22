"use client";
import { CalendarOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import { Select, Space } from "antd";

const FormDisabledDemo: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div
      className="w-[236px] relative shrink-0 h-[calc(100vh-100px)]"
      // style={{ minHeight: "calc(100vh -100px)" }}
    >
      <div className="flex flex-col h-full  pb-[98px]">
        <div>
          <div className="text-[12px] text-kalo-secondary pt-[16px] pb-[4px] px-[8px]">
            <div className="h-[22px] flex items-center">Lọc</div>
          </div>

          <div className="flex flex-col">
            <div className="cursor-pointer group/hasvalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <CalendarOutlined />
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Thời gian
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-[2px] last:pb-[0px] border-l-[2px] border-[#56A1ED] ml-[12px] text-[#666] pr-[8px]">
                <div className="h-[22px] hover:bg-[rgb(238,246,253)] rounded-[4px] pl-[4px] flex items-center justify-between text-[13px] whitespace-nowrap">
                  7 ngày trước (11/04 ~ 17/04)
                </div>
              </div>
            </div>
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <ProductOutlined />
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Danh mục
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="å¾æ&nbsp;/å°/é»è®¤/æ¨¡å">
                        <path
                          id="Vector"
                          d="M2 5.14817C2 4.77998 2.29848 4.4815 2.66667 4.4815H4.66467C5.09838 4.4815 5.42416 4.06995 5.40858 3.63652C5.37879 2.80743 5.58198 1.66669 6.92593 1.66669C8.26987 1.66669 8.47306 2.80743 8.44327 3.63652C8.42769 4.06995 8.75347 4.4815 9.18718 4.4815H11.1852C11.5534 4.4815 11.8519 4.77998 11.8519 5.14817V7.14617C11.8519 7.57988 12.2634 7.90566 12.6968 7.89008C13.5259 7.86029 14.6667 8.06349 14.6667 9.40743C14.6667 10.7514 13.5259 10.9546 12.6968 10.9248C12.2634 10.9092 11.8519 11.235 11.8519 11.6687V13.6667C11.8519 14.0349 11.5534 14.3334 11.1852 14.3334H9.18718C8.75347 14.3334 8.42769 13.9218 8.44327 13.4884C8.47306 12.6593 8.26987 11.5185 6.92593 11.5185C5.58198 11.5185 5.37879 12.6593 5.40858 13.4884C5.42416 13.9218 5.09838 14.3334 4.66467 14.3334H2.66667C2.29848 14.3334 2 14.0349 2 13.6667V11.6687C2 11.235 2.41155 10.9092 2.84498 10.9248C3.67407 10.9546 4.81481 10.7514 4.81481 9.40743C4.81481 8.06349 3.67407 7.86029 2.84498 7.89008C2.41155 7.90566 2 7.57988 2 7.14617V5.14817Z"
                          stroke="#222222"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Cấp độ danh mục
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[12px] text-kalo-secondary pt-[16px] pb-[4px] px-[8px]">
            <div className="h-[22px] flex items-center">Lọc theo doanh thu</div>
          </div>
          <div className="flex flex-col">
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.33301 3.66658C2.33301 2.9302 2.92996 2.33325 3.66634 2.33325H12.333C13.0694 2.33325 13.6663 2.93021 13.6663 3.66659V12.3333C13.6663 13.0696 13.0694 13.6666 12.333 13.6666H3.66634C2.92996 13.6666 2.33301 13.0696 2.33301 12.3333V3.66658Z"
                        stroke="#222222"
                      ></path>
                      <path
                        d="M8.17773 11.4934C8.06836 11.4934 7.97331 11.4452 7.89258 11.3489C7.81445 11.2525 7.77539 11.1366 7.77539 11.0012V10.5051C7.31966 10.4556 6.9082 10.3254 6.54102 10.1145C6.17383 9.90356 5.89779 9.62101 5.71289 9.26685C5.68164 9.21216 5.66602 9.15096 5.66602 9.08325C5.66602 8.97648 5.70378 8.88534 5.7793 8.80981C5.85742 8.73169 5.94987 8.69263 6.05664 8.69263C6.12435 8.69263 6.19206 8.71346 6.25977 8.75513C6.32747 8.79679 6.37565 8.84758 6.4043 8.90747C6.52669 9.14185 6.70638 9.32804 6.94336 9.46606C7.18034 9.60409 7.45768 9.69133 7.77539 9.72778V8.07544C7.52799 8.03638 7.2832 7.98169 7.04102 7.91138C6.80143 7.84106 6.58398 7.74731 6.38867 7.63013C6.19336 7.51034 6.03711 7.3606 5.91992 7.18091C5.80273 6.99862 5.74414 6.77726 5.74414 6.51685C5.74414 6.25382 5.80143 6.02336 5.91602 5.82544C6.0332 5.62752 6.18815 5.46086 6.38086 5.32544C6.57617 5.18742 6.79362 5.07935 7.0332 5.00122C7.27539 4.92049 7.52148 4.86711 7.77148 4.84106V4.82544C7.77148 4.70044 7.80794 4.58716 7.88086 4.4856C7.95638 4.38403 8.04622 4.33325 8.15039 4.33325C8.27279 4.33325 8.37305 4.38013 8.45117 4.47388C8.5319 4.56763 8.57227 4.68481 8.57227 4.82544V4.84888C8.95508 4.90356 9.30143 5.02987 9.61133 5.22778C9.92122 5.4257 10.1556 5.67179 10.3145 5.96606C10.3457 6.02075 10.3613 6.08455 10.3613 6.15747C10.3613 6.26424 10.3223 6.35669 10.2441 6.43481C10.1686 6.51034 10.0775 6.5481 9.9707 6.5481C9.9056 6.5481 9.83789 6.52726 9.76758 6.4856C9.69987 6.44393 9.65169 6.39445 9.62305 6.33716C9.41732 5.95955 9.06706 5.72648 8.57227 5.63794V7.38794C8.81185 7.41398 9.04883 7.45304 9.2832 7.50513C9.51758 7.55721 9.73112 7.63534 9.92383 7.7395C10.1165 7.84106 10.2702 7.98039 10.3848 8.15747C10.4993 8.33195 10.5566 8.55591 10.5566 8.82935C10.5566 9.1757 10.4616 9.46737 10.2715 9.70435C10.084 9.93872 9.83919 10.1223 9.53711 10.2551C9.23763 10.3853 8.91732 10.4687 8.57617 10.5051V11.0012C8.57617 11.1366 8.53711 11.2525 8.45898 11.3489C8.38086 11.4452 8.28711 11.4934 8.17773 11.4934ZM7.77148 5.62622C7.57357 5.65226 7.37956 5.70044 7.18945 5.77075C6.99935 5.84106 6.8431 5.93612 6.7207 6.05591C6.59831 6.1731 6.53711 6.31763 6.53711 6.4895C6.53711 6.64575 6.59701 6.77726 6.7168 6.88403C6.83919 6.9882 6.99544 7.07284 7.18555 7.13794C7.37565 7.20044 7.57096 7.24992 7.77148 7.28638V5.62622ZM8.57617 9.71997C8.77409 9.69133 8.96419 9.64315 9.14648 9.57544C9.33138 9.50513 9.48242 9.40877 9.59961 9.28638C9.7168 9.16398 9.77539 9.01294 9.77539 8.83325C9.77539 8.65096 9.71289 8.51685 9.58789 8.43091C9.46549 8.34237 9.31185 8.28247 9.12695 8.25122C8.94206 8.21737 8.75846 8.19132 8.57617 8.1731V9.71997Z"
                        fill="#222222"
                      ></path>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Doanh thu(₫)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.33301 6.99998C2.33301 6.63179 2.63148 6.33331 2.99967 6.33331H4.33301C4.7012 6.33331 4.99967 6.63179 4.99967 6.99998V13H2.33301V6.99998Z"
                        stroke="#222222"
                      ></path>
                      <path
                        d="M6.6665 3.66667C6.6665 3.29848 6.96498 3 7.33317 3H8.6665C9.03469 3 9.33317 3.29848 9.33317 3.66667V13H6.6665V3.66667Z"
                        stroke="#222222"
                      ></path>
                      <path
                        d="M11 5.66667C11 5.29848 11.2985 5 11.6667 5H13C13.3682 5 13.6667 5.29848 13.6667 5.66667V13H11V5.66667Z"
                        stroke="#222222"
                      ></path>
                      <path
                        d="M1.6665 13H14.3332"
                        stroke="#222222"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Tỉ lệ tăng trưởng GMV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_459_4277)">
                        <path
                          d="M3 8.33331V13C3 13.3682 3.29848 13.6666 3.66667 13.6666H12.3333C12.7015 13.6666 13 13.3682 13 13V8.33331"
                          stroke="#222222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 6.33331L13.1582 2.84365C13.086 2.54426 12.8181 2.33331 12.5101 2.33331H3.48988C3.18191 2.33331 2.91403 2.54426 2.84181 2.84365L2 6.33331"
                          stroke="#222222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6 6.33331C6 7.43788 5.10457 8.33331 4 8.33331C2.89543 8.33331 2 7.43788 2 6.33331"
                          stroke="#222222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 6.33331C10 7.43788 9.10457 8.33331 8 8.33331C6.89543 8.33331 6 7.43788 6 6.33331"
                          stroke="#222222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 6.33331C14 7.43788 13.1046 8.33331 12 8.33331C10.8954 8.33331 10 7.43788 10 6.33331"
                          stroke="#222222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_459_4277">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      Doanh thu bình quân của cửa hàng(₫)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="å¾æ&nbsp;/å°/é»è®¤/å3">
                        <circle
                          id="Vector"
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="#222222"
                        ></circle>
                        <path
                          id="3"
                          d="M7.95481 10.7467C7.66681 10.7467 7.36814 10.7093 7.05881 10.6347C6.74947 10.56 6.48014 10.448 6.25081 10.2987C6.14414 10.2293 6.07214 10.1493 6.03481 10.0587C5.99747 9.96799 5.98681 9.88266 6.00281 9.80266C6.02414 9.71732 6.06414 9.64532 6.12281 9.58666C6.18681 9.52799 6.26414 9.49332 6.35481 9.48266C6.45081 9.47199 6.55481 9.49599 6.66681 9.55466C6.88547 9.67199 7.09614 9.75732 7.29881 9.81066C7.50147 9.85866 7.70947 9.88266 7.92281 9.88266C8.15747 9.88266 8.35481 9.85066 8.51481 9.78666C8.67481 9.72266 8.79481 9.62666 8.87481 9.49866C8.96014 9.37066 9.00281 9.21599 9.00281 9.03466C9.00281 8.76799 8.91214 8.57066 8.73081 8.44266C8.55481 8.30932 8.29614 8.24266 7.95481 8.24266H7.44281C7.29347 8.24266 7.17881 8.20532 7.09881 8.13066C7.02414 8.05599 6.98681 7.95199 6.98681 7.81866C6.98681 7.68532 7.02414 7.58132 7.09881 7.50666C7.17881 7.43199 7.29347 7.39466 7.44281 7.39466H7.85881C8.06147 7.39466 8.23481 7.36266 8.37881 7.29866C8.52281 7.22932 8.63481 7.13332 8.71481 7.01066C8.79481 6.88799 8.83481 6.73866 8.83481 6.56266C8.83481 6.31732 8.75214 6.13066 8.58681 6.00266C8.42681 5.87466 8.19214 5.81066 7.88281 5.81066C7.68547 5.81066 7.49881 5.83466 7.32281 5.88266C7.15214 5.92532 6.96281 6.00799 6.75481 6.13066C6.65881 6.18932 6.56547 6.21332 6.47481 6.20266C6.38947 6.19199 6.31747 6.15732 6.25881 6.09866C6.20014 6.03999 6.16014 5.97066 6.13881 5.89066C6.11747 5.80532 6.12281 5.71999 6.15481 5.63466C6.18681 5.54399 6.25347 5.46666 6.35481 5.40266C6.58414 5.25332 6.83747 5.14132 7.11481 5.06666C7.39214 4.98666 7.67747 4.94666 7.97081 4.94666C8.36014 4.94666 8.69347 5.00799 8.97081 5.13066C9.24814 5.24799 9.45881 5.41866 9.60281 5.64266C9.75214 5.86132 9.82681 6.12799 9.82681 6.44266C9.82681 6.66666 9.78414 6.87199 9.69881 7.05866C9.61347 7.23999 9.49347 7.39466 9.33881 7.52266C9.18414 7.65066 8.99747 7.74132 8.77881 7.79466V7.69866C9.16281 7.76266 9.46147 7.92266 9.67481 8.17866C9.88814 8.42932 9.99481 8.74399 9.99481 9.12266C9.99481 9.45332 9.91214 9.74132 9.74681 9.98666C9.58147 10.232 9.34681 10.4213 9.04281 10.5547C8.73881 10.6827 8.37614 10.7467 7.95481 10.7467Z"
                          fill="#222222"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <Tooltip
                      placement="topLeft"
                      title={"Top 3 cửa hàng chiếm tỷ lệ giao dịch"}
                    >
                      <p className="block whitespace-nowrap overflow-hidden text-ellipsis">
                        Top 3 cửa hàng chiếm tỷ lệ giao dịch
                      </p>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group/novalue">
              <div className="h-[30px] flex items-center w-[220px] group-hover/novalue:bg-[#EEF6FD] rounded-[4px] px-[8px] justify-between">
                <div className="flex items-center gap-[4px] w-full">
                  <div className="shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="8" r="6" stroke="#222222"></circle>
                      <path
                        d="M9.86313 10.7467C9.19646 10.7467 8.68713 10.496 8.33513 9.99466C7.98313 9.48799 7.80713 8.76799 7.80713 7.83466C7.80713 7.20532 7.88446 6.67732 8.03913 6.25066C8.19913 5.81866 8.43113 5.49332 8.73513 5.27466C9.04446 5.05599 9.42046 4.94666 9.86313 4.94666C10.5351 4.94666 11.0445 5.19199 11.3911 5.68266C11.7431 6.17332 11.9191 6.88799 11.9191 7.82666C11.9191 8.45066 11.8391 8.98132 11.6791 9.41866C11.5245 9.85066 11.2951 10.1813 10.9911 10.4107C10.6871 10.6347 10.3111 10.7467 9.86313 10.7467ZM9.86313 9.90666C10.2258 9.90666 10.4925 9.73866 10.6631 9.40266C10.8391 9.06666 10.9271 8.54132 10.9271 7.82666C10.9271 7.11199 10.8391 6.59466 10.6631 6.27466C10.4925 5.94932 10.2258 5.78666 9.86313 5.78666C9.5058 5.78666 9.23913 5.94932 9.06313 6.27466C8.88713 6.59466 8.79913 7.11199 8.79913 7.82666C8.79913 8.54132 8.88713 9.06666 9.06313 9.40266C9.23913 9.73866 9.5058 9.90666 9.86313 9.90666Z"
                        fill="#222222"
                      ></path>
                      <path
                        d="M4.58111 10.6666C4.44245 10.6666 4.33311 10.6293 4.25311 10.5546C4.17845 10.4746 4.14111 10.368 4.14111 10.2346C4.14111 10.096 4.17845 9.99198 4.25311 9.92265C4.33311 9.85331 4.44245 9.81865 4.58111 9.81865H5.47711V5.89065H5.97311L4.79711 6.60265C4.69578 6.66131 4.59978 6.68531 4.50911 6.67465C4.42378 6.65865 4.34911 6.62131 4.28511 6.56265C4.22645 6.49865 4.18645 6.42398 4.16511 6.33865C4.14378 6.25331 4.14911 6.16798 4.18111 6.08265C4.21845 5.99198 4.28778 5.91731 4.38911 5.85865L5.49311 5.19465C5.59978 5.13065 5.70645 5.07731 5.81311 5.03465C5.91978 4.98665 6.01845 4.96265 6.10911 4.96265C6.22111 4.96265 6.31445 4.99465 6.38911 5.05865C6.46378 5.11731 6.50111 5.21598 6.50111 5.35465V9.81865H7.31711C7.45578 9.81865 7.56245 9.85331 7.63711 9.92265C7.71711 9.99198 7.75711 10.096 7.75711 10.2346C7.75711 10.3733 7.71711 10.48 7.63711 10.5546C7.56245 10.6293 7.45578 10.6666 7.31711 10.6666H4.58111Z"
                        fill="#222222"
                      ></path>
                    </svg>
                  </div>
                  <div className="max-w-full line-clamp-1">
                    <Tooltip
                      placement="topLeft"
                      title={"Top 10 cửa hàng chiếm tỷ lệ giao dịch"}
                    >
                      <p className="block whitespace-nowrap overflow-hidden text-ellipsis">
                        Top 10 cửa hàng chiếm tỷ lệ giao dịch
                      </p>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-5 left-0 right-0 flex p-1 gap-2 z-10 bg-white"
        style={{ boxShadow: "rgba(34, 34, 34, 0.1) 0px -2px 4px 0px" }}
      >
        <button className="border rounded-md px-4 py-1 hover:border-primary hover:text-primary">
          Thiết lập lại
        </button>
        <button className="border rounded-md px-4 py-1 hover:border-primary hover:text-primary bg-gray-300">
          Áp dụng
        </button>
      </div>
    </div>
  );
};

export default FormDisabledDemo;
