const FAQ = () => {
  return (
    <div className="w-full bg-[#F7FBFE] p-[40px] flex flex-col items-center">
      <div className="text-[36px] font-bold text-center leading-[44px]">
        FAQs
      </div>
      <div className="w-[1158px] bg-white rounded p-[32px] mt-[24px]  flex flex-col gap-[24px] relative">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[24px] font-bold leading-[32px]">
            Kalodata là gì?
          </div>
          <div className="text-[16px] text-base-666 leading-[32px]">
            Kalodata là một công cụ phân tích dữ liệu và hỗ trợ phát triển kinh
            doanh trên TikTok Shop. Chúng tôi giúp bạn tối ưu hóa hiệu suất trên
            TikTok bằng cách cung cấp dữ liệu chi tiết về ý tưởng video hot,
            chiến lược livestream, tìm kiếm đối tác affiliate, đánh giá đối thủ
            và hỗ trợ phát triển sản phẩm nổi bật trên TikTok.
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[24px] font-bold leading-[32px]">
            Dữ liệu của Kalodata được thu thập từ đâu và độ chính xác của nó như
            thế nào?
          </div>
          <div className="text-[16px] text-base-666 leading-[32px]">
            Dữ liệu thương mại điện tử TikTok được đội ngũ kỹ thuật của chúng
            tôi thu thập từ các kênh công khai, sau đó kết hợp với mô hình thuật
            toán AI tiên tiến và công nghệ xử lý dữ liệu để gia công, một số dữ
            liệu (ví dụ: số tiền giao dịch, chi phí quảng cáo) sẽ có một số sai
            số so với dữ liệu thực tế. Với việc mô hình của chúng tôi được đào
            tạo và nâng cấp hàng ngày, độ chính xác của dữ liệu cũng đang không
            ngừng được cải thiện. Mục tiêu chính của chúng tôi là giúp người
            dùng phát hiện ra các sản phẩm, cửa hàng và nội dung đáng để tìm
            hiểu sâu hơn, học hỏi và tham khảo, để hỗ trợ việc xây dựng chiến
            lược kinh doanh khoa học. Xin đừng sử dụng dữ liệu của chúng tôi cho
            các tình huống yêu cầu độ chính xác cao như việc thanh toán hoa hồng
            với đối tác, đánh giá hiệu suất, v.v.
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[24px] font-bold leading-[32px]">
            Giới thiệu về đội ngũ của Kalodata
          </div>
          <div className="text-[16px] text-base-666 leading-[32px]">
            Chúng tôi có đội ngũ lãnh đạo xuất sắc đến từ bộ phận thương mại
            điện tử toàn cầu của ByteDance, đã đóng góp vào việc xây dựng TikTok
            Shop từ đầu. Đội ngũ cốt cán của chúng tôi bao gồm những chuyên gia
            có kinh nghiệm rộng lớn trong lĩnh vực phân tích dữ liệu, truyền
            thông xã hội và marketing. Các thành viên trong team đã làm việc với
            nhiều doanh nghiệp và tổ chức hàng đầu, tích lũy được nhiều kinh
            nghiệm từ những dự án thành công và có sự hiểu biết sâu rộng về
            ngành.
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[24px] font-bold leading-[32px]">
            Chi phí gói của Kalodata
          </div>
          <div className="text-[16px] text-base-666 leading-[32px]">
            <div>
              Bạn có thể xem và tìm hiểu chi tiết về giá cả và chức năng của các
              gói dịch vụ trên trang thanh toán của chúng tôi:
              <a
                href="https://kalodata.com/pricing"
                target="_blank"
                className="text-primary underline ml-[4px] cursor-pointer hover:text-primary-hover"
              >
                https://kalodata.com/pricing
              </a>
              .
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[24px] font-bold leading-[32px]">
            Nếu tôi giới thiệu Kalodata cho người khác, tôi có thể nhận được hoa
            hồng không?
          </div>
          <div className="text-[16px] text-base-666 leading-[32px]">
            <div>
              Chúng tôi có chính sách hợp tác phân phối, vui lòng
              <a
                className="text-primary hover:text-primary hover:text-primary-hover ml-[4px]"
                href="/contact"
                target="_blank"
              >
                liên hệ với chúng tôi
              </a>
              .
            </div>
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="absolute top-[-16px] right-[-16px]"
          src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/icon-pin.b164bf6c.svg"
        />
      </div>
    </div>
  );
};

export default FAQ;
