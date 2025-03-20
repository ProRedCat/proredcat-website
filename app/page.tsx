import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="h-[calc(100vh-65px-2rem)] flex justify-center items-center gap-24">
            <div className="flex flex-col items-start justify-between w-96 gap-8">
                <div className="flex flex-col items-start justify-between w-96 gap-4">
                    <p className="text-3xl font-bold text-primary-navy-dark break-words underline">
                        Hi, I’m Reilly Oldham.
                    </p>
                    <p className="text-justify">
                        I’m a software engineer with a focus on backend and full-stack development. I enjoy building scalable systems, optimizing performance, and crafting tools that help other developers.
                    </p>
                </div>
                <p className="text-lg flex flex-col gap-1">
                    <a href="/projects" className="inline-block px-4 py-2 bg-primary-navy-dark text-primary-cream rounded-lg">
                        🔗 Check out my projects
                    </a>
                    <a href="/blog" className="px-3 py-1 border-2 border-primary-navy-dark rounded-md">
                        📖 Read my blog
                    </a>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Image
                    src="/static/Reilly-Blue-BackG Cropped.png"
                    alt="Reilly with blue background"
                    width={400}
                    height={400}
                    className="max-w-full h-auto rounded-2xl"
                    priority
                />
            </div>
        </div>
    );
}