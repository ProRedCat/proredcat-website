import AlexaTransportProject from "@/components/projects/alexa-transport";
import HumanMotionDiffusion from "@/components/projects/human-motion";
import MinigunProject from "@/components/projects/minigun";
import RaygunMCPProject from "@/components/projects/raygun-mcp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Reilly Oldham",
    description: "View my software engineering projects including AI research, developer tools, and web applications.",
    alternates: {
        canonical: "https://www.proredcat.xyz/projects",
    },
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-primary-cream">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <RaygunMCPProject />
                    <MinigunProject />
                    <AlexaTransportProject />
                    <HumanMotionDiffusion />
                    {/* Add more projects here */}
                </div>
            </div>
        </div>
    );
}
