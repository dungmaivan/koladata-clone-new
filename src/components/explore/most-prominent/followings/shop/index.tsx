import Item from "./item";

const ShopFollowings = () => {
  return (
    <>
      <Item
        growth={90}
        product1={{
          rank: 1,
          image: "/images/content-creater-1.jpg",
        }}
        product2={{
          rank: 2,
          image: "/images/content-creater-2.jpg",
        }}
        product3={{
          rank: 3,
          image: "/images/content-creater-4.jpg",
        }}
        revenue="1000 tỷ"
        shopName="Mike Shop"
        thumbnail="/images/content-creater-1.jpg"
        type="Chưa phân loại"
      />
    </>
  );
};

export default ShopFollowings;
