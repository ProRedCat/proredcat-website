import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function HumanMotionDiffusion() {
    const tags = ["Python", "GluonTS", "Diffusion", "LSTM", "LaTeX"];
    const releaseDate = new Date(2023, 10, 10);

    return (
        <div className="flex flex-col w-full h-[480px] shadow-lg rounded-b-3xl">
            <div className="relative w-full h-52">
                <Image
                    src="/projects/human-motion/man-running.gif"
                    alt="Stick figure running"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover rounded-t-lg"
                    priority={true}
                    unoptimized
                />
            </div>
            
            <div className="p-5 pt-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href="https://ojs.victoria.ac.nz/wfes/article/view/8416/7515"
                          className="text-xl font-semibold line-clamp-2 block">
                        Diffusion Based Human Motion Generation
                    </Link>
                    <p className="text-sm opacity-70">
                        Completed: {format(releaseDate, 'MMMM d, yyyy')}
                    </p>
                </div>

                <hr/>

                <p className="mb-4 flex-grow line-clamp-3 pt-2">
                    This was my honours research paper where I developed a novel autoregressive conditional diffusion model to efficiently generate realistic human
                    motion sequences, offering a faster and more scalable alternative to traditional animation and motion capture methods.
                </p>

                <div className="mt-auto">
                    {tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex px-2 py-1 bg-red-secondary text-primary-cream text-sm rounded-[10px] mr-2 mb-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-2">
                    <Link href="https://ojs.victoria.ac.nz/wfes/article/view/8416/7515" 
                          className="text-sm underline">
                        Research Paper
                    </Link>
                </div>
            </div>
        </div>
    );
}