import { FunctionComponent } from "react";

interface ShopCardProps {
  card: { name: string; price: string; color: string; img: string };
}
export const ShopCard: FunctionComponent<ShopCardProps> = ({
  card: { name, price, color, img },
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
