import React, { useState } from "react";

const DISHES = [
  {
    id: 1,
    category: "Rice",
    name: "Smoky Party Jollof",
    desc: "Firewood-style jollof rice, grilled chicken, fried plantain.",
    price: "₦3,500",
    img: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Grill",
    name: "Beef Suya",
    desc: "Tender beef with suya spice, onions & tomatoes.",
    price: "₦2,800",
    img: "https://i.pinimg.com/736x/f6/ee/0a/f6ee0a7eedaea903507aed732d97315c.jpg?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Soups",
    name: "Egusi & Pounded Yam",
    desc: "Rich melon seed soup, assorted meats, fresh greens.",
    price: "₦4,200",
    img: "https://i.pinimg.com/736x/46/1d/23/461d235c705d2a151c532124c978a5c5.jpg?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Snacks",
    name: "Puff-Puff",
    desc: "Golden, fluffy, lightly sugared dough balls.",
    price: "₦1,500",
    img: "https://i.pinimg.com/1200x/d5/5e/08/d55e085449231383a4c79cbdf85f0ec4.jpg?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Rice",
    name: "Ofada & Ayamase",
    desc: "Native Ofada rice with spicy green pepper sauce.",
    price: "₦3,800",
    img: "https://i.pinimg.com/736x/2b/a0/62/2ba062ce4ecc7dd7d7db9f4b4ce1a7ba.jpg?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Soups",
    name: "Afang Soup",
    desc: "Afang leaves, waterleaf, smoked fish & beef, swallow of choice.",
    price: "₦4,000",
    img: "https://i.pinimg.com/736x/4b/a2/74/4ba274c5fde9f1d84382b5a2eb30ed1c.jpg?q=80&w=1200&auto=format&fit=crop",
  },
];

const CATEGORIES = ["All", "Rice", "Grill", "Soups", "Snacks"];

export default function Menu() {
  const [active, setActive] = useState("All");
  const items =
    active === "All" ? DISHES : DISHES.filter((d) => d.category === active);

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b352a]">
              Our Menu
            </h2>
            <p className="text-[#4b352a]/80 mt-2 max-w-2xl mx-auto">
              Familiar favorites and regional gems — always fresh, always
              comforting.
            </p>
          </div>

          {/* Category pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full border transition font-medium ${
                  active === cat
                    ? "bg-[#ca7842] text-white border-[#ca7842]"
                    : "bg-white text-[#4b352a] border-[#4b352a]/20 hover:border-[#ca7842]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl hover:-translate-y-1 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-100 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#4b352a]">
                      {item.name}
                    </h3>
                    <span className="text-[#ca7842] font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[#4b352a]/75">{item.desc}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="bg-[#4b352a] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#ca7842] transition">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
