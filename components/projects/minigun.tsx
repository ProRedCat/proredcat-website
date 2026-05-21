import {format} from "date-fns";
import { ProjectCard } from "@/components/project-card";

export default function MinigunProject() {
    const tags = ["ASP.NET Core", "HTMX", "C#", ".NET 9", "TailwindCSS", "Bun"];
    const releaseDate = new Date(2024, 9, 28);

    return (
        <ProjectCard
            title="Minigun"
            href="https://github.com/ProRedCat/minigun"
            meta={`Launched ${format(releaseDate, 'MMMM d, yyyy')}`}
            description="A fast web app built on Raygun's API V3 endpoints to show crash reporting data in a modern UI, using ASP.NET Core, HTMX, and .NET 9."
            image="/projects/minigun/minigun-dashboard.png"
            imageAlt="Minigun dashboard showing error statistics and monitoring"
            imageFit="contain"
            tags={tags}
            links={[
                { href: "https://github.com/ProRedCat/minigun", label: "GitHub" },
                { href: "https://minigun.proredcat.xyz", label: "Live site" },
            ]}
            priority
        />
    );
}
