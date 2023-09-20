import { FunctionComponent } from "react";
import { ShopCard } from "@/components/ShopCard";

interface Created {
  cards: { name: string; price: string; color: string; img: string }[];
}
export const CardsView: FunctionComponent<Created> = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="p-1">
          <ShopCard card={card} />
        </div>
      ))}
    </div>
  );
};
