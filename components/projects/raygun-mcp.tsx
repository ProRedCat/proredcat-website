import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function RaygunMCPProject() {
    const tags = ["TypeScript", "MCP", "LLM Integration", "Raygun API", "Claude"];
    const releaseDate = new Date(2024, 10, 29); // December 18, 2024 from the blog post

    return (
        <div className="flex flex-col w-full h-[480px] shadow-lg rounded-b-3xl">
            <div className="relative w-full h-52 bg-[#001B2E]">
                <Image
                    src="/projects/raygun-mcp/mcp-feature-image.webp"
                    alt="Raygun MCP Server Architecture"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain rounded-t-lg p-2"
                    priority={true}
                />
            </div>
            
            <div className="p-5 pt-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href="https://github.com/MindscapeHQ/mcp-server-raygun"
                          className="text-xl font-semibold line-clamp-2 block">
                        Raygun MCP Server
                    </Link>
                    <p className="text-sm opacity-70">
                        Released: {format(releaseDate, 'MMMM d, yyyy')}
                    </p>
                </div>

                <hr/>

                <p className="mb-4 flex-grow line-clamp-3 pt-2">
                    One of the first Model Context Protocol (MCP) servers, enabling AI agents like Claude to interact with Raygun&apos;s API. 
                    Built within days of MCP&apos;s release, it provides comprehensive access to crash reporting, performance data, and error analytics through a standardized AI interface.
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
                    <Link href="https://github.com/MindscapeHQ/mcp-server-raygun" 
                          className="text-sm underline">
                        GitHub
                    </Link>
                    <Link href="https://raygun.com/blog/announcing-mcp/" 
                          className="text-sm underline">
                        Blog Post
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=E5-amUeXyXk" 
                          className="text-sm underline">
                        Demo Video
                    </Link>
                </div>
            </div>
        </div>
    );
} 