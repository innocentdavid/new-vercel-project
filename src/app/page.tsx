
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import ExpandableCardDemoStandard from "@/components/blocks/expandable-card-demo-standard";
import BackgroundBeamsWithCollisionDemo from "@/components/homepage/background-beams-with-collision-demo";
import HoverBorderGradientDemo from "@/components/homepage/hover-border-gradient-demo";
import { PlaceholdersAndVanishInputDemo } from "@/components/homepage/PlaceholdersAndVanishInputDemo";

export default function Home() {
  return (
    <>
    navbar
      <BackgroundBeamsWithCollisionDemo />
      <br />
      <br />
      <br />
      <PlaceholdersAndVanishInputDemo />
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
