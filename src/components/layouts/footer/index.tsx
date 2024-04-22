const Footer = () => {
  return (
    <div className="w-full bg-white  flex flex-col justify-between text-[13px] items-center">
      <div className="w-[1158px] flex flex-row items-center m-auto justify-between h-[68px]">
        <div className="text-base-666">
          Bản quyền © Kalowave Technology Viet Nam 2022-2024 Bảo lưu mọi quyền.
        </div>
        <div className="flex flex-row items-center">
          <a
            className="hover:text-primary cursor-pointer"
            href="/contact"
            target="_blank"
          >
            Liên hệ với chúng tôi
          </a>
          <div className="w-[1px] h-[12px] bg-[#666] mx-[24px]"></div>
          <a
            className="hover:text-primary cursor-pointer"
            href="https://kalowave.feishu.cn/docx/Ris9dx1ozoAHiDx68raczwuWnsu"
            target="_blank"
          >
            Chính sách bảo mật
          </a>
          <div className="w-[1px] h-[12px] bg-[#666] mx-[24px]"></div>
          <a
            className="hover:text-primary cursor-pointer"
            href="https://kalowave.feishu.cn/docx/CO8wd6vx2o0MmWxksWFcuGbCnyf"
            target="_blank"
          >
            Điều khoản sử dụng
          </a>
          <div className="w-[1px] h-[12px] bg-[#666] mx-[24px]"></div>
          <a
            className="hover:text-primary cursor-pointer"
            href="/sitemap.xml"
            target="_blank"
          >
            Sơ đồ trang web
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
