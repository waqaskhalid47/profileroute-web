import Image from "next/image";
import SectionOne from "./components/landing page/section-one";
import SectionTwo from "./components/landing page/section-two";
import SectionThree from "./components/landing page/section-three";

export default function Home() {
  return (
    <main className="w-full">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
