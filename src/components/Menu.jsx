import React, { useState } from "react";

const DISHES = [
  {
    id: 1,
    category: "Rice",
    name: "Smoky Party Jollof",
    desc: "Firewood-style jollof rice, grilled chicken, fried plantain.",
    price: "₦3,500",
    img: "https://images.unsplash.com/photo-1617191518005-5d1b4a1af9da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Grill",
    name: "Beef Suya",
    desc: "Tender beef with suya spice, onions & tomatoes.",
    price: "₦2,800",
    img: "https://images.unsplash.com/photo-1617191518400-48a3c6ebadc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Soups",
    name: "Egusi & Pounded Yam",
    desc: "Rich melon seed soup, assorted meats, fresh greens.",
    price: "₦4,200",
    img: "https://images.unsplash.com/photo-1604908554027-2311f2e2d3d4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Snacks",
    name: "Puff-Puff",
    desc: "Golden, fluffy, lightly sugared dough balls.",
    price: "₦1,500",
    img: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Rice",
    name: "Ofada & Ayamase",
    desc: "Native Ofada rice with spicy green pepper sauce.",
    price: "₦3,800",
    img: "https://images.unsplash.com/photo-1616851111419-53b2b0c0b2ac?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Soups",
    name: "Afang Soup",
    desc: "Afang leaves, waterleaf, smoked fish & beef, swallow of choice.",
    price: "₦4,000",
    img: "https://images.unsplash.com/photo-1588167056540-e1d7c6b2d7ce?q=80&w=1200&auto=format&fit=crop",
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
                  className="w-full h-52 object-cover"
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
