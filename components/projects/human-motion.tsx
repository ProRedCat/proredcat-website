import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function HumanMotionDiffusion() {
    const tags = ["Python", "GluonTS", "Diffusion", "LSTM", "LaTeX"];
    const releaseDate = new Date(2023, 10, 10);

    return (
        <div className="flex justify-center mt-4 w-full">
            <div className="sm:w-4/5 md:4/5 lg:w-2/5 shadow-2xl p-6 pb-2 rounded-xl h-fit">
                <div className="flex items-center justify-center">
                    <Link href="https://ojs.victoria.ac.nz/wfes/article/view/8416/7515"
                          className="text-2xl font-bold text-primary-navy-dark text-center underline">Diffusion Based Human Motion Generation</Link>
                </div>

                <div className="flex flex-col items-center">

                    <div className="flex pt-2">
                        <p className="pr-2">Status:</p>
                        <div className="px-3 py-1 bg-primary-green-dark text-primary-cream text-sm rounded-lg">
                            Completed
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">Completed: {format(releaseDate, 'MMMM d, yyyy')}</p>

                    <div className="flex gap-2">
                        <p>Links:</p>
                        <Link href="https://ojs.victoria.ac.nz/wfes/article/view/8416/7515" className="underline">Research Paper</Link>
                    </div>

                </div>


                <hr className="mt-2"/>

                <div className="mt-4">
                    <div>
                        <p>
                            This project developed an autoregressive conditional diffusion model to efficiently generate realistic human
                            motion sequences, offering a faster and more scalable alternative to traditional animation and motion capture
                            methods. By integrating an LSTM-based autoregressive component, the model predicts future motion based on past
                            actions, and was optimized for faster training with advanced solvers, achieving strong performance in
                            time-series tasks.
                        </p>

                    </div>
                    <Image
                        src="/projects/human-motion/man-running.gif"
                        alt="Stick figure running"
                        width={240}
                        height={240}
                        className="rounded-3xl pt-2 mx-auto w-80%"
                        priority={true}
                    />
                </div>


                <hr className="mt-2"/>

                <p className="text-center text-lg pt-2">Technologies</p>
                <div className="flex flex-wrap items-center justify-center pt-2">
                    {tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block px-3 py-1 bg-red-secondary text-primary-cream text-sm rounded-lg mr-2 mb-2 pt-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}