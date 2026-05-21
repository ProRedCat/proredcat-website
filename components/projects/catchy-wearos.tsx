import {format} from "date-fns";
import { ProjectCard } from "@/components/project-card";

export default function CatchyWearOSProject() {
    const tags = ["Wear OS", "Kotlin", "Android", "TWA", "Data Layer", "Catchy"];
    const releaseDate = new Date(2026, 4, 20);

    return (
        <ProjectCard
            title="Catchy for Wear OS"
            href="/blog/catchy-wearos-wearable-data-layer"
            meta={`Launched ${format(releaseDate, 'MMMM d, yyyy')}`}
            description="A Wear OS companion app for Catchy that brings Wellington public transport arrivals, saved stops, live timing, cancellations, bus replacements, and Android app filters straight to your wrist."
            image="/blog/catchy-wearos-wearable-data-layer/catchy-wearos-hero.png"
            imageAlt="Catchy Wear OS companion app hero image"
            tags={tags}
            links={[
                { href: "https://catchy.nz/", label: "Catchy" },
                { href: "/blog/catchy-wearos-wearable-data-layer", label: "Blog post" },
            ]}
            priority
        />
    );
}
