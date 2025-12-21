import ServiceSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ReviewsSectionDemo from "@/components/reviews-section-demo";
import Footer from "@/components/mini-footer";
import VideoHero from "@/components/video-hero";
import LetWorkSectionDemo from "@/components/let-work-section-demo";
import Intro from "../Intro/page";

function Home() {
  return (
    <div>
      <Intro />
      <div className="z-0 relative">
        <ServiceSection />
      </div>
      <AboutSection />
      <VideoHero />
      <ReviewsSectionDemo />
      <LetWorkSectionDemo />
      <Footer />
    </div>
  )
}
export default Home;