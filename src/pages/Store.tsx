import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export const Store = () => {
  return (
    <>
      <h1 className="my-6 text-3xl">Store</h1>
      <div className="bg-slate-400 grid grid-cols-3 grid-rows-3 gap-8">
        {storeItems.map((item, idx) => (
          <StoreItem key={idx} {...item} />
        ))}
      </div>
    </>
  );
};
