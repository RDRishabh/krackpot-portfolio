import { LampDemo } from "./components/ui/lamp";
import { InfiniteMovingCardsTestimonials } from "./components/ui/infinite-moving-cards";
import {Navbar} from "./components/ui/navbar-menu";
import InfiniteMovingCardsClientele from "./components/ui/logoTileSection";
import TimelineDemo from "./components/ui/timeline";
import {Footer} from "./components/ui/footer";
import ParallaxScrollDemo from "./components/ui/parallax-scroll"

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <LampDemo/>
      <InfiniteMovingCardsClientele/>
      <TimelineDemo/>
      <ParallaxScrollDemo/>
      <InfiniteMovingCardsTestimonials/>
      <Footer/>
    </div>
  );
}
