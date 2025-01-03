"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Transition for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

// JSON for navigation structure
const navData = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/web-dev" },
      { name: "Interface Design", href: "/interface-design" },
      { name: "Search Engine Optimization", href: "/seo" },
      { name: "Branding", href: "/branding" },
    ],
  },
  {
    title: "Products",
    products: [
      {
        name: "Algochurn",
        href: "https://algochurn.com",
        description: "Prepare for tech interviews like never before.",
        image: "",
      },
      {
        name: "Tailwind Master Kit",
        href: "https://tailwindmasterkit.com",
        description: "Production ready Tailwind CSS components.",
        image: "",
      },
      {
        name: "Moonbeam",
        href: "https://gomoonbeam.com",
        description: "Go from idea to blog in minutes.",
        image: "",
      },
      {
        name: "Rogue",
        href: "https://userogue.com",
        description: "Respond to RFPs 10x faster using AI.",
        image: "",
      },
    ],
  },
  {
    title: "Pricing",
    links: [
      { name: "Hobby", href: "/hobby" },
      { name: "Individual", href: "/individual" },
      { name: "Team", href: "/team" },
      { name: "Enterprise", href: "/enterprise" },
    ],
  },
];

// Export Navbar so it can be imported in other files
export const Navbar = ({ className }: { className?: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeContent, setActiveContent] = useState<"links" | "products" | null>(null);

  const handleCategoryClick = (category: string, contentType: "links" | "products" | null) => {
    setActiveSection(category);
    setActiveContent(contentType);
  };

  const handleBackButtonClick = () => {
    setActiveSection(null);
    setActiveContent(null);
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <nav className="flex justify-center space-x-8 py-4 bg-slate-950 border-b border-slate-300">
          {navData.map((item) => (
            <Dropdown key={item.title} item={item} />
          ))}
        </nav>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="block md:hidden fixed top-4 right-4 z-50 bg-slate-800 p-2 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open Menu"
        aria-expanded={isSidebarOpen ? "true" : "false"}
      >
        <span className="block w-6 h-0.5 bg-slate-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-slate-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-slate-200"></span>
      </button>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ ...transition, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-64 h-full bg-slate-950 shadow-lg z-50 p-4"
        >
          <button
            className="text-slate-200 text-2xl absolute top-4 right-4"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <div className="flex flex-col space-y-6 mt-6">
          {activeSection ? (
            <div>
              {/* Back Button */}
              <button
                className="text-slate-200 text-lg"
                onClick={handleBackButtonClick}
              >
                &larr; 
              </button>

              {/* Content for the selected section */}
              <div className="mt-4">
                {activeContent === "links" && (
                  <div className="flex flex-col space-y-2">
                    {navData
                      .find((item) => item.title === activeSection)
                      ?.links?.map((link) => (
                        <HoveredLink key={link.href} href={link.href}>
                          {link.name}
                        </HoveredLink>
                      ))}
                  </div>
                )}
                {activeContent === "products" && (
                  <div className="grid grid-cols-1 gap-4">
                    {navData
                      .find((item) => item.title === activeSection)
                      ?.products?.map((product) => (
                        <ProductItem key={product.href} {...product} />
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            navData.map((item) => (
              <SidebarItem
                key={item.title}
                item={item}
                onCategoryClick={handleCategoryClick}
              />
            ))
          )}
        </div>
        </motion.div>
      )}
    </div>
  );
};

function Dropdown({ item }: { item: typeof navData[number] }) {
  return (
    <div className="group relative">
      <button className="text-slate-200 hover:underline">{item.title}</button>
      <div className="absolute hidden group-hover:block bg-slate-950 p-4 rounded-lg shadow-lg">
        {item.links ? (
          <div className="flex flex-col space-y-2">
            {item.links.map((link) => (
              <HoveredLink key={link.href} href={link.href}>
                {link.name}
              </HoveredLink>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {item.products?.map((product) => (
              <ProductItem key={product.href} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SidebarItem({
  item,
  onCategoryClick,
}: {
  item: typeof navData[number];
  onCategoryClick: (category: string, contentType: "links" | "products" | null) => void;
}) {
  return (
    <div>
      {/* Main category button */}
      <button
        className="text-slate-100 text-xl font-bold"
        onClick={() => onCategoryClick(item.title, item.links ? "links" : "products")}
      >
        {item.title}
      </button>
    </div>
  );
}

function HoveredLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="text-slate-400 hover:text-slate-200">
      {children}
    </Link>
  );
}

function ProductItem({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex flex-col space-y-1">
      <h5 className="text-slate-100 font-bold">{name}</h5>
      <p className="text-slate-400 text-sm">{description}</p>
    </Link>
  );
}
