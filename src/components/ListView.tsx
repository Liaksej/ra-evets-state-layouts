import { FunctionComponent } from "react";
import { ShopItem } from "@/components/ShopItem";

interface Created {
  items: { name: string; price: string; color: string; img: string }[];
}
export const ListView: FunctionComponent<Created> = ({ items }) => {
  return (
    <div className="w-full flex flex-col justify-between gap-1">
      {items.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  );
};
