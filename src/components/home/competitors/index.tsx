const Competitors = () => {
  return (
    <div className="h-[700px]  bg-center  flex justify-center relative bg-white">
      <div className="bg-competitor-1 w-[1200px] h-[350px] bg-cover bg-center bg-no-repeat absolute"></div>
      <div className="bg-competitor-2 w-[1200px] h-[700px] bg-cover bg-center bg-no-repeat absolute top-[22px]"></div>
      <div
        className="bg-competitor-3 w-[140px] h-[88px] bg-cover absolute left-1/2 translate-x-[-250px] top-[10px]"

      ></div>
      <div className="text-[36px] font-bold text-center absolute pt-[35px] leading-[40px] z-10">
        Thông tin về đối thủ cạnh tranh
      </div>
    </div>
  );
};

export default Competitors;
