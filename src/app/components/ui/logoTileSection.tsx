"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function InfiniteMovingCardsClientele() {
    return (
      <div className="h-[20rem] flex flex-col antialiased bg-slate-950 items-center justify-center relative overflow-hidden">
          
            <LogoTileSection
            items={logoTiles}
            direction="right"
            speed="normal"
            /> 
      </div>
    );
  }


  const logoTiles = [
    {
        src: "https://cdn.prod.website-files.com/64c39e931e2d449f68ab4318/64d241c468c75fcfcaf2fadd_logo-06.png",
        alt: "Logo 1",
        bg: "bg-blue-50"
    },
    {
        src: "https://cdn.prod.website-files.com/64c39e931e2d449f68ab4318/64d241c34c55e275ecf9c3db_logo-04-p-500.png",
        alt: "Logo 2",
        bg: "bg-blue-50"
    },
    {
        src: "https://cdn.prod.website-files.com/64c39e931e2d449f68ab4318/64d241c386de058e8087ce09_logo-03.png",
        alt: "Logo 3",
        bg: "bg-blue-50"
    },
    {
        src: "https://cdn.prod.website-files.com/64c39e931e2d449f68ab4318/64d241c4c500ab6613b4f60a_logo-07-p-500.png",
        alt: "Logo 4",
        bg: "bg-blue-50"
    },
    {
        src: "https://cdn.prod.website-files.com/64c39e931e2d449f68ab4318/64d241c46258c0ae8f17185e_logo-09-p-500.png",
        alt: "Logo 5",
        bg: "bg-blue-50"
    },
  ]
   


const LogoTileSection = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
  }: {
    items: {
      src: string;
      alt: string;
      bg?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  }) => {

const containerRef = React.useRef<HTMLDivElement>(null);
const scrollerRef = React.useRef<HTMLUListElement>(null);

useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

return (
  <div
    ref={containerRef}
    className={cn(
      "scroller relative overflow-hidden",
      className
    )}
  >
    <div className="logo-tile-caption shadow-md text-center text-white font-bold text-4xl">
      We&apos;ve worked with
    </div>
    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 "
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
          }}
          key={idx}
        >
          <div className="logo-tile p-4 rounded-lg flex items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={50}
              className="client-logo-base"
            />
          </div>
        </li>
      ))}
    </ul>
  </div>

  );
};

