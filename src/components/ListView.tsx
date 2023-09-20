import { FunctionComponent } from "react";
import { ShopItem } from "@/components/ShopItem";

interface Created {
  items: { name: string; price: string; color: string; img: string }[];
}
export const ListView: FunctionComponent<Created> = ({ items }) => {
  return (
    <div>
      {items.map(({ name, price, color, img }, index) => (
        <div key={index} className="p-1">
          <ShopItem name={name} price={price} color={color} img={img} />
        </div>
      ))}
    </div>
  );
};
