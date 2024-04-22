import Item from "./item";

const SearchAnswer = () => {
  const DATA = [
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/2427bdb8.png",
      title: "Danh sách đối thủ",
      content: "Những nhà bán hàng nào cùng ngành với tôi đang kinh doanh tốt?",
      id: "1",
    },
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/71063599.png",
      title: "Nhà sáng tạo liên kết",
      content: "Tìm kiếm người sáng tạo liên kết phù hợp nhất",
      id: "2",
    },
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/f123db79.png",
      title: "Sản phẩm thịnh hành",
      content: "Gần đây bán sản phẩm gì có cơ hội kiếm tiền?",
      id: "3",
    },
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/f48f95b3.png",
      title: "Chiến lược thương hiệu",
      content: "Tại sao có thương hiệu thành công ở TikTok?",
      id: "4",
    },
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/94f48318.png",
      title: "Video Hot",
      content: "Video nào đang hot dạo gần đây?",
      id: "5",
    },
    {
      icon: "https://d149xzut2sq6e3.cloudfront.net/upload/5415fb32.png",
      title: "Live Hot",
      content: "Livestream nào đang bán chạy dạo gần đây?",
      id: "6",
    },
  ];
  return (
    <div className="bg-white container p-8 rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="text-[24px] font-bold  h-[60px] flex items-center">
          Tìm kiếm câu trả lời tại đây
        </div>
        <div className="w-[760px]">
          <div className="w-[760px]">
            <div className="w-full h-15 rounded-md shadow-none relative mb-1 ">
              <input
                placeholder="Tìm kiếm mọi thứ tại Kalodata"
                className="min-h-14 h-full w-full px-4 rounded-md shadow-none text-base pr-16 border border-gray-300 focus:outline-none"
                type="text"
                // value=""
              />
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-search cursor-pointer absolute right-2 top-2"
              >
                <rect width="46" height="46" rx="4" fill="#56a1ed"></rect>
                <path
                  d="M28.3867 27.1719L32.9829 31.7681C33.3734 32.1586 33.3734 32.7918 32.9829 33.1823L32.8061 33.3591C32.4156 33.7496 31.7824 33.7496 31.3919 33.3591L26.7957 28.7629L28.3867 27.1719Z"
                  fill="white"
                  fillOpacity="0.6"
                ></path>
                <path
                  d="M29.75 21.5C29.75 26.0563 26.0564 29.75 21.5 29.75C16.9437 29.75 13.25 26.0563 13.25 21.5C13.25 16.9437 16.9437 13.25 21.5 13.25C26.0564 13.25 29.75 16.9437 29.75 21.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="otherWrapper">
            <div></div>
            <div className="right">
              <div className="tip">
                <div className="cursor-pointer">
                  Làm thế nào để tìm kiếm một cách hiệu quả?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-[12px] mt-[24px] grid grid-cols-3 ">
        {DATA.map((item) => {
          return (
            <Item
              key={item.id}
              img={item.icon}
              title={item.title}
              content={item.content}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchAnswer;
