import { FunctionComponent } from "react";
import { ShopItem } from "@/components/ShopItem";

interface Created {
  items: { name: string; price: string; color: string; img: string }[];
}
export const ListView: FunctionComponent<Created> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="p-1">
          <ShopItem item={item} />
        </div>
      ))}
    </div>
  );
};
