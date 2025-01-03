"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";
// import { div } from "framer-motion/client";

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

interface HoveredLinkProps extends LinkProps {
  children: React.ReactNode; // Specify that children can be any valid React node
}

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link {...rest} className="text-slate-400 hover:text-slate-200">
      {children}
    </Link>
  );
};

// Export Navbar so it can be imported in other files
export const Navbar = ({ className }: { className?: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeContent, setActiveContent] = useState<"links" | "products" | null>(null);
  const [active, setActive] = useState<string | null>(null);

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
        <nav className="flex justify-center space-x-8 py-4  ">
        <Menu setActive={setActive}>
          {navData.map((item) => (
            <Dropdown key={item.title} item={item}  setActive={setActive} active={active}/>
          ))}
          </Menu>
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
          className="fixed top-0 right-0 w-64 h-full bg-slate-950 shadow-lg z-50"
        >
          <button
            className="text-slate-200 text-4xl absolute top-4 right-4"
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
                className="text-slate-200 text-lg px-4"
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
                        <div className="border-b border-white p-2" key={link.href}>
                          <HoveredLink key={link.href} href={link.href}>
                            {link.name}
                          </HoveredLink>
                        </div>
                      ))}
                  </div>
                )}
                {activeContent === "products" && (
                  <div className="grid grid-cols-1 gap-4">
                    {navData
                      .find((item) => item.title === activeSection)
                      ?.products?.map((product) => (
                        <div className="border-b border-white p-2" key={product.href}>
                          <ProductItem key={product.href} {...product} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            
            <div>
              <div className="text-slate-100 text-2xl font-bold p-4">
                SideMenu
              </div>  
              {navData.map((item) => (
                <SidebarItem
                  key={item.title}
                  item={item}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          )}
        </div>
        </motion.div>
      )}
    </div>
  );
};

function Dropdown({
  item,
  setActive,
  active,
}: {
  item: typeof navData[number];
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
}) {
  const isActive = active === item.title;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setActive(item.title)}
      onMouseLeave={() => setActive(null)}
    >
      <MenuItem setActive={setActive} active={active} item={item.title}>
      {isActive && (
          item.links ? (
            <div className="flex flex-col space-y-4 text-sm">
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
          )
          
      )}
      </MenuItem>
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
    <div className="border-b mb-2 p-2">
      {/* Main category button */}
      
      <button
        className="text-slate-100 text-xl font-medium"
        onClick={() => onCategoryClick(item.title, item.links ? "links" : "products")}
      >
        {item.title}
      </button>
    </div>
  );
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-slate-100 hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-slate-950 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-300 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-slate-300 bg-slate-950 shadow-input flex justify-center space-x-4 px-8 py-4"
    >
      {children}
    </nav>
  );
};

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
