import Image from "next/image";

export default function Header() {
  return (
    <div className="min-w-[1280px]">
      <div className="w-full h-[56px]  px-[24px] flex flex-row items-center justify-between bg-[#F3F7FC]">
        <div className="flex flex-row items-center">
          <a className="cursor-pointer" href=".">
            <Image
              alt="Kalodata"
              // fetchpriority="high"
              width="125"
              height="22"
              decoding="async"
              data-nimg="1"
              src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/logo.6d9d7965.svg"
            />
          </a>
          <div className="flex flex-row items-center ml-[36.7px] gap-[10px] xl:gap-[24px] cursor-pointer">
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/explore"
            >
              Khám phá
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/category"
            >
              Danh mục
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/shop"
            >
              Cửa hàng
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/creator"
            >
              Nhà sáng tạo
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/product"
            >
              Sản phẩm
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/video"
            >
              Video
            </a>
            <a
              className="h-[30px] px-[8px] rounded flex justify-center items-center hover:text-primary hover:bg-[#EEF6FD] hover:font-bold whitespace-nowrap"
              href="/livestream"
            >
              Livestream
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[24px]">
          <div className="flex flex-row items-center gap-[24px]">
            <div className="relative z-10">
              <div className="flex flex-row items-center gap-[4px] cursor-pointer whitespace-nowrap">
                <Image
                  alt="language"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/language.c769e816.svg"
                />
                Tiếng Việt
                <Image
                  alt="language"
                  loading="lazy"
                  width="15"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/arrowdown.a529b359.svg"
                />
              </div>
            </div>
            <a
              className="flex flex-row items-center gap-[4px] whitespace-nowrap"
              href="/pricing"
            >
              <Image
                alt="pricing"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/pricing.3b7168f6.svg"
              />
              Gói đăng ký
            </a>
            <a
              className="flex flex-row items-center gap-[4px]"
              href="https://kalodata.com/vi/blog/"
              target="_blank"
            >
              <Image
                alt="blog"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/blog.f62d3524.svg"
              />
              Blog
            </a>
            <a className="flex flex-row gap-[4px] items-center" href="/me">
              <Image
                alt="avatar"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/avatar.953a3352.svg"
              />
              Mike Rock Lee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
