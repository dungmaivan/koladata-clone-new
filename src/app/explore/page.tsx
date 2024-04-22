import SearchAnswer from "@/components/explore/search-answer";
import MostProminent from "@/components/explore/most-prominent";

const Explore = () => {
  return (
    <div className="container  m-auto mt-[16px] pb-[24px] min-h-[calc(100vh-95px)]">
      <SearchAnswer />
      <MostProminent />
    </div>
  );
};

export default Explore;
