import { FunctionComponent } from "react";

interface ShopCardProps {
  card: { name: string; price: string; color: string; img: string };
}
export const ShopCard: FunctionComponent<ShopCardProps> = ({
  card: { name, price, color, img },
}) => {
  return (
    <div className="mx-auto relative w-72">
      <img className="w-72 shadow-2xl" src={img} alt={"image"} />
      <div className="absolute w-72 p-5 top-0 h-full flex">
        <div className="absolute inset-x-0 top-3 text-center text-xl uppercase text-gray-800 ">
          {name}
        </div>
        <div className="absolute inset-x-0 top-11 text-center text-xs text-gray-500">
          {color}
        </div>
        <div className="mx-auto absolute flex flex-1 bottom-4 text-red-500 w-10/12 justify-between">
          <div className="px-2 pl-0 text-sm text-red-500">${price}</div>
          <button className="text-[0.6rem] font-bold uppercase text-red-500 px-2 rounded-full border border-solid border-red-500 hover:bg-red-500 hover:text-white">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
