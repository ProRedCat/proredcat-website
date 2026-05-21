import {format} from "date-fns";
import { ProjectCard } from "@/components/project-card";

export default function HumanMotionDiffusion() {
    const tags = ["Python", "GluonTS", "Diffusion", "LSTM", "LaTeX"];
    const releaseDate = new Date(2023, 10, 10);

    return (
        <ProjectCard
            title="Diffusion Based Human Motion Generation"
            href="https://ojs.victoria.ac.nz/wfes/article/view/8416/7515"
            meta={`Completed ${format(releaseDate, 'MMMM d, yyyy')}`}
            description="My honours research paper, developing an autoregressive conditional diffusion model for realistic human motion sequences as an alternative to traditional animation and motion capture workflows."
            image="/projects/human-motion/man-running.gif"
            imageAlt="Stick figure running"
            tags={tags}
            links={[
                { href: "https://ojs.victoria.ac.nz/wfes/article/view/8416/7515", label: "Research paper" },
            ]}
        />
    );
}
