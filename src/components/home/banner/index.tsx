import Image from "next/image";
const Banner = () => {
  return (
    <div className="w-full bg-[#F3F7FC] flex flex-col items-center relative pb-[47px]">
      <Image
        quality={100}
        alt="language"
        width="794"
        height="320"
        decoding="async"
        data-nimg="1"
        className="absolute bottom-0 right-0"
        style={{ color: "transparent" }}
        src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/bg-header.8af39d1b.svg"
      />
      <div className="flex flex-col text-[72px] leading-[80px] font-bold items-center mt-[52px]">
        <div>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#56A1ED] to-[#72CEE3]">
            Công cụ tốt nhất
          </span>
        </div>
        <div>để phân tích dữ liệu</div>
        <div>và insight TikTok </div>
      </div>
      <div className="flex flex-row gap-[57px] mt-[74px] relative">
        <div className="flex flex-col items-center gap-[4px]">
          <div className="text-[36px] leading-[44px] font-bold">100Tr+</div>
          <div className="text-[24px]">Dữ liệu sản phẩm</div>
        </div>
        <div className="flex flex-col items-center gap-[4px]">
          <div className="text-[36px] leading-[44px] font-bold">200Tr+</div>
          <div className="text-[24px]">Dữ liệu nhà sáng tạo</div>
        </div>
        <div className="flex flex-col items-center gap-[4px]">
          <div className="text-[36px] leading-[44px] font-bold">300Tr+</div>
          <div className="text-[24px]">Dữ liệu Video &amp; Livestream</div>
        </div>
        <div className="flex flex-col items-center gap-[4px]">
          <div className="text-[36px] leading-[44px] font-bold">500 ngày</div>
          <div className="text-[24px]">Dữ liệu lịch sử</div>
        </div>
      </div>
      <div className="mt-[24px] text-[#666] max-w-[1000px] text-center relative">
        <div>
          Phân tích sản phẩm theo xu hướng, cộng tác với nhà sáng, video cảm
          hứng, thiết kế buổi Livestream, tối ưu hóa quảng cáo, tìm hiểm insight
          về đối thủ cạnh tranh
        </div>
        <div>Hãy nắm bắt mọi cơ hội trong TikTok!</div>
      </div>
      <a
        className="px-[30px] h-[50px] text-[20px] font-bold bg-primary flex items-center justify-center cursor-pointer rounded-full text-black/70 mt-[30px] relative"
        href="/explore"
      >
        7 ngày dùng thử miễn phí
      </a>
    </div>
  );
};

export default Banner;
