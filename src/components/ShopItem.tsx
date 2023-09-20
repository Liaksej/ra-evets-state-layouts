import { FunctionComponent } from "react";

interface ShopItemProps {
  name: string;
  price: string;
  color: string;
  img: string;
}
export const ShopItem: FunctionComponent<ShopItemProps> = ({
  name,
  price,
  color,
  img,
}) => {
  return (
    <>
      <img className="w-64 h-full" src={img} alt={"image"} />
      <div>{name}</div>
      <div>{color}</div>
      <div>{price}</div>
      <button>Add to card</button>
    </>
  );
};
