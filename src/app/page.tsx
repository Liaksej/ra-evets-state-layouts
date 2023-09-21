"use client";
import { useState } from "react";

import { products } from "./products";
import { CardsView } from "@/components/CardsView";
import { IconSwitch } from "@/components/IconSwitch";
import { ListView } from "@/components/ListView";

export default function Store() {
  const [selected, setSelected] = useState("view_module");

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="w-11/12 flex flex-wrap mx-auto">
        <IconSwitch
          icon={selected}
          onSwitch={() => {
            setSelected(
              selected === "view_module" ? "view_list" : "view_module",
            );
          }}
        />
        {selected === "view_module" ? (
          <ListView items={products} />
        ) : (
          <CardsView cards={products} />
        )}
      </div>
    </div>
  );
}
