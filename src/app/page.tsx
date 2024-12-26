import { LampDemo } from "./components/ui/lamp";
import { InfiniteMovingCardsTestimonials } from "./components/ui/infinite-moving-cards";
import {Navbar} from "./components/ui/navbar-menu";
import InfiniteMovingCardsClientele from "./components/ui/logoTileSection";
import TimelineDemo from "./components/ui/timeline";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <LampDemo/>
      <InfiniteMovingCardsClientele/>
      <TimelineDemo/>
      <InfiniteMovingCardsTestimonials/>

      
    </div>
  );
}
