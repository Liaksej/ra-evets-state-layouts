import { FunctionComponent } from "react";

interface ShopItemProps {
  item: { name: string; price: string; color: string; img: string };
}

export const ShopItem: FunctionComponent<ShopItemProps> = ({
  item: { name, price, color, img },
}) => {
  return (
    <div className="w-full h-28 flex bg-gray-100 justify-between pr-3">
      <img className="h-28" src={img} alt={"image"} />
      <div className="self-center text-center text-3xl uppercase text-gray-800">
        {name}
      </div>
      <div className="self-center text-center text-gray-500">{color}</div>
      <div className="self-center text-lg text-red-500">${price}</div>
      <button className="self-center text-xs h-fit font-bold uppercase text-red-500 px-4 py-2 rounded-full border border-solid border-red-500 hover:bg-red-500 hover:text-white">
        Add to card
      </button>
    </div>
  );
};
