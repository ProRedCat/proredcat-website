import { format } from "date-fns";
import Link from "next/link";

export default function ProjectsPage() {
    const tags = ["Alexa", "TypeScript", "AWS", "Lambda", "Vite"];
    const releaseDate = new Date(2024, 9, 10);

    return (
        <div className="flex justify-center mt-4 w-full">
            <div className="w-4/6 shadow-2xl p-6 rounded-xl h-fit">
                <h1 className="text-2xl font-bold text-primary-navy-dark">Wellington Public Transport: Alexa Skill</h1>

                <div className="flex pt-2">
                    <p className="pr-2">Status:</p>
                    <div className="px-3 py-1 bg-primary-green-dark text-primary-cream text-sm rounded-lg">
                        Completed
                    </div>
                </div>
                <p className="text-sm text-gray-500">Launched: {format(releaseDate, 'MMMM d, yyyy')}</p>

                <div className="flex gap-2">
                    <p>Links:</p>
                    <Link href="https://www.amazon.com.au/dp/B0D2DN6DX9/" className="underline">Alexa Skill Store</Link>
                    <Link href="/blog/alexa-skill-announcement-wellington-transport"
                          className="underline">Blogpost</Link>
                </div>

                <hr className="mt-2"/>

                <div className="mt-4 text-base text-gray-700">
                    <p className="text-lg">Description:</p>
                    <p>
                        This project involved developing an Alexa Skill that provides real-time public transport
                        information for Wellington. The skill optimizes performance within Alexa’s free tier, ensuring
                        fast response times by reducing network calls and leveraging caching.
                    </p>
                    <p className="mt-2">
                        It enhances accessibility by offering a voice-activated solution, particularly benefiting users
                        with low vision. Key technical achievements include optimizing the code to meet execution time
                        limits, minimizing file sizes, and using error handling patterns for a smooth user experience.
                    </p>
                    <p className="mt-2">
                        The project showcases expertise in TypeScript, API integration, and performance optimization.
                    </p>
                </div>

                <hr className="mt-2"/>

                <div className="mt-4">
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
