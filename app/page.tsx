import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-65px-2rem)] flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-24 px-4 md:px-8 pt-8 md:pt-0">
            <div className="flex flex-col items-start justify-between w-full md:w-96 gap-8">
                <div className="flex flex-col items-start justify-between w-full gap-4">
                    <p className="text-2xl md:text-3xl font-bold text-primary-navy-dark break-words underline">
                        Hi, I&apos;m Reilly Oldham.
                    </p>
                    <p className="text-justify text-sm md:text-base">
                        I&apos;m a software engineer with a focus on backend and full-stack development. I enjoy building scalable systems, optimizing performance, and crafting tools that help other developers.
                    </p>
                </div>
                <div className="text-lg flex flex-col w-full gap-2">
                    <a href="/projects" className="inline-block px-4 py-2 bg-primary-navy-dark text-primary-cream rounded-lg text-center">
                        🔗 Check out my projects
                    </a>
                    <a href="/blog" className="px-3 py-1 border-2 border-primary-navy-dark rounded-md text-center">
                        📖 Read my blog
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center w-48 md:w-auto">
                <Image
                    src="/public/Reilly-Blue-BackG Cropped.png"
                    alt="Reilly with blue background"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    priority
                />
            </div>
        </div>
    );
}