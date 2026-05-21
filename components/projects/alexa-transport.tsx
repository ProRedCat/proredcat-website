import {format} from "date-fns";
import { ProjectCard } from "@/components/project-card";

export default function AlexaTransportProject() {
    const tags = ["Alexa ASK", "TypeScript", "AWS", "Lambda", "Vite"];
    const releaseDate = new Date(2024, 9, 10);

    return (
        <ProjectCard
            title="Wellington Public Transport: Alexa Skill"
            href="/blog/alexa-skill-announcement-wellington-transport"
            meta={`Launched ${format(releaseDate, 'MMMM d, yyyy')}`}
            description="An Alexa Skill for Wellington's Metlink transport, offering real-time bus and train schedules for hands-free checks during busy mornings."
            image="/blog/alexa-skill-announcement-wellington-transport/hero.webp"
            imageAlt="Alexa Skill hero image"
            tags={tags}
            links={[
                { href: "https://www.amazon.com.au/dp/B0D2DN6DX9/", label: "Alexa Skill Store" },
                { href: "/blog/alexa-skill-announcement-wellington-transport", label: "Blog post" },
            ]}
        />
    );
}
