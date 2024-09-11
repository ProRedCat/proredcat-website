import AlexaTransportProject from "@/components/projects/alexa-transport";
import HumanMotionDiffusion from "@/components/projects/human-motion";

export default function ProjectsPage() {
    return (
        <div className="mx-auto pt-4">
            <h1 className="text-2xl text-center">Main Projects</h1>
            <AlexaTransportProject/>

            {/*<hr className="mt-4 w-2/3 mx-auto"/>*/}

            <HumanMotionDiffusion/>
        </div>
    );

}
