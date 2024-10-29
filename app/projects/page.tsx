import AlexaTransportProject from "@/components/projects/alexa-transport";
import HumanMotionDiffusion from "@/components/projects/human-motion";

export default function ProjectsPage() {
    return (
        <div className="mx-auto pt-16">
            <h1 className="text-2xl text-center">Main Projects</h1>

            <div className="flex pt-4 justify-center items-center bg-primary-cream">
                <div className="w-full max-w-md p-6 border-4 border-primary-navy-dark rounded-lg">
                    <p className="italic text-primary-navy-dark text-lg">
                        This page is under partial construction
                    </p>
                </div>
            </div>

            <AlexaTransportProject/>

            {/*<hr className="mt-4 w-2/3 mx-auto"/>*/}

            <HumanMotionDiffusion/>
        </div>
    );

}
