import { FunctionComponent } from "react";
import { ShopCard } from "@/components/ShopCard";

interface Created {
  cards: { name: string; price: string; color: string; img: string }[];
}
export const CardsView: FunctionComponent<Created> = ({ cards }) => {
  return (
    <div className="w-full grid grid-cols-3 justify-between gap-y-4">
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  );
};
