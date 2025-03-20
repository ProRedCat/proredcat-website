import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function MinigunProject() {
    const tags = ["ASP.NET Core", "HTMX", "C#", ".NET 9", "TailwindCSS"];
    const releaseDate = new Date(2024, 9, 28);

    return (
        <div className="flex flex-col w-full h-[480px] shadow-lg rounded-b-3xl">
            <div className="relative w-full h-52 bg-[#001B2E]">
                <Image
                    src="/projects/minigun/minigun-dashboard.png"
                    alt="Minigun dashboard showing error statistics and monitoring"
                    fill
                    className="object-contain rounded-t-lg p-2"
                    priority={true}
                />
            </div>
            
            <div className="p-5 pt-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href="https://github.com/ProRedCat/minigun"
                          className="text-xl font-semibold line-clamp-2 block">
                        Minigun
                    </Link>
                    <p className="text-sm opacity-70">
                        Launched: {format(releaseDate, 'MMMM d, yyyy')}
                    </p>
                </div>

                <hr/>

                <p className="mb-4 flex-grow line-clamp-3 pt-2">
                    A blazingly fast Webapp built on Raygun&apos;s API V3 endpoints to show your crash reporting data in a new modern UI. 
                    Built with ASP.NET Core and HTMX, it leverages the latest .NET 9 features for optimal performance and developer experience.
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
                    <Link href="https://github.com/ProRedCat/minigun" 
                          className="text-sm underline">
                        GitHub
                    </Link>
                    <Link href="https://minigun.proredcat.xyz" 
                          className="text-sm underline">
                        Live Site
                    </Link>
                </div>
            </div>
        </div>
    );
} 