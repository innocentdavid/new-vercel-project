import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import ExpandableCardDemoStandard from "@/components/blocks/expandable-card-demo-standard";
import Header from "@/components/header";
import BackgroundBeamsWithCollisionDemo from "@/components/homepage/background-beams-with-collision-demo";
import HoverBorderGradientDemo from "@/components/homepage/hover-border-gradient-demo";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundBeamsWithCollisionDemo />
      <br />
      <br />
      <br />
      <HoverBorderGradientDemo />
      <br />
      <br />
      <br />
      <ExpandableCardDemo />
      <br />
      <br />
      <br />
      <ExpandableCardDemoStandard />
      <br />
      <br />
      <br />
    </>
  );
}
