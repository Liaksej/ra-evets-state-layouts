"use client";
import { useState } from "react";

import { products } from "./products";
import { CardsView } from "@/components/CardsView";
import { IconSwitch } from "@/components/IconSwitch";
import { ListView } from "@/components/ListView";

export default function Store() {
  const [selected, setSelected] = useState("view_module");

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto w-[48.5rem] flex flex-col">
        <IconSwitch
          icon={selected}
          onSwitch={() => {
            setSelected(
              selected === "view_module" ? "view_list" : "view_module",
            );
          }}
        />
        {selected === "view_module" ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    </div>
  );
}
