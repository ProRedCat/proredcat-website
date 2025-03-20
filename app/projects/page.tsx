import AlexaTransportProject from "@/components/projects/alexa-transport";
import HumanMotionDiffusion from "@/components/projects/human-motion";
import MinigunProject from "@/components/projects/minigun";

export default function ProjectsPage() {
    return (
        <div className="min-h-[calc(100vh-65px-2rem)] bg-primary-cream">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <MinigunProject />
                    <AlexaTransportProject />
                    <HumanMotionDiffusion />
                    {/* Add more projects here */}
                </div>
            </div>
        </div>
    );
}
