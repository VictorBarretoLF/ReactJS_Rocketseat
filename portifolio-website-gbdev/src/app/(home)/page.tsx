import { HeroSection } from "@/components/hero-section";
import { TechExperienceList } from "@/components/tech-experience-list";

export const metadata = {
    title: "Home",
};

export default async function HomePage() {
    return (
        <>
            <HeroSection />
            <TechExperienceList />
        </>
    );
}
